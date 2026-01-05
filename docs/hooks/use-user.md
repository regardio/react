# useUser

A hook for accessing the current user from Supabase authentication.

## Import

```tsx
import { useUser } from '@regardio/react/hooks/use-user';
```

## Usage

### Basic Usage

```tsx
const user = useUser();

if (!user) {
  return <LoginPrompt />;
}

return <Dashboard user={user} />;
```

### With User Data

```tsx
const user = useUser();

return (
  <div>
    {user ? (
      <span>Welcome, {user.email}</span>
    ) : (
      <Link to="/login">Sign In</Link>
    )}
  </div>
);
```

## Returns

| Type | Description |
|------|-------------|
| `User \| null` | Supabase User object or null if not authenticated |

## User Object

The returned user object includes:

```tsx
type User = {
  id: string;
  email?: string;
  phone?: string;
  created_at: string;
  updated_at: string;
  app_metadata: Record<string, any>;
  user_metadata: Record<string, any>;
  // ... other Supabase user properties
};
```

## Context Setup

The hook requires a Supabase auth context. Set up in your app root:

```tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function App() {
  return (
    <SupabaseProvider client={supabase}>
      <YourApp />
    </SupabaseProvider>
  );
}
```

## Authentication Flow

```tsx
const user = useUser();

// Check authentication
if (!user) {
  return <Navigate to="/login" />;
}

// Access user data
console.log(user.id);
console.log(user.email);
console.log(user.user_metadata.name);
```

## Related

- [useNonce](./use-nonce.md) — CSP nonce access
