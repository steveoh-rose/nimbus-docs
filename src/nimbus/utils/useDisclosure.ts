// @ts-nocheck
import { useState, useCallback } from 'react';

/**
 * A custom hook to perform common open/close behavior on modals, tooltips etc.
 * @param {boolean} [isOpenDefault] - Default open value
 */
function useDisclosure(isOpenDefault = false) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((state) => !state), []);

  return { isOpen, open, close, toggle };
}

export default useDisclosure;
