// @ts-nocheck
/* eslint-disable no-console */
import React from 'react';

type WarningType = 'WORK_IN_PROGRESS' | 'DEPRECATED';

/**
 * Messages
 * The identifier for the deprecation notice (component name, object name, etc.) can be substitued in the string by using `%s`.
 */
const messages: Record<WarningType, string> = {
  WORK_IN_PROGRESS:
    '%s is still in development and is not suitable for production usage. The API could change, or it could be removed at any time without notice.',
  DEPRECATED: '%s has been deprecated and will be removed from a later version.',
};

/**
 * Warning logger
 * Prints a warning to the console in development mode.
 */
export const warn = (identifier: string, type: WarningType, additionalMessage?: string) => {
  // Do not log in production
  if (process.env.NODE_ENV !== 'production') {
    // Prevent logging undefined to the console
    const params = [messages[type], identifier, additionalMessage].filter(Boolean);
    console.warn(...params);
  }
};

/**
 * Warning hook
 * Prints a warning to the console in development mode on initial render.
 */
export const useWarn = (identifier: string, type: WarningType, additionalMessage?: string) => {
  React.useEffect(() => {
    warn(identifier, type, additionalMessage);
  }, [identifier, type, additionalMessage]);
};
