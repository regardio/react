import {
  Combobox as BaseUICombobox,
  type ComboboxArrowProps,
  type ComboboxBackdropProps,
  type ComboboxGroupProps,
  type ComboboxLabelProps,
  type ComboboxPortalProps,
  type ComboboxRowProps,
  type ComboboxStatusProps,
} from '@base-ui/react/combobox';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import type { JSX } from 'react/jsx-runtime';

const comboboxInputGroup = tv({
  base: ['relative', 'w-full'],
});

const comboboxInput = tv({
  base: [
    'w-full',
    'border',
    'border-current',
    'rounded-md',
    'bg-background-muted',
    'text-foreground',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-ring',
    'transition-colors',
  ],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      lg: ['px-4', 'py-3', 'text-lg'],
      md: ['px-3', 'py-2'],
      sm: ['px-2', 'py-1', 'text-sm'],
    },
  },
});

const comboboxTrigger = tv({
  base: [
    'absolute',
    'right-0',
    'top-0',
    'bottom-0',
    'flex',
    'items-center',
    'px-3',
    'text-muted-foreground',
    'hover:text-foreground',
    'cursor-pointer',
  ],
});

const comboboxIcon = tv({
  base: ['flex', 'items-center'],
});

const comboboxClear = tv({
  base: [
    'absolute',
    'right-10',
    'top-0',
    'bottom-0',
    'flex',
    'items-center',
    'px-2',
    'text-muted-foreground',
    'hover:text-foreground',
    'cursor-pointer',
  ],
});

const comboboxChips = tv({
  base: [
    'flex',
    'flex-wrap',
    'gap-1',
    'pr-10',
    'px-3',
    'py-2',
    'border',
    'border-current',
    'rounded-md',
    'bg-background-muted',
    'min-h-[42px]',
  ],
});

const comboboxChip = tv({
  base: [
    'inline-flex',
    'items-center',
    'gap-1',
    'px-2',
    'py-1',
    'rounded',
    'bg-muted',
    'text-foreground',
    'text-sm',
  ],
});

const comboboxChipRemove = tv({
  base: [
    'flex',
    'items-center',
    'text-muted-foreground',
    'hover:text-foreground',
    'cursor-pointer',
  ],
});

const comboboxPositioner = tv({
  base: ['absolute', 'z-50'],
});

const comboboxPopup = tv({
  base: [
    'min-w-[var(--anchor-width)]',
    'mt-1',
    'rounded-md',
    'border',
    'border-current',
    'bg-background',
    'shadow-lg',
    'overflow-hidden',
  ],
});

const comboboxList = tv({
  base: ['max-h-60', 'overflow-auto', 'py-1', 'bg-background'],
});

const comboboxItem = tv({
  base: [
    'flex',
    'items-center',
    'gap-2',
    'px-3',
    'py-2',
    'cursor-pointer',
    'text-foreground',
    'data-[highlighted]:bg-muted',
    'data-[selected]:bg-primary',
    'data-[selected]:text-primary-foreground',
  ],
});

const comboboxItemIndicator = tv({
  base: ['flex', 'data-[unselected]:hidden'],
});

const comboboxEmpty = tv({
  base: ['px-3', 'py-2', 'text-muted-foreground'],
});

const comboboxGroupLabel = tv({
  base: ['px-3', 'py-2', 'text-muted-foreground', 'font-semibold'],
});

const comboboxSeparator = tv({
  base: ['my-1', 'h-px', 'bg-border'],
});

export type ComboboxSize = 'sm' | 'md' | 'lg';

interface ComboboxInputGroupProps extends ComponentProps<typeof BaseUICombobox.InputGroup> {
  className?: string;
}

interface ComboboxInputProps extends Omit<ComponentProps<typeof BaseUICombobox.Input>, 'size'> {
  className?: string;
  size?: ComboboxSize;
}

interface ComboboxTriggerProps extends ComponentProps<typeof BaseUICombobox.Trigger> {
  children?: ReactNode;
  className?: string;
}

interface ComboboxIconProps extends ComponentProps<typeof BaseUICombobox.Icon> {
  className?: string;
}

interface ComboboxClearProps extends ComponentProps<typeof BaseUICombobox.Clear> {
  children?: ReactNode;
  className?: string;
}

interface ComboboxChipsProps extends ComponentProps<typeof BaseUICombobox.Chips> {
  className?: string;
}

interface ComboboxChipProps extends ComponentProps<typeof BaseUICombobox.Chip> {
  className?: string;
}

interface ComboboxChipRemoveProps extends ComponentProps<typeof BaseUICombobox.ChipRemove> {
  children?: ReactNode;
  className?: string;
}

interface ComboboxPositionerProps extends ComponentProps<typeof BaseUICombobox.Positioner> {
  className?: string;
}

interface ComboboxPopupProps extends ComponentProps<typeof BaseUICombobox.Popup> {
  className?: string;
}

interface ComboboxListProps extends ComponentProps<typeof BaseUICombobox.List> {
  className?: string;
}

interface ComboboxItemProps extends ComponentProps<typeof BaseUICombobox.Item> {
  className?: string;
}

interface ComboboxItemIndicatorProps extends ComponentProps<typeof BaseUICombobox.ItemIndicator> {
  className?: string;
}

interface ComboboxEmptyProps extends ComponentProps<typeof BaseUICombobox.Empty> {
  className?: string;
}

interface ComboboxGroupLabelProps extends ComponentProps<typeof BaseUICombobox.GroupLabel> {
  className?: string;
}

interface ComboboxSeparatorProps extends ComponentProps<typeof BaseUICombobox.Separator> {
  className?: string;
}

const ComboboxInputGroup = ({ className, ...props }: ComboboxInputGroupProps): JSX.Element => (
  <BaseUICombobox.InputGroup
    className={comboboxInputGroup({ className })}
    {...props}
  />
);

const ComboboxInput = ({ className, size = 'md', ...props }: ComboboxInputProps): JSX.Element => (
  <BaseUICombobox.Input
    className={comboboxInput({ className, size })}
    {...props}
  />
);

const ComboboxTrigger = ({ className, children, ...props }: ComboboxTriggerProps): JSX.Element => (
  <BaseUICombobox.Trigger
    className={comboboxTrigger({ className })}
    {...props}
  >
    {children}
  </BaseUICombobox.Trigger>
);

const ComboboxIcon = ({ className, children = '▼', ...props }: ComboboxIconProps): JSX.Element => (
  <BaseUICombobox.Icon
    className={comboboxIcon({ className })}
    {...props}
  >
    {children}
  </BaseUICombobox.Icon>
);

const ComboboxClear = ({
  className,
  children = '✕',
  ...props
}: ComboboxClearProps): JSX.Element => (
  <BaseUICombobox.Clear
    className={comboboxClear({ className })}
    {...props}
  >
    {children}
  </BaseUICombobox.Clear>
);

const ComboboxChips = ({ className, ...props }: ComboboxChipsProps): JSX.Element => (
  <BaseUICombobox.Chips
    className={comboboxChips({ className })}
    {...props}
  />
);

const ComboboxChip = ({ className, ...props }: ComboboxChipProps): JSX.Element => (
  <BaseUICombobox.Chip
    className={comboboxChip({ className })}
    {...props}
  />
);

const ComboboxChipRemove = ({
  className,
  children = '✕',
  ...props
}: ComboboxChipRemoveProps): JSX.Element => (
  <BaseUICombobox.ChipRemove
    className={comboboxChipRemove({ className })}
    {...props}
  >
    {children}
  </BaseUICombobox.ChipRemove>
);

const ComboboxPositioner = ({ className, ...props }: ComboboxPositionerProps): JSX.Element => (
  <BaseUICombobox.Positioner
    className={comboboxPositioner({ className })}
    {...props}
  />
);

const ComboboxPopup = ({ className, ...props }: ComboboxPopupProps): JSX.Element => (
  <BaseUICombobox.Popup
    className={comboboxPopup({ className })}
    {...props}
  />
);

const ComboboxList = ({ className, ...props }: ComboboxListProps): JSX.Element => (
  <BaseUICombobox.List
    className={comboboxList({ className })}
    {...props}
  />
);

const ComboboxItem = ({ className, ...props }: ComboboxItemProps): JSX.Element => (
  <BaseUICombobox.Item
    className={comboboxItem({ className })}
    {...props}
  />
);

const ComboboxItemIndicator = ({
  className,
  children = '✓',
  ...props
}: ComboboxItemIndicatorProps): JSX.Element => (
  <BaseUICombobox.ItemIndicator
    className={comboboxItemIndicator({ className })}
    {...props}
  >
    {children}
  </BaseUICombobox.ItemIndicator>
);

const ComboboxEmpty = ({ className, ...props }: ComboboxEmptyProps): JSX.Element => (
  <BaseUICombobox.Empty
    className={comboboxEmpty({ className })}
    {...props}
  />
);

const ComboboxGroupLabel = ({ className, ...props }: ComboboxGroupLabelProps): JSX.Element => (
  <BaseUICombobox.GroupLabel
    className={comboboxGroupLabel({ className })}
    {...props}
  />
);

const ComboboxSeparator = ({ className, ...props }: ComboboxSeparatorProps): JSX.Element => (
  <BaseUICombobox.Separator
    className={comboboxSeparator({ className })}
    {...props}
  />
);

export const Combobox: {
  Arrow: ForwardRefExoticComponent<Omit<ComboboxArrowProps, 'ref'> & RefAttributes<HTMLDivElement>>;
  Backdrop: ForwardRefExoticComponent<
    Omit<ComboboxBackdropProps, 'ref'> & RefAttributes<HTMLDivElement>
  >;
  Chip: ({ className, ...props }: ComboboxChipProps) => JSX.Element;
  ChipRemove: ({ className, children, ...props }: ComboboxChipRemoveProps) => JSX.Element;
  Chips: ({ className, ...props }: ComboboxChipsProps) => JSX.Element;
  Clear: ({ className, children, ...props }: ComboboxClearProps) => JSX.Element;
  Collection: typeof BaseUICombobox.Collection;
  Empty: ({ className, ...props }: ComboboxEmptyProps) => JSX.Element;
  Group: ForwardRefExoticComponent<Omit<ComboboxGroupProps, 'ref'> & RefAttributes<HTMLDivElement>>;
  GroupLabel: ({ className, ...props }: ComboboxGroupLabelProps) => JSX.Element;
  Icon: ({ className, children, ...props }: ComboboxIconProps) => JSX.Element;
  Input: ({ className, size, ...props }: ComboboxInputProps) => JSX.Element;
  InputGroup: ({ className, ...props }: ComboboxInputGroupProps) => JSX.Element;
  Item: ({ className, ...props }: ComboboxItemProps) => JSX.Element;
  ItemIndicator: ({ className, children, ...props }: ComboboxItemIndicatorProps) => JSX.Element;
  Label: ForwardRefExoticComponent<Omit<ComboboxLabelProps, 'ref'> & RefAttributes<HTMLDivElement>>;
  List: ({ className, ...props }: ComboboxListProps) => JSX.Element;
  Popup: ({ className, ...props }: ComboboxPopupProps) => JSX.Element;
  Portal: ForwardRefExoticComponent<
    Omit<ComboboxPortalProps, 'ref'> & RefAttributes<HTMLDivElement>
  >;
  Positioner: ({ className, ...props }: ComboboxPositionerProps) => JSX.Element;
  Root: typeof BaseUICombobox.Root;
  Row: ForwardRefExoticComponent<Omit<ComboboxRowProps, 'ref'> & RefAttributes<HTMLDivElement>>;
  Separator: ({ className, ...props }: ComboboxSeparatorProps) => JSX.Element;
  Status: ForwardRefExoticComponent<
    Omit<ComboboxStatusProps, 'ref'> & RefAttributes<HTMLDivElement>
  >;
  Trigger: ({ className, children, ...props }: ComboboxTriggerProps) => JSX.Element;
  Value: typeof BaseUICombobox.Value;
} = {
  Arrow: BaseUICombobox.Arrow,
  Backdrop: BaseUICombobox.Backdrop,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
  Chips: ComboboxChips,
  Clear: ComboboxClear,
  Collection: BaseUICombobox.Collection,
  Empty: ComboboxEmpty,
  Group: BaseUICombobox.Group,
  GroupLabel: ComboboxGroupLabel,
  Icon: ComboboxIcon,
  Input: ComboboxInput,
  InputGroup: ComboboxInputGroup,
  Item: ComboboxItem,
  ItemIndicator: ComboboxItemIndicator,
  Label: BaseUICombobox.Label,
  List: ComboboxList,
  Popup: ComboboxPopup,
  Portal: BaseUICombobox.Portal,
  Positioner: ComboboxPositioner,
  Root: BaseUICombobox.Root,
  Row: BaseUICombobox.Row,
  Separator: ComboboxSeparator,
  Status: BaseUICombobox.Status,
  Trigger: ComboboxTrigger,
  Value: BaseUICombobox.Value,
};
