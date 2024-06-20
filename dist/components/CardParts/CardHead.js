"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CardHeadIcon = _interopRequireDefault(require("./CardHeadIcon"));
var _CardHeadTitle = _interopRequireDefault(require("./CardHeadTitle"));
var _jsxRuntime = require("react/jsx-runtime");
var _PanelHead;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function PanelHead(props) {
  const {
    as: HtmlTag = 'header',
    children,
    className,
    title,
    centered,
    icon,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('card-header', className),
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardHeadTitle.default, {
      centered: centered,
      children: title
    }), icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardHeadIcon.default, {
      children: icon
    }), children]
  });
}
PanelHead.defaultProps = {};
var _default = exports.default = (_PanelHead = PanelHead, /*#__PURE__*/(0, _react.memo)(_PanelHead));
//# sourceMappingURL=CardHead.js.map