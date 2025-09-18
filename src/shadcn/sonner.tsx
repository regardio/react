import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ theme: _ignoredTheme, ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();
  const resolvedTheme: ToasterProps['theme'] =
    theme === 'light' || theme === 'dark' || theme === 'system' ? theme : 'system';

  return (
    <Sonner
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-border': 'var(--border)',
          '--normal-text': 'var(--popover-foreground)',
        } as React.CSSProperties
      }
      {...props}
      theme={resolvedTheme}
    />
  );
};

export { Toaster };
