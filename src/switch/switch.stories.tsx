import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Field } from '../field';
import { Switch } from './switch';

const meta: Meta<typeof Switch.Root> = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
    },
    size: {
      control: 'select',
      description: 'Switch size',
      options: ['sm', 'md', 'lg'],
    },
  },
  component: Switch.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Switch',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Switch.Root>
      <Switch.Thumb />
    </Switch.Root>
  ),
};

export const Checked: Story = {
  render: () => (
    <Switch.Root defaultChecked>
      <Switch.Thumb />
    </Switch.Root>
  ),
};

export const Small: Story = {
  render: () => (
    <Switch.Root size="sm">
      <Switch.Thumb size="sm" />
    </Switch.Root>
  ),
};

export const Large: Story = {
  render: () => (
    <Switch.Root size="lg">
      <Switch.Thumb size="lg" />
    </Switch.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Switch.Root disabled>
      <Switch.Thumb />
    </Switch.Root>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Field.Root>
      <Field.Label>
        <Switch.Root>
          <Switch.Thumb />
        </Switch.Root>
        Enable notifications
      </Field.Label>
    </Field.Root>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="space-y-4">
        <Field.Root>
          <Field.Label>
            <Switch.Root
              checked={checked}
              onCheckedChange={setChecked}
            >
              <Switch.Thumb />
            </Switch.Root>
            Dark mode
          </Field.Label>
        </Field.Root>
        <p className="text-sm text-gray-600">Mode: {checked ? 'Dark' : 'Light'}</p>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Switch.Root size="sm">
        <Switch.Thumb size="sm" />
      </Switch.Root>
      <Switch.Root size="md">
        <Switch.Thumb size="md" />
      </Switch.Root>
      <Switch.Root size="lg">
        <Switch.Thumb size="lg" />
      </Switch.Root>
    </div>
  ),
};
