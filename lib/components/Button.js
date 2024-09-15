"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Button;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Button(props) {
  const {
    as: HtmlTag = 'button',
    children,
    className,
    loading,
    forwardedRef,
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
    fullWidth,
    white,
    light,
    dark,
    black,
    text,
    ghost,
    inverted,
    outlined,
    rounded,
    disabled,
    type = HtmlTag === 'button' ? 'button' : undefined,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('button', (0, _utils.getStyleClassName)({
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
  }), (0, _utils.getBrightnessClassName)({
    white,
    light,
    dark,
    black,
    text,
    ghost
  }), (0, _utils.skeletonClassName)({
    skeleton
  }), loading && 'is-loading', outlined && 'is-outlined', rounded && 'is-rounded', fullWidth && 'is-fullwidth', inverted && 'is-inverted', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ref: forwardedRef,
    type: type != null ? type : undefined,
    ...restProps,
    disabled: disabled || loading,
    className: classNamesValue,
    children: children
  });
}
var _default = exports.default = (_ref = (_Button = Button, /*#__PURE__*/(0, _react.memo)(_Button)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Button.js.map