"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DeleteButton = _interopRequireDefault(require("./DeleteButton"));
var _utils = require("./_utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Notification;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Notification(props) {
  const {
    className,
    children,
    onClose,
    closeDelay,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    white,
    light,
    dark,
    black,
    centered,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('notification', (0, _utils.getStyleClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getBrightnessClassName)({
    white,
    light,
    dark,
    black
  }), centered && 'has-text-centered', className);
  (0, _react.useEffect)(() => {
    if (closeDelay) {
      if (!onClose) {
        console.error('onClose handler is required once closeDelay is defined');
        return;
      }
      const timer = setTimeout(() => onClose(), closeDelay);
      return () => clearTimeout(timer);
    }
  }, [closeDelay, onClose]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classNamesValue,
    ...restProps,
    children: [onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteButton.default, {
      onClick: onClose
    }), children]
  });
}
var _default = exports.default = (_Notification = Notification, /*#__PURE__*/(0, _react.memo)(_Notification));
//# sourceMappingURL=Notification.js.map