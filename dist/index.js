"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "close", {
  enumerable: true,
  get: function get() {
    return _cancel.default;
  }
});
Object.defineProperty(exports, "endTask", {
  enumerable: true,
  get: function get() {
    return _tacheTerminee.default;
  }
});
Object.defineProperty(exports, "useModal", {
  enumerable: true,
  get: function get() {
    return _useModal.default;
  }
});

var _cancel = _interopRequireDefault(require("./assets/cancel.png"));

var _tacheTerminee = _interopRequireDefault(require("./assets/tache-terminee.png"));

require("./styles/modal.css");

require("./styles/example.css");

var _useModal = _interopRequireDefault(require("./components/useModal"));

var _Modal = _interopRequireDefault(require("./components/Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }