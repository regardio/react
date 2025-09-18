import { expect, test } from 'bun:test';

import { cn } from './cn';

test('removes conflicting classes using twMerge', () => {
  const classes = cn('text-red-500', 'text-blue-500');

  expect(classes).toBe('text-blue-500');
});

test('merges multiple classes into a single string', () => {
  const classes = cn('text-red-500', 'font-bold');

  expect(classes).toBe('text-red-500 font-bold');
});

test('removes empty classes', () => {
  const classes = cn('text-red-500', '', 'font-bold');

  expect(classes).toBe('text-red-500 font-bold');
});

test('removes undefined classes', () => {
  const classes = cn('text-red-500', undefined, 'font-bold');

  expect(classes).toBe('text-red-500 font-bold');
});

test('removes null classes', () => {
  const classes = cn('text-red-500', null, 'font-bold');

  expect(classes).toBe('text-red-500 font-bold');
});

test('resolves nested arrays', () => {
  const classes = cn('text-red-500', ['bg-blue-500', 'font-bold']);

  expect(classes).toBe('text-red-500 bg-blue-500 font-bold');
});

test('resolves nested objects', () => {
  const classes = cn('text-red-500', {
    'bg-blue-500': true,
    'font-bold': true,
  });

  expect(classes).toBe('text-red-500 bg-blue-500 font-bold');
});
