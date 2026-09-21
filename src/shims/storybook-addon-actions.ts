/** Logs to the console instead of Storybook's Actions panel. */
export function action(name: string) {
  return (...args: unknown[]) => {
    // eslint-disable-next-line no-console
    console.log(`[action] ${name}`, ...args)
  }
}
