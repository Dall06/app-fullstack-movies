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

var _httpStatusCodes = require("http-status-codes");

var _response = require("../utils/response");

var _FilesBucketManager = _interopRequireDefault(require("../managers/FilesBucketManager"));

var FilesController = /*#__PURE__*/function () {
  function FilesController(app) {
    (0, _classCallCheck2["default"])(this, FilesController);
    (0, _defineProperty2["default"])(this, "app", void 0);
    this.app = app;
    this.initialize();
  }

  (0, _createClass2["default"])(FilesController, [{
    key: "initialize",
    value: function initialize() {
      this.app.get("".concat(FilesController.basePath, "/list"), FilesController.getFilesList.bind(this));
      this.app.get("".concat(FilesController.basePath, "/upload"), FilesController.getNewFileUploadUrl.bind(this));
    }
    /**
     * @api {GET} /api/files/list
     * @apiName Files
     * @apiGroup List all files in bucket
     *
     * @apiDescription Get a list of all files in the bucket
     *
     * @apiSuccessExample Success-Response
     *
     *  HTTP/1.1 200 OK
     *  [
     *    {
     *      "name": "space.jpg",
     *      "lastModified": "2020-02-10T22:54:55.000Z",
     *      "size": 278635
     *    },
     *    {
     *      "name": "vader-1.jpg",
     *      "lastModified": "2020-02-10T23:43:39.000Z",
     *      "size": 141275
     *    }
     *  ]
     *
     */

  }], [{
    key: "mountController",
    value: function mountController(app) {
      return new FilesController(app);
    }
  }, {
    key: "_handleUnknownError",
    value: function _handleUnknownError(res, e) {
      console.error(e);
      (0, _response.respond)(res, _httpStatusCodes.INTERNAL_SERVER_ERROR, {
        message: e.message
      });
    }
  }, {
    key: "getFilesList",
    value: function () {
      var _getFilesList = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var files;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _FilesBucketManager["default"].listObjects();

              case 3:
                files = _context.sent;
                (0, _response.respond)(res, _httpStatusCodes.OK, files);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                FilesController._handleUnknownError(res, _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getFilesList(_x, _x2) {
        return _getFilesList.apply(this, arguments);
      }

      return getFilesList;
    }()
    /**
     * @api {GET} /api/files/upload
     * @apiName Files
     * @apiGroup Get presigned upload url
     *
     * @apiDescription Get a presigned S3 url for a new upload
     *
     * @apiParam  {String}  id  Mandatory File name of the new upload
     *
     * @apiSuccess  (200) {String}  url S3 presigned upload url
     *
     * @apiSuccessExample {json}  Success-Response
     *  HTTP/1.1 200 OK
     *  {
     *    "url": "https://jorgehdzg-node-js-express-file-sharing.s3.us-west-2.amazonaws.com/test-file.txt?AWSAccessKeyId=AKIATUGOOFPM4STDN24X&Content-Type=&Expires=1581439981&Signature=bW9YJNxOa6mZ%2FDRd96olZIOX5RY%3D"
     *  }
     */

  }, {
    key: "getNewFileUploadUrl",
    value: function () {
      var _getNewFileUploadUrl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var fileName, url;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                fileName = req.query.fileName;

                if (fileName) {
                  _context2.next = 5;
                  break;
                }

                (0, _response.respond)(res, _httpStatusCodes.BAD_REQUEST, {
                  message: '"fileName" query parameter was missing in the request.'
                });
                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return _FilesBucketManager["default"].getPresignedUrl(fileName);

              case 7:
                url = _context2.sent;
                (0, _response.respond)(res, _httpStatusCodes.OK, {
                  url: url
                });
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);

                FilesController._handleUnknownError(res, _context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));

      function getNewFileUploadUrl(_x3, _x4) {
        return _getNewFileUploadUrl.apply(this, arguments);
      }

      return getNewFileUploadUrl;
    }()
  }]);
  return FilesController;
}();

exports["default"] = FilesController;
(0, _defineProperty2["default"])(FilesController, "basePath", '/api/files');