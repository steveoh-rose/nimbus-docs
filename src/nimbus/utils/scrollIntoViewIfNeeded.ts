// @ts-nocheck
/* eslint-disable no-param-reassign */
import { compute } from 'compute-scroll-into-view';

export type ScrollBehavior = 'auto' | 'smooth';
export type ScrollLogicalPosition = 'start' | 'center' | 'end' | 'nearest';

export interface ScrollIntoViewOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

const scrollIntoViewIfNeeded = (element: HTMLElement, options?: ScrollIntoViewOptions) => {
  const isScrollBehaviorSupported = 'scrollBehavior' in document.body.style;

  const actions = compute(element, {
    scrollMode: 'if-needed',
    block: options?.block ?? 'start',
    inline: options?.inline ?? 'nearest',
  });

  actions.forEach(({ el, top, left }) => {
    if (el.scroll && isScrollBehaviorSupported) {
      el.scroll({
        top,
        left,
        behavior: options?.behavior ?? 'auto',
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
};

export default scrollIntoViewIfNeeded;
