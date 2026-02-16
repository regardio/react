'use client';

import { tv } from '@regardio/tailwind/utils';
import { useState } from 'react';
import { Button } from '../button';
import { Input } from '../input';

const passwordInputVariants = {
  default: [],
  withToggle: [],
} as const;

const passwordInput = tv({
  base: ['relative'],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: passwordInputVariants,
  },
});

const toggleButton = tv({
  base: [
    'absolute',
    'right-3',
    'top-1/2',
    '-translate-y-1/2',
    'flex',
    'h-5',
    'w-5',
    'cursor-pointer',
    'items-center',
    'justify-center',
    'text-gray-500',
    'hover:text-gray-700',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'rounded',
    'transition-colors',
    'duration-200',
  ],
});

export type PasswordInputVariant = keyof typeof passwordInputVariants;

export interface PasswordInputProps
  extends Omit<React.ComponentProps<typeof Input>, 'type' | 'variant'> {
  className?: string;
  inputVariant?: 'default' | 'error' | 'success';
  showToggle?: boolean;
  variant?: PasswordInputVariant;
}

export const PasswordInput = ({
  className,
  variant = 'default',
  inputVariant = 'default',
  showToggle = true,
  ...props
}: PasswordInputProps): React.JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={passwordInput({ className, variant })}>
      <Input
        autoComplete="off"
        className={showToggle ? 'pr-10' : ''}
        type={showPassword ? 'text' : 'password'}
        variant={inputVariant}
        {...props}
      />
      {showToggle && (
        <Button
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className={toggleButton()}
          onClick={togglePasswordVisibility}
          size="sm"
          variant="ghost"
        >
          {showPassword ? (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          )}
        </Button>
      )}
    </div>
  );
};
