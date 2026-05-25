import { useState } from 'react'
import type { TimelineEntry as Entry } from '../../../types'
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
      )}
    </article>
  )
}
