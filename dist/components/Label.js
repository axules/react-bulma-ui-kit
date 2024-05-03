"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Label;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Label(props) {
  const {
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
    ...restProps,
    className: (0, _classnames.default)('label', className),
    children: children
  });
}
Label.defaultProps = {};
var _default = exports.default = (_ref = (_Label = Label, /*#__PURE__*/(0, _react.memo)(_Label)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Label.js.map