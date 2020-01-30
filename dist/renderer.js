"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => _react.default.createElement("div", null, "Hello, React!");

_reactDom.default.render(_react.default.createElement(App, null), document.querySelector('#app'));