import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from '../components/list-item';
import { UnorderedList } from '../components/unordered-list';

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/ListItem',
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    children: 'List item content',
  },
};

export const InList: Story = {
  render: () => (
    <UnorderedList>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </UnorderedList>
  ),
};

export const WithCustomClass: Story = {
  args: {
    children: 'Styled list item',
    className: 'font-bold text-blue-600',
  },
};
