"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useStaticCallback = require("../useStaticCallback");
var _withRef = require("../withRef");
var _TextInput = _interopRequireDefault(require("./TextInput"));
var _jsxRuntime = require("react/jsx-runtime");
var _ref, _PasswordInput;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function PasswordInput(props) {
  const {
    revealPassword,
    revealPasswordIcon,
    type = 'password',
    rightIcon,
    ...restProps
  } = props;
  const [visible, setVisible] = (0, _react.useState)(false);
  const onClickRevealPassword = (0, _useStaticCallback.useStaticCallback)(() => {
    setVisible(val => !val);
  });
  const revealButton = (0, _react.useMemo)(() => {
    if (!revealPassword) return undefined;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      onClick: onClickRevealPassword,
      children: revealPasswordIcon
    });
  }, [revealPassword, onClickRevealPassword, revealPasswordIcon]);
  const resultType = type === 'password' ? visible ? 'text' : 'password' : type;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.default, {
    type: resultType,
    rightIcon: revealButton || rightIcon,
    ...restProps
  });
}
var _default = exports.default = (_ref = (_PasswordInput = PasswordInput, /*#__PURE__*/(0, _react.memo)(_PasswordInput)), (0, _withRef.withForwardedRef)(_ref));
//# sourceMappingURL=PasswordInput.js.map