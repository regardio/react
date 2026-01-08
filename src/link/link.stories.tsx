import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { Link } from './link';

const meta: Meta<typeof Link> = {
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/Link',
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Default Link',
    to: '/example',
  },
};

export const External: Story = {
  args: {
    children: 'External Link',
    to: 'https://example.com',
  },
};

export const WithGermanText: Story = {
  args: {
    children: 'Größenübersicht',
    to: '/sizes',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link to="/internal">Internal Link</Link>
      <Link to="https://example.com">External Link</Link>
      <Link
        className="text-blue-600 underline"
        to="/styled"
      >
        Styled Link
      </Link>
    </div>
  ),
};

export const TelephoneLink: Story = {
  args: {
    children: 'Call Us',
    to: 'tel:+1234567890',
  },
};

export const MailtoLink: Story = {
  args: {
    children: 'Email Us',
    to: 'mailto:hello@example.com',
  },
};

export const HashLink: Story = {
  args: {
    children: 'Jump to Section',
    to: '#section-id',
  },
};

export const WithSearchAndHash: Story = {
  args: {
    children: 'Link with Query',
    to: { hash: '#results', pathname: '/search', search: '?q=test' },
  },
};

export const EmptyPath: Story = {
  args: {
    children: 'No destination',
    to: '',
  },
};

export const WithArrow: Story = {
  args: {
    arrow: 'rarr',
    children: 'Link with Arrow',
    to: '/arrow',
  },
};

export const ButtonVariant: Story = {
  args: {
    children: 'Button Style Link',
    to: '/button',
    variant: 'button',
  },
};
