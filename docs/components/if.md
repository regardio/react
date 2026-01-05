# If

A conditional rendering utility component that provides a declarative way to handle conditional UI.

## Import

```tsx
import { If } from '@regardio/react/components/if';
```

## Usage

### Basic Conditional

```tsx
<If condition={isLoggedIn}>
  <Dashboard />
</If>
```

### With Fallback

```tsx
<If condition={user} fallback={<LoginPrompt />}>
  <UserProfile />
</If>
```

### With Render Function

Access the condition value in a type-safe way:

```tsx
<If condition={user}>
  {(user) => (
    <p>Welcome, {user.name}!</p>
  )}
</If>
```

### Truthy/Falsy Values

```tsx
{/* Shows when array has items */}
<If condition={items.length}>
  <ItemList items={items} />
</If>

{/* Shows when string is not empty */}
<If condition={errorMessage} fallback={<SuccessMessage />}>
  <ErrorDisplay message={errorMessage} />
</If>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `condition` | `T \| null \| undefined \| false \| 0 \| ''` | — | Value to evaluate |
| `children` | `ReactNode \| ((value: T) => ReactNode)` | — | Content when truthy |
| `fallback` | `ReactNode` | — | Content when falsy |

## Type Safety

When using a render function, TypeScript narrows the type:

```tsx
type User = { name: string; email: string };

const user: User | null = getUser();

<If condition={user}>
  {(user) => (
    // `user` is typed as `User`, not `User | null`
    <span>{user.name}</span>
  )}
</If>
```

## Comparison with Ternary

```tsx
{/* Traditional ternary */}
{user ? <Profile user={user} /> : <Login />}

{/* If component */}
<If condition={user} fallback={<Login />}>
  {(user) => <Profile user={user} />}
</If>
```

Benefits of `If`:

- More readable for complex conditions
- Type-safe access to condition value
- Cleaner JSX without nested ternaries

## Falsy Values

These values are considered falsy:

- `null`
- `undefined`
- `false`
- `0`
- `''` (empty string)

```tsx
<If condition={0}>Never shown</If>
<If condition="">Never shown</If>
<If condition={null}>Never shown</If>
```

## Related

- [GenericError](./generic-error.md) — Error boundary
