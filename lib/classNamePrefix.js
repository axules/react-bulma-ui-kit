"use strict";

exports.__esModule = true;
exports.classNamePrefix = classNamePrefix;
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function classNamePrefix(prefix) {
  const fn = function (suffix, ...className) {
    const combined = `${prefix}${suffix ?? ''}`;
    return className.length ? (0, _classnames.default)(combined, ...className) : combined;
  };
  fn.toString = () => prefix;
  fn.valueOf = () => prefix;
  return fn;
}
//# sourceMappingURL=classNamePrefix.js.map