# GenericError

A reusable error boundary component for React Router applications with i18n support.

## Import

```tsx
import { GenericError, getErrorDescriptor } from '@regardio/react/generic-error';
```

## Usage

### As Error Element

```tsx
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <GenericError />,
  },
]);
```

### With Custom Message Rendering

```tsx
<GenericError
  renderMessage={(descriptor) => (
    <p>{t(`errors.${descriptor.defaultId}`)}</p>
  )}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `renderMessage` | `(descriptor: ErrorDescriptor) => ReactElement` | — | Custom message renderer |

## ErrorDescriptor Type

The `getErrorDescriptor` function returns one of three types:

### HTTP Error

```tsx
{
  type: 'http';
  status: number;        // e.g., 404, 500
  statusText: string;    // e.g., 'Not Found'
  defaultId: string;     // e.g., 'errors.404'
  defaultMessage: string; // e.g., 'Not found'
}
```

### Runtime Error

```tsx
{
  type: 'error';
  defaultId: string;      // 'errors.runtime'
  defaultMessage: string; // 'An unexpected error occurred.'
  message?: string;       // Error message
  stack?: string;         // Stack trace (dev only)
}
```

### Unknown Error

```tsx
{
  type: 'unknown';
  defaultId: string;      // 'errors.unknown'
  defaultMessage: string; // 'An unexpected error occurred.'
}
```

## Using getErrorDescriptor

For custom error handling or i18n:

```tsx
function CustomErrorBoundary() {
  const error = useRouteError();
  const descriptor = getErrorDescriptor(error);
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t(descriptor.defaultId)}</h1>
      {descriptor.type === 'http' && (
        <p>Status: {descriptor.status}</p>
      )}
    </div>
  );
}
```

## Development Mode

In development (`import.meta.env.DEV`), runtime errors display:

- Error message
- Full stack trace

In production, only the generic message is shown.

## Default Behavior

Without `renderMessage`, the component displays:

- **HTTP errors**: "Error {status}" with status text
- **Runtime errors**: Error message (dev) or generic message (prod)
- **Unknown errors**: Generic error message

## Styling

The component uses these CSS classes:

- `pt-2xl p-sm container mx-auto` — Main container
- `w-full p-sm overflow-x-auto` — Stack trace container

## Related

- [If](./if.md) — Conditional rendering
