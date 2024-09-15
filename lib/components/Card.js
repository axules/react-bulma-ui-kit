"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CardContent = _interopRequireDefault(require("./Card/CardContent"));
exports.CardContent = _CardContent.default;
var _CardFooter = _interopRequireDefault(require("./Card/CardFooter"));
exports.CardFooter = _CardFooter.default;
var _CardFooterItem = _interopRequireDefault(require("./Card/CardFooterItem"));
exports.CardFooterItem = _CardFooterItem.default;
var _CardHead = _interopRequireDefault(require("./Card/CardHead"));
exports.CardHead = _CardHead.default;
var _CardHeadIcon = _interopRequireDefault(require("./Card/CardHeadIcon"));
exports.CardHeadIcon = _CardHeadIcon.default;
var _CardHeadTitle = _interopRequireDefault(require("./Card/CardHeadTitle"));
exports.CardHeadTitle = _CardHeadTitle.default;
var _CardImage = _interopRequireDefault(require("./Card/CardImage"));
exports.CardImage = _CardImage.default;
var _jsxRuntime = require("react/jsx-runtime");
var _Card;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Card(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    title,
    titleCentered,
    titleIcon,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('card', className),
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardHead.default, {
      title: title,
      centered: titleCentered,
      icon: titleIcon
    }), children]
  });
}
var _default = exports.default = (_Card = Card, /*#__PURE__*/(0, _react.memo)(_Card));
//# sourceMappingURL=Card.js.map