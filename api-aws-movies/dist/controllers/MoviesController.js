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

var _Movie = _interopRequireDefault(require("../models/Movie"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MoviesController = /*#__PURE__*/function (_BaseController) {
  (0, _inherits2["default"])(MoviesController, _BaseController);

  var _super = _createSuper(MoviesController);

  function MoviesController() {
    (0, _classCallCheck2["default"])(this, MoviesController);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MoviesController, [{
    key: "initialize",
    value: function initialize() {
      // GET get movie list
      this.app.get(MoviesController.basePath, MoviesController.getAllMovies); // GET get movie by id

      this.app.get("".concat(MoviesController.basePath, "/:id"), MoviesController.getMovieById); // POST create a new movie

      this.app.post(MoviesController.basePath, MoviesController.createMovie); // PUT update existing movie

      this.app.put("".concat(MoviesController.basePath, "/:id"), MoviesController.updateMovie); // DELETE delete movie

      this.app["delete"]("".concat(MoviesController.basePath, "/:id"), MoviesController.deleteMovie);
    }
  }], [{
    key: "mount",
    value: function mount(app) {
      return new MoviesController(app);
    } // Start: Endpoints

  }, {
    key: "getAllMovies",
    value: function () {
      var _getAllMovies = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var movies;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return new _Movie["default"]().get();

              case 3:
                movies = _context.sent;
                (0, _response.respond)(res, _httpStatusCodes.OK, movies);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                MoviesController.handleUnknownError(res, _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getAllMovies(_x, _x2) {
        return _getAllMovies.apply(this, arguments);
      }

      return getAllMovies;
    }()
  }, {
    key: "getMovieById",
    value: function () {
      var _getMovieById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var id, movie;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = req.params.id;
                _context2.next = 4;
                return new _Movie["default"](id).getByKey();

              case 4:
                movie = _context2.sent;

                if (movie) {
                  _context2.next = 8;
                  break;
                }

                (0, _response.respond)(res, _httpStatusCodes.NOT_FOUND);
                return _context2.abrupt("return");

              case 8:
                (0, _response.respond)(res, _httpStatusCodes.OK, movie);
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                MoviesController.handleUnknownError(res, _context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));

      function getMovieById(_x3, _x4) {
        return _getMovieById.apply(this, arguments);
      }

      return getMovieById;
    }()
  }, {
    key: "createMovie",
    value: function () {
      var _createMovie = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var expectedParams, validationErrors, _req$body, name, description, genre, duration, year, imageUrl, movieUrl, movie;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                expectedParams = ['name', 'description', 'genre', 'duration', 'year', 'imageUrl', 'movieUrl'];
                validationErrors = [];
                expectedParams.forEach(function (p) {
                  if (!req.body[p]) {
                    validationErrors.push("".concat(p, " parameter was not found in the request"));
                  }
                });

                if (!(validationErrors.length > 0)) {
                  _context3.next = 7;
                  break;
                }

                (0, _response.respond)(res, _httpStatusCodes.BAD_REQUEST, {
                  message: validationErrors.join('\n')
                });
                return _context3.abrupt("return");

              case 7:
                _req$body = req.body, name = _req$body.name, description = _req$body.description, genre = _req$body.genre, duration = _req$body.duration, year = _req$body.year, imageUrl = _req$body.imageUrl, movieUrl = _req$body.movieUrl;
                movie = _Movie["default"].newMovie(name, description, genre, duration, year, imageUrl, movieUrl);
                _context3.next = 11;
                return movie.create();

              case 11:
                (0, _response.respond)(res, _httpStatusCodes.OK, movie);
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                MoviesController.handleUnknownError(res, _context3.t0);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 14]]);
      }));

      function createMovie(_x5, _x6) {
        return _createMovie.apply(this, arguments);
      }

      return createMovie;
    }()
  }, {
    key: "updateMovie",
    value: function () {
      var _updateMovie = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, movie, allowedParams;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params.id;
                _context4.next = 4;
                return new _Movie["default"](id).getByKey();

              case 4:
                movie = _context4.sent;

                if (movie) {
                  _context4.next = 8;
                  break;
                }

                (0, _response.respond)(res, _httpStatusCodes.NOT_FOUND);
                return _context4.abrupt("return");

              case 8:
                allowedParams = ['name', 'description', 'genre', 'duration', 'year', 'imageUrl', 'movieUrl'];
                Object.keys(req.body).forEach(function (p) {
                  if (allowedParams.includes(p)) {
                    movie[p] = req.body[p];
                  }
                });
                _context4.next = 12;
                return movie.update();

              case 12:
                (0, _response.respond)(res, _httpStatusCodes.OK, movie);
                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                MoviesController.handleUnknownError(_context4.t0);

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 15]]);
      }));

      function updateMovie(_x7, _x8) {
        return _updateMovie.apply(this, arguments);
      }

      return updateMovie;
    }()
  }, {
    key: "deleteMovie",
    value: function () {
      var _deleteMovie = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.params.id;
                _context5.next = 4;
                return new _Movie["default"](id)["delete"]();

              case 4:
                (0, _response.respond)(res, _httpStatusCodes.OK);
                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                MoviesController.handleUnknownError(_context5.t0);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function deleteMovie(_x9, _x10) {
        return _deleteMovie.apply(this, arguments);
      }

      return deleteMovie;
    }() // End: Endpoints

  }]);
  return MoviesController;
}(_BaseController2["default"]);

exports["default"] = MoviesController;
(0, _defineProperty2["default"])(MoviesController, "basePath", '/api/v2/movies');