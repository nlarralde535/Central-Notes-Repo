export interface Reference {
  source: string
  url: string
}

export interface ContentSection {
  referenceIndex: number
  content: string
}

export interface TimelineEntry {
  id: string
  date: string
  title: string
  tags: string[]
  references: Reference[]
  contentSections: ContentSection[]
}

export interface TagTreeNode {
  label: string
  path: string
  children: TagTreeNode[]
}
