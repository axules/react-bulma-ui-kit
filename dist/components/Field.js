"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../utils/withRef");
var _HelpText = _interopRequireDefault(require("./HelpText"));
var _Label = _interopRequireDefault(require("./Label"));
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Field;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Field(props) {
  const {
    className,
    isHorizontal,
    children,
    label,
    isGrouped,
    isGroupedMultiline,
    hasAddons,
    errorText,
    helpText,
    ...restProps
  } = props;
  const classes = [isGrouped && 'is-grouped', isGroupedMultiline && 'is-grouped is-grouped-multiline', isHorizontal && 'is-horizontal', hasAddons && 'has-addons'];
  const errorHelp = errorText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_HelpText.default, {
    danger: true,
    children: errorText
  });
  const help = helpText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_HelpText.default, {
    children: helpText
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ...restProps,
    className: (0, _classnames.default)('field', className, ...classes),
    children: [label && (isHorizontal ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "field-label is-normal",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.default, {
        children: label
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.default, {
      children: label
    })), isHorizontal ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "field-body",
      children: children
    }) : children, help, errorHelp]
  });
}
Field.defaultProps = {};
var _default = exports.default = (_ref = (_Field = Field, /*#__PURE__*/(0, _react.memo)(_Field)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Field.js.map