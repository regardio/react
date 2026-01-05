# BackgroundSlideshow

An animated background image carousel with crossfade transitions, designed for hero sections and full-screen backgrounds.

## Import

```tsx
import { BackgroundSlideshow } from '@regardio/react/components/background-slideshow';
```

## Usage

### Basic Usage

```tsx
const images = [
  { id: '1', fn: 'image1.jpg', at: { en: 'Description 1' }, hu: 200, po: false },
  { id: '2', fn: 'image2.jpg', at: { en: 'Description 2' }, hu: 150, po: false },
];

<BackgroundSlideshow
  baseUrl="https://cdn.example.com/{id}/{format}"
  images={images}
  locale="en"
/>
```

### With Custom Timing

```tsx
<BackgroundSlideshow
  baseUrl="https://cdn.example.com/{id}/{format}"
  images={images}
  locale="en"
  slideshowInterval={8000}
  transitionDuration={3000}
/>
```

### Static Background (No Animation)

```tsx
<BackgroundSlideshow
  baseUrl="https://cdn.example.com/{id}/{format}"
  images={images}
  locale="en"
  slideshow={false}
/>
```

### With Filter

```tsx
<BackgroundSlideshow
  baseUrl="https://cdn.example.com/{id}/{format}"
  images={images}
  locale="en"
  filter={(image) => image.hu > 100}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `baseUrl` | `string` | — | URL template with `{id}` and `{format}` placeholders |
| `images` | `ImageData[]` | — | Array of image data objects |
| `locale` | `string` | — | Locale for alt text selection |
| `className` | `string` | `''` | CSS class for container |
| `imgClassName` | `string` | `''` | CSS class for images |
| `pictureClassName` | `string` | `''` | CSS class for picture elements |
| `slideshow` | `boolean` | `true` | Enable slideshow animation |
| `slideshowInterval` | `number` | `6000` | Time between transitions (ms) |
| `transitionDuration` | `number` | `6000` | Crossfade duration (ms) |
| `filter` | `(image: ImageData) => boolean` | — | Filter function for images |

## ImageData Type

```tsx
type ImageData = {
  id: string;       // Unique identifier
  fn: string;       // Filename
  at: Record<string, string>;  // Alt text by locale
  hu: number;       // Hue value (HSL degrees)
  po: boolean;      // Is placeholder
};
```

## URL Template

The `baseUrl` supports placeholders:

- `{id}` — Replaced with image ID
- `{format}` — Replaced with image format/size

Example: `https://cdn.example.com/images/{id}/{format}.webp`

## Styling

The component renders absolutely positioned images. Wrap in a container with defined dimensions:

```tsx
<div className="relative h-screen w-full">
  <BackgroundSlideshow
    baseUrl="..."
    images={images}
    locale="en"
    className="absolute inset-0"
  />
  <div className="relative z-10">
    {/* Content overlay */}
  </div>
</div>
```

## Related

- [Picture](./picture.md) — Responsive image component
- [Carousel](./carousel.md) — Interactive carousel
