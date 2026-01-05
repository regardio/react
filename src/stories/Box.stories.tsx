import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../components/box';

const meta: Meta<typeof Box> = {
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Box',
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'Default Box',
  },
};

export const Container: Story = {
  args: {
    children: 'Container Box',
    variant: 'container',
  },
};

export const Flex: Story = {
  args: {
    children: (
      <>
        <span>Flex Item 1</span>
        <span>Flex Item 2</span>
        <span>Flex Item 3</span>
      </>
    ),
    variant: 'flex',
  },
};

export const Grid: Story = {
  args: {
    children: (
      <>
        <div>Grid Item 1</div>
        <div>Grid Item 2</div>
        <div>Grid Item 3</div>
      </>
    ),
    variant: 'grid',
  },
};

export const Code: Story = {
  args: {
    children: "const example = 'code block';",
    variant: 'code',
  },
};

export const AsSection: Story = {
  args: {
    as: 'section',
    children: 'This is rendered as a section element',
    variant: 'section',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box variant="primary">Primary (default)</Box>
      <Box variant="container">Container</Box>
      <Box variant="flex">Flex</Box>
      <Box variant="grid">Grid</Box>
      <Box variant="code">Code</Box>
      <Box variant="section">Section</Box>
      <Box variant="aside">Aside</Box>
      <Box variant="main">Main</Box>
    </div>
  ),
};
