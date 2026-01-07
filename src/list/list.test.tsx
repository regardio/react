import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { List } from './index';

afterEach(() => {
  cleanup();
});

describe('List.Root', () => {
  it('renders as ul by default', () => {
    render(
      <List.Root data-testid="list">
        <List.Item>Item 1</List.Item>
      </List.Root>,
    );

    const list = screen.getByTestId('list');
    expect(list.tagName).toBe('UL');
  });

  it('renders as ol when specified', () => {
    render(
      <List.Root
        data-testid="list"
        render="ol"
      >
        <List.Item>Item 1</List.Item>
      </List.Root>,
    );

    const list = screen.getByTestId('list');
    expect(list.tagName).toBe('OL');
  });

  it('renders as dl when specified', () => {
    render(
      <List.Root
        data-testid="list"
        render="dl"
      >
        <List.Item render="dt">Term</List.Item>
        <List.Item render="dd">Definition</List.Item>
      </List.Root>,
    );

    const list = screen.getByTestId('list');
    expect(list.tagName).toBe('DL');
  });

  it('renders as div when specified', () => {
    render(
      <List.Root
        data-testid="list"
        render="div"
      >
        <List.Item render="div">Item 1</List.Item>
      </List.Root>,
    );

    const list = screen.getByTestId('list');
    expect(list.tagName).toBe('DIV');
  });

  it('passes className to root element', () => {
    render(
      <List.Root
        className="custom-class"
        data-testid="list"
      >
        <List.Item>Item 1</List.Item>
      </List.Root>,
    );

    const list = screen.getByTestId('list');
    expect(list.className).toBe('custom-class');
  });
});

describe('List.Item', () => {
  it('renders as li by default', () => {
    render(
      <List.Root>
        <List.Item data-testid="item">Item 1</List.Item>
      </List.Root>,
    );

    const item = screen.getByTestId('item');
    expect(item.tagName).toBe('LI');
  });

  it('renders as dd when parent is dl', () => {
    render(
      <List.Root render="dl">
        <List.Item data-testid="item">Definition</List.Item>
      </List.Root>,
    );

    const item = screen.getByTestId('item');
    expect(item.tagName).toBe('DD');
  });

  it('allows explicit render override', () => {
    render(
      <List.Root render="dl">
        <List.Item
          data-testid="item"
          render="dt"
        >
          Term
        </List.Item>
      </List.Root>,
    );

    const item = screen.getByTestId('item');
    expect(item.tagName).toBe('DT');
  });

  it('applies defaultItemClassName from context', () => {
    render(
      <List.Root defaultItemClassName="default-item-class">
        <List.Item data-testid="item">Item 1</List.Item>
      </List.Root>,
    );

    const item = screen.getByTestId('item');
    expect(item.className).toBe('default-item-class');
  });

  it('merges defaultItemClassName with item className', () => {
    render(
      <List.Root defaultItemClassName="default-class">
        <List.Item
          className="custom-class"
          data-testid="item"
        >
          Item 1
        </List.Item>
      </List.Root>,
    );

    const item = screen.getByTestId('item');
    expect(item.className).toBe('default-class custom-class');
  });

  it('passes className when no defaultItemClassName', () => {
    render(
      <List.Root>
        <List.Item
          className="custom-class"
          data-testid="item"
        >
          Item 1
        </List.Item>
      </List.Root>,
    );

    const item = screen.getByTestId('item');
    expect(item.className).toBe('custom-class');
  });

  it('works without List.Root context', () => {
    render(<List.Item data-testid="item">Standalone Item</List.Item>);

    const item = screen.getByTestId('item');
    expect(item.tagName).toBe('LI');
    expect(item.textContent).toBe('Standalone Item');
  });
});
