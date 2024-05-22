"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _PanelTab;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PanelTab(props) {
  const {
    as: HtmlTag = 'a',
    children,
    className,
    active,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    role: "tab",
    ...restProps,
    className: (0, _classnames.default)(active && 'is-active', className),
    children: children
  });
}
PanelTab.defaultProps = {};
var _default = exports.default = (_PanelTab = PanelTab, /*#__PURE__*/(0, _react.memo)(_PanelTab));
//# sourceMappingURL=PanelTab.js.map