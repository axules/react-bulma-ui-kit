"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _CardFooterItem;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CardFooterItem(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('card-footer-item', className),
    children: children
  });
}
CardFooterItem.defaultProps = {};
var _default = exports.default = (_CardFooterItem = CardFooterItem, /*#__PURE__*/(0, _react.memo)(_CardFooterItem));
//# sourceMappingURL=CardFooterItem.js.map