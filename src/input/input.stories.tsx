import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder',
    },
    size: {
      control: 'select',
      description: 'Input size',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      description: 'Input variant',
      options: ['default', 'error', 'success'],
    },
  },
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Error state',
    variant: 'error',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Success state',
    variant: 'success',
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Small input',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Default value',
  },
};

export const EmailInput: Story = {
  args: {
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter your password',
    type: 'password',
  },
};

export const NumberInput: Story = {
  args: {
    placeholder: 'Enter a number',
    type: 'number',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'shadow-lg border-blue-300',
    placeholder: 'Custom styled input',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Input placeholder="Default input" />
      <Input
        placeholder="Error input"
        variant="error"
      />
      <Input
        placeholder="Success input"
        variant="success"
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Input
        placeholder="Small input"
        size="sm"
      />
      <Input
        placeholder="Medium input"
        size="md"
      />
      <Input
        placeholder="Large input"
        size="lg"
      />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    onValueChange: (value: string) => console.log('Input changed:', value),
    placeholder: 'Type something...',
  },
};
