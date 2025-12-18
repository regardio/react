import { LanguageDetectorLingui } from '@regardio/js/intl/language-detector';
import { createCookie } from 'react-router';

/**
 * Configuration options for creating locale utilities
 */
export interface LocaleConfigOptions {
  /**
   * Default locale to use as fallback
   */
  defaultLocale: string;

  /**
   * List of supported locales
   */
  supportedLocales: readonly string[];

  /**
   * Cookie options for storing locale preference
   */
  cookieOptions?: {
    /**
     * Name of the cookie (default: 'locale')
     */
    name?: string;

    /**
     * Max age of the cookie in seconds (default: 1 year)
     */
    maxAge?: number;

    /**
     * Whether the cookie should be HTTP only (default: false)
     */
    httpOnly?: boolean;

    /**
     * Whether the cookie should be secure (default: true in production)
     */
    secure?: boolean;

    /**
     * SameSite attribute for the cookie (default: 'lax')
     */
    sameSite?: 'strict' | 'lax' | 'none';
  };

  /**
   * Detection options for the language detector
   */
  detectionOptions?: {
    /**
     * Order of detection methods (default: ['urlPath', 'cookie', 'header'])
     */
    order?: Array<'urlPath' | 'cookie' | 'header'>;
  };
}

/**
 * Result of createLocaleConfig
 */
export interface LocaleConfig {
  /**
   * Cookie for storing locale preference
   */
  localeCookie: ReturnType<typeof createCookie>;

  /**
   * Language detector instance
   */
  languageDetector: LanguageDetectorLingui;
}

/**
 * Create locale configuration utilities
 *
 * This function creates a unified locale cookie and language detector
 * based on the provided configuration options.
 *
 * @param options Configuration options
 * @returns Locale configuration utilities
 *
 * @example
 * ```ts
 * // In your app's configuration file
 * const { localeCookie, languageDetector } = createLocaleConfig({
 *   defaultLocale: 'en',
 *   supportedLocales: ['en', 'de', 'fr'],
 * });
 * ```
 */
export function createLocaleConfig(options: LocaleConfigOptions): LocaleConfig {
  const { defaultLocale, supportedLocales, cookieOptions = {}, detectionOptions = {} } = options;

  const {
    name = 'locale',
    maxAge = 60 * 60 * 24 * 365, // 1 year
    httpOnly = false,
    secure = import.meta.env.MODE !== 'development',
    sameSite = 'lax',
  } = cookieOptions;

  const { order = ['urlPath', 'cookie', 'header'] } = detectionOptions;

  // Create cookie for storing locale preference
  const localeCookie = createCookie(name, {
    httpOnly,
    maxAge,
    sameSite,
    secure,
  });

  // Create language detector instance
  const languageDetector = new LanguageDetectorLingui({
    detection: {
      cookie: localeCookie,
      fallbackLanguage: defaultLocale,
      order,
      supportedLanguages: [...supportedLocales],
    },
  });

  return {
    languageDetector,
    localeCookie,
  };
}

export type Locales = string | string[] | undefined;

/**
 * Get the client's locales from the Accept-Language header.
 * If the header is not defined returns null.
 * If the header is defined return an array of locales, sorted by the quality
 * value.
 *
 * @example
 * export let loader: LoaderFunction = async ({ request }) => {
 *   let locales = await getClientLocales(request)
 *   let date = new Date().toLocaleDateString(locales, {
 *     "day": "numeric",
 *   });
 *   return json({ date })
 * }
 */
export function getClientLocales(headers: Headers): Promise<Locales>;
export function getClientLocales(request: Request): Promise<Locales>;
export async function getClientLocales(requestOrHeaders: Request | Headers): Promise<Locales> {
  const headers = getHeaders(requestOrHeaders);

  const acceptLanguage = headers.get('Accept-Language');

  // if the header is not defined, return undefined
  if (!acceptLanguage) return undefined;

  const { parseAcceptLanguage } = await import('intl-parse-accept-language');

  const locales = parseAcceptLanguage(acceptLanguage, {
    ignoreWildcard: true,
    validate: Intl.DateTimeFormat.supportedLocalesOf,
  });

  // if there are no locales found, return undefined
  if (locales.length === 0) return undefined;
  // if there is only one locale, return it
  if (locales.length === 1) return locales[0];
  // if there are multiple locales, return the array
  return locales;
}

/**
 * Receives a Request or Headers objects.
 * If it's a Request returns the request.headers
 * If it's a Headers returns the object directly.
 */
function getHeaders(requestOrHeaders: Request | Headers): Headers {
  if (requestOrHeaders instanceof Request) {
    return requestOrHeaders.headers;
  }

  return requestOrHeaders;
}
