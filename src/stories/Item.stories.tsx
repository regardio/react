import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { Item } from '../components/item';

const meta: Meta<typeof Item> = {
  component: Item,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Item',
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    children: <div className="p-4">Item content</div>,
  },
};

export const WithLink: Story = {
  args: {
    children: <div className="p-4">Clickable item</div>,
    link: '/example',
  },
};

export const WidthVariants: Story = {
  render: () => (
    <div className="grid grid-cols-12 gap-4">
      <Item width="xs">
        <div className="p-2 bg-gray-100">XS</div>
      </Item>
      <Item width="sm">
        <div className="p-2 bg-gray-100">SM</div>
      </Item>
      <Item width="md">
        <div className="p-2 bg-gray-100">MD</div>
      </Item>
      <Item width="lg">
        <div className="p-2 bg-gray-100">LG</div>
      </Item>
      <Item width="full">
        <div className="p-2 bg-gray-100">Full</div>
      </Item>
    </div>
  ),
};

export const ThemeColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Item themeColor="blue">
        <div className="p-4">Blue</div>
      </Item>
      <Item themeColor="green">
        <div className="p-4">Green</div>
      </Item>
      <Item themeColor="red">
        <div className="p-4">Red</div>
      </Item>
      <Item themeColor="orange">
        <div className="p-4">Orange</div>
      </Item>
      <Item themeColor="purple">
        <div className="p-4">Purple</div>
      </Item>
    </div>
  ),
};
