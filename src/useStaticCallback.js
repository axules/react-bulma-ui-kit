import {
  useCallback,
  useRef,
} from 'react';


export function useStaticCallback(handler) {
  const handlerRef = useRef(handler);

  handlerRef.current = handler;

  return useCallback(
    (...args) => handlerRef.current(...args),
    [],
  );
}
