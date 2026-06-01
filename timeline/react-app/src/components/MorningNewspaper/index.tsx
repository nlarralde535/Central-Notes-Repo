import { useEffect, useRef, useState } from 'react'
import type { TimelineEntry } from '../../types'
import { EntryContent } from '../EntryContent'
import styles from './MorningNewspaper.module.css'

interface Props {
  entries: TimelineEntry[]
  onClose: () => void
}

export function MorningNewspaper({ entries, onClose }: Props) {
  const [index, setIndex] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)
  const total = entries.length

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => { document.body.style.overflow = prev }
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowRight' && index < total - 1) setIndex(i => i + 1)
      if (e.key === 'ArrowLeft' && index > 0) setIndex(i => i - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, total, onClose])

  const entry = entries[index]

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label="Morning Newspaper">
      <div className={styles.panel} ref={panelRef} tabIndex={-1}>
        <div className={styles.header}>
          <span className={styles.title}>📰 Morning Newspaper</span>
          <span className={styles.position}>{index + 1} / {total}</span>
          <button className={styles.close} onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className={styles.slide}>
          <div className={styles.entryHeader}>
            <span className={styles.date}>{entry.date}</span>
            <span className={styles.entryTitle}>{entry.title}</span>
          </div>
          <div className={styles.content}>
            <EntryContent entry={entry} />
          </div>
        </div>

        <div className={styles.nav}>
          <button
            className={styles.navBtn}
            onClick={() => setIndex(i => i - 1)}
            disabled={index === 0}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className={styles.dots}>
            {entries.map((_, i) => (
              <button
                key={i}
                className={i === index ? styles.dotActive : styles.dot}
                onClick={() => setIndex(i)}
                aria-label={`Go to note ${i + 1}`}
              />
            ))}
          </div>
          <button
            className={styles.navBtn}
            onClick={() => setIndex(i => i + 1)}
            disabled={index === total - 1}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}
