"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _PanelBlock = _interopRequireDefault(require("./Panel/PanelBlock"));
exports.PanelBlock = _PanelBlock.default;
var _PanelHead = _interopRequireDefault(require("./Panel/PanelHead"));
exports.PanelHead = _PanelHead.default;
var _PanelIcon = _interopRequireDefault(require("./Panel/PanelIcon"));
exports.PanelIcon = _PanelIcon.default;
var _PanelTab = _interopRequireDefault(require("./Panel/PanelTab"));
exports.PanelTab = _PanelTab.default;
var _PanelTabs = _interopRequireDefault(require("./Panel/PanelTabs"));
exports.PanelTabs = _PanelTabs.default;
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Panel;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Panel(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    title,
    white,
    light,
    dark,
    black,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('panel', (0, _utils.getStyleClassName)({
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(HtmlTag, {
    ...restProps,
    className: classNamesValue,
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PanelHead.default, {
      children: title
    }), children]
  });
}
var _default = exports.default = (_Panel = Panel, /*#__PURE__*/(0, _react.memo)(_Panel));
//# sourceMappingURL=Panel.js.map