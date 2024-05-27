"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _Box;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Box(props) {
  const {
    as: HtmlTag = 'div',
    className,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('box', className),
    children: children
  });
}
var _default = exports.default = (_Box = Box, /*#__PURE__*/(0, _react.memo)(_Box));
//# sourceMappingURL=Box.js.map