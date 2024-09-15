"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _Control = _interopRequireDefault(require("./Control"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _SelectInput;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function SelectInput(props) {
  const {
    as: HtmlTag = 'div',
    forwardedRef,
    className,
    icon,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    asControl,
    isExpanded,
    loading,
    multiple,
    fullWidth,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('select', (0, _utils.getStyleClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getSizeClassName)({
    small,
    medium,
    large
  }), loading && 'is-loading', multiple && 'is-multiple', fullWidth && 'is-fullwidth', className);
  const selectRender = /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    className: classNamesValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
      ref: forwardedRef,
      multiple: multiple,
      ...restProps
    })
  });
  return icon || asControl ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Control.default, {
    className: (0, _classnames.default)(icon && 'has-icons-left'),
    isExpanded: isExpanded,
    children: [selectRender, icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "icon is-left",
      children: icon
    })]
  }) : selectRender;
}
var _default = exports.default = (_ref = (_SelectInput = SelectInput, /*#__PURE__*/(0, _react.memo)(_SelectInput)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=SelectInput.js.map