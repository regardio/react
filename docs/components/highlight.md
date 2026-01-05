# Highlight

A text highlighting component for emphasizing content with customizable styles.

## Import

```tsx
import { Highlight } from '@regardio/react/components/highlight';
```

## Usage

### Basic Usage

```tsx
<p>
  This is regular text with <Highlight>highlighted content</Highlight> inline.
</p>
```

### With Variants

```tsx
<Highlight variant="primary">Primary highlight</Highlight>
<Highlight variant="secondary">Secondary highlight</Highlight>
```

### In Headings

```tsx
<Heading level={1}>
  Welcome to <Highlight>Regardio</Highlight>
</Heading>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual variant |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | Content to highlight |

## Styling

The component renders a `<mark>` element with styling applied:

```html
<mark class="...">Highlighted text</mark>
```

Custom styling can be added via `className`:

```tsx
<Highlight className="bg-yellow-200 px-1">
  Custom styled highlight
</Highlight>
```

## Semantic HTML

Uses the `<mark>` element which:

- Indicates text of relevance or importance
- Is recognized by screen readers
- Has default browser styling (usually yellow background)

## Use Cases

- Emphasizing key terms
- Search result highlighting
- Drawing attention to important information
- Marketing copy emphasis

## Related

- [Text](./text.md) — Typography component
- [Heading](./heading.md) — Heading component
