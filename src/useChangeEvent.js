import {
  useEffect,
  useRef
} from 'react';


export function useChangeEvent(handler, dependencies) {
  const currentValue = useRef();

  return useEffect(() => {
    // if it is not the first useEffect call
    if (currentValue.current) {
      // const changed = currentValue.current.some((it, n) => it !== dependencies[n]);
      // if (changed) {
      // call callback with the previous values
      const result = handler(currentValue.current);
      currentValue.current = dependencies;
      return result;
      // }
    } else {
      // do nothing the first call - component initialize
      currentValue.current = dependencies;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}