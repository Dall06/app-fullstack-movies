"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _File = _interopRequireDefault(require("../models/File"));

var FilesBucketManager = /*#__PURE__*/function () {
  function FilesBucketManager() {
    (0, _classCallCheck2["default"])(this, FilesBucketManager);
  }

  (0, _createClass2["default"])(FilesBucketManager, null, [{
    key: "_createS3Client",
    value: function _createS3Client() {
      return new _awsSdk["default"].S3({
        region: process.env.AWS_REGION || undefined
      });
    }
  }, {
    key: "listObjects",
    value: function listObjects(nextContinuationToken) {
      return new Promise(function (resolve, reject) {
        var client = FilesBucketManager._createS3Client();

        var params = {
          Bucket: process.env.FILES_S3_BUCKET_NAME
        };

        if (nextContinuationToken) {
          params.NextContinuationToken = nextContinuationToken;
        }

        client.listObjectsV2(params, /*#__PURE__*/function () {
          var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, data) {
            var objects;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!err) {
                      _context.next = 4;
                      break;
                    }

                    reject(err);
                    _context.next = 18;
                    break;

                  case 4:
                    _context.t0 = [];
                    _context.t1 = (0, _toConsumableArray2["default"])(data.Contents.map(function (item) {
                      return _File["default"].fromS3Item(item);
                    }));
                    _context.t2 = _toConsumableArray2["default"];

                    if (!data.NextContinuationToken) {
                      _context.next = 13;
                      break;
                    }

                    _context.next = 10;
                    return FilesBucketManager.listObjects(data.NextContinuationToken);

                  case 10:
                    _context.t3 = _context.sent;
                    _context.next = 14;
                    break;

                  case 13:
                    _context.t3 = [];

                  case 14:
                    _context.t4 = _context.t3;
                    _context.t5 = (0, _context.t2)(_context.t4);
                    objects = _context.t0.concat.call(_context.t0, _context.t1, _context.t5);
                    resolve(objects);

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    }
  }, {
    key: "getPresignedUrl",
    value: function getPresignedUrl(fileName) {
      var client = FilesBucketManager._createS3Client();

      var params = {
        Bucket: process.env.FILES_S3_BUCKET_NAME,
        Key: fileName,
        ContentType: '',
        Expires: FilesBucketManager.presignedUrlExpirationSeconds
      };
      return client.getSignedUrlPromise('putObject', params);
    }
  }]);
  return FilesBucketManager;
}();

exports["default"] = FilesBucketManager;
(0, _defineProperty2["default"])(FilesBucketManager, "presignedUrlExpirationSeconds", 900);