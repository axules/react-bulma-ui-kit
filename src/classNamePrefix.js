import classNames from 'classnames';


export function classNamePrefix(prefix) {
  const fn = function (suffix, ...className) {
    const combined = `${prefix}${suffix ?? ''}`;
    return className.length ? classNames(combined, ...className) : combined;
  };

  fn.toString = () => prefix;
  fn.valueOf = () => prefix;

  return fn;
}