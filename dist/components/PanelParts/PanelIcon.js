"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _PanelIcon;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function PanelIcon(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('panel-icon', className),
    children: children
  });
}
PanelIcon.defaultProps = {};
var _default = exports.default = (_PanelIcon = PanelIcon, /*#__PURE__*/(0, _react.memo)(_PanelIcon));
//# sourceMappingURL=PanelIcon.js.map