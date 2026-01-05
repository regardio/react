# useOrientation

A hook for detecting device orientation (portrait or landscape).

## Import

```tsx
import { useOrientation } from '@regardio/react/hooks/use-orientation';
```

## Usage

### Basic Usage

```tsx
const orientation = useOrientation();

return (
  <div>
    Current orientation: {orientation}
  </div>
);
```

### Conditional Rendering

```tsx
const orientation = useOrientation();

return (
  <div>
    {orientation === 'portrait' ? (
      <PortraitLayout />
    ) : (
      <LandscapeLayout />
    )}
  </div>
);
```

### With Other Hooks

```tsx
const isMobile = useMobile();
const orientation = useOrientation();

const showSidebar = !isMobile || orientation === 'landscape';
```

## Returns

| Type | Description |
|------|-------------|
| `'portrait' \| 'landscape'` | Current device orientation |

## Behavior

- Updates automatically when device rotates
- Uses `window.matchMedia('(orientation: portrait)')`
- Returns `'portrait'` as default during SSR

## Use Cases

- Adjusting layouts for rotated tablets
- Showing/hiding elements based on orientation
- Optimizing media display
- Game or app orientation requirements

## CSS Alternative

For simple styling changes, CSS media queries may be simpler:

```css
@media (orientation: portrait) {
  .sidebar { display: none; }
}

@media (orientation: landscape) {
  .sidebar { display: block; }
}
```

## Related

- [useMobile](./use-mobile.md) — Mobile detection
- [useMediaQuery](./use-media-query.md) — Custom media queries
