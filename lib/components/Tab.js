"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Tab;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Tab(props) {
  const {
    as: HtmlTag = 'li',
    forwardedRef,
    children,
    className,
    active,
    href,
    onClick,
    onMouseUp,
    onMouseDown,
    ...restProps
  } = props;
  const classNameValue = (0, _classnames.default)(className, active && 'is-active');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    ref: forwardedRef,
    className: classNameValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      role: "tab",
      href: href,
      onClick: onClick,
      onMouseUp: onMouseUp,
      onMouseDown: onMouseDown,
      children: children
    })
  });
}
var _default = exports.default = (_ref = (_Tab = Tab, /*#__PURE__*/(0, _react.memo)(_Tab)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Tab.js.map