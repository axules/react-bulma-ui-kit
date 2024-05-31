import debounce from 'lodash.debounce';

import { FrameMessenger } from './FrameMessenger';


export function extractCore(component) {
  let node = component;
  while (node.type) {
    node = node.type;
  }
  return node;
}

export function prepareSample(CMP, props, sourcePropsExt = {}, config = {}) {
  const coreCmp = extractCore(CMP);
  const cmpName = sourcePropsExt.__name || coreCmp.displayName || coreCmp.name;

  const R = renderSample(CMP, props);

  const EXCLUDED_KEYS = [ 'key' ]
    .concat(Object.entries(sourcePropsExt).map(([k, v]) => (v === undefined ? k : null)))
    .filter(Boolean);
  const srcProps = { ...props, ...sourcePropsExt };
  EXCLUDED_KEYS.forEach((k) => {
    delete srcProps[k];
  });

  R.__source = prepareSource(cmpName, srcProps, config);
  return R;
}

export function renderSample(CMP, props) {
  return <CMP {...props} />;
}

export function prepareSource(cmp, props, config = {}) {
  const { children, ...restProps } = props;
  const { multilineProps = 3, multilineChild } = config;
  const preparedProps = Object.entries(restProps)
    .map(([key, value]) => {
      if (value === null) return `${key}={null}`;
      if (value === undefined) return null;
      if (value === true) return key;
      if (value === false) return `${key}={false}`;
      if (typeof value === 'string') return `${key}="${value}"`;
      return `${key}={${value}}`;
    })
    .filter(Boolean);

  const propsTpl = preparedProps.join('[*PROP_BETWEEN*]');
  const propsSrc = propsTpl ? `[*PROPS_BEFORE*]${propsTpl}[*PROPS_AFTER*]` : '';

  const mainSrc = `${cmp}[*CMP_NAME*]${propsSrc}`;
  const templated = children
    ? `<${mainSrc}>[*CHILD_BEFORE*]${children}[*CHILD_AFTER*]</${cmp}>`
    : `<${mainSrc} />`;
  const multiProps = multilineProps === true
    || (multilineProps && preparedProps.length >= multilineProps)
    || false;
  console.log(multiProps);
  return templated
    .replaceAll(/\[\*PROP_BETWEEN\*]/g, multiProps ? '\r\n  ' : ' ')
    .replace(/\[\*PROPS_BEFORE\*]/, multiProps ? '\r\n  ' : ' ')
    .replace(/\[\*PROPS_AFTER\*]/, multiProps ? '\r\n' : '')
    .replace(/\[\*CMP_NAME\*]/, multiProps ? '' : '')
    .replace(/\[\*CHILD_BEFORE\*]/, multiProps || multilineChild ? '\r\n  ' : '')
    .replace(/\[\*CHILD_AFTER\*]/, multiProps || multilineChild ? '\r\n' : '');
}

export function resizeMessage() {
  const html = document.querySelector('html');
  html.style.height = '0';

  FrameMessenger.sendParentMessage(
    FrameMessenger.TYPES.FRAME_RESIZE,
    { height: html.scrollHeight, url: window.location.href }
  );
}

export function registerResizeMessage() {
  const onWindowResize = debounce(resizeMessage, 250);
  window.addEventListener('resize', onWindowResize);
}
