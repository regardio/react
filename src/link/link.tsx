'use client';

import { tv } from '@regardio/tailwind/utils';
import { createContext, useCallback, useContext } from 'react';
import type { NavLinkProps, NavLinkRenderProps } from 'react-router';
import { NavLink } from 'react-router';
import { lowerCaseSzett } from '../utils/text';

/**
 * Context for providing a path resolver function.
 * This allows projects to inject their own localization logic.
 */
export type PathResolver = (routeKey: string) => string;

const PathResolverContext = createContext<PathResolver | null>(null);

export const PathResolverProvider: React.Provider<PathResolver | null> =
  PathResolverContext.Provider;

export function usePathResolver(): PathResolver | null {
  return useContext(PathResolverContext);
}

export interface LinkBaseProps extends Omit<NavLinkProps, 'to'> {
  routeKey?: string;
  to?: string | Partial<{ pathname?: string; search?: string; hash?: string }> | undefined;
  viewTransition?: boolean;
}

export const LinkBase = ({
  className,
  to,
  routeKey,
  children,
  onClick,
  viewTransition = true,
  ...props
}: LinkBaseProps): React.JSX.Element => {
  const pathResolver = usePathResolver();

  let path: string;

  if (routeKey && pathResolver) {
    path = pathResolver(routeKey);
  } else if (typeof to === 'string') {
    path = to;
  } else {
    path = to?.pathname ?? '';
    if (to?.search) path += to.search;
    if (to?.hash) path += to.hash;
  }

  const isExternal =
    path.startsWith('tel:')
    || path.startsWith('mailto:')
    || path.startsWith('#')
    || path.startsWith('http');

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;

      if (path.startsWith('tel:') || path.startsWith('mailto:')) {
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
    },
    [onClick, path],
  );

  if (!path) {
    return <>{typeof children === 'function' ? null : children}</>;
  }

  if (isExternal) {
    const externalState: NavLinkRenderProps = {
      isActive: false,
      isPending: false,
      isTransitioning: false,
    };
    const resolvedClassName =
      typeof className === 'function' ? className(externalState) : className;
    const resolvedStyle =
      typeof props.style === 'function' ? props.style(externalState) : props.style;

    return (
      <a
        className={resolvedClassName}
        href={path}
        onClick={handleClick}
        style={resolvedStyle}
      >
        {typeof children === 'function' ? children(externalState) : children}
      </a>
    );
  }

  return (
    <NavLink
      {...props}
      className={className}
      onClick={handleClick}
      to={path}
      viewTransition={viewTransition}
    >
      {children}
    </NavLink>
  );
};

const arrowVariants = {
  darr: 'darr',
  larr: 'larr',
  rarr: 'rarr',
  uarr: 'uarr',
} as const;

const linkVariants = {
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
} as const;

const link = tv({
  base: [],
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    arrow: arrowVariants,
    variant: linkVariants,
  },
});

export type LinkArrow = keyof typeof arrowVariants;
export type LinkVariant = keyof typeof linkVariants;

export interface LinkProps extends Omit<NavLinkProps, 'to'> {
  arrow?: LinkArrow;
  routeKey?: string;
  to?: string | Partial<{ pathname?: string; search?: string; hash?: string }>;
  variant?: LinkVariant;
  viewTransition?: boolean;
}

export const Link = ({
  arrow,
  children,
  className,
  routeKey,
  to,
  variant,
  viewTransition,
  ...props
}: LinkProps): React.JSX.Element => {
  return (
    <LinkBase
      {...props}
      className={link({
        arrow,
        className: typeof className === 'string' ? className : undefined,
        variant,
      })}
      routeKey={routeKey}
      to={to}
      viewTransition={viewTransition}
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
