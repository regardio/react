import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    size: {
      control: 'select',
      description: 'Icon button size',
      options: ['sm', 'md', 'lg'],
    },
    title: {
      control: 'text',
      description: 'Title for tooltip and accessibility',
    },
    variant: {
      control: 'select',
      description: 'Button variant',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
  },
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/IconButton',
};

export default meta;
type Story = StoryObj<typeof meta>;

const PlusIcon = () => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
  >
    <line
      x1="12"
      x2="12"
      y1="5"
      y2="19"
    />
    <line
      x1="5"
      x2="19"
      y1="12"
      y2="12"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
  >
    <line
      x1="18"
      x2="6"
      y1="6"
      y2="18"
    />
    <line
      x1="6"
      x2="18"
      y1="6"
      y2="18"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle
      cx="12"
      cy="12"
      r="3"
    />
    <path d="m12 1v6m0 6v6m4.22-13.22 4.24 4.24M1.54 8.96l4.24 4.24m12.44 0 4.24 4.24M1.54 15.04l4.24-4.24" />
  </svg>
);

export const Default: Story = {
  args: {
    icon: <PlusIcon />,
    title: 'Add',
  },
};

export const Close: Story = {
  args: {
    icon: <CloseIcon />,
    title: 'Close',
    variant: 'ghost',
  },
};

export const Settings: Story = {
  args: {
    icon: <SettingsIcon />,
    title: 'Settings',
    variant: 'secondary',
  },
};

export const Small: Story = {
  args: {
    icon: <PlusIcon />,
    size: 'sm',
    title: 'Add',
  },
};

export const Large: Story = {
  args: {
    icon: <PlusIcon />,
    size: 'lg',
    title: 'Add',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: <PlusIcon />,
    title: 'Add',
  },
};

export const WithAriaLabel: Story = {
  args: {
    'aria-label': 'Close dialog',
    icon: <CloseIcon />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconButton
        icon={<PlusIcon />}
        title="Add"
        variant="primary"
      />
      <IconButton
        icon={<SettingsIcon />}
        title="Settings"
        variant="secondary"
      />
      <IconButton
        icon={<CloseIcon />}
        title="Close"
        variant="ghost"
      />
      <IconButton
        icon={<PlusIcon />}
        title="Delete"
        variant="destructive"
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton
        icon={<PlusIcon />}
        size="sm"
        title="Small"
      />
      <IconButton
        icon={<PlusIcon />}
        size="md"
        title="Medium"
      />
      <IconButton
        icon={<PlusIcon />}
        size="lg"
        title="Large"
      />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    icon: <PlusIcon />,
    onClick: () => alert('Icon button clicked!'),
    title: 'Add item',
  },
};
