import type { Meta, StoryObj } from '@storybook/react-vite';
import { List } from './index';

const meta: Meta<typeof List.Root> = {
  component: List.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/List',
};

export default meta;
type Story = StoryObj<typeof List.Root>;

export const UnorderedList: Story = {
  render: () => (
    <List.Root>
      <List.Item>First item</List.Item>
      <List.Item>Second item</List.Item>
      <List.Item>Third item</List.Item>
    </List.Root>
  ),
};

export const OrderedList: Story = {
  render: () => (
    <List.Root render="ol">
      <List.Item>Step one</List.Item>
      <List.Item>Step two</List.Item>
      <List.Item>Step three</List.Item>
    </List.Root>
  ),
};

export const DefinitionList: Story = {
  render: () => (
    <List.Root
      className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2"
      render="dl"
    >
      <List.Item
        className="font-semibold"
        render="dt"
      >
        Email
      </List.Item>
      <List.Item>contact@example.com</List.Item>
      <List.Item
        className="font-semibold"
        render="dt"
      >
        Phone
      </List.Item>
      <List.Item>+1 234 567 890</List.Item>
      <List.Item
        className="font-semibold"
        render="dt"
      >
        Address
      </List.Item>
      <List.Item>123 Main Street, City, Country</List.Item>
    </List.Root>
  ),
};

export const WithDefaultItemClassName: Story = {
  render: () => (
    <List.Root defaultItemClassName="py-2 border-b border-gray-200 last:border-0">
      <List.Item>Styled item one</List.Item>
      <List.Item>Styled item two</List.Item>
      <List.Item>Styled item three</List.Item>
    </List.Root>
  ),
};

export const InlineList: Story = {
  render: () => (
    <List.Root className="flex flex-wrap gap-2 list-none p-0">
      <List.Item className="px-2 py-1 bg-gray-100 rounded">Tag 1</List.Item>
      <List.Item className="px-2 py-1 bg-gray-100 rounded">Tag 2</List.Item>
      <List.Item className="px-2 py-1 bg-gray-100 rounded">Tag 3</List.Item>
    </List.Root>
  ),
};

export const NavigationMenu: Story = {
  render: () => (
    <List.Root
      className="flex gap-4"
      defaultItemElement="div"
      render="nav"
    >
      <List.Item className="hover:text-blue-600 cursor-pointer">Home</List.Item>
      <List.Item className="hover:text-blue-600 cursor-pointer">About</List.Item>
      <List.Item className="hover:text-blue-600 cursor-pointer">Contact</List.Item>
    </List.Root>
  ),
};

export const CustomElements: Story = {
  render: () => (
    <List.Root
      className="flex gap-2"
      defaultItemElement="span"
      render="div"
    >
      <List.Item className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        React
      </List.Item>
      <List.Item className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
        TypeScript
      </List.Item>
      <List.Item className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
        Tailwind
      </List.Item>
    </List.Root>
  ),
};
