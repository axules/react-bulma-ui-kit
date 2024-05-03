"use strict";

exports.__esModule = true;
exports.useSyncState = useSyncState;
var _react = require("react");
function useSyncState(valueSetter, deps) {
  const [val, setVal] = (0, _react.useState)(() => valueSetter(undefined, deps));
  (0, _react.useEffect)(() => {
    setVal(state => valueSetter(state, deps));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [val, setVal];
}
//# sourceMappingURL=useSyncState.js.map