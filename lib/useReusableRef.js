"use strict";

exports.__esModule = true;
exports.useReusableRef = useReusableRef;
var _react = require("react");
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
function useReusableRef(ref, initValue) {
  if (ref === void 0) {
    ref = undefined;
  }
  if (initValue === void 0) {
    initValue = undefined;
  }
  return (0, _react.useMemo)(() => {
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
    return /*#__PURE__*/(0, _react.createRef)(initValue);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
}
//# sourceMappingURL=useReusableRef.js.map