import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from '../components/list-item';
import { UnorderedList } from '../components/unordered-list';

const meta: Meta<typeof UnorderedList> = {
  component: UnorderedList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/UnorderedList',
};

export default meta;
type Story = StoryObj<typeof UnorderedList>;

export const Default: Story = {
  render: () => (
    <UnorderedList>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UnorderedList>
  ),
};

export const Inline: Story = {
  render: () => (
    <UnorderedList variant="inline">
      <ListItem>Tag 1</ListItem>
      <ListItem>Tag 2</ListItem>
      <ListItem>Tag 3</ListItem>
    </UnorderedList>
  ),
};

export const Unstyled: Story = {
  render: () => (
    <UnorderedList variant="unstyled">
      <ListItem>No bullet 1</ListItem>
      <ListItem>No bullet 2</ListItem>
      <ListItem>No bullet 3</ListItem>
    </UnorderedList>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Primary (default)</h4>
        <UnorderedList variant="primary">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </UnorderedList>
      </div>
      <div>
        <h4>Inline</h4>
        <UnorderedList variant="inline">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </UnorderedList>
      </div>
      <div>
        <h4>Unstyled</h4>
        <UnorderedList variant="unstyled">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </UnorderedList>
      </div>
    </div>
  ),
};
