import type { ComponentProps, ReactNode } from 'react';

export interface IconButtonProps extends ComponentProps<'button'> {
  icon: ReactNode;
}

export const IconButton = (props: IconButtonProps) => {
  const { className, icon } = props;

  const defaultClassName = 'p-0';

  return (
    <button
      className={className ? className : defaultClassName}
      type={'button'}
    >
      {icon}
    </button>
  );
};
