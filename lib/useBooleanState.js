"use strict";

exports.__esModule = true;
exports.useBooleanState = useBooleanState;
var _react = require("react");
var _useStaticCallback = require("./useStaticCallback");
function useBooleanState(initValue) {
  const [value, setValue] = (0, _react.useState)(initValue);
  const setTrue = (0, _useStaticCallback.useStaticCallback)(() => setValue(true));
  const setFalse = (0, _useStaticCallback.useStaticCallback)(() => setValue(false));
  const toggle = (0, _useStaticCallback.useStaticCallback)(() => setValue(v => !v));
  return [value, setTrue, setFalse, toggle, setValue];
}
//# sourceMappingURL=useBooleanState.js.map