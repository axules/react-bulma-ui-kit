import {
  useEffect,
  useRef
} from 'react';


export function useChangeEvent(handler, dependencies) {
  const currentValue = useRef();

  return useEffect(() => {
    if (!currentValue.current) {
      currentValue.current = dependencies;
    } else {
      const changed = currentValue.current.some((it, n) => it !== dependencies[n]);
      if (changed) {
        const result = handler(currentValue.current);
        currentValue.current = dependencies;
        return result;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}