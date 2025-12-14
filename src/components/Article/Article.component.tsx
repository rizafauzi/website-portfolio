import React, { ReactNode } from "react";
import { Bebas_Neue, Open_Sans } from "next/font/google";

import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Text, { IText } from "../Text";

import styles from "./Article.module.scss";

export const bebasNeue = Bebas_Neue({
  variable: "--bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const openSans = Open_Sans({
  variable: "--open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export type ArticleProps = IText & {
  content: Document;
};

const Article = ({ content, ...rest }: ArticleProps) => {
  function flattenChildren(children: ReactNode): ReactNode {
    return React.Children.toArray(children).map((child: any) =>
      React.isValidElement(child) && (child.props as any)?.children
        ? flattenChildren((child.props as any).children)
        : child,
    );
  }

  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_: any, children: React.ReactNode) => (
        <Text className="text-3xl font-bold" color="white">
          {children}
        </Text>
      ),

      [BLOCKS.PARAGRAPH]: (_: any, children: React.ReactNode) => (
        <Text size="large" {...rest} className="mb-4 leading-relaxed" opacity={70}>
          {children}
        </Text>
      ),

      [BLOCKS.HEADING_2]: (_: any, children: React.ReactNode) => (
        <Text tag="h2" className="leading-relaxed" size="d-small">
          {children}
        </Text>
      ),

      [BLOCKS.HEADING_3]: (_: any, children: React.ReactNode) => (
        <Text tag="h3" className="leading-relaxed" size="d-small">
          {children}
        </Text>
      ),

      [BLOCKS.UL_LIST]: (_: any, children: React.ReactNode) => (
        <ul className="rt-ul">{children}</ul>
      ),

      [BLOCKS.LIST_ITEM]: (_: any, children: React.ReactNode) => {
        return (
          <Text tag="li" {...rest} className="rt-li mb-4 leading-relaxed" opacity={70}>
            {flattenChildren(children)}
          </Text>
        );
      },

      [BLOCKS.OL_LIST]: (_: any, children: React.ReactNode) => (
        <ol className="rt-ol">{children}</ol>
      ),

      [BLOCKS.HR]: () => <hr className="rt-hr border-[#ffffff3f] my-8" />,

      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <article {...rest} className={styles.article}>
      {documentToReactComponents(content, renderOptions)}
    </article>
  );
};

export default Article;
