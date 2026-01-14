import { RadioGroup as BaseUIRadioGroup } from '@base-ui/react/radio-group';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const radioGroup = tv({
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

export type RadioGroupOrientation = 'horizontal' | 'vertical';

export interface RadioGroupProps
  extends Omit<ComponentProps<typeof BaseUIRadioGroup>, 'className'> {
  className?: string;
  orientation?: RadioGroupOrientation;
}

export const RadioGroup = ({
  className,
  orientation = 'vertical',
  ...props
}: RadioGroupProps): React.JSX.Element => {
  return (
    <BaseUIRadioGroup
      className={radioGroup({
        className,
        orientation,
      })}
      {...props}
    />
  );
};
