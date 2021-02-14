(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.Components = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function Components(props) {
    return React.createElement("div", null, React.createElement("style", {
      jsx: true
    }, "\n        div {\n          color: pink;\n        }\n      "), React.createElement("h1", null, "Welcome to components!"));
  }

  exports.Components = Components;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
