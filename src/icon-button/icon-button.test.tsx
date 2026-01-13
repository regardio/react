import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { IconButton } from './icon-button';

const TestIcon = () => (
  <svg
    data-testid="test-icon"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
    />
  </svg>
);

describe('IconButton', () => {
  it('renders with icon', () => {
    render(
      <IconButton
        icon={<TestIcon />}
        title="Test"
      />,
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies size variants', () => {
    render(
      <IconButton
        data-testid="size-button"
        icon={<TestIcon />}
        size="lg"
        title="Test"
      />,
    );
    const button = screen.getByTestId('size-button');
    expect(button).toHaveClass('p-3');
  });

  it('applies variant styles from Button', () => {
    render(
      <IconButton
        data-testid="variant-button"
        icon={<TestIcon />}
        title="Test"
        variant="secondary"
      />,
    );
    const button = screen.getByTestId('variant-button');
    expect(button).toHaveClass('bg-gray-100');
  });

  it('uses title as aria-label when provided', () => {
    render(
      <IconButton
        icon={<TestIcon />}
        title="Add item"
      />,
    );
    const button = screen.getByRole('button', { name: 'Add item' });
    expect(button).toHaveAttribute('aria-label', 'Add item');
  });

  it('uses aria-label when provided', () => {
    render(
      <IconButton
        aria-label="Custom label"
        icon={<TestIcon />}
      />,
    );
    const button = screen.getByRole('button', { name: 'Custom label' });
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('prioritizes aria-label over title', () => {
    render(
      <IconButton
        aria-label="Custom label"
        data-testid="priority-button"
        icon={<TestIcon />}
        title="Add item"
      />,
    );
    const button = screen.getByTestId('priority-button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('handles disabled state', () => {
    render(
      <IconButton
        data-testid="disabled-button"
        disabled
        icon={<TestIcon />}
        title="Test"
      />,
    );
    const button = screen.getByTestId('disabled-button');
    expect(button).toBeDisabled();
  });

  it('passes through other props', () => {
    render(
      <IconButton
        data-testid="custom-button"
        icon={<TestIcon />}
        title="Test"
      />,
    );
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <IconButton
        className="custom-class"
        data-testid="custom-class-button"
        icon={<TestIcon />}
        title="Test"
      />,
    );
    const button = screen.getByTestId('custom-class-button');
    expect(button).toHaveClass('custom-class');
  });

  it('centers icon properly', () => {
    render(
      <IconButton
        data-testid="center-button"
        icon={<TestIcon />}
        title="Test"
      />,
    );
    const button = screen.getByTestId('center-button');
    expect(button).toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('sets title attribute', () => {
    render(
      <IconButton
        data-testid="title-button"
        icon={<TestIcon />}
        title="Tooltip text"
      />,
    );
    const button = screen.getByTestId('title-button');
    expect(button).toHaveAttribute('title', 'Tooltip text');
  });
});
