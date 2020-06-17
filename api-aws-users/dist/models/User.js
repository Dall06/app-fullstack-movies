"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _DBmanager = _interopRequireDefault(require("../managers/DBmanager"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var userDBSchema = {
  email: {
    type: String,
    hashKey: true // asi se define partition key

  },
  password: {
    type: String,
    rangeKye: true
  },
  accountType: String,
  createdAt: String
};

var User = /*#__PURE__*/function (_DBManager) {
  (0, _inherits2["default"])(User, _DBManager);

  var _super = _createSuper(User);

  function User(email, accountType, password) {
    var _this;

    var createdAt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Date();
    (0, _classCallCheck2["default"])(this, User);
    _this = _super.call(this, 'db-aws-user', userDBSchema); // se manda llamar el constructor de la clase padre

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "email", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "password", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "accountType", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createdAt", void 0);
    _this.email = email;
    _this.password = password;
    _this.accountType = accountType;
    _this.createdAt = createdAt;
    return _this;
  }

  (0, _createClass2["default"])(User, [{
    key: "toDBFormat",
    value: function toDBFormat() {
      return _objectSpread(_objectSpread({}, this), {}, {
        // spread,
        createdAt: this.createdAt.toString()
      });
    }
  }, {
    key: "getKey",
    value: function getKey() {
      return this.email;
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "fromDBResponse",
    value: function fromDBResponse(user) {
      return new User(user.email, user.accountType, user.password, new Date(user.createdAt));
    }
  }], [{
    key: "newUser",
    value: function newUser(email, accountType, password, createdAt) {
      return new User(email, accountType, password, createdAt);
    }
  }]);
  return User;
}(_DBmanager["default"]);

exports["default"] = User;