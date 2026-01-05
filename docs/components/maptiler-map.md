# MaptilerMap

A MapTiler SDK integration component for displaying vector maps with customizable styles.

## Import

```tsx
import { MaptilerMap } from '@regardio/react/components/maptiler-map';
```

## Usage

### Basic Usage

```tsx
<MaptilerMap
  apiKey="your-maptiler-api-key"
  center={[13.4, 52.52]}
  zoom={10}
/>
```

### With Custom Style

```tsx
<MaptilerMap
  apiKey="your-maptiler-api-key"
  center={[13.4, 52.52]}
  zoom={10}
  style="streets-v2"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiKey` | `string` | — | MapTiler API key |
| `center` | `[number, number]` | — | Map center [lng, lat] |
| `zoom` | `number` | — | Initial zoom level |
| `style` | `string` | — | MapTiler style ID |
| `className` | `string` | — | Additional CSS classes |

## API Key

Get your API key from [MapTiler Cloud](https://cloud.maptiler.com/).

Store it securely:

```tsx
// In environment variables
const apiKey = import.meta.env.VITE_MAPTILER_KEY;

<MaptilerMap apiKey={apiKey} ... />
```

## Map Styles

MapTiler provides various styles:

- `streets-v2` — Street map
- `satellite` — Satellite imagery
- `hybrid` — Satellite with labels
- `topo-v2` — Topographic
- `basic-v2` — Basic style
- Custom styles from MapTiler Cloud

## Related

- [LeafletMap](./leaflet-map.md) — Leaflet integration
