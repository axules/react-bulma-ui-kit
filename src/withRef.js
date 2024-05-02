import { forwardRef } from 'react';

import { getDisplayName } from '../services/utils';


export function withForwardedRef(WrappedComponent) {
  return withRef('forwardedRef')(WrappedComponent);
}

export function withRef(propName) {
  return function (WrappedComponent) {
    const Wrapper = forwardRef((props, ref) => {
      if (ref && props[propName]) {
        throw new Error(`withRef error: forwarded ref property collision (property name is '${propName}')`);
      }
      return <WrappedComponent {...props} {...{ [propName]: ref || props[propName] }} />;
    });

    Wrapper.displayName = `WithRef(${getDisplayName(WrappedComponent)})`;

    return Wrapper;
  };
}
