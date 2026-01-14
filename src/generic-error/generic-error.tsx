'use client';

import { isRouteErrorResponse, useRouteError } from 'react-router';

/**
 * Descriptor returned from getErrorDescriptor to help apps localize messages.
 */
export type ErrorDescriptor =
  | {
      type: 'http';
      status: number;
      statusText: string;
      defaultId: string; // e.g. "errors.http"
      defaultMessage: string; // e.g. "Error {status}"
    }
  | {
      type: 'error';
      defaultId: string; // e.g. "errors.runtime"
      defaultMessage: string; // e.g. "An unexpected error occurred."
      message?: string;
      stack?: string;
    }
  | {
      type: 'unknown';
      defaultId: string; // e.g. "errors.unknown"
      defaultMessage: string; // e.g. "An unexpected error occurred."
    };

/**
 * Compute a normalized error descriptor from a React Router error.
 * Apps can use this to map to i18n keys.
 */
export function getErrorDescriptor(error: unknown): ErrorDescriptor {
  if (isRouteErrorResponse(error)) {
    const status = error.status;
    const statusText = error.statusText || 'Error';
    return {
      defaultId: status === 404 ? 'errors.404' : 'errors.http',
      defaultMessage: status === 404 ? 'Not found' : `Error ${status}`,
      status,
      statusText,
      type: 'http',
    };
  }
  if (error instanceof Error) {
    return {
      defaultId: 'errors.runtime',
      defaultMessage: 'An unexpected error occurred.',
      message: error.message,
      type: 'error',
      ...(error.stack ? { stack: error.stack } : {}),
    };
  }
  return {
    defaultId: 'errors.unknown',
    defaultMessage: 'An unexpected error occurred.',
    type: 'unknown',
  };
}

/**
 * GenericError
 *
 * A reusable error boundary component for React Router apps.
 * - Displays status-based messages for route responses
 * - Shows stack traces in development for non-response errors
 *
 * For localization, apps may either:
 * - Wrap this component and use `getErrorDescriptor(useRouteError())` to map to i18n keys
 * - Or provide a custom `renderMessage` to override the displayed details
 */
export function GenericError({
  renderMessage,
}: {
  renderMessage?: (descriptor: ErrorDescriptor) => React.JSX.Element;
} = {}): React.JSX.Element {
  const error = useRouteError();
  const descriptor = getErrorDescriptor(error);

  const title = descriptor.type === 'http' ? `Error ${descriptor.status}` : 'Error';

  return (
    <main className="pt-2xl p-sm container mx-auto">
      <h1>{title}</h1>
      {renderMessage ? (
        renderMessage(descriptor)
      ) : (
        <>
          <p>
            {descriptor.type === 'http'
              ? descriptor.defaultMessage
              : descriptor.type === 'error'
                ? descriptor.message || descriptor.defaultMessage
                : descriptor.defaultMessage}
          </p>
          {import.meta.env.DEV && descriptor.type === 'error' && descriptor.stack && (
            <pre className="w-full p-sm overflow-x-auto">
              <code>{descriptor.stack}</code>
            </pre>
          )}
        </>
      )}
    </main>
  );
}
