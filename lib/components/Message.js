"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DeleteButton = _interopRequireDefault(require("./DeleteButton"));
var _utils = require("./_utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Message;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Message(props) {
  const {
    as: HtmlTag = 'div',
    className,
    title,
    children,
    onClose,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    light,
    dark,
    ...restProps
  } = props;
  const hasHeader = title || onClose;
  const classNamesValue = (0, _classnames.default)('message', !hasHeader && 'message-body', (0, _utils.getStyleClassName)({
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
    light,
    dark
  }), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(HtmlTag, {
    ...restProps,
    className: classNamesValue,
    children: [hasHeader && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "message-header",
      children: [title, onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteButton.default, {})]
    }), hasHeader ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "message-body",
      children: children
    }) : children]
  });
}
var _default = exports.default = (_Message = Message, /*#__PURE__*/(0, _react.memo)(_Message));
//# sourceMappingURL=Message.js.map