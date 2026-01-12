import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Link, LinkBase, MarkdownLink, PathResolverProvider } from './link';

afterEach(() => {
  cleanup();
});

const renderWithRouter = (ui: React.ReactNode) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('LinkBase', () => {
  it('renders internal link with NavLink', () => {
    renderWithRouter(<LinkBase to="/about">About</LinkBase>);
    expect(screen.getByText('About')).toBeDefined();
  });

  it('renders external http link as anchor', () => {
    renderWithRouter(<LinkBase to="https://example.com">External</LinkBase>);
    const link = screen.getByText('External');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('https://example.com');
  });

  it('renders mailto link as anchor', () => {
    renderWithRouter(<LinkBase to="mailto:test@example.com">Email</LinkBase>);
    const link = screen.getByText('Email');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('mailto:test@example.com');
  });

  it('renders tel link as anchor', () => {
    renderWithRouter(<LinkBase to="tel:+1234567890">Call</LinkBase>);
    const link = screen.getByText('Call');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('tel:+1234567890');
  });

  it('uses pathResolver when routeKey is provided', () => {
    const resolver = vi.fn().mockReturnValue('/resolved-path');
    renderWithRouter(
      <PathResolverProvider value={resolver}>
        <LinkBase routeKey="home">Home</LinkBase>
      </PathResolverProvider>,
    );
    expect(resolver).toHaveBeenCalledWith('home');
    expect(screen.getByText('Home')).toBeDefined();
  });

  it('handles object to prop with pathname, search, and hash', () => {
    renderWithRouter(
      <LinkBase to={{ hash: '#section', pathname: '/page', search: '?q=test' }}>Complex</LinkBase>,
    );
    expect(screen.getByText('Complex')).toBeDefined();
  });

  it('renders children only when path is empty', () => {
    renderWithRouter(<LinkBase>No Link</LinkBase>);
    expect(screen.getByText('No Link')).toBeDefined();
  });

  it('calls onClick handler', () => {
    const handleClick = vi.fn();
    renderWithRouter(
      <LinkBase
        onClick={handleClick}
        to="/test"
      >
        Click Me
      </LinkBase>,
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('opens external http link in new window', () => {
    const windowOpen = vi.spyOn(window, 'open').mockImplementation(() => null);
    renderWithRouter(<LinkBase to="https://example.com">External</LinkBase>);
    fireEvent.click(screen.getByText('External'));
    expect(windowOpen).toHaveBeenCalledWith('https://example.com', '_blank', 'noopener,noreferrer');
    windowOpen.mockRestore();
  });

  it('scrolls to element for hash links', () => {
    const scrollIntoView = vi.fn();
    const element = document.createElement('div');
    element.id = 'section';
    element.scrollIntoView = scrollIntoView;
    document.body.appendChild(element);

    renderWithRouter(<LinkBase to="#section">Jump</LinkBase>);
    fireEvent.click(screen.getByText('Jump'));
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(element);
  });

  it('handles hash link when element not found', () => {
    renderWithRouter(<LinkBase to="#nonexistent">Jump</LinkBase>);
    fireEvent.click(screen.getByText('Jump'));
  });

  it('does not prevent default for tel links', () => {
    renderWithRouter(<LinkBase to="tel:+1234567890">Call</LinkBase>);
    const link = screen.getByText('Call');
    const event = fireEvent.click(link);
    expect(event).toBe(true);
  });

  it('respects defaultPrevented in onClick', () => {
    const handleClick = vi.fn((e: React.MouseEvent) => e.preventDefault());
    const windowOpen = vi.spyOn(window, 'open').mockImplementation(() => null);

    renderWithRouter(
      <LinkBase
        onClick={handleClick}
        to="https://example.com"
      >
        External
      </LinkBase>,
    );
    fireEvent.click(screen.getByText('External'));
    expect(handleClick).toHaveBeenCalled();
    expect(windowOpen).not.toHaveBeenCalled();

    windowOpen.mockRestore();
  });
});

describe('Link', () => {
  it('renders with variant', () => {
    renderWithRouter(
      <Link
        to="/test"
        variant="button"
      >
        Button Link
      </Link>,
    );
    expect(screen.getByText('Button Link')).toBeDefined();
  });

  it('renders with arrow', () => {
    renderWithRouter(
      <Link
        arrow="rarr"
        to="/test"
      >
        Arrow Link
      </Link>,
    );
    expect(screen.getByText('Arrow Link')).toBeDefined();
  });
});

describe('MarkdownLink', () => {
  it('renders Link when href is provided', () => {
    renderWithRouter(<MarkdownLink href="/page">Markdown</MarkdownLink>);
    expect(screen.getByText('Markdown')).toBeDefined();
  });

  it('returns null when href is not provided', () => {
    const { container } = renderWithRouter(<MarkdownLink>No Link</MarkdownLink>);
    expect(container.innerHTML).toBe('');
  });
});
