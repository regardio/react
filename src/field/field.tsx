import { Field as BaseUIField } from '@base-ui/react/field';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps, ReactNode } from 'react';

const fieldRootVariants = {
  default: ['space-y-1'],
  required: ['space-y-1', 'after:content-["*"]', 'after:ml-1', 'after:text-destructive'],
} as const;

const fieldRoot = tv({
  base: [],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: fieldRootVariants,
  },
});

const fieldLabel = tv({
  base: [],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: ['block', 'text-foreground', 'mb-1'],
      error: ['block', 'text-destructive', 'mb-1'],
    },
  },
});

const fieldDescription = tv({
  base: [],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: ['text-muted-foreground', 'mt-1'],
      error: ['text-destructive', 'mt-1'],
    },
  },
});

const fieldError = tv({
  base: [],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: ['text-destructive', 'mt-1'],
    },
  },
});

const fieldItem = tv({
  base: [],
  defaultVariants: {
    layout: 'default',
  },
  variants: {
    layout: {
      default: ['flex', 'flex-col'],
      horizontal: ['flex', 'flex-row', 'items-center', 'gap-2'],
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
