import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProtectedEmail } from '../components/protected-email';

const meta: Meta<typeof ProtectedEmail> = {
  component: ProtectedEmail,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/ProtectedEmail',
};

export default meta;
type Story = StoryObj<typeof ProtectedEmail>;

export const Default: Story = {
  args: {
    domain: 'example.com',
    username: 'contact',
  },
};

export const WithCustomText: Story = {
  args: {
    domain: 'example.com',
    text: 'Send us an email',
    username: 'info',
  },
};

export const WithClassName: Story = {
  args: {
    className: 'text-blue-600 underline hover:text-blue-800',
    domain: 'company.org',
    username: 'support',
  },
};

export const MultipleEmails: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <ProtectedEmail
        domain="example.com"
        username="sales"
      />
      <ProtectedEmail
        domain="example.com"
        username="support"
      />
      <ProtectedEmail
        domain="example.com"
        text="General Inquiries"
        username="info"
      />
    </div>
  ),
};
