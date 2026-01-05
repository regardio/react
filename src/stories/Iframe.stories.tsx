import type { Meta, StoryObj } from '@storybook/react-vite';
import { Iframe } from '../components/iframe';

const meta: Meta<typeof Iframe> = {
  component: Iframe,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Iframe',
};

export default meta;
type Story = StoryObj<typeof Iframe>;

export const YouTubeVideo: Story = {
  args: {
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'YouTube Video',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'rounded-lg shadow-lg',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Styled YouTube Video',
  },
};
