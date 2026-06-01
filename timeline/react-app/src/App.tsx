import { useState } from 'react'
import { useTimelineData } from './hooks/useTimelineData'
import { filterEntries, groupByMonth } from './utils/filterEntries'
import { Layout } from './components/Layout'
import { TagFilterSidebar } from './components/TagFilterSidebar'
import { TimelineMonth } from './components/TimelineMonth'

function App() {
  const { entries, tagTree, loading, error } = useTimelineData()
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set())

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

  if (loading) return <div className="status-message">Loading...</div>
  if (error) return <div className="status-message error">Error: {error}</div>

  const filtered = filterEntries(entries, activeFilters)
  const months = groupByMonth(filtered)

  return (
    <Layout
      sidebar={
        <TagFilterSidebar
          tagTree={tagTree}
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
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
  )
}

export default App
