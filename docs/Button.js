"use strict";
(self["webpackChunkreact_bulma_ui_kit"] = self["webpackChunkreact_bulma_ui_kit"] || []).push([[939],{

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
SheetExamples.defaultProps = {};
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
SheetProps.defaultProps = {};
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)(docsSrc_SheetExamples, {
      id: href,
      title: key,
      samples: Array.isArray(value) ? value : undefined,
      source: Array.isArray(value) ? undefined : value.__source,
      children: Array.isArray(value) ? undefined : value
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
  (0,docsSrc_utils/* resizeMessage */.EN)();
  return sheets;
}

/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

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
;// CONCATENATED MODULE: ./src/withRef.js


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
    const Wrapper = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
      if (ref && props[propName]) {
        throw new Error(`withRef error: forwarded ref property collision (property name is '${propName}')`);
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)(WrappedComponent, {
        ...props,
        [propName]: ref || props[propName]
      });
    });
    Wrapper.displayName = `WithRef(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    Wrapper.type = WrappedComponent;
    return Wrapper;
  };
}
// EXTERNAL MODULE: ./src/components/utils.js
var utils = __webpack_require__(13);
;// CONCATENATED MODULE: ./src/components/Button.jsx
var _ref, _Button;






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
  const classNamesValue = classnames_default()('button', (0,utils/* getStyleClassName */.Zb)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0,utils/* getSizeClassName */.bP)({
    small,
    medium,
    large
  }), (0,utils/* getBrightnessClassName */.P2)({
    white,
    light,
    dark,
    black,
    text,
    ghost
  }), loading && 'is-loading', outlined && 'is-outlined', rounded && 'is-rounded', fullWidth && 'is-fullwidth', isDelete && 'is-delete', inverted && 'is-inverted', className);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(HtmlTag, {
    ref: forwardedRef,
    type: type ?? undefined,
    ...restProps,
    disabled: disabled || loading,
    className: classNamesValue,
    children: children
  });
}
Button.propTypes = {
  as: (prop_types_default()).any,
  children: (prop_types_default()).node,
  className: (prop_types_default()).string,
  loading: (prop_types_default()).bool,
  disabled: (prop_types_default()).bool,
  outlined: (prop_types_default()).bool,
  type: (prop_types_default()).any,
  rounded: (prop_types_default()).bool,
  forwardedRef: (prop_types_default()).any,
  isDelete: (prop_types_default()).bool,
  white: (prop_types_default()).bool,
  light: (prop_types_default()).bool,
  dark: (prop_types_default()).bool,
  black: (prop_types_default()).bool,
  text: (prop_types_default()).bool,
  ghost: (prop_types_default()).bool,
  primary: (prop_types_default()).bool,
  link: (prop_types_default()).bool,
  info: (prop_types_default()).bool,
  warning: (prop_types_default()).bool,
  success: (prop_types_default()).bool,
  danger: (prop_types_default()).bool,
  small: (prop_types_default()).bool,
  medium: (prop_types_default()).bool,
  large: (prop_types_default()).bool,
  inverted: (prop_types_default()).bool,
  fullWidth: (prop_types_default()).bool
};
/* harmony default export */ const components_Button = (_ref = (_Button = Button, /*#__PURE__*/(0,react.memo)(_Button)), withForwardedRef(_ref));
;// CONCATENATED MODULE: ./src/components/Buttons.jsx
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
  const classNamesValue = classnames_default()('buttons', hasAddons && 'has-addons', nowrap && 'is-flex-wrap-nowrap', (0,utils/* getAlignClassName */.HA)({
    left,
    centered,
    right
  }), className);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ...restProps,
    className: classNamesValue,
    children: children
  });
}
Buttons.propTypes = {
  children: (prop_types_default()).node,
  className: (prop_types_default()).string,
  hasAddons: (prop_types_default()).bool,
  nowrap: (prop_types_default()).bool,
  left: (prop_types_default()).bool,
  centered: (prop_types_default()).bool,
  right: (prop_types_default()).bool
};
/* harmony default export */ const components_Buttons = (_Buttons = Buttons, /*#__PURE__*/(0,react.memo)(_Buttons));
// EXTERNAL MODULE: ./docsSrc/sheetRenderer.js + 8 modules
var sheetRenderer = __webpack_require__(73);
// EXTERNAL MODULE: ./docsSrc/utils.js
var docsSrc_utils = __webpack_require__(271);
;// CONCATENATED MODULE: ./docsSrc/sheets/Button.sheet.js





const styles = '.primary.link.success.warning.danger'.split('.');
const brightness = 'white.light.dark.black'.split('.');
const sizes = '.small.normal.large'.split('.');
function renderEach(cases, props) {
  return cases.map(it => (0,docsSrc_utils/* prepareSample */.ws)(components_Button, {
    key: it,
    children: 'click me',
    ...(it ? {
      [it]: true
    } : {}),
    ...props
  }));
}
const examples = {
  Colors: renderEach(styles),
  'Light colors': renderEach(styles, {
    light: true
  }),
  'Inverted colors': renderEach(styles, {
    inverted: true
  }),
  'Dark colors': renderEach(styles, {
    dark: true
  }),
  Outlined: renderEach(styles, {
    outlined: true
  }),
  Brightness: renderEach(brightness),
  Sizes: renderEach(sizes),
  Buttons: (() => {
    const R = /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Buttons, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Button, {
        primary: true,
        children: "Save"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Button, {
        light: true,
        children: "Cancel"
      })]
    });
    R.__source = `
<Buttons>
  <Button primary>Save</Button>
  <Button light>Cancel</Button>
</Buttons>
    `.trim();
    return [R];
  })()
};
/* harmony default export */ const Button_sheet = ((0,sheetRenderer/* sheetRenderer */.r)(components_Button, examples, {
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
function prepareSample(CMP, props, sourcePropsExt = {}) {
  const coreCmp = extractCore(CMP);
  const cmpName = sourcePropsExt.__name || coreCmp.displayName || coreCmp.name;
  const R = renderSample(CMP, props);
  const EXCLUDED_KEYS = ['key'].concat(Object.entries(sourcePropsExt).map(([k, v]) => v === undefined ? k : null)).filter(Boolean);
  const srcProps = {
    ...props,
    ...sourcePropsExt
  };
  EXCLUDED_KEYS.forEach(k => {
    delete srcProps[k];
  });
  R.__source = prepareSource(cmpName, srcProps);
  return R;
}
function renderSample(CMP, props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CMP, {
    ...props
  });
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
  const mainSrc = [cmp, propsSrc].filter(Boolean).join(' ');
  return children ? `<${mainSrc}>\r\n  ${children}\r\n</${cmp}>` : `<${mainSrc} />`;
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
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(567)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);