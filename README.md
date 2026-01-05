# @regardio/react

> Reusable React components from Regardio's projects, released into the wild.

Part of Regardio's ongoing mission to provide valuable building blocks for achieving personal and shared aims. We build reusable tools, and commonly used React components from our projects live here for everyone to use.

## ⚠️ Pre-release Notice

**This package is currently in pre-release (v0.x).** While we use these components in production across our own projects, the API may still change between minor versions. We recommend:

- Pinning to exact versions in your `package.json`
- Reviewing changelogs before upgrading
- Expecting potential breaking changes until v1.0

## Why This Package?

We created `@regardio/react` to:

- **Share battle-tested components** — These components power real Regardio projects and have been refined through actual use
- **Reduce duplication** — Instead of copying components between projects, we maintain them in one place
- **Provide sensible defaults** — Components come pre-configured with accessibility, responsive design, and TailwindCSS integration
- **Enable tree-shaking** — Import only what you need; unused components won't bloat your bundle

## Installation

```bash
pnpm add @regardio/react
```

### Peer Dependencies

This package requires:

- `react` >= 19.0.0
- `react-dom` >= 19.0.0
- `react-router` >= 7.0.0 (for routing components)
- `tailwindcss` >= 4.0.0 (for styling)

## Usage

Import components, hooks, and utilities directly from their paths for optimal tree-shaking:

```tsx
import { Box } from '@regardio/react/components/box';
import { Link } from '@regardio/react/components/link';
import { useNonce } from '@regardio/react/hooks/use-nonce';
import { cn } from '@regardio/react/utils/cn';
```

### TailwindCSS Integration

Components use TailwindCSS for styling. Import the base styles in your app:

```tsx
import '@regardio/react/styles/tailwind.css';
```

## What's Included

### Components

| Component | Description |
|-----------|-------------|
| `BackgroundSlideshow` | Animated background image carousel with crossfade transitions |
| `BlurryGradient` | SVG-based decorative gradient backgrounds |
| `Box` | Flexible container with variant-based styling |
| `Carousel` | Embla-powered carousel with navigation controls |
| `Countdown` | Dynamic countdown timer display |
| `DefinitionList` | Semantic `<dl>` with `Dt` and `Dd` sub-components |
| `GenericError` | React Router error boundary with i18n support |
| `Heading` | Semantic headings (h1-h6) with consistent styling |
| `Highlight` | Text highlighting with customizable styles |
| `IconButton` | Button optimized for icon-only content |
| `If` | Conditional rendering utility component |
| `Iframe` | Responsive iframe with sensible defaults |
| `Item` | Grid item with theme colors and link support |
| `LeafletMap` | Leaflet map integration |
| `Link` | React Router link with external URL detection |
| `ListItem` | Styled list item component |
| `MaptilerMap` | MapTiler SDK integration |
| `MarkdownContainer` | MDX/Markdown renderer with typography processing |
| `PasswordInput` | Password field with visibility toggle |
| `Picture` | Responsive images with srcset generation |
| `ProtectedEmail` | Email obfuscation for spam protection |
| `Text` | Typography component with variants |
| `UnorderedList` | Styled unordered list with variants |

### Hooks

| Hook | Description |
|------|-------------|
| `useCurrentRouteData` | Access current route loader data |
| `useFocusSearch` | Focus management for search inputs |
| `useMatchesData` | Access matched route data |
| `useMediaQuery` | Reactive media query matching |
| `useMobile` | Mobile device detection |
| `useNonce` | CSP nonce access for inline styles |
| `useOrientation` | Device orientation detection |
| `useUser` | User context from Supabase auth |

### Utilities

| Utility | Description |
|---------|-------------|
| `cn` | TailwindCSS class name merging (tailwind-merge + cva) |
| `author` | Author/contributor data formatting |
| `isRouteActive` | Route matching utilities |
| `locale` | Locale detection and formatting |
| `text` | Typography processing (quotes, special chars) |

## Documentation

See the [docs](./docs) folder for detailed documentation on each component, hook, and utility.

## Storybook

Run Storybook to explore components interactively:

```bash
pnpm storybook
```

## Contributing

This package is primarily maintained for Regardio's internal use, but we welcome:

- Bug reports and fixes
- Documentation improvements
- Feature suggestions (though we may not implement all requests)

## License

**MIT License** — Free to use in commercial and open source projects.
