import type { Meta, StoryObj } from '@storybook/react-vite';
import { Picture } from '../components/picture';

const meta: Meta<typeof Picture> = {
  component: Picture,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Picture',
};

export default meta;
type Story = StoryObj<typeof Picture>;

export const SimpleImage: Story = {
  args: {
    alt: 'Placeholder image',
    baseUrl: 'https://via.placeholder.com/400x300',
  },
};

export const WithFormats: Story = {
  args: {
    alt: 'Responsive image',
    baseUrl: 'https://via.placeholder.com/{format}',
    formats: [
      { size: '480x360', width: 480 },
      { size: '800x600', width: 800 },
      { size: '1200x900', width: 1200 },
    ],
  },
};

export const WithCustomSizes: Story = {
  args: {
    alt: 'Custom sizes image',
    baseUrl: 'https://via.placeholder.com/{format}',
    formats: [
      { size: '320x240', width: 320 },
      { size: '640x480', width: 640 },
    ],
    sizes: '(max-width: 640px) 320px, 640px',
  },
};

export const WithClassName: Story = {
  args: {
    alt: 'Styled image',
    baseUrl: 'https://via.placeholder.com/400x300',
    className: 'rounded-lg shadow-lg',
    imgClassName: 'object-cover',
  },
};
