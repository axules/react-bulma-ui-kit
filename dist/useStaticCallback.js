"use strict";

exports.__esModule = true;
exports.useStaticCallback = useStaticCallback;
var _react = require("react");
function useStaticCallback(handler) {
  const handlerRef = (0, _react.useRef)(handler);
  handlerRef.current = handler;
  return (0, _react.useCallback)(function () {
    return handlerRef.current(...arguments);
  }, []);
}
//# sourceMappingURL=useStaticCallback.js.map