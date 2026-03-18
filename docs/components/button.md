# Button

Minimal button component with semantic variant mappings.

## Import

```tsx
import { Button } from '@regardio/react/button';
```

## Usage

See [Component Styling Guide](./styling.md) for general patterns on extending components with app-specific styling.

```tsx
<Button variant="primary">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Cancel</Button>
```

## Variants

- **primary**: Main call-to-action
- **secondary**: Secondary actions
- **destructive**: Dangerous/delete actions
- **outline**: Subtle bordered button
- **ghost**: Minimal transparent button

## Exports

- `Button` - Base button component
- `buttonVariants` - Semantic color mappings
- `ButtonVariant` - TypeScript type
