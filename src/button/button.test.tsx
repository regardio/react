import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies default variant and size classes', () => {
    render(<Button>Default button</Button>);
    const button = screen.getByRole('button', { name: 'Default button' });
    expect(button).toHaveClass('bg-blue-600', 'text-white', 'px-4', 'py-2');
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary button</Button>);
    const button = screen.getByRole('button', { name: 'Secondary button' });
    expect(button).toHaveClass('bg-gray-100', 'text-gray-900');
  });

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large button</Button>);
    const button = screen.getByRole('button', { name: 'Large button' });
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom button</Button>);
    const button = screen.getByRole('button', { name: 'Custom button' });
    expect(button).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled button</Button>);
    const button = screen.getByRole('button', { name: 'Disabled button' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
  });

  it('passes through other props', () => {
    render(
      <Button
        aria-label="Test button"
        data-testid="test-button"
      >
        Test
      </Button>,
    );
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('aria-label', 'Test button');
  });

  it('renders as different element when render prop is provided', () => {
    render(
      <Button
        nativeButton={false}
        render={(props) => (
          <a
            {...props}
            href="#test"
          />
        )}
      >
        Link button
      </Button>,
    );
    const link = screen.getByRole('button', { name: 'Link button' });
    expect(link).toHaveAttribute('href', '#test');
    expect(link.tagName).toBe('A');
  });
});
