import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Field } from '../field';
import { Input } from '../input';
import { Form } from './form';

const meta = {
  argTypes: {
    variant: {
      control: 'select',
      description: 'Form variant',
      options: ['default', 'compact', 'inline'],
    },
  },
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Form',
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Form>
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Enter your email"
          type="email"
        />
        <Field.Description>We'll never share your email.</Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Password</Field.Label>
        <Input
          placeholder="Enter your password"
          type="password"
        />
      </Field.Root>
      <Button type="submit">Sign In</Button>
    </Form>
  ),
};

export const Compact: Story = {
  render: () => (
    <Form variant="compact">
      <Field.Root>
        <Field.Label>Username</Field.Label>
        <Input placeholder="Enter username" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Enter email"
          type="email"
        />
      </Field.Root>
      <Button type="submit">Register</Button>
    </Form>
  ),
};

export const Inline: Story = {
  render: () => (
    <Form variant="inline">
      <Field.Root>
        <Field.Label>Search</Field.Label>
        <Input placeholder="Search..." />
      </Field.Root>
      <Button type="submit">Search</Button>
    </Form>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <Form>
      <Field.Root>
        <Field.Label variant="error">Email</Field.Label>
        <Input
          placeholder="Enter your email"
          type="email"
          variant="error"
        />
        <Field.Error>Please enter a valid email address</Field.Error>
      </Field.Root>
      <Field.Root>
        <Field.Label>Password</Field.Label>
        <Input
          placeholder="Enter your password"
          type="password"
        />
        <Field.Description>Password must be at least 8 characters</Field.Description>
      </Field.Root>
      <Button type="submit">Sign In</Button>
    </Form>
  ),
};

export const RegistrationForm: Story = {
  render: () => (
    <Form>
      <div className="space-y-6">
        <Field.Root>
          <Field.Label>Full Name</Field.Label>
          <Input placeholder="Enter your full name" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email Address</Field.Label>
          <Input
            placeholder="Enter your email"
            type="email"
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input
            placeholder="Create a password"
            type="password"
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Confirm Password</Field.Label>
          <Input
            placeholder="Confirm your password"
            type="password"
          />
        </Field.Root>
        <Button
          className="w-full"
          type="submit"
        >
          Submit Form
        </Button>
      </div>
    </Form>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <Form>
      <div className="space-y-6">
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input placeholder="Your name" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input
            placeholder="Your email"
            type="email"
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Subject</Field.Label>
          <Input placeholder="Message subject" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Message</Field.Label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Your message"
            rows={4}
          />
        </Field.Root>
        <Button type="submit">Send Message</Button>
      </div>
    </Form>
  ),
};

export const SearchForm: Story = {
  render: () => (
    <Form
      className="max-w-md mx-auto"
      variant="inline"
    >
      <Field.Root className="flex-1">
        <Field.Label className="sr-only">Search</Field.Label>
        <Input placeholder="Search products..." />
      </Field.Root>
      <Button type="submit">Search</Button>
    </Form>
  ),
};

export const WithCustomClass: Story = {
  render: () => (
    <Form className="bg-gray-50 p-6 rounded-lg shadow-md">
      <Field.Root>
        <Field.Label className="text-blue-600">Custom Field</Field.Label>
        <Input
          className="bg-white border-blue-300"
          placeholder="Custom styled input"
        />
      </Field.Root>
      <Button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        type="submit"
      >
        Register
      </Button>
    </Form>
  ),
};

export const Interactive: Story = {
  render: () => {
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      alert('Form submitted!');
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Field.Root>
          <Field.Label>Interactive Field</Field.Label>
          <Input placeholder="Type something..." />
        </Field.Root>
        <Button type="submit">Submit Form</Button>
      </Form>
    );
  },
};
