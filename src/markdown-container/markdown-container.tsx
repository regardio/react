'use client';

import { MDXProvider } from '@mdx-js/react';
import { cn } from '@regardio/tailwind/utils';
import Markdown, { type MarkdownToJSX } from 'markdown-to-jsx';
import type React from 'react';
import { replaceSpecialChars } from '../utils/text';

const doubleNewlineRegex = /\n\n+/;

function processTextOutsideMDXComponents(text: string, locale: string): string {
  // Regex to match MDX components or HTML tags
  const mdxTagRegex = /(<\/?[A-Za-z][^>]*>)/g;

  return text
    .split(mdxTagRegex)
    .map((part) => (mdxTagRegex.test(part) ? part : replaceSpecialChars(part, locale)))
    .join('');
}

export function transformLink(
  to: string | Partial<{ pathname?: string; search?: string; hash?: string }> | undefined,
): string {
  const targetDomainSubstring = 'regard';

  if (typeof to === 'string') {
    try {
      const url = new URL(to);
      if (url.hostname.includes(targetDomainSubstring)) {
        return url.pathname + (url.search ?? '') + (url.hash ?? '');
      }
      return to;
    } catch {
      return to;
    }
  } else if (to?.pathname) {
    return to.pathname + (to.search ?? '') + (to.hash ?? '');
  }

  return '';
}

export type MDXComponent<P = object> = React.ComponentType<P>;
export type MarkdownOverrides = MarkdownToJSX.Options['overrides'];

export type MarkdownContainerProps = React.PropsWithChildren<{
  characters?: number;
  className?: string;
  locale: string;
  paragraphs?: number;
  sentences?: number;
  mdxComponents?: Record<string, MDXComponent>;
  markdownOverrides?: MarkdownOverrides;
}>;

const truncateText = (
  text: string,
  maxSentences: number | undefined,
  maxCharacters: number | undefined,
  maxParagraphs: number | undefined,
) => {
  if (maxSentences === undefined && maxCharacters === undefined && maxParagraphs === undefined) {
    return text;
  }

  const paragraphs = text.split(doubleNewlineRegex);

  let truncatedText = '';
  let charCount = 0;
  let sentenceCount = 0;
  let paragraphCount = 0;

  for (const paragraph of paragraphs) {
    if (maxParagraphs !== undefined && paragraphCount >= maxParagraphs) {
      break;
    }

    const sentenceRegex = /(?<!\.\.\.)(?<!\b\w\.)\.(?:\s+|\n+)/g;
    const parts = paragraph.split(sentenceRegex);
    const delimiters = paragraph.match(sentenceRegex) || [];

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const delimiter = delimiters[i] || '';

      if (part !== undefined) {
        if (
          (maxSentences === undefined || sentenceCount < maxSentences) &&
          (maxCharacters === undefined ||
            charCount + part.length + delimiter.length <= maxCharacters)
        ) {
          truncatedText += part + delimiter;
          charCount += part.length + delimiter.length;

          if (delimiter.includes('.')) {
            sentenceCount++;
          }
        } else {
          break;
        }
      }
    }

    paragraphCount++;

    if (
      (maxSentences !== undefined && sentenceCount >= maxSentences) ||
      (maxCharacters !== undefined && charCount >= maxCharacters)
    ) {
      break;
    }

    if (paragraphCount < paragraphs.length) {
      truncatedText += '\n\n';
    }
  }

  return truncatedText.trim();
};

export const MarkdownContainer: React.FC<MarkdownContainerProps> = (props) => {
  const rawText = props.children?.toString() || '';

  let processedText = processTextOutsideMDXComponents(rawText, props.locale);

  const shouldTruncate =
    Number.isInteger(props.sentences) ||
    Number.isInteger(props.characters) ||
    Number.isInteger(props.paragraphs);

  if (shouldTruncate) {
    processedText = truncateText(
      processedText,
      props.sentences,
      props.characters,
      props.paragraphs,
    );
  }

  return (
    <MDXProvider components={props.mdxComponents}>
      <Markdown
        className={cn('markdown', props.className)}
        options={{
          disableParsingRawHTML: false,
          forceWrapper: true,
          tagfilter: false,
          ...(props.markdownOverrides ? { overrides: props.markdownOverrides } : {}),
        }}
      >
        {processedText}
      </Markdown>
    </MDXProvider>
  );
};
