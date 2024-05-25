export function extractCore(component) {
  let node = component;
  while (node.type) {
    node = node.type;
  }
  return node;
}
