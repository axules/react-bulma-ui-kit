import {
  useCallback,
  useRef,
} from 'react';

/**
 * Returns static function which never changes (during component re-render).
 * @param {Function} handler
 * @returns {Function} Immutable function, which never changes. If you call this function
 * then it calls the LAST passed `handler.
 * @example
 * const { saveValue } = props;
 * const [value, setValue] = useState('');
 * const onClick = useStaticCallback(() => {
 *  saveValue(value);
 * });
 */
export function useStaticCallback(handler) {
  const handlerRef = useRef(handler);

  handlerRef.current = handler;

  return useCallback(
    (...args) => handlerRef.current(...args),
    [],
  );
}
