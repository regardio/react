import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Form } from './form';

describe('Form', () => {
  it('renders form with children', () => {
    render(
      <Form>
        <div>Form content</div>
      </Form>,
    );
    expect(screen.getByText('Form content')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(
      <Form variant="compact">
        <div>Compact form</div>
      </Form>,
    );
    const formElement = screen.getByText('Compact form').parentElement;
    expect(formElement).toHaveClass('space-y-4');
  });

  it('applies inline variant styles', () => {
    render(
      <Form variant="inline">
        <div>Inline form</div>
      </Form>,
    );
    const formElement = screen.getByText('Inline form').parentElement;
    expect(formElement).toHaveClass('flex', 'flex-wrap', 'gap-4');
  });

  it('applies custom className', () => {
    render(
      <Form className="custom-form">
        <div>Custom form</div>
      </Form>,
    );
    const formElement = screen.getByText('Custom form').parentElement;
    expect(formElement).toHaveClass('custom-form');
  });

  it('passes through other props', () => {
    render(
      <Form
        data-testid="test-form"
        method="post"
      >
        <div>Test form</div>
      </Form>,
    );
    const formElement = screen.getByTestId('test-form');
    expect(formElement).toHaveAttribute('method', 'post');
  });

  it('handles onSubmit', () => {
    const handleSubmit = vi.fn();
    render(
      <Form onSubmit={handleSubmit}>
        <div>Submit form</div>
      </Form>,
    );
    const formElement = screen.getByText('Submit form').parentElement;
    expect(formElement).toBeInTheDocument();
  });
});
