# List

A compound component for building semantic lists with flexible rendering options.

## Import

```tsx
import { List } from '@regardio/react/list';
```

## Usage

### Basic Usage

```tsx
<List.Root>
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
  <List.Item>Third item</List.Item>
</List.Root>
```

### With Custom Styling

```tsx
<List.Root className="list-none space-y-sm">
  <List.Item className="font-bold">Styled item one</List.Item>
  <List.Item className="text-blue-600">Styled item two</List.Item>
</List.Root>
```

### Inline List

```tsx
<List.Root className="flex gap-sm list-none">
  <List.Item>Tag 1</List.Item>
  <List.Item>Tag 2</List.Item>
  <List.Item>Tag 3</List.Item>
</List.Root>
```

### With Links

```tsx
<List.Root className="list-none">
  <List.Item>
    <Link to="/home">Home</Link>
  </List.Item>
  <List.Item>
    <Link to="/about">About</Link>
  </List.Item>
</List.Root>
```

## Components

### List.Root

The container component that renders as `<ul>` by default.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `render` | `'ul'` | `'ul'` | Element to render |
| `defaultItemElement` | `'li' \| 'div' \| 'span' \| 'dd' \| 'dt'` | `'li'` | Default element for items |
| `defaultItemClassName` | `string` | — | Default class for all items |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | List.Item children |

### List.Item

Individual list item component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `render` | `'li' \| 'div' \| 'span' \| 'dd' \| 'dt'` | Inherited | Element to render |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | Item content |

## Semantic HTML

Renders standard list elements:

```html
<ul class="...">
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

## Use Cases

- Feature lists
- Navigation menus
- Tag lists
- Content lists
- Definition-style lists (with custom render props)

## Related

- [DefinitionList](./definition-list.md) — For term/definition pairs
