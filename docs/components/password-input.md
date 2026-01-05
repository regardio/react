# PasswordInput

A password input field with a visibility toggle button.

## Import

```tsx
import { PasswordInput } from '@regardio/react/components/password-input';
```

## Usage

### Basic Usage

```tsx
<PasswordInput placeholder="Enter password" />
```

### Controlled

```tsx
const [password, setPassword] = useState('');

<PasswordInput
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter password"
/>
```

### With Form

```tsx
<form onSubmit={handleSubmit}>
  <label htmlFor="password">Password</label>
  <PasswordInput
    id="password"
    name="password"
    required
    minLength={8}
  />
  <button type="submit">Submit</button>
</form>
```

### With Custom Styling

```tsx
<PasswordInput
  className="border border-gray-300 rounded px-3 py-2"
  placeholder="Styled password input"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

All standard `input` props are also supported.

## Behavior

- Default type is `password` (hidden)
- Click toggle button to show/hide password
- Toggle button shows eye icon (implementation may vary)

## Accessibility

- Toggle button should have accessible label
- Input should be associated with a label
- Consider adding password requirements hint

```tsx
<div>
  <label htmlFor="pwd">Password</label>
  <PasswordInput id="pwd" aria-describedby="pwd-hint" />
  <p id="pwd-hint">Must be at least 8 characters</p>
</div>
```

## Security Notes

- Never log or store passwords in plain text
- Use HTTPS for form submission
- Consider implementing password strength indicator

## Related

- [If](./if.md) — Conditional rendering
