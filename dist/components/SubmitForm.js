"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _SubmitForm;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cnPrefix = 'submitForm';
function SubmitForm(props) {
  const {
    className,
    children,
    disabled,
    forwardedRef,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    className: (0, _classnames.default)(cnPrefix, className),
    ref: forwardedRef,
    ...restProps,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      disabled: disabled,
      type: "submit",
      style: {
        display: 'none'
      }
    }), children]
  });
}
SubmitForm.defaultProps = {
  className: undefined,
  children: undefined,
  disabled: undefined,
  forwardedRef: undefined
};
var _default = exports.default = (_ref = (_SubmitForm = SubmitForm, /*#__PURE__*/(0, _react.memo)(_SubmitForm)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=SubmitForm.js.map