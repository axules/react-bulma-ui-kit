"use strict";

exports.__esModule = true;
exports.useBooleanState = useBooleanState;
var _react = require("react");
/**
 * Just to replace several callbacks
 *
 * @param initValue
 * @returns {array[]} [value, setTrue, setFalse, toggle, setValue]
 * @example
 * const [isOpened, setOpened, setHidden] = useBooleanState(false);
 *
 * // instead of
 * const [isOpened, setIsOpened] = useState(false);
 * const onClickOpen = useCallback(() => setIsOpened(true), []);
 * const onClickClose = useCallback(() => setIsOpened(false), []);
 */
function useBooleanState(initValue) {
  const [value, setValue] = (0, _react.useState)(initValue);
  const setTrue = (0, _react.useCallback)(() => setValue(true), []);
  const setFalse = (0, _react.useCallback)(() => setValue(false), []);
  const toggle = (0, _react.useCallback)(() => setValue(v => !v), []);
  return [value, setTrue, setFalse, toggle, setValue];
}
//# sourceMappingURL=useBooleanState.js.map