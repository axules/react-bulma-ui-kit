import {
  useEffect,
  useState
} from 'react';

/**
 * Calls `valueSetter` once `deps` are changed. Returns `[value, setter]`
 * where `value` is result of `valueSetter`, like `React.useState`.
 * @param {Function(currentValue, deps)} valueSetter
 * @param {Array} deps
 * @returns {Array} Array of 2 elements [value, setter] like `useState`.
 */
export function useSyncState(valueSetter, deps) {
  const [val, setVal] = useState(() => valueSetter(undefined, deps));

  useEffect(() => {
    setVal((state) => valueSetter(state, deps));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [val, setVal];
}