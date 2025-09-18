import type { ComponentProps } from 'react';
import { cva, type VariantProps } from '../utils/cn';

const li = cva({
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: [],
    },
  },
});

export interface ListItemProps extends ComponentProps<'li'>, VariantProps<typeof li> {}

export const ListItem = (props: ListItemProps) => {
  const { children, className, variant } = props;

  return (
    <li
      className={li({
        className,
        variant,
      })}
    >
      {children}
    </li>
  );
};
