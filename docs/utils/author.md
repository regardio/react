# author

Utilities for formatting author and contributor data.

## Import

```tsx
// React-specific (generates React elements)
import { generateLinkFromAuthorString } from '@regardio/react/utils/author';

// Pure JS utilities (for parsing author strings)
import { type AuthorInfo, parseAuthorString } from '@regardio/js/text';
```

## Usage

### Parse Author String

```tsx
const author = parseAuthorString('John Doe <john@example.com> (https://example.com)');
// Result: { name: 'John Doe', email: 'john@example.com', url: 'https://example.com' }
```

### Generate Link from Author String

```tsx
const link = generateLinkFromAuthorString('Jane Smith <jane@example.com>');
// Returns: <a className="u-email p-name" href="mailto:jane@example.com">Jane Smith</a>
```

## AuthorInfo Type

```tsx
type AuthorInfo = {
  name?: string;
  email?: string;
  url?: string;
};
```

> **Note:** Import `AuthorInfo` from `@regardio/js/text`.

## Functions

### parseAuthorString

Parses an author string in the format "Name \<email\> (url)".

> **Note:** This is a pure JS function. Import from `@regardio/js/text`.

| Parameter | Type | Description |
|-----------|------|--------------|
| `input` | `string` | Author string to parse |

Returns: `AuthorInfo`

### generateLinkFromAuthorString

Generates a React link element from an author string.

| Parameter | Type | Description |
|-----------|------|--------------|
| `input` | `string` | Author string to parse |

Returns: `React.ReactNode` — An anchor element with microformat classes

## Use Cases

- Blog post bylines
- Contributor lists
- Comment authors
- Team member displays

## Related

- [Text component](../components/text.md) — Typography component
- [Link component](../components/link.md) — Link component
