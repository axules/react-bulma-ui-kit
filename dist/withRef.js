"use strict";

exports.__esModule = true;
exports.withForwardedRef = withForwardedRef;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Adds `forwardedRef` prop to component. Uses `react.forwardRef`.
 * @param {React.Component} WrappedComponent
 * @returns
 */
function withForwardedRef(WrappedComponent) {
  return withRef('forwardedRef')(WrappedComponent);
}
function withRef(propName) {
  return function (WrappedComponent) {
    const Wrapper = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
      if (ref && props[propName]) {
        throw new Error("withRef error: forwarded ref property collision (property name is '" + propName + "')");
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, {
        ...props,
        [propName]: ref || props[propName]
      });
    });
    Wrapper.displayName = "WithRef(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")";
    Wrapper.type = WrappedComponent;
    return Wrapper;
  };
}
//# sourceMappingURL=withRef.js.map