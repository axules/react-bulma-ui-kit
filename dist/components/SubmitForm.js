"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _SubmitForm;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function SubmitForm(props) {
  const {
    children,
    disabled,
    forwardedRef,
    loading,
    className,
    onSubmit,
    ...restProps
  } = props;
  const onFormSubmit = (0, _react.useCallback)(event => {
    event.preventDefault();
    onSubmit(event);
  }, [onSubmit]);
  const classNameValue = (0, _classnames.default)(className, loading && 'is-loading');
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    ...restProps,
    onSubmit: onFormSubmit,
    className: classNameValue,
    ref: forwardedRef,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      disabled: disabled || loading,
      type: "submit",
      style: {
        display: 'none'
      }
    }), children]
  });
}
var _default = exports.default = (_ref = (_SubmitForm = SubmitForm, /*#__PURE__*/(0, _react.memo)(_SubmitForm)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=SubmitForm.js.map