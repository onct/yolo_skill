"use strict";

var _regeneratorRuntime2 = require("@babel/runtime-corejs3/regenerator");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));
var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));
var _fill = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/fill"));
var _flat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat"));
var _context, _context2, _context3, _context4, _context5;
var _marked = /*#__PURE__*/_regeneratorRuntime2.mark(generatorFunc);
// "babel": "babel babel/index.js -o babel/output.js",
// 解决@babel/preset-env 转换不了filter、find、fill、flat问题，但是会发现打包后require进来，打包体积会变大
// import '@babel/polyfill'

// 测试babel转化
var arrow = function arrow() {
  console.log("测试箭头函数");
};
var p = new _promise["default"](function (resolve, reject) {
  resolve("测试Promise");
});
var list = (0, _map["default"])(_context = [1, 2, 3, 4]).call(_context, function (item) {
  return item * 2;
});

// @babel/preset-env 转换不了filter、find、fill、flat等等
var filter = (0, _filter["default"])(_context2 = [1, 2, 3, 4]).call(_context2, function (item) {
  return item > 2;
});
var find = (0, _find["default"])(_context3 = [1, 2, 3, 4]).call(_context3, function (item) {
  return item === 2;
});
var fill = (0, _fill["default"])(_context4 = [1, 2, 3, 4]).call(_context4, 0, 2, 4);
var flat = (0, _flat["default"])(_context5 = [1, 2, [3, 4]]).call(_context5);

// 测试async、Generator
function asyncFunc() {
  return _asyncFunc.apply(this, arguments);
}
function _asyncFunc() {
  _asyncFunc = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return arrow();
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee);
  }));
  return _asyncFunc.apply(this, arguments);
}
function generatorFunc() {
  return _regenerator["default"].wrap(function generatorFunc$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.next = 2;
        return arrow();
      case 2:
      case "end":
        return _context6.stop();
    }
  }, _marked);
}
// 测试一下class语法
var NewClass = /*#__PURE__*/function () {
  function NewClass() {
    (0, _classCallCheck2["default"])(this, NewClass);
    this.name = "NewClass";
  }
  return (0, _createClass2["default"])(NewClass, [{
    key: "getName",
    value: function getName() {
      console.log(this.name);
    }
  }]);
}();
