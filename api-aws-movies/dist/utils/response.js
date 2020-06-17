"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.respond = respond;

// eslint-disable-next-line import/prefer-default-export
function respond(res, status, data, contentType) {
  res.writeHead(status, {
    'Content-Type': contentType || 'application/json'
  });
  res.end(JSON.stringify(data));
}