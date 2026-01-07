# Picture

A responsive image component with automatic srcset generation for optimal loading.

## Import

```tsx
import { Picture } from '@regardio/react/picture';
```

## Usage

### Simple Image

```tsx
<Picture
  baseUrl="https://cdn.example.com/image.jpg"
  alt="Description of image"
/>
```

### With Responsive Formats

```tsx
<Picture
  baseUrl="https://cdn.example.com/{format}"
  alt="Responsive image"
  formats={[
    { size: '480w', width: 480 },
    { size: '800w', width: 800 },
    { size: '1200w', width: 1200 },
  ]}
/>
```

### With Custom Sizes

```tsx
<Picture
  baseUrl="https://cdn.example.com/{format}"
  alt="Custom sizes"
  formats={[
    { size: '320w', width: 320 },
    { size: '640w', width: 640 },
  ]}
  sizes="(max-width: 640px) 320px, 640px"
/>
```

### With Styling

```tsx
<Picture
  baseUrl="https://cdn.example.com/image.jpg"
  alt="Styled image"
  className="rounded-lg shadow-lg"
  imgClassName="object-cover"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `baseUrl` | `string` | — | URL template with optional `{format}` placeholder |
| `alt` | `string` | — | Image alt text (required) |
| `formats` | `Format[]` | — | Array of format configurations |
| `sizes` | `string` | — | Sizes attribute for responsive images |
| `className` | `string` | — | CSS class for picture element |
| `imgClassName` | `string` | — | CSS class for img element |

## Format Type

```tsx
type Format = {
  size: string;   // Size descriptor (e.g., '480w', '2x')
  width: number;  // Actual width in pixels
};
```

## URL Template

The `baseUrl` supports a `{format}` placeholder:

```tsx
// Template
baseUrl="https://cdn.example.com/images/{format}/photo.webp"

// With formats
formats={[
  { size: '480w', width: 480 },
  { size: '800w', width: 800 },
]}

// Generates srcset:
// https://cdn.example.com/images/480w/photo.webp 480w,
// https://cdn.example.com/images/800w/photo.webp 800w
```

## Sizes Attribute

The `sizes` attribute tells the browser which image to load:

```tsx
sizes="(max-width: 640px) 100vw, 50vw"
// On screens up to 640px: use 100% viewport width
// On larger screens: use 50% viewport width
```

## Lazy Loading

Images are lazy-loaded by default for better performance.

## Accessibility

Always provide meaningful `alt` text:

```tsx
{/* Good */}
<Picture alt="Team members collaborating in office" ... />

{/* Bad */}
<Picture alt="image" ... />
<Picture alt="" ... /> {/* Only for decorative images */}
```

## Related

- [BackgroundSlideshow](./background-slideshow.md) — Background images
- [Iframe](./iframe.md) — Embedded content
