import type { Meta, StoryObj } from '@storybook/react-vite';
import { Highlight } from '../components/highlight';

const meta: Meta<typeof Highlight> = {
  component: Highlight,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Highlight',
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  args: {
    children: 'Highlighted text',
  },
};

export const InParagraph: Story = {
  render: () => (
    <p>
      This is a paragraph with <Highlight>highlighted text</Highlight> in the middle.
    </p>
  ),
};
