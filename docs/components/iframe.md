# Iframe

A responsive iframe component with sensible defaults for embedded content like videos.

## Import

```tsx
import { Iframe } from '@regardio/react/iframe';
```

## Usage

### YouTube Video

```tsx
<Iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video Title"
/>
```

### With Custom Styling

```tsx
<Iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video Title"
  className="rounded-lg shadow-lg"
/>
```

### Vimeo Video

```tsx
<Iframe
  src="https://player.vimeo.com/video/VIDEO_ID"
  title="Vimeo Video"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | URL of the embedded content |
| `title` | `string` | — | Accessible title (required) |
| `className` | `string` | — | Additional CSS classes |

## Default Behavior

The component includes these defaults:

- **Responsive**: `w-full aspect-video`
- **No border**: `border-0`
- **Lazy loading**: `loading="lazy"`
- **Full permissions**: `allowFullScreen`
- **Feature policy**: Allows accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture, web-share

## Accessibility

The `title` prop is required for accessibility:

```tsx
{/* Good: Descriptive title */}
<Iframe
  src="..."
  title="Product demonstration video"
/>

{/* Bad: Missing or generic title */}
<Iframe src="..." title="Video" />
```

## Aspect Ratio

Default aspect ratio is 16:9 (`aspect-video`). Override with className:

```tsx
{/* Square aspect ratio */}
<Iframe
  src="..."
  title="..."
  className="aspect-square"
/>

{/* 4:3 aspect ratio */}
<Iframe
  src="..."
  title="..."
  className="aspect-[4/3]"
/>
```

## Security

The iframe includes appropriate permissions but you should still:

- Only embed trusted sources
- Consider Content Security Policy (CSP) headers
- Use HTTPS sources

## Related

- [Picture](./picture.md) — Responsive images
