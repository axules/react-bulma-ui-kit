"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _Control = _interopRequireDefault(require("./Control"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _TextInput;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TextInput(props) {
  const {
    as: HtmlTag = 'input',
    forwardedRef,
    className,
    leftIcon,
    rightIcon,
    skeleton,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    autoCompleteOff,
    autoComplete,
    asControl,
    isExpanded,
    loading,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('input', (0, _utils.getStyleClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getSizeClassName)({
    small,
    medium,
    large
  }), (0, _utils.skeletonClassName)({
    skeleton
  }), className);
  const inputRender = /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    type: HtmlTag === 'input' ? 'text' : undefined,
    ref: forwardedRef,
    autoComplete: autoComplete === false || autoCompleteOff ? 'off' : autoComplete,
    ...restProps,
    className: classNamesValue
  });
  return leftIcon || rightIcon || asControl ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Control.default, {
    className: (0, _classnames.default)(leftIcon && 'has-icons-left', rightIcon && 'has-icons-right'),
    isExpanded: isExpanded,
    loading: loading,
    children: [inputRender, leftIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "icon is-left",
      children: leftIcon
    }), rightIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "icon is-right",
      children: rightIcon
    })]
  }) : inputRender;
}
var _default = exports.default = (_ref = (_TextInput = TextInput, /*#__PURE__*/(0, _react.memo)(_TextInput)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=TextInput.js.map