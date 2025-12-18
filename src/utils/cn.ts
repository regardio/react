import { cx, defineConfig } from 'cva';
import { twMerge } from 'fluid-tailwindcss/tailwind-merge';

export type { VariantProps } from 'cva';

export const { cva, compose } = defineConfig({
  hooks: {
    onComplete: (className: string) => {
      return twMerge(className);
    },
  },
});

export const cn = (...inputs: Parameters<typeof cx>) => twMerge(cx(inputs));
