import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    'src/components/*.tsx',
    'src/hooks/*.ts',
    'src/hooks/*.tsx',
    'src/utils/*.ts',
    'src/utils/*.tsx',
    '!src/**/*.test.ts',
    '!src/**/*.test.tsx',
    '!src/**/*.stories.tsx',
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-router', '@supabase/supabase-js'],
  format: ['esm'],
  minify: false,
  outDir: 'dist',
  sourcemap: false,
  splitting: false,
  treeshake: true,
});
