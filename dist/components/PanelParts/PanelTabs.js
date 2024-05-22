"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _PanelTabs;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PanelTabs(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('panel-tabs', className),
    children: children
  });
}
PanelTabs.defaultProps = {};
var _default = exports.default = (_PanelTabs = PanelTabs, /*#__PURE__*/(0, _react.memo)(_PanelTabs));
//# sourceMappingURL=PanelTabs.js.map