"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DeleteButton = _interopRequireDefault(require("./DeleteButton"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Message;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  const classNamesValue = (0, _classnames.default)('message', (0, _utils.getStyleClassName)({
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
    children: [(title || onClose) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "message-header",
      children: [title, onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteButton.default, {})]
    }), children]
  });
}
var _default = exports.default = (_Message = Message, /*#__PURE__*/(0, _react.memo)(_Message));
//# sourceMappingURL=Message.js.map