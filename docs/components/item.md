# Item

A grid item component with theme colors, sizing variants, and optional link support.

## Import

```tsx
import { Item } from '@regardio/react/components/item';
```

## Usage

### Basic Usage

```tsx
<Item>
  <div className="p-4">Item content</div>
</Item>
```

### With Theme Color

```tsx
<Item themeColor="blue" priority="high">
  <div className="p-4">Blue themed item</div>
</Item>
```

### With Link

```tsx
<Item link="/products/123">
  <div className="p-4">Clickable item</div>
</Item>
```

### Grid Layout

```tsx
<div className="grid grid-cols-12 gap-4">
  <Item width="md">Half width</Item>
  <Item width="md">Half width</Item>
  <Item width="full">Full width</Item>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ElementType` | `'div'` | HTML element to render |
| `link` | `string` | — | Optional link URL |
| `width` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'full'` | Column span |
| `height` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Row span |
| `themeColor` | See below | `'unstyled'` | Background color theme |
| `priority` | `'low' \| 'medium' \| 'high'` | `'medium'` | Color intensity |
| `variant` | `'primary' \| 'reset' \| 'spacer' \| 'unstyled'` | `'primary'` | Visual variant |
| `padding` | `'default' \| 'gutter'` | `'default'` | Padding style |
| `className` | `string` | — | Additional CSS classes |

## Theme Colors

Available colors:

- `black`, `white`, `gray`, `neutral`
- `blue`, `cyan`, `teal`
- `green`, `lime`, `olive`
- `yellow`, `orange`, `coral`
- `red`, `pink`, `purple`
- `unstyled` (no color)

## Priority Levels

Priority affects color opacity:

- **`low`** — Subtle background (20% opacity)
- **`medium`** — Medium background (50% opacity)
- **`high`** — Strong background (90% opacity)

```tsx
<Item themeColor="blue" priority="low">Subtle</Item>
<Item themeColor="blue" priority="medium">Medium</Item>
<Item themeColor="blue" priority="high">Strong</Item>
```

## Width Values

Responsive column spans:

| Value | Mobile | XS+ | MD+ | XL+ |
|-------|--------|-----|-----|-----|
| `xs` | 6/12 | 4/12 | 3/12 | 2/12 |
| `sm` | 6/12 | 6/12 | 4/12 | 4/12 |
| `md` | 12/12 | 6/12 | 6/12 | 6/12 |
| `lg` | 12/12 | 8/12 | 8/12 | 8/12 |
| `xl` | 12/12 | 8/12 | 9/12 | 10/12 |
| `full` | 12/12 | 12/12 | 12/12 | 12/12 |

## Variants

- **`primary`** — Default styling
- **`reset`** — Transparent background, no border radius
- **`spacer`** — Hidden (for layout spacing)
- **`unstyled`** — No styling applied

## Related

- [Box](./box.md) — Basic container
- [Link](./link.md) — Link component
