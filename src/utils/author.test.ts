import { describe, expect, test } from 'vitest';
import { parseAuthorString } from './author';

describe('parseAuthorString', () => {
  test('parses name only', () => {
    expect(parseAuthorString('John Doe')).toEqual({ name: 'John Doe' });
  });

  test('parses name and email', () => {
    expect(parseAuthorString('John Doe <john@example.com>')).toEqual({
      email: 'john@example.com',
      name: 'John Doe',
    });
  });

  test('parses name and URL', () => {
    expect(parseAuthorString('John Doe (https://example.com)')).toEqual({
      name: 'John Doe',
      url: 'https://example.com',
    });
  });

  test('parses name, email, and URL', () => {
    expect(parseAuthorString('John Doe <john@example.com> (https://example.com)')).toEqual({
      email: 'john@example.com',
      name: 'John Doe',
      url: 'https://example.com',
    });
  });

  test('handles email only (no name)', () => {
    expect(parseAuthorString('<john@example.com>')).toEqual({
      email: 'john@example.com',
    });
  });

  test('handles whitespace in name', () => {
    expect(parseAuthorString('  John Doe  <john@example.com>')).toEqual({
      email: 'john@example.com',
      name: 'John Doe',
    });
  });

  test('returns empty object for empty string', () => {
    expect(parseAuthorString('')).toEqual({});
  });

  test('handles relative URL', () => {
    expect(parseAuthorString('John Doe (/about/john)')).toEqual({
      name: 'John Doe',
      url: '/about/john',
    });
  });
});
