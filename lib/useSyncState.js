"use strict";

exports.__esModule = true;
exports.useSyncState = useSyncState;
var _react = require("react");
/**
 * Calls `valueSetter` once `deps` are changed. Returns `[value, setter]`
 * where `value` is result of `valueSetter`, like `React.useState`.
 * @param {Function(currentValue, deps)} valueSetter
 * @param {Array} deps
 * @returns {Array} Array of 2 elements [value, setter] like `useState`.
 */
function useSyncState(valueSetter, deps) {
  const [val, setVal] = (0, _react.useState)(() => valueSetter(undefined, deps));
  (0, _react.useEffect)(() => {
    setVal(state => valueSetter(state, deps));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [val, setVal];
}
//# sourceMappingURL=useSyncState.js.map