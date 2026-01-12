import { isValidElement, type ReactNode } from 'react';
import { describe, expect, it } from 'vitest';

import { lowerCaseSzett, replaceSpecialChars, shy, wrapSentences } from './text';

describe('lowerCaseSzett', () => {
  it('wraps ß in lowercase span for strings', () => {
    const result = lowerCaseSzett('Straße') as ReactNode[];
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
    expect(result[0]).toBe('Stra');
    expect(isValidElement(result[1])).toBe(true);
    expect((result[1] as { props: { className: string } }).props.className).toBe('lowercase');
    expect((result[1] as { props: { children: string } }).props.children).toBe('ß');
    expect(result[2]).toBe('e');
  });

  it('handles strings without ß', () => {
    const result = lowerCaseSzett('Hello') as ReactNode[];
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(['Hello']);
  });

  it('handles React elements with children containing ß', () => {
    const element = <div>Straße</div>;
    const result = lowerCaseSzett(element);
    expect(isValidElement(result)).toBe(true);
    const children = (result as { props: { children: ReactNode[] } }).props.children;
    expect(Array.isArray(children)).toBe(true);
  });

  it('handles nested React elements', () => {
    const element = (
      <div>
        <span>Große Straße</span>
      </div>
    );
    const result = lowerCaseSzett(element);
    expect(isValidElement(result)).toBe(true);
  });

  it('handles arrays of children', () => {
    const result = lowerCaseSzett(['Straße', ' und ', 'Größe']);
    expect(Array.isArray(result)).toBe(true);
  });

  it('returns non-string/element values as-is', () => {
    expect(lowerCaseSzett(null)).toBeNull();
    expect(lowerCaseSzett(undefined)).toBeUndefined();
    expect(lowerCaseSzett(123 as unknown as string)).toBe(123);
  });
});

describe('shy', () => {
  it('returns null for null input', () => {
    expect(shy(null)).toBeNull();
  });

  it('replaces soft hyphens in strings', () => {
    const input = 'Weihnachts\u00ADspende';
    const result = shy(input);
    expect(typeof result).toBe('string');
    expect(result).toContain('\u00AD');
  });

  it('handles React elements with soft hyphens', () => {
    const element = <div>Weihnachts­spende</div>;
    const result = shy(element);
    expect(isValidElement(result)).toBe(true);
    const children = (result as { props: { children: string } }).props.children;
    expect(children).toBe('Weihnachtsspende');
  });

  it('handles nested React elements with soft hyphens', () => {
    const element = (
      <div>
        <span>Weihnachts­spende</span>
      </div>
    );
    const result = shy(element);
    expect(isValidElement(result)).toBe(true);
  });

  it('handles arrays in React nodes', () => {
    const element = (
      <div>
        {['Weihnachts­spende', ' ', 'Test­wort']}
      </div>
    );
    const result = shy(element);
    expect(isValidElement(result)).toBe(true);
  });
});

describe('replaceSpecialChars', () => {
  it('applies typographic quotes and shy', () => {
    const result = replaceSpecialChars('"Hello"', 'de');
    expect(typeof result).toBe('string');
    expect(result).toBe('\u201EHello\u201D');
  });
});

describe('wrapSentences', () => {
  it('wraps each sentence in a span', () => {
    const result = wrapSentences('First sentence. Second sentence.');
    expect(Array.isArray(result)).toBe(true);
    expect((result as ReactNode[]).length).toBeGreaterThanOrEqual(2);
  });

  it('handles single sentence', () => {
    const result = wrapSentences('Just one sentence.');
    expect(Array.isArray(result)).toBe(true);
  });
});
