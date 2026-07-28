import type { ReviewNote } from '../../types'
import { ReviewNoteContent } from '../ReviewNoteContent'
import { ReviewModal } from '../ReviewModal'
import styles from './DailyReview.module.css'

interface Props {
  notes: ReviewNote[]
  onClose: () => void
}

export function DailyReview({ notes, onClose }: Props) {
  const slides = notes.map(note => ({
    key: note.id,
    header: <span className={styles.noteTitle}>{note.title}</span>,
    body: <ReviewNoteContent note={note} />,
  }))

  return <ReviewModal title="📓 Daily Review" slides={slides} onClose={onClose} />
}
