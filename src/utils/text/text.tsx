import { replaceShyInString, splitIntoSentences, typographicQuotes } from '@regardio/js/text';
import { cloneElement, Fragment, isValidElement, type ReactElement, type ReactNode } from 'react';

export const lowerCaseSzett = (text: ReactNode | string, _returnType?: 'string'): ReactNode => {
  // Helper function to process strings
  const processString = (str: string): ReactNode | string => {
    const parts = str.split(/(ß)/g);
    return parts.map((part, index) =>
      part === 'ß' ? (
        <span
          className="lowercase"
          key={index.toString()}
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  // Handle strings
  if (typeof text === 'string') {
    return processString(text);
  }

  // Handle valid React elements
  if (isValidElement(text)) {
    const element = text as ReactElement<{ children?: ReactNode }>;
    const { children } = element.props;

    return cloneElement(element, element.props, lowerCaseSzett(children));
  }

  // Handle arrays
  if (Array.isArray(text)) {
    return text.map((child, index) => (
      <Fragment key={index.toString()}>{lowerCaseSzett(child as ReactNode)}</Fragment>
    ));
  }

  // Return other types as is
  return text;
};

// Recursive function to traverse ReactNode and replace &shy; in string nodes
function replaceShyInReactNode(node: ReactNode): ReactNode {
  if (typeof node === 'string') {
    // Replace soft hyphen (&shy;) with an empty string or custom logic
    return node.replace(/\u00AD/g, '');
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    const { children } = element.props;

    return cloneElement(element, element.props, replaceShyInReactNode(children));
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <Fragment key={index.toString()}>{replaceShyInReactNode(child as ReactNode)}</Fragment>
    ));
  }

  return node;
}

export function shy(input: string | ReactNode | null): string | ReactNode | null {
  if (input === null) {
    return null;
  }

  if (typeof input === 'string') {
    return replaceShyInString(input);
  }

  return replaceShyInReactNode(input);
}

/**
 * Replace special characters in text: typographic quotes and soft hyphens.
 * This is a React-aware version that handles ReactNode trees.
 */
export function replaceSpecialChars(text: string, locale: string): string | ReactNode | null {
  return shy(typographicQuotes(text, locale));
}

/**
 * Wrap sentences in span elements
 */
export function wrapSentences(text: string): ReactNode {
  const sentences = splitIntoSentences(text);
  return sentences.map((sentence, index) => <span key={index.toString()}>{sentence} </span>);
}
