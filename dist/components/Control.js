"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../utils/withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _Control;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Control(props) {
  const {
    className,
    children,
    isExpanded
  } = props;
  const classes = [isExpanded && 'is-expanded'];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)('control', className, ...classes),
    children: children
  });
}
Control.defaultProps = {};
var _default = exports.default = (_ref = (_Control = Control, /*#__PURE__*/(0, _react.memo)(_Control)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=Control.js.map