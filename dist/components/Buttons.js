"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Buttons;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Buttons(props) {
  const {
    children,
    className,
    hasAddons,
    nowrap,
    left,
    centered,
    right,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('buttons', hasAddons && 'has-addons', nowrap && 'is-flex-wrap-nowrap', (0, _utils.getAlignClassName)({
    left,
    centered,
    right
  }), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    className: classNamesValue,
    children: children
  });
}
var _default = exports.default = (_Buttons = Buttons, /*#__PURE__*/(0, _react.memo)(_Buttons));
//# sourceMappingURL=Buttons.js.map