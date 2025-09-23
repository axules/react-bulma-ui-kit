"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DeleteButton = _interopRequireDefault(require("./DeleteButton"));
var _utils = require("./_utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Tag;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Tag(props) {
  const {
    as: HtmlTag = 'span',
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
    hasAddons,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('tag', (0, _utils.getStyleClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getSizeClassName)({
    medium,
    large
  }), (0, _utils.getBrightnessClassName)({
    white,
    light,
    dark,
    black
  }), hasHover && 'is-hoverable', rounded && 'is-rounded', isDelete && 'is-delete', hasAddons && 'has-addons', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(HtmlTag, {
    ref: forwardedRef,
    ...restProps,
    className: classNamesValue,
    children: [children, onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteButton.default, {
      onClick: onClose
    })]
  });
}
var _default = exports.default = (_Tag = Tag, /*#__PURE__*/(0, _react.memo)(_Tag));
//# sourceMappingURL=Tag.js.map