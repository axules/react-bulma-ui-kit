"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _Buttons;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Buttons(props) {
  const {
    children,
    className,
    hasAddons,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    className: (0, _classnames.default)('buttons', hasAddons && 'has-addons', className),
    children: children
  });
}
var _default = exports.default = (_Buttons = Buttons, /*#__PURE__*/(0, _react.memo)(_Buttons));
//# sourceMappingURL=Buttons.js.map