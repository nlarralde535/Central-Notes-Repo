# Plan: Note Refactor — Option 1B

## Context

The 76 markdown notes in `timeline/timeline_entries/` currently use two incompatible body formats (`++TITLE++`/`++DESCRIPTION++`/`++REFERENCES++` markers and a legacy `TAG:`/`DESCRIPTION`/`LINKS` format). The goal is to migrate all notes to Option 1B: structured YAML frontmatter (`title:`, `references:` array) with prose body organized into `## Source Name` sections that the React build script can parse without custom marker detection.

This refactor is a prerequisite for `scripts/build-data.mjs` in the React SPA (see `~/.claude/plans/zany-orbiting-yeti.md`). After migration, `timeline/timeline.py` will break — this is expected, as it will be replaced by the Vite/React build.

---

## Scope

**76 files** in `timeline/timeline_entries/`, grouped by migration complexity:

| Group | Count | Description |
|---|---|---|
| A — NEW, single ref | 38 | `++TITLE++` format, 1 reference — fully scriptable |
| B — NEW, multi-ref, no dividers | 24 | `++TITLE++` format, 2+ refs, one shared description block |
| C — NEW, multi-ref, with dividers | 4 | `++TITLE++` format, `---` mid-body dividers separating source content |
| D — NEW_MIXED | 2 | Missing `++TITLE++` or typo (`++TITLE+`) |
| E — LEGACY / LEGACY_UNLABELED | 9 | `TAG:`/`DESCRIPTION`/`LINKS` format — manual-heavy |

**Reference distribution:** 38 files have 1 ref · 21 have 2 · 9 have 3 · 1 has 4 · 1 has 5

---

## Target Format (Option 1B)

```markdown
---
tags:
  - currentevent
  - Note/CurrentEvents/Politics/ForeignPolicy/LatinAmerica
aliases:
  - _template
createdDate: 2026-03-21
title: "Cuban fuel shortage due to US blockade..."
references:
  - source: "NPR"
    url: "https://www.npr.org/..."
  - source: "PBS News Hour"
    url: "https://www.pbs.org/..."
---

## NPR

Full prose content here (all description under first source for shared blocks).

## PBS News Hour

(empty — redistribute content manually if applicable)
```

---

## Critical Files

| Path | Role |
|---|---|
| `timeline/timeline_entries/*.md` | Source files to be migrated (76 total) |
| `timeline/scripts/migrate-to-option-1b.mjs` | Migration script to create |
| `~/.claude/plans/zany-orbiting-yeti.md` | Downstream plan; defines parsing expectations for `build-data.mjs` |

---

## Migration Script

**Location:** `timeline/scripts/migrate-to-option-1b.py`

Run once: `python3 timeline/scripts/migrate-to-option-1b.py`

> Note: Written in Python (not Node) because Node was unavailable in this environment.

Writes transformed files back in place. Prints a summary report listing:
- Files migrated successfully
- Files flagged for manual review (Groups C, D, E)

**Result when run:** 55 files migrated automatically; 21 flagged for manual review (see Manual Review Steps below).

### What the script does

**Step 1 — Parse each file with stdlib `re`**

**Step 2 — Detect format:**
- Contains `++TITLE++` → NEW (Groups A–C)
- Missing `++TITLE++` but has `++DESCRIPTION++` → NEW_MIXED (Group D)
- Contains `TAG:` or bare `DESCRIPTION`/`LINKS` headers → LEGACY (Group E)

**Step 3 — Extract fields (NEW format):**
- `++TITLE++` block → `title:` in YAML frontmatter
- `++REFERENCES++` block → parse each non-empty line as `Source Label: URL`; build `references:` YAML array
- `++DESCRIPTION++` block → prose body content

**Step 4 — Parse references line format:**
```
NPR: https://www.npr.org/...
```
Split on first `: ` to get `source` and `url`. Lines without `: ` are treated as continuation labels and skipped (flagged in report).

**Step 5 — Build body (Groups A and B):**
- All prose content goes under `## {references[0].source}`
- Remaining references get empty `## {source}` stubs

**Step 6 — Group C (mid-body dividers):** Flag for manual review — do not auto-assign. Print the file path and reference count so the content can be manually mapped to the correct source sections. The 4 affected files:
- `2026-01-30-015723.md` (2 refs, 1 divider)
- `2026-03-16-022335.md` (2 refs, 1 divider)
- `2026-03-02-084820.md` (4 refs, 2 dividers)
- *(4th file from survey — verify in script output)*

**Step 7 — Groups D and E:** Flag for manual review. Script does not transform these files; prints the file path and detected format so they can be handled individually.

---

## Manual Review Steps

After the script runs:

**NEW_DIVIDER (9 files — mid-body dividers):**
The `---` dividers within the description block suggest content attribution by source. For each file:
1. Open the file, identify each `---`-separated prose block
2. Match each block to a reference source by reading the content
3. Move each block under its corresponding `## Source Name` section, then delete the `---` dividers
4. Run the migration script again on each file after editing — it will now migrate cleanly

Files:
- `2025-11-13-091021.md`
- `2026-01-30-015723.md`
- `2026-02-10-084251.md`
- `2026-02-20-082019.md`
- `2026-03-02-084820.md`
- `2026-03-13-100017.md`
- `2026-03-16-022335.md`
- `2026-03-19-082648.md`
- `2026-03-25-070913.md`

**NEW_MIXED (2 files — malformed NEW format):**
- `2026-02-06-070803.md` — missing `++TITLE++`; add a title line after `++TITLE++`, then re-run script
- `2026-03-04-084236.md` — `++TITLE+` typo (one `+` missing); fix the marker, then re-run script

**NEW_NOTITLE (1 file — empty title):**
- `2026-03-22-070553.md` — `++TITLE++` block is blank; write the title into the block, then re-run script

**LEGACY (7 files — old TAG:/DESCRIPTION/LINKS format):**
For each file:
1. Write `title:` into YAML frontmatter (derive from first sentence of DESCRIPTION or write fresh)
2. Convert `LINKS` entries to `references:` YAML array — each entry has a label line(s) then a URL line
3. Remove the `TAG:` line (duplicates YAML tags)
4. Replace `DESCRIPTION` header and `LINKS` header with `## Source Name` sections

Files:
- `2025-09-17-045508.md`
- `2025-10-26-023411.md`
- `2025-11-14-021911.md`
- `2025-11-14-025814.md`
- `2025-11-18-020731.md`
- `2025-11-24-042050.md`
- `2025-12-11-031048.md`

**LEGACY_UNLABELED (2 files — similar to LEGACY, no TAG: line):**
Same steps as LEGACY. Review carefully — one of these (`2026-02-01-121840.md`) appears to be empty/placeholder content.
- `2025-12-30-065129.md`
- `2026-02-01-121840.md`

**All migrated multi-reference files (Groups A/B with 2+ refs):**
The first reference got all description content; remaining references have empty stubs. Open each file and verify whether description content genuinely belongs to the first source only, or redistribute as needed.

---

## Migration Order

1. Run script → handle Group A and B automatically
2. Manually fix Group D (2 files — quick)
3. Manually fix Group C (4 files — content redistribution)
4. Manually fix Group E (9 files — most complex)
5. Spot-check 5–10 files from Group A/B visually in Obsidian

---

## Verification

- All 76 files have `title:` in YAML frontmatter (non-empty)
- All 76 files have `references:` as a YAML array with at least one `source:` and `url:`
- No file body contains `++TITLE++`, `++DESCRIPTION++`, `++REFERENCES++`, `TAG:`, or bare `DESCRIPTION`/`LINKS` headers
- Every `## Source Name` in the body matches a `source:` value in the `references:` array
- Open 5+ files in Obsidian — headings render correctly; no stray markers
- `gray-matter(file).data.title` and `.data.references` are populated for a test sample
