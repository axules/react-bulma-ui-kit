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
  const { __name, __source, ...sourcePropsReplacement } = sourcePropsExt || {};
  const cmpName = __name || coreCmp.displayName || coreCmp.name;

  const R = renderSample(CMP, props);

  const EXCLUDED_KEYS = [ 'key' ]
    .concat(Object.entries(sourcePropsReplacement).map(([k, v]) => (v === undefined ? k : null)))
    .filter(Boolean);

  const propValueProcessor = (key) => {
    if (EXCLUDED_KEYS.includes(key)) return undefined;
    if (sourcePropsReplacement[key]) return sourcePropsReplacement[key];
    return false;
  };

  R.__source = __source || prepareSource(cmpName, props, { ...config, propValueProcessor });
  return R;
}

export function renderSample(CMP, props) {
  return <CMP {...props} />;
}

export function prepareSource(cmp, props, config = {}) {
  const { children, ...restProps } = props;
  const { multilineProps = 3, multilineChild, propValueProcessor } = config;

  const preparedChildren = children && propValueProcessor && propValueProcessor('children', children, props) || children;
  const preparedProps = Object.entries(restProps)
    .map(([key, value]) => {
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
    })
    .filter(Boolean);

  const propsTpl = preparedProps.join('[*PROP_BETWEEN*]');
  const propsSrc = propsTpl ? `[*PROPS_BEFORE*]${propsTpl}[*PROPS_AFTER*]` : '';

  const mainSrc = `${cmp}[*CMP_NAME*]${propsSrc}`;
  const templated = preparedChildren
    ? `<${mainSrc}>[*CHILD_BEFORE*]${preparedChildren}[*CHILD_AFTER*]</${cmp}>`
    : `<${mainSrc} />`;
  const multiProps = multilineProps === true
    || (multilineProps && preparedProps.length >= multilineProps)
    || false;

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
