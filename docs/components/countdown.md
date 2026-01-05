# Countdown

A dynamic countdown timer display component that shows remaining time until a target date.

## Import

```tsx
import { Countdown } from '@regardio/react/components/countdown';
```

## Usage

### Basic Usage

```tsx
<Countdown />
```

### With Target Date

```tsx
<Countdown targetDate={new Date('2024-12-31T23:59:59')} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `targetDate` | `Date` | — | Target date for countdown |
| `className` | `string` | — | Additional CSS classes |

## Display Format

The countdown displays:

- **Days** — Remaining days
- **Hours** — Remaining hours (0-23)
- **Minutes** — Remaining minutes (0-59)
- **Seconds** — Remaining seconds (0-59)

## Behavior

- Updates every second
- Shows zeros when countdown completes
- Handles timezone differences

## Styling

The component renders individual time units that can be styled:

```tsx
<Countdown
  targetDate={eventDate}
  className="text-4xl font-bold"
/>
```

## Use Cases

- Event countdowns
- Sale timers
- Launch announcements
- Deadline reminders

## Related

- [Text](./text.md) — Typography component
