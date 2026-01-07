import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './index';

const meta: Meta<typeof Grid.Root> = {
  component: Grid.Root,
  decorators: [
    (Story) => (
      <div
        style={
          {
            '--spacing-grid-gutter': '1rem',
            '--spacing-grid-max': '80rem',
          } as React.CSSProperties
        }
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Grid',
};

export default meta;
type Story = StoryObj<typeof Grid.Root>;

const ItemBox = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-blue-100 border border-blue-300 rounded p-4 text-center ${className ?? ''}`}>
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Grid.Root>
      <Grid.Item span={12}>
        <ItemBox>Full width (12 cols)</ItemBox>
      </Grid.Item>
      <Grid.Item span={6}>
        <ItemBox>Half (6 cols)</ItemBox>
      </Grid.Item>
      <Grid.Item span={6}>
        <ItemBox>Half (6 cols)</ItemBox>
      </Grid.Item>
      <Grid.Item span={4}>
        <ItemBox>Third (4 cols)</ItemBox>
      </Grid.Item>
      <Grid.Item span={4}>
        <ItemBox>Third (4 cols)</ItemBox>
      </Grid.Item>
      <Grid.Item span={4}>
        <ItemBox>Third (4 cols)</ItemBox>
      </Grid.Item>
    </Grid.Root>
  ),
};

export const ResponsiveSpan: Story = {
  name: 'Responsive Span (Container Queries)',
  render: () => (
    <Grid.Root>
      <Grid.Item
        span={12}
        spanLg={3}
        spanMd={4}
        spanSm={6}
      >
        <ItemBox>12 → 6 → 4 → 3</ItemBox>
      </Grid.Item>
      <Grid.Item
        span={12}
        spanLg={3}
        spanMd={4}
        spanSm={6}
      >
        <ItemBox>12 → 6 → 4 → 3</ItemBox>
      </Grid.Item>
      <Grid.Item
        span={12}
        spanLg={3}
        spanMd={4}
        spanSm={6}
      >
        <ItemBox>12 → 6 → 4 → 3</ItemBox>
      </Grid.Item>
      <Grid.Item
        span={12}
        spanLg={3}
        spanMd={4}
        spanSm={6}
      >
        <ItemBox>12 → 6 → 4 → 3</ItemBox>
      </Grid.Item>
    </Grid.Root>
  ),
};

export const ColumnPositioning: Story = {
  name: 'Column Start/End Positioning',
  render: () => (
    <Grid.Root>
      <Grid.Item
        end={5}
        start={1}
      >
        <ItemBox>Cols 1-4</ItemBox>
      </Grid.Item>
      <Grid.Item
        end={13}
        start={5}
      >
        <ItemBox>Cols 5-12</ItemBox>
      </Grid.Item>
      <Grid.Item
        span={8}
        start={3}
      >
        <ItemBox>Start at 3, span 8</ItemBox>
      </Grid.Item>
    </Grid.Root>
  ),
};

export const RowSpan: Story = {
  name: 'Row Spanning',
  render: () => (
    <Grid.Root>
      <Grid.Item
        rowSpan={2}
        span={4}
      >
        <ItemBox className="h-full">Spans 2 rows</ItemBox>
      </Grid.Item>
      <Grid.Item span={8}>
        <ItemBox>Row 1</ItemBox>
      </Grid.Item>
      <Grid.Item span={8}>
        <ItemBox>Row 2</ItemBox>
      </Grid.Item>
    </Grid.Root>
  ),
};

export const FlowVariants: Story = {
  name: 'Grid Flow Variants',
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">Dense (default)</h3>
        <Grid.Root flow="dense">
          <Grid.Item span={8}>
            <ItemBox>8 cols</ItemBox>
          </Grid.Item>
          <Grid.Item span={6}>
            <ItemBox>6 cols</ItemBox>
          </Grid.Item>
          <Grid.Item span={4}>
            <ItemBox>4 cols (fills gap)</ItemBox>
          </Grid.Item>
        </Grid.Root>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Row</h3>
        <Grid.Root flow="row">
          <Grid.Item span={8}>
            <ItemBox>8 cols</ItemBox>
          </Grid.Item>
          <Grid.Item span={6}>
            <ItemBox>6 cols</ItemBox>
          </Grid.Item>
          <Grid.Item span={4}>
            <ItemBox>4 cols (new row)</ItemBox>
          </Grid.Item>
        </Grid.Root>
      </div>
    </div>
  ),
};

export const AlignVariants: Story = {
  name: 'Content Alignment',
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">Start</h3>
        <Grid.Root
          align="start"
          className="min-h-[200px] bg-gray-50"
        >
          <Grid.Item span={4}>
            <ItemBox>Item</ItemBox>
          </Grid.Item>
          <Grid.Item span={4}>
            <ItemBox>Item</ItemBox>
          </Grid.Item>
        </Grid.Root>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Center</h3>
        <Grid.Root
          align="center"
          className="min-h-[200px] bg-gray-50"
        >
          <Grid.Item span={4}>
            <ItemBox>Item</ItemBox>
          </Grid.Item>
          <Grid.Item span={4}>
            <ItemBox>Item</ItemBox>
          </Grid.Item>
        </Grid.Root>
      </div>
    </div>
  ),
};

export const StyleOverrides: Story = {
  name: 'Style Overrides (tailwind-variants)',
  render: () => (
    <Grid.Root className="bg-linear-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
      <Grid.Item
        className="bg-purple-200 rounded-lg p-6"
        span={6}
      >
        Custom styled item
      </Grid.Item>
      <Grid.Item
        className="bg-pink-200 rounded-lg p-6"
        span={6}
      >
        Custom styled item
      </Grid.Item>
    </Grid.Root>
  ),
};
