import { defineConfig } from 'cva';
import { twMerge } from 'tailwind-merge';

export type { VariantProps } from 'cva';

export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (className: string) => {
      return twMerge(className);
    },
  },
});

export { cx as cn };
