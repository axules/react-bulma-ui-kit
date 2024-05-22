"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _Tab;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)(className, active && 'is-active'),
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
Tab.defaultProps = {};
var _default = exports.default = (_Tab = Tab, /*#__PURE__*/(0, _react.memo)(_Tab));
//# sourceMappingURL=Tab.js.map