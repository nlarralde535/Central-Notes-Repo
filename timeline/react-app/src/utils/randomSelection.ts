import type { TimelineEntry } from '../types'

const NEWSPAPER_SIZE = 5

export function pickRandom(entries: TimelineEntry[]): TimelineEntry[] {
  const pool = [...entries]
  const n = Math.min(NEWSPAPER_SIZE, pool.length)
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, n)
}
