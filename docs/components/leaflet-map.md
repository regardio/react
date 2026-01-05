# LeafletMap

A Leaflet map integration component for displaying interactive maps.

## Import

```tsx
import { LeafletMap } from '@regardio/react/components/leaflet-map';
```

## Usage

### Basic Usage

```tsx
<LeafletMap
  center={[51.505, -0.09]}
  zoom={13}
/>
```

### With Markers

```tsx
<LeafletMap
  center={[51.505, -0.09]}
  zoom={13}
  markers={[
    { position: [51.505, -0.09], popup: 'Location A' },
    { position: [51.51, -0.1], popup: 'Location B' },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `center` | `[number, number]` | — | Map center coordinates [lat, lng] |
| `zoom` | `number` | — | Initial zoom level |
| `markers` | `MarkerData[]` | — | Array of marker configurations |
| `className` | `string` | — | Additional CSS classes |

## Requirements

This component requires:

- Leaflet CSS to be imported
- A tile layer provider (e.g., OpenStreetMap, MapTiler)

```tsx
import 'leaflet/dist/leaflet.css';
```

## Tile Providers

Configure your preferred tile provider in the component or via props.

## Note

For MapTiler integration, consider using the `MaptilerMap` component instead, which provides a more streamlined setup.

## Related

- [MaptilerMap](./maptiler-map.md) — MapTiler SDK integration
