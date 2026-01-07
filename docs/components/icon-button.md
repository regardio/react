# IconButton

A button component optimized for icon-only content with minimal default styling.

## Import

```tsx
import { IconButton } from '@regardio/react/icon-button';
```

## Usage

### Basic Usage

```tsx
import { X } from 'lucide-react';

<IconButton icon={<X />} />
```

### With Custom Styling

```tsx
<IconButton
  icon={<Menu />}
  className="p-2 bg-gray-100 rounded hover:bg-gray-200"
/>
```

### With Click Handler

```tsx
<IconButton
  icon={<Close />}
  onClick={() => setIsOpen(false)}
  aria-label="Close dialog"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | — | Icon element to display |
| `className` | `string` | `'p-0'` | CSS classes (overrides default) |

All standard `button` props are also supported.

## Default Behavior

- Renders `type="button"` (not submit)
- Default padding of `p-0`
- Custom `className` completely replaces default

## Accessibility

Always provide an accessible label:

```tsx
<IconButton
  icon={<Search />}
  aria-label="Search"
/>

{/* Or with visible text for screen readers */}
<IconButton icon={<Menu />}>
  <span className="sr-only">Open menu</span>
</IconButton>
```

## Icon Libraries

Works with any icon library:

```tsx
// Lucide React
import { Heart } from 'lucide-react';
<IconButton icon={<Heart />} />

// Custom SVG
<IconButton icon={
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="..." />
  </svg>
} />
```

## Related

- [Link component](./link.md) — Link component with variants
