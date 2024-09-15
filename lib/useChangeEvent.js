"use strict";

exports.__esModule = true;
exports.useChangeEvent = useChangeEvent;
var _react = require("react");
function useChangeEvent(handler, dependencies) {
  const currentValue = (0, _react.useRef)();
  return (0, _react.useEffect)(() => {
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
//# sourceMappingURL=useChangeEvent.js.map