"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _Block;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Block(props) {
  const {
    as: HtmlTag = 'div',
    className,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('block', className),
    children: children
  });
}
var _default = exports.default = (_Block = Block, /*#__PURE__*/(0, _react.memo)(_Block));
//# sourceMappingURL=Block.js.map