"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DeleteButton = _interopRequireDefault(require("../DeleteButton"));
var _ModalCardTitle = _interopRequireDefault(require("./ModalCardTitle"));
var _jsxRuntime = require("react/jsx-runtime");
var _ModalCardHead;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ModalCardHead(props) {
  const {
    children,
    className,
    title,
    onClickClose,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    ...restProps,
    className: (0, _classnames.default)('modal-card-head', className),
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalCardTitle.default, {
      children: title
    }), children, onClickClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteButton.default, {
      onClick: onClickClose
    })]
  });
}
var _default = exports.default = (_ModalCardHead = ModalCardHead, /*#__PURE__*/(0, _react.memo)(_ModalCardHead));
//# sourceMappingURL=ModalCardHead.js.map