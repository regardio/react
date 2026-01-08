import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/**/index.ts', 'src/**/index.parts.ts'],
      provider: 'v8',
      thresholds: { branches: 60, functions: 70, lines: 70, statements: 70 },
    },
    projects: [
      {
        extends: true,
        test: {
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}'],
          name: 'unit',
          setupFiles: ['./test-setup.ts'],
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          browser: {
            enabled: true,
            headless: true,
            instances: [
              {
                browser: 'chromium',
              },
            ],
            provider: playwright({}),
          },
          name: 'storybook',
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
