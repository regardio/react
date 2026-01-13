import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Field } from './field';

describe('Field', () => {
  it('renders FieldRoot with children', () => {
    render(
      <Field.Root>
        <Field.Label>Test Label</Field.Label>
        <Field.Control />
      </Field.Root>,
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders FieldDescription', () => {
    render(
      <Field.Root>
        <Field.Description>Test Description</Field.Description>
      </Field.Root>,
    );
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders FieldError', () => {
    render(
      <Field.Root invalid>
        <Field.Error match={true}>Test Error</Field.Error>
      </Field.Root>,
    );
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  it('renders FieldItem with layout', () => {
    render(
      <Field.Item layout="horizontal">
        <span>Test Content</span>
      </Field.Item>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className to FieldRoot', () => {
    render(
      <Field.Root className="custom-field">
        <Field.Label>Test</Field.Label>
      </Field.Root>,
    );
    const fieldRoot = screen.getByText('Test').parentElement;
    expect(fieldRoot).toHaveClass('custom-field');
  });

  it('applies variant styles to FieldLabel', () => {
    render(
      <Field.Root>
        <Field.Label variant="error">Error Label</Field.Label>
      </Field.Root>,
    );
    expect(screen.getByText('Error Label')).toHaveClass('text-red-600');
  });
});
