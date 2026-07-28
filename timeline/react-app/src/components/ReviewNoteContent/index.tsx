import type { ReviewNote } from '../../types'
import styles from './ReviewNoteContent.module.css'

interface Props {
  note: ReviewNote
}

export function ReviewNoteContent({ note }: Props) {
  // The HTML is generated at build time by scripts/build-review-html.mjs, which
  // runs the markdown through marked and then DOMPurify before it is written.
  return (
    <div className={styles.prose} dangerouslySetInnerHTML={{ __html: note.html }} />
  )
}
