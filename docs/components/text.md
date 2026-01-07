# Text

A typography component for body text with variant-based styling.

## Import

```tsx
import { Text } from '@regardio/react/text';
```

## Usage

### Basic Usage

```tsx
<Text>This is default body text.</Text>
```

### With Variants

```tsx
<Text variant="primary">Primary text (default)</Text>
<Text variant="subtitle">Larger subtitle text</Text>
<Text variant="code">Monospace code text</Text>
```

### With Custom Element

```tsx
<Text as="span">Inline text</Text>
<Text as="p">Paragraph text</Text>
<Text as="label">Label text</Text>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ElementType` | `'p'` | HTML element to render |
| `variant` | `'primary' \| 'subtitle' \| 'code'` | `'primary'` | Visual variant |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | Text content |

## Variants

### Primary

Default body text styling:

```tsx
<Text variant="primary">
  Standard paragraph text for general content.
</Text>
```

### Subtitle

Larger text for subtitles and lead paragraphs:

```tsx
<Text variant="subtitle">
  A larger introductory paragraph that draws attention.
</Text>
```

### Code

Monospace font for code snippets:

```tsx
<Text variant="code">
  const greeting = 'Hello, World!';
</Text>
```

## Polymorphic Rendering

Use `as` to render different elements:

```tsx
<Text as="span">Inline span</Text>
<Text as="div">Block div</Text>
<Text as="label" htmlFor="input">Form label</Text>
```

## Combining with Other Components

```tsx
<Box variant="container">
  <Heading level={1}>Page Title</Heading>
  <Text variant="subtitle">
    An introduction to the page content.
  </Text>
  <Text>
    Regular body text with more details about the topic.
  </Text>
</Box>
```

## Related

- [Heading](./heading.md) — Heading component
- [Highlight](./highlight.md) — Text highlighting
- [Box](./box.md) — Container component
