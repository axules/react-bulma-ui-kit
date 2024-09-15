"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _TableCell = _interopRequireDefault(require("./Table/TableCell"));
exports.TableCell = _TableCell.default;
var _TableRow = _interopRequireDefault(require("./Table/TableRow"));
exports.TableRow = _TableRow.default;
var _jsxRuntime = require("react/jsx-runtime");
var _Table;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Table(props) {
  const {
    children,
    className,
    bordered,
    striped,
    ...restProps
  } = props;
  const classNameValue = (0, _classnames.default)('table', bordered && 'is-bordered', striped && 'is-bordered', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
    ...restProps,
    className: classNameValue,
    children: children
  });
}
var _default = exports.default = (_Table = Table, /*#__PURE__*/(0, _react.memo)(_Table));
//# sourceMappingURL=Table.js.map