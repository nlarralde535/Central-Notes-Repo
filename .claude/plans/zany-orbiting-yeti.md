# Plan: React SPA Timeline

## Context

The repo currently uses a Python script (`timeline/timeline.py`) to build a static HTML page from 76 markdown notes in `timeline/timeline_entries/`. The output is deployed to GitHub Pages. The goal is to replace this with a React single-page app that renders the same data in a vertical timeline with interactive tag-based filtering.

---

## Critical Files

| File | Status | Notes |
|---|---|---|
| `timeline/timeline_entries/*.md` | Read-only source | 76 entries, parsed at build time |
| `.github/workflows/update_timeline.yml` | Modify | Replace Python build with Node/React build |
| `timeline/react-app/` | Create | Entire React app lives here |
| `timeline/pages/` | Output dir | Vite writes here; Pages workflow uploads this |

---

## Data Shape

Each markdown entry has:
- **Filename**: `YYYY-MM-DD-HHmmss.md` — sort key
- **Frontmatter**: `tags: [currentevent, Note/CurrentEvents/<path>]`, `createdDate`
- **Body (new format)**: `++TITLE++` / `++DESCRIPTION++` / `++REFERENCES++` sections
- **Body (legacy format)**: ~11 older entries use `TAG:` / `DESCRIPTION` / `LINKS` labels
- Filter on the `tags` field (confirmed); strip the universal `currentevent` tag

---

## Architecture

**Toolchain**: Vite + React + TypeScript. No CRA. No Next.js.

**Data pipeline**: A `prebuild` Node script reads all markdown files at build time, parses them with `gray-matter`, normalizes both body formats, and emits `public/timeline-data.json`. The React app fetches this single JSON file on mount — one request, works on GitHub Pages.

**Vite config**: `base` set to match the GitHub Pages repo path. `outDir` pointed to `../pages` so the existing workflow artifact upload path (`./timeline/pages`) requires no changes.

---

## Project Structure

```
timeline/react-app/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── scripts/
│   └── build-data.mjs        # Prebuild: reads entries, emits public/timeline-data.json
├── public/
│   └── timeline-data.json    # Generated at build time; NOT committed
└── src/
    ├── main.tsx
    ├── App.tsx               # Owns activeFilters state
    ├── types.ts              # TimelineEntry, TagTreeNode, FilterState
    ├── hooks/
    │   └── useTimelineData.ts
    ├── components/
    │   ├── TagFilterSidebar/
    │   │   ├── index.tsx
    │   │   ├── TagTreeNode.tsx      # Recursive; parent selects all children
    │   │   └── ActiveFilterChips.tsx
    │   ├── TimelineMonth/
    │   │   ├── index.tsx            # Sticky month/year header
    │   │   └── TimelineEntry/
    │   │       └── index.tsx        # Collapsed by default; click to expand
    │   └── Layout/
    │       └── index.tsx            # Two-column: sidebar + scrollable main
    └── utils/
        ├── tagTree.ts        # Build tree from flat tag strings
        └── filterEntries.ts  # Entry matches if any tag startsWith active filter path
```

---

## Implementation Steps

### Phase 1 — Scaffolding
1. `cd timeline && npm create vite@latest react-app -- --template react-ts`
2. Remove Vite's placeholder `src/` content
3. `npm install -D gray-matter` (prebuild only, not bundled)
4. Set `base` and `outDir: '../pages'` in `vite.config.ts`
5. Verify `npm run build` exits 0 and `timeline/pages/index.html` exists

### Phase 2 — Data pipeline (`scripts/build-data.mjs`)
6. Read all `.md` files from `../../timeline_entries/`
7. For each file:
   - Extract date from filename for sort key
   - Parse frontmatter with `gray-matter` → get `tags[]`
   - Detect body format: `body.includes('++TITLE++')` → new; else → legacy
   - Parse title, description, references[] from body
   - Strip `currentevent` from tags; keep `Note/CurrentEvents/...` paths
8. Sort descending by filename date; write `public/timeline-data.json`
9. **Manually verify**: spot-check 3–4 legacy-format entries in the JSON output

### Phase 3 — Core components
10. Define `src/types.ts` first
11. Write `useTimelineData` hook (fetch JSON → derive `allTags`, build `tagTree`)
12. Write `tagTree.ts`: split paths by `/`, build nested tree
13. Write `filterEntries.ts`: match if `entry.tags.some(t => t.startsWith(filter))`
14. Build `TimelineEntry` → `TimelineMonth` → wire into `Layout`
15. Build `TagFilterSidebar` with recursive `TagTreeNode`
16. Wire state in `App.tsx`: `activeFilters: Set<string>`, pass down as props

### Phase 4 — Styling
17. CSS modules per component; newest-first vertical scroll; sticky month headers; collapsed entry cards that expand on click; sticky sidebar

### Phase 5 — CI/CD
18. Update `.github/workflows/update_timeline.yml`: replace `setup-python` + `python timeline/timeline.py` steps with `setup-node` + `npm ci` + `npm run build` (in `working-directory: timeline/react-app`)
19. The `upload-pages-artifact` step (`path: ./timeline/pages`) and `deploy` job remain unchanged

---

## Key Implementation Details

**`package.json` scripts**:
```json
{
  "prebuild": "node scripts/build-data.mjs",
  "build": "tsc --noEmit && vite build",
  "dev": "node scripts/build-data.mjs && vite"
}
```

**Filter logic**: Selecting `Politics` in the sidebar matches any entry tagged `Politics/Domestic/Immigration`, `Politics/Foreign/Israel`, etc. (prefix match). Selecting a parent node auto-selects all children visually. `activeFilters` stores the clicked path; empty set = show all.

**Legacy format detection**: `if (body.includes('++TITLE++'))` → new format; else → legacy. Fall back to filename-derived date as title if parsing fails.

**`createdDate` vs filename date**: Use filename date as the authoritative sort key and display date. `createdDate` reflects event date (different from note creation) — ignore for sorting.

**Content sections rendering**: Each `contentSection` in the timeline-data.json includes `referenceIndex`. In the React `TimelineEntry` component, render the source name header as a clickable link to the reference URL:
```jsx
{entry.contentSections?.map((section) => (
  <div key={section.referenceIndex}>
    <h3>
      <a href={entry.references[section.referenceIndex].url} target="_blank" rel="noopener noreferrer">
        {entry.references[section.referenceIndex].source}
      </a>
    </h3>
    <p>{section.content}</p>
  </div>
))}
```
This makes each reference source name clickable, allowing users to visit the original source directly from the timeline entry.

---

## Note Format Recommendations

The 76 entries use two incompatible body formats, which complicates the `build-data.mjs` parser. Three alternatives were evaluated; **Option 1 is recommended**.

### Current formats (pain points)
- **New** (~65 entries): `++TITLE++` / `++DESCRIPTION++` / `++REFERENCES++` — non-standard markers no library understands
- **Legacy** (~11 entries): `TAG:` / `DESCRIPTION` / `LINKS` — alternating label/URL lines, no title field, duplicates YAML `tags`
- Both require branching parse logic; occasional stray `---` dividers appear mid-body

### Option 1B — Structured frontmatter + reference-keyed prose sections (Recommended)

Move `title` and `references` into YAML frontmatter; body becomes prose sections, each keyed to a reference by markdown header.

```markdown
---
tags:
  - currentevent
  - Note/CurrentEvents/Politics/ForeignPolicy/LatinAmerica
createdDate: 2026-03-21
title: "Cuban fuel shortage due to US blockade..."
references:
  - source: "NPR"
    url: "https://www.npr.org/2026/02/10/nx-s1-5707553/..."
  - source: "PBS News Hour"
    url: "https://www.pbs.org/newshour/politics/trump-threatens-tariffs-..."
---

## NPR

The U.S. has had an embargo on Cuba for decades. But the Trump administration has tightened the screws, and its latest move is designed to starve the island of fuel. After the U.S. took military action in Venezuela, it stopped oil shipments from there. Mexico then became the biggest provider of oil to Cuba, and then President Trump tacitly threatened Mexico, saying any country shipping oil to Cuba would face tariffs. According to Cuban President Miguel Diaz-Canel, Cuba hasn't received an oil shipment since December.

## PBS News Hour

President Donald Trump on Thursday signed an executive order that would impose a tariff on any goods from countries that sell or provide oil to Cuba, a move that could further cripple an island plagued by a deepening energy crisis. The order would primarily put pressure on Mexico, a government that has acted as an oil lifeline for Cuba and has constantly voiced solidarity for the U.S. adversary even as Mexican President Claudia Sheinbaum has sought to build a strong relationship with Trump.
```

**How it works:**
- Each markdown header (## Source Name) marks the start of a prose section for that reference
- The build script matches each header against `references[].source` to find the corresponding reference index
- Multiple paragraphs under one header are grouped as a single content block
- `gray-matter(file)` returns `data.title`, `data.tags`, `data.references[]`, and the body is parsed into sections keyed by reference

**Parsing in build-data.mjs:**
```javascript
const body = matter(fileContent).content;
const sections = body.split(/^(#{1,6}\s+.+)$/m).filter(Boolean);
const contentSections = [];

for (let i = 0; i < sections.length; i += 2) {
  const header = sections[i];
  const content = sections[i + 1]?.trim();
  
  const match = header.match(/^#{1,6}\s+(.+)$/);
  if (match) {
    const sourceText = match[1].trim();
    const refIndex = references.findIndex(r => r.source === sourceText);
    if (refIndex !== -1) {
      contentSections.push({ referenceIndex: refIndex, content });
    }
  }
}
```

**Benefits:**
- References stay as a simple YAML array (easy to iterate in React)
- Markdown headers naturally delimit content blocks and look clean in Obsidian
- Source names are human-readable and resilient to reference reordering
- Multi-paragraph content under one header stays grouped
- Easy to disambiguate if a source is cited multiple times: `## NPR (Background)` and `## NPR (Updates)`
- React component can render section headers with links to the corresponding reference

### Option 2 — Standard `##` markdown headings

Replace `++MARKER++` with `##` section headings. Any markdown library splits on headings; references become `[label](url)` links (clickable in Obsidian natively).

```markdown
---
tags: [currentevent, Note/CurrentEvents/Politics/Domestic/Immigration]
createdDate: 2026-04-01
---
## Title
DHS pauses plans to buy warehouses...

## Description
The Department of Homeland Security is pausing plans...

## References
- [NBC News](https://www.nbcnews.com/...)
```

### Option 3 — All data in YAML (full frontmatter schema)

Description moves into YAML as a block scalar; file body is empty. `gray-matter(file).data` returns a plain object — no body processing at all. Simplest parsing, but editing long prose inside YAML is uncomfortable and loses Obsidian spellcheck affordances.

```markdown
---
tags: [currentevent, Note/CurrentEvents/Politics/Domestic/Immigration]
createdDate: 2026-04-01
title: "DHS pauses plans to buy warehouses..."
description: |
  The Department of Homeland Security is pausing plans...
references:
  - source: "NBC News"
    url: "https://www.nbcnews.com/..."
---
```

### Migration note

Adopting Option 1B requires:
1. Adding `title:` and `references:` (with `source` and `url`) to YAML frontmatter
2. Removing `++TITLE++`, `++DESCRIPTION++`, and `++REFERENCES++` markers from the body
3. Restructuring body content into markdown sections, each header matching a reference source name

This can be partially automated: extract `++TITLE++` / `++REFERENCES++` content into frontmatter, then manually organize prose into reference-keyed sections. For the 76 entries, aim to batch migrate ~10–15 per pass, verifying section associations as you go.

---

## Verification Checklist

- [ ] `npm run build` produces `timeline/pages/index.html` + hashed JS/CSS assets
- [ ] `public/timeline-data.json` contains all 76 entries with correctly parsed `contentSections`
- [ ] All entries have frontmatter `title`, `references[]`, and markdown section headers matching reference source names
- [ ] Entries with multiple references have separate prose sections for each, keyed by source name
- [ ] Deployed app loads with no console errors (asset base path correct)
- [ ] Filtering by `Politics` matches `Politics/Domestic/Immigration` entries
- [ ] Filtering by `Politics/Domestic` does NOT match `Politics/Foreign/Israel`
- [ ] Clicking a parent node in the sidebar selects all child paths
- [ ] Month grouping correct; newest entries at top
- [ ] Entry cards expand/collapse on click
- [ ] GitHub Actions workflow succeeds end-to-end after pushing a new `.md` file
- [ ] Python build step is gone from CI
