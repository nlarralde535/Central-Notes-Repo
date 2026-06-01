import { useState } from 'react'
import type { TimelineEntry as Entry } from '../../../types'
import { EntryContent } from '../../EntryContent'
import styles from './TimelineEntry.module.css'

interface Props {
  entry: Entry
}

export function TimelineEntry({ entry }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={styles.entry}>
      <div className={styles.header} onClick={() => setExpanded(e => !e)}>
        <span className={styles.date}>{entry.date}</span>
        <span className={styles.title}>{entry.title}</span>
        <span className={styles.toggle}>{expanded ? '▲' : '▼'}</span>
      </div>

      {expanded && (
        <div className={styles.body}>
          <EntryContent entry={entry} />
        </div>
      )}
    </article>
  )
}
