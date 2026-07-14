"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CardContent", {
  enumerable: true,
  get: function () {
    return _CardContent.default;
  }
});
Object.defineProperty(exports, "CardFooter", {
  enumerable: true,
  get: function () {
    return _CardFooter.default;
  }
});
Object.defineProperty(exports, "CardFooterItem", {
  enumerable: true,
  get: function () {
    return _CardFooterItem.default;
  }
});
Object.defineProperty(exports, "CardHead", {
  enumerable: true,
  get: function () {
    return _CardHead.default;
  }
});
Object.defineProperty(exports, "CardHeadIcon", {
  enumerable: true,
  get: function () {
    return _CardHeadIcon.default;
  }
});
Object.defineProperty(exports, "CardHeadTitle", {
  enumerable: true,
  get: function () {
    return _CardHeadTitle.default;
  }
});
Object.defineProperty(exports, "CardImage", {
  enumerable: true,
  get: function () {
    return _CardImage.default;
  }
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CardContent = _interopRequireDefault(require("./CardContent"));
var _CardFooter = _interopRequireDefault(require("./CardFooter"));
var _CardFooterItem = _interopRequireDefault(require("./CardFooterItem"));
var _CardHead = _interopRequireDefault(require("./CardHead"));
var _CardHeadIcon = _interopRequireDefault(require("./CardHeadIcon"));
var _CardHeadTitle = _interopRequireDefault(require("./CardHeadTitle"));
var _CardImage = _interopRequireDefault(require("./CardImage"));
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