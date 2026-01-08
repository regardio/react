import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel } from './index';

const meta: Meta<typeof Carousel.Root> = {
  component: Carousel.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Carousel',
};

export default meta;
type Story = StoryObj<typeof Carousel.Root>;

const SlideCard = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      alignItems: 'center',
      background: '#f0f0f0',
      border: '1px solid #ddd',
      borderRadius: '8px',
      display: 'flex',
      height: '200px',
      justifyContent: 'center',
      width: '300px',
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Carousel.Root className="w-full max-w-md">
      <Carousel.Content className="gap-4">
        <Carousel.Item>
          <SlideCard>Slide 1</SlideCard>
        </Carousel.Item>
        <Carousel.Item>
          <SlideCard>Slide 2</SlideCard>
        </Carousel.Item>
        <Carousel.Item>
          <SlideCard>Slide 3</SlideCard>
        </Carousel.Item>
      </Carousel.Content>
    </Carousel.Root>
  ),
};

export const WithControls: Story = {
  render: () => (
    <Carousel.Root className="w-full max-w-md">
      <Carousel.Content className="gap-4">
        <Carousel.Item>
          <SlideCard>Slide 1</SlideCard>
        </Carousel.Item>
        <Carousel.Item>
          <SlideCard>Slide 2</SlideCard>
        </Carousel.Item>
        <Carousel.Item>
          <SlideCard>Slide 3</SlideCard>
        </Carousel.Item>
      </Carousel.Content>
      <div className="flex justify-center gap-4 mt-4">
        <Carousel.Previous className="px-4 py-2 bg-gray-200 rounded">Previous</Carousel.Previous>
        <Carousel.Next className="px-4 py-2 bg-gray-200 rounded">Next</Carousel.Next>
      </div>
    </Carousel.Root>
  ),
};

export const ManySlides: Story = {
  render: () => (
    <Carousel.Root className="w-full max-w-md">
      <Carousel.Content className="gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Carousel.Item key={i}>
            <SlideCard>Slide {i}</SlideCard>
          </Carousel.Item>
        ))}
      </Carousel.Content>
      <div className="flex justify-center gap-4 mt-4">
        <Carousel.Previous className="px-4 py-2 bg-gray-200 rounded">←</Carousel.Previous>
        <Carousel.Next className="px-4 py-2 bg-gray-200 rounded">→</Carousel.Next>
      </div>
    </Carousel.Root>
  ),
};

export const VerticalOrientation: Story = {
  render: () => (
    <Carousel.Root
      className="w-full max-w-md h-[400px]"
      orientation="vertical"
    >
      <Carousel.Content className="flex-col gap-4">
        <Carousel.Item>
          <SlideCard>Vertical Slide 1</SlideCard>
        </Carousel.Item>
        <Carousel.Item>
          <SlideCard>Vertical Slide 2</SlideCard>
        </Carousel.Item>
        <Carousel.Item>
          <SlideCard>Vertical Slide 3</SlideCard>
        </Carousel.Item>
      </Carousel.Content>
    </Carousel.Root>
  ),
};

export const WithOptions: Story = {
  render: () => (
    <Carousel.Root
      className="w-full max-w-md"
      opts={{ align: 'start', loop: true }}
    >
      <Carousel.Content className="gap-4">
        <Carousel.Item>
          <SlideCard>Loop Slide 1</SlideCard>
        </Carousel.Item>
        <Carousel.Item>
          <SlideCard>Loop Slide 2</SlideCard>
        </Carousel.Item>
        <Carousel.Item>
          <SlideCard>Loop Slide 3</SlideCard>
        </Carousel.Item>
      </Carousel.Content>
      <div className="flex justify-center gap-4 mt-4">
        <Carousel.Previous className="px-4 py-2 bg-gray-200 rounded">←</Carousel.Previous>
        <Carousel.Next className="px-4 py-2 bg-gray-200 rounded">→</Carousel.Next>
      </div>
    </Carousel.Root>
  ),
};
