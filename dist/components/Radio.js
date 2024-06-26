"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Radio;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Radio(props) {
  const {
    className,
    classNameInput,
    children,
    forwardedRef,
    checked,
    disabled,
    ...restProps
  } = props;
  return children ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    className: (0, _classnames.default)('radio', className),
    disabled: disabled,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      style: {
        marginRight: '8px'
      },
      ...restProps,
      className: classNameInput,
      type: "radio",
      ref: forwardedRef,
      disabled: disabled,
      checked: checked
    }), children]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    ...restProps,
    className: (0, _classnames.default)('radio', className, classNameInput),
    type: "radio",
    ref: forwardedRef,
    disabled: disabled,
    checked: checked
  });
}
var _default = exports.default = (_ref = (_Radio = Radio, /*#__PURE__*/(0, _react.memo)(_Radio)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Radio.js.map