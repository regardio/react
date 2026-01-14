import { CheckboxGroup as BaseUICheckboxGroup } from '@base-ui/react/checkbox-group';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const checkboxGroup = tv({
  base: ['flex', 'flex-col', 'gap-2'],
  defaultVariants: {
    orientation: 'vertical',
  },
  variants: {
    orientation: {
      horizontal: ['flex-row', 'gap-4'],
      vertical: ['flex-col', 'gap-2'],
    },
  },
});

export type CheckboxGroupOrientation = 'horizontal' | 'vertical';

export interface CheckboxGroupProps
  extends Omit<ComponentProps<typeof BaseUICheckboxGroup>, 'className'> {
  className?: string;
  orientation?: CheckboxGroupOrientation;
}

export const CheckboxGroup = ({
  className,
  orientation = 'vertical',
  ...props
}: CheckboxGroupProps): React.JSX.Element => {
  return (
    <BaseUICheckboxGroup
      className={checkboxGroup({
        className,
        orientation,
      })}
      {...props}
    />
  );
};
