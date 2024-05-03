"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../utils/withRef");
var _Control = _interopRequireDefault(require("./Control"));
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _TextInput;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cnPrefix = 'textInput';
function TextInput(props) {
  const {
    forwardedRef,
    className,
    leftIcon,
    rightIcon,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    medium,
    large,
    offAutocomplete,
    asControl,
    isExpanded,
    ...restProps
  } = props;
  const style = danger && 'is-danger' || success && 'is-success' || warning && 'is-warning' || info && 'is-info' || link && 'is-link' || primary && 'is-primary' || undefined;
  const size = medium && 'is-medium' || large && 'is-large' || undefined;
  const inputRender = /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    type: "text",
    ref: forwardedRef,
    autoComplete: offAutocomplete ? 'off' : undefined,
    ...restProps,
    className: (0, _classnames.default)('input', style, size, cnPrefix, className)
  });
  return leftIcon || rightIcon || asControl ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Control.default, {
    className: (0, _classnames.default)(leftIcon && 'has-icons-left', leftIcon && 'has-icons-right'),
    isExpanded: isExpanded,
    children: [inputRender, leftIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "icon is-left",
      children: leftIcon
    }), rightIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "icon is-right",
      children: rightIcon
    })]
  }) : inputRender;
}
TextInput.defaultProps = {};
var _default = exports.default = (_ref = (_TextInput = TextInput, /*#__PURE__*/(0, _react.memo)(_TextInput)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=TextInput.js.map