"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useStaticCallback = require("../useStaticCallback");
var _ModalCard = _interopRequireDefault(require("./ModalParts/ModalCard"));
var _ModalCardBody = _interopRequireDefault(require("./ModalParts/ModalCardBody"));
var _ModalCardFooter = _interopRequireDefault(require("./ModalParts/ModalCardFooter"));
var _ModalCardHead = _interopRequireDefault(require("./ModalParts/ModalCardHead"));
var _ModalCardTitle = _interopRequireDefault(require("./ModalParts/ModalCardTitle"));
var _ModalContent = _interopRequireDefault(require("./ModalParts/ModalContent"));
var _jsxRuntime = require("react/jsx-runtime");
var _Modal;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(props) {
  const {
    children,
    className,
    transparent,
    closeOnEsc,
    onClose,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ...restProps,
    className: (0, _classnames.default)('modal', className),
    children: [!transparent && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal-background"
    }), children]
  });
}
const ModalExport = (_Modal = Modal, /*#__PURE__*/(0, _react.memo)(_Modal));
ModalExport.Content = _ModalContent.default;
ModalExport.Card = _ModalCard.default;
ModalExport.CardBody = _ModalCardBody.default;
ModalExport.CardFooter = _ModalCardFooter.default;
ModalExport.CardHead = _ModalCardHead.default;
ModalExport.CardTitle = _ModalCardTitle.default;
var _default = exports.default = ModalExport;
//# sourceMappingURL=Modal.js.map