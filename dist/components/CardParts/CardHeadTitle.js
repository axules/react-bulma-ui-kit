"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _CardHeadTitle;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CardHeadTitle(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    centered,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('card-header-title', centered && 'is-centered', className),
    children: children
  });
}
CardHeadTitle.defaultProps = {};
var _default = exports.default = (_CardHeadTitle = CardHeadTitle, /*#__PURE__*/(0, _react.memo)(_CardHeadTitle));
//# sourceMappingURL=CardHeadTitle.js.map