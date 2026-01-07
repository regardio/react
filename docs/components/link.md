# Link

A smart link component that handles internal navigation, external URLs, hash links, and special protocols.

## Import

```tsx
import { Link, LinkBase, PathResolverProvider } from '@regardio/react/link';
```

## Usage

### Basic Link

```tsx
<Link to="/about">About Us</Link>
```

### External Links

External URLs automatically open in a new tab:

```tsx
<Link to="https://example.com">External Site</Link>
```

### Hash Links

Hash links scroll smoothly to the target element:

```tsx
<Link to="#section-id">Jump to Section</Link>
```

### Special Protocols

Tel and mailto links work natively:

```tsx
<Link to="tel:+1234567890">Call Us</Link>
<Link to="mailto:hello@example.com">Email Us</Link>
```

### With Variants

```tsx
<Link to="/products" variant="button">
  View Products
</Link>

<Link to="/docs" variant="subtitle">
  Documentation
</Link>
```

## Props

### Link

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `to` | `string \| { pathname?, search?, hash? }` | — | Destination URL or path object |
| `routeKey` | `string` | — | Route key for path resolver |
| `variant` | `'primary' \| 'button' \| 'code' \| 'link' \| 'navtitle' \| 'subtitle'` | `'primary'` | Visual variant |
| `arrow` | `'larr' \| 'rarr' \| 'uarr' \| 'darr'` | — | Arrow indicator direction |
| `viewTransition` | `boolean` | `true` | Enable view transitions |
| `className` | `string` | — | Additional CSS classes |

All standard `NavLink` props are also supported.

## Variants

- **`primary`** — Default link styling
- **`button`** — Button-like appearance with arrow
- **`code`** — Monospace font
- **`link`** — Uppercase with arrow
- **`navtitle`** — Navigation title styling
- **`subtitle`** — Larger text size

## Path Resolver

Use `PathResolverProvider` to inject localized path resolution:

```tsx
const resolvePath = (routeKey: string) => {
  const routes = {
    home: '/de/startseite',
    about: '/de/ueber-uns',
  };
  return routes[routeKey] || routeKey;
};

<PathResolverProvider value={resolvePath}>
  <Link routeKey="about">Über Uns</Link>
</PathResolverProvider>
```

## Components

### LinkBase

Lower-level link component without variant styling:

```tsx
<LinkBase to="/path" className="custom-class">
  Custom styled link
</LinkBase>
```

### MarkdownLink

For use in Markdown/MDX content:

```tsx
<MarkdownLink href="/path">Link text</MarkdownLink>
```

## Behavior

- **Internal paths** — Uses React Router's `NavLink` with view transitions
- **External URLs** — Opens in new tab with `noopener,noreferrer`
- **Hash links** — Smooth scrolls to target element
- **Tel/mailto** — Native browser handling
- **Empty path** — Renders children without link wrapper

## Related

- [Item](./item.md) — Grid item with link support
