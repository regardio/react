import React, { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';

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

  // Handle valid React elements with correct type assertion
  if (isValidElement(text)) {
    const element = text as ReactElement<{ children?: ReactNode }>;
    const { children, ...props } = element.props;

    return cloneElement(element, {
      ...props,
      children: lowerCaseSzett(children),
    });
  }

  // Handle arrays
  if (Array.isArray(text)) {
    return text.map((child, index) => (
      <React.Fragment key={index.toString()}>{lowerCaseSzett(child as ReactNode)}</React.Fragment>
    ));
  }

  // Return other types as is
  return text;
};

export function toBoolean(value: string | boolean | null | undefined): boolean {
  if (typeof value === 'boolean') {
    return value;
  }

  return value === 'true' || value === '1';
}

function replaceShyInString(input: string): string {
  return input.replace(/&shy;/g, '\u00AD');
}

// Recursive function to traverse ReactNode and replace &shy; in string nodes
function replaceShyInReactNode(node: ReactNode): ReactNode {
  if (typeof node === 'string') {
    // Replace soft hyphen (&shy;) with an empty string or custom logic
    return node.replace(/\u00AD/g, '');
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    const { children, ...props } = element.props;

    return cloneElement(element, {
      ...props,
      children: replaceShyInReactNode(children),
    });
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <React.Fragment key={index.toString()}>
        {replaceShyInReactNode(child as ReactNode)}
      </React.Fragment>
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

export function replaceSpecialChars(text: string, locale: string) {
  switch (locale.toLowerCase()) {
    case 'de':
    case 'de-de':
      return shy(text.replace(/"([^"]*)"/g, '„$1“'));

    default:
      return shy(text.replace(/"([^"]*)"/g, '“$1”'));
  }
}
