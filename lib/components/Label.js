"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _Label;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Label(props) {
  const {
    children,
    className,
    required,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    ...restProps,
    className: (0, _classnames.default)('label', className),
    children: [children, required && ' *']
  });
}
var _default = exports.default = (_Label = Label, /*#__PURE__*/(0, _react.memo)(_Label));
//# sourceMappingURL=Label.js.map