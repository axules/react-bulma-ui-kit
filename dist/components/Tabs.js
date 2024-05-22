"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Tabs;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Tabs(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    small,
    medium,
    large,
    nowrap,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('tabs', (0, _utils.getSizeClassName)({
    small,
    medium,
    large
  }), nowrap && 'is-flex-wrap-nowrap', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: classNamesValue,
    children: children
  });
}
Tabs.defaultProps = {};
var _default = exports.default = (_Tabs = Tabs, /*#__PURE__*/(0, _react.memo)(_Tabs));
//# sourceMappingURL=Tabs.js.map