import styles from './TagFilterSidebar.module.css'

interface Props {
  activeFilters: Set<string>
  onRemove: (path: string) => void
}

export function ActiveFilterChips({ activeFilters, onRemove }: Props) {
  if (activeFilters.size === 0) return null

  return (
    <div className={styles.chips}>
      {[...activeFilters].map(path => {
        const label = path.split('/').pop() ?? path
        return (
          <button key={path} className={styles.chip} onClick={() => onRemove(path)} title={path}>
            {label} ✕
          </button>
        )
      })}
    </div>
  )
}
