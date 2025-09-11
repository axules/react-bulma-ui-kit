"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _TableCell;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TableCell(props) {
  const {
    children,
    className,
    header,
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
  const classNameValue = (0, _classnames.default)((0, _utils.getStyleClassName)({
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
  }), className);
  const HtmlTag = header ? 'th' : 'td';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: classNameValue,
    children: children
  });
}
var _default = exports.default = (_TableCell = TableCell, /*#__PURE__*/(0, _react.memo)(_TableCell));
//# sourceMappingURL=TableCell.js.map