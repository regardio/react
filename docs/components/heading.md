# Heading

Semantic heading component (h1-h6) with consistent styling and variant support.

## Import

```tsx
import { Heading } from '@regardio/react/heading';
```

## Usage

### Basic Usage

```tsx
<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section Title</Heading>
<Heading level={3}>Subsection Title</Heading>
```

### With Variants

```tsx
<Heading level={1} variant="primary">
  Main Heading
</Heading>

<Heading level={2} variant="subtitle">
  Subtitle Heading
</Heading>
```

### Visual vs Semantic Level

Use `as` to separate visual styling from semantic level:

```tsx
{/* Renders as h2 but styled like h1 */}
<Heading level={1} as="h2">
  Visually Large but Semantically h2
</Heading>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | — | Heading level (h1-h6) |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | Based on `level` | Override rendered element |
| `variant` | `'primary' \| 'subtitle'` | `'primary'` | Visual variant |
| `className` | `string` | — | Additional CSS classes |

## Semantic HTML

The component renders the appropriate heading element:

```tsx
<Heading level={1}>Title</Heading>
// Renders: <h1>Title</h1>

<Heading level={3}>Subtitle</Heading>
// Renders: <h3>Subtitle</h3>
```

## Accessibility

- Always use heading levels in order (h1 → h2 → h3)
- Don't skip levels for visual styling; use `as` prop instead
- Each page should have exactly one h1

```tsx
{/* Correct: Maintains semantic hierarchy */}
<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section</Heading>
<Heading level={3}>Subsection</Heading>

{/* If you need h2 to look like h1 */}
<Heading level={1} as="h2">
  Looks like h1, semantically h2
</Heading>
```

## Related

- [Text](./text.md) — Body text component
- [Box](./box.md) — Container component
