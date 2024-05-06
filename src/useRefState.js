import {
  useMemo,
  useState
} from 'react';


/**
 * Keeps ref value in state. Needs to force rendering when ref is changed.
 * It provides possibility to use `useEffect` for ref.
 * @param {any?} initValue Initial value
 * @returns {Object} `{ current }`. NEW OBJECT after ref value changes.
 * @example
 * const ref = useRefState(1);
 * useEffect(() => {
 *  console.log('REF IS CHANGED', ref.current);
 * }, [ref.current]);
 * const onClick = () => ref.current += 1;
 * // once onClick is called, then it will initiate state update,
 * // and new `ref` object will be created during new rendering cycle.
 */
export function useRefState(initValue) {
  const [value, setValue] = useState(initValue);

  return useMemo(
    () => ({
      get current() {
        return value;
      },
      set current(newValue) {
        if (value !== newValue) {
          setValue(newValue);
        }
      },
    }),
    [value],
  );
}