import {
  useEffect,
  useState
} from 'react';


export function useSyncState(valueSetter, deps) {
  const [val, setVal] = useState(() => valueSetter(undefined, deps));

  useEffect(() => {
    setVal((state) => valueSetter(state, deps));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [val, setVal];
}