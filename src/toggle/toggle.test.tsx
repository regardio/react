import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Toggle } from './toggle';

const TestIcon = () => (
  <svg
    data-testid="test-icon"
    height="16"
    viewBox="0 0 16 16"
    width="16"
  >
    <circle
      cx="8"
      cy="8"
      r="6"
    />
  </svg>
);

describe('Toggle', () => {
  it('renders with children', () => {
    render(
      <Toggle>
        <TestIcon />
      </Toggle>,
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(
      <Toggle
        data-testid="variant-toggle"
        variant="ghost"
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByTestId('variant-toggle');
    expect(toggle).toHaveClass('bg-transparent', 'text-gray-700');
  });

  it('applies size styles', () => {
    render(
      <Toggle
        data-testid="size-toggle"
        size="lg"
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByTestId('size-toggle');
    expect(toggle).toHaveClass('h-12', 'w-12', 'p-3');
  });

  it('handles pressed state', () => {
    render(
      <Toggle
        data-testid="pressed-toggle"
        defaultPressed
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByTestId('pressed-toggle');
    expect(toggle).toHaveAttribute('data-pressed');
  });

  it('handles controlled pressed state', () => {
    render(
      <Toggle
        data-testid="controlled-toggle"
        pressed
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByTestId('controlled-toggle');
    expect(toggle).toHaveAttribute('data-pressed');
  });

  it('handles disabled state', () => {
    render(
      <Toggle
        data-testid="disabled-toggle"
        disabled
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByTestId('disabled-toggle');
    expect(toggle).toBeDisabled();
    expect(toggle).toHaveClass('disabled:opacity-50');
  });

  it('applies custom className', () => {
    render(
      <Toggle
        aria-label="Custom toggle"
        className="custom-toggle"
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByRole('button', { name: 'Custom toggle' });
    expect(toggle).toHaveClass('custom-toggle');
  });

  it('sets title attribute', () => {
    render(
      <Toggle
        aria-label="Toggle"
        title="Toggle setting"
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByRole('button', { name: 'Toggle' });
    expect(toggle).toHaveAttribute('title', 'Toggle setting');
  });

  it('passes through other props', () => {
    render(
      <Toggle
        aria-label="Custom toggle"
        data-testid="custom-toggle"
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByTestId('custom-toggle');
    expect(toggle).toHaveAttribute('aria-label', 'Custom toggle');
  });

  it('calls onPressedChange when clicked', () => {
    const onPressedChange = vi.fn();
    render(
      <Toggle
        aria-label="Test toggle"
        onPressedChange={onPressedChange}
      >
        <TestIcon />
      </Toggle>,
    );
    const toggle = screen.getByRole('button', { name: 'Test toggle' });
    toggle.click();
    expect(onPressedChange).toHaveBeenCalledWith(true, expect.any(Object));
  });
});
