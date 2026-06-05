"use client";

import type { ReactNode } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { Block, Document, Inline } from '@contentful/rich-text-types'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

interface Props {
  document: Document  // ← fully typed
}

// Custom renderers dengan type safety
const renderOptions = {
  renderNode: {
    [BLOCKS.TABLE]: (node: Block, children: ReactNode) => (
      <table className="w-full border-collapse">{children}</table>
    ),
    [BLOCKS.TABLE_ROW]: (node: Block, children: ReactNode) => (
      <tr className="border-b border-gray-700">{children}</tr>
    ),
    [BLOCKS.TABLE_CELL]: (node: Block, children: ReactNode) => (
      <td className="p-3 text-sm">{children}</td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node: Block, children: ReactNode) => (
      <th className="p-3 text-left text-sm font-semibold bg-gray-800">{children}</th>
    ),
    [BLOCKS.HEADING_3]: (node: Block, children: ReactNode) => (
      <h3 className="text-xl font-bold mt-8 mb-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: Block, children: ReactNode) => (
      <h4 className="text-lg font-semibold mt-6 mb-3">{children}</h4>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-700" />,
    [BLOCKS.UL_LIST]: (node: Block, children: ReactNode) => (
      <ul className="list-disc pl-6 space-y-2 my-4">{children}</ul>
    ),
  },
}

export default function RichTextRenderer({ document }: Props) {
  return <>{documentToReactComponents(document, renderOptions as any)}</>
}