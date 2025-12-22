# @regardio/react

> Reusable React components from Regardio's projects, released into the wild.

Part of Regardio's ongoing mission to provide valuable building blocks for achieving personal and shared aims. We build reusable tools, and commonly used React components from our projects live here for everyone to use.

## Installation

```bash
pnpm add @regardio/react
```

## Usage

Import components, hooks, and utilities directly from their paths for optimal tree-shaking:

```tsx
import { Box } from '@regardio/react/components/box';
import { Link } from '@regardio/react/components/link';
import { useNonce } from '@regardio/react/hooks/use-nonce';
import { cn } from '@regardio/react/utils/cn';
```

## What's Included

- **Components** — UI primitives like `Box`, `Link`, `Carousel`, `Picture`, and more
- **Hooks** — Utilities like `useNonce`, `useMediaQuery`, `useUser`, `useOrientation`
- **Utils** — Helper functions including `cn` (class name merging), locale utilities, and text formatting

## License

**MIT License** — Free to use in commercial and open source projects.
