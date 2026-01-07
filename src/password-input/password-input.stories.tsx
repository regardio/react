import type { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from './password-input';

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/PasswordInput',
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter password',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'secretpassword',
    placeholder: 'Enter password',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'border border-gray-300 rounded px-3 py-2',
    placeholder: 'Styled password input',
  },
};
