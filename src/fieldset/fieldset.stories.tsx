import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Fieldset } from './fieldset';

const meta: Meta<typeof Fieldset.Root> = {
  argTypes: {
    variant: {
      control: 'select',
      description: 'Fieldset variant',
      options: ['default', 'compact'],
    },
  },
  component: Fieldset.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Fieldset',
} satisfies Meta<typeof Fieldset.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Personal Information</Fieldset.Legend>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          First Name
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
            placeholder="Enter first name"
            type="text"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Last Name
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
            placeholder="Enter last name"
            type="text"
          />
        </label>
      </div>
    </Fieldset.Root>
  ),
};

export const Compact: Story = {
  render: () => (
    <Fieldset.Root variant="compact">
      <Fieldset.Legend>Contact Details</Fieldset.Legend>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Email
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
            placeholder="Enter email"
            type="email"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Phone
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
            placeholder="Enter phone number"
            type="tel"
          />
        </label>
      </div>
    </Fieldset.Root>
  ),
};

export const SmallLegend: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend size="small">Settings</Fieldset.Legend>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            className="mr-2"
            type="checkbox"
          />
          <span className="text-sm">Enable notifications</span>
        </label>
        <label className="flex items-center">
          <input
            className="mr-2"
            type="checkbox"
          />
          <span className="text-sm">Allow marketing emails</span>
        </label>
      </div>
    </Fieldset.Root>
  ),
};

export const WithCustomClass: Story = {
  render: () => (
    <Fieldset.Root className="bg-blue-50 border-blue-200">
      <Fieldset.Legend className="text-blue-900">Blue Theme</Fieldset.Legend>
      <div className="space-y-4">
        <input
          className="w-full px-3 py-2 border border-blue-300 rounded-md bg-white"
          placeholder="Custom styled input"
          type="text"
        />
        <input
          className="w-full px-3 py-2 border border-blue-300 rounded-md bg-white"
          placeholder="Another input"
          type="text"
        />
      </div>
    </Fieldset.Root>
  ),
};

export const NestedFieldsets: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Account Settings</Fieldset.Legend>
      <div className="space-y-6">
        <Fieldset.Root className="border-gray-300">
          <Fieldset.Legend size="small">Profile Information</Fieldset.Legend>
          <div className="space-y-3">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Username"
              type="text"
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Email"
              type="email"
            />
          </div>
        </Fieldset.Root>
        <Fieldset.Root className="border-gray-300">
          <Fieldset.Legend size="small">Privacy Settings</Fieldset.Legend>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
              />
              <span className="text-sm">Public profile</span>
            </label>
            <label className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
              />
              <span className="text-sm">Show email</span>
            </label>
          </div>
        </Fieldset.Root>
      </div>
    </Fieldset.Root>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6">
      <Fieldset.Root>
        <Fieldset.Legend>User Registration</Fieldset.Legend>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
              placeholder="Enter your full name"
              type="text"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
              placeholder="Enter your email"
              type="email"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Password
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
              placeholder="Enter password"
              type="password"
            />
          </label>
        </div>
      </Fieldset.Root>
      <Button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        type="submit"
      >
        Register
      </Button>
    </form>
  ),
};
