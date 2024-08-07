"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _HelpText;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function HelpText(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    light,
    forwardedRef,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('help', (0, _utils.getStyleClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getBrightnessClassName)({
    light
  }), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: classNamesValue,
    ref: forwardedRef,
    children: children
  });
}
var _default = exports.default = (_ref = (_HelpText = HelpText, /*#__PURE__*/(0, _react.memo)(_HelpText)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=HelpText.js.map