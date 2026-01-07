# text

Utilities for typography processing including typographic quotes and special character replacement.

## Import

```tsx
// React-specific utilities (handle ReactNode trees)
import { lowerCaseSzett, replaceSpecialChars, shy, wrapSentences } from '@regardio/react/utils/text';

// Pure JS utilities (for string-only operations)
import { typographicQuotes, splitIntoSentences, splitIntoWords, truncateText, toBoolean } from '@regardio/js/text';
```

## Usage

### Replace Special Characters

```tsx
replaceSpecialChars('Hello "World"', 'en')
// Result: 'Hello "World"' (curly quotes)

replaceSpecialChars('Hallo "Welt"', 'de')
// Result: 'Hallo „Welt"' (German quotes)
```

### Typographic Quotes

```tsx
typographicQuotes('"Hello"', 'en')
// Result: '"Hello"'

typographicQuotes('"Hallo"', 'de')
// Result: '„Hallo"'

typographicQuotes("'single'", 'en')
// Result: ''single''
```

### Lowercase ß (Eszett)

```tsx
lowerCaseSzett('STRAßE')
// Handles German ß character in uppercase contexts
```

## Functions

### replaceSpecialChars

Replaces ASCII quotes and other special characters with typographically correct versions.

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | Text to process |
| `locale` | `string` | Locale for quote style |

Returns: `string`

### typographicQuotes

Converts straight quotes to locale-appropriate curly quotes.

> **Note:** This is a pure JS function. Import from `@regardio/js/text`.

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | Text to process |
| `locale` | `string` | Locale for quote style |

Returns: `string`

### lowerCaseSzett

Handles German ß character transformations.

| Parameter | Type | Description |
|-----------|------|-------------|
| `node` | `ReactNode` | React node to process |

Returns: `ReactNode`

## Supported Locales

| Locale | Double Quotes | Single Quotes |
|--------|---------------|---------------|
| `en` | "…" | '…' |
| `de` | „…" | ‚…' |
| `fr` | «…» | ‹…› |
| `es` | «…» | "…" |
| `it` | «…» | "…" |
| `pl` | „…" | ‚…' |
| `nl` | „…" | ‚…' |
| `sv` | "…" | '…' |
| `da` | »…« | ›…‹ |
| `fi` | "…" | '…' |
| `ja` | 「…」 | 『…』 |
| `zh` | "…" | '…' |

## With React Components

```tsx
function FormattedText({ children, locale }) {
  const processed = replaceSpecialChars(children, locale);
  return <p>{processed}</p>;
}
```

## In MarkdownContainer

The `MarkdownContainer` component uses these utilities automatically:

```tsx
<MarkdownContainer locale="de">
  Dies ist ein "Beispiel" Text.
</MarkdownContainer>
// Renders with German typographic quotes: „Beispiel"
```

## Related

- [MarkdownContainer](../components/markdown-container.md) — Uses text utilities
- [locale](./locale.md) — Locale utilities
