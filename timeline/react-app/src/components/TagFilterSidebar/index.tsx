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
}

export function TagFilterSidebar({ tagTree, activeFilters, onToggleFilter, onOpenNewspaper, newspaperDisabled }: Props) {
  return (
    <aside className={styles.sidebar}>
      <button
        className={styles.newspaperBtn}
        onClick={onOpenNewspaper}
        disabled={newspaperDisabled}
      >
        📰 Morning Newspaper
      </button>
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
