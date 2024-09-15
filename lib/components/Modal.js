"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactDom = require("react-dom");
var _useStaticCallback = require("../useStaticCallback");
var _ModalCard = _interopRequireDefault(require("./Modal/ModalCard"));
exports.ModalCard = _ModalCard.default;
var _ModalCardBody = _interopRequireDefault(require("./Modal/ModalCardBody"));
exports.ModalCardBody = _ModalCardBody.default;
var _ModalCardFooter = _interopRequireDefault(require("./Modal/ModalCardFooter"));
exports.ModalCardFooter = _ModalCardFooter.default;
var _ModalCardHead = _interopRequireDefault(require("./Modal/ModalCardHead"));
exports.ModalCardHead = _ModalCardHead.default;
var _ModalCardTitle = _interopRequireDefault(require("./Modal/ModalCardTitle"));
exports.ModalCardTitle = _ModalCardTitle.default;
var _ModalContent = _interopRequireDefault(require("./Modal/ModalContent"));
exports.ModalContent = _ModalContent.default;
var _jsxRuntime = require("react/jsx-runtime");
var _Modal;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Modal(props) {
  const {
    children,
    className,
    transparent,
    closeOnEsc,
    onClose,
    portalTo,
    ...restProps
  } = props;
  const onPressEsc = (0, _useStaticCallback.useStaticCallback)(event => {
    if (event.key === 'Escape' || event.code === 27 || event.keyCode === 27 && !event.defaultPrevented) {
      event.preventDefault();
      onClose();
    }
  });
  (0, _react.useEffect)(() => {
    document.addEventListener('keydown', onPressEsc);
    return () => {
      document.removeEventListener('keydown', onPressEsc);
    };
  }, [closeOnEsc, onPressEsc]);
  const modalDom = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ...restProps,
    className: (0, _classnames.default)('modal', className, open && 'is-active'),
    children: [!transparent && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal-background"
    }), children]
  });
  if (portalTo) {
    if (typeof portalTo === 'string') {
      const node = document.querySelector(portalTo);
      return /*#__PURE__*/(0, _reactDom.createPortal)(modalDom, node);
    }
    if (typeof portalTo === 'function') {
      const node = portalTo();
      return /*#__PURE__*/(0, _reactDom.createPortal)(modalDom, node);
    }
    return /*#__PURE__*/(0, _reactDom.createPortal)(modalDom, portalTo);
  }
  return modalDom;
}
Modal.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  transparent: _propTypes.default.bool,
  open: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  closeOnEsc: _propTypes.default.bool,
  portalTo: _propTypes.default.any
};
var _default = exports.default = (_Modal = Modal, /*#__PURE__*/(0, _react.memo)(_Modal));
//# sourceMappingURL=Modal.js.map