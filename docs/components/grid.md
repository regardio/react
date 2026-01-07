# Grid

A fluid 12-column CSS Grid component using container queries and Utopia-style fluid spacing.

## Import

```tsx
import { Grid } from '@regardio/react/grid';
```

## Usage

### Basic Grid

```tsx
<Grid.Root>
  <Grid.Item span={6}>Half width</Grid.Item>
  <Grid.Item span={6}>Half width</Grid.Item>
  <Grid.Item span={12}>Full width</Grid.Item>
</Grid.Root>
```

### Responsive with Container Queries

```tsx
<Grid.Root>
  <Grid.Item span={12} spanSm={6} spanMd={4} spanLg={3}>
    Responsive item
  </Grid.Item>
</Grid.Root>
```

### Column Positioning

```tsx
<Grid.Root>
  <Grid.Item start={3} span={8}>
    Starts at column 3, spans 8 columns
  </Grid.Item>
  <Grid.Item start={1} end={5}>
    Columns 1-4
  </Grid.Item>
</Grid.Root>
```

## CSS Variables

The grid uses CSS custom properties for configuration. Define these in your app:

```css
:root {
  --spacing-grid-max: 80rem;
  --spacing-grid-gutter: var(--space-2xs-l); /* Utopia fluid space */
}
```

See [Utopia Grid Calculator](https://utopia.fyi/grid/calculator) for generating fluid values.

## Grid.Root Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `flow` | `'dense' \| 'row' \| 'column'` | `'dense'` | Grid auto-flow behavior |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | — | Content alignment |
| `className` | `string` | — | Additional CSS classes |
| `classNames` | `{ root?: string }` | — | Slot-specific classes |

## Grid.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `span` | `1-12 \| 'full'` | `12` | Column span (base) |
| `spanXs` | `1-12 \| 'full'` | — | Column span at `@xs` container |
| `spanSm` | `1-12 \| 'full'` | — | Column span at `@sm` container |
| `spanMd` | `1-12 \| 'full'` | — | Column span at `@md` container |
| `spanLg` | `1-12 \| 'full'` | — | Column span at `@lg` container |
| `spanXl` | `1-12 \| 'full'` | — | Column span at `@xl` container |
| `start` | `1-13 \| 'auto'` | — | Column start position |
| `end` | `1-13 \| 'auto'` | — | Column end position |
| `rowSpan` | `1-6 \| 'full'` | — | Row span |
| `className` | `string` | — | Additional CSS classes |
| `classNames` | `{ root?: string }` | — | Slot-specific classes |

## Style Overrides

Use [tailwind-variants](https://www.tailwind-variants.org/docs/overriding-styles) patterns:

```tsx
<Grid.Root className="bg-gray-100 p-4">
  <Grid.Item span={6} className="bg-white rounded-lg p-6">
    Custom styled item
  </Grid.Item>
</Grid.Root>
```

## Extending with tailwind-variants

Import the base styles for custom variants:

```tsx
import { gridItem } from '@regardio/react/grid';

const customItem = gridItem.extend({
  variants: {
    theme: {
      primary: { root: 'bg-blue-100' },
      secondary: { root: 'bg-gray-100' },
    },
  },
});
```

## Related

- [@regardio/tailwind grid.css](../../packages/tailwind/src/styles/grid.css) — Base grid utilities
- [Utopia](https://utopia.fyi/) — Fluid responsive design
