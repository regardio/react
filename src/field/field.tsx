import { Field as BaseUIField } from '@base-ui/react/field';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps, ReactNode } from 'react';

const fieldRootVariants = {
  default: [],
  required: ['after:content-["*"]', 'after:ml-1', 'after:text-red-500'],
} as const;

const fieldRoot = tv({
  base: ['space-y-1'],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: fieldRootVariants,
  },
});

const fieldLabel = tv({
  base: ['block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1'],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: [],
      error: ['text-red-600'],
    },
  },
});

const fieldDescription = tv({
  base: ['text-sm', 'text-gray-500', 'mt-1'],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: [],
      error: ['text-red-600'],
    },
  },
});

const fieldError = tv({
  base: ['text-sm', 'text-red-600', 'mt-1'],
});

const fieldItem = tv({
  base: ['flex', 'flex-col'],
  defaultVariants: {
    layout: 'default',
  },
  variants: {
    layout: {
      default: [],
      horizontal: ['flex-row', 'items-center', 'gap-2'],
    },
  },
});

export type FieldRootVariant = keyof typeof fieldRootVariants;
export type FieldLabelVariant = 'default' | 'error';
export type FieldDescriptionVariant = 'default' | 'error';
export type FieldItemLayout = 'default' | 'horizontal';

export interface FieldRootProps extends Omit<ComponentProps<typeof BaseUIField.Root>, 'className'> {
  className?: string;
  variant?: FieldRootVariant;
}

export interface FieldLabelProps
  extends Omit<ComponentProps<typeof BaseUIField.Label>, 'className'> {
  className?: string;
  variant?: FieldLabelVariant;
}

export interface FieldDescriptionProps
  extends Omit<ComponentProps<typeof BaseUIField.Description>, 'className'> {
  className?: string;
  variant?: FieldDescriptionVariant;
}

export interface FieldErrorProps
  extends Omit<ComponentProps<typeof BaseUIField.Error>, 'className'> {
  className?: string;
}

export interface FieldItemProps extends ComponentProps<'div'> {
  children: ReactNode;
  className?: string;
  layout?: FieldItemLayout;
}

export const FieldRoot = ({ className, variant, ...props }: FieldRootProps): React.JSX.Element => {
  return (
    <BaseUIField.Root
      className={fieldRoot({
        className,
        variant,
      })}
      {...props}
    />
  );
};

export const FieldLabel = ({
  className,
  variant,
  ...props
}: FieldLabelProps): React.JSX.Element => {
  return (
    <BaseUIField.Label
      className={fieldLabel({
        className,
        variant,
      })}
      {...props}
    />
  );
};

export const FieldDescription = ({
  className,
  variant,
  ...props
}: FieldDescriptionProps): React.JSX.Element => {
  return (
    <BaseUIField.Description
      className={fieldDescription({
        className,
        variant,
      })}
      {...props}
    />
  );
};

export const FieldError = ({ className, ...props }: FieldErrorProps): React.JSX.Element => {
  return (
    <BaseUIField.Error
      className={fieldError({
        className,
      })}
      {...props}
    />
  );
};

export const FieldItem = ({
  className,
  layout,
  children,
  ...props
}: FieldItemProps): React.JSX.Element => {
  return (
    <div
      className={fieldItem({
        className,
        layout,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export const Field: {
  Control: typeof BaseUIField.Control;
  Description: typeof FieldDescription;
  Error: typeof FieldError;
  Item: typeof FieldItem;
  Label: typeof FieldLabel;
  Root: typeof FieldRoot;
  Validity: typeof BaseUIField.Validity;
} = {
  Control: BaseUIField.Control,
  Description: FieldDescription,
  Error: FieldError,
  Item: FieldItem,
  Label: FieldLabel,
  Root: FieldRoot,
  Validity: BaseUIField.Validity,
};
