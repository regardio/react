import { describe, expect, test } from 'vitest';
import { generateNonce } from './use-nonce';

describe('generateNonce', () => {
  test('generates a string', () => {
    const nonce = generateNonce();
    expect(typeof nonce).toBe('string');
  });

  test('generates a non-empty string', () => {
    const nonce = generateNonce();
    expect(nonce.length).toBeGreaterThan(0);
  });

  test('generates base64-encoded string', () => {
    const nonce = generateNonce();
    // Base64 characters: A-Z, a-z, 0-9, +, /, =
    expect(nonce).toMatch(/^[A-Za-z0-9+/=]+$/);
  });

  test('generates unique nonces', () => {
    const nonces = new Set<string>();
    for (let i = 0; i < 100; i++) {
      nonces.add(generateNonce());
    }
    // All 100 nonces should be unique
    expect(nonces.size).toBe(100);
  });

  test('generates nonce of expected length', () => {
    const nonce = generateNonce();
    // 16 bytes encoded in base64 = 24 characters (with padding)
    expect(nonce.length).toBe(24);
  });
});
