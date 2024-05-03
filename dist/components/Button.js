"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _withRef = require("../utils/withRef");
var _jsxRuntime = require("react/jsx-runtime");
var _Button;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(props) {
  const {
    as,
    children,
    className,
    isLoading,
    forwardedRef,
    small,
    outlined,
    rounded,
    disabled,
    light,
    ...restProps
  } = props;
  const Tag = as;
  console.log('LAAAAAAAAAAAAAAAAA', Tag);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: forwardedRef,
    type: "button",
    ...restProps,
    disabled: disabled || isLoading,
    className: (0, _classnames.default)('button', isLoading && 'is-loading', small && 'is-small', outlined && 'is-outlined', rounded && 'is-rounded', light && 'is-light', className),
    children: children
  });
}
Button.defaultProps = {
  as: 'button'
};
var _default = exports.default = (_Button = Button, /*#__PURE__*/(0, _react.memo)(_Button));
//# sourceMappingURL=Button.js.map