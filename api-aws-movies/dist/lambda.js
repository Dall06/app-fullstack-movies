"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _awsServerlessExpress = _interopRequireDefault(require("aws-serverless-express"));

var _app = _interopRequireDefault(require("./app"));

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
var binaryMimeTypes = ['application/javascript', 'application/json', 'application/octet-stream', 'application/xml', 'font/eot', 'font/opentype', 'font/otf', 'image/jpeg', 'image/png', 'image/svg+xml', 'text/comma-separated-values', 'text/css', 'text/html', 'text/javascript', 'text/plain', 'text/text', 'text/xml'];

var server = _awsServerlessExpress["default"].createServer(_app["default"], null, binaryMimeTypes); // eslint-disable-next-line import/prefer-default-export


var handler = function handler(event, context) {
  return _awsServerlessExpress["default"].proxy(server, event, context);
};

exports.handler = handler;