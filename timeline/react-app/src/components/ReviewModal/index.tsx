import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './ReviewModal.module.css'

export interface Slide {
  key: string
  header: ReactNode
  body: ReactNode
}

interface Props {
  title: string
  slides: Slide[]
  onClose: () => void
}

// Shared carousel modal shell behind Morning Newspaper and Daily Review, so the
// two cannot drift apart. Dismissal is × or Escape only — backdrop clicks are
// deliberately inert.
export function ReviewModal({ title, slides, onClose }: Props) {
  const [index, setIndex] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)
  const total = slides.length

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

  // These notes run long; keeping the previous scroll position when paging
  // drops you into the middle of the next one.
  useEffect(() => {
    if (slideRef.current) slideRef.current.scrollTop = 0
  }, [index])

  const slide = slides[index]

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label={title}>
      <div className={styles.panel} ref={panelRef} tabIndex={-1}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <span className={styles.position}>{index + 1} / {total}</span>
          <button className={styles.close} onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className={styles.slide} ref={slideRef}>
          <div className={styles.slideHeader}>{slide.header}</div>
          <div className={styles.content}>{slide.body}</div>
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
            {slides.map((s, i) => (
              <button
                key={s.key}
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
