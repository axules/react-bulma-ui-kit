"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _ModalCardFooter;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ModalCardFooter(props) {
  const {
    children,
    className,
    right,
    center,
    ...restProps
  } = props;
  const classNameValue = (0, _classnames.default)('modal-card-foot', center && 'is-justify-content-center', right && 'is-justify-content-flex-end', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    className: classNameValue,
    children: children
  });
}
var _default = exports.default = (_ModalCardFooter = ModalCardFooter, /*#__PURE__*/(0, _react.memo)(_ModalCardFooter));
//# sourceMappingURL=ModalCardFooter.js.map