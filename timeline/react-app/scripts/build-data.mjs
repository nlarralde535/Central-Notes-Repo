import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import matter from 'gray-matter'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ENTRIES_DIR = join(__dirname, '..', '..', 'timeline_entries')
const OUT_PATH = join(__dirname, '..', 'public', 'timeline-data.json')

mkdirSync(join(__dirname, '..', 'public'), { recursive: true })

const files = readdirSync(ENTRIES_DIR)
  .filter(f => f.endsWith('.md'))
  .sort()
  .reverse()

const entries = []
const warnings = []

for (const fname of files) {
  const raw = readFileSync(join(ENTRIES_DIR, fname), 'utf-8')
  const { data, content: body } = matter(raw)

  const id = fname.replace('.md', '')
  const date = id.slice(0, 10)

  const title = data.title ? String(data.title).trim() : ''
  if (!title) warnings.push(`${fname}: missing title`)

  const references = Array.isArray(data.references) ? data.references : []
  if (references.length === 0) warnings.push(`${fname}: no references`)

  const tags = Array.isArray(data.tags)
    ? data.tags.filter(t => t !== 'currentevent')
    : []

  // Split body on # or ## headers; odd indices are headers, even are content
  const parts = body.split(/^(#{1,2} .+)$/m).filter(s => s.trim())
  const contentSections = []

  for (let i = 0; i < parts.length; i += 2) {
    const headerLine = parts[i]?.trim()
    const content = parts[i + 1]?.trim() ?? ''
    if (!headerLine) continue

    const headerMatch = headerLine.match(/^#{1,2} (.+)$/)
    if (!headerMatch) continue

    const sourceName = headerMatch[1].trim()
    const refIndex = references.findIndex(r => r.source === sourceName)
    if (refIndex === -1) {
      warnings.push(`${fname}: header "${sourceName}" not found in references`)
      continue
    }

    contentSections.push({ referenceIndex: refIndex, content })
  }

  entries.push({ id, date, title, tags, references, contentSections })
}

writeFileSync(OUT_PATH, JSON.stringify(entries, null, 2))

console.log(`build-data: wrote ${entries.length} entries to public/timeline-data.json`)
if (warnings.length > 0) {
  console.warn(`\nWarnings (${warnings.length}):`)
  warnings.forEach(w => console.warn(' ', w))
}
