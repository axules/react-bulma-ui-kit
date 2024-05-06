import { forwardRef } from 'react';

/**
 * Adds `forwardedRef` prop to component. Uses `react.forwardRef`.
 * @param {React Component} WrappedComponent
 * @returns
 */
export function withForwardedRef(WrappedComponent) {
  return withRef('forwardedRef')(WrappedComponent);
}

function withRef(propName) {
  return function (WrappedComponent) {
    const Wrapper = forwardRef((props, ref) => {
      if (ref && props[propName]) {
        throw new Error(`withRef error: forwarded ref property collision (property name is '${propName}')`);
      }
      return <WrappedComponent {...props} {...{ [propName]: ref || props[propName] }} />;
    });

    Wrapper.displayName = `WithRef(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return Wrapper;
  };
}
