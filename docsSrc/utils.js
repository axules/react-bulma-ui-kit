export function extractCore(component) {
  let node = component;
  while (node.type) {
    node = node.type;
  }
  return node;
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
  return children
    ? `<${cmp} ${propsSrc}>${children}</${cmp}>`
    : `<${cmp} ${propsSrc}/>`;
}
