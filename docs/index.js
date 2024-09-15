"use strict";
(self["webpackChunkreact_bulma_ui_kit"] = self["webpackChunkreact_bulma_ui_kit"] || []).push([[57],{

/***/ 312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ FrameMessenger)
/* harmony export */ });
class FrameMessengerClass {
  TYPES = {
    FRAME_RESIZE: 'FRAME_RESIZE',
    SHEET_SECTIONS: 'SHEET_SECTIONS',
    SHEET_META: 'SHEET_META',
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

/***/ 806:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./src/components/Block.jsx
var Block = __webpack_require__(891);
// EXTERNAL MODULE: ./src/components/Box.jsx
var Box = __webpack_require__(232);
// EXTERNAL MODULE: ./src/components/Button.jsx
var Button = __webpack_require__(162);
// EXTERNAL MODULE: ./src/components/Tag.jsx
var Tag = __webpack_require__(572);
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
;// CONCATENATED MODULE: ./docsSrc/components/MainSheetsMenu.jsx
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
      children: "Main"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: classnames_default()(cnPrefix, 'menu-list'),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "?",
          children: "Home"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
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
/* harmony default export */ const components_MainSheetsMenu = (_MainSheetsMenu = MainSheetsMenu, /*#__PURE__*/(0,react.memo)(_MainSheetsMenu));
;// CONCATENATED MODULE: ./docsSrc/components/MainPage.jsx
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
  const [frameMeta, setFrameMeta] = (0,react.useState)(null);
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
        case FrameMessenger/* FrameMessenger */.p.TYPES.SHEET_META:
          {
            setFrameMeta(payload);
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
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_MainSheetsMenu, {
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
        }), frameMeta && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [frameMeta.description && /*#__PURE__*/(0,jsx_runtime.jsx)(Block/* default */.A, {
            children: frameMeta.description
          }), frameMeta.documentation && /*#__PURE__*/(0,jsx_runtime.jsxs)(Block/* default */.A, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: ["More about ", /*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* default */.A, {
                children: selectedSheet.name
              }), " styles here "]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              href: frameMeta.documentation,
              target: "_blank",
              rel: "noreferrer",
              children: frameMeta.documentation
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
          name: "SheetFrame",
          title: selectedSheet.name,
          src: url,
          onLoad: onLoadIframe
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Title/* default */.A, {
          is2: true,
          children: ['<- ', "Select component in menu"]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Box/* default */.A, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: ["More information about ", /*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* default */.A, {
              primary: true,
              children: "Bulma"
            }), " is here "]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://bulma.io/documentation",
            target: "_blank",
            rel: "noreferrer",
            children: "https://bulma.io/documentation"
          })]
        })]
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
/* harmony default export */ const components_MainPage = (_MainPage = MainPage, /*#__PURE__*/(0,react.memo)(_MainPage));
;// CONCATENATED MODULE: ./docsSrc/index.js



(0,client/* createRoot */.H)(document.getElementById('general')).render( /*#__PURE__*/(0,jsx_runtime.jsx)(components_MainPage, {
  sheets: window.__SHEETS__
}));

/***/ }),

/***/ 891:
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
var _Block;




function Block(props) {
  const {
    as: HtmlTag = 'div',
    className,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HtmlTag, {
    ...restProps,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('block', className),
    children: children
  });
}
Block.propTypes = {
  as: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Block = Block, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Block));

/***/ }),

/***/ 232:
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
var _Box;




function Box(props) {
  const {
    as: HtmlTag = 'div',
    className,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HtmlTag, {
    ...restProps,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('box', className),
    children: children
  });
}
Box.propTypes = {
  as: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Box = Box, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Box));

/***/ }),

/***/ 162:
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
var _ref, _Button;






function Button(props) {
  const {
    as: HtmlTag = 'button',
    children,
    className,
    loading,
    forwardedRef,
    skeleton,
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
  const classNamesValue = classnames__WEBPACK_IMPORTED_MODULE_2___default()('button', (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getStyleClassName */ .Zb)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getSizeClassName */ .bP)({
    small,
    medium,
    large
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getBrightnessClassName */ .P2)({
    white,
    light,
    dark,
    black,
    text,
    ghost
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .skeletonClassName */ .DV)({
    skeleton
  }), loading && 'is-loading', outlined && 'is-outlined', rounded && 'is-rounded', fullWidth && 'is-fullwidth', inverted && 'is-inverted', className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(HtmlTag, {
    ref: forwardedRef,
    type: type ?? undefined,
    ...restProps,
    disabled: disabled || loading,
    className: classNamesValue,
    children: children
  });
}
Button.propTypes = {
  as: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  outlined: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  skeleton: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rounded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  forwardedRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  white: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  light: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  dark: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  black: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  ghost: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  primary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  info: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  warning: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  success: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  danger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  small: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  medium: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  large: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  inverted: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref = (_Button = Button, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Button)), (0,_withRef__WEBPACK_IMPORTED_MODULE_3__/* .withForwardedRef */ .i)(_ref));

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

/***/ 572:
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
var _Tag;






function Tag(props) {
  const {
    as: HtmlTag = 'span',
    children,
    className,
    onClose,
    forwardedRef,
    rounded,
    hasHover,
    isDelete,
    danger,
    success,
    warning,
    info,
    link,
    primary,
    medium,
    large,
    white,
    light,
    dark,
    black,
    hasAddons,
    ...restProps
  } = props;
  const classNamesValue = classnames__WEBPACK_IMPORTED_MODULE_2___default()('tag', (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getStyleClassName */ .Zb)({
    danger,
    success,
    warning,
    info,
    link,
    primary
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getSizeClassName */ .bP)({
    medium,
    large
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getBrightnessClassName */ .P2)({
    white,
    light,
    dark,
    black
  }), hasHover && 'is-hoverable', rounded && 'is-rounded', isDelete && 'is-delete', hasAddons && 'has-addons', className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(HtmlTag, {
    ref: forwardedRef,
    ...restProps,
    className: classNamesValue,
    children: [children, onClose && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DeleteButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      onClick: onClose
    })]
  });
}
Tag.propTypes = {
  as: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  forwardedRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  rounded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  hasHover: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  white: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  light: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  dark: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  black: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  primary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  info: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  warning: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  success: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  danger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  medium: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  large: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  hasAddons: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Tag = Tag, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Tag));

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
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(806)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);