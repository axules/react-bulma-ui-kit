"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _ModalCard;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalCard(props) {
  const {
    children,
    className
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)('modal-card', className),
    children: children
  });
}
var _default = exports.default = (_ModalCard = ModalCard, /*#__PURE__*/(0, _react.memo)(_ModalCard));
//# sourceMappingURL=ModalCard.js.map