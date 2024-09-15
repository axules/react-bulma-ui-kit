"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _CardHeadIcon;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CardHeadIcon(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('card-header-icon', className),
    children: children
  });
}
var _default = exports.default = (_CardHeadIcon = CardHeadIcon, /*#__PURE__*/(0, _react.memo)(_CardHeadIcon));
//# sourceMappingURL=CardHeadIcon.js.map