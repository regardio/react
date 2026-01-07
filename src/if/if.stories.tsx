import type { Meta, StoryObj } from '@storybook/react-vite';
import { If } from './if';

const meta: Meta<typeof If> = {
  component: If,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/If',
};

export default meta;
type Story = StoryObj<typeof If>;

export const TrueCondition: Story = {
  args: {
    children: <p>This content is shown because condition is true</p>,
    condition: true,
  },
};

export const FalseCondition: Story = {
  args: {
    children: <p>This content is hidden</p>,
    condition: false,
  },
};

export const WithFallback: Story = {
  args: {
    children: <p>Primary content</p>,
    condition: false,
    fallback: <p>Fallback content shown when condition is false</p>,
  },
};

export const WithValue: Story = {
  render: () => (
    <If condition={{ age: 30, name: 'John' }}>
      {(user) => (
        <p>
          User: {user.name}, Age: {user.age}
        </p>
      )}
    </If>
  ),
};

export const NullCondition: Story = {
  args: {
    children: <p>This won't show</p>,
    condition: null,
    fallback: <p>Condition was null</p>,
  },
};

export const ZeroCondition: Story = {
  args: {
    children: <p>This won't show</p>,
    condition: 0,
    fallback: <p>Condition was 0 (falsy)</p>,
  },
};

export const EmptyStringCondition: Story = {
  args: {
    children: <p>This won't show</p>,
    condition: '',
    fallback: <p>Condition was empty string (falsy)</p>,
  },
};
