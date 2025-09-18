import type { InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';
import { Label } from './label';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ className, error, label, type, ...props }: InputProps) => {
  return (
    <div className={'w-full'}>
      <Label>
        <span>{label}</span>
        <input
          className={cn(
            'border-b-4',
            'border-input/30',
            'border-t-0',
            'border-t-0',
            'border-x-0',
            'disabled:cursor-not-allowed',
            'disabled:opacity-50',
            'file:bg-transparent',
            'file:border-0',
            'file:font-medium',
            'file:text-sm',
            'flex',
            'focus-visible:border-b-input/80',
            'focus-visible:outline-none',
            'focus-visible:ring-0',
            'leading-normal',
            'placeholder:text-muted-foreground',
            'px-0',
            'py-3xs',
            'rounded-b-sm',
            'text-sm',
            'tracking-normal',
            'w-full',
            className,
          )}
          type={type}
          {...props}
        />
      </Label>
      {error}
    </div>
  );
};

export { Input };
