"use strict";

exports.__esModule = true;
exports.useChangeEvent = useChangeEvent;
var _react = require("react");
/**
 * Calls handler ONLY when dependencies were changed. Does not call handler the first time like it does useEffect.
 *
 * @param {function(array, array)} handler handler(prevDeps, currentDeps)
 * @param {array} dependencies dependencies like for useEffect
 *
 * @example
 * useEffect(() => console.log('!'), [deps1, deps2]);
 * // useEffect calls handler after the first render and once deps are changed
 *
 * useChangeEvent(() => console.log('!'), [deps1, deps2]);
 * // useChangeEvent calls handler ONLY once deps are changed
 */
function useChangeEvent(handler, dependencies) {
  const currentValue = (0, _react.useRef)();
  return (0, _react.useEffect)(() => {
    // if it is not the first useEffect call
    if (currentValue.current) {
      // const changed = currentValue.current.some((it, n) => it !== dependencies[n]);
      // if (changed) {
      // call callback with the previous values
      const result = handler(currentValue.current, dependencies);
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
//# sourceMappingURL=useChangeEvent.js.map