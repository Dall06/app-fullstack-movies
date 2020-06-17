"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var File = /*#__PURE__*/function () {
  function File(name, lastModified, size) {
    (0, _classCallCheck2["default"])(this, File);
    (0, _defineProperty2["default"])(this, "name", void 0);
    (0, _defineProperty2["default"])(this, "lastModified", void 0);
    (0, _defineProperty2["default"])(this, "size", void 0);
    this.name = name;
    this.lastModified = lastModified;
    this.size = size;
  }

  (0, _createClass2["default"])(File, null, [{
    key: "fromS3Item",
    value: function fromS3Item(item) {
      return new File(item.Key, item.LastModified, item.Size);
    }
  }]);
  return File;
}();

exports["default"] = File;