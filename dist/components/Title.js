"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _Title;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Title(props) {
  const {
    as,
    children,
    className,
    forwardedRef,
    is1,
    is2,
    is3,
    is4,
    is5,
    is6,
    subtitle,
    ...restProps
  } = props;
  const HtmlTag = as || is1 && 'h1' || is2 && 'h2' || is3 && 'h3' || is4 && 'h4' || is5 && 'h5' || is6 && 'h6' || 'h3';
  const hClassName = is1 && 'is-1' || is2 && 'is-2' || is3 && 'is-3' || is4 && 'is-4' || is5 && 'is-5' || is6 && 'is-6' || undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ref: forwardedRef,
    ...restProps,
    className: (0, _classnames.default)(subtitle ? 'subtitle' : 'title', hClassName, className),
    children: children
  });
}
var _default = exports.default = (_Title = Title, /*#__PURE__*/(0, _react.memo)(_Title));
//# sourceMappingURL=Title.js.map