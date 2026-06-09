"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _withRef = require("../withRef");
var _Field = _interopRequireDefault(require("./Field"));
var _TextInput = _interopRequireDefault(require("./TextInput"));
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _TextField;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TextField(props) {
  const {
    // --- props for field
    as,
    className,
    isHorizontal,
    children,
    label,
    isGrouped,
    isGroupedMultiline,
    hasAddons,
    errorText,
    helpText,
    required,
    // --- props for text field
    id,
    inputAs,
    leftIcon,
    rightIcon,
    skeleton,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    autoCompleteOff,
    autoComplete,
    asControl,
    isExpanded,
    loading,
    forwardedRef,
    ...restProps
  } = props;
  const domId = (0, _react.useId)();
  const inputProps = {
    id: id || domId,
    as: inputAs,
    forwardedRef,
    className,
    leftIcon,
    rightIcon,
    skeleton,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    autoCompleteOff,
    autoComplete,
    asControl,
    isExpanded,
    loading
  };
  const fieldProps = {
    as,
    className,
    isHorizontal,
    children,
    label,
    labelFor: inputProps.id,
    isGrouped,
    isGroupedMultiline,
    hasAddons,
    errorText,
    helpText,
    required
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, {
    ...fieldProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.default, {
      ...inputProps,
      ...restProps
    })
  });
}
var _default = exports.default = (_ref = (_TextField = TextField, /*#__PURE__*/(0, _react.memo)(_TextField)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=TextField.js.map