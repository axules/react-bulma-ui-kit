"use strict";
(self["webpackChunkreact_bulma_ui_kit"] = self["webpackChunkreact_bulma_ui_kit"] || []).push([[57],{

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(848);
var _SheetProps;



const cnPrefix = 'sheetProps';
function SheetProps(props) {
  const {
    propTypesData
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: cnPrefix,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      children: "Prop types:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
      className: "table is-bordered",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
        children: Object.entries(propTypesData).map(([k]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: k
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: "???"
          })]
        }, k))
      })
    })]
  });
}
SheetProps.propTypes = {
  propTypesData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
SheetProps.defaultProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SheetProps = SheetProps, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_SheetProps));

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
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
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
  const onClickSheet = useStaticCallback(event => {
    const sheetName = event.target.getAttribute('href').slice(1);
    onSelect(sheets.find(it => it.name === sheetName));
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
    className: cnPrefix,
    children: sheets.map(it => /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        href: `#${it.name}`,
        onClick: onClickSheet,
        className: classnames_default()(selected === it && 'm-selected'),
        children: it.title || it.name
      })
    }, it.name))
  });
}
MainSheetsMenu.propTypes = {
  sheets: (prop_types_default()).array,
  onSelect: (prop_types_default()).func,
  selected: (prop_types_default()).object
};
MainSheetsMenu.defaultProps = {};
/* harmony default export */ const docsSrc_MainSheetsMenu = (_MainSheetsMenu = MainSheetsMenu, /*#__PURE__*/(0,react.memo)(_MainSheetsMenu));
// EXTERNAL MODULE: ./docsSrc/SheetProps.jsx
var SheetProps = __webpack_require__(549);
;// CONCATENATED MODULE: ./docsSrc/MainPage.jsx
var _MainPage;






const MainPage_cnPrefix = 'mainPage';
function MainPage(props) {
  const {
    sheets
  } = props;
  const [selectedSheet, setSelectedSheet] = (0,react.useState)(() => {
    const hash = (document.location.hash || '').replace('#', '');
    return hash ? sheets.find(it => it.name === hash) : undefined;
  });
  const url = selectedSheet ? `./${selectedSheet.path}` : undefined;
  (0,react.useEffect)(() => {
    const onMessage = function (event) {
      if (typeof event.data !== 'object') return;
      const {
        type,
        payload
      } = event.data;
      switch (type) {
        case 'FRAME_RESIZE':
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
            break;
          }
        default:
          console.warn('Undefined command [%s]', event.data);
      }
    };
    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
    };
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          children: selectedSheet.name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
          title: selectedSheet.name,
          src: url
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
        children: "Select component"
      })
    })]
  });
}
MainPage.propTypes = {
  sheets: (prop_types_default()).array
};
MainPage.defaultProps = {};
/* harmony default export */ const docsSrc_MainPage = (_MainPage = MainPage, /*#__PURE__*/(0,react.memo)(_MainPage));
;// CONCATENATED MODULE: ./docsSrc/index.js



(0,client/* createRoot */.H)(document.getElementById('general')).render( /*#__PURE__*/(0,jsx_runtime.jsx)(docsSrc_MainPage, {
  sheets: window.__SHEETS__
}));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(242)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);