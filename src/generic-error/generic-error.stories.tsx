import type { Meta, StoryObj } from '@storybook/react-vite';
import { GenericError, getErrorDescriptor } from './generic-error';

const meta: Meta<typeof GenericError> = {
  component: GenericError,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Components/GenericError',
};

export default meta;
type Story = StoryObj<typeof GenericError>;

const ErrorWrapper = ({ status }: { status: number }) => {
  const error = new Response('Not Found', { status, statusText: 'Not Found' });

  return <GenericError error={error} />;
};

export const Error404: Story = {
  render: () => <ErrorWrapper status={404} />,
};

export const Error500: Story = {
  render: () => <ErrorWrapper status={500} />,
};

export const GetErrorDescriptorDemo: Story = {
  render: () => {
    const httpError = getErrorDescriptor(new Response('Not Found', { status: 404 }));
    const runtimeError = getErrorDescriptor(new Error('Something went wrong'));
    const unknownError = getErrorDescriptor('unknown');

    return (
      <div style={{ padding: '24px' }}>
        <h3>Error Descriptor Examples</h3>
        <pre style={{ background: '#f5f5f5', padding: '16px' }}>
          {JSON.stringify({ httpError, runtimeError, unknownError }, null, 2)}
        </pre>
      </div>
    );
  },
};
