import type { TimelineEntry as Entry } from '../../types'
import { TimelineEntry } from './TimelineEntry'
import styles from './TimelineMonth.module.css'

interface Props {
  label: string
  entries: Entry[]
}

export function TimelineMonth({ label, entries }: Props) {
  return (
    <section className={styles.month}>
      <h2 className={styles.header}>{label}</h2>
      <div className={styles.entries}>
        {entries.map(entry => (
          <TimelineEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  )
}
