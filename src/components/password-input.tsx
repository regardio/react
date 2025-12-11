import { Button } from '@base-ui/react/button';
import { Input } from '@base-ui/react/input';
import { useState } from 'react';
import { cn } from '../utils/cn';

export interface InputProps extends React.ComponentPropsWithoutRef<typeof Input> {}

export interface PasswordInputProps extends InputProps {
  className?: string;
}

const PasswordInput = ({ className, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={'relative'}>
      <Input
        autoComplete={'off'}
        className={cn(className)}
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
      <Button
        className={cn(
          'absolute',
          'right-[14px]',
          'top-[35px]',
          'flex',
          'h-6',
          'w-[20px]',
          'cursor-pointer',
          'flex-col',
          'items-end',
          'justify-center',
          'text-gray-500',
        )}
        onClick={togglePasswordVisibility}
      >
        {showPassword ? 'Off' : 'On'}
      </Button>
    </div>
  );
};

export { PasswordInput };
