#!/usr/bin/env python3
"""
Migrates timeline_entries notes to Option 1B format:
  - YAML frontmatter gains `title:` and `references:` array
  - Body prose organized into ## Source Name sections

Run from repo root:  python3 timeline/scripts/migrate-to-option-1b.py
"""

import re
import sys
from pathlib import Path

ENTRIES_DIR = Path(__file__).parent.parent / 'timeline_entries'


def split_frontmatter(content):
    """Return (frontmatter_raw, body) or (None, content) if no frontmatter."""
    lines = content.split('\n')
    if not lines or lines[0].strip() != '---':
        return None, content
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            frontmatter_raw = '\n'.join(lines[1:i])
            body = '\n'.join(lines[i + 1:])
            return frontmatter_raw, body
    return None, content


def detect_format(body):
    if '++TITLE++' in body:
        return 'NEW'
    if '++DESCRIPTION++' in body or '++LINKS++' in body:
        return 'NEW_MIXED'
    if re.search(r'^TAG:', body, re.MULTILINE):
        return 'LEGACY'
    if re.search(r'^DESCRIPTION\s*$', body, re.MULTILINE):
        return 'LEGACY_UNLABELED'
    return 'UNKNOWN'


def extract_block(body, marker):
    """Extract content between ++MARKER++ and the next ++...++ or end of string."""
    pattern = rf'\+\+{re.escape(marker)}\+\+[ \t]*\n(.*?)(?=\+\+[A-Z]+\+\+|\Z)'
    match = re.search(pattern, body, re.DOTALL)
    return match.group(1).strip() if match else ''


def has_mid_body_divider(description):
    """Check for --- horizontal rules within the description block."""
    return bool(re.search(r'^\-{3,}\s*$', description, re.MULTILINE))


def parse_references(refs_text):
    """Parse 'Source Label: https://url' lines into list of dicts."""
    references = []
    unparsed = []
    for line in refs_text.splitlines():
        line = line.strip()
        if not line:
            continue
        match = re.match(r'^(.+?):\s+(https?://\S+)\s*$', line)
        if match:
            references.append({
                'source': match.group(1).strip(),
                'url': match.group(2).strip()
            })
        else:
            unparsed.append(line)
    return references, unparsed


def yaml_str(value):
    """Wrap a string in double quotes, escaping backslashes and double quotes."""
    escaped = value.replace('\\', '\\\\').replace('"', '\\"')
    return f'"{escaped}"'


def build_title_line(title):
    return f'title: {yaml_str(title)}'


def build_references_block(references):
    if not references:
        return 'references: []'
    lines = ['references:']
    for ref in references:
        lines.append(f'  - source: {yaml_str(ref["source"])}')
        lines.append(f'    url: {yaml_str(ref["url"])}')
    return '\n'.join(lines)


def build_body(description, references):
    """
    First reference gets all description content.
    Remaining references get empty stubs.
    """
    if not references:
        return description + '\n'

    parts = [f'## {references[0]["source"]}', '']
    if description:
        parts.append(description)

    for ref in references[1:]:
        parts.extend(['', f'## {ref["source"]}'])

    return '\n'.join(parts) + '\n'


def migrate_file(filepath):
    """
    Attempt to migrate one file in place.
    Returns (migrated: bool, tag: str, note: str)
    """
    content = filepath.read_text(encoding='utf-8')
    frontmatter_raw, body = split_frontmatter(content)

    if frontmatter_raw is None:
        return False, 'NO_FM', 'no frontmatter found'

    fmt = detect_format(body)

    if fmt != 'NEW':
        return False, fmt, 'manual review required'

    description = extract_block(body, 'DESCRIPTION')

    if has_mid_body_divider(description):
        return False, 'NEW_DIVIDER', 'mid-body --- dividers — manual review required'

    title = extract_block(body, 'TITLE')
    if not title:
        return False, 'NEW_NOTITLE', 'empty title — manual review required'

    refs_text = extract_block(body, 'REFERENCES') or extract_block(body, 'LINKS')
    references, unparsed = parse_references(refs_text)

    # Build new frontmatter
    new_fm = frontmatter_raw.rstrip()
    new_fm += '\n' + build_title_line(title)
    new_fm += '\n' + build_references_block(references)

    new_content = f'---\n{new_fm}\n---\n\n{build_body(description, references)}'
    filepath.write_text(new_content, encoding='utf-8')

    note = f'{len(references)} ref(s)'
    if unparsed:
        note += f'; {len(unparsed)} unparsed ref line(s): {unparsed}'
    return True, 'NEW', note


def main():
    files = sorted(ENTRIES_DIR.glob('*.md'))
    print(f'Scanning {len(files)} files in {ENTRIES_DIR}...\n')

    migrated = []
    flagged = []

    for filepath in files:
        ok, tag, note = migrate_file(filepath)
        entry = (filepath.name, tag, note)
        (migrated if ok else flagged).append(entry)

    print(f'MIGRATED ({len(migrated)}):')
    for name, tag, note in migrated:
        print(f'  {name}  [{note}]')

    print(f'\nFLAGGED FOR MANUAL REVIEW ({len(flagged)}):')
    for name, tag, note in flagged:
        print(f'  {name}  [{tag}]  {note}')

    if flagged:
        sys.exit(1)


if __name__ == '__main__':
    main()
