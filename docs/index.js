"use strict";
(self["webpackChunkreact_bulma_ui_kit"] = self["webpackChunkreact_bulma_ui_kit"] || []).push([[57],{

/***/ 402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.A = void 0;
var _react = __webpack_require__(540);
var _propTypes = _interopRequireDefault(__webpack_require__(556));
var _classnames = _interopRequireDefault(__webpack_require__(942));
var _withRef = __webpack_require__(154);
var _utils = __webpack_require__(721);
var _jsxRuntime = __webpack_require__(848);
var _ref, _Button;
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
function Button(props) {
  const {
    as: HtmlTag = 'button',
    children,
    className,
    loading,
    forwardedRef,
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
  }), loading && 'is-loading', outlined && 'is-outlined', rounded && 'is-rounded', fullWidth && 'is-fullwidth', inverted && 'is-inverted', className);
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

/***/ 721:
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

/***/ 154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.withForwardedRef = withForwardedRef;
var _react = __webpack_require__(540);
var _jsxRuntime = __webpack_require__(848);
/**
 * Adds `forwardedRef` prop to component. Uses `react.forwardRef`.
 * @param {React.Component} WrappedComponent
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
    Wrapper.type = WrappedComponent;
    return Wrapper;
  };
}

/***/ }),

/***/ 312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ FrameMessenger)
/* harmony export */ });
class FrameMessengerClass {
  TYPES = {
    FRAME_RESIZE: 'FRAME_RESIZE',
    SHEET_SECTIONS: 'SHEET_SECTIONS',
    SCROLL_TO: 'SCROLL_TO'
  };
  sendParentMessage(type, payload) {
    const event = {
      type,
      payload
    };
    window.top.postMessage(event, '*');
  }
  sendChildMessage(type, payload) {
    const event = {
      type,
      payload
    };
    document.querySelector('iframe')?.contentWindow?.postMessage(event, '*');
  }
  listenMessages(callback) {
    const onMessage = function (event) {
      if (typeof event.data !== 'object') return;
      const {
        type,
        payload
      } = event.data;
      callback(type, payload);
    };
    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
    };
  }
}
const FrameMessenger = new FrameMessengerClass();

/***/ }),

/***/ 242:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./dist/components/Button.js
var Button = __webpack_require__(402);
// EXTERNAL MODULE: ./src/components/Title.jsx
var Title = __webpack_require__(322);
;// CONCATENATED MODULE: ./src/useStaticCallback.js


/**
 * Returns static function which never changes (during component re-render).
 * @param {Function} handler
 * @returns {Function} Immutable function, which never changes. If you call this function
 * then it calls the LAST passed `handler.
 * @example
 * const { saveValue } = props;
 * const [value, setValue] = useState('');
 * const onClick = useStaticCallback(() => {
 *  saveValue(value);
 * });
 */
function useStaticCallback(handler) {
  const handlerRef = (0,react.useRef)(handler);
  handlerRef.current = handler;
  return (0,react.useCallback)((...args) => handlerRef.current(...args), []);
}
// EXTERNAL MODULE: ./docsSrc/FrameMessenger.js
var FrameMessenger = __webpack_require__(312);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(848);
;// CONCATENATED MODULE: ./docsSrc/MainSheetsMenu.jsx
var _MainSheetsMenu;






const cnPrefix = 'mainSheetsMenu';
function MainSheetsMenu(props) {
  const {
    sheets,
    onSelect,
    selected
  } = props;
  const [currentExamples, setCurrentExamples] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    setCurrentExamples([]);
  }, [selected]);
  (0,react.useEffect)(() => {
    const onMessage = function (type, payload) {
      switch (type) {
        case FrameMessenger/* FrameMessenger */.p.TYPES.SHEET_SECTIONS:
          {
            setCurrentExamples(payload.items);
            return true;
          }
      }
    };
    return FrameMessenger/* FrameMessenger */.p.listenMessages(onMessage);
  }, []);
  const onClickSheet = useStaticCallback(event => {
    const sheetName = event.target.getAttribute('href').slice(1);
    onSelect(sheets.find(it => it.name === sheetName));
  });
  const onClickSubmenu = useStaticCallback(event => {
    const selector = event.target.getAttribute('href');
    if (selector) {
      FrameMessenger/* FrameMessenger */.p.sendChildMessage(FrameMessenger/* FrameMessenger */.p.TYPES.SCROLL_TO, {
        selector
      });
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("aside", {
    className: "menu",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "menu-label",
      children: "Components"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: classnames_default()(cnPrefix, 'menu-list'),
      children: sheets.map(it => /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: `?page=${it.name}`
          // onClick={onClickSheet}
          ,
          className: classnames_default()(selected === it && 'is-active'),
          children: it.title || it.name
        }), selected === it && currentExamples.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
          children: currentExamples.map(it => /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              href: `#${it.href}`,
              onClick: onClickSubmenu,
              children: it.title
            })
          }, it.href))
        })]
      }, it.name))
    })]
  });
}
MainSheetsMenu.propTypes = {
  sheets: (prop_types_default()).array,
  onSelect: (prop_types_default()).func,
  selected: (prop_types_default()).object
};
/* harmony default export */ const docsSrc_MainSheetsMenu = (_MainSheetsMenu = MainSheetsMenu, /*#__PURE__*/(0,react.memo)(_MainSheetsMenu));
;// CONCATENATED MODULE: ./docsSrc/MainPage.jsx
var _MainPage;








const MainPage_cnPrefix = 'mainPage';
function MainPage(props) {
  const {
    sheets
  } = props;
  const [selectedSheet, setSelectedSheet] = (0,react.useState)(() => {
    const name = /page=([^&=]+)/.exec(document.location.search || '')?.[1];
    // const hash = (document.location.hash || '').replace('#', '');
    return name ? sheets.find(it => it.name === name) : undefined;
  });
  const url = selectedSheet ? `./${selectedSheet.path}` : undefined;
  (0,react.useEffect)(() => {
    const onMessage = function (type, payload) {
      switch (type) {
        case FrameMessenger/* FrameMessenger */.p.TYPES.FRAME_RESIZE:
          {
            const {
              height,
              url
            } = payload;
            const fileName = url.split('/').pop();
            const frame = document.querySelector(`iframe[src*="${fileName}"]`);
            if (frame) {
              frame.style['min-height'] = `${height}px`;
            }
            return true;
          }
      }
    };
    return FrameMessenger/* FrameMessenger */.p.listenMessages(onMessage);
  }, []);
  const onClickToTop = useStaticCallback(() => {
    document.body.scrollIntoView({
      behavior: 'smooth'
    });
  });
  const onLoadIframe = useStaticCallback(() => {
    const hash = document.location.hash || '';
    if (hash) {
      setTimeout(() => FrameMessenger/* FrameMessenger */.p.sendChildMessage(FrameMessenger/* FrameMessenger */.p.TYPES.SCROLL_TO, {
        selector: hash
      }), 50);
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: MainPage_cnPrefix,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: `${MainPage_cnPrefix}__menu`,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(docsSrc_MainSheetsMenu, {
        sheets: sheets,
        selected: selectedSheet,
        onSelect: setSelectedSheet
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: `${MainPage_cnPrefix}__view`,
      children: selectedSheet ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title/* default */.A, {
          is4: true,
          children: selectedSheet.name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
          name: "SheetFrame",
          title: selectedSheet.name,
          src: url,
          onLoad: onLoadIframe
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Title/* default */.A, {
        is2: true,
        children: ['<- ', "Select component in menu"]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A, {
      info: true,
      className: `${MainPage_cnPrefix}__toTop`,
      onClick: onClickToTop,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "icon",
        children: "\uD83E\uDC79"
      })
    })]
  });
}
MainPage.propTypes = {
  sheets: (prop_types_default()).array
};
/* harmony default export */ const docsSrc_MainPage = (_MainPage = MainPage, /*#__PURE__*/(0,react.memo)(_MainPage));
;// CONCATENATED MODULE: ./docsSrc/index.js



(0,client/* createRoot */.H)(document.getElementById('general')).render( /*#__PURE__*/(0,jsx_runtime.jsx)(docsSrc_MainPage, {
  sheets: window.__SHEETS__
}));

/***/ }),

/***/ 322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(848);
var _Title;




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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HtmlTag, {
    ref: forwardedRef,
    ...restProps,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(subtitle ? 'subtitle' : 'title', hClassName, className),
    children: children
  });
}
Title.propTypes = {
  as: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  forwardedRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  is1: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  is2: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  is3: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  is4: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  is5: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  is6: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Title = Title, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Title));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(242)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);