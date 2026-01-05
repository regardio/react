# useNonce

A hook for accessing the CSP (Content Security Policy) nonce for inline styles and scripts.

## Import

```tsx
import { useNonce } from '@regardio/react/hooks/use-nonce';
```

## Usage

### Basic Usage

```tsx
const nonce = useNonce();

return (
  <style nonce={nonce}>
    {`.custom { color: red; }`}
  </style>
);
```

### With Inline Scripts

```tsx
const nonce = useNonce();

return (
  <script nonce={nonce}>
    {`console.log('Inline script with nonce');`}
  </script>
);
```

## Returns

| Type | Description |
|------|-------------|
| `string \| undefined` | The CSP nonce value, or undefined if not set |

## Context Setup

The nonce is typically provided via React context from your app's root:

```tsx
// In your root component
import { NonceProvider } from '@regardio/react/hooks/use-nonce';

function App() {
  const nonce = getServerNonce(); // From your server

  return (
    <NonceProvider value={nonce}>
      <YourApp />
    </NonceProvider>
  );
}
```

## Why Use Nonces?

Content Security Policy (CSP) helps prevent XSS attacks by controlling which scripts and styles can execute. Nonces allow specific inline content to bypass CSP restrictions.

## Server Setup

Your server must:

1. Generate a unique nonce per request
2. Include it in the CSP header
3. Pass it to your React app

Example CSP header:

```http
Content-Security-Policy: script-src 'nonce-abc123'; style-src 'nonce-abc123'
```

## Related

- [useUser](./use-user.md) — User context
