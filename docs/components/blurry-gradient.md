# BlurryGradient

An SVG-based decorative gradient component with blurred overlapping circles, perfect for backgrounds and visual accents.

## Import

```tsx
import { BlurryGradient } from '@regardio/react/blurry-gradient';
```

## Usage

### Basic Usage

```tsx
<BlurryGradient
  primaryColor="#3b82f6"
  secondaryColor="#8b5cf6"
  neutralColor="#f0f0f0"
/>
```

### As Background

```tsx
<div className="relative h-screen">
  <BlurryGradient
    primaryColor="#3b82f6"
    secondaryColor="#8b5cf6"
    neutralColor="#f0f0f0"
    className="absolute inset-0 -z-10"
  />
  <div className="relative z-10">
    Content here
  </div>
</div>
```

### With Custom Size

```tsx
<BlurryGradient
  primaryColor="#22c55e"
  secondaryColor="#84cc16"
  neutralColor="#fef9c3"
  style={{ width: '400px', height: '400px' }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `primaryColor` | `string` | — | Primary gradient color (hex/rgb) |
| `secondaryColor` | `string` | — | Secondary gradient color |
| `neutralColor` | `string` | — | Neutral/background color |
| `description` | `string` | `'Decorative blurry gradient'` | Accessible description |

All standard SVG props are also supported.

## Accessibility

The component includes:

- `role="img"` for screen reader recognition
- `aria-labelledby` pointing to a `<title>` element
- Customizable description via the `description` prop

## Color Suggestions

### Warm Palette

```tsx
<BlurryGradient
  primaryColor="#f97316"
  secondaryColor="#ef4444"
  neutralColor="#fef3c7"
/>
```

### Cool Palette

```tsx
<BlurryGradient
  primaryColor="#0ea5e9"
  secondaryColor="#06b6d4"
  neutralColor="#e0f2fe"
/>
```

### Nature Palette

```tsx
<BlurryGradient
  primaryColor="#22c55e"
  secondaryColor="#84cc16"
  neutralColor="#fef9c3"
/>
```

## Technical Details

The gradient is created using:

- SVG with `viewBox="0 0 1000 1000"`
- `preserveAspectRatio="none"` for flexible scaling
- Gaussian blur filter (`stdDeviation="161"`)
- Six overlapping circles with the three colors

## Related

- [BackgroundSlideshow](./background-slideshow.md) — Image-based backgrounds
