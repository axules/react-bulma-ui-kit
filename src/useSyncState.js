import {
  useEffect,
  useState
} from 'react';

/**
 * Calls `valueSetter` once `deps` are changed. Returns `[value, setter]`
 * where `value` is result of `valueSetter`, like `React.useState`.
 * @param {function(any, array)} valueSetter function(currentValue, deps)
 * @param {array} deps dependencies like for useEffect
 * @returns {array} Array of 2 elements [value, setter] like `useState`.
 * @example
 * const [count, setCount] = useSyncState(() => props.count, [props.count]);
 * // replaces this:
 * const [count, setCount] = useState(props.count);
 * useEffect(() => setCount(props.count), [props.count]);
 */
export function useSyncState(valueSetter, deps) {
  const [val, setVal] = useState(() => valueSetter(undefined, deps));

  useEffect(() => {
    setVal((state) => valueSetter(state, deps));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [val, setVal];
}