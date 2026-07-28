import { useState } from 'react'
import { useTimelineData } from './hooks/useTimelineData'
import { useReviewData } from './hooks/useReviewData'
import { filterEntries, groupByMonth } from './utils/filterEntries'
import { pickRandom } from './utils/randomSelection'
import { Layout } from './components/Layout'
import { TagFilterSidebar } from './components/TagFilterSidebar'
import { TimelineMonth } from './components/TimelineMonth'
import { MorningNewspaper } from './components/MorningNewspaper'
import { DailyReview } from './components/DailyReview'
import type { TimelineEntry } from './types'

function App() {
  const { entries, tagTree, loading, error } = useTimelineData()
  const { notes, loading: reviewLoading, error: reviewError } = useReviewData()
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set())
  const [newspaper, setNewspaper] = useState<TimelineEntry[] | null>(null)
  const [dailyReview, setDailyReview] = useState(false)

  function toggleFilter(path: string) {
    setActiveFilters(prev => {
      const next = new Set(prev)
      if (next.has(path)) {
        next.delete(path)
      } else {
        next.add(path)
      }
      return next
    })
  }

  function openNewspaper() { setNewspaper(pickRandom(entries)) }
  function closeNewspaper() { setNewspaper(null) }

  function openDailyReview() { setDailyReview(true) }
  function closeDailyReview() { setDailyReview(false) }

  if (loading) return <div className="status-message">Loading...</div>
  if (error) return <div className="status-message error">Error: {error}</div>

  const filtered = filterEntries(entries, activeFilters)
  const months = groupByMonth(filtered)

  return (
    <>
      <Layout
        sidebar={
          <TagFilterSidebar
            tagTree={tagTree}
            activeFilters={activeFilters}
            onToggleFilter={toggleFilter}
            onOpenNewspaper={openNewspaper}
            newspaperDisabled={entries.length === 0}
            onOpenDailyReview={openDailyReview}
            dailyReviewDisabled={reviewLoading || !!reviewError || notes.length === 0}
          />
        }
        main={
          months.length === 0
            ? <p className="status-message">No entries match the selected filters.</p>
            : months.map(({ monthKey, label, entries }) => (
                <TimelineMonth key={monthKey} label={label} entries={entries} />
              ))
        }
      />
      {newspaper && <MorningNewspaper entries={newspaper} onClose={closeNewspaper} />}
      {dailyReview && <DailyReview notes={notes} onClose={closeDailyReview} />}
    </>
  )
}

export default App
