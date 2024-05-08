"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useReusableRef = require("../useReusableRef");
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Checkbox;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Checkbox(props) {
  const {
    className,
    classNameInput,
    children,
    forwardedRef,
    indeterminate,
    checked,
    disabled,
    ...restProps
  } = props;
  const inputRef = (0, _useReusableRef.useReusableRef)(forwardedRef);
  (0, _react.useEffect)(() => {
    inputRef.current.indeterminate = checked ? undefined : indeterminate || undefined;
  }, [indeterminate, checked, inputRef]);
  return children ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    className: (0, _classnames.default)('checkbox', className),
    disabled: disabled,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      style: "margin-right:8px;",
      ...restProps,
      className: classNameInput,
      type: "checkbox",
      ref: inputRef,
      disabled: disabled,
      checked: checked
    }), children]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    ...restProps,
    className: (0, _classnames.default)('checkbox', className, classNameInput),
    type: "checkbox",
    ref: inputRef,
    disabled: disabled,
    checked: checked
  });
}
Checkbox.defaultProps = {};
var _default = exports.default = (_ref = (_Checkbox = Checkbox, /*#__PURE__*/(0, _react.memo)(_Checkbox)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Checkbox.js.map