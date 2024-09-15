"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _Tab;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Tab(props) {
  const {
    as: HtmlTag = 'li',
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
var _default = exports.default = (_Tab = Tab, /*#__PURE__*/(0, _react.memo)(_Tab));
//# sourceMappingURL=Tab.js.map