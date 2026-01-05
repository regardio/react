import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '../components/text';

const meta: Meta<typeof Text> = {
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Text',
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is default text content.',
  },
};

export const Subtitle: Story = {
  args: {
    children: 'This is subtitle text with larger size.',
    variant: 'subtitle',
  },
};

export const Code: Story = {
  args: {
    children: "const example = 'monospace code text';",
    variant: 'code',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text variant="primary">Primary text (default)</Text>
      <Text variant="subtitle">Subtitle text</Text>
      <Text variant="code">Code text with monospace font</Text>
    </div>
  ),
};
