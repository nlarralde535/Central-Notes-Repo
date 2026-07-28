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
      <h2 className={styles.heading}>Filter by tag</h2>
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
    </aside>
  )
}
