"use strict";

exports.__esModule = true;
exports.classNamePrefix = classNamePrefix;
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function classNamePrefix(prefix) {
  const fn = function (suffix) {
    const combined = "" + prefix + (suffix != null ? suffix : '');
    for (var _len = arguments.length, className = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      className[_key - 1] = arguments[_key];
    }
    return className.length ? (0, _classnames.default)(combined, ...className) : combined;
  };
  fn.toString = () => prefix;
  fn.valueOf = () => prefix;
  return fn;
}
//# sourceMappingURL=classNamePrefix.js.map