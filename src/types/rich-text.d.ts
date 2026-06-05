declare module '@contentful/rich-text-react-renderer' {
  import type { ReactNode } from 'react'
  import type { Document, Node } from '@contentful/rich-text-types'

  export interface Options {
    renderNode?: Record<string, (node: Node, children: ReactNode) => ReactNode>
    renderMark?: Record<string, (text: ReactNode) => ReactNode>
    renderText?: (text: string) => ReactNode
  }

  export function documentToReactComponents(
    document: Document,
    options?: Options
  ): ReactNode
}