"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSyncState = useSyncState;
var _react = require("react");
var _useStaticCallback = require("./useStaticCallback");
/**
 * Creates a state that syncs with external dependencies. Calls `valueSetter` on init
 * and on every subsequent set operation. Returns `[value, setter]`.
 * @param {function(any, array): any} valueSetter Called with `(currentValue, deps)` on init
 *   to produce initial state, and with `(newValue, deps)` on every set.
 * @param {array} deps dependencies like for useEffect
 * @returns {[any, function]} Array of 2 elements `[value, setter]` where `setter`
 *   accepts a value or updater callback (like `setState`), calls `valueSetter` with
 *   the resulting value, and triggers re-render.
 * @example
 * const [count, setCount] = useSyncState((prev) => prev ?? props.count, [props.count]);
 * // without useSyncState:
 * const [count, setCount] = useState(props.count);
 * useEffect(() => setCount(props.count), [props.count]);
 */
function useSyncState(valueSetter, deps) {
  const [val, setVal] = (0, _react.useState)(() => valueSetter(undefined, deps));
  const setValCallback = (0, _useStaticCallback.useStaticCallback)(valueOrCallback => {
    setVal(state => {
      const newValue = typeof valueOrCallback === 'function' ? valueOrCallback(state) : valueOrCallback;
      valueSetter(newValue, deps);
    });
  });
  return [val, setValCallback];
}
//# sourceMappingURL=useSyncState.js.map