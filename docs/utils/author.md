# author

Utilities for formatting author and contributor data.

## Import

```tsx
import { formatAuthor, AuthorDisplay } from '@regardio/react/utils/author';
```

## Usage

### Format Author Name

```tsx
const author = formatAuthor({
  name: 'John Doe',
  email: 'john@example.com',
});
// Result: 'John Doe'
```

### AuthorDisplay Component

```tsx
<AuthorDisplay
  author={{
    name: 'Jane Smith',
    email: 'jane@example.com',
    url: 'https://janesmith.com',
  }}
/>
```

## Author Type

```tsx
type Author = {
  name: string;
  email?: string;
  url?: string;
  avatar?: string;
};
```

## Functions

### formatAuthor

Formats an author object into a display string.

| Parameter | Type | Description |
|-----------|------|-------------|
| `author` | `Author` | Author data object |

Returns: `string`

## Components

### AuthorDisplay

Renders author information with optional link and avatar.

| Prop | Type | Description |
|------|------|-------------|
| `author` | `Author` | Author data |
| `showEmail` | `boolean` | Show email address |
| `showAvatar` | `boolean` | Show avatar image |
| `className` | `string` | Additional CSS classes |

## Use Cases

- Blog post bylines
- Contributor lists
- Comment authors
- Team member displays

## Related

- [Text](../components/text.md) — Typography component
- [Link](../components/link.md) — Link component
