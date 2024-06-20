"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _ModalCardTitle;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ModalCardTitle(props) {
  const {
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    className: (0, _classnames.default)('modal-card-title', className),
    children: children
  });
}
var _default = exports.default = (_ModalCardTitle = ModalCardTitle, /*#__PURE__*/(0, _react.memo)(_ModalCardTitle));
//# sourceMappingURL=ModalCardTitle.js.map