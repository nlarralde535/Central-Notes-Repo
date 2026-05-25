import { useEffect, useMemo, useState } from 'react'
import type { TimelineEntry, TagTreeNode } from '../types'
import { buildTagTree } from '../utils/tagTree'

interface UseTimelineDataResult {
  entries: TimelineEntry[]
  tagTree: TagTreeNode[]
  loading: boolean
  error: string | null
}

export function useTimelineData(): UseTimelineDataResult {
  const [entries, setEntries] = useState<TimelineEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}timeline-data.json`)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then((data: TimelineEntry[]) => {
        setEntries(data)
        setLoading(false)
      })
      .catch((e: Error) => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  const tagTree = useMemo(() => {
    const tagSet = new Set<string>()
    entries.forEach(e => e.tags.forEach(t => tagSet.add(t)))
    return buildTagTree([...tagSet].sort())
  }, [entries])

  return { entries, tagTree, loading, error }
}
