# useMatchesData

A hook for accessing data from matched routes in React Router.

## Import

```tsx
import { useMatchesData } from '@regardio/react/hooks/use-matches-data';
```

## Usage

### Basic Usage

```tsx
const rootData = useMatchesData('root');

return (
  <div>
    <span>User: {rootData?.user?.name}</span>
  </div>
);
```

### With Type Safety

```tsx
type RootData = {
  user: { id: string; name: string } | null;
  settings: { theme: string };
};

const rootData = useMatchesData<RootData>('root');
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `routeId` | `string` | The route ID to get data from |

## Returns

| Type | Description |
|------|-------------|
| `T \| undefined` | The matched route's loader data |

## Route IDs

Route IDs are defined in your router configuration:

```tsx
const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        id: 'dashboard',
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
      },
    ],
  },
]);
```

## Use Cases

- Accessing parent route data from child components
- Sharing data across nested routes
- Accessing root-level user/auth data

## Example: Accessing Root User

```tsx
// Root loader
export async function rootLoader() {
  const user = await getUser();
  return { user };
}

// Any nested component
function UserAvatar() {
  const rootData = useMatchesData<{ user: User }>('root');

  if (!rootData?.user) return null;

  return <Avatar user={rootData.user} />;
}
```

## Related

- [useCurrentRouteData](./use-current-route-data.md) — Current route data
