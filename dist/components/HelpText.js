"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _HelpText;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function HelpText(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    success,
    danger,
    ...restProps
  } = props;
  const styleClassName = success && 'is-success' || danger && 'is-danger';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('help', styleClassName, className),
    children: children
  });
}
var _default = exports.default = (_ref = (_HelpText = HelpText, /*#__PURE__*/(0, _react.memo)(_HelpText)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=HelpText.js.map