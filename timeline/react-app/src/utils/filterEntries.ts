import type { TimelineEntry } from '../types'

export function filterEntries(entries: TimelineEntry[], activeFilters: Set<string>): TimelineEntry[] {
  if (activeFilters.size === 0) return entries
  return entries.filter(entry =>
    [...activeFilters].some(filter =>
      entry.tags.some(tag => tag === filter || tag.startsWith(filter + '/'))
    )
  )
}

export function groupByMonth(entries: TimelineEntry[]): { monthKey: string; label: string; entries: TimelineEntry[] }[] {
  const map = new Map<string, TimelineEntry[]>()
  for (const entry of entries) {
    const [year, month] = entry.date.split('-')
    const key = `${year}-${month}`
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(entry)
  }
  return [...map.entries()].map(([key, entries]) => {
    const [year, month] = key.split('-')
    const label = new Date(Number(year), Number(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' })
    return { monthKey: key, label, entries }
  })
}
