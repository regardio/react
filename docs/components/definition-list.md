# DefinitionList

Semantic definition list components (`<dl>`, `<dt>`, `<dd>`) with consistent styling.

## Import

```tsx
import { DefinitionList, Dt, Dd } from '@regardio/react/components/definition-list';
```

## Usage

### Basic Usage

```tsx
<DefinitionList>
  <Dt>Term 1</Dt>
  <Dd>Definition for term 1</Dd>
  <Dt>Term 2</Dt>
  <Dd>Definition for term 2</Dd>
</DefinitionList>
```

### Unstyled Variant

```tsx
<DefinitionList variant="unstyled">
  <Dt>Email</Dt>
  <Dd>contact@example.com</Dd>
  <Dt>Phone</Dt>
  <Dd>+1 234 567 890</Dd>
</DefinitionList>
```

### Contact Information

```tsx
<DefinitionList>
  <Dt>Address</Dt>
  <Dd>123 Main Street, City, Country</Dd>
  <Dt>Email</Dt>
  <Dd>hello@example.com</Dd>
  <Dt>Phone</Dt>
  <Dd>+1 (555) 123-4567</Dd>
</DefinitionList>
```

## Components

### DefinitionList

The container component rendering `<dl>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'unstyled'` | `'primary'` | Visual variant |
| `className` | `string` | — | Additional CSS classes |

### Dt (Definition Term)

The term component rendering `<dt>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'unstyled'` | `'primary'` | Visual variant |
| `className` | `string` | — | Additional CSS classes |

### Dd (Definition Description)

The description component rendering `<dd>`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'unstyled'` | `'primary'` | Visual variant |
| `className` | `string` | — | Additional CSS classes |

## Semantic HTML

These components render proper semantic HTML:

```html
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

This provides:

- Better accessibility for screen readers
- Proper document structure
- SEO benefits for structured content

## Use Cases

- Glossaries
- Contact information
- Product specifications
- FAQ sections
- Metadata display

## Related

- [UnorderedList](./unordered-list.md) — Bullet lists
- [Text](./text.md) — Typography component
