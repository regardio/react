import type { Meta, StoryObj } from '@storybook/react-vite';
import { BlurryGradient } from '../components/blurry-gradient';

const meta: Meta<typeof BlurryGradient> = {
  component: BlurryGradient,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/BlurryGradient',
};

export default meta;
type Story = StoryObj<typeof BlurryGradient>;

export const Default: Story = {
  args: {
    neutralColor: '#f0f0f0',
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    style: { height: '400px', width: '400px' },
  },
};

export const WarmColors: Story = {
  args: {
    neutralColor: '#fef3c7',
    primaryColor: '#f97316',
    secondaryColor: '#ef4444',
    style: { height: '400px', width: '400px' },
  },
};

export const CoolColors: Story = {
  args: {
    neutralColor: '#e0f2fe',
    primaryColor: '#0ea5e9',
    secondaryColor: '#06b6d4',
    style: { height: '400px', width: '400px' },
  },
};

export const NatureColors: Story = {
  args: {
    neutralColor: '#fef9c3',
    primaryColor: '#22c55e',
    secondaryColor: '#84cc16',
    style: { height: '400px', width: '400px' },
  },
};

export const FullWidth: Story = {
  args: {
    neutralColor: '#f0f0f0',
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    style: { height: '200px', width: '100%' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};
