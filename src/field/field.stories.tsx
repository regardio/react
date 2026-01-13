import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../checkbox';
import { Input } from '../input';
import { Field } from './field';

const meta = {
  argTypes: {
    variant: {
      control: 'select',
      description: 'Field variant',
      options: ['default', 'required'],
    },
  },
  component: Field.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Field',
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field.Root>
      <Field.Label>Email Address</Field.Label>
      <Input placeholder="Enter your email" />
      <Field.Description>We'll never share your email with anyone else.</Field.Description>
    </Field.Root>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field.Root>
      <Field.Label variant="error">Email Address</Field.Label>
      <Input
        placeholder="Enter your email"
        variant="error"
      />
      <Field.Error>This field is required</Field.Error>
    </Field.Root>
  ),
};

export const Required: Story = {
  render: () => (
    <Field.Root variant="required">
      <Field.Label>Full Name</Field.Label>
      <Input placeholder="Enter your full name" />
      <Field.Description>Please enter your first and last name.</Field.Description>
    </Field.Root>
  ),
};

export const HorizontalLayout: Story = {
  render: () => (
    <Field.Root>
      <Field.Item layout="horizontal">
        <Checkbox.Root>
          <Checkbox.Indicator />
        </Checkbox.Root>
        <Field.Label>Subscribe to newsletter</Field.Label>
      </Field.Item>
      <Field.Description>Receive updates about new features</Field.Description>
    </Field.Root>
  ),
};

export const MultipleFields: Story = {
  render: () => (
    <div className="space-y-6">
      <Field.Root>
        <Field.Label>First Name</Field.Label>
        <Input placeholder="Enter your first name" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Last Name</Field.Label>
        <Input placeholder="Enter your last name" />
      </Field.Root>
      <Field.Root variant="required">
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Enter your email"
          type="email"
        />
        <Field.Description>We'll never share your email.</Field.Description>
      </Field.Root>
    </div>
  ),
};

export const WithCustomClass: Story = {
  render: () => (
    <Field.Root className="bg-gray-50 p-4 rounded-lg">
      <Field.Label className="text-blue-600">Custom Field</Field.Label>
      <Input
        className="bg-white border-blue-300"
        placeholder="Custom styled input"
      />
    </Field.Root>
  ),
};
