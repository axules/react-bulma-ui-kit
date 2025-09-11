import {
  useCallback,
  useState
} from 'react';

/**
 * Just to replace several callbacks
 *
 * @param initValue
 * @returns {array[]} [value, setTrue, setFalse, toggle, setValue]
 * @example
 * const [isOpened, setOpened, setHidden] = useBooleanState(false);
 *
 * // instead of
 * const [isOpened, setIsOpened] = useState(false);
 * const onClickOpen = useCallback(() => setIsOpened(true), []);
 * const onClickClose = useCallback(() => setIsOpened(false), []);
 */
export function useBooleanState(initValue) {
  const [value, setValue] = useState(initValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(v => !v), []);

  return [value, setTrue, setFalse, toggle, setValue];
}