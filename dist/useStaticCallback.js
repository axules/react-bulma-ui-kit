"use strict";

exports.__esModule = true;
exports.useStaticCallback = useStaticCallback;
var _react = require("react");
/**
 * Returns static function which never changes (during component re-render).
 * @param {Function} handler
 * @returns {Function} Immutable function, which never changes. If you call this function
 * then it calls the LAST passed `handler.
 * @example
 * const { saveValue } = props;
 * const [value, setValue] = useState('');
 * const onClick = useStaticCallback(() => {
 *  saveValue(value);
 * });
 */
function useStaticCallback(handler) {
  const handlerRef = (0, _react.useRef)(handler);
  handlerRef.current = handler;
  return (0, _react.useCallback)(function () {
    return handlerRef.current(...arguments);
  }, []);
}
//# sourceMappingURL=useStaticCallback.js.map