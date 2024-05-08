"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _ModalCardFooter;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalCardFooter(props) {
  const {
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    className: (0, _classnames.default)('modal-card-footer', className),
    children: children
  });
}
var _default = exports.default = (_ModalCardFooter = ModalCardFooter, /*#__PURE__*/(0, _react.memo)(_ModalCardFooter));
//# sourceMappingURL=ModalCardFooter.js.map