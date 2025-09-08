"use strict";

exports.__esModule = true;
exports.useRefCallback = useRefCallback;
var _react = require("react");
/**
 * Returns ref, calls `onChange` once `ref.current` is changed.
 * Do nothing if you change something in deep of current (e.g `ref.current.value = 100;`).
 * @param {any?} initValue Initialize value. Could be null or undefined
 * @param {Function} onChange Callback which will be called once `ref.current` is changed. Function(value, prevValue)
 * @returns {Object} { current }
 * @example
 * const ref = useRefCallback(10, (val, prevVal) => console.log(prevValue, ' to ', value));
 * ref.current += 20;
 * // prints '10 to 30'
 */
function useRefCallback(initValue, onChange) {
  const main = (0, _react.useMemo)(() => ({
    value: initValue,
    ref: {
      get current() {
        return main.value;
      },
      set current(value) {
        if (main.value !== value) {
          const prevValue = main.value;
          main.value = value;
          onChange(value, prevValue);
        }
      }
    }
  }),
  // we need to create this main object only once - when component is initializing
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return main.ref;
}
//# sourceMappingURL=useRefCallback.js.map