# Component Styling Guide

This guide explains how to extend `@regardio/react` components with app-specific styling.

## Philosophy

Components in `@regardio/react` provide **minimal structural styles** only:

- Layout (flexbox, positioning)
- Transitions and animations
- Focus states
- Semantic variant mappings using tokens

**Apps control all visual styling:**

- Colors, backgrounds, borders
- Typography (sizes, weights, families)
- Spacing (padding, margins)
- Shadows, opacity, border radius
- Disabled states

## Semantic Tokens

Components use semantic tokens that adapt to light/dark modes. Define these in your app's `tokens.css`:

```css
:root {
  /* Core tokens */
  --foreground: var(--color-gray-950);
  --background: var(--color-gray-50);
  --background-muted: var(--color-white);
  --border: var(--color-gray-300);
  --ring: var(--color-teal-500);

  /* Brand tokens */
  --primary: var(--color-teal-600);
  --primary-foreground: var(--color-white);
  --primary-hover: var(--color-teal-700);

  --secondary: var(--color-green-600);
  --secondary-foreground: var(--color-white);
  --secondary-hover: var(--color-green-700);

  --muted: var(--color-gray-100);
  --muted-foreground: var(--color-gray-700);

  --destructive: var(--color-red-600);
  --destructive-foreground: var(--color-white);
  --destructive-hover: var(--color-red-700);
}

.dark {
  --foreground: var(--color-gray-50);
  --background: var(--color-blue-950);
  --muted-foreground: var(--color-gray-300);
  /* ... dark mode values */
}

/* Expose as Tailwind utilities */
@theme inline {
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --color-primary: var(--primary);
  --color-muted-foreground: var(--muted-foreground);
  /* ... */
}
```

## Standard Token Pattern

Follow shadcn/ui conventions: `{component}-{property}`

- `foreground` - primary text
- `muted-foreground` - de-emphasized text
- `primary`, `secondary`, `accent`, `destructive` - brand colors
- `{variant}-foreground` - text color for variant backgrounds
- `{variant}-hover` - hover state for variants
- `background`, `background-muted` - surface colors
- `border`, `border-muted` - border colors
- `ring` - focus ring color

## Extending Components

### Pattern 1: Direct className

For simple one-off styling:

```tsx
<Button
  variant="primary"
  className="px-6 py-3 text-lg font-bold rounded-xl shadow-lg"
>
  Custom Button
</Button>
```

### Pattern 2: App-specific Wrapper

For consistent app-wide styling, create a wrapper component:

```tsx
// app/components/button.tsx
import { Button as BaseButton } from '@regardio/react/button';
import { tv } from '@regardio/tailwind/utils';

const buttonSizes = {
  sm: ['px-3', 'py-1.5', 'text-sm', 'rounded-md'],
  md: ['px-4', 'py-2', 'text-base', 'rounded-lg'],
  lg: ['px-6', 'py-3', 'text-lg', 'rounded-xl'],
} as const;

const button = tv({
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-semibold',
    'border',
    'transition-colors',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ],
  variants: {
    size: buttonSizes,
  },
  defaultVariants: {
    size: 'md',
  },
});

export const Button = ({ size, className, ...props }) => (
  <BaseButton
    className={button({ size, className })}
    {...props}
  />
);
```

### Pattern 3: Custom Variants

Add app-specific variants beyond the base semantic ones:

```tsx
const buttonVariants = {
  // Use base semantic variants
  ...baseButtonVariants,

  // Add custom variants
  gradient: [
    'bg-gradient-to-r',
    'from-primary',
    'to-secondary',
    'text-white',
    'border-0',
  ],
  link: [
    'bg-transparent',
    'text-primary',
    'border-0',
    'underline',
    'hover:text-primary-hover',
  ],
} as const;
```

## Typography Control

Components don't enforce typography. Control it at the implementation level:

```tsx
// App controls all font styling
<Button className="text-sm font-medium">Small</Button>
<Button className="text-lg font-bold">Large</Button>

<Text variant="muted" className="text-base leading-relaxed">
  Custom typography
</Text>
```

## Best Practices

1. **Use semantic tokens** - Enables theme switching and consistency
2. **Keep base minimal** - Only structural/behavioral CSS in base components
3. **App controls visuals** - Colors, typography, spacing at implementation level
4. **Compose variants** - Combine base variants with app-specific ones
5. **Leverage tailwind-variants** - Use `tv()` for complex variant logic

## Example: Complete Button Implementation

```tsx
// app/components/button.tsx
import { Button as BaseButton, buttonVariants as baseVariants } from '@regardio/react/button';
import { tv } from '@regardio/tailwind/utils';

const buttonVariants = {
  ...baseVariants,
  gradient: ['bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white'],
} as const;

const buttonSizes = {
  sm: ['px-3', 'py-1.5', 'text-sm', 'font-medium', 'rounded-md'],
  md: ['px-4', 'py-2', 'text-base', 'font-semibold', 'rounded-lg'],
  lg: ['px-6', 'py-3', 'text-lg', 'font-bold', 'rounded-xl'],
} as const;

const button = tv({
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'border',
    'transition-all',
    'duration-200',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-ring',
    'focus:ring-offset-2',
  ],
  variants: {
    variant: buttonVariants,
    size: buttonSizes,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export interface ButtonProps extends ComponentProps<typeof BaseButton> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  variant,
  size,
  className,
  ...props
}: ButtonProps) => (
  <BaseButton
    className={button({ variant, size, className })}
    {...props}
  />
);
```

## See Also

- [Button Component](./button.md)
- [Toggle Component](./toggle.md)
- [Switch Component](./switch.md)
