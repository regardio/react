import { defineConfig } from 'tsdown';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/*/index.ts', 'src/hooks/*.ts', 'src/hooks/*.tsx', 'src/utils/*/index.ts'],
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-router', '@supabase/supabase-js'],
  format: 'esm',
  outDir: 'dist',
  sourcemap: false,
  treeshake: true,
});
