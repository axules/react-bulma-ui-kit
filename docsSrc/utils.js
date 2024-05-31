import debounce from 'lodash.debounce';

import { FrameMessenger } from './FrameMessenger';


export function extractCore(component) {
  let node = component;
  while (node.type) {
    node = node.type;
  }
  return node;
}

export function prepareSample(CMP, props, sourcePropsExt = {}) {
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

  R.__source = prepareSource(cmpName, srcProps);
  return R;
}

export function renderSample(CMP, props) {
  return <CMP {...props} />;
}

export function prepareSource(cmp, props) {
  const { children, ...restProps } = props;
  const propsSrc = Object.entries(restProps)
    .map(([key, value]) => {
      if (value === null) return `${key}={null}`;
      if (value === undefined) return null;
      if (value === true) return key;
      if (value === false) return `${key}={false}`;
      if (typeof value === 'string') return `${key}="${value}"`;
      return `${key}={${value}}`;
    })
    .filter(Boolean)
    .join(' ');

  const mainSrc = [cmp, propsSrc].filter(Boolean).join(' ');
  return children
    ? `<${mainSrc}>\r\n  ${children}\r\n</${cmp}>`
    : `<${mainSrc} />`;
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
