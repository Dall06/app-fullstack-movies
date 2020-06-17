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

var _uuid = require("uuid");

var _DBmanager = _interopRequireDefault(require("../managers/DBmanager"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var userDBSchema = {
  id: {
    type: String,
    hashKey: true // asi se define partition key

  },
  name: String,
  description: String,
  genre: String,
  duration: String,
  year: String,
  uploadedAt: String,
  imageUrl: String,
  movieUrl: String
};

var Movie = /*#__PURE__*/function (_DBManager) {
  (0, _inherits2["default"])(Movie, _DBManager);

  var _super = _createSuper(Movie);

  function Movie(id, name, description, genre, duration, year, imageUrl, movieUrl) {
    var _this;

    var uploadedAt = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : new Date();
    (0, _classCallCheck2["default"])(this, Movie);
    _this = _super.call(this, 'db-aws-movies', userDBSchema); // se manda llamar el constructor de la clase padre

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "description", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "genre", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "duration", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "year", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "imageUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "movieUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "uploadedAt", void 0);
    _this.id = id;
    _this.name = name;
    _this.description = description;
    _this.genre = genre;
    _this.duration = duration;
    _this.year = year;
    _this.imageUrl = imageUrl;
    _this.movieUrl = movieUrl;
    _this.uploadedAt = uploadedAt;
    return _this;
  }

  (0, _createClass2["default"])(Movie, [{
    key: "toDBFormat",
    value: function toDBFormat() {
      return _objectSpread(_objectSpread({}, this), {}, {
        // spread,
        uploadedAt: this.uploadedAt.toString()
      });
    }
  }, {
    key: "toDBUpdateFormat",
    value: function toDBUpdateFormat() {
      var updates = this.toDBFormat();

      if (updates.id) {
        delete updates.id;
      }

      return updates;
    }
  }, {
    key: "getKey",
    value: function getKey() {
      return {
        id: this.id
      };
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "fromDBResponse",
    value: function fromDBResponse(movie) {
      return new Movie(movie.id, movie.name, movie.description, movie.genre, movie.duration, movie.year, movie.imageUrl, movie.movieUrl, new Date(movie.uploadedAt));
    }
  }], [{
    key: "newMovie",
    value: function newMovie(name, description, genre, duration, year, uploadedAt, imageUrl, movieUrl) {
      var id = (0, _uuid.v4)();
      return new Movie(id, name, description, genre, duration, year, uploadedAt, imageUrl, movieUrl);
    }
  }]);
  return Movie;
}(_DBmanager["default"]);

exports["default"] = Movie;