"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./_utils");
var _jsxRuntime = require("react/jsx-runtime");
var _TableRow;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TableRow(props) {
  const {
    children,
    className,
    selected,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    white,
    light,
    dark,
    black,
    ...restProps
  } = props;
  const classNameValue = (0, _classnames.default)(className, selected && 'is-selected', (0, _utils.getStyleClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getBrightnessClassName)({
    white,
    light,
    dark,
    black
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
    ...restProps,
    className: classNameValue,
    children: children
  });
}
var _default = exports.default = (_TableRow = TableRow, /*#__PURE__*/(0, _react.memo)(_TableRow));
//# sourceMappingURL=TableRow.js.map