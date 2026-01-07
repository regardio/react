/**
 * Nonce Provider.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
 */
import { createContext, useContext } from 'react';

export const NonceContext = createContext<string>('');
export const NonceProvider = NonceContext.Provider;

export const useNonce = () => useContext(NonceContext);

/**
 * Generate a cryptographically secure nonce for CSP.
 * @returns A base64-encoded random nonce
 */
export function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}
