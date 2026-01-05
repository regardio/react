# useMobile

A hook for detecting mobile device viewports.

## Import

```tsx
import { useMobile } from '@regardio/react/hooks/use-mobile';
```

## Usage

### Basic Usage

```tsx
const isMobile = useMobile();

return (
  <div>
    {isMobile ? (
      <MobileLayout />
    ) : (
      <DesktopLayout />
    )}
  </div>
);
```

### Conditional Rendering

```tsx
const isMobile = useMobile();

return (
  <nav>
    {isMobile ? <HamburgerMenu /> : <FullNavigation />}
  </nav>
);
```

## Returns

| Type | Description |
|------|-------------|
| `boolean` | `true` if viewport is mobile-sized |

## Breakpoint

The hook uses a standard mobile breakpoint (typically 768px or similar). Check the implementation for the exact value used.

## SSR Considerations

Returns `false` during server-side rendering. Use CSS-based responsive design for critical above-the-fold content.

## When to Use

Use this hook when you need to:

- Render completely different components for mobile vs desktop
- Load different assets based on device
- Implement device-specific behavior

For simple layout changes, prefer CSS media queries or Tailwind responsive classes.

## Related

- [useMediaQuery](./use-media-query.md) — Custom media queries
- [useOrientation](./use-orientation.md) — Device orientation
