# ListItem

A styled list item component for use within `UnorderedList` or standard `<ul>`/`<ol>` elements.

## Import

```tsx
import { ListItem } from '@regardio/react/components/list-item';
```

## Usage

### Basic Usage

```tsx
<ul>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</ul>
```

### With UnorderedList

```tsx
import { UnorderedList } from '@regardio/react/components/unordered-list';

<UnorderedList>
  <ListItem>Item one</ListItem>
  <ListItem>Item two</ListItem>
  <ListItem>Item three</ListItem>
</UnorderedList>
```

### With Custom Styling

```tsx
<ListItem className="font-bold text-blue-600">
  Styled list item
</ListItem>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary'` | `'primary'` | Visual variant |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | Item content |

All standard `li` props are also supported.

## Semantic HTML

Renders a standard `<li>` element:

```html
<li class="...">Item content</li>
```

## Related

- [UnorderedList](./unordered-list.md) — Parent list component
- [DefinitionList](./definition-list.md) — Definition lists
