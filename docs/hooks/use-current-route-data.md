# useCurrentRouteData

A hook for accessing the current route's loader data in React Router applications.

## Import

```tsx
import { useCurrentRouteData } from '@regardio/react/hooks/use-current-route-data';
```

## Usage

### Basic Usage

```tsx
const routeData = useCurrentRouteData();

return (
  <div>
    <h1>{routeData?.title}</h1>
  </div>
);
```

### With Type Safety

```tsx
type PageData = {
  title: string;
  content: string;
};

const routeData = useCurrentRouteData<PageData>();

return (
  <article>
    <h1>{routeData?.title}</h1>
    <p>{routeData?.content}</p>
  </article>
);
```

## Returns

| Type | Description |
|------|-------------|
| `T \| undefined` | The current route's loader data |

## React Router Integration

This hook works with React Router's data loading:

```tsx
// Route definition
const router = createBrowserRouter([
  {
    path: '/page',
    element: <Page />,
    loader: async () => {
      return { title: 'My Page', content: '...' };
    },
  },
]);

// Component
function Page() {
  const data = useCurrentRouteData();
  // data = { title: 'My Page', content: '...' }
}
```

## Comparison with useLoaderData

This hook provides a wrapper around React Router's data access with additional convenience features.

## Related

- [useMatchesData](./use-matches-data.md) — Access matched route data
