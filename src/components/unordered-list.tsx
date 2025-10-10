import type { ComponentProps } from 'react';
import { cva, type VariantProps } from '../utils/cn';

const ul = cva({
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      indented: ['list-none', 'p-0', 'pl-2'],
      inline: ['flex', 'flex-wrap', 'gap-2', 'list-none', 'p-0'],
      primary: [],
      unstyled: ['list-none', 'p-0'],
    },
  },
});

export interface UnorderedListProps extends ComponentProps<'ul'>, VariantProps<typeof ul> {}

export const UnorderedList = (props: UnorderedListProps) => {
  const { children, className, variant } = props;

  return (
    <ul
      className={ul({
        className,
        variant,
      })}
    >
      {children}
    </ul>
  );
};
