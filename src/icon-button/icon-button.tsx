import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps, ReactNode } from 'react';
import { Button } from '../button';

const iconButtonVariants = {
  default: ['p-2'],
  lg: ['p-3'],
  md: ['p-2'],
  sm: ['p-1'],
} as const;

const iconButton = tv({
  base: ['flex', 'items-center', 'justify-center'],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: iconButtonVariants,
  },
});

export type IconButtonSize = keyof typeof iconButtonVariants;

export interface IconButtonProps extends Omit<ComponentProps<typeof Button>, 'size'> {
  icon: ReactNode;
  size?: IconButtonSize;
  title?: string;
  'aria-label'?: string;
  children?: never; // Prevent children, only icon allowed
}

export const IconButton = ({
  icon,
  size = 'md',
  title,
  'aria-label': ariaLabel,
  className,
  ...props
}: IconButtonProps): React.JSX.Element => {
  // Use title for both title and aria-label if aria-label not provided
  const finalAriaLabel = ariaLabel || title;
  const finalTitle = title || ariaLabel;

  return (
    <Button
      aria-label={finalAriaLabel}
      className={iconButton({ className, size })}
      title={finalTitle}
      {...props}
    >
      {icon}
    </Button>
  );
};
