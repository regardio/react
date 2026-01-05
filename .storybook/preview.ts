import type { Preview } from '@storybook/react-vite';
import '../src/styles/storybook.css';

const preview: Preview = {
  initialGlobals: {
    backgrounds: {
      value: 'light',
    },
  },
  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#0f3b50' },
        light: { name: 'light', value: '#ffffff' },
        warm: { name: 'warm', value: '#f1eded' },
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
