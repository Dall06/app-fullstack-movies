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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _httpStatusCodes = require("http-status-codes");

var _response = require("../utils/response");

var _BaseController2 = _interopRequireDefault(require("./BaseController"));

var _User = _interopRequireDefault(require("../models/User"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// export es para importar a cualquier otro archivo
var UserController = /*#__PURE__*/function (_BaseController) {
  (0, _inherits2["default"])(UserController, _BaseController);

  var _super = _createSuper(UserController);

  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(UserController, [{
    key: "initialize",
    value: function initialize() {
      // endpoints -> es cada una de las funciones que se pueden ejecutar
      // Get users
      this.app.get(UserController.basePath, UserController.getUsers); // login

      this.app.post("".concat(UserController.basePath, "login"), UserController.Login); // CREATE User

      this.app.post(UserController.basePath, UserController.createUser);
    }
  }], [{
    key: "mount",
    value: function mount(app) {
      return new UserController(app);
    }
  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var movies;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return new _User["default"]().get();

              case 3:
                movies = _context.sent;
                (0, _response.respond)(res, _httpStatusCodes.OK, movies);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                UserController.handleUnknownError(res, _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getUsers(_x, _x2) {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
  }, {
    key: "Login",
    value: function () {
      var _Login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var expectedParams, validationErrors, _req$body, email, password, user;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                expectedParams = ['email', 'password'];
                validationErrors = []; // se iran agregando los errores

                expectedParams.forEach(function (param) {
                  // se revisa si el body no tiene cada propiedad, entonces agrega la cadena parameter was not found...
                  if (!req.body[param]) {
                    validationErrors.push("".concat(param, " parameter was not found in the request"));
                  }
                });

                if (!(validationErrors.length > 0)) {
                  _context2.next = 7;
                  break;
                }

                (0, _response.respond)(res, _httpStatusCodes.BAD_REQUEST, {
                  message: validationErrors.join('\\n')
                });
                return _context2.abrupt("return");

              case 7:
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context2.next = 10;
                return new _User["default"]().getByEmail(email);

              case 10:
                user = _context2.sent;

                if (user[0].password !== password) {
                  user = null;
                  console.log('kk');
                } else {
                  console.log('welcome');
                }

                if (user) {
                  _context2.next = 15;
                  break;
                }

                (0, _response.respond)(res, _httpStatusCodes.NOT_FOUND);
                return _context2.abrupt("return");

              case 15:
                (0, _response.respond)(res, _httpStatusCodes.OK, user);
                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](0);
                UserController.handleUnknownError(res, _context2.t0);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 18]]);
      }));

      function Login(_x3, _x4) {
        return _Login.apply(this, arguments);
      }

      return Login;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var expectedParams, validationErrors, _req$body2, email, accountType, password, user;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                expectedParams = ['email', 'password', 'accountType'];
                validationErrors = []; // se iran agregando los errores

                expectedParams.forEach(function (param) {
                  // se revisa si el body no tiene cada propiedad, entonces agrega la cadena parameter was not found...
                  if (!req.body[param]) {
                    validationErrors.push("".concat(param, " parameter was not found in the request"));
                  }
                });

                if (!(validationErrors.length > 0)) {
                  _context3.next = 7;
                  break;
                }

                (0, _response.respond)(res, _httpStatusCodes.BAD_REQUEST, {
                  message: validationErrors.join('\\n')
                });
                return _context3.abrupt("return");

              case 7:
                // validar que se ingresen los parametros
                _req$body2 = req.body, email = _req$body2.email, accountType = _req$body2.accountType, password = _req$body2.password;
                user = _User["default"].newUser(email, accountType, password);
                _context3.next = 11;
                return user.create();

              case 11:
                (0, _response.respond)(res, _httpStatusCodes.OK, user);
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                UserController.handleUnknownError(res, _context3.t0);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 14]]);
      }));

      function createUser(_x5, _x6) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }() // End: endpoints

  }]);
  return UserController;
}(_BaseController2["default"]);

exports["default"] = UserController;
(0, _defineProperty2["default"])(UserController, "basePath", '/api/v2/users');