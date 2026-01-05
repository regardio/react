import { describe, expect, test } from 'vitest';
import { replaceSpecialChars, shy, toBoolean, typographicQuotes } from './text';

describe('toBoolean', () => {
  test('returns true for boolean true', () => {
    expect(toBoolean(true)).toBe(true);
  });

  test('returns false for boolean false', () => {
    expect(toBoolean(false)).toBe(false);
  });

  test('returns true for string "true"', () => {
    expect(toBoolean('true')).toBe(true);
  });

  test('returns true for string "1"', () => {
    expect(toBoolean('1')).toBe(true);
  });

  test('returns false for string "false"', () => {
    expect(toBoolean('false')).toBe(false);
  });

  test('returns false for string "0"', () => {
    expect(toBoolean('0')).toBe(false);
  });

  test('returns false for null', () => {
    expect(toBoolean(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(toBoolean(undefined)).toBe(false);
  });

  test('returns false for other strings', () => {
    expect(toBoolean('yes')).toBe(false);
    expect(toBoolean('no')).toBe(false);
    expect(toBoolean('')).toBe(false);
  });
});

describe('shy', () => {
  test('returns null for null input', () => {
    expect(shy(null)).toBe(null);
  });

  test('replaces &shy; with soft hyphen in strings', () => {
    const result = shy('hello&shy;world');
    expect(result).toBe('hello\u00ADworld');
  });

  test('handles strings without &shy;', () => {
    expect(shy('hello world')).toBe('hello world');
  });

  test('handles multiple &shy; occurrences', () => {
    const result = shy('one&shy;two&shy;three');
    expect(result).toBe('one\u00ADtwo\u00ADthree');
  });
});

describe('replaceSpecialChars', () => {
  test('replaces straight quotes for de locale', () => {
    const result = replaceSpecialChars('"Hello"', 'de');
    const str = String(result);
    // Should not contain straight quotes anymore
    expect(str).not.toContain('"Hello"');
    expect(str).toContain('Hello');
  });

  test('replaces straight quotes for de-DE locale', () => {
    const result = replaceSpecialChars('"Hello"', 'de-DE');
    const str = String(result);
    expect(str).not.toContain('"Hello"');
    expect(str).toContain('Hello');
  });

  test('replaces straight quotes for en locale', () => {
    const result = replaceSpecialChars('"Hello"', 'en');
    const str = String(result);
    // Should not contain straight quotes anymore
    expect(str).not.toContain('"Hello"');
    expect(str).toContain('Hello');
  });

  test('handles multiple quoted strings', () => {
    const result = replaceSpecialChars('"one" and "two"', 'de');
    const str = String(result);
    expect(str).toContain('one');
    expect(str).toContain('two');
    expect(str).toContain('and');
  });

  test('also applies shy replacement', () => {
    const result = replaceSpecialChars('"Hello&shy;World"', 'en');
    expect(String(result)).toContain('\u00AD');
  });
});

describe('typographicQuotes', () => {
  test('replaces double quotes with English curly quotes', () => {
    const result = typographicQuotes('"Hello"', 'en');
    expect(result).toBe('\u201CHello\u201D');
  });

  test('replaces double quotes with German quotes', () => {
    const result = typographicQuotes('"Hello"', 'de');
    expect(result).toBe('\u201EHello\u201D');
  });

  test('replaces double quotes with French guillemets', () => {
    const result = typographicQuotes('"Hello"', 'fr');
    expect(result).toBe('\u00AB Hello \u00BB');
  });

  test('handles de-DE locale (falls back to de)', () => {
    const result = typographicQuotes('"Hello"', 'de-DE');
    expect(result).toBe('\u201EHello\u201D');
  });

  test('handles de-CH locale (Swiss German with guillemets)', () => {
    const result = typographicQuotes('"Hello"', 'de-CH');
    expect(result).toBe('\u00ABHello\u00BB');
  });

  test('handles unknown locale (falls back to English)', () => {
    const result = typographicQuotes('"Hello"', 'xx-YY');
    expect(result).toBe('\u201CHello\u201D');
  });

  test('replaces single quotes', () => {
    const result = typographicQuotes("'Hello'", 'en');
    expect(result).toBe('\u2018Hello\u2019');
  });

  test('handles multiple quoted strings', () => {
    const result = typographicQuotes('"one" and "two"', 'de');
    expect(result).toBe('\u201Eone\u201D and \u201Etwo\u201D');
  });

  test('handles Japanese quotes', () => {
    const result = typographicQuotes('"Hello"', 'ja');
    expect(result).toBe('\u300CHello\u300D');
  });

  test('preserves text without quotes', () => {
    const result = typographicQuotes('Hello World', 'en');
    expect(result).toBe('Hello World');
  });
});
