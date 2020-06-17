"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _httpStatusCodes = require("http-status-codes");

var _response = require("../utils/response");

var BaseController = /*#__PURE__*/function () {
  // clase padre de todos los controladores de la aplicación
  function BaseController(app) {
    (0, _classCallCheck2["default"])(this, BaseController);
    (0, _defineProperty2["default"])(this, "app", void 0);
    this.app = app;
    this.initialize();
  } // eslint-disable-next-line class-methods-use-this


  (0, _createClass2["default"])(BaseController, [{
    key: "initialize",
    value: function initialize() {
      // definir los paths, rutas, metodos CRUD
      throw new Error('Method not implented');
    }
  }], [{
    key: "mount",
    value: function mount() {
      // se asignan a app
      throw new Error('Method not implented');
    }
  }, {
    key: "handleUnknownError",
    value: function handleUnknownError(res, e) {
      //
      console.error(e);
      (0, _response.respond)(res, _httpStatusCodes.INTERNAL_SERVER_ERROR, {
        message: e.message // body

      });
    }
  }]);
  return BaseController;
}();

exports["default"] = BaseController;
(0, _defineProperty2["default"])(BaseController, "basePath", '');