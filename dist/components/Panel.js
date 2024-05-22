"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _PanelBlock = _interopRequireDefault(require("./PanelParts/PanelBlock"));
var _PanelHead = _interopRequireDefault(require("./PanelParts/PanelHead"));
var _PanelIcon = _interopRequireDefault(require("./PanelParts/PanelIcon"));
var _PanelTab = _interopRequireDefault(require("./PanelParts/PanelTab"));
var _PanelTabs = _interopRequireDefault(require("./PanelParts/PanelTabs"));
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
var _Panel;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
const PanelExport = (_Panel = Panel, /*#__PURE__*/(0, _react.memo)(_Panel));
PanelExport.Head = _PanelHead.default;
PanelExport.Block = _PanelBlock.default;
PanelExport.BlockIcon = _PanelIcon.default;
PanelExport.Tabs = _PanelTabs.default;
PanelExport.Tab = _PanelTab.default;
var _default = exports.default = PanelExport;
//# sourceMappingURL=Panel.js.map