import { useCallback } from 'react';
import type { NavLinkProps } from 'react-router';
import { NavLink, useNavigate } from 'react-router';
import { cva, type VariantProps } from '../utils/cn';
import { lowerCaseSzett } from '../utils/text';

export interface LinkBaseProps extends Omit<NavLinkProps, 'to' | 'className'> {
  className?: string;
  to?: string | Partial<{ pathname?: string; search?: string; hash?: string }> | undefined;
}

export const LinkBase = ({ className, to, children, ...props }: LinkBaseProps) => {
  const navigate = useNavigate();

  let path: string;

  if (typeof to === 'string') {
    path = to;
  } else {
    path = to?.pathname ?? '';
    if (to?.search) path += to.search;
    if (to?.hash) path += to.hash;
  }

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (path.startsWith('tel:') || path.startsWith('mailto:')) {
        event.preventDefault();
        window.location.href = path;
        return;
      }

      if (path.startsWith('#')) {
        event.preventDefault();
        const element = document.getElementById(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      if (path.startsWith('http')) {
        event.preventDefault();
        window.open(path, '_blank', 'noopener,noreferrer');
        return;
      }

      navigate(path || '', { replace: false });
    },
    [navigate, path],
  );

  if (path) {
    if (
      typeof children !== 'function' &&
      (path.startsWith('tel:') ||
        path.startsWith('mailto:') ||
        path.startsWith('#') ||
        path.startsWith('http'))
    ) {
      return (
        <a
          {...(className ? { className } : {})}
          href={path}
          onClick={handleClick}
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        {...props}
        {...(className ? { className } : {})}
        onClick={handleClick}
        to={path}
      >
        {children}
      </NavLink>
    );
  }

  return <>{typeof children === 'function' ? null : children}</>;
};

const link = cva({
  base: [],
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    arrow: {
      darr: 'darr',
      larr: 'larr',
      rarr: 'rarr',
      uarr: 'uarr',
    },
    variant: {
      button: [
        'block',
        'button',
        'mt-s',
        'relative',
        'rarr',
        'text-right',
        'text-sm',
        'tracking-wider',
        'uppercase',
      ],
      code: ['font-monospace'],
      link: ['rarr', '!bg-transparent', 'uppercase', '!tracking-wider'],
      navtitle: ['block', 'uppercase', 'tracking-wider'],
      primary: [],
      subtitle: ['text-lg'],
    },
  },
});

export interface LinkProps extends Omit<NavLinkProps, 'to'>, VariantProps<typeof link> {
  to?: string | Partial<{ pathname?: string; search?: string; hash?: string }>;
}

export const Link = ({ arrow, children, className, to, variant, ...props }: LinkProps) => {
  return (
    <LinkBase
      {...props}
      className={link({
        arrow,
        className,
        variant,
      })}
      to={to}
    >
      {lowerCaseSzett(children as React.ReactNode)}
    </LinkBase>
  );
};

export interface MarkdownLinkProps extends Omit<LinkProps, 'to'> {
  href?: string;
}

export const MarkdownLink: React.FC<MarkdownLinkProps> = ({ children, href, ...props }) => {
  if (href) {
    return (
      <Link
        to={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return null;
};
