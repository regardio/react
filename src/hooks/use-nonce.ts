/**
 * Nonce Provider.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
 */
import { createContext, useContext } from 'react';

export const NonceContext: React.Context<string> = createContext<string>('');
export const NonceProvider: React.Provider<string> = NonceContext.Provider;

export const useNonce = (): string => useContext(NonceContext);
