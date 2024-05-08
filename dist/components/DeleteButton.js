"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _DeleteButton;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function DeleteButton(props) {
  const {
    className,
    small,
    medium,
    large,
    forwardedRef,
    ...restProps
  } = props;
  const sizeClassName = small && 'is-small' || medium && 'is-medium' || large && 'is-large' || undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: forwardedRef,
    type: "button",
    ...restProps,
    className: (0, _classnames.default)('delete', sizeClassName, className)
  });
}
var _default = exports.default = (_DeleteButton = DeleteButton, /*#__PURE__*/(0, _react.memo)(_DeleteButton));
//# sourceMappingURL=DeleteButton.js.map