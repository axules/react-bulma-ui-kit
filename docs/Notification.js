"use strict";
(self["webpackChunkreact_bulma_ui_kit"] = self["webpackChunkreact_bulma_ui_kit"] || []).push([[290],{

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

/***/ 780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ sheetRenderer)
});

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(181);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
// EXTERNAL MODULE: ./src/components/Title.jsx
var Title = __webpack_require__(322);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(848);
;// CONCATENATED MODULE: ./src/components/PanelParts/PanelBlock.jsx
var _PanelBlock;




function PanelBlock(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    active,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(HtmlTag, {
    ...restProps,
    className: classnames_default()('panel-block', active && 'is-active', className),
    children: children
  });
}
PanelBlock.propTypes = {
  as: (prop_types_default()).any,
  children: (prop_types_default()).node,
  className: (prop_types_default()).string,
  active: (prop_types_default()).bool
};
PanelBlock.defaultProps = {};
/* harmony default export */ const PanelParts_PanelBlock = (_PanelBlock = PanelBlock, /*#__PURE__*/(0,react.memo)(_PanelBlock));
;// CONCATENATED MODULE: ./src/components/PanelParts/PanelHead.jsx
var _PanelHead;




function PanelHead(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(HtmlTag, {
    ...restProps,
    className: classnames_default()('panel-heading', className),
    children: children
  });
}
PanelHead.propTypes = {
  as: (prop_types_default()).any,
  children: (prop_types_default()).node,
  className: (prop_types_default()).string
};
PanelHead.defaultProps = {};
/* harmony default export */ const PanelParts_PanelHead = (_PanelHead = PanelHead, /*#__PURE__*/(0,react.memo)(_PanelHead));
;// CONCATENATED MODULE: ./src/components/PanelParts/PanelIcon.jsx
var _PanelIcon;




function PanelIcon(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(HtmlTag, {
    ...restProps,
    className: classnames_default()('panel-icon', className),
    children: children
  });
}
PanelIcon.propTypes = {
  as: (prop_types_default()).any,
  children: (prop_types_default()).node,
  className: (prop_types_default()).string
};
PanelIcon.defaultProps = {};
/* harmony default export */ const PanelParts_PanelIcon = (_PanelIcon = PanelIcon, /*#__PURE__*/(0,react.memo)(_PanelIcon));
;// CONCATENATED MODULE: ./src/components/PanelParts/PanelTab.jsx
var _PanelTab;




function PanelTab(props) {
  const {
    as: HtmlTag = 'a',
    children,
    className,
    active,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(HtmlTag, {
    role: "tab",
    ...restProps,
    className: classnames_default()(active && 'is-active', className),
    children: children
  });
}
PanelTab.propTypes = {
  as: (prop_types_default()).any,
  children: (prop_types_default()).node,
  className: (prop_types_default()).string,
  active: (prop_types_default()).bool
};
PanelTab.defaultProps = {};
/* harmony default export */ const PanelParts_PanelTab = (_PanelTab = PanelTab, /*#__PURE__*/(0,react.memo)(_PanelTab));
;// CONCATENATED MODULE: ./src/components/PanelParts/PanelTabs.jsx
var _PanelTabs;




function PanelTabs(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(HtmlTag, {
    role: "tablist",
    ...restProps,
    className: classnames_default()('panel-tabs', className),
    children: children
  });
}
PanelTabs.propTypes = {
  as: (prop_types_default()).any,
  children: (prop_types_default()).node,
  className: (prop_types_default()).string
};
PanelTabs.defaultProps = {};
/* harmony default export */ const PanelParts_PanelTabs = (_PanelTabs = PanelTabs, /*#__PURE__*/(0,react.memo)(_PanelTabs));
// EXTERNAL MODULE: ./src/components/utils.js
var utils = __webpack_require__(13);
;// CONCATENATED MODULE: ./src/components/Panel.jsx
var _Panel;










function Panel(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    title,
    white,
    light,
    dark,
    black,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    ...restProps
  } = props;
  const classNamesValue = classnames_default()('panel', (0,utils/* getStyleClassName */.Zb)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0,utils/* getBrightnessClassName */.P2)({
    white,
    light,
    dark,
    black
  }), className);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(HtmlTag, {
    ...restProps,
    className: classNamesValue,
    children: [title && /*#__PURE__*/(0,jsx_runtime.jsx)(PanelParts_PanelHead, {
      children: title
    }), children]
  });
}
Panel.propTypes = {
  as: (prop_types_default()).any,
  children: (prop_types_default()).node,
  className: (prop_types_default()).string,
  title: (prop_types_default()).node,
  white: (prop_types_default()).bool,
  light: (prop_types_default()).bool,
  dark: (prop_types_default()).bool,
  black: (prop_types_default()).bool,
  primary: (prop_types_default()).bool,
  link: (prop_types_default()).bool,
  info: (prop_types_default()).bool,
  warning: (prop_types_default()).bool,
  success: (prop_types_default()).bool,
  danger: (prop_types_default()).bool
};
const PanelExport = (_Panel = Panel, /*#__PURE__*/(0,react.memo)(_Panel));
PanelExport.Head = PanelParts_PanelHead;
PanelExport.Block = PanelParts_PanelBlock;
PanelExport.BlockIcon = PanelParts_PanelIcon;
PanelExport.Tabs = PanelParts_PanelTabs;
PanelExport.Tab = PanelParts_PanelTab;
/* harmony default export */ const components_Panel = (PanelExport);
;// CONCATENATED MODULE: ./docsSrc/SheetExamples.jsx
var _SheetExamples;




const cnPrefix = 'sheetExamples';
function SheetExamples(props) {
  const {
    children,
    title,
    source
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Panel, {
    className: cnPrefix,
    title: title,
    light: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Panel.Block, {
      children: children
    }), source && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Panel.Block, {
      children: source
    })]
  });
}
SheetExamples.propTypes = {
  children: (prop_types_default()).node,
  title: (prop_types_default()).node,
  source: (prop_types_default()).node
};
SheetExamples.defaultProps = {};
/* harmony default export */ const docsSrc_SheetExamples = (_SheetExamples = SheetExamples, /*#__PURE__*/(0,react.memo)(_SheetExamples));
// EXTERNAL MODULE: ./docsSrc/SheetProps.jsx
var SheetProps = __webpack_require__(549);
// EXTERNAL MODULE: ./docsSrc/utils.js
var docsSrc_utils = __webpack_require__(271);
;// CONCATENATED MODULE: ./docsSrc/sheetRenderer.js







function resizeMessage() {
  const html = document.querySelector('html');
  html.style.height = '0';
  const event = {
    type: 'FRAME_RESIZE',
    payload: {
      height: html.scrollHeight,
      url: window.location.href
    }
  };
  window.top.postMessage(event, '*');
}
const onWindowResize = lodash_debounce_default()(resizeMessage, 250);
window.addEventListener('resize', onWindowResize);
function renderSandbox() {}
function sheetRenderer(CMP, sheets, options = {}) {
  const CoreComponent = (0,docsSrc_utils/* extractCore */.n)(CMP);
  const renderedSheets = Object.entries(sheets).map(([key, value]) => /*#__PURE__*/(0,jsx_runtime.jsx)(docsSrc_SheetExamples, {
    title: key,
    source: value.source,
    children: value.render ? value.render : value
  }, key));
  (0,client/* createRoot */.H)(document.getElementById('general')).render( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title/* default */.A, {
      is5: true,
      children: CoreComponent === CMP ? CMP.displayName || CoreComponent.name : `${CoreComponent.displayName || CoreComponent.name} / ${CMP.displayName}`
    }), renderedSheets, options.sandbox && renderSandbox(options), options.pt && /*#__PURE__*/(0,jsx_runtime.jsx)(SheetProps/* default */.A, {
      propTypesData: CoreComponent.propTypes
    })]
  }));
  resizeMessage();
  return sheets;
}

/***/ }),

/***/ 837:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _src_components_Buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(535);
/* harmony import */ var _src_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(311);
/* harmony import */ var _sheetRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(780);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(848);




const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
function renderEach(cases, props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components_Buttons__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    children: cases.map(it => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src_components_Notification__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      ...(it ? {
        [it]: true
      } : {}),
      ...props,
      children: [it || 'Default', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "It is example of text which could be in this Notification component"]
    }, it))
  });
}
const examples = {
  styles: renderEach(styles),
  centered: renderEach(styles, {
    centered: true
  }),
  stylesWithClose: renderEach(styles, {
    onClose: () => console.warn('onClose callback')
  }),
  stylesLight: renderEach(styles, {
    light: true
  }),
  stylesDark: renderEach(styles, {
    dark: true
  }),
  brightness: renderEach(brightness)
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_sheetRenderer__WEBPACK_IMPORTED_MODULE_2__/* .sheetRenderer */ .r)(_src_components_Notification__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, examples));

/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ extractCore),
/* harmony export */   p: () => (/* binding */ prepareSource)
/* harmony export */ });
function extractCore(component) {
  let node = component;
  while (node.type) {
    node = node.type;
  }
  return node;
}
function prepareSource(cmp, props) {
  const {
    children,
    ...restProps
  } = props;
  const propsSrc = Object.entries(restProps).map(([key, value]) => {
    if (value === null) return `${key}={null}`;
    if (value === undefined) return null;
    if (value === true) return key;
    if (value === false) return `${key}={false}`;
    if (typeof value === 'string') return `${key}="${value}"`;
    return `${key}={${value}}`;
  }).filter(Boolean).join(' ');
  return children ? `<${cmp} ${propsSrc}>${children}</${cmp}>` : `<${cmp} ${propsSrc}/>`;
}

/***/ }),

/***/ 535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(848);
var _Buttons;





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
  const classNamesValue = classnames__WEBPACK_IMPORTED_MODULE_2___default()('buttons', hasAddons && 'has-addons', nowrap && 'is-flex-wrap-nowrap', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getAlignClassName */ .HA)({
    left,
    centered,
    right
  }), className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    ...restProps,
    className: classNamesValue,
    children: children
  });
}
Buttons.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasAddons: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  nowrap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  left: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  centered: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  right: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Buttons = Buttons, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Buttons));

/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(848);
var _DeleteButton;





function DeleteButton(props) {
  const {
    className,
    small,
    medium,
    large,
    forwardedRef,
    ...restProps
  } = props;
  const classNamesValue = classnames__WEBPACK_IMPORTED_MODULE_2___default()('delete', (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getSizeClassName */ .bP)({
    small,
    medium,
    large
  }), className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
    ref: forwardedRef,
    type: "button",
    ...restProps,
    className: classNamesValue
  });
}
DeleteButton.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  forwardedRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  small: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  medium: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  large: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DeleteButton = DeleteButton, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_DeleteButton));

/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(848);
var _Notification;






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
    centered,
    ...restProps
  } = props;
  const classNamesValue = classnames__WEBPACK_IMPORTED_MODULE_2___default()('notification', (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getStyleClassName */ .Zb)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getBrightnessClassName */ .P2)({
    white,
    light,
    dark,
    black
  }), centered && 'has-text-centered', className);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (closeDelay) {
      if (!onClose) {
        console.error('onClose handler is required once closeDelay is defined');
        return;
      }
      const timer = setTimeout(() => onClose(), closeDelay);
      return () => clearTimeout(timer);
    }
  }, [closeDelay, onClose]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: classNamesValue,
    ...restProps,
    children: [onClose && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DeleteButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      onClick: onClose
    }), children]
  });
}
Notification.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  closeDelay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  primary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  info: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  warning: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  success: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  danger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  white: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  light: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  dark: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  black: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  centered: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Notification = Notification, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Notification));

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

/***/ }),

/***/ 13:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HA: () => (/* binding */ getAlignClassName),
/* harmony export */   P2: () => (/* binding */ getBrightnessClassName),
/* harmony export */   Zb: () => (/* binding */ getStyleClassName),
/* harmony export */   bP: () => (/* binding */ getSizeClassName)
/* harmony export */ });
/* unused harmony export getTextColorClassName */
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(837)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);