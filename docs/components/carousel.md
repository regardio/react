# Carousel

An accessible carousel component powered by Embla Carousel with navigation controls and keyboard support.

## Import

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@regardio/react/carousel';
```

## Usage

### Basic Carousel

```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
</Carousel>
```

### With Navigation Controls

```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious>Previous</CarouselPrevious>
  <CarouselNext>Next</CarouselNext>
</Carousel>
```

### With Options

```tsx
<Carousel opts={{ loop: true, align: 'start' }}>
  <CarouselContent className="gap-4">
    {items.map((item) => (
      <CarouselItem key={item.id}>{item.content}</CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
```

## Components

### Carousel

The root container that provides carousel context.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `opts` | `EmblaOptionsType` | — | Embla Carousel options |
| `plugins` | `EmblaPluginType[]` | — | Embla plugins |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Scroll direction |
| `setApi` | `(api: EmblaCarouselType) => void` | — | Callback to access Embla API |
| `className` | `string` | — | Additional CSS classes |

### CarouselContent

Container for carousel items with scroll behavior.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### CarouselItem

Individual slide container.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### CarouselPrevious / CarouselNext

Navigation buttons for moving between slides.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | Button content |

## Keyboard Navigation

- **Arrow Left/Up** — Previous slide
- **Arrow Right/Down** — Next slide

## Embla API Access

Access the Embla API for advanced control:

```tsx
const [api, setApi] = useState<EmblaCarouselType>();

useEffect(() => {
  if (!api) return;

  api.on('select', () => {
    console.log('Selected:', api.selectedScrollSnap());
  });
}, [api]);

<Carousel setApi={setApi}>
  {/* ... */}
</Carousel>
```

## Related

- [BackgroundSlideshow](./background-slideshow.md) — Background image carousel
