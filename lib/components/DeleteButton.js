"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _DeleteButton;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function DeleteButton(props) {
  const {
    className,
    small,
    medium,
    large,
    forwardedRef,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('delete', (0, _utils.getSizeClassName)({
    small,
    medium,
    large
  }), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: forwardedRef,
    type: "button",
    ...restProps,
    className: classNamesValue
  });
}
var _default = exports.default = (_DeleteButton = DeleteButton, /*#__PURE__*/(0, _react.memo)(_DeleteButton));
//# sourceMappingURL=DeleteButton.js.map