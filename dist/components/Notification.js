"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DeleteButton = _interopRequireDefault(require("./DeleteButton"));
var _jsxRuntime = require("react/jsx-runtime");
var _Notification;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Notification(props) {
  const {
    className,
    children,
    onClose,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    light,
    ...restProps
  } = props;
  const styleClassName = danger && 'is-danger' || success && 'is-success' || warning && 'is-warning' || info && 'is-info' || link && 'is-link' || primary && 'is-primary' || undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)('notification', styleClassName, light && 'is-light', className),
    ...restProps,
    children: [onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteButton.default, {
      onClick: onClose
    }), children]
  });
}
var _default = exports.default = (_Notification = Notification, /*#__PURE__*/(0, _react.memo)(_Notification));
//# sourceMappingURL=Notification.js.map