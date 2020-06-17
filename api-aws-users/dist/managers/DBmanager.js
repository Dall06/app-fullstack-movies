"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _dynamoose = _interopRequireDefault(require("dynamoose"));

_dynamoose["default"].aws.sdk.config.update({
  region: 'us-east-1'
});

var DBManager = /*#__PURE__*/function () {
  function DBManager(tableName, schema) {
    (0, _classCallCheck2["default"])(this, DBManager);
    (0, _defineProperty2["default"])(this, "db", void 0);
    // definicion de las tablas
    this.db = _dynamoose["default"].model(tableName, schema);
  } // eslint-disable-next-line class-methods-use-this


  (0, _createClass2["default"])(DBManager, [{
    key: "toDBFormat",
    value: function toDBFormat() {
      throw new Error('Method not implemented');
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getKey",
    value: function getKey() {
      throw new Error('Method not implemented');
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "fromDBResponse",
    value: function fromDBResponse() {
      throw new Error('Method not implemented');
    }
  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this = this;

        var entities;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.db.scan().exec();

              case 2:
                entities = _context.sent;
                return _context.abrupt("return", entities.map(function (e) {
                  return _this.fromDBResponse(e);
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "getByKey",
    value: function () {
      var _getByKey = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var entity;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.db.get(this.getKey());

              case 2:
                entity = _context2.sent;
                return _context2.abrupt("return", entity ? this.fromDBResponse(entity) : null);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getByKey() {
        return _getByKey.apply(this, arguments);
      }

      return getByKey;
    }()
  }, {
    key: "getByEmail",
    value: function () {
      var _getByEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(email) {
        var _this2 = this;

        var entities;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.db.query('email').eq(email).exec();

              case 2:
                entities = _context3.sent;
                return _context3.abrupt("return", entities.map(function (e) {
                  return _this2.fromDBResponse(e);
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getByEmail(_x) {
        return _getByEmail.apply(this, arguments);
      }

      return getByEmail;
    }()
  }, {
    key: "create",
    value: function create() {
      return this.db.create(this.toDBFormat()); // promesa
    }
  }, {
    key: "update",
    value: function update() {
      return this.db.update(this.getKey(), this.toDBFormat()); // el segundo argumento son los datos que van a cambiar
    }
  }, {
    key: "delete",
    value: function _delete() {
      return this.db["delete"](this.getKey());
    }
  }]);
  return DBManager;
}();

exports["default"] = DBManager;