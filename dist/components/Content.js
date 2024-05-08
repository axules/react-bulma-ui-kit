"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("react/jsx-runtime");
var _Content;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Content(props) {
  const {
    as: HtmlTag = 'div',
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ...restProps,
    className: (0, _classnames.default)('content', _classnames.default),
    children: children
  });
}
var _default = exports.default = (_Content = Content, /*#__PURE__*/(0, _react.memo)(_Content));
//# sourceMappingURL=Content.js.map