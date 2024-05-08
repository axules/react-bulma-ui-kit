"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DeleteButton = _interopRequireDefault(require("./DeleteButton"));
var _jsxRuntime = require("react/jsx-runtime");
var _Tag;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Tag(props) {
  const {
    as: HtmlTag,
    children,
    className,
    onClose,
    forwardedRef,
    rounded,
    hasHover,
    isDelete,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    medium,
    large,
    white,
    light,
    dark,
    black,
    ...restProps
  } = props;
  const brightnessClassName = white && 'is-white' || light && 'is-light' || dark && 'is-dark' || black && 'is-black' || undefined;
  const styleClassName = danger && 'is-danger' || success && 'is-success' || warning && 'is-warning' || info && 'is-info' || link && 'is-link' || primary && 'is-primary' || undefined;
  const sizeClassName = medium && 'is-medium' || large && 'is-large' || undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(HtmlTag, {
    ref: forwardedRef,
    ...restProps,
    className: (0, _classnames.default)('tag', styleClassName, sizeClassName, brightnessClassName, hasHover && 'is-hoverable', rounded && 'is-rounded', isDelete && 'is-delete', className),
    children: [children, onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteButton.default, {
      onClick: onClose
    })]
  });
}
Tag.defaultProps = {
  as: 'span'
};
var _default = exports.default = (_Tag = Tag, /*#__PURE__*/(0, _react.memo)(_Tag));
//# sourceMappingURL=Tag.js.map