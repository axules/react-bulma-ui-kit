"use strict";

exports.__esModule = true;
exports.useStaticCallback = useStaticCallback;
var _react = require("react");
/**
 * Returns static function which never changes (during component re-render), but will call actual code always.
 * It is like `useCallback` but you do not need to pass the second argument.
 *
 * @param {function} handler any handler
 * @returns {Function} Immutable function, which never changes. If you call this function
 * then it calls the LAST passed `handler.
 * @example
 * const { saveValue, multiplier } = props;
 * const [value, setValue] = useState('');
 * const onClick = useStaticCallback(() => {
 *  saveValue(value * multiplier);
 * });
 * // instead of
 * const onClick = useCallback(() => {
 *  saveValue(value * multiplier);
 * }, [saveValue, multiplier]);
 */
function useStaticCallback(handler) {
  const handlerRef = (0, _react.useRef)(handler);
  handlerRef.current = handler;
  return (0, _react.useCallback)(function () {
    return handlerRef.current(...arguments);
  }, []);
}
//# sourceMappingURL=useStaticCallback.js.map