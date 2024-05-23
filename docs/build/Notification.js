"use strict";
(self["webpackChunkreact_bulma_ui_kit"] = self["webpackChunkreact_bulma_ui_kit"] || []).push([[290],{

/***/ 103:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.A = void 0;
var _react = __webpack_require__(540);
var _propTypes = _interopRequireDefault(__webpack_require__(556));
var _classnames = _interopRequireDefault(__webpack_require__(942));
var _utils = __webpack_require__(115);
var _jsxRuntime = __webpack_require__(848);
var _Buttons;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function Buttons(props) {
  const {
    children,
    className,
    hasAddons,
    nowrap,
    left,
    centered,
    right,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('buttons', hasAddons && 'has-addons', nowrap && 'is-flex-wrap-nowrap', (0, _utils.getAlignClassName)({
    left,
    centered,
    right
  }), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    className: classNamesValue,
    children: children
  });
}
var _default = exports.A = (_Buttons = Buttons, /*#__PURE__*/(0, _react.memo)(_Buttons));

/***/ }),

/***/ 963:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;
var _react = __webpack_require__(540);
var _propTypes = _interopRequireDefault(__webpack_require__(556));
var _classnames = _interopRequireDefault(__webpack_require__(942));
var _utils = __webpack_require__(115);
var _jsxRuntime = __webpack_require__(848);
var _DeleteButton;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function DeleteButton(props) {
  const {
    className,
    small,
    medium,
    large,
    forwardedRef,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('delete', (0, _utils.getSizeClassName)({
    small,
    medium,
    large
  }), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: forwardedRef,
    type: "button",
    ...restProps,
    className: classNamesValue
  });
}
var _default = exports["default"] = (_DeleteButton = DeleteButton, /*#__PURE__*/(0, _react.memo)(_DeleteButton));

/***/ }),

/***/ 99:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.A = void 0;
var _react = __webpack_require__(540);
var _propTypes = _interopRequireDefault(__webpack_require__(556));
var _classnames = _interopRequireDefault(__webpack_require__(942));
var _DeleteButton = _interopRequireDefault(__webpack_require__(963));
var _utils = __webpack_require__(115);
var _jsxRuntime = __webpack_require__(848);
var _Notification;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function Notification(props) {
  const {
    className,
    children,
    onClose,
    closeDelay,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    white,
    light,
    dark,
    black,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('notification', (0, _utils.getStyleClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getBrightnessClassName)({
    white,
    light,
    dark,
    black
  }), className);
  (0, _react.useEffect)(() => {
    if (closeDelay) {
      if (!onClose) {
        console.error('onClose handler is required once closeDelay is defined');
        return;
      }
      const timer = setTimeout(() => onClose(), closeDelay);
      return () => clearTimeout(timer);
    }
  }, [closeDelay, onClose]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classNamesValue,
    ...restProps,
    children: [onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DeleteButton.default, {
      onClick: onClose
    }), children]
  });
}
var _default = exports.A = (_Notification = Notification, /*#__PURE__*/(0, _react.memo)(_Notification));

/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;
exports.getAlignClassName = getAlignClassName;
exports.getBrightnessClassName = getBrightnessClassName;
exports.getSizeClassName = getSizeClassName;
exports.getStyleClassName = getStyleClassName;
exports.getTextColorClassName = getTextColorClassName;
function getStyleClassName(styles) {
  const {
    danger,
    success,
    warning,
    info,
    link,
    primary
  } = styles;
  return danger && 'is-danger' || success && 'is-success' || warning && 'is-warning' || info && 'is-info' || link && 'is-link' || primary && 'is-primary' || undefined;
}
function getTextColorClassName(styles) {
  const {
    danger,
    success,
    warning,
    info,
    link,
    primary
  } = styles;
  return danger && 'has-text-danger' || success && 'has-text-success' || warning && 'has-text-warning' || info && 'has-text-info' || link && 'has-text-link' || primary && 'has-text-primary' || undefined;
}
function getBrightnessClassName(styles) {
  const {
    white,
    light,
    dark,
    black,
    text,
    ghost
  } = styles;
  return white && 'is-white' || light && 'is-light' || dark && 'is-dark' || black && 'is-black' || text && 'is-text' || ghost && 'is-ghost' || undefined;
}
function getSizeClassName(styles) {
  const {
    small,
    medium,
    large
  } = styles;
  return small && 'is-small' || medium && 'is-medium' || large && 'is-large' || undefined;
}
function getAlignClassName(styles) {
  const {
    right,
    centered,
    left
  } = styles;
  return left && 'is-left' || centered && 'is-centered' || right && 'is-right' || undefined;
}

/***/ }),

/***/ 197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ sheetEntry)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(338);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(848);


function renderSheet(title, children) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {})]
  });
}
function renderSandbox() {}
function sheetEntry(sheets, options) {
  if (options === void 0) {
    options = {};
  }
  const entries = Object.entries(sheets);
  const rendered = entries.map(_ref => {
    let [key, value] = _ref;
    return renderSheet(key, value);
  });
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__/* .createRoot */ .H)(document.getElementById('general')).render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [rendered, options.sandbox && renderSandbox(options)]
  }));
  return sheets;
}

/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _dist_components_Buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _dist_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _sheetEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(848);




const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
function renderEach(cases, props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dist_components_Buttons__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    children: cases.map(it => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_dist_components_Notification__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      ...(it ? {
        [it]: true
      } : {}),
      ...props,
      children: [it || 'Default', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "It is example of text which could be in this Notification component"]
    }, it))
  });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_sheetEntry__WEBPACK_IMPORTED_MODULE_2__/* .sheetEntry */ .W)({
  styles: renderEach(styles),
  stylesWithClose: renderEach(styles, {
    onClose: () => console.log('onClose callback')
  }),
  stylesLight: renderEach(styles, {
    light: true
  }),
  stylesDark: renderEach(styles, {
    dark: true
  }),
  brightness: renderEach(brightness)
}));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(61)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);