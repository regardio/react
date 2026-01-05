# useMediaQuery

A hook that returns a boolean indicating whether the current viewport matches a media query.

## Import

```tsx
import { useMediaQuery } from '@regardio/react/hooks/use-media-query';
```

## Usage

### Basic Usage

```tsx
const isLargeScreen = useMediaQuery('(min-width: 1024px)');

return (
  <div>
    {isLargeScreen ? <DesktopNav /> : <MobileNav />}
  </div>
);
```

### Common Breakpoints

```tsx
const isMobile = useMediaQuery('(max-width: 639px)');
const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
const isDesktop = useMediaQuery('(min-width: 1024px)');
```

### Dark Mode Detection

```tsx
const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
```

### Reduced Motion

```tsx
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `string` | CSS media query string |

## Returns

| Type | Description |
|------|-------------|
| `boolean` | Whether the media query matches |

## Behavior

- Returns `false` during SSR (server-side rendering)
- Updates automatically when viewport changes
- Cleans up event listeners on unmount

## Implementation Details

The hook uses:

- `window.matchMedia()` for query matching
- `addEventListener('change', ...)` for reactive updates
- `useEffect` for setup and cleanup

## SSR Considerations

The hook returns `false` on the server. For SSR apps, consider:

```tsx
const isLargeScreen = useMediaQuery('(min-width: 1024px)');

// Render both initially, hide with CSS
return (
  <>
    <div className="hidden lg:block">Desktop content</div>
    <div className="lg:hidden">Mobile content</div>
  </>
);
```

## Related

- [useMobile](./use-mobile.md) — Mobile device detection
- [useOrientation](./use-orientation.md) — Device orientation
