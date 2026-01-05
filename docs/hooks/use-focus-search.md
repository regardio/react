# useFocusSearch

A hook for managing focus on search input elements.

## Import

```tsx
import { useFocusSearch } from '@regardio/react/hooks/use-focus-search';
```

## Usage

### Basic Usage

```tsx
const { ref, focus } = useFocusSearch();

return (
  <div>
    <input ref={ref} type="search" placeholder="Search..." />
    <button onClick={focus}>Focus Search</button>
  </div>
);
```

### With Keyboard Shortcut

```tsx
const { ref, focus } = useFocusSearch();

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      focus();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [focus]);

return <input ref={ref} type="search" />;
```

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `ref` | `RefObject<HTMLInputElement>` | Ref to attach to input |
| `focus` | `() => void` | Function to focus the input |

## Use Cases

- Global search with keyboard shortcut
- Command palette activation
- Form field focus management
- Accessibility improvements

## Related

- [useMediaQuery](./use-media-query.md) — Media query hook
