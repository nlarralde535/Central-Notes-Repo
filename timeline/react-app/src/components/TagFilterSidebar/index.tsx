import { useState } from 'react'
import type { TagTreeNode as Node } from '../../types'
import { TagTreeNode } from './TagTreeNode'
import { ActiveFilterChips } from './ActiveFilterChips'
import styles from './TagFilterSidebar.module.css'

interface Props {
  tagTree: Node[]
  activeFilters: Set<string>
  onToggleFilter: (path: string) => void
  onOpenNewspaper: () => void
  newspaperDisabled: boolean
  onOpenDailyReview: () => void
  dailyReviewDisabled: boolean
}

export function TagFilterSidebar({
  tagTree,
  activeFilters,
  onToggleFilter,
  onOpenNewspaper,
  newspaperDisabled,
  onOpenDailyReview,
  dailyReviewDisabled,
}: Props) {
  // The tag tree is the tall part of the sidebar, so it starts collapsed on
  // narrow screens where the sidebar sits above the timeline. Read once on
  // mount rather than on resize, so a manual toggle is never overridden.
  const [filtersOpen, setFiltersOpen] = useState(
    () => window.matchMedia('(min-width: 641px)').matches
  )

  return (
    <aside className={styles.sidebar}>
      <div className={styles.actions}>
        <button
          className={styles.sidebarBtn}
          onClick={onOpenNewspaper}
          disabled={newspaperDisabled}
        >
          📰 Morning Newspaper
        </button>
        <button
          className={styles.sidebarBtn}
          onClick={onOpenDailyReview}
          disabled={dailyReviewDisabled}
        >
          📓 Daily Review
        </button>
      </div>
      <details
        className={styles.filters}
        open={filtersOpen}
        onToggle={e => setFiltersOpen(e.currentTarget.open)}
      >
        <summary className={styles.heading}>
          Filter by tag
          {activeFilters.size > 0 && (
            <span className={styles.headingCount}>{activeFilters.size}</span>
          )}
        </summary>
        <ActiveFilterChips activeFilters={activeFilters} onRemove={onToggleFilter} />
        <ul className={styles.tree}>
          {tagTree.map(node => (
            <TagTreeNode
              key={node.path}
              node={node}
              activeFilters={activeFilters}
              ancestorActive={false}
              onToggle={onToggleFilter}
            />
          ))}
        </ul>
      </details>
    </aside>
  )
}
