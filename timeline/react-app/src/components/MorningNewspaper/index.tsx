import type { TimelineEntry } from '../../types'
import { EntryContent } from '../EntryContent'
import { ReviewModal } from '../ReviewModal'
import styles from './MorningNewspaper.module.css'

interface Props {
  entries: TimelineEntry[]
  onClose: () => void
}

export function MorningNewspaper({ entries, onClose }: Props) {
  const slides = entries.map(entry => ({
    key: entry.id,
    header: (
      <>
        <span className={styles.date}>{entry.date}</span>
        <span className={styles.entryTitle}>{entry.title}</span>
      </>
    ),
    body: <EntryContent entry={entry} />,
  }))

  return <ReviewModal title="📰 Morning Newspaper" slides={slides} onClose={onClose} />
}
