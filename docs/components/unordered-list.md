# UnorderedList

A styled unordered list component with variant support.

## Import

```tsx
import { UnorderedList } from '@regardio/react/components/unordered-list';
import { ListItem } from '@regardio/react/components/list-item';
```

## Usage

### Basic Usage

```tsx
<UnorderedList>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</UnorderedList>
```

### Inline Variant

```tsx
<UnorderedList variant="inline">
  <ListItem>Tag 1</ListItem>
  <ListItem>Tag 2</ListItem>
  <ListItem>Tag 3</ListItem>
</UnorderedList>
```

### Unstyled Variant

```tsx
<UnorderedList variant="unstyled">
  <ListItem>No bullet 1</ListItem>
  <ListItem>No bullet 2</ListItem>
  <ListItem>No bullet 3</ListItem>
</UnorderedList>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'inline' \| 'unstyled'` | `'primary'` | Visual variant |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | ListItem children |

## Variants

### Primary

Standard bulleted list:

```tsx
<UnorderedList variant="primary">
  <ListItem>Bullet point one</ListItem>
  <ListItem>Bullet point two</ListItem>
</UnorderedList>
```

### Inline

Horizontal list for tags or navigation:

```tsx
<UnorderedList variant="inline">
  <ListItem>Home</ListItem>
  <ListItem>About</ListItem>
  <ListItem>Contact</ListItem>
</UnorderedList>
```

### Unstyled

No bullets or list styling:

```tsx
<UnorderedList variant="unstyled">
  <ListItem>Clean item 1</ListItem>
  <ListItem>Clean item 2</ListItem>
</UnorderedList>
```

## Semantic HTML

Renders a standard `<ul>` element:

```html
<ul class="...">
  <li>Item</li>
</ul>
```

## Use Cases

- Feature lists
- Navigation menus (inline)
- Tag lists (inline)
- Content lists

## Related

- [ListItem](./list-item.md) — List item component
- [DefinitionList](./definition-list.md) — Definition lists
