"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _PanelBlock;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PanelBlock(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    active,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('panel-block', active && 'is-active', className),
    children: children
  });
}
PanelBlock.defaultProps = {};
var _default = exports.default = (_PanelBlock = PanelBlock, /*#__PURE__*/(0, _react.memo)(_PanelBlock));
//# sourceMappingURL=PanelBlock.js.map