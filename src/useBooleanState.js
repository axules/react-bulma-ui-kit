import { useState } from 'react';

import { useStaticCallback } from 'react-bulma-ui-kit/dist/useStaticCallback';


export function useBooleanState(initValue) {
  const [value, setValue] = useState(initValue);

  const setTrue = useStaticCallback(() => setValue(true));
  const setFalse = useStaticCallback(() => setValue(false));
  const toggle = useStaticCallback(() => setValue(v => !v));

  return [value, setTrue, setFalse, toggle, setValue];
}