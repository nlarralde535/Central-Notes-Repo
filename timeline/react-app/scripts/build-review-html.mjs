import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'

const __dirname = dirname(fileURLToPath(import.meta.url))
const NOTES_DIR = join(__dirname, '..', '..', '..', '4-Repo')
const OUT_DIR = join(__dirname, '..', 'public', 'daily-review')
const MANIFEST_PATH = join(OUT_DIR, 'manifest.json')

// Explicit manifest: order is significant, it is the order of the carousel.
const REVIEW_NOTES = [
  'What To Do.md',
  'How To Be.md',
  'Policy Positions.md',
  'Openings.md',
  'Test Questions.md',
]

// marked emits plain <a href>; open external links in a new tab the way
// EntryContent does. Set after sanitization so the attributes survive.
DOMPurify.addHook('afterSanitizeAttributes', node => {
  if (node.tagName === 'A' && node.hasAttribute('href')) {
    node.setAttribute('target', '_blank')
    node.setAttribute('rel', 'noopener noreferrer')
  }
})

// YAML parses an unquoted `createdDate: 2026-02-15` into a Date; normalise both
// that and a plain string down to YYYY-MM-DD without a timezone shift.
function isoDate(value) {
  if (!value) return ''
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value).trim().slice(0, 10)
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Wipe the directory so a renamed or removed note leaves no stale HTML behind.
rmSync(OUT_DIR, { recursive: true, force: true })
mkdirSync(OUT_DIR, { recursive: true })

const notes = []
const warnings = []

for (const fname of REVIEW_NOTES) {
  const path = join(NOTES_DIR, fname)
  if (!existsSync(path)) {
    warnings.push(`${fname}: not found in 4-Repo/, skipped`)
    continue
  }

  const { data, content: body } = matter(readFileSync(path, 'utf-8'))

  const title = fname.replace(/\.md$/, '')
  const id = slugify(title)
  const tags = Array.isArray(data.tags) ? data.tags : []
  const createdDate = isoDate(data.createdDate)

  if (!body.trim()) warnings.push(`${fname}: empty body`)

  const html = DOMPurify.sanitize(marked.parse(body), { ADD_ATTR: ['target'] })
  const file = `${id}.html`
  writeFileSync(join(OUT_DIR, file), html)

  notes.push({ id, title, file, tags, createdDate })
}

writeFileSync(MANIFEST_PATH, JSON.stringify(notes, null, 2))

console.log(`build-review-html: wrote ${notes.length} notes to public/daily-review/`)
if (warnings.length > 0) {
  console.warn(`\nWarnings (${warnings.length}):`)
  warnings.forEach(w => console.warn(' ', w))
}
