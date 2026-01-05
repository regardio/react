import type { Meta, StoryObj } from '@storybook/react-vite';
import { Countdown } from '../components/countdown';

const meta: Meta<typeof Countdown> = {
  component: Countdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Countdown',
};

export default meta;
type Story = StoryObj<typeof Countdown>;

export const Default: Story = {};
