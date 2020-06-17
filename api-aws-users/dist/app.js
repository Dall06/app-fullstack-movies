"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _FilesController = _interopRequireDefault(require("./controllers/FilesController"));

var _UsersController = _interopRequireDefault(require("./controllers/UsersController"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());

_FilesController["default"].mountController(app);

_UsersController["default"].mount(app);

var _default = app;
exports["default"] = _default;