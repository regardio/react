import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './input';

describe('Input', () => {
  it('renders input with default props', () => {
    render(<Input placeholder="Test input" />);
    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(
      <Input
        placeholder="Error input"
        variant="error"
      />,
    );
    expect(screen.getByPlaceholderText('Error input')).toHaveClass('border-red-300');
  });

  it('applies size styles', () => {
    render(
      <Input
        placeholder="Large input"
        size="lg"
      />,
    );
    expect(screen.getByPlaceholderText('Large input')).toHaveClass('px-4', 'py-3', 'text-lg');
  });

  it('applies custom className', () => {
    render(
      <Input
        className="custom-input"
        placeholder="Custom input"
      />,
    );
    expect(screen.getByPlaceholderText('Custom input')).toHaveClass('custom-input');
  });

  it('passes through other props', () => {
    render(
      <Input
        data-testid="test-input"
        name="test"
      />,
    );
    expect(screen.getByTestId('test-input')).toHaveAttribute('name', 'test');
  });

  it('handles disabled state', () => {
    render(
      <Input
        disabled
        placeholder="Disabled input"
      />,
    );
    expect(screen.getByPlaceholderText('Disabled input')).toBeDisabled();
  });

  it('handles value changes', () => {
    render(<Input defaultValue="test value" />);
    expect(screen.getByDisplayValue('test value')).toBeInTheDocument();
  });
});
