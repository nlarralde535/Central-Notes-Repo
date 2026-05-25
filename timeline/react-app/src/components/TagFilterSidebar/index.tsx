import type { TagTreeNode as Node } from '../../types'
import { TagTreeNode } from './TagTreeNode'
import { ActiveFilterChips } from './ActiveFilterChips'
import styles from './TagFilterSidebar.module.css'

interface Props {
  tagTree: Node[]
  activeFilters: Set<string>
  onToggleFilter: (path: string) => void
}

export function TagFilterSidebar({ tagTree, activeFilters, onToggleFilter }: Props) {
  return (
    <aside className={styles.sidebar}>
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
