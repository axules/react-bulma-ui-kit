"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Control;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Control(props) {
  const {
    as: HtmlTag = 'div',
    className,
    children,
    isExpanded,
    loading,
    ...restProps
  } = props;
  const classNameValue = (0, _classnames.default)('control', isExpanded && 'is-expanded', loading && 'is-loading', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: classNameValue,
    children: children
  });
}
var _default = exports.default = (_ref = (_Control = Control, /*#__PURE__*/(0, _react.memo)(_Control)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Control.js.map