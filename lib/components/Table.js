"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableCell", {
  enumerable: true,
  get: function () {
    return _TableCell.default;
  }
});
Object.defineProperty(exports, "TableRow", {
  enumerable: true,
  get: function () {
    return _TableRow.default;
  }
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _TableCell = _interopRequireDefault(require("./TableCell"));
var _TableRow = _interopRequireDefault(require("./TableRow"));
var _jsxRuntime = require("react/jsx-runtime");
var _Table;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Table(props) {
  const {
    children,
    className,
    bordered,
    striped,
    fullWidth,
    ...restProps
  } = props;
  const classNameValue = (0, _classnames.default)('table', bordered && 'is-bordered', striped && 'is-bordered', fullWidth && 'is-fullwidth', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
    ...restProps,
    className: classNameValue,
    children: children
  });
}
var _default = exports.default = (_Table = Table, /*#__PURE__*/(0, _react.memo)(_Table));
//# sourceMappingURL=Table.js.map