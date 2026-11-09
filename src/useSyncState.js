import { useState } from 'react';

import { useStaticCallback } from './useStaticCallback';

/**
 * Creates a state that syncs with external dependencies. Calls `valueSetter` on init
 * and on every subsequent set operation. Returns `[value, setter]`.
 * @param {function(any, array): any} valueSetter Called with `(currentValue, deps)` on init
 *   to produce initial state, and with `(newValue, deps)` on every set.
 * @param {array} deps dependencies like for useEffect
 * @returns {[any, function]} Array of 2 elements `[value, setter]` where `setter`
 *   accepts a value or updater callback (like `setState`), calls `valueSetter` with
 *   the resulting value, and triggers re-render.
 * @example
 * const [count, setCount] = useSyncState((prev) => prev ?? props.count, [props.count]);
 * // without useSyncState:
 * const [count, setCount] = useState(props.count);
 * useEffect(() => setCount(props.count), [props.count]);
 */
export function useSyncState(valueSetter, deps) {
  const [val, setVal] = useState(() => valueSetter(undefined, deps));

  const setValCallback = useStaticCallback((valueOrCallback) => {
    setVal((state) => {
      const newValue = typeof valueOrCallback === 'function' ? valueOrCallback(state) : valueOrCallback;
      valueSetter(newValue, deps);
    });
  });

  return [val, setValCallback];
}
