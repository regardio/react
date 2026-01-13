import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Field } from '../field';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox.Root> = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
    },
    size: {
      control: 'select',
      description: 'Checkbox size',
      options: ['sm', 'md', 'lg'],
    },
  },
  component: Checkbox.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Checkbox.Root>
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const Checked: Story = {
  render: () => (
    <Checkbox.Root defaultChecked>
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const Small: Story = {
  render: () => (
    <Checkbox.Root size="sm">
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const Large: Story = {
  render: () => (
    <Checkbox.Root size="lg">
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Checkbox.Root disabled>
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Field.Root>
      <Field.Label>
        <Checkbox.Root>
          <Checkbox.Indicator />
        </Checkbox.Root>
        Accept terms and conditions
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
            <Checkbox.Root
              checked={checked}
              onCheckedChange={setChecked}
            >
              <Checkbox.Indicator />
            </Checkbox.Root>
            Subscribe to newsletter
          </Field.Label>
        </Field.Root>
        <p className="text-sm text-gray-600">Status: {checked ? 'Subscribed' : 'Not subscribed'}</p>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox.Root size="sm">
        <Checkbox.Indicator />
      </Checkbox.Root>
      <Checkbox.Root size="md">
        <Checkbox.Indicator />
      </Checkbox.Root>
      <Checkbox.Root size="lg">
        <Checkbox.Indicator />
      </Checkbox.Root>
    </div>
  ),
};
