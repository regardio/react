# cn

A utility for merging TailwindCSS class names with conflict resolution.

## Import

```tsx
import { cn, cva, compose } from '@regardio/react/utils/cn';
```

## Usage

### Basic Class Merging

```tsx
cn('px-4 py-2', 'px-6')
// Result: 'py-2 px-6' (px-6 overrides px-4)

cn('text-red-500', condition && 'text-blue-500')
// Result: 'text-blue-500' if condition is true
```

### With Conditional Classes

```tsx
cn(
  'base-class',
  isActive && 'active-class',
  isDisabled && 'disabled-class'
)
```

### In Components

```tsx
function Button({ className, variant }) {
  return (
    <button className={cn(
      'px-4 py-2 rounded',
      variant === 'primary' && 'bg-blue-500 text-white',
      variant === 'secondary' && 'bg-gray-200 text-gray-800',
      className
    )}>
      Click me
    </button>
  );
}
```

## cva (Class Variance Authority)

Create variant-based class configurations:

```tsx
const button = cva({
  base: ['px-4', 'py-2', 'rounded'],
  variants: {
    variant: {
      primary: ['bg-blue-500', 'text-white'],
      secondary: ['bg-gray-200', 'text-gray-800'],
    },
    size: {
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

// Usage
button({ variant: 'primary', size: 'lg' })
button({ variant: 'secondary', className: 'mt-4' })
```

## compose

Combine multiple cva configurations:

```tsx
const baseButton = cva({ base: ['rounded'] });
const coloredButton = cva({
  variants: {
    color: {
      red: ['bg-red-500'],
      blue: ['bg-blue-500'],
    },
  },
});

const button = compose(baseButton, coloredButton);
```

## How It Works

The utility combines:

- **cva** — Class Variance Authority for variant management
- **tailwind-merge** — Intelligent Tailwind class conflict resolution
- **cx** — Class name concatenation

## Conflict Resolution

Tailwind-merge handles conflicting classes:

```tsx
cn('p-4', 'p-6')        // 'p-6'
cn('mx-4', 'mx-auto')   // 'mx-auto'
cn('text-sm', 'text-lg') // 'text-lg'
```

## Type Safety

Export `VariantProps` for type-safe variant props:

```tsx
import { cva, type VariantProps } from '@regardio/react/utils/cn';

const button = cva({ ... });

type ButtonProps = VariantProps<typeof button>;
// { variant?: 'primary' | 'secondary'; size?: 'sm' | 'md' | 'lg' }
```

## Related

- [Box component](../components/box.md) — Uses cva for variants
- [Link component](../components/link.md) — Uses cva for variants
