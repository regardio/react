# isRouteActive

Utilities for determining if routes are active in React Router applications.

## Import

```tsx
import { isRouteActive, matchesPath } from '@regardio/react/utils/is-route-active';
```

## Usage

### Check Active Route

```tsx
const isActive = isRouteActive('/about', currentPath);
```

### With Navigation

```tsx
function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = isRouteActive(to, location.pathname);

  return (
    <Link
      to={to}
      className={isActive ? 'text-blue-500' : 'text-gray-500'}
    >
      {children}
    </Link>
  );
}
```

### Exact vs Partial Matching

```tsx
// Exact match
isRouteActive('/about', '/about')        // true
isRouteActive('/about', '/about/team')   // false

// Partial match (starts with)
matchesPath('/about', '/about/team')     // true
```

## Functions

### isRouteActive

Checks if a route exactly matches the current path.

| Parameter | Type | Description |
|-----------|------|-------------|
| `route` | `string` | Route to check |
| `currentPath` | `string` | Current location path |

Returns: `boolean`

### matchesPath

Checks if the current path starts with the given route.

| Parameter | Type | Description |
|-----------|------|-------------|
| `route` | `string` | Route prefix to check |
| `currentPath` | `string` | Current location path |

Returns: `boolean`

## Use Cases

- Navigation highlighting
- Breadcrumb active states
- Sidebar menu expansion
- Conditional rendering based on route

## With React Router

```tsx
function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav>
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            'nav-link',
            (item.exact
              ? isRouteActive(item.path, location.pathname)
              : matchesPath(item.path, location.pathname)
            ) && 'active'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
```

## Related

- [Link](../components/link.md) — Link component with active states
- [useCurrentRouteData](../hooks/use-current-route-data.md) — Route data access
