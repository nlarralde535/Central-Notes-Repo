import { useEffect, useState } from 'react'
import type { ReviewNote, ReviewNoteMeta } from '../types'

interface UseReviewDataResult {
  notes: ReviewNote[]
  loading: boolean
  error: string | null
}

// Fetches the Daily Review manifest, then the HTML fragment for each note it
// lists. Never gates the app: on failure the Daily Review button is disabled
// and the timeline renders as usual.
export function useReviewData(): UseReviewDataResult {
  const [notes, setNotes] = useState<ReviewNote[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const base = `${import.meta.env.BASE_URL}daily-review/`

    async function load() {
      const manifestRes = await fetch(`${base}manifest.json`)
      if (!manifestRes.ok) throw new Error(`HTTP ${manifestRes.status}`)
      const manifest: ReviewNoteMeta[] = await manifestRes.json()

      return Promise.all(
        manifest.map(async meta => {
          const res = await fetch(`${base}${meta.file}`)
          if (!res.ok) throw new Error(`HTTP ${res.status} for ${meta.file}`)
          return { ...meta, html: await res.text() }
        })
      )
    }

    load()
      .then(loaded => {
        setNotes(loaded)
        setLoading(false)
      })
      .catch((e: Error) => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  return { notes, loading, error }
}
