import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Button>Default button</Button>);
    const button = screen.getByRole('button', { name: 'Default button' });
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary button</Button>);
    const button = screen.getByRole('button', { name: 'Secondary button' });
    expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground');
  });

  it('applies base structural classes', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button', { name: 'Button' });
    expect(button).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'transition-colors',
    );
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
