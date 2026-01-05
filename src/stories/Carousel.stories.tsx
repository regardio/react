import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/carousel';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Carousel',
};

export default meta;
type Story = StoryObj<typeof Carousel>;

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
    <Carousel className="w-full max-w-md">
      <CarouselContent className="gap-4">
        <CarouselItem>
          <SlideCard>Slide 1</SlideCard>
        </CarouselItem>
        <CarouselItem>
          <SlideCard>Slide 2</SlideCard>
        </CarouselItem>
        <CarouselItem>
          <SlideCard>Slide 3</SlideCard>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  ),
};

export const WithControls: Story = {
  render: () => (
    <Carousel className="w-full max-w-md">
      <CarouselContent className="gap-4">
        <CarouselItem>
          <SlideCard>Slide 1</SlideCard>
        </CarouselItem>
        <CarouselItem>
          <SlideCard>Slide 2</SlideCard>
        </CarouselItem>
        <CarouselItem>
          <SlideCard>Slide 3</SlideCard>
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-4">
        <CarouselPrevious className="px-4 py-2 bg-gray-200 rounded">Previous</CarouselPrevious>
        <CarouselNext className="px-4 py-2 bg-gray-200 rounded">Next</CarouselNext>
      </div>
    </Carousel>
  ),
};

export const ManySlides: Story = {
  render: () => (
    <Carousel className="w-full max-w-md">
      <CarouselContent className="gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <CarouselItem key={i}>
            <SlideCard>Slide {i}</SlideCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-4">
        <CarouselPrevious className="px-4 py-2 bg-gray-200 rounded">←</CarouselPrevious>
        <CarouselNext className="px-4 py-2 bg-gray-200 rounded">→</CarouselNext>
      </div>
    </Carousel>
  ),
};
