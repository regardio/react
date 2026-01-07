import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Heading',
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Default Heading',
  },
};

export const Level1: Story = {
  args: {
    children: 'Heading Level 1',
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    children: 'Heading Level 2',
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    children: 'Heading Level 3',
    level: 3,
  },
};

export const Level4: Story = {
  args: {
    children: 'Heading Level 4',
    level: 4,
  },
};

export const Level5: Story = {
  args: {
    children: 'Heading Level 5',
    level: 5,
  },
};

export const Level6: Story = {
  args: {
    children: 'Heading Level 6',
    level: 6,
  },
};

export const WithGermanText: Story = {
  args: {
    children: 'Größe und Maße',
    level: 2,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};
