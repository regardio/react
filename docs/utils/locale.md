# locale

Utilities for locale detection, parsing, and formatting.

## Import

```tsx
import {
  parseAcceptLanguage,
  getBestLocale,
  formatLocale,
} from '@regardio/react/utils/locale';
```

## Usage

### Parse Accept-Language Header

```tsx
const locales = parseAcceptLanguage('en-US,en;q=0.9,de;q=0.8');
// Result: ['en-US', 'en', 'de']
```

### Get Best Matching Locale

```tsx
const supportedLocales = ['en', 'de', 'fr'];
const userPreferences = ['de-AT', 'de', 'en'];

const bestLocale = getBestLocale(userPreferences, supportedLocales);
// Result: 'de'
```

### Format Locale

```tsx
formatLocale('en-US')  // 'en-US'
formatLocale('de_DE')  // 'de-DE'
```

## Functions

### parseAcceptLanguage

Parses the HTTP Accept-Language header into an ordered array of locales.

| Parameter | Type | Description |
|-----------|------|-------------|
| `header` | `string` | Accept-Language header value |

Returns: `string[]` — Locales ordered by preference

### getBestLocale

Finds the best matching locale from supported options.

| Parameter | Type | Description |
|-----------|------|-------------|
| `preferences` | `string[]` | User's preferred locales |
| `supported` | `string[]` | Application's supported locales |
| `fallback` | `string` | Default locale if no match |

Returns: `string`

### formatLocale

Normalizes locale string format.

| Parameter | Type | Description |
|-----------|------|-------------|
| `locale` | `string` | Locale string to format |

Returns: `string`

## Server-Side Usage

```tsx
// In a loader or server function
export async function loader({ request }) {
  const acceptLanguage = request.headers.get('Accept-Language') || '';
  const locales = parseAcceptLanguage(acceptLanguage);
  const locale = getBestLocale(locales, ['en', 'de', 'fr'], 'en');

  return { locale };
}
```

## Client-Side Detection

```tsx
const browserLocales = navigator.languages || [navigator.language];
const locale = getBestLocale(browserLocales, supportedLocales, 'en');
```

## Related

- [text](./text.md) — Locale-aware text processing
- [MarkdownContainer](../components/markdown-container.md) — Locale-aware rendering
