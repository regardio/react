import { describe, expect, test } from 'vitest';
import { checkIfRouteIsActive, isRouteActive } from './is-route-active';

describe('isRouteActive', () => {
  test('returns true when path matches currentPath exactly', () => {
    expect(isRouteActive('/about', '/about')).toBe(true);
    expect(isRouteActive('/contact', '/contact')).toBe(true);
  });

  test('returns false when paths are different', () => {
    expect(isRouteActive('/about', '/contact')).toBe(false);
  });

  test('with end=true (default), only matches exact path', () => {
    expect(isRouteActive('/about', '/about/team', true)).toBe(false);
    expect(isRouteActive('/about', '/about', true)).toBe(true);
  });

  test('with end=false, matches parent paths', () => {
    expect(isRouteActive('/about', '/about/team', false)).toBe(true);
    expect(isRouteActive('/about', '/about/team/members', false)).toBe(true);
  });

  test('with end as function, uses function result', () => {
    const endFn = (path: string) => path.includes('team');
    expect(isRouteActive('/about', '/about/team', endFn)).toBe(false);
    expect(isRouteActive('/about', '/about/contact', endFn)).toBe(true);
  });

  test('root path only matches root', () => {
    expect(isRouteActive('/', '/')).toBe(true);
    expect(isRouteActive('/', '/about', true)).toBe(false);
  });
});

describe('checkIfRouteIsActive', () => {
  test('returns true for exact match', () => {
    expect(checkIfRouteIsActive('/about', '/about')).toBe(true);
    expect(checkIfRouteIsActive('/users/123', '/users/123')).toBe(true);
  });

  test('returns false when root is target but current is not root', () => {
    expect(checkIfRouteIsActive('/', '/about')).toBe(false);
    expect(checkIfRouteIsActive('/', '/users/123')).toBe(false);
  });

  test('returns true for root when current is root', () => {
    expect(checkIfRouteIsActive('/', '/')).toBe(true);
  });

  test('returns false when target is not in current path', () => {
    expect(checkIfRouteIsActive('/about', '/contact')).toBe(false);
    expect(checkIfRouteIsActive('/users', '/posts')).toBe(false);
  });

  test('with depth=1, matches when segments match within depth', () => {
    // depth=1 means matchingSegments > segments.length - 0, i.e., matchingSegments > 1
    // /about has 1 segment, /about/team has 2 segments, 1 matching
    // 1 > 1 - 0 = 1 > 1 = false
    expect(checkIfRouteIsActive('/about', '/about/team', 1)).toBe(false);
    expect(checkIfRouteIsActive('/about', '/about/team/members', 1)).toBe(false);
  });

  test('with depth=2, matches one level deep', () => {
    // depth=2 means matchingSegments > segments.length - 1
    // /about has 1 segment, 1 > 1 - 1 = 1 > 0 = true
    expect(checkIfRouteIsActive('/about', '/about/team', 2)).toBe(true);
    expect(checkIfRouteIsActive('/about', '/about/team/members', 2)).toBe(true);
  });

  test('with depth=3, matches two levels deep', () => {
    expect(checkIfRouteIsActive('/about', '/about/team', 3)).toBe(true);
    expect(checkIfRouteIsActive('/about', '/about/team/members', 3)).toBe(true);
    expect(checkIfRouteIsActive('/about', '/about/team/members/details', 3)).toBe(true);
  });

  test('ignores query parameters in current route', () => {
    expect(checkIfRouteIsActive('/about', '/about?foo=bar')).toBe(true);
  });
});
