import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { Link, LinkBase, MarkdownLink, PathResolverProvider, usePathResolver } from './link';

// Helper to render with router context
const renderWithRouter = (ui: React.ReactNode, { route = '/' } = {}) => {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

describe('LinkBase', () => {
  describe('path resolution', () => {
    test('renders with string "to" prop', () => {
      renderWithRouter(<LinkBase to="/about">About</LinkBase>);

      const link = screen.getByRole('link', { name: 'About' });
      expect(link).toHaveAttribute('href', '/about');
    });

    test('renders with object "to" prop containing pathname', () => {
      renderWithRouter(<LinkBase to={{ pathname: '/contact' }}>Contact</LinkBase>);

      const link = screen.getByRole('link', { name: 'Contact' });
      expect(link).toHaveAttribute('href', '/contact');
    });

    test('renders with object "to" prop containing pathname, search, and hash', () => {
      renderWithRouter(
        <LinkBase to={{ hash: '#section', pathname: '/page', search: '?foo=bar' }}>
          Full Path
        </LinkBase>,
      );

      const link = screen.getByRole('link', { name: 'Full Path' });
      expect(link).toHaveAttribute('href', '/page?foo=bar#section');
    });

    test('uses pathResolver when routeKey is provided', () => {
      const mockResolver = vi.fn().mockReturnValue('/resolved-path');

      renderWithRouter(
        <PathResolverProvider value={mockResolver}>
          <LinkBase routeKey="home">Home</LinkBase>
        </PathResolverProvider>,
      );

      expect(mockResolver).toHaveBeenCalledWith('home');
      const link = screen.getByRole('link', { name: 'Home' });
      expect(link).toHaveAttribute('href', '/resolved-path');
    });

    test('falls back to "to" prop when no pathResolver is available', () => {
      renderWithRouter(
        <LinkBase
          routeKey="home"
          to="/fallback"
        >
          Home
        </LinkBase>,
      );

      const link = screen.getByRole('link', { name: 'Home' });
      expect(link).toHaveAttribute('href', '/fallback');
    });

    test('renders children only when path is empty', () => {
      renderWithRouter(<LinkBase>No Link</LinkBase>);

      expect(screen.queryByRole('link')).toBeNull();
      expect(screen.getByText('No Link')).toBeInTheDocument();
    });

    test('renders nothing for function children when path is empty', () => {
      const { container } = renderWithRouter(
        <LinkBase>{() => <span>Function Child</span>}</LinkBase>,
      );

      expect(screen.queryByRole('link')).toBeNull();
      expect(container.textContent).toBe('');
    });
  });

  describe('external links', () => {
    let windowOpenSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    });

    afterEach(() => {
      windowOpenSpy.mockRestore();
    });

    test('renders tel: links as anchor elements', () => {
      renderWithRouter(<LinkBase to="tel:+1234567890">Call Us</LinkBase>);

      const link = screen.getByRole('link', { name: 'Call Us' });
      expect(link.tagName).toBe('A');
      expect(link).toHaveAttribute('href', 'tel:+1234567890');
    });

    test('renders mailto: links as anchor elements', () => {
      renderWithRouter(<LinkBase to="mailto:test@example.com">Email Us</LinkBase>);

      const link = screen.getByRole('link', { name: 'Email Us' });
      expect(link.tagName).toBe('A');
      expect(link).toHaveAttribute('href', 'mailto:test@example.com');
    });

    test('opens http links in new tab on click', () => {
      renderWithRouter(<LinkBase to="https://example.com">External</LinkBase>);

      const link = screen.getByRole('link', { name: 'External' });
      fireEvent.click(link);

      expect(windowOpenSpy).toHaveBeenCalledWith(
        'https://example.com',
        '_blank',
        'noopener,noreferrer',
      );
    });

    test('handles hash links with smooth scroll', () => {
      const mockElement = document.createElement('div');
      mockElement.id = 'section';
      mockElement.scrollIntoView = vi.fn();
      document.body.appendChild(mockElement);

      renderWithRouter(<LinkBase to="#section">Go to Section</LinkBase>);

      const link = screen.getByRole('link', { name: 'Go to Section' });
      fireEvent.click(link);

      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

      document.body.removeChild(mockElement);
    });

    test('does not scroll if hash element does not exist', () => {
      renderWithRouter(<LinkBase to="#nonexistent">Missing Section</LinkBase>);

      const link = screen.getByRole('link', { name: 'Missing Section' });
      // Should not throw
      expect(() => fireEvent.click(link)).not.toThrow();
    });
  });

  describe('onClick handling', () => {
    test('calls custom onClick handler', () => {
      const handleClick = vi.fn();

      renderWithRouter(
        <LinkBase
          onClick={handleClick}
          to="/page"
        >
          Click Me
        </LinkBase>,
      );

      const link = screen.getByRole('link', { name: 'Click Me' });
      fireEvent.click(link);

      expect(handleClick).toHaveBeenCalled();
    });

    test('respects preventDefault from custom onClick', () => {
      const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
      const handleClick = vi.fn((e: React.MouseEvent) => e.preventDefault());

      renderWithRouter(
        <LinkBase
          onClick={handleClick}
          to="https://example.com"
        >
          External
        </LinkBase>,
      );

      const link = screen.getByRole('link', { name: 'External' });
      fireEvent.click(link);

      expect(handleClick).toHaveBeenCalled();
      expect(windowOpenSpy).not.toHaveBeenCalled();

      windowOpenSpy.mockRestore();
    });
  });

  describe('className and style handling', () => {
    test('applies static className to external links', () => {
      renderWithRouter(
        <LinkBase
          className="custom-class"
          to="https://example.com"
        >
          External
        </LinkBase>,
      );

      const link = screen.getByRole('link', { name: 'External' });
      expect(link).toHaveClass('custom-class');
    });

    test('resolves function className for external links', () => {
      renderWithRouter(
        <LinkBase
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="https://example.com"
        >
          External
        </LinkBase>,
      );

      const link = screen.getByRole('link', { name: 'External' });
      expect(link).toHaveClass('inactive');
    });

    test('resolves function style for external links', () => {
      renderWithRouter(
        <LinkBase
          style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          to="https://example.com"
        >
          External
        </LinkBase>,
      );

      const link = screen.getByRole('link', { name: 'External' });
      expect(link).toHaveStyle({ color: 'rgb(0, 0, 255)' });
    });

    test('resolves function children for external links', () => {
      renderWithRouter(
        <LinkBase to="https://example.com">
          {({ isActive }) => (isActive ? 'Active' : 'Inactive')}
        </LinkBase>,
      );

      expect(screen.getByText('Inactive')).toBeInTheDocument();
    });
  });

  describe('viewTransition prop', () => {
    test('defaults to true for internal links', () => {
      renderWithRouter(<LinkBase to="/page">Page</LinkBase>);

      // NavLink should receive viewTransition=true by default
      const link = screen.getByRole('link', { name: 'Page' });
      expect(link).toBeInTheDocument();
    });

    test('can be disabled', () => {
      renderWithRouter(
        <LinkBase
          to="/page"
          viewTransition={false}
        >
          Page
        </LinkBase>,
      );

      const link = screen.getByRole('link', { name: 'Page' });
      expect(link).toBeInTheDocument();
    });
  });
});

describe('Link', () => {
  test('applies variant classes', () => {
    renderWithRouter(
      <Link
        to="/page"
        variant="button"
      >
        Button Link
      </Link>,
    );

    const link = screen.getByRole('link', { name: 'Button Link' });
    expect(link).toHaveClass('button');
  });

  test('applies arrow classes', () => {
    renderWithRouter(
      <Link
        arrow="rarr"
        to="/page"
      >
        Arrow Link
      </Link>,
    );

    const link = screen.getByRole('link', { name: 'Arrow Link' });
    expect(link).toHaveClass('rarr');
  });

  test('merges custom className with variant classes', () => {
    renderWithRouter(
      <Link
        className="custom"
        to="/page"
        variant="code"
      >
        Code Link
      </Link>,
    );

    const link = screen.getByRole('link', { name: 'Code Link' });
    expect(link).toHaveClass('font-monospace');
    expect(link).toHaveClass('custom');
  });

  test('passes through routeKey to LinkBase', () => {
    const mockResolver = vi.fn().mockReturnValue('/resolved');

    renderWithRouter(
      <PathResolverProvider value={mockResolver}>
        <Link routeKey="test">Test</Link>
      </PathResolverProvider>,
    );

    expect(mockResolver).toHaveBeenCalledWith('test');
  });
});

describe('MarkdownLink', () => {
  test('renders Link when href is provided', () => {
    renderWithRouter(<MarkdownLink href="/page">Markdown Link</MarkdownLink>);

    const link = screen.getByRole('link', { name: 'Markdown Link' });
    expect(link).toHaveAttribute('href', '/page');
  });

  test('renders null when href is not provided', () => {
    const { container } = renderWithRouter(<MarkdownLink>No Href</MarkdownLink>);

    expect(container.textContent).toBe('');
  });

  test('passes through Link props', () => {
    renderWithRouter(
      <MarkdownLink
        href="/page"
        variant="subtitle"
      >
        Styled Link
      </MarkdownLink>,
    );

    const link = screen.getByRole('link', { name: 'Styled Link' });
    expect(link).toHaveClass('text-lg');
  });
});

describe('usePathResolver', () => {
  test('returns null when no provider is present', () => {
    let resolverValue: ReturnType<typeof usePathResolver> = vi.fn();

    const TestComponent = () => {
      resolverValue = usePathResolver();
      return null;
    };

    render(<TestComponent />);

    expect(resolverValue).toBeNull();
  });

  test('returns resolver function when provider is present', () => {
    const mockResolver = vi.fn().mockReturnValue('/path');
    let resolverValue: ReturnType<typeof usePathResolver> = null;

    const TestComponent = () => {
      resolverValue = usePathResolver();
      return null;
    };

    render(
      <PathResolverProvider value={mockResolver}>
        <TestComponent />
      </PathResolverProvider>,
    );

    expect(resolverValue).toBe(mockResolver);
  });
});
