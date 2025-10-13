import type { ComponentProps } from 'react';
import { cva, type VariantProps } from '../utils/cn';

const ul = cva({
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      inline: ['flex', 'flex-wrap', 'list-none'],
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
