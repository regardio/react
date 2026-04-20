---

title: "@regardio/react — Claude Context"
type: guide
status: published
summary: Entry point for Claude when working on shared React components, hooks, and utilities
locale: en-US
---

# @regardio/react — Claude Context

## What This Is

Regardio's shared React library: components, hooks, and React-specific utilities consumed by every React app in the workspace.

```text
src/ (mirrored in docs/)
├── components/   # UI components (Base UI + Tailwind styling)
├── hooks/        # Reusable React hooks
└── utils/        # React-specific helpers
```

## Boundaries

- **React-specific**: framework-agnostic helpers belong in [`../js`](../js), not here.
- **Styling**: uses `@regardio/tailwind` and `@regardio/brand` tokens — do not hardcode colours or spacing.
- **Component library**: components should be composable and unopinionated; app-specific components stay in the consuming app.

## Standards

Universal standards apply: [`../dev/CLAUDE.md`](../dev/CLAUDE.md). React/TypeScript patterns: [`../dev/docs/en/standards/react.md`](../dev/docs/en/standards/react.md).

## Downstream Consumers

- `ensemble/instrument`
- `channels/*` (TanStack-Start stack and React-Router stack both consume this package)

Breaking API changes — component prop renames, hook signature changes — require a version bump and consumer review.

Full module docs: [`docs/README.md`](./docs/README.md).
