import { Form as BaseUIForm } from '@base-ui/react/form';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const formVariants = {
  compact: ['space-y-4'],
  default: ['space-y-6'],
  inline: ['flex', 'flex-wrap', 'gap-4', 'items-end'],
} as const;

const form = tv({
  base: [],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: formVariants,
  },
});

export type FormVariant = keyof typeof formVariants;

export interface FormProps extends Omit<ComponentProps<typeof BaseUIForm>, 'className'> {
  className?: string;
  variant?: FormVariant;
}

export const Form = ({ className, variant, ...props }: FormProps): React.JSX.Element => {
  return (
    <BaseUIForm
      className={form({
        className,
        variant,
      })}
      {...props}
    />
  );
};
