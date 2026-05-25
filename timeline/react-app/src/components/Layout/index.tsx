import type { ReactNode } from 'react'
import styles from './Layout.module.css'

interface Props {
  sidebar: ReactNode
  main: ReactNode
}

export function Layout({ sidebar, main }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>{sidebar}</div>
      <main className={styles.main}>{main}</main>
    </div>
  )
}
