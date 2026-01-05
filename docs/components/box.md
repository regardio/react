# Box

A flexible container component with variant-based styling and polymorphic rendering.

## Import

```tsx
import { Box } from '@regardio/react/components/box';
```

## Usage

```tsx
<Box>Default box content</Box>

<Box variant="container">
  Centered container with max-width
</Box>

<Box variant="grid">
  Grid layout container
</Box>

<Box as="section" variant="section">
  Semantic section element with grid layout
</Box>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ElementType` | `'div'` | The HTML element or component to render |
| `variant` | `'primary' \| 'aside' \| 'code' \| 'container' \| 'flex' \| 'grid' \| 'main' \| 'section'` | `'primary'` | Visual and layout variant |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | Box content |

All standard `div` props are also supported.

## Variants

- **`primary`** — Default, no additional styling
- **`aside`** — For sidebar content
- **`code`** — Monospace font with scroll overflow
- **`container`** — Centered container with max-width (`u-container`)
- **`flex`** — Flexbox layout
- **`grid`** — CSS Grid layout (`u-grid`)
- **`main`** — Main content area
- **`section`** — Grid layout with content alignment

## Polymorphic Rendering

Use the `as` prop to render as any HTML element:

```tsx
<Box as="article">Article content</Box>
<Box as="nav">Navigation content</Box>
<Box as="header">Header content</Box>
```

## Related

- [Item](./item.md) — Grid item with theme colors
- [Text](./text.md) — Typography component
