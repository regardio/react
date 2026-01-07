import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/IconButton',
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const PlusIcon = () => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
  >
    <line
      x1="12"
      x2="12"
      y1="5"
      y2="19"
    />
    <line
      x1="5"
      x2="19"
      y1="12"
      y2="12"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
  >
    <line
      x1="18"
      x2="6"
      y1="6"
      y2="18"
    />
    <line
      x1="6"
      x2="18"
      y1="6"
      y2="18"
    />
  </svg>
);

export const Default: Story = {
  args: {
    icon: <PlusIcon />,
  },
};

export const Close: Story = {
  args: {
    icon: <CloseIcon />,
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'p-2 bg-gray-100 rounded hover:bg-gray-200',
    icon: <PlusIcon />,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <IconButton icon={<PlusIcon />} />
      <IconButton icon={<CloseIcon />} />
    </div>
  ),
};
