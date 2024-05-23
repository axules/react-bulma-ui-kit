"use strict";
(self["webpackChunkreact_bulma_ui_kit"] = self["webpackChunkreact_bulma_ui_kit"] || []).push([[939],{

/***/ 672:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.A = void 0;
var _react = __webpack_require__(540);
var _propTypes = _interopRequireDefault(__webpack_require__(556));
var _classnames = _interopRequireDefault(__webpack_require__(942));
var _withRef = __webpack_require__(76);
var _utils = __webpack_require__(115);
var _jsxRuntime = __webpack_require__(848);
var _ref, _Button;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function Button(props) {
  const {
    as: HtmlTag = 'button',
    children,
    className,
    loading,
    forwardedRef,
    isDelete,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    small,
    medium,
    large,
    fullWidth,
    white,
    light,
    dark,
    black,
    text,
    ghost,
    inverted,
    outlined,
    rounded,
    disabled,
    type = HtmlTag === 'button' ? 'button' : undefined,
    ...restProps
  } = props;
  const classNamesValue = (0, _classnames.default)('button', (0, _utils.getStyleClassName)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0, _utils.getSizeClassName)({
    small,
    medium,
    large
  }), (0, _utils.getBrightnessClassName)({
    white,
    light,
    dark,
    black,
    text,
    ghost
  }), loading && 'is-loading', outlined && 'is-outlined', rounded && 'is-rounded', fullWidth && 'is-fullwidth', isDelete && 'is-delete', inverted && 'is-inverted', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(HtmlTag, {
    ref: forwardedRef,
    type: type != null ? type : undefined,
    ...restProps,
    disabled: disabled || loading,
    className: classNamesValue,
    children: children
  });
}
var _default = exports.A = (_ref = (_Button = Button, /*#__PURE__*/(0, _react.memo)(_Button)), (0, _withRef.withForwardedRef)(_ref));

/***/ }),

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

/***/ 76:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.withForwardedRef = withForwardedRef;
var _react = __webpack_require__(540);
var _jsxRuntime = __webpack_require__(848);
/**
 * Adds `forwardedRef` prop to component. Uses `react.forwardRef`.
 * @param {React Component} WrappedComponent
 * @returns
 */
function withForwardedRef(WrappedComponent) {
  return withRef('forwardedRef')(WrappedComponent);
}
function withRef(propName) {
  return function (WrappedComponent) {
    const Wrapper = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
      if (ref && props[propName]) {
        throw new Error("withRef error: forwarded ref property collision (property name is '" + propName + "')");
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, {
        ...props,
        [propName]: ref || props[propName]
      });
    });
    Wrapper.displayName = "WithRef(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")";
    return Wrapper;
  };
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

/***/ 230:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _dist_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(672);
/* harmony import */ var _dist_components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var _sheetEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(848);




const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
const sizes = 'primary.link.success.warning.danger'.split('.');
function renderEach(cases, props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dist_components_Buttons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    children: cases.map(it => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dist_components_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
      ...(it ? {
        [it]: true
      } : {}),
      ...props,
      children: it || 'Default'
    }, it))
  });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_sheetEntry__WEBPACK_IMPORTED_MODULE_2__/* .sheetEntry */ .W)({
  styles: renderEach(styles),
  stylesLight: renderEach(styles, {
    light: true
  }),
  stylesDark: renderEach(styles, {
    dark: true
  }),
  stylesOutlined: renderEach(styles, {
    outlined: true
  }),
  brightness: renderEach(brightness),
  sizes: renderEach(sizes)
}));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(230)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);