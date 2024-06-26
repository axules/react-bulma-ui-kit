"use strict";
(self["webpackChunkreact_bulma_ui_kit"] = self["webpackChunkreact_bulma_ui_kit"] || []).push([[483],{

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

/***/ 73:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ sheetRenderer)
});

// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
// EXTERNAL MODULE: ./src/components/Title.jsx
var Title = __webpack_require__(322);
// EXTERNAL MODULE: ./docsSrc/FrameMessenger.js
var FrameMessenger = __webpack_require__(312);
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
    id,
    children,
    title,
    source,
    samples
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Panel, {
    id: id,
    className: cnPrefix,
    title: title,
    light: true,
    children: [children && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Panel.Block, {
      className: `${cnPrefix}__example`,
      children: children
    }), source && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Panel.Block, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
        className: `${cnPrefix}__sampleSource`,
        children: source
      })
    }), samples?.map(it => /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Panel.Block, {
      className: `${cnPrefix}__example`,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: `${cnPrefix}__sample`,
        children: it
      }), it.__source && /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
        className: `${cnPrefix}__sampleSource`,
        children: it.__source
      })]
    }, it))]
  });
}
SheetExamples.propTypes = {
  samples: (prop_types_default()).array,
  children: (prop_types_default()).node,
  title: (prop_types_default()).node,
  source: (prop_types_default()).node,
  id: (prop_types_default()).string
};
/* harmony default export */ const docsSrc_SheetExamples = (_SheetExamples = SheetExamples, /*#__PURE__*/(0,react.memo)(_SheetExamples));
;// CONCATENATED MODULE: ./docsSrc/SheetProps.jsx
var _SheetProps;



const SheetProps_cnPrefix = 'sheetProps';
function SheetProps(props) {
  const {
    propTypesData
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: SheetProps_cnPrefix,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      children: "Prop types:"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("table", {
      className: "table is-bordered",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
        children: Object.entries(propTypesData).map(([k]) => /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: k
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: "???"
          })]
        }, k))
      })
    })]
  });
}
SheetProps.propTypes = {
  propTypesData: (prop_types_default()).node
};
/* harmony default export */ const docsSrc_SheetProps = (_SheetProps = SheetProps, /*#__PURE__*/(0,react.memo)(_SheetProps));
// EXTERNAL MODULE: ./docsSrc/utils.js
var docsSrc_utils = __webpack_require__(271);
;// CONCATENATED MODULE: ./docsSrc/sheetRenderer.js







(0,docsSrc_utils/* registerResizeMessage */.lt)();
function renderSandbox() {}
function sheetRenderer(CMP, sheets, options = {}) {
  const CoreComponent = (0,docsSrc_utils/* extractCore */.nr)(CMP);
  const subMenu = [];
  const renderedSheets = Object.entries(sheets).map(([key, value]) => {
    const href = key.replaceAll(/[^a-zA-Z0-9]/gi, '-').toLowerCase();
    subMenu.push({
      title: key,
      href
    });
    const render = typeof value === 'function' ? value() : value;
    const samples = Array.isArray(render) ? render : undefined;
    const source = Array.isArray(render) ? undefined : render.__source;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(docsSrc_SheetExamples, {
      id: href,
      title: key,
      samples: samples,
      source: source,
      children: Array.isArray(render) ? undefined : render
    }, key);
  });
  FrameMessenger/* FrameMessenger */.p.listenMessages((type, payload) => {
    if (type === FrameMessenger/* FrameMessenger */.p.TYPES.SCROLL_TO) {
      const {
        selector
      } = payload;
      document.querySelector(selector)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
  (0,client/* createRoot */.H)(document.getElementById('general')).render( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title/* default */.A, {
      is5: true,
      children: CoreComponent === CMP ? CoreComponent.displayName || CoreComponent.name : `${CoreComponent.displayName || CoreComponent.name} / ${CMP.displayName}`
    }), renderedSheets, options.sandbox && renderSandbox(options), options.pt && /*#__PURE__*/(0,jsx_runtime.jsx)(docsSrc_SheetProps, {
      propTypesData: CoreComponent.propTypes
    })]
  }));
  FrameMessenger/* FrameMessenger */.p.sendParentMessage(FrameMessenger/* FrameMessenger */.p.TYPES.SHEET_SECTIONS, {
    items: subMenu,
    sheetName: CoreComponent.displayName || CoreComponent.name,
    pathname: location.pathname
  });
  setTimeout(() => (0,docsSrc_utils/* resizeMessage */.EN)(), 50);
  return sheets;
}

/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _src_components_HelpText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(810);
/* harmony import */ var _sheetRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);



const styles = '.light.primary.link.info.success.warning.danger'.split('.');
function renderEach(cases, props) {
  return cases.map(it => (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .prepareSample */ .ws)(_src_components_HelpText__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {
    key: it,
    children: 'I am help children text',
    ...(it ? {
      [it]: true
    } : {}),
    ...props
  }));
}
const examples = {
  Colors: renderEach(styles)
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_sheetRenderer__WEBPACK_IMPORTED_MODULE_1__/* .sheetRenderer */ .r)(_src_components_HelpText__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, examples, {
  pt: true
}));

/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EN: () => (/* binding */ resizeMessage),
/* harmony export */   lt: () => (/* binding */ registerResizeMessage),
/* harmony export */   nr: () => (/* binding */ extractCore),
/* harmony export */   ws: () => (/* binding */ prepareSample)
/* harmony export */ });
/* unused harmony exports renderSample, prepareSource */
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FrameMessenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(312);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(848);



function extractCore(component) {
  let node = component;
  while (node.type) {
    node = node.type;
  }
  return node;
}
function prepareSample(CMP, props, sourcePropsExt = {}, config = {}) {
  const coreCmp = extractCore(CMP);
  const {
    __name,
    __source,
    ...sourcePropsReplacement
  } = sourcePropsExt || {};
  const cmpName = __name || coreCmp.displayName || coreCmp.name;
  const R = renderSample(CMP, props);
  const EXCLUDED_KEYS = ['key'].concat(Object.entries(sourcePropsReplacement).map(([k, v]) => v === undefined ? k : null)).filter(Boolean);
  const propValueProcessor = key => {
    if (EXCLUDED_KEYS.includes(key)) return undefined;
    if (sourcePropsReplacement[key]) return sourcePropsReplacement[key];
    return false;
  };
  R.__source = __source || prepareSource(cmpName, props, {
    ...config,
    propValueProcessor
  });
  return R;
}
function renderSample(CMP, props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CMP, {
    ...props
  });
}
function prepareSource(cmp, props, config = {}) {
  const {
    children,
    ...restProps
  } = props;
  const {
    multilineProps = 3,
    multilineChild,
    propValueProcessor
  } = config;
  const preparedChildren = children && propValueProcessor && propValueProcessor('children', children, props) || children;
  const preparedProps = Object.entries(restProps).map(([key, value]) => {
    if (propValueProcessor) {
      const processed = propValueProcessor(key, value, props);
      if (processed === undefined) return null;
      if (processed) return `${key}=${processed}`;
    }
    if (value === null) return `${key}={null}`;
    if (value === undefined) return null;
    if (value === true) return key;
    if (value === false) return `${key}={false}`;
    if (typeof value === 'string') return `${key}="${value}"`;
    return `${key}={${value}}`;
  }).filter(Boolean);
  const propsTpl = preparedProps.join('[*PROP_BETWEEN*]');
  const propsSrc = propsTpl ? `[*PROPS_BEFORE*]${propsTpl}[*PROPS_AFTER*]` : '';
  const mainSrc = `${cmp}[*CMP_NAME*]${propsSrc}`;
  const templated = preparedChildren ? `<${mainSrc}>[*CHILD_BEFORE*]${preparedChildren}[*CHILD_AFTER*]</${cmp}>` : `<${mainSrc} />`;
  const multiProps = multilineProps === true || multilineProps && preparedProps.length >= multilineProps || false;
  return templated.replaceAll(/\[\*PROP_BETWEEN\*]/g, multiProps ? '\r\n  ' : ' ').replace(/\[\*PROPS_BEFORE\*]/, multiProps ? '\r\n  ' : ' ').replace(/\[\*PROPS_AFTER\*]/, multiProps ? '\r\n' : '').replace(/\[\*CMP_NAME\*]/, multiProps ? '' : '').replace(/\[\*CHILD_BEFORE\*]/, multiProps || multilineChild ? '\r\n  ' : '').replace(/\[\*CHILD_AFTER\*]/, multiProps || multilineChild ? '\r\n' : '');
}
function resizeMessage() {
  const html = document.querySelector('html');
  html.style.height = '0';
  _FrameMessenger__WEBPACK_IMPORTED_MODULE_1__/* .FrameMessenger */ .p.sendParentMessage(_FrameMessenger__WEBPACK_IMPORTED_MODULE_1__/* .FrameMessenger */ .p.TYPES.FRAME_RESIZE, {
    height: html.scrollHeight,
    url: window.location.href
  });
}
function registerResizeMessage() {
  const onWindowResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(resizeMessage, 250);
  window.addEventListener('resize', onWindowResize);
}

/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(790);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(848);
var _ref, _HelpText;






function HelpText(props) {
  const {
    as: HtmlTag = 'div',
    children,
    className,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    light,
    ...restProps
  } = props;
  const classNamesValue = classnames__WEBPACK_IMPORTED_MODULE_2___default()('help', (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getStyleClassName */ .Zb)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getBrightnessClassName */ .P2)({
    light
  }), className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(HtmlTag, {
    ...restProps,
    className: classNamesValue,
    children: children
  });
}
HelpText.propTypes = {
  as: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  primary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  info: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  warning: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  success: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  danger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  light: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref = (_HelpText = HelpText, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_HelpText)), (0,_withRef__WEBPACK_IMPORTED_MODULE_3__/* .withForwardedRef */ .i)(_ref));

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

/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ withForwardedRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(848);


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
    const Wrapper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
      if (ref && props[propName]) {
        throw new Error(`withRef error: forwarded ref property collision (property name is '${propName}')`);
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WrappedComponent, {
        ...props,
        [propName]: ref || props[propName]
      });
    });
    Wrapper.displayName = `WithRef(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    Wrapper.type = WrappedComponent;
    return Wrapper;
  };
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(230)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);