import {
  createRef,
  useMemo
} from 'react';

/**
 *  Returns passed ref or new ref object. It is needed when you component may work with forwardedRef,
 * but it is optional and you need to use the same element inside of component.
 * @param {Object|Function?} ref
 * @param {any?} initValue
 * @returns {Object|Function}
 * @example
 *
 * function Comp(props) {
 *   const { forwardedRef, children } = props;
 *   const mainRef = useReusableRef(forwardedRef);
 *   const onClick = () => console.log(mainRef.current.getBoundingClientRect());
 *
 *   return <div ref={mainRef}>I am your main element <button onClick={onClick}>Click me</button> {children}</div>;
 * }
 *
 * function ParentComp() {
 *  const cmpRef = useRef();
 *  // or
 *  // const cmpRef = () => {...}
 *  // cmpRef.current will be linked to `Comp.div` element
 *  return <Comp forwardedRef={cmpRef}>Hello!</Comp>
 * }
 */
export function useReusableRef(ref = undefined, initValue = undefined) {
  return useMemo(
    () => {
      if (ref) {
        if (typeof ref === 'function') {
          const newRef = function (node) {
            newRef.current = node;
            ref(node);
          };
          newRef.current = initValue;
          return newRef;
        }
        return ref;
      }

      return createRef(initValue);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
}