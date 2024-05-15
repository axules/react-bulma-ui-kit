"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Button;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(props) {
  const {
    as: HtmlTag = 'button',
    children,
    className,
    loading,
    forwardedRef,
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
    outlined,
    rounded,
    disabled,
    type = 'button',
    ...restProps
  } = props;
  const brightnessClassName = white && 'is-white' || light && 'is-light' || dark && 'is-dark' || black && 'is-black' || text && 'is-text' || ghost && 'is-ghost' || undefined;
  const styleClassName = danger && 'is-danger' || success && 'is-success' || warning && 'is-warning' || info && 'is-info' || link && 'is-link' || primary && 'is-primary' || undefined;
  const sizeClassName = small && 'is-small' || medium && 'is-medium' || large && 'is-large' || undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ref: forwardedRef,
    type: type != null ? type : undefined,
    ...restProps,
    disabled: disabled || loading,
    className: (0, _classnames.default)('button', styleClassName, sizeClassName, brightnessClassName, loading && 'is-loading', outlined && 'is-outlined', rounded && 'is-rounded', fullWidth && 'is-fullwidth', className),
    children: children
  });
}
var _default = exports.default = (_ref = (_Button = Button, /*#__PURE__*/(0, _react.memo)(_Button)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Button.js.map