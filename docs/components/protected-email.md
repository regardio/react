# ProtectedEmail

An email obfuscation component that protects email addresses from scrapers while remaining accessible to users.

## Import

```tsx
import { ProtectedEmail } from '@regardio/react/components/protected-email';
```

## Usage

### Basic Usage

```tsx
<ProtectedEmail
  username="contact"
  domain="example.com"
/>
{/* Displays: contact(at)example.com */}
{/* Clicking opens: mailto:contact@example.com */}
```

### With Custom Display Text

```tsx
<ProtectedEmail
  username="info"
  domain="example.com"
  text="Send us an email"
/>
```

### With Styling

```tsx
<ProtectedEmail
  username="support"
  domain="company.org"
  className="text-blue-600 underline hover:text-blue-800"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `username` | `string` | — | Part before @ symbol |
| `domain` | `string` | — | Part after @ symbol |
| `text` | `string` | `{username}(at){domain}` | Display text |
| `className` | `string` | — | Additional CSS classes |

## How It Works

1. **Server-side**: Renders obfuscated text (`user(at)domain.com`)
2. **Client-side**: JavaScript assembles the actual mailto link
3. **On click**: Opens email client with correct address

This approach:

- Prevents simple email scrapers from harvesting addresses
- Works for users with JavaScript enabled
- Degrades gracefully without JavaScript

## Accessibility

The component includes:

- `aria-label` with readable email description
- `data-email-protected` attribute for identification

```html
<a aria-label="Email address: contact at example.com" ...>
  contact(at)example.com
</a>
```

## Without JavaScript

Users without JavaScript see the obfuscated format (`user(at)domain.com`) and can manually construct the email address.

## Multiple Emails

```tsx
<div className="space-y-2">
  <ProtectedEmail username="sales" domain="example.com" />
  <ProtectedEmail username="support" domain="example.com" />
  <ProtectedEmail
    username="info"
    domain="example.com"
    text="General Inquiries"
  />
</div>
```

## Related

- [Link](./link.md) — General link component
