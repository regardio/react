import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Fieldset } from './fieldset';

describe('Fieldset', () => {
  it('renders FieldsetRoot with legend', () => {
    render(
      <Fieldset.Root>
        <Fieldset.Legend>Test Legend</Fieldset.Legend>
        <div>Fieldset content</div>
      </Fieldset.Root>,
    );
    expect(screen.getByText('Test Legend')).toBeInTheDocument();
  });

  it('applies variant styles to FieldsetRoot', () => {
    render(
      <Fieldset.Root variant="compact">
        <Fieldset.Legend>Compact Legend</Fieldset.Legend>
      </Fieldset.Root>,
    );
    const fieldsetRoot = screen.getByText('Compact Legend').parentElement;
    expect(fieldsetRoot).toHaveClass('space-y-2');
  });

  it('applies size styles to FieldsetLegend', () => {
    render(
      <Fieldset.Root>
        <Fieldset.Legend size="small">Small Legend</Fieldset.Legend>
      </Fieldset.Root>,
    );
    expect(screen.getByText('Small Legend')).toHaveClass('text-base', 'font-medium');
  });

  it('applies custom className to FieldsetRoot', () => {
    render(
      <Fieldset.Root className="custom-fieldset">
        <Fieldset.Legend>Custom Legend</Fieldset.Legend>
      </Fieldset.Root>,
    );
    const fieldsetRoot = screen.getByText('Custom Legend').parentElement;
    expect(fieldsetRoot).toHaveClass('custom-fieldset');
  });

  it('applies custom className to FieldsetLegend', () => {
    render(
      <Fieldset.Root>
        <Fieldset.Legend className="custom-legend">Legend</Fieldset.Legend>
      </Fieldset.Root>,
    );
    expect(screen.getByText('Legend')).toHaveClass('custom-legend');
  });

  it('renders children content', () => {
    render(
      <Fieldset.Root>
        <Fieldset.Legend>Legend</Fieldset.Legend>
        <p data-testid="fieldset-content">Fieldset content</p>
      </Fieldset.Root>,
    );
    expect(screen.getByTestId('fieldset-content')).toBeInTheDocument();
  });
});
