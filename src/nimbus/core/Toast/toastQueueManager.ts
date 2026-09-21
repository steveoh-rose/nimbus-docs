// @ts-nocheck
import { flushSync } from 'react-dom';
import { ToastQueue } from 'react-stately';
import type { ToastPayload } from './Toast';

type QueueAddOptions = {
  /**
   * The duration in milliseconds before the toast auto-dismisses.
   * Pass `'infinity'` to keep the toast open until manually closed.
   * @default 5000
   */
  timeout?: number | 'infinity';
};

const GLOBAL_QUEUE_SYMBOL = Symbol.for('nimbus-ui:toast-queue');
const DEFAULT_DURATION = 5000;
const MAX_VISIBLE_TOASTS = 3;

/* ************************************************* *
 * View Transitions Batcher                          *
 * ************************************************* */

let pendingUpdates: (() => void)[] = [];
let isScheduled = false;

const flushUpdates = (): void => {
  const updates = pendingUpdates;
  pendingUpdates = [];
  isScheduled = false;

  flushSync(() => {
    updates.forEach((update) => update());
  });
};

const triggerViewTransition = (): void => {
  const doc = globalThis.document as Document & {
    startViewTransition?: (callback: () => void) => void;
  };
  const supportsViewTransitions = !!doc?.startViewTransition && doc.visibilityState === 'visible';

  if (!supportsViewTransitions) {
    flushUpdates();
    return;
  }

  doc.startViewTransition(flushUpdates);
};

const batchViewTransitions = (updateFn: () => void): void => {
  pendingUpdates.push(updateFn);

  if (!isScheduled) {
    isScheduled = true;
    queueMicrotask(triggerViewTransition);
  }
};

/* ************************************************* *
 * Queue                                             *
 * ––––––––––––––––––––––––––––––––––––––––––––––––– *
 * API for imperatively triggering and managing      *
 * notifications across MFEs. 100% synchronous.      *
 * Returns standard string IDs instantly.            *
 * ************************************************* */

const createToastQueue = (maxVisible?: number): ToastQueue<ToastPayload> => {
  return new ToastQueue<ToastPayload>({
    maxVisibleToasts: maxVisible ?? MAX_VISIBLE_TOASTS,
    wrapUpdate: batchViewTransitions,
  });
};

export const getGlobalQueue = (): ToastQueue<ToastPayload> => {
  if (typeof globalThis.window === 'undefined') {
    return createToastQueue();
  }

  const win = globalThis.window as Window & { [GLOBAL_QUEUE_SYMBOL]?: ToastQueue<ToastPayload> };
  win[GLOBAL_QUEUE_SYMBOL] ??= createToastQueue();

  return win[GLOBAL_QUEUE_SYMBOL];
};

export const queue = {
  add(payload: ToastPayload, options?: QueueAddOptions): string {
    const isInfinite = payload.variant === 'loading' || options?.timeout === 'infinity';
    const duration = options?.timeout ?? DEFAULT_DURATION;
    return getGlobalQueue().add(payload, isInfinite ? {} : { timeout: duration as number });
  },

  close(key: string): void {
    /**
     * Defers the close action to the next frame so React and portal click events finish first.
     * If called synchronously, React Aria's state updates collide with the View Transition
     * snapshot, resulting in a blank/broken exit animation.
     * * WARNING: Do NOT use `slot="close"` on the Close button in `Toast.tsx`.
     * If present, React Aria hijacks the click and bypasses this fix entirely.
     */
    requestAnimationFrame(() => {
      getGlobalQueue().close(key);
    });
  },

  clear(): void {
    requestAnimationFrame(() => {
      getGlobalQueue().clear();
    });
  },
};
