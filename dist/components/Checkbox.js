"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../utils/withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _Checkbox;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Checkbox(props) {
  const {
    className,
    children,
    forwardedRef,
    indeterminate,
    checked,
    ...restProps
  } = props;
  const inputRef = (0, _react.useRef)(forwardedRef);
  (0, _react.useEffect)(() => {
    inputRef.current.indeterminate = checked ? undefined : indeterminate || undefined;
  }, [indeterminate, checked]);
  return children ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    className: (0, _classnames.default)('checkbox', className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "checkbox",
      ref: inputRef,
      checked: checked,
      ...restProps
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: "margin-left: 15px;",
      children: children
    })]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    type: "checkbox",
    className: (0, _classnames.default)('checkbox', className),
    ref: inputRef,
    checked: checked,
    ...restProps
  });
}
Checkbox.defaultProps = {};
var _default = exports.default = (_Checkbox = Checkbox, (0, _withRef.withForwardedRef)(_Checkbox));
//# sourceMappingURL=Checkbox.js.map