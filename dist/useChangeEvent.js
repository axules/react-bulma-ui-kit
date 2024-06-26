"use strict";

exports.__esModule = true;
exports.useChangeEvent = useChangeEvent;
var _react = require("react");
function useChangeEvent(handler, dependencies) {
  const currentValue = (0, _react.useRef)();
  return (0, _react.useEffect)(() => {
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
//# sourceMappingURL=useChangeEvent.js.map