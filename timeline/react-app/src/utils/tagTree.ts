import type { TagTreeNode } from '../types'

export function buildTagTree(tags: string[]): TagTreeNode[] {
  const root: TagTreeNode = { label: '', path: '', children: [] }

  for (const tag of tags) {
    const parts = tag.split('/')
    let node = root
    let currentPath = ''
    for (const part of parts) {
      currentPath = currentPath ? `${currentPath}/${part}` : part
      let child = node.children.find(c => c.label === part)
      if (!child) {
        child = { label: part, path: currentPath, children: [] }
        node.children.push(child)
      }
      node = child
    }
  }

  return root.children
}
