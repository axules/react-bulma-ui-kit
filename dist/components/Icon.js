"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Icon;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Icon(props) {
  const {
    as: HtmlTag = 'span',
    children,
    className,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('icon', (0, _utils.getTextColorClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getSizeClassName)({
    small,
    medium,
    large
  }), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: classNamesValue,
    children: children
  });
}
Icon.defaultProps = {};
var _default = exports.default = (_Icon = Icon, /*#__PURE__*/(0, _react.memo)(_Icon));
//# sourceMappingURL=Icon.js.map