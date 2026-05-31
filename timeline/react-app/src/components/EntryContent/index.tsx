import type { TimelineEntry } from '../../types'
import styles from './EntryContent.module.css'

interface Props {
  entry: TimelineEntry
}

export function EntryContent({ entry }: Props) {
  return (
    <div className={styles.body}>
      {entry.contentSections.length > 0
        ? entry.contentSections.map((section, i) => {
            const ref = entry.references[section.referenceIndex]
            return (
              <div key={i} className={styles.section}>
                {ref && (
                  <h3 className={styles.source}>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      {ref.source}
                    </a>
                  </h3>
                )}
                {section.content && (
                  <p className={styles.content}>{section.content}</p>
                )}
              </div>
            )
          })
        : entry.references.map((ref, i) => (
            <div key={i} className={styles.section}>
              <h3 className={styles.source}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.source}
                </a>
              </h3>
            </div>
          ))
      }
    </div>
  )
}
