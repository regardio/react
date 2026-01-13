import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import { useState } from 'react';
import { Button } from '../button';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  argTypes: {
    defaultPressed: {
      control: 'boolean',
      description: 'Initial pressed state (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle',
    },
    pressed: {
      control: 'boolean',
      description: 'Pressed state (controlled)',
    },
    size: {
      control: 'select',
      description: 'Toggle size',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      description: 'Toggle variant',
      options: ['default', 'outline', 'ghost'],
    },
  },
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Toggle',
};

export default meta;
type Story = StoryObj<typeof meta>;

const HeartIcon = ({ filled = false }) => (
  <svg
    fill={filled ? 'currentColor' : 'none'}
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 16 16"
    width="16"
  >
    <path d="M7.99961 13.8667C7.88761 13.8667 7.77561 13.8315 7.68121 13.7611C7.43321 13.5766 1.59961 9.1963 1.59961 5.8667C1.59961 3.80856 3.27481 2.13336 5.33294 2.13336C6.59054 2.13336 7.49934 2.81176 7.99961 3.3131C8.49988 2.81176 9.40868 2.13336 10.6663 2.13336C12.7244 2.13336 14.3996 3.80803 14.3996 5.8667C14.3996 9.1963 8.56601 13.5766 8.31801 13.7616C8.22361 13.8315 8.11161 13.8667 7.99961 13.8667Z" />
  </svg>
);

const StarIcon = ({ filled = false }) => (
  <svg
    fill={filled ? 'currentColor' : 'none'}
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 16 16"
    width="16"
  >
    <path d="m8 1.62 1.94 3.93 4.34.63-3.14 3.06.74 4.32L8 12.22l-3.88 2.34.74-4.32-3.14-3.06 4.34-.63L8 1.62Z" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    fill="none"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 16 16"
    width="16"
  >
    <circle
      cx="8"
      cy="8"
      r="2"
    />
    <path d="m8 1v3m0 6v3m2.83-9.83 2.12 2.12M1.17 5.17l2.12 2.12m9.42 0 2.12 2.12M1.17 10.83l2.12-2.12" />
  </svg>
);

export const Default: Story = {
  args: {
    children: <HeartIcon />,
    title: 'Favorite',
  },
};

export const Pressed: Story = {
  args: {
    children: <HeartIcon filled />,
    defaultPressed: true,
    title: 'Favorite',
  },
};

export const Controlled: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle
        onPressedChange={setPressed}
        pressed={pressed}
        title="Favorite"
      >
        <HeartIcon filled={pressed} />
      </Toggle>
    );
  },
};

export const Ghost: Story = {
  args: {
    children: <StarIcon />,
    title: 'Star',
    variant: 'ghost',
  },
};

export const Small: Story = {
  args: {
    children: <SettingsIcon />,
    size: 'sm',
    title: 'Settings',
  },
};

export const Large: Story = {
  args: {
    children: <SettingsIcon />,
    size: 'lg',
    title: 'Settings',
  },
};

export const Disabled: Story = {
  args: {
    children: <HeartIcon />,
    disabled: true,
    title: 'Favorite',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle title="Default">
        <HeartIcon />
      </Toggle>
      <Toggle
        title="Outline"
        variant="outline"
      >
        <StarIcon />
      </Toggle>
      <Toggle
        title="Ghost"
        variant="ghost"
      >
        <SettingsIcon />
      </Toggle>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle
        size="sm"
        title="Small"
      >
        <HeartIcon />
      </Toggle>
      <Toggle
        size="md"
        title="Medium"
      >
        <HeartIcon />
      </Toggle>
      <Toggle
        size="lg"
        title="Large"
      >
        <HeartIcon />
      </Toggle>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <div className="space-y-4">
        <Toggle
          onPressedChange={setPressed}
          pressed={pressed}
          title="Toggle favorite"
        >
          <HeartIcon filled={pressed} />
        </Toggle>
        <p className="text-sm text-gray-600">State: {pressed ? 'pressed' : 'not pressed'}</p>
      </div>
    );
  },
};

export const CustomRender: Story = {
  args: {
    render: (props: React.ComponentProps<'button'>) => (
      <Button
        {...props}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <svg
          fill="currentColor"
          height="16"
          viewBox="0 0 16 16"
          width="16"
        >
          <path d="m6.5 3.5 3 3-3 3" />
        </svg>
      </Button>
    ),
  },
};
