import type { TagTreeNode as Node } from '../../types'
import styles from './TagFilterSidebar.module.css'

interface Props {
  node: Node
  activeFilters: Set<string>
  ancestorActive: boolean
  onToggle: (path: string) => void
}

export function TagTreeNode({ node, activeFilters, ancestorActive, onToggle }: Props) {
  const selfActive = activeFilters.has(node.path)
  const isActive = selfActive || ancestorActive

  return (
    <li className={styles.treeNode}>
      <button
        className={`${styles.treeLabel} ${isActive ? styles.treeLabelActive : ''}`}
        onClick={() => onToggle(node.path)}
        aria-pressed={isActive}
        title={node.path}
      >
        {node.label}
      </button>
      {node.children.length > 0 && (
        <ul className={styles.treeChildren}>
          {node.children.map(child => (
            <TagTreeNode
              key={child.path}
              node={child}
              activeFilters={activeFilters}
              ancestorActive={isActive}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
