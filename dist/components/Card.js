"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CardContent = _interopRequireDefault(require("./CardParts/CardContent"));
var _CardFooter = _interopRequireDefault(require("./CardParts/CardFooter"));
var _CardFooterItem = _interopRequireDefault(require("./CardParts/CardFooterItem"));
var _CardHead = _interopRequireDefault(require("./CardParts/CardHead"));
var _CardHeadIcon = _interopRequireDefault(require("./CardParts/CardHeadIcon"));
var _CardHeadTitle = _interopRequireDefault(require("./CardParts/CardHeadTitle"));
var _CardImage = _interopRequireDefault(require("./CardParts/CardImage"));
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
const CardExport = (_Card = Card, /*#__PURE__*/(0, _react.memo)(_Card));
CardExport.Head = _CardHead.default;
CardExport.HeadTitle = _CardHeadTitle.default;
CardExport.HeadIcon = _CardHeadIcon.default;
CardExport.Image = _CardImage.default;
CardExport.Content = _CardContent.default;
CardExport.Footer = _CardFooter.default;
CardExport.FooterItem = _CardFooterItem.default;
var _default = exports.default = CardExport;
//# sourceMappingURL=Card.js.map