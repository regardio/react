import type { Meta, StoryObj } from '@storybook/react-vite';
import { BackgroundSlideshow, type ImageData } from './background-slideshow';

const meta: Meta<typeof BackgroundSlideshow> = {
  component: BackgroundSlideshow,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Components/BackgroundSlideshow',
};

export default meta;
type Story = StoryObj<typeof BackgroundSlideshow>;

const sampleImages: ImageData[] = [
  {
    at: { de: 'Bild 1', en: 'Image 1' },
    fn: 'image1.jpg',
    hu: 200,
    id: '1',
    po: false,
  },
  {
    at: { de: 'Bild 2', en: 'Image 2' },
    fn: 'image2.jpg',
    hu: 150,
    id: '2',
    po: false,
  },
  {
    at: { de: 'Bild 3', en: 'Image 3' },
    fn: 'image3.jpg',
    hu: 100,
    id: '3',
    po: false,
  },
];

export const Default: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=Image+{id}',
    className: 'h-[400px] w-full',
    images: sampleImages,
    locale: 'en',
  },
};

export const WithoutSlideshow: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=Static',
    className: 'h-[400px] w-full',
    images: sampleImages,
    locale: 'en',
    slideshow: false,
  },
};

export const FastTransition: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=Fast',
    className: 'h-[400px] w-full',
    images: sampleImages,
    locale: 'en',
    slideshowInterval: 2000,
    transitionDuration: 1000,
  },
};

export const SingleImage: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=Single',
    className: 'h-[400px] w-full',
    images: [sampleImages[0] as ImageData],
    locale: 'en',
    slideshow: true,
  },
};

export const EmptyImages: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}',
    className: 'h-[400px] w-full bg-gray-200',
    images: [],
    locale: 'en',
  },
};

export const WithFilter: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=Filtered',
    className: 'h-[400px] w-full',
    filter: (img: ImageData) => img.hu > 100,
    images: sampleImages,
    locale: 'en',
  },
};

export const GermanLocale: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=German',
    className: 'h-[400px] w-full',
    images: sampleImages,
    locale: 'de',
  },
};

export const ShortTransition: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=Short',
    className: 'h-[400px] w-full',
    images: sampleImages,
    locale: 'en',
    slideshowInterval: 1000,
    transitionDuration: 2000,
  },
};

export const MediumTransition: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=Medium',
    className: 'h-[400px] w-full',
    images: sampleImages,
    locale: 'en',
    transitionDuration: 4000,
  },
};

export const LongTransition: Story = {
  args: {
    baseUrl: 'https://via.placeholder.com/{format}?text=Long',
    className: 'h-[400px] w-full',
    images: sampleImages,
    locale: 'en',
    transitionDuration: 5000,
  },
};
