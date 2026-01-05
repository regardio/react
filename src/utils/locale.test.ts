import { LanguageDetectorLingui } from '@regardio/js/intl/language-detector';
import { beforeEach, describe, expect, test } from 'vitest';
import { createLocaleConfig } from './locale';

describe('createLocaleConfig', () => {
  const originalEnvMode = import.meta.env.MODE;

  beforeEach(() => {
    // Reset MODE between tests
    import.meta.env.MODE = originalEnvMode;
  });

  test('creates config with default options', async () => {
    const config = createLocaleConfig({
      defaultLocale: 'en',
      supportedLocales: ['en', 'de'],
    });

    // Verify cookie was created with correct default options
    expect(config.localeCookie).toBeDefined();
    expect(config.localeCookie.name).toBe('locale');

    // Create a mock request with a cookie
    const request = new Request('https://example.com', {
      headers: {
        Cookie: await config.localeCookie.serialize('en'),
      },
    });

    // Parse the cookie to verify it works correctly
    const parsedValue = await config.localeCookie.parse(request.headers.get('Cookie'));
    expect(parsedValue).toBe('en');

    // Verify language detector was created correctly
    expect(config.languageDetector).toBeInstanceOf(LanguageDetectorLingui);

    // Test language detector behavior instead of accessing private properties
    const mockRequest = new Request('https://example.com/en/page', {
      headers: { 'Accept-Language': 'de' },
    });

    // With default order (urlPath first), it should detect 'en' from URL path
    const detectedLocale = await config.languageDetector.getLocale(mockRequest);
    expect(detectedLocale).toBe('en');
  });

  test('creates config with custom cookie options', async () => {
    const config = createLocaleConfig({
      cookieOptions: {
        httpOnly: true,
        maxAge: 3600, // 1 hour
        name: 'custom-locale',
        sameSite: 'strict',
        secure: true,
      },
      defaultLocale: 'fr',
      supportedLocales: ['fr', 'es'],
    });

    // Verify cookie name
    expect(config.localeCookie.name).toBe('custom-locale');

    // Test cookie serialization to verify options indirectly
    const cookieHeader = await config.localeCookie.serialize('fr');
    console.log('Custom cookie header:', cookieHeader);
    expect(typeof cookieHeader).toBe('string');
    // Check for cookie name and value without assuming exact format
    expect(cookieHeader.includes('custom-locale=')).toBe(true);
    expect(/samesite=strict/i.test(cookieHeader)).toBe(true);
    expect(/httponly/i.test(cookieHeader)).toBe(true);
    expect(/secure/i.test(cookieHeader)).toBe(true);
    expect(/max-age=3600/i.test(cookieHeader)).toBe(true);
  });

  test('creates config with custom detection order', async () => {
    const config = createLocaleConfig({
      defaultLocale: 'de',
      detectionOptions: {
        order: ['header', 'cookie', 'urlPath'],
      },
      supportedLocales: ['de', 'en'],
    });

    // Test detection order by creating requests that would give different results
    // based on detection order

    // This request has 'en' in URL path but 'de' in Accept-Language header
    const mockRequest = new Request('https://example.com/en/page', {
      headers: { 'Accept-Language': 'de' },
    });

    // With custom order (header first), it should detect 'de' from header
    // instead of 'en' from URL path
    const detectedLocale = await config.languageDetector.getLocale(mockRequest);
    expect(detectedLocale).toBe('de');
  });

  test('secure cookie defaults to true in production environment', async () => {
    // Mock production environment
    import.meta.env.MODE = 'production';

    const config = createLocaleConfig({
      defaultLocale: 'en',
      supportedLocales: ['en', 'de'],
    });

    // Test cookie serialization to verify secure option indirectly
    const cookieHeader = await config.localeCookie.serialize('en');
    console.log('Production cookie header:', cookieHeader);
    expect(typeof cookieHeader).toBe('string');
    // Check for Secure flag without assuming exact format
    expect(/secure/i.test(cookieHeader)).toBe(true);
  });

  test('secure cookie defaults to false in development environment', async () => {
    // Mock development environment
    import.meta.env.MODE = 'development';

    const config = createLocaleConfig({
      defaultLocale: 'en',
      supportedLocales: ['en', 'de'],
    });

    // Test cookie serialization to verify secure option indirectly
    const cookieHeader = await config.localeCookie.serialize('en');
    console.log('Development cookie header:', cookieHeader);
    expect(typeof cookieHeader).toBe('string');
    // Check for absence of Secure flag without assuming exact format
    expect(/secure/i.test(cookieHeader)).toBe(false);
  });

  test('handles readonly supportedLocales array', async () => {
    // Create a readonly array
    const supportedLocales = ['en', 'de'] as const;

    const config = createLocaleConfig({
      defaultLocale: 'en',
      supportedLocales,
    });

    // Test that both languages are detected correctly
    const enRequest = new Request('https://example.com/en/page');
    expect(await config.languageDetector.getLocale(enRequest)).toBe('en');

    const deRequest = new Request('https://example.com/de/page');
    expect(await config.languageDetector.getLocale(deRequest)).toBe('de');
  });
});
