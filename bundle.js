/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/services/notification.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/services/notification.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "table {\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\ntable, th, td {\r\n  border: 1px solid black;\r\n}\r\n\r\n.slogan {\r\n  text-transform: uppercase;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color:#fff;\r\n}\r\n\r\n#root {\r\n  height: 90vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\ncanvas:hover {\r\n  cursor: crosshair;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.7.1
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Capitalize the first letter of a string
 * @param str
 */

var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */

var objectValues = function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * Show a one-time console warning about deprecated params/methods
 */

var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
  warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var isJqueryElement = function isJqueryElement(elem) {
  return _typeof(elem) === 'object' && elem.jquery;
};

var isElement = function isElement(elem) {
  return elem instanceof Element || isJqueryElement(elem);
};

var argsToParams = function argsToParams(args) {
  var params = {};

  if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
    _extends(params, args[0]);
  } else {
    ['title', 'html', 'icon'].forEach(function (name, index) {
      var arg = args[index];

      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg;
      } else if (arg !== undefined) {
        error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
      }
    });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var getContainer = function getContainer() {
  return document.body.querySelector(".".concat(swalClasses.container));
};
var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector(".".concat(className));
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
};
var getIcon = function getIcon() {
  var visibleIcon = getIcons().filter(function (icon) {
    return isVisible(icon);
  });
  return visibleIcon.length ? visibleIcon[0] : null;
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getHtmlContainer = function getHtmlContainer() {
  return elementByClass(swalClasses['html-container']);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
};
var getCancelButton = function getCancelButton() {
  return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getHeader = function getHeader() {
  return elementByClass(swalClasses.header);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getTimerProgressBar = function getTimerProgressBar() {
  return elementByClass(swalClasses['timer-progress-bar']);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
}; // https://github.com/jkup/focusable/blob/master/index.js

var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  });
  var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  if (!className) {
    return false;
  }

  var classList = className.split(/\s+/);

  for (var i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false;
    }
  }

  return true;
};

var removeCustomClasses = function removeCustomClasses(elem, params) {
  toArray(elem.classList).forEach(function (className) {
    if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
      elem.classList.remove(className);
    }
  });
};

var applyCustomClass = function applyCustomClass(elem, params, className) {
  removeCustomClasses(elem, params);

  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
      return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
    }

    addClass(elem, params.customClass[className]);
  }
};
function getInput(content, inputType) {
  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, swalClasses[inputType]);

    case 'checkbox':
      return content.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return content.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(content, swalClasses.input);
  }
}
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};
var toggleClass = function toggleClass(target, classList, condition) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = function addClass(target, classList) {
  toggleClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  toggleClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = function show(elem) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
  elem.style.opacity = '';
  elem.style.display = display;
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};
var toggle = function toggle(elem, condition, display) {
  condition ? show(elem, display) : hide(elem);
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
};
/* istanbul ignore next */

var isScrollable = function isScrollable(elem) {
  return !!(elem.scrollHeight > elem.clientHeight);
}; // borrowed from https://stackoverflow.com/a/46352119

var hasCssAnimation = function hasCssAnimation(elem) {
  var style = window.getComputedStyle(elem);
  var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};
var animateTimerProgressBar = function animateTimerProgressBar(timer) {
  var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var timerProgressBar = getTimerProgressBar();

  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none';
      timerProgressBar.style.width = '100%';
    }

    setTimeout(function () {
      timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
      timerProgressBar.style.width = '0%';
    }, 10);
  }
};
var stopTimerProgressBar = function stopTimerProgressBar() {
  var timerProgressBar = getTimerProgressBar();
  var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = '100%';
  var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n </div>\n").replace(/(^|\n)\s*/g, '');

var resetOldContainer = function resetOldContainer() {
  var oldContainer = getContainer();

  if (!oldContainer) {
    return;
  }

  oldContainer.parentNode.removeChild(oldContainer);
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
};

var oldInputVal; // IE11 workaround, see #1109 for details

var resetValidationMessage = function resetValidationMessage(e) {
  if (Swal.isVisible() && oldInputVal !== e.target.value) {
    Swal.resetValidationMessage();
  }

  oldInputVal = e.target.value;
};

var addInputChangeListeners = function addInputChangeListeners() {
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };
};

var getTarget = function getTarget(target) {
  return typeof target === 'string' ? document.querySelector(target) : target;
};

var setupAccessibility = function setupAccessibility(params) {
  var popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

var setupRTL = function setupRTL(targetElement) {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};
/*
 * Add modal + backdrop to DOM
 */


var init = function init(params) {
  // Clean up the old popup container if it exists
  resetOldContainer();
  /* istanbul ignore if */

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param); // Object
  } else if (_typeof(param) === 'object') {
    handleObject(param, target); // Plain string
  } else if (param) {
    target.innerHTML = param;
  }
};

var handleObject = function handleObject(param, target) {
  // JQuery element(s)
  if (param.jquery) {
    handleJqueryElem(target, param); // For other objects use their string representation
  } else {
    target.innerHTML = param.toString();
  }
};

var handleJqueryElem = function handleJqueryElem(target, elem) {
  target.innerHTML = '';

  if (0 in elem) {
    for (var i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  };

  for (var i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

var measureScrollbar = function measureScrollbar() {
  var scrollDiv = document.createElement('div');
  scrollDiv.className = swalClasses['scrollbar-measure'];
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(instance, params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } // Custom class


  applyCustomClass(actions, params, 'actions'); // Render confirm button

  renderButton(confirmButton, 'confirm', params); // render Cancel Button

  renderButton(cancelButton, 'cancel', params);

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  if (params.reverseButtons) {
    confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
  }
};

function handleButtonsStyling(confirmButton, cancelButton, params) {
  addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
  }

  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  } // Loading state


  var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
}

function renderButton(button, buttonType, params) {
  toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
  button.innerHTML = params["".concat(buttonType, "ButtonText")]; // Set caption text

  button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
  // Add buttons custom classes

  button.className = swalClasses[buttonType];
  applyCustomClass(button, params, "".concat(buttonType, "Button"));
  addClass(button, params["".concat(buttonType, "ButtonClass")]);
}

function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

function handleGrowParam(container, grow) {
  if (grow && typeof grow === 'string') {
    var growClass = "grow-".concat(grow);

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}

var renderContainer = function renderContainer(instance, params) {
  var container = getContainer();

  if (!container) {
    return;
  }

  handleBackdropParam(container, params.backdrop);

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }

  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow); // Custom class

  applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

  var queueStep = document.body.getAttribute('data-swal2-queue-step');

  if (queueStep) {
    container.setAttribute('data-queue-step', queueStep);
    document.body.removeAttribute('data-swal2-queue-step');
  }
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
var renderInput = function renderInput(instance, params) {
  var content = getContent();
  var innerParams = privateProps.innerParams.get(instance);
  var rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach(function (inputType) {
    var inputClass = swalClasses[inputType];
    var inputContainer = getChildByClass(content, inputClass); // set attributes

    setAttributes(inputType, params.inputAttributes); // set class

    inputContainer.className = inputClass;

    if (rerender) {
      hide(inputContainer);
    }
  });

  if (params.input) {
    if (rerender) {
      showInput(params);
    } // set custom class


    setCustomClass(params);
  }
};

var showInput = function showInput(params) {
  if (!renderInputType[params.input]) {
    return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
  }

  var inputContainer = getInputContainer(params.input);
  var input = renderInputType[params.input](inputContainer, params);
  show(input); // input autofocus

  setTimeout(function () {
    focusInput(input);
  });
};

var removeAttributes = function removeAttributes(input) {
  for (var i = 0; i < input.attributes.length; i++) {
    var attrName = input.attributes[i].name;

    if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
      input.removeAttribute(attrName);
    }
  }
};

var setAttributes = function setAttributes(inputType, inputAttributes) {
  var input = getInput(getContent(), inputType);

  if (!input) {
    return;
  }

  removeAttributes(input);

  for (var attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue;
    }

    input.setAttribute(attr, inputAttributes[attr]);
  }
};

var setCustomClass = function setCustomClass(params) {
  var inputContainer = getInputContainer(params.input);

  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};

var setInputPlaceholder = function setInputPlaceholder(input, params) {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

var getInputContainer = function getInputContainer(inputType) {
  var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
  return getChildByClass(getContent(), inputClass);
};

var renderInputType = {};

renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
  }

  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.file = function (input, params) {
  setInputPlaceholder(input, params);
  return input;
};

renderInputType.range = function (range, params) {
  var rangeInput = range.querySelector('input');
  var rangeOutput = range.querySelector('output');
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  return range;
};

renderInputType.select = function (select, params) {
  select.innerHTML = '';

  if (params.inputPlaceholder) {
    var placeholder = document.createElement('option');
    placeholder.innerHTML = params.inputPlaceholder;
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }

  return select;
};

renderInputType.radio = function (radio) {
  radio.innerHTML = '';
  return radio;
};

renderInputType.checkbox = function (checkboxContainer, params) {
  var checkbox = getInput(getContent(), 'checkbox');
  checkbox.value = 1;
  checkbox.id = swalClasses.checkbox;
  checkbox.checked = Boolean(params.inputValue);
  var label = checkboxContainer.querySelector('span');
  label.innerHTML = params.inputPlaceholder;
  return checkboxContainer;
};

renderInputType.textarea = function (textarea, params) {
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);

  if ('MutationObserver' in window) {
    // #1699
    var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
    var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

    var outputsize = function outputsize() {
      var contentWidth = textarea.offsetWidth + popupPadding;

      if (contentWidth > initialPopupWidth) {
        getPopup().style.width = "".concat(contentWidth, "px");
      } else {
        getPopup().style.width = null;
      }
    };

    new MutationObserver(outputsize).observe(textarea, {
      attributes: true,
      attributeFilter: ['style']
    });
  }

  return textarea;
};

var renderContent = function renderContent(instance, params) {
  var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content);
    show(content, 'block'); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content, 'block'); // No content
  } else {
    hide(content);
  }

  renderInput(instance, params); // Custom class

  applyCustomClass(getContent(), params, 'content');
};

var renderFooter = function renderFooter(instance, params) {
  var footer = getFooter();
  toggle(footer, params.footer);

  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  } // Custom class


  applyCustomClass(footer, params, 'footer');
};

var renderCloseButton = function renderCloseButton(instance, params) {
  var closeButton = getCloseButton();
  closeButton.innerHTML = params.closeButtonHtml; // Custom class

  applyCustomClass(closeButton, params, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

var renderIcon = function renderIcon(instance, params) {
  var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

  if (innerParams && params.icon === innerParams.icon && getIcon()) {
    applyCustomClass(getIcon(), params, 'icon');
    return;
  }

  hideAllIcons();

  if (!params.icon) {
    return;
  }

  if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
    var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
    show(icon); // Custom or default content

    setContent(icon, params);
    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon'); // Animate icon

    addClass(icon, params.showClass.icon);
  } else {
    error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
  }
};

var hideAllIcons = function hideAllIcons() {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }
}; // Adjust success icon background color to match the popup background color


var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
  var popup = getPopup();
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

var setContent = function setContent(icon, params) {
  icon.innerHTML = '';

  if (params.iconHtml) {
    icon.innerHTML = iconContent(params.iconHtml);
  } else if (params.icon === 'success') {
    icon.innerHTML = "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ";
  } else if (params.icon === 'error') {
    icon.innerHTML = "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ";
  } else {
    var defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    };
    icon.innerHTML = iconContent(defaultIconHtml[params.icon]);
  }
};

var iconContent = function iconContent(content) {
  return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
};

var renderImage = function renderImage(instance, params) {
  var image = getImage();

  if (!params.imageUrl) {
    return hide(image);
  }

  show(image); // Src, alt

  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt); // Width, height

  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight); // Class

  image.className = swalClasses.image;
  applyCustomClass(image, params, 'image');
};

var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetAndResolve = function resetAndResolve(resolve, value) {
    currentSteps = [];
    resolve(value);
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetAndResolve(resolve, {
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetAndResolve(resolve, {
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return getContainer().getAttribute('data-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

var createStepElement = function createStepElement(step) {
  var stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  stepEl.innerHTML = step;
  return stepEl;
};

var createLineElement = function createLineElement(params) {
  var lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);

  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }

  return lineEl;
};

var renderProgressSteps = function renderProgressSteps(instance, params) {
  var progressStepsContainer = getProgressSteps();

  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }

  show(progressStepsContainer);
  progressStepsContainer.innerHTML = '';
  var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

  if (currentProgressStep >= params.progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }

  params.progressSteps.forEach(function (step, index) {
    var stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);

    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }

    if (index !== params.progressSteps.length - 1) {
      var lineEl = createLineElement(step);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

var renderTitle = function renderTitle(instance, params) {
  var title = getTitle();
  toggle(title, params.title || params.titleText);

  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }

  if (params.titleText) {
    title.innerText = params.titleText;
  } // Custom class


  applyCustomClass(title, params, 'title');
};

var renderHeader = function renderHeader(instance, params) {
  var header = getHeader(); // Custom class

  applyCustomClass(header, params, 'header'); // Progress steps

  renderProgressSteps(instance, params); // Icon

  renderIcon(instance, params); // Image

  renderImage(instance, params); // Title

  renderTitle(instance, params); // Close button

  renderCloseButton(instance, params);
};

var renderPopup = function renderPopup(instance, params) {
  var popup = getPopup(); // Width

  applyNumericalStyle(popup, 'width', params.width); // Padding

  applyNumericalStyle(popup, 'padding', params.padding); // Background

  if (params.background) {
    popup.style.background = params.background;
  } // Classes


  addClasses(popup, params);
};

var addClasses = function addClasses(popup, params) {
  // Default Class + showClass when updating Swal.update({})
  popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom class


  applyCustomClass(popup, params, 'popup');

  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  } // Icon class (#1842)


  if (params.icon) {
    addClass(popup, swalClasses["icon-".concat(params.icon)]);
  }
};

var render = function render(instance, params) {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderHeader(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);

  if (typeof params.onRender === 'function') {
    params.onRender(getPopup());
  }
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible$$1() {
  return isVisible(getPopup());
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton() && getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton() && getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

/**
 * Show spinner instead of Confirm button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire();
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  show(actions);
  show(confirmButton, 'inline-block');
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var focusPreviousActiveElement = function focusPreviousActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
}; // Restore previous active (focused) element


var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    /* istanbul ignore if */

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  if (globalState.timeout) {
    stopTimerProgressBar();
    return globalState.timeout.stop();
  }
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  if (globalState.timeout) {
    var remaining = globalState.timeout.start();
    animateTimerProgressBar(remaining);
    return remaining;
  }
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? stopTimer() : resumeTimer());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  if (globalState.timeout) {
    var remaining = globalState.timeout.increase(n);
    animateTimerProgressBar(remaining, true);
    return remaining;
  }
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconHtml: undefined,
  toast: false,
  animation: true,
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show'
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide'
  },
  customClass: undefined,
  target: 'body',
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  onBeforeOpen: undefined,
  onOpen: undefined,
  onRender: undefined,
  onClose: undefined,
  onAfterClose: undefined,
  onDestroy: undefined,
  scrollbarPadding: true
};
var updatableParams = ['title', 'titleText', 'text', 'html', 'icon', 'customClass', 'allowOutsideClick', 'allowEscapeKey', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep'];
var deprecatedParams = {
  animation: 'showClass" and "hideClass'
};
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return updatableParams.indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams[paramName];
};

var checkIfParamIsValid = function checkIfParamIsValid(param) {
  if (!isValidParameter(param)) {
    warn("Unknown parameter \"".concat(param, "\""));
  }
};

var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
  if (toastIncompatibleParams.indexOf(param) !== -1) {
    warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
  }
};

var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
  if (isDeprecatedParameter(param)) {
    warnAboutDepreation(param, isDeprecatedParameter(param));
  }
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    checkIfParamIsValid(param);

    if (params.toast) {
      checkIfToastParamIsValid(param);
    }

    checkIfParamIsDeprecated(param);
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getHtmlContainer: getHtmlContainer,
	getImage: getImage,
	getIcon: getIcon,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getHeader: getHeader,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  // do nothing if popup is closed
  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams) {
    return;
  }

  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput$1(instance) {
  var innerParams = privateProps.innerParams.get(instance || this);
  var domCache = privateProps.domCache.get(instance || this);

  if (!domCache) {
    return null;
  }

  return getInput(domCache.content, innerParams.input);
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore file */
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = "".concat(offset * -1, "px");
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};

var lockBodyScroll = function lockBodyScroll() {
  // #1246
  var container = getContainer();
  var preventTouchMove;

  container.ontouchstart = function (e) {
    preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
    ;
  };

  container.ontouchmove = function (e) {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

/* istanbul ignore file */
var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};

var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState(instance, container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterCloseAndDispose(instance, onAfterClose);
  } else {
    restoreActiveElement().then(function () {
      return triggerOnAfterCloseAndDispose(instance, onAfterClose);
    });
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }

  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    undoIEfix();
    unsetAriaHidden();
  }

  removeBodyClasses();
}

function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
}

function close(resolveValue) {
  var popup = getPopup();

  if (!popup) {
    return;
  }

  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
    return;
  }

  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  removeClass(popup, innerParams.showClass.popup);
  addClass(popup, innerParams.hideClass.popup);
  var backdrop = getContainer();
  removeClass(backdrop, innerParams.showClass.backdrop);
  addClass(backdrop, innerParams.hideClass.backdrop);
  handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

  swalPromiseResolve(resolveValue || {});
}

var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
  var container = getContainer(); // If animation is supported, animate

  var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  var onClose = innerParams.onClose,
      onAfterClose = innerParams.onAfterClose;

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, onAfterClose);
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, isToast(), onAfterClose);
  }
};

var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
  popup.addEventListener(animationEndEvent, function (e) {
    if (e.target === popup) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
  });
};

var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
  setTimeout(function () {
    if (typeof onAfterClose === 'function') {
      onAfterClose();
    }

    instance._destroy();
  });
};

function setButtonsDisabled(instance, buttons, disabled) {
  var domCache = privateProps.domCache.get(instance);
  buttons.forEach(function (button) {
    domCache[button].disabled = disabled;
  });
}

function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
}
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage$1() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  var domCache = privateProps.domCache.get(this);
  return domCache.progressSteps;
}

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }
  }, {
    key: "increase",
    value: function increase(n) {
      var running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "getTimerLeft",
    value: function getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);

  return Timer;
}();

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  }
}

function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}
/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */


function setParameters(params) {
  setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  } // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function


  params.animation = callIfFunction(params.animation);
  validateCustomTargetElement(params); // Replace newlines with <br> in title

  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }

  init(params);
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */

var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

  setScrollingVisibility(container, popup);

  if (isModal()) {
    fixScrollContainer(container, params.scrollbarPadding);
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (typeof params.onOpen === 'function') {
    setTimeout(function () {
      return params.onOpen(popup);
    });
  }
};

function swalOpenAnimationFinished(event) {
  var popup = getPopup();

  if (event.target !== popup) {
    return;
  }

  var container = getContainer();
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
}

var setScrollingVisibility = function setScrollingVisibility(container, popup) {
  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
  } else {
    container.style.overflowY = 'auto';
  }
};

var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
  iOSfix();
  IEfix();
  setAriaHidden();

  if (scrollbarPadding) {
    fixScrollbar();
  } // sweetalert2/issues/1247


  setTimeout(function () {
    container.scrollTop = 0;
  });
};

var addClasses$1 = function addClasses(container, popup, params) {
  addClass(container, params.showClass.backdrop);
  show(popup); // Animate popup right after showing it

  addClass(popup, params.showClass.popup);
  addClass([document.documentElement, document.body], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }
};

var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params);
  } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
    handleInputValue(instance, params);
  }
};
var getInputValue = function getInputValue(instance, innerParams) {
  var input = instance.getInput();

  if (!input) {
    return null;
  }

  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input);

    case 'radio':
      return getRadioValue(input);

    case 'file':
      return getFileValue(input);

    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};

var getCheckboxValue = function getCheckboxValue(input) {
  return input.checked ? 1 : 0;
};

var getRadioValue = function getRadioValue(input) {
  return input.checked ? input.value : null;
};

var getFileValue = function getFileValue(input) {
  return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
};

var handleInputOptions = function handleInputOptions(instance, params) {
  var content = getContent();

  var processInputOptions = function processInputOptions(inputOptions) {
    return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
  };

  if (isPromise(params.inputOptions)) {
    showLoading();
    params.inputOptions.then(function (inputOptions) {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (_typeof(params.inputOptions) === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
  }
};

var handleInputValue = function handleInputValue(instance, params) {
  var input = instance.getInput();
  hide(input);
  params.inputValue.then(function (inputValue) {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
    show(input);
    input.focus();
    instance.hideLoading();
  })["catch"](function (err) {
    error("Error in inputValue promise: ".concat(err));
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};

var populateInputOptions = {
  select: function select(content, inputOptions, params) {
    var select = getChildByClass(content, swalClasses.select);
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      var option = document.createElement('option');
      option.value = optionValue;
      option.innerHTML = optionLabel;

      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true;
      }

      select.appendChild(option);
    });
    select.focus();
  },
  radio: function radio(content, inputOptions, params) {
    var radio = getChildByClass(content, swalClasses.radio);
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      label.innerHTML = radioLabel;
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};

var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
  instance.disableButtons();

  if (innerParams.input) {
    handleConfirmWithInput(instance, innerParams);
  } else {
    confirm(instance, innerParams, true);
  }
};
var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};

var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
  var inputValue = getInputValue(instance, innerParams);

  if (innerParams.inputValidator) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return innerParams.inputValidator(inputValue, innerParams.validationMessage);
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage);
  } else {
    confirm(instance, innerParams, inputValue);
  }
};

var succeedWith = function succeedWith(instance, value) {
  instance.closePopup({
    value: value
  });
};

var confirm = function confirm(instance, innerParams, value) {
  if (innerParams.showLoaderOnConfirm) {
    showLoading(); // TODO: make showLoading an *instance* method
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    var preConfirmPromise = Promise.resolve().then(function () {
      return innerParams.preConfirm(value, innerParams.validationMessage);
    });
    preConfirmPromise.then(function (preConfirmValue) {
      if (isVisible(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
      } else {
        succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
      }
    });
  } else {
    succeedWith(instance, value);
  }
};

var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = function (e) {
      return keydownHandler(instance, e, dismissWith);
    };

    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = true;
  }
}; // Focus handling

var setFocus = function setFocus(innerParams, index, increment) {
  var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

  for (var i = 0; i < focusableElements.length; i++) {
    index = index + increment; // rollover to first item

    if (index === focusableElements.length) {
      index = 0; // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }

    return focusableElements[index].focus();
  } // no visible focusable elements, focus the popup


  getPopup().focus();
};
var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
];
var escKeys = ['Escape', 'Esc' // IE11
];

var keydownHandler = function keydownHandler(instance, e, dismissWith) {
  var innerParams = privateProps.innerParams.get(instance);

  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation();
  } // ENTER


  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams); // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams); // ARROWS - switch focus between buttons
  } else if (arrowKeys.indexOf(e.key) !== -1) {
    handleArrows(); // ESC
  } else if (escKeys.indexOf(e.key) !== -1) {
    handleEsc(e, innerParams, dismissWith);
  }
};

var handleEnter = function handleEnter(instance, e, innerParams) {
  // #720 #721
  if (e.isComposing) {
    return;
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
      return; // do not submit
    }

    clickConfirm();
    e.preventDefault();
  }
};

var handleTab = function handleTab(e, innerParams) {
  var targetElement = e.target;
  var focusableElements = getFocusableElements();
  var btnIndex = -1;

  for (var i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1);
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1);
  }

  e.stopPropagation();
  e.preventDefault();
};

var handleArrows = function handleArrows() {
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

  if (document.activeElement === confirmButton && isVisible(cancelButton)) {
    cancelButton.focus(); // and vice versa
  } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
    confirmButton.focus();
  }
};

var handleEsc = function handleEsc(e, innerParams, dismissWith) {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    e.preventDefault();
    dismissWith(DismissReason.esc);
  }
};

var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
  var innerParams = privateProps.innerParams.get(instance);

  if (innerParams.toast) {
    handleToastClick(instance, domCache, dismissWith);
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

    handleContainerMousedown(domCache);
    handleModalClick(instance, domCache, dismissWith);
  }
};

var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
  // Closing toast by internal click
  domCache.popup.onclick = function () {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
      return;
    }

    dismissWith(DismissReason.close);
  };
};

var ignoreOutsideClick = false;

var handleModalMousedown = function handleModalMousedown(domCache) {
  domCache.popup.onmousedown = function () {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup

      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleContainerMousedown = function handleContainerMousedown(domCache) {
  domCache.container.onmousedown = function () {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
  domCache.container.onclick = function (e) {
    var innerParams = privateProps.innerParams.get(instance);

    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }

    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

function _main(userParams) {
  showWarningsForParams(userParams);

  if (globalState.currentInstance) {
    globalState.currentInstance._destroy();
  }

  globalState.currentInstance = this;
  var innerParams = prepareParams(userParams);
  setParameters(innerParams);
  Object.freeze(innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = populateDomCache(this);
  render(this, innerParams);
  privateProps.innerParams.set(this, innerParams);
  return swalPromise(this, domCache, innerParams);
}

var prepareParams = function prepareParams(userParams) {
  var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

  var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

  var params = _extends({}, defaultParams, userParams);

  params.showClass = showClass;
  params.hideClass = hideClass; // @deprecated

  if (userParams.animation === false) {
    params.showClass = {
      popup: '',
      backdrop: 'swal2-backdrop-show swal2-noanimation'
    };
    params.hideClass = {};
  }

  return params;
};

var swalPromise = function swalPromise(instance, domCache, innerParams) {
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var dismissWith = function dismissWith(dismiss) {
      instance.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(instance, resolve);
    setupTimer(globalState, innerParams, dismissWith);

    domCache.confirmButton.onclick = function () {
      return handleConfirmButtonClick(instance, innerParams);
    };

    domCache.cancelButton.onclick = function () {
      return handleCancelButtonClick(instance, dismissWith);
    };

    domCache.closeButton.onclick = function () {
      return dismissWith(DismissReason.close);
    };

    handlePopupClick(instance, domCache, dismissWith);
    addKeydownHandler(instance, globalState, innerParams, dismissWith);

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    }

    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

    domCache.container.scrollTop = 0;
  });
};

var populateDomCache = function populateDomCache(instance) {
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};

var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
  var timerProgressBar = getTimerProgressBar();
  hide(timerProgressBar);

  if (innerParams.timer) {
    globalState$$1.timeout = new Timer(function () {
      dismissWith('timer');
      delete globalState$$1.timeout;
    }, innerParams.timer);

    if (innerParams.timerProgressBar) {
      show(timerProgressBar);
      setTimeout(function () {
        animateTimerProgressBar(innerParams.timer);
      });
    }
  }
};

var initFocus = function initFocus(domCache, innerParams) {
  if (innerParams.toast) {
    return;
  }

  if (!callIfFunction(innerParams.allowEnterKey)) {
    return blurActiveElement();
  }

  if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
    return domCache.cancelButton.focus();
  }

  if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
    return domCache.confirmButton.focus();
  }

  setFocus(innerParams, -1, 1);
};

var blurActiveElement = function blurActiveElement() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
};

/**
 * Updates popup parameters.
 */

function update(params) {
  var popup = getPopup();
  var innerParams = privateProps.innerParams.get(this);

  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
  }

  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
    }
  });

  var updatedParams = _extends({}, innerParams, validUpdatableParams);

  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: _extends({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}

function _destroy() {
  var domCache = privateProps.domCache.get(this);
  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams) {
    return; // This instance has already been destroyed
  } // Check if there is another Swal closing


  if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  } // Check if there is a swal disposal defer timer


  if (globalState.deferDisposalTimer) {
    clearTimeout(globalState.deferDisposalTimer);
    delete globalState.deferDisposalTimer;
  }

  if (typeof innerParams.onDestroy === 'function') {
    innerParams.onDestroy();
  }

  disposeSwal(this);
}

var disposeSwal = function disposeSwal(instance) {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

  delete globalState.keydownHandler;
  delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

  unsetWeakMaps(privateProps);
  unsetWeakMaps(privateMethods);
};

var unsetWeakMaps = function unsetWeakMaps(obj) {
  for (var i in obj) {
    obj[i] = new WeakMap();
  }
};



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput$1,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage$1,
	getProgressSteps: getProgressSteps$1,
	_main: _main,
	update: update,
	_destroy: _destroy
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype["finally"] = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise["finally"](onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '9.7.1';

var Swal = SweetAlert;
Swal["default"] = Swal;

return Swal;

})));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_canvasBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/canvasBackground.jpg */ "./src/assets/images/canvasBackground.jpg");
/* harmony import */ var _gameObjects_persons_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObjects/persons/Player */ "./src/gameObjects/persons/Player.ts");
/* harmony import */ var _gameObjects_persons_Zombie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameObjects/persons/Zombie */ "./src/gameObjects/persons/Zombie.ts");
/* harmony import */ var _services_countdown_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/countdown.service */ "./src/services/countdown.service.ts");
/* harmony import */ var _gameObjects_persons_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameObjects/persons/Person */ "./src/gameObjects/persons/Person.ts");
/* harmony import */ var _helpers_image_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/image.helper */ "./src/helpers/image.helper.ts");
/* harmony import */ var _helpers_zombie_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/zombie.helper */ "./src/helpers/zombie.helper.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/notification.service */ "./src/services/notification.service.ts");








var GameState;
(function (GameState) {
    GameState[GameState["Start"] = 0] = "Start";
    GameState[GameState["Stop"] = 1] = "Stop";
})(GameState || (GameState = {}));
;
var CollisionWithCanvas;
(function (CollisionWithCanvas) {
    CollisionWithCanvas[CollisionWithCanvas["X"] = 0] = "X";
    CollisionWithCanvas[CollisionWithCanvas["Y"] = 1] = "Y";
    CollisionWithCanvas[CollisionWithCanvas["None"] = 2] = "None";
})(CollisionWithCanvas || (CollisionWithCanvas = {}));
;
var Zombieland = /** @class */ (function () {
    function Zombieland(container, canvasOptions, canvasBackgroundUrl) {
        if (canvasBackgroundUrl === void 0) { canvasBackgroundUrl = _assets_images_canvasBackground_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]; }
        this.canvas = this.createCanvas(container, canvasOptions);
        this.ctx = this.canvas.getContext('2d');
        this.canvasBackground = Object(_helpers_image_helper__WEBPACK_IMPORTED_MODULE_5__["loadImage"])(canvasBackgroundUrl);
        this.gameState = GameState.Start;
        this.player = new _gameObjects_persons_Player__WEBPACK_IMPORTED_MODULE_1__["default"](this.canvas);
        this.zombieList = [];
        this.addZombieSet();
        this.timerZombieSet = window.setInterval(this.addZombieSet.bind(this), 1000 * 5);
        this.info = {
            zombieKilled: 0
        };
        this.countdown = new _services_countdown_service__WEBPACK_IMPORTED_MODULE_3__["default"](59);
        this.countdown.start();
    }
    Zombieland.isCollisionBetweenObjects = function (gameObject1, gameObject2) {
        return (gameObject1.position.x + gameObject1.size.width >= gameObject2.position.x &&
            gameObject1.position.x <= gameObject2.position.x + gameObject2.size.width &&
            gameObject1.position.y + gameObject1.size.height >= gameObject2.position.y &&
            gameObject1.position.y <= gameObject2.position.y + gameObject2.size.height);
    };
    Zombieland.prototype.createCanvas = function (container, _a) {
        var width = _a.width, height = _a.height;
        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'zombieland');
        canvas.setAttribute('width', width + "px");
        canvas.setAttribute('height', height + "px");
        container.appendChild(canvas);
        return canvas;
    };
    Zombieland.prototype.addZombieSet = function () {
        for (var i = 0; i < 10; i++) {
            this.zombieList.push(new _gameObjects_persons_Zombie__WEBPACK_IMPORTED_MODULE_2__["default"](Object(_helpers_zombie_helper__WEBPACK_IMPORTED_MODULE_6__["getRandomZombie"])(), Object(_helpers_zombie_helper__WEBPACK_IMPORTED_MODULE_6__["getRandomPositionZombie"])(this.player.position, this.canvas)));
        }
    };
    Zombieland.prototype.render = function () {
        var _this = this;
        if (this.gameState == GameState.Start) {
            this.clearCanvas();
            this.setCanvasBackground();
            this.player.render(this.ctx);
            this.zombieList.forEach(function (zombie) {
                zombie.render(_this.ctx, _this.player);
            });
            this.collisionDetection();
            this.drawInfo();
            if (this.countdown.end) {
                this.setResult({ winner: true });
            }
            requestAnimationFrame(this.render.bind(this));
        }
    };
    Zombieland.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Zombieland.prototype.setCanvasBackground = function () {
        var pattern = this.ctx.createPattern(this.canvasBackground, 'repeat');
        this.ctx.fillStyle = pattern;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Zombieland.prototype.setResult = function (_a) {
        var winner = _a.winner;
        this.stop();
        var message = "You - " + (winner ? 'win' : 'lost') + "!";
        Object(_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["viewResult"])(message, this.restart.bind(this));
    };
    Zombieland.prototype.stop = function () {
        this.gameState = GameState.Stop;
        this.countdown.stop();
        clearInterval(this.timerZombieSet);
    };
    Zombieland.prototype.restart = function () {
        this.reset();
        this.render();
    };
    Zombieland.prototype.reset = function () {
        this.gameState = GameState.Start;
        this.player = new _gameObjects_persons_Player__WEBPACK_IMPORTED_MODULE_1__["default"](this.canvas);
        this.zombieList = [];
        this.addZombieSet();
        this.timerZombieSet = window.setInterval(this.addZombieSet.bind(this), 1000 * 5);
        this.info = {
            zombieKilled: 0
        };
        this.countdown = new _services_countdown_service__WEBPACK_IMPORTED_MODULE_3__["default"](59);
        this.countdown.start();
    };
    Zombieland.prototype.drawInfo = function () {
        this.ctx.save();
        this.ctx.font = 'status-bar';
        this.ctx.fillStyle = 'rgba(0, 255, 255, .8)';
        this.ctx.fillText("Countdown: " + this.countdown.remains, 8, 20);
        this.ctx.fillText("Killed: " + this.info.zombieKilled, 8, 36);
        this.ctx.restore();
    };
    Zombieland.prototype.collisionDetection = function () {
        this.playerCollisionDetection();
        this.bulletCollisionDetection();
        this.zombieCollisionDetection();
    };
    Zombieland.prototype.playerCollisionDetection = function () {
        var collisionPlayerWithCanvas = this.isCollisionWithCanvas(this.player);
        if (this.player.behavior == _gameObjects_persons_Person__WEBPACK_IMPORTED_MODULE_4__["Behavior"].Move) {
            if (collisionPlayerWithCanvas == CollisionWithCanvas.X) {
                this.player.position.x = Math.min(Math.max(this.player.position.x, 0), this.canvas.width - this.player.size.width);
            }
            else if (collisionPlayerWithCanvas == CollisionWithCanvas.Y) {
                this.player.position.y = Math.min(Math.max(this.player.position.y, 0), this.canvas.height - this.player.size.height);
            }
        }
    };
    Zombieland.prototype.bulletCollisionDetection = function () {
        var _this = this;
        this.player.bulletList = this.player.bulletList.filter(function (bullet) { return _this.isCollisionWithCanvas(bullet) == CollisionWithCanvas.None; });
        var bulletIndex = -1, zombieIndex = -1;
        this.player.bulletList.forEach(function (bullet, bulletI) {
            _this.zombieList.forEach(function (zombie, zombieI) {
                if (Zombieland.isCollisionBetweenObjects(bullet, zombie)) {
                    bulletIndex = bulletI;
                    zombieIndex = zombieI;
                }
            });
        });
        if (bulletIndex != -1 && zombieIndex != -1) {
            this.info.zombieKilled++;
            this.player.bulletList.splice(bulletIndex, 1);
            this.zombieList.splice(zombieIndex, 1);
        }
    };
    Zombieland.prototype.zombieCollisionDetection = function () {
        var _this = this;
        this.zombieList.forEach(function (zombie) {
            if (Zombieland.isCollisionBetweenObjects(_this.player, zombie)) {
                _this.highlightObject(zombie);
                _this.setResult({ winner: false });
            }
        });
    };
    Zombieland.prototype.isCollisionWithCanvas = function (gameObject) {
        if (gameObject.position.x < 0 || gameObject.position.x + gameObject.size.width > this.canvas.width) {
            return CollisionWithCanvas.X;
        }
        else if (gameObject.position.y < 0 || gameObject.position.y + gameObject.size.height > this.canvas.height) {
            return CollisionWithCanvas.Y;
        }
        else {
            return CollisionWithCanvas.None;
        }
    };
    Zombieland.prototype.highlightObject = function (gameObject) {
        var position = gameObject.position, size = gameObject.size;
        this.ctx.save();
        this.ctx.fillStyle = 'rgba(255, 0, 0, .5)';
        this.ctx.fillRect(position.x, position.y, size.width, size.height);
        this.ctx.restore();
    };
    return Zombieland;
}());
/* harmony default export */ __webpack_exports__["default"] = (Zombieland);
;


/***/ }),

/***/ "./src/assets/images/bullet.png":
/*!**************************************!*\
  !*** ./src/assets/images/bullet.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b84409666190ec9e5d7016a0dca3aa35.png");

/***/ }),

/***/ "./src/assets/images/canvasBackground.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/canvasBackground.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cb84013e5b8ceca653ad0498d2a8cbae.jpg");

/***/ }),

/***/ "./src/assets/sprites/player.png":
/*!***************************************!*\
  !*** ./src/assets/sprites/player.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "40552873961699bb11665e465df0f5dc.png");

/***/ }),

/***/ "./src/assets/sprites/zombie.png":
/*!***************************************!*\
  !*** ./src/assets/sprites/zombie.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8d2b34a182defcdf747d5f0f0c429cae.png");

/***/ }),

/***/ "./src/gameObjects/Bullet.ts":
/*!***********************************!*\
  !*** ./src/gameObjects/Bullet.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/gameObjects/GameObject.ts");
/* harmony import */ var _helpers_image_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/image.helper */ "./src/helpers/image.helper.ts");
/* harmony import */ var _assets_images_bullet_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/bullet.png */ "./src/assets/images/bullet.png");
/* harmony import */ var _services_trajectory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/trajectory.service */ "./src/services/trajectory.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(positionMovement) {
        var _this = _super.call(this) || this;
        _this.bulletImage = Object(_helpers_image_helper__WEBPACK_IMPORTED_MODULE_1__["loadImage"])(_assets_images_bullet_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
        _this.size = {
            width: _this.bulletImage.width,
            height: _this.bulletImage.height
        };
        _this.positionMovement = _this.correctPositionMovement(positionMovement);
        _this.position = {
            x: positionMovement.start.x,
            y: positionMovement.start.y
        };
        _this.movementTrajectory = _services_trajectory_service__WEBPACK_IMPORTED_MODULE_3__["default"].calculateHypotenuse(_this.positionMovement.start, _this.positionMovement.end);
        _this.velocity = 8;
        return _this;
    }
    Bullet.prototype.correctPositionMovement = function (_a) {
        var start = _a.start, end = _a.end;
        var bulletCenterEnd = {
            x: end.x - this.size.width / 2,
            y: end.y - this.size.height / 2
        };
        return {
            start: start,
            end: bulletCenterEnd
        };
    };
    Bullet.prototype.render = function (ctx) {
        this.draw(ctx);
        this.move();
    };
    Bullet.prototype.draw = function (ctx) {
        ctx.drawImage(this.bulletImage, this.position.x, this.position.y);
    };
    Bullet.prototype.move = function () {
        var _a = this.movementTrajectory, step = _a.step, direction = _a.direction;
        this.position.x += step.x * this.velocity * direction.x;
        this.position.y += step.y * this.velocity * direction.y;
    };
    return Bullet;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Bullet);


/***/ }),

/***/ "./src/gameObjects/GameObject.ts":
/*!***************************************!*\
  !*** ./src/gameObjects/GameObject.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GameObject = /** @class */ (function () {
    function GameObject(position, size) {
        if (position === void 0) { position = { x: 0, y: 0 }; }
        if (size === void 0) { size = { width: 0, height: 0 }; }
        this.position = position;
        this.size = size;
    }
    GameObject.prototype.getPositionCenter = function () {
        return {
            x: this.position.x + this.size.width / 2,
            y: this.position.y + this.size.height / 2
        };
    };
    return GameObject;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameObject);


/***/ }),

/***/ "./src/gameObjects/persons/Person.ts":
/*!*******************************************!*\
  !*** ./src/gameObjects/persons/Person.ts ***!
  \*******************************************/
/*! exports provided: Behavior, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Behavior", function() { return Behavior; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/gameObjects/GameObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Behavior;
(function (Behavior) {
    Behavior[Behavior["Stop"] = 0] = "Stop";
    Behavior[Behavior["Move"] = 1] = "Move";
})(Behavior || (Behavior = {}));
;
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(behavior, position, velocity, size) {
        if (behavior === void 0) { behavior = Behavior.Stop; }
        if (velocity === void 0) { velocity = 0; }
        var _this = _super.call(this, position, size) || this;
        _this.behavior = behavior;
        _this.velocity = velocity;
        return _this;
    }
    return Person;
}(_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Person);
;


/***/ }),

/***/ "./src/gameObjects/persons/Player.ts":
/*!*******************************************!*\
  !*** ./src/gameObjects/persons/Player.ts ***!
  \*******************************************/
/*! exports provided: DirectionPlayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPlayer", function() { return DirectionPlayer; });
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Person */ "./src/gameObjects/persons/Person.ts");
/* harmony import */ var _sprites_player_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sprites/player.sprite */ "./src/sprites/player.sprite.ts");
/* harmony import */ var _assets_sprites_player_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sprites/player.png */ "./src/assets/sprites/player.png");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Bullet */ "./src/gameObjects/Bullet.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




;
var DirectionPlayer;
(function (DirectionPlayer) {
    DirectionPlayer[DirectionPlayer["Up"] = 0] = "Up";
    DirectionPlayer[DirectionPlayer["Left"] = 1] = "Left";
    DirectionPlayer[DirectionPlayer["Down"] = 2] = "Down";
    DirectionPlayer[DirectionPlayer["Right"] = 3] = "Right";
})(DirectionPlayer || (DirectionPlayer = {}));
;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(canvas) {
        var _this = _super.call(this) || this;
        _this.sprite = new _sprites_player_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_assets_sprites_player_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
        _this.size = {
            width: _this.sprite.unit.width,
            height: _this.sprite.unit.height
        };
        _Person__WEBPACK_IMPORTED_MODULE_0__["default"].canvas = canvas;
        _this.velocity = 4;
        _this.position = {
            x: (_Person__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.width - _this.sprite.unit.width) / 2,
            y: (_Person__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.height - _this.sprite.unit.height) / 2,
        };
        _this.direction = DirectionPlayer.Down;
        _this.keyboard = {
            pressed: null,
            validKeys: ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft']
        };
        _this.mouse = {
            pressed: null,
            validKeys: [0]
        };
        _this.bulletList = [];
        _this.setUserEvents();
        return _this;
    }
    Player.prototype.render = function (ctx) {
        this.sprite.draw(ctx, this.position, this.direction, this.behavior);
        this.move();
        this.bulletList.forEach(function (bullet) {
            bullet.render(ctx);
        });
    };
    Player.prototype.move = function () {
        if (this.keyboard.pressed) {
            this.behavior = _Person__WEBPACK_IMPORTED_MODULE_0__["Behavior"].Move;
            switch (this.keyboard.pressed) {
                case 'ArrowUp':
                    this.direction = DirectionPlayer.Up;
                    this.position.y += -this.velocity;
                    break;
                case 'ArrowRight':
                    this.direction = DirectionPlayer.Right;
                    this.position.x += this.velocity;
                    break;
                case 'ArrowDown':
                    this.direction = DirectionPlayer.Down;
                    this.position.y += this.velocity;
                    break;
                case 'ArrowLeft':
                    this.direction = DirectionPlayer.Left;
                    this.position.x += -this.velocity;
                    break;
            }
        }
    };
    Player.prototype.setUserEvents = function () {
        document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
        document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
        _Person__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('mousedown', this.mouseDownHandler.bind(this), false);
        _Person__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.addEventListener('mouseup', this.mouseUpHandler.bind(this), false);
    };
    Player.prototype.keyDownHandler = function (e) {
        var code = e.code;
        if (this.keyboard.validKeys.includes(code)) {
            this.keyboard.pressed = code;
        }
    };
    Player.prototype.keyUpHandler = function (e) {
        this.keyboard.pressed = null;
        this.behavior = _Person__WEBPACK_IMPORTED_MODULE_0__["Behavior"].Stop;
    };
    Player.prototype.mouseDownHandler = function (e) {
        var button = e.button;
        if (this.mouse.validKeys.includes(button)) {
            this.mouse.pressed = button;
            this.attack(this.getMousePositionOnCanvas(e));
        }
    };
    Player.prototype.mouseUpHandler = function (e) {
        this.mouse.pressed = null;
    };
    Player.prototype.getMousePositionOnCanvas = function (e) {
        return {
            x: e.clientX - Player.canvas.offsetLeft,
            y: e.clientY - Player.canvas.offsetTop
        };
    };
    Player.prototype.attack = function (mousePosition) {
        this.createBullet(mousePosition);
    };
    Player.prototype.createBullet = function (mousePosition) {
        var bullet = new _Bullet__WEBPACK_IMPORTED_MODULE_3__["default"]({ start: this.getPositionCenter(), end: mousePosition });
        this.bulletList.push(bullet);
    };
    return Player;
}(_Person__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./src/gameObjects/persons/Zombie.ts":
/*!*******************************************!*\
  !*** ./src/gameObjects/persons/Zombie.ts ***!
  \*******************************************/
/*! exports provided: DirectionZombie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionZombie", function() { return DirectionZombie; });
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Person */ "./src/gameObjects/persons/Person.ts");
/* harmony import */ var _sprites_zombie_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sprites/zombie.sprite */ "./src/sprites/zombie.sprite.ts");
/* harmony import */ var _assets_sprites_zombie_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sprites/zombie.png */ "./src/assets/sprites/zombie.png");
/* harmony import */ var _services_trajectory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/trajectory.service */ "./src/services/trajectory.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var DirectionZombie;
(function (DirectionZombie) {
    DirectionZombie[DirectionZombie["Down"] = 0] = "Down";
    DirectionZombie[DirectionZombie["Left"] = 1] = "Left";
    DirectionZombie[DirectionZombie["Right"] = 2] = "Right";
    DirectionZombie[DirectionZombie["Up"] = 3] = "Up";
})(DirectionZombie || (DirectionZombie = {}));
;
var Zombie = /** @class */ (function (_super) {
    __extends(Zombie, _super);
    function Zombie(spriteStart, position) {
        var _this = _super.call(this) || this;
        _this.sprite = new _sprites_zombie_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_assets_sprites_zombie_png__WEBPACK_IMPORTED_MODULE_2__["default"], spriteStart);
        _this.size = {
            width: _this.sprite.unit.width,
            height: _this.sprite.unit.height
        };
        if (position) {
            _this.position = position;
        }
        _this.velocity = 1;
        _this.direction = DirectionZombie.Down;
        return _this;
    }
    Zombie.prototype.render = function (ctx, gameObject) {
        this.sprite.draw(ctx, this.position, this.direction, this.behavior);
        this.moveTo(gameObject);
    };
    Zombie.prototype.moveTo = function (gameObject) {
        this.behavior = _Person__WEBPACK_IMPORTED_MODULE_0__["Behavior"].Move;
        var _a = _services_trajectory_service__WEBPACK_IMPORTED_MODULE_3__["default"].calculateHypotenuse(this.getPositionCenter(), gameObject.getPositionCenter()), step = _a.step, direction = _a.direction;
        if (this.getPositionCenter().y >= gameObject.position.y &&
            this.getPositionCenter().y + this.size.height <= gameObject.position.y + gameObject.size.height) {
            this.direction = direction.x == -1 ? DirectionZombie.Left : DirectionZombie.Right;
        }
        else {
            this.direction = direction.y == -1 ? DirectionZombie.Up : DirectionZombie.Down;
        }
        this.position.x += step.x * this.velocity * direction.x;
        this.position.y += step.y * this.velocity * direction.y;
    };
    return Zombie;
}(_Person__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Zombie);


/***/ }),

/***/ "./src/helpers/image.helper.ts":
/*!*************************************!*\
  !*** ./src/helpers/image.helper.ts ***!
  \*************************************/
/*! exports provided: loadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
function loadImage(imageSrc, callback) {
    var img = new Image();
    img.src = imageSrc;
    callback && img.addEventListener('load', callback, false);
    return img;
}


/***/ }),

/***/ "./src/helpers/random.helper.ts":
/*!**************************************!*\
  !*** ./src/helpers/random.helper.ts ***!
  \**************************************/
/*! exports provided: getRandomIntInclusive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntInclusive", function() { return getRandomIntInclusive; });
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/***/ }),

/***/ "./src/helpers/zombie.helper.ts":
/*!**************************************!*\
  !*** ./src/helpers/zombie.helper.ts ***!
  \**************************************/
/*! exports provided: getRandomZombie, getRandomPositionZombie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomZombie", function() { return getRandomZombie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomPositionZombie", function() { return getRandomPositionZombie; });
/* harmony import */ var _random_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random.helper */ "./src/helpers/random.helper.ts");

function getRandomZombie() {
    return {
        x: Object(_random_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, 3),
        y: Object(_random_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, 1)
    };
}
;
function getRandomPositionZombie(playerPosition, canvas, safeZone) {
    if (safeZone === void 0) { safeZone = 200; }
    var position = { x: 0, y: 0 };
    var randomLeftPositionX = Object(_random_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, playerPosition.x - safeZone);
    var randomRightPositionX = Object(_random_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(playerPosition.x + safeZone, canvas.width);
    if (playerPosition.x - safeZone <= 0) {
        position.x = randomRightPositionX;
    }
    else if (playerPosition.x + safeZone >= canvas.width) {
        position.x = randomLeftPositionX;
    }
    else {
        var random = Object(_random_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, 1);
        if (random) {
            position.x = randomRightPositionX;
        }
        else {
            position.x = randomLeftPositionX;
        }
    }
    var randomLeftPositionY = Object(_random_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, playerPosition.y - safeZone);
    var randomRightPositionY = Object(_random_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(playerPosition.y + safeZone, canvas.height);
    if (playerPosition.y - safeZone <= 0) {
        position.y = randomRightPositionY;
    }
    else if (playerPosition.y + safeZone >= canvas.height) {
        position.y = randomLeftPositionY;
    }
    else {
        var random = Object(_random_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, 1);
        if (random) {
            position.y = randomRightPositionY;
        }
        else {
            position.y = randomLeftPositionY;
        }
    }
    return position;
}
;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.ts");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/notification.service */ "./src/services/notification.service.ts");



var rootElem = document.getElementById('root');
var zombieland = new _App__WEBPACK_IMPORTED_MODULE_0__["default"](rootElem, { width: 960, height: 480 });
Object(_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["viewIntro"])(zombieland.render.bind(zombieland));


/***/ }),

/***/ "./src/services/countdown.service.ts":
/*!*******************************************!*\
  !*** ./src/services/countdown.service.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Countdown = /** @class */ (function () {
    function Countdown(totalSeconds) {
        this.totalSeconds = totalSeconds;
        this.timerId = -1;
        this.remains = '00:00';
        this.end = false;
    }
    Countdown.prototype.start = function () {
        var _this = this;
        this.setTime();
        this.timerId = window.setInterval(function () {
            _this.setTime();
            if (!_this.totalSeconds--) {
                _this.end = true;
                _this.stop();
                return;
            }
        }, 1000);
    };
    Countdown.prototype.setTime = function () {
        var minutes = 0, seconds = 0;
        seconds = this.totalSeconds % 60;
        minutes = Math.floor(this.totalSeconds / 60) % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        this.remains = minutes + ":" + seconds;
    };
    Countdown.prototype.stop = function () {
        clearInterval(this.timerId);
    };
    return Countdown;
}());
/* harmony default export */ __webpack_exports__["default"] = (Countdown);


/***/ }),

/***/ "./src/services/notification.css":
/*!***************************************!*\
  !*** ./src/services/notification.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./notification.css */ "./node_modules/css-loader/dist/cjs.js!./src/services/notification.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/services/notification.service.ts":
/*!**********************************************!*\
  !*** ./src/services/notification.service.ts ***!
  \**********************************************/
/*! exports provided: viewIntro, viewResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewIntro", function() { return viewIntro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return viewResult; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.css */ "./src/services/notification.css");
/* harmony import */ var _notification_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notification_css__WEBPACK_IMPORTED_MODULE_1__);


function viewIntro(callback) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: 'Zombieland',
        html: "\n      <table>\n        <caption>Controls</caption>\n        <thead>\n          <tr>\n            <th>Action</th>\n            <th>Key</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Up</td>\n            <td>&uarr;</td>\n          </tr>\n          <tr>\n            <td>Right</td>\n            <td>&rarr;</td>\n          </tr>\n          <tr>\n            <td>Down</td>\n            <td>&darr;</td>\n          </tr>\n          <tr>\n            <td>Left</td>\n            <td>&larr;</td>\n          </tr>\n          <tr>\n            <td>Fire</td>\n            <td>left &#128432; button</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class='slogan'>fight or die</p>\n    ",
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then(function (result) {
        if (result) {
            callback();
        }
    });
}
function viewResult(message, callback) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        icon: 'info',
        title: message,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: 'Restart',
    }).then(function (result) {
        if (result) {
            callback();
        }
    });
}


/***/ }),

/***/ "./src/services/trajectory.service.ts":
/*!********************************************!*\
  !*** ./src/services/trajectory.service.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Trajectory = /** @class */ (function () {
    function Trajectory() {
    }
    Trajectory.calculateHypotenuse = function (start, end) {
        var direction = {
            x: start.x < end.x ? 1 : -1,
            y: start.y < end.y ? 1 : -1
        };
        var deltaDistance = {
            x: Math.abs(start.x - end.x),
            y: Math.abs(start.y - end.y)
        };
        var step = { x: 0, y: 0 };
        if (deltaDistance.x > deltaDistance.y) {
            step.x = 1;
            step.y = deltaDistance.y / deltaDistance.x;
        }
        else {
            step.y = 1;
            step.x = deltaDistance.x / deltaDistance.y;
        }
        return { step: step, direction: direction };
    };
    return Trajectory;
}());
/* harmony default export */ __webpack_exports__["default"] = (Trajectory);


/***/ }),

/***/ "./src/sprites/player.sprite.ts":
/*!**************************************!*\
  !*** ./src/sprites/player.sprite.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprites/sprite.ts");
/* harmony import */ var _gameObjects_persons_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameObjects/persons/Person */ "./src/gameObjects/persons/Person.ts");
/* harmony import */ var _helpers_image_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/image.helper */ "./src/helpers/image.helper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PlayerSprite = /** @class */ (function (_super) {
    __extends(PlayerSprite, _super);
    function PlayerSprite(spriteImageUrl) {
        var _this = this;
        var unit = { width: 64, height: 64, rows: 4, columns: 9 };
        _this = _super.call(this, unit) || this;
        PlayerSprite.spriteImage = Object(_helpers_image_helper__WEBPACK_IMPORTED_MODULE_2__["loadImage"])(spriteImageUrl);
        return _this;
    }
    PlayerSprite.prototype.draw = function (ctx, position, direction, behavior) {
        var sx = behavior == _gameObjects_persons_Person__WEBPACK_IMPORTED_MODULE_1__["Behavior"].Stop ? 0 : (this.frame.column + 1) * this.unit.width;
        var sy = direction * this.unit.height;
        ctx.drawImage(PlayerSprite.spriteImage, sx, sy, this.unit.width, this.unit.height, position.x, position.y, this.unit.width, this.unit.height);
        if (behavior == _gameObjects_persons_Person__WEBPACK_IMPORTED_MODULE_1__["Behavior"].Move) {
            this.animate();
        }
    };
    PlayerSprite.prototype.animate = function () {
        if (++this.frame.counter == this.frame.delay) {
            if (this.frame.column < this.unit.columns - 2) {
                this.frame.column++;
            }
            else {
                this.frame.column = 0;
            }
            this.frame.counter = 0;
        }
    };
    return PlayerSprite;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (PlayerSprite);


/***/ }),

/***/ "./src/sprites/sprite.ts":
/*!*******************************!*\
  !*** ./src/sprites/sprite.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Sprite = /** @class */ (function () {
    function Sprite(unit, frame) {
        if (frame === void 0) { frame = { row: 0, column: 0, delay: 4, counter: 0 }; }
        this.unit = unit;
        this.frame = frame;
    }
    return Sprite;
}());
/* harmony default export */ __webpack_exports__["default"] = (Sprite);


/***/ }),

/***/ "./src/sprites/zombie.sprite.ts":
/*!**************************************!*\
  !*** ./src/sprites/zombie.sprite.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprites/sprite.ts");
/* harmony import */ var _gameObjects_persons_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameObjects/persons/Person */ "./src/gameObjects/persons/Person.ts");
/* harmony import */ var _helpers_image_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/image.helper */ "./src/helpers/image.helper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ZombieSprite = /** @class */ (function (_super) {
    __extends(ZombieSprite, _super);
    function ZombieSprite(spriteImageUrl, spriteStart) {
        if (spriteStart === void 0) { spriteStart = { x: 0, y: 0 }; }
        var _this = this;
        var unit = { width: 32, height: 32, rows: 4, columns: 3 };
        _this = _super.call(this, unit) || this;
        _this.start = spriteStart;
        ZombieSprite.spriteImage = Object(_helpers_image_helper__WEBPACK_IMPORTED_MODULE_2__["loadImage"])(spriteImageUrl);
        return _this;
    }
    ZombieSprite.prototype.draw = function (ctx, position, direction, behavior) {
        this.frame.row = direction;
        var sx = (this.start.x * this.unit.columns + this.frame.column) * this.unit.width;
        var sy = (this.start.y * this.unit.rows + this.frame.row) * this.unit.height;
        ctx.drawImage(ZombieSprite.spriteImage, sx, sy, this.unit.width, this.unit.height, position.x, position.y, this.unit.width, this.unit.height);
        if (behavior == _gameObjects_persons_Person__WEBPACK_IMPORTED_MODULE_1__["Behavior"].Move) {
            this.animate();
        }
    };
    ZombieSprite.prototype.animate = function () {
        if (++this.frame.counter == this.frame.delay) {
            if (this.frame.column < this.unit.columns - 1) {
                this.frame.column++;
            }
            else {
                this.frame.column = 0;
            }
            this.frame.counter = 0;
        }
    };
    return ZombieSprite;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ZombieSprite);


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYnVsbGV0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9jYW52YXNCYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Nwcml0ZXMvcGxheWVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Nwcml0ZXMvem9tYmllLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZU9iamVjdHMvQnVsbGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lT2JqZWN0cy9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lT2JqZWN0cy9wZXJzb25zL1BlcnNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZU9iamVjdHMvcGVyc29ucy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVPYmplY3RzL3BlcnNvbnMvWm9tYmllLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2ltYWdlLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9yYW5kb20uaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3pvbWJpZS5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb3VudGRvd24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbm90aWZpY2F0aW9uLmNzcz82M2Y2Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdHJhamVjdG9yeS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL3BsYXllci5zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL3pvbWJpZS5zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxVQUFVLHFCQUFxQiw2QkFBNkIsb0JBQW9CLGdDQUFnQyxrQkFBa0IsS0FBSyx1QkFBdUIsOEJBQThCLEtBQUssaUJBQWlCLGdDQUFnQyxLQUFLO0FBQzlRO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsTUFBTSxnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyxrQkFBa0IsbUJBQW1CLDRCQUE0QixLQUFLLGVBQWUsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssc0JBQXNCLHdCQUF3QixLQUFLO0FBQzdUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUE0RDtBQUM3RCxDQUFDLFNBQ2dDO0FBQ2pDLENBQUMscUJBQXFCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUMsbURBQW1EOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7O0FBRTlELHFEQUFxRDs7QUFFckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixHQUFHO0FBQ0g7QUFDQSwyQkFBMkI7QUFDM0IsR0FBRztBQUNIO0FBQ0E7O0FBRUEsZ0NBQWdDOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0Esc0NBQXNDOztBQUV0QywyQ0FBMkM7O0FBRTNDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQiw2Q0FBNkM7O0FBRTdDLHdDQUF3Qzs7QUFFeEMsK0JBQStCOztBQUUvQixnQ0FBZ0M7O0FBRWhDLGdDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qjs7QUFFekIsb0RBQW9EOztBQUVwRCx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsVUFBVSxpQkFBaUIsb0JBQW9CLDBEQUEwRDtBQUN6RyxVQUFVLGdCQUFnQixvQkFBb0IseURBQXlEO0FBQ3ZHO0FBQ0E7QUFDQSxrQ0FBa0Msd0NBQXdDO0FBQzFFLFVBQVUsaUJBQWlCO0FBQzNCLFVBQVUsZ0JBQWdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlCQUF5Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSwyREFBMkQsS0FBSztBQUNoRSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHNEQUFzRCxNQUFNLFFBQVEsS0FBSztBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLGlEQUFpRDs7QUFFakQsaUJBQWlCLDhCQUE4QjtBQUMvQyw4QkFBOEI7O0FBRTlCO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0EsMENBQTBDO0FBQzFDLEdBQUc7QUFDSCw4QkFBOEI7QUFDOUIsR0FBRztBQUNILG1CQUFtQjtBQUNuQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQSx5QkFBeUI7QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qjs7QUFFN0IsNkJBQTZCOztBQUU3QiwwQkFBMEI7O0FBRTFCO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUgsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0JBQW9COztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0YsZ0RBQWdEOzs7QUFHaEQsb0NBQW9DOzs7QUFHcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0QscURBQXFEOztBQUVyRCw0Q0FBNEMsK0JBQStCLGlIQUFpSCxTQUFTLGNBQWMsU0FBUyxlQUFlLG9DQUFvQyw4QkFBOEIsNkJBQTZCLG1CQUFtQix5QkFBeUIsbUJBQW1CLFdBQVcsZUFBZSxrQkFBa0IsZ0JBQWdCLDhCQUE4Qix1Q0FBdUMsOEJBQThCLDZCQUE2QixtQkFBbUIsc0NBQXNDLG1CQUFtQixZQUFZLHVCQUF1QiwyQkFBMkIsY0FBYyxjQUFjLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLGVBQWUsc0NBQXNDLGdCQUFnQixXQUFXLFlBQVksZUFBZSx3Q0FBd0MsdUJBQXVCLDJCQUEyQixjQUFjLHFDQUFxQyxVQUFVLGNBQWMsV0FBVyxTQUFTLHlEQUF5RCxvQkFBb0IsYUFBYSx5QkFBeUIsbUJBQW1CLGdCQUFnQixnQkFBZ0IsbUVBQW1FLHlEQUF5RCxpQkFBaUIsdUVBQXVFLFVBQVUsV0FBVyw0RUFBNEUsV0FBVyxjQUFjLHlGQUF5RixhQUFhLDBGQUEwRixjQUFjLHdDQUF3QywwQkFBMEIsV0FBVyxZQUFZLGlCQUFpQix1Q0FBdUMsaUJBQWlCLHVCQUF1QixjQUFjLDZDQUE2Qyx3REFBd0Qsd0NBQXdDLHFCQUFxQiw2RUFBNkUsa0JBQWtCLFlBQVksV0FBVyxnQ0FBZ0Msd0JBQXdCLGtCQUFrQiwwRkFBMEYsVUFBVSxXQUFXLGlDQUFpQyx5QkFBeUIsaUNBQWlDLHlCQUF5QiwwQkFBMEIsMkZBQTJGLFdBQVcsYUFBYSxpQ0FBaUMseUJBQXlCLDBCQUEwQiw0REFBNEQsVUFBVSxXQUFXLDJEQUEyRCxNQUFNLGFBQWEsY0FBYyxnQkFBZ0Isb0VBQW9FLGVBQWUsZ0ZBQWdGLFlBQVksYUFBYSxZQUFZLGlGQUFpRixZQUFZLGNBQWMsY0FBYyxnRkFBZ0YsNERBQTRELG9EQUFvRCxpRkFBaUYsNkRBQTZELHFEQUFxRCxvQ0FBb0MsdUNBQXVDLCtCQUErQixvQ0FBb0MsZ0RBQWdELHdDQUF3QyxpQkFBaUIsb0JBQW9CLGFBQWEsZUFBZSxhQUFhLE1BQU0sUUFBUSxTQUFTLE9BQU8sOEJBQThCLDZCQUE2QixtQkFBbUIseUJBQXlCLG1CQUFtQix3QkFBd0IsdUJBQXVCLGVBQWUsa0JBQWtCLHdDQUF3QyxnQ0FBZ0MsaUNBQWlDLHFDQUFxQywwQkFBMEIscUNBQXFDLHlCQUF5QiwyQkFBMkIsd0JBQXdCLHVCQUF1QixpRUFBaUUsd0JBQXdCLHVCQUF1Qix1QkFBdUIsMkJBQTJCLGdFQUFnRSx3QkFBd0IsdUJBQXVCLHFCQUFxQix5QkFBeUIsOEJBQThCLHlCQUF5QixtQkFBbUIsdUVBQXVFLHlCQUF5QixtQkFBbUIsdUJBQXVCLDJCQUEyQixzRUFBc0UseUJBQXlCLG1CQUFtQixxQkFBcUIseUJBQXlCLDhCQUE4QixzQkFBc0IscUJBQXFCLHVFQUF1RSxzQkFBc0IscUJBQXFCLHVCQUF1QiwyQkFBMkIsc0VBQXNFLHNCQUFzQixxQkFBcUIscUJBQXFCLHlCQUF5Qiw0T0FBNE8sZ0JBQWdCLG9EQUFvRCw4QkFBOEIsdUJBQXVCLG1CQUFtQixPQUFPLG1CQUFtQix3QkFBd0IsdUJBQXVCLDZDQUE2Qyw4QkFBOEIsdUJBQXVCLG1CQUFtQixPQUFPLHFCQUFxQix3QkFBd0IsdUJBQXVCLG1DQUFtQyxtQkFBbUIsT0FBTyw0QkFBNEIsNkJBQTZCLHNCQUFzQiw2SUFBNkkseUJBQXlCLG1CQUFtQiwyVEFBMlQsd0JBQXdCLHVCQUF1Qix3VEFBd1Qsc0JBQXNCLHFCQUFxQixnREFBZ0QsOEJBQThCLHVCQUF1QixtQkFBbUIsT0FBTyxxQkFBcUIsd0JBQXdCLHVCQUF1QixvWEFBb1gsWUFBWSxtRUFBbUUsOEJBQThCLG9CQUFvQixhQUFhLGFBQWEsa0JBQWtCLHNCQUFzQiw0QkFBNEIsNkJBQTZCLHNCQUFzQix3QkFBd0IsdUJBQXVCLFdBQVcsZUFBZSxlQUFlLFlBQVksc0JBQXNCLGdCQUFnQixvQkFBb0IsZUFBZSxtQkFBbUIsVUFBVSwyQkFBMkIsa0JBQWtCLGNBQWMsb0JBQW9CLGFBQWEsNEJBQTRCLDZCQUE2QixzQkFBc0IseUJBQXlCLG1CQUFtQixhQUFhLGtCQUFrQixlQUFlLGdCQUFnQixVQUFVLGNBQWMsa0JBQWtCLGdCQUFnQixrQkFBa0Isb0JBQW9CLHFCQUFxQixlQUFlLG9CQUFvQixhQUFhLFVBQVUsZUFBZSx5QkFBeUIsbUJBQW1CLHdCQUF3Qix1QkFBdUIsV0FBVyxxQkFBcUIsMkRBQTJELFdBQVcsdURBQXVELHVHQUF1RyxnRUFBZ0Usd0RBQXdELHVHQUF1RyxnRUFBZ0UseURBQXlELHNCQUFzQixZQUFZLGFBQWEsZ0JBQWdCLFVBQVUsc0VBQXNFLDhEQUE4RCwrQkFBK0IsbUJBQW1CLHlCQUF5Qix1Q0FBdUMsa0JBQWtCLGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHdEQUF3RCxrQkFBa0IsaUJBQWlCLHNFQUFzRSxhQUFhLHFCQUFxQixXQUFXLFlBQVksZ0JBQWdCLHNFQUFzRSw4REFBOEQsc0JBQXNCLGtCQUFrQiwrQkFBK0IsNEJBQTRCLGNBQWMsZUFBZSxtQkFBbUIsZ0JBQWdCLGdCQUFnQiw4QkFBOEIsZUFBZSw0QkFBNEIsU0FBUyxvQkFBb0IsbUJBQW1CLHlCQUF5QixXQUFXLG1CQUFtQiwyQkFBMkIsU0FBUyxvQkFBb0IsbUJBQW1CLHNCQUFzQixXQUFXLG1CQUFtQixvQkFBb0IsVUFBVSx3REFBd0QsZ0NBQWdDLFNBQVMsY0FBYyx3QkFBd0IsdUJBQXVCLGtCQUFrQixnQkFBZ0IsMEJBQTBCLGNBQWMsY0FBYywwQkFBMEIsa0JBQWtCLFNBQVMsT0FBTyxXQUFXLGFBQWEsMEJBQTBCLGFBQWEsZUFBZSxtQkFBbUIsYUFBYSxrQkFBa0IsVUFBVSxNQUFNLFFBQVEsd0JBQXdCLHVCQUF1QixZQUFZLGFBQWEsVUFBVSxnQkFBZ0Isc0NBQXNDLDhCQUE4QixZQUFZLGdCQUFnQixnQkFBZ0IsZUFBZSxXQUFXLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLGVBQWUsbUJBQW1CLHVCQUF1QixlQUFlLGVBQWUsY0FBYywrQkFBK0IsU0FBUyxlQUFlLFVBQVUsd0JBQXdCLHVCQUF1QixTQUFTLFVBQVUsY0FBYyxrQkFBa0IsZ0JBQWdCLG1CQUFtQixrQkFBa0IscUJBQXFCLG9GQUFvRixnQkFBZ0IseUNBQXlDLHNCQUFzQixXQUFXLG1EQUFtRCwyQ0FBMkMseUJBQXlCLHNCQUFzQixtQkFBbUIsMkNBQTJDLGNBQWMsa0JBQWtCLDRGQUE0RiwrQkFBK0IscUNBQXFDLDJEQUEyRCx5QkFBeUIsVUFBVSwyQkFBMkIsMEhBQTBILFdBQVcsK0ZBQStGLFdBQVcsMkdBQTJHLFdBQVcsOEdBQThHLFdBQVcsZ0ZBQWdGLFdBQVcsYUFBYSxnQkFBZ0IsZ0JBQWdCLG1CQUFtQixVQUFVLG9CQUFvQixVQUFVLGNBQWMsZ0JBQWdCLGtCQUFrQix1Q0FBdUMsZUFBZSxVQUFVLGtCQUFrQixvQkFBb0IsYUFBYSxlQUFlLGdCQUFnQiwwQkFBMEIsZUFBZSxZQUFZLG1CQUFtQixrQkFBa0IsZ0JBQWdCLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxzQkFBc0IsbUJBQW1CLGNBQWMsa0JBQWtCLDZCQUE2Qix5QkFBeUIsbUJBQW1CLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLGNBQWMseUNBQXlDLGNBQWMsa0JBQWtCLHlDQUF5QyxjQUFjLDBCQUEwQixhQUFhLHlCQUF5QixtQkFBbUIsd0JBQXdCLHVCQUF1QixlQUFlLGdCQUFnQixtQkFBbUIsV0FBVyxjQUFjLGdCQUFnQixrQ0FBa0MsY0FBYyxxQkFBcUIsWUFBWSxnQkFBZ0IsYUFBYSxnQkFBZ0Isa0JBQWtCLHlCQUF5QixXQUFXLGdCQUFnQixrQkFBa0Isa0JBQWtCLFlBQVksa0JBQWtCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLFVBQVUsV0FBVywyQkFBMkIsK0JBQStCLGtCQUFrQixvQkFBb0IsZ0JBQWdCLGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLGdDQUFnQyxvQkFBb0IsYUFBYSx5QkFBeUIsbUJBQW1CLGlCQUFpQix3QkFBd0IscUJBQXFCLGNBQWMsc0NBQXNDLGtCQUFrQixtQkFBbUIsWUFBWSxtREFBbUQsY0FBYyxrQkFBa0IsYUFBYSxlQUFlLGVBQWUscUJBQXFCLHlCQUF5QixnRUFBZ0UsY0FBYyxnQ0FBZ0Msd0JBQXdCLGlFQUFpRSxVQUFVLGlDQUFpQyx5QkFBeUIsd0NBQXdDLCtDQUErQyx1Q0FBdUMsc0RBQXNELGlEQUFpRCx5Q0FBeUMsMEJBQTBCLHFCQUFxQixjQUFjLHVCQUF1QixxQkFBcUIsY0FBYywyQkFBMkIscUJBQXFCLGNBQWMsMEJBQTBCLHFCQUFxQixjQUFjLCtEQUErRCxrQkFBa0IsYUFBYSxhQUFhLGdDQUFnQyx3QkFBd0Isa0JBQWtCLDRFQUE0RSxhQUFhLGVBQWUsaUNBQWlDLHlCQUF5Qix1Q0FBdUMsK0JBQStCLDhCQUE4Qiw2RUFBNkUsYUFBYSxhQUFhLGlDQUFpQyx5QkFBeUIsa0NBQWtDLDBCQUEwQiw4QkFBOEIsOENBQThDLGtCQUFrQixVQUFVLFdBQVcsWUFBWSx1QkFBdUIsV0FBVyxZQUFZLHdDQUF3QyxrQkFBa0IsNkNBQTZDLGtCQUFrQixVQUFVLFNBQVMsYUFBYSxjQUFjLGVBQWUsaUNBQWlDLHlCQUF5QixzREFBc0QsY0FBYyxrQkFBa0IsVUFBVSxlQUFlLHFCQUFxQix5QkFBeUIsa0VBQWtFLFlBQVksYUFBYSxlQUFlLGdDQUFnQyx3QkFBd0IsbUVBQW1FLFlBQVksV0FBVyxlQUFlLGlDQUFpQyx5QkFBeUIsa0VBQWtFLHNEQUFzRCw4Q0FBOEMsbUVBQW1FLHVEQUF1RCwrQ0FBK0MsNkVBQTZFLG1FQUFtRSwyREFBMkQsc0JBQXNCLHlCQUF5QixtQkFBbUIsa0JBQWtCLFVBQVUsbUJBQW1CLGdCQUFnQix5QkFBeUIscUJBQXFCLGtCQUFrQiwyQ0FBMkMsV0FBVyxVQUFVLFdBQVcsa0JBQWtCLG1CQUFtQixXQUFXLGdCQUFnQixrQkFBa0Isc0VBQXNFLG1CQUFtQiwyRkFBMkYsbUJBQW1CLFdBQVcsZ0dBQWdHLG1CQUFtQixnREFBZ0QsV0FBVyxZQUFZLFlBQVksY0FBYyxtQkFBbUIsZUFBZSx3Q0FBd0MsWUFBWSxpQ0FBaUMseUJBQXlCLFlBQVksMkNBQTJDLG1DQUFtQyxtQkFBbUIsd0JBQXdCLGdCQUFnQix5QkFBeUIsa0JBQWtCLFlBQVksV0FBVyxZQUFZLGdCQUFnQix3QkFBd0IsV0FBVyxPQUFPLHFDQUFxQyxRQUFRLFVBQVUsaUNBQWlDLG1CQUFtQixxQkFBcUIsb0JBQW9CLGNBQWMsbUVBQW1FLG1CQUFtQixxQkFBcUIsb0JBQW9CLGNBQWMsNEJBQTRCLG1CQUFtQix1Q0FBdUMsb0NBQW9DLEdBQUcsb0RBQW9ELDRDQUE0QyxJQUFJLCtDQUErQyx1Q0FBdUMsSUFBSSxvREFBb0QsNENBQTRDLEtBQUssMkNBQTJDLG9DQUFvQyw0QkFBNEIsR0FBRyxvREFBb0QsNENBQTRDLElBQUksK0NBQStDLHVDQUF1QyxJQUFJLG9EQUFvRCw0Q0FBNEMsS0FBSywyQ0FBMkMsb0NBQW9DLG9DQUFvQyxLQUFLLGdDQUFnQyx3QkFBd0IsV0FBVyw0QkFBNEIsS0FBSyxnQ0FBZ0Msd0JBQXdCLFdBQVcsd0RBQXdELEdBQUcsWUFBWSxhQUFhLFFBQVEsSUFBSSxXQUFXLFlBQVksUUFBUSxJQUFJLFdBQVcsWUFBWSxjQUFjLElBQUksYUFBYSxXQUFXLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxnREFBZ0QsR0FBRyxZQUFZLGFBQWEsUUFBUSxJQUFJLFdBQVcsWUFBWSxRQUFRLElBQUksV0FBVyxZQUFZLGNBQWMsSUFBSSxhQUFhLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLHlEQUF5RCxHQUFHLFlBQVksY0FBYyxRQUFRLElBQUksV0FBVyxjQUFjLFFBQVEsSUFBSSxZQUFZLFFBQVEsY0FBYyxLQUFLLFlBQVksY0FBYyxlQUFlLGlEQUFpRCxHQUFHLFlBQVksY0FBYyxRQUFRLElBQUksV0FBVyxjQUFjLFFBQVEsSUFBSSxZQUFZLFFBQVEsY0FBYyxLQUFLLFlBQVksY0FBYyxlQUFlLDhCQUE4QixHQUFHLDRCQUE0QixvQkFBb0IsSUFBSSw4QkFBOEIsc0JBQXNCLElBQUksNkJBQTZCLHFCQUFxQixLQUFLLDJCQUEyQixvQkFBb0Isc0JBQXNCLEdBQUcsNEJBQTRCLG9CQUFvQixJQUFJLDhCQUE4QixzQkFBc0IsSUFBSSw2QkFBNkIscUJBQXFCLEtBQUssMkJBQTJCLG9CQUFvQiw4QkFBOEIsR0FBRywyQkFBMkIsbUJBQW1CLFVBQVUsS0FBSyw0QkFBNEIsb0JBQW9CLFdBQVcsc0JBQXNCLEdBQUcsMkJBQTJCLG1CQUFtQixVQUFVLEtBQUssNEJBQTRCLG9CQUFvQixXQUFXLGtEQUFrRCxHQUFHLGFBQWEsYUFBYSxRQUFRLElBQUksYUFBYSxZQUFZLFFBQVEsSUFBSSxhQUFhLGFBQWEsY0FBYyxJQUFJLFFBQVEsY0FBYyxlQUFlLEtBQUssYUFBYSxhQUFhLGdCQUFnQiwwQ0FBMEMsR0FBRyxhQUFhLGFBQWEsUUFBUSxJQUFJLGFBQWEsWUFBWSxRQUFRLElBQUksYUFBYSxhQUFhLGNBQWMsSUFBSSxRQUFRLGNBQWMsZUFBZSxLQUFLLGFBQWEsYUFBYSxnQkFBZ0IsbURBQW1ELEdBQUcsWUFBWSxjQUFjLFFBQVEsSUFBSSxZQUFZLGNBQWMsUUFBUSxJQUFJLGFBQWEsUUFBUSxlQUFlLEtBQUssWUFBWSxXQUFXLGdCQUFnQiwyQ0FBMkMsR0FBRyxZQUFZLGNBQWMsUUFBUSxJQUFJLFlBQVksY0FBYyxRQUFRLElBQUksYUFBYSxRQUFRLGVBQWUsS0FBSyxZQUFZLFdBQVcsZ0JBQWdCLHNEQUFzRCxHQUFHLGlDQUFpQyx5QkFBeUIsR0FBRyxpQ0FBaUMseUJBQXlCLElBQUksa0NBQWtDLDBCQUEwQixLQUFLLGtDQUFrQywyQkFBMkIsOENBQThDLEdBQUcsaUNBQWlDLHlCQUF5QixHQUFHLGlDQUFpQyx5QkFBeUIsSUFBSSxrQ0FBa0MsMEJBQTBCLEtBQUssa0NBQWtDLDJCQUEyQiw4Q0FBOEMsR0FBRyxtQkFBbUIsNEJBQTRCLG9CQUFvQixVQUFVLElBQUksbUJBQW1CLDRCQUE0QixvQkFBb0IsVUFBVSxJQUFJLG1CQUFtQiw4QkFBOEIsc0JBQXNCLEtBQUssYUFBYSwyQkFBMkIsbUJBQW1CLFdBQVcsc0NBQXNDLEdBQUcsbUJBQW1CLDRCQUE0QixvQkFBb0IsVUFBVSxJQUFJLG1CQUFtQiw0QkFBNEIsb0JBQW9CLFVBQVUsSUFBSSxtQkFBbUIsOEJBQThCLHNCQUFzQixLQUFLLGFBQWEsMkJBQTJCLG1CQUFtQixXQUFXLDRDQUE0QyxHQUFHLGtDQUFrQywwQkFBMEIsVUFBVSxLQUFLLDZCQUE2QixxQkFBcUIsV0FBVyxvQ0FBb0MsR0FBRyxrQ0FBa0MsMEJBQTBCLFVBQVUsS0FBSyw2QkFBNkIscUJBQXFCLFdBQVcsd0NBQXdDLEdBQUcsNEJBQTRCLG9CQUFvQixLQUFLLGlDQUFpQywwQkFBMEIsZ0NBQWdDLEdBQUcsNEJBQTRCLG9CQUFvQixLQUFLLGlDQUFpQywwQkFBMEIsaUVBQWlFLGdCQUFnQix1QkFBdUIsc0JBQXNCLHdDQUF3QyxTQUFTLFdBQVcsWUFBWSxVQUFVLGtDQUFrQyx1Q0FBdUMscURBQXFELG1DQUFtQyxrREFBa0QsTUFBTSxTQUFTLG1DQUFtQywyQkFBMkIsK0dBQStHLE1BQU0sT0FBTyw4R0FBOEcsTUFBTSxRQUFRLHFEQUFxRCxRQUFRLFNBQVMsdUNBQXVDLCtCQUErQixxSEFBcUgsUUFBUSxPQUFPLG1DQUFtQywyQkFBMkIsb0hBQW9ILFFBQVEsUUFBUSxtQ0FBbUMsMkJBQTJCLHFEQUFxRCxTQUFTLFNBQVMsbUNBQW1DLDJCQUEyQixxSEFBcUgsU0FBUyxPQUFPLG9IQUFvSCxRQUFRLFNBQVMsYUFBYSxpRUFBaUUsNEJBQTRCLG9GQUFvRixhQUFhLGtGQUFrRiwyQkFBMkIsd0NBQXdDLDZCQUE2QixrREFBa0QsTUFBTSxXQUFXLFlBQVksU0FBUyxtQ0FBbUMsMkJBQTJCLDhHQUE4RyxNQUFNLFFBQVEsWUFBWSxVQUFVLCtHQUErRyxNQUFNLFdBQVcsWUFBWSxPQUFPLHFIQUFxSCxRQUFRLFdBQVcsWUFBWSxPQUFPLG1DQUFtQywyQkFBMkIscURBQXFELFFBQVEsV0FBVyxZQUFZLFNBQVMsdUNBQXVDLCtCQUErQixvSEFBb0gsUUFBUSxRQUFRLFlBQVksVUFBVSxtQ0FBbUMsMkJBQTJCLHFIQUFxSCxTQUFTLFdBQVcsU0FBUyxPQUFPLHFEQUFxRCxTQUFTLFdBQVcsU0FBUyxTQUFTLG1DQUFtQywyQkFBMkIsb0hBQW9ILFNBQVMsUUFBUSxTQUFTLFVBQVUscUNBQXFDLDRCQUE0Qiw2QkFBNkIsc0JBQXNCLDBCQUEwQixvQkFBb0Isb0RBQW9ELG1CQUFtQixPQUFPLG1CQUFtQixhQUFhLG1CQUFtQixvREFBb0Qsd0JBQXdCLHVCQUF1QixrREFBa0QsV0FBVyxvQkFBb0IsY0FBYywrREFBK0QsY0FBYyxHOzs7Ozs7Ozs7Ozs7QUM5OUZ4dzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUNiO0FBQ0E7QUFDRztBQUNHO0FBQ0w7QUFDZ0M7QUFDdEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtEQUFrRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsdUJBQXVCLDJFQUFXLENBQUM7QUFDaEY7QUFDQTtBQUNBLGdDQUFnQyx1RUFBUztBQUN6QztBQUNBLDBCQUEwQixtRUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IscUNBQXFDLG1FQUFNLENBQUMsOEVBQWUsSUFBSSxzRkFBdUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlGQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtRUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvRUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRix3RUFBd0UsRUFBRTtBQUM1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDYyx5RUFBVSxFQUFDO0FBQzFCOzs7Ozs7Ozs7Ozs7O0FDdExBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ3FDO0FBQ2M7QUFDSztBQUNEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVFQUFTLENBQUMsaUVBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9FQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtREFBVTtBQUNHLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM1RHRCO0FBQUE7QUFDQTtBQUNBLGtDQUFrQyxhQUFhLGNBQWM7QUFDN0QsOEJBQThCLFNBQVMsdUJBQXVCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNmMUI7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDc0M7QUFDaEM7QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwQkFBMEI7QUFDNUQsa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLG1EQUFVO0FBQ0cscUVBQU0sRUFBQztBQUN0Qjs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUMyQztBQUNXO0FBQ087QUFDL0I7QUFDL0I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBDQUEwQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhEQUFZLENBQUMsa0VBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFNO0FBQ2Q7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBTTtBQUN0QixnQkFBZ0IsK0NBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdEQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFNO0FBQ2QsUUFBUSwrQ0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQU0sRUFBRSxzREFBc0Q7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLCtDQUFNO0FBQ08scUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQzdIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDMkM7QUFDVztBQUNPO0FBQ0g7QUFDcEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4REFBWSxDQUFDLGtFQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFRO0FBQ2hDLGlCQUFpQixvRUFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLCtDQUFNO0FBQ08scUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQzVEdEI7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFDakQ7QUFDUDtBQUNBLFdBQVcsNEVBQXFCO0FBQ2hDLFdBQVcsNEVBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCLGdCQUFnQjtBQUM5QyxvQkFBb0I7QUFDcEIsOEJBQThCLDRFQUFxQjtBQUNuRCwrQkFBK0IsNEVBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRFQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0RUFBcUI7QUFDbkQsK0JBQStCLDRFQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0RUFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNIO0FBQ2dDO0FBQzVEO0FBQ0EscUJBQXFCLDRDQUFVLFlBQVksMEJBQTBCO0FBQ3JFLGdGQUFTOzs7Ozs7Ozs7Ozs7O0FDTFQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7OztBQ2hDekIsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0SUFBZ0U7O0FBRWxHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDSDtBQUNyQjtBQUNQLElBQUksa0RBQUk7QUFDUjtBQUNBLGdSQUFnUiwwRkFBMEYseUZBQXlGLHlGQUF5RixpR0FBaUc7QUFDN25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUCxJQUFJLGtEQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsQ0FBQztBQUNjLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6QjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDNkI7QUFDMkI7QUFDTDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLG1DQUFtQyx1RUFBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0VBQVE7QUFDckM7QUFDQTtBQUNBLHdCQUF3QixvRUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsK0NBQU07QUFDTywyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDOUM1QjtBQUFBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVSwyQ0FBMkM7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ1J0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQzZCO0FBQzJCO0FBQ0w7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdCQUFnQixjQUFjO0FBQ25FO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxtQ0FBbUMsdUVBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLCtDQUFNO0FBQ08sMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDakQ1QixVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDRIQUF5RDs7QUFFM0Y7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidGFibGUge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUsIHRoLCB0ZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNsb2dhbiB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb3Qge1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyohXG4qIHN3ZWV0YWxlcnQyIHY5LjcuMVxuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG52YXIgY29uc29sZVByZWZpeCA9ICdTd2VldEFsZXJ0MjonO1xuLyoqXG4gKiBGaWx0ZXIgdGhlIHVuaXF1ZSB2YWx1ZXMgaW50byBhIG5ldyBhcnJheVxuICogQHBhcmFtIGFyclxuICovXG5cbnZhciB1bmlxdWVBcnJheSA9IGZ1bmN0aW9uIHVuaXF1ZUFycmF5KGFycikge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICogQHBhcmFtIHN0clxuICovXG5cbnZhciBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcnJheSBvYiBvYmplY3QgdmFsdWVzIChPYmplY3QudmFsdWVzIGlzbid0IHN1cHBvcnRlZCBpbiBJRTExKVxuICogQHBhcmFtIG9ialxuICovXG5cbnZhciBvYmplY3RWYWx1ZXMgPSBmdW5jdGlvbiBvYmplY3RWYWx1ZXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9KTtcbn07XG4vKipcbiAqIENvbnZlcnQgTm9kZUxpc3QgdG8gQXJyYXlcbiAqIEBwYXJhbSBub2RlTGlzdFxuICovXG5cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheShub2RlTGlzdCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xufTtcbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSB3YXJuaW5nc1xuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuXG52YXIgd2FybiA9IGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICBjb25zb2xlLndhcm4oXCJcIi5jb25jYXQoY29uc29sZVByZWZpeCwgXCIgXCIpLmNvbmNhdChtZXNzYWdlKSk7XG59O1xuLyoqXG4gKiBTdGFuZGFyZGlzZSBjb25zb2xlIGVycm9yc1xuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuXG52YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoY29uc29sZVByZWZpeCwgXCIgXCIpLmNvbmNhdChtZXNzYWdlKSk7XG59O1xuLyoqXG4gKiBQcml2YXRlIGdsb2JhbCBzdGF0ZSBmb3IgYHdhcm5PbmNlYFxuICogQHR5cGUge0FycmF5fVxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzID0gW107XG4vKipcbiAqIFNob3cgYSBjb25zb2xlIHdhcm5pbmcsIGJ1dCBvbmx5IGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gc2hvd25cbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIHdhcm5PbmNlID0gZnVuY3Rpb24gd2Fybk9uY2UobWVzc2FnZSkge1xuICBpZiAoIShwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSAhPT0gLTEpKSB7XG4gICAgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgd2FybihtZXNzYWdlKTtcbiAgfVxufTtcbi8qKlxuICogU2hvdyBhIG9uZS10aW1lIGNvbnNvbGUgd2FybmluZyBhYm91dCBkZXByZWNhdGVkIHBhcmFtcy9tZXRob2RzXG4gKi9cblxudmFyIHdhcm5BYm91dERlcHJlYXRpb24gPSBmdW5jdGlvbiB3YXJuQWJvdXREZXByZWF0aW9uKGRlcHJlY2F0ZWRQYXJhbSwgdXNlSW5zdGVhZCkge1xuICB3YXJuT25jZShcIlxcXCJcIi5jb25jYXQoZGVwcmVjYXRlZFBhcmFtLCBcIlxcXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuIFBsZWFzZSB1c2UgXFxcIlwiKS5jb25jYXQodXNlSW5zdGVhZCwgXCJcXFwiIGluc3RlYWQuXCIpKTtcbn07XG4vKipcbiAqIElmIGBhcmdgIGlzIGEgZnVuY3Rpb24sIGNhbGwgaXQgKHdpdGggbm8gYXJndW1lbnRzIG9yIGNvbnRleHQpIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAqIE90aGVyd2lzZSwganVzdCBwYXNzIHRoZSB2YWx1ZSB0aHJvdWdoXG4gKiBAcGFyYW0gYXJnXG4gKi9cblxudmFyIGNhbGxJZkZ1bmN0aW9uID0gZnVuY3Rpb24gY2FsbElmRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmc7XG59O1xudmFyIGlzUHJvbWlzZSA9IGZ1bmN0aW9uIGlzUHJvbWlzZShhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiBQcm9taXNlLnJlc29sdmUoYXJnKSA9PT0gYXJnO1xufTtcblxudmFyIERpc21pc3NSZWFzb24gPSBPYmplY3QuZnJlZXplKHtcbiAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgYmFja2Ryb3A6ICdiYWNrZHJvcCcsXG4gIGNsb3NlOiAnY2xvc2UnLFxuICBlc2M6ICdlc2MnLFxuICB0aW1lcjogJ3RpbWVyJ1xufSk7XG5cbnZhciBpc0pxdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiBpc0pxdWVyeUVsZW1lbnQoZWxlbSkge1xuICByZXR1cm4gX3R5cGVvZihlbGVtKSA9PT0gJ29iamVjdCcgJiYgZWxlbS5qcXVlcnk7XG59O1xuXG52YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gaXNFbGVtZW50KGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50IHx8IGlzSnF1ZXJ5RWxlbWVudChlbGVtKTtcbn07XG5cbnZhciBhcmdzVG9QYXJhbXMgPSBmdW5jdGlvbiBhcmdzVG9QYXJhbXMoYXJncykge1xuICB2YXIgcGFyYW1zID0ge307XG5cbiAgaWYgKF90eXBlb2YoYXJnc1swXSkgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoYXJnc1swXSkpIHtcbiAgICBfZXh0ZW5kcyhwYXJhbXMsIGFyZ3NbMF0pO1xuICB9IGVsc2Uge1xuICAgIFsndGl0bGUnLCAnaHRtbCcsICdpY29uJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgIHZhciBhcmcgPSBhcmdzW2luZGV4XTtcblxuICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8IGlzRWxlbWVudChhcmcpKSB7XG4gICAgICAgIHBhcmFtc1tuYW1lXSA9IGFyZztcbiAgICAgIH0gZWxzZSBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KG5hbWUsIFwiISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiBvciBcXFwiRWxlbWVudFxcXCIsIGdvdCBcIikuY29uY2F0KF90eXBlb2YoYXJnKSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn07XG5cbnZhciBzd2FsUHJlZml4ID0gJ3N3YWwyLSc7XG52YXIgcHJlZml4ID0gZnVuY3Rpb24gcHJlZml4KGl0ZW1zKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIGl0ZW1zKSB7XG4gICAgcmVzdWx0W2l0ZW1zW2ldXSA9IHN3YWxQcmVmaXggKyBpdGVtc1tpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIHN3YWxDbGFzc2VzID0gcHJlZml4KFsnY29udGFpbmVyJywgJ3Nob3duJywgJ2hlaWdodC1hdXRvJywgJ2lvc2ZpeCcsICdwb3B1cCcsICdtb2RhbCcsICduby1iYWNrZHJvcCcsICd0b2FzdCcsICd0b2FzdC1zaG93bicsICd0b2FzdC1jb2x1bW4nLCAnc2hvdycsICdoaWRlJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2hlYWRlcicsICdjb250ZW50JywgJ2h0bWwtY29udGFpbmVyJywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdjYW5jZWwnLCAnZm9vdGVyJywgJ2ljb24nLCAnaWNvbi1jb250ZW50JywgJ2ltYWdlJywgJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2xhYmVsJywgJ3RleHRhcmVhJywgJ2lucHV0ZXJyb3InLCAndmFsaWRhdGlvbi1tZXNzYWdlJywgJ3Byb2dyZXNzLXN0ZXBzJywgJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJywgJ3Byb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcC1saW5lJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1zdGFydCcsICdjZW50ZXItZW5kJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbicsICdydGwnLCAndGltZXItcHJvZ3Jlc3MtYmFyJywgJ3Njcm9sbGJhci1tZWFzdXJlJywgJ2ljb24tc3VjY2VzcycsICdpY29uLXdhcm5pbmcnLCAnaWNvbi1pbmZvJywgJ2ljb24tcXVlc3Rpb24nLCAnaWNvbi1lcnJvciddKTtcbnZhciBpY29uVHlwZXMgPSBwcmVmaXgoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddKTtcblxudmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY29udGFpbmVyKSk7XG59O1xudmFyIGVsZW1lbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICByZXR1cm4gY29udGFpbmVyID8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIDogbnVsbDtcbn07XG5cbnZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KGNsYXNzTmFtZSkpO1xufTtcblxudmFyIGdldFBvcHVwID0gZnVuY3Rpb24gZ2V0UG9wdXAoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cCk7XG59O1xudmFyIGdldEljb25zID0gZnVuY3Rpb24gZ2V0SWNvbnMoKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHJldHVybiB0b0FycmF5KHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmljb24pKSk7XG59O1xudmFyIGdldEljb24gPSBmdW5jdGlvbiBnZXRJY29uKCkge1xuICB2YXIgdmlzaWJsZUljb24gPSBnZXRJY29ucygpLmZpbHRlcihmdW5jdGlvbiAoaWNvbikge1xuICAgIHJldHVybiBpc1Zpc2libGUoaWNvbik7XG4gIH0pO1xuICByZXR1cm4gdmlzaWJsZUljb24ubGVuZ3RoID8gdmlzaWJsZUljb25bMF0gOiBudWxsO1xufTtcbnZhciBnZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xufTtcbnZhciBnZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbnRlbnQpO1xufTtcbnZhciBnZXRIdG1sQ29udGFpbmVyID0gZnVuY3Rpb24gZ2V0SHRtbENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddKTtcbn07XG52YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbn07XG52YXIgZ2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSk7XG59O1xudmFyIGdldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xufTtcbnZhciBnZXRDb25maXJtQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtKSk7XG59O1xudmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jYW5jZWwpKTtcbn07XG52YXIgZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcbn07XG52YXIgZ2V0SGVhZGVyID0gZnVuY3Rpb24gZ2V0SGVhZGVyKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaGVhZGVyKTtcbn07XG52YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gZ2V0Rm9vdGVyKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuZm9vdGVyKTtcbn07XG52YXIgZ2V0VGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIGdldFRpbWVyUHJvZ3Jlc3NCYXIoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10pO1xufTtcbnZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xufTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2prdXAvZm9jdXNhYmxlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5cbnZhciBmb2N1c2FibGUgPSBcIlxcbiAgYVtocmVmXSxcXG4gIGFyZWFbaHJlZl0sXFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxcbiAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcXG4gIGlmcmFtZSxcXG4gIG9iamVjdCxcXG4gIGVtYmVkLFxcbiAgW3RhYmluZGV4PVxcXCIwXFxcIl0sXFxuICBbY29udGVudGVkaXRhYmxlXSxcXG4gIGF1ZGlvW2NvbnRyb2xzXSxcXG4gIHZpZGVvW2NvbnRyb2xzXSxcXG4gIHN1bW1hcnlcXG5cIjtcbnZhciBnZXRGb2N1c2FibGVFbGVtZW50cyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICB2YXIgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKSAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gICAgYiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcblxuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9KTtcbiAgdmFyIG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGUpKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAhPT0gJy0xJztcbiAgfSk7XG4gIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gaXNWaXNpYmxlKGVsKTtcbiAgfSk7XG59O1xudmFyIGlzTW9kYWwgPSBmdW5jdGlvbiBpc01vZGFsKCkge1xuICByZXR1cm4gIWlzVG9hc3QoKSAmJiAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xufTtcbnZhciBpc1RvYXN0ID0gZnVuY3Rpb24gaXNUb2FzdCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbn07XG52YXIgaXNMb2FkaW5nID0gZnVuY3Rpb24gaXNMb2FkaW5nKCkge1xuICByZXR1cm4gZ2V0UG9wdXAoKS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xufTtcblxudmFyIHN0YXRlcyA9IHtcbiAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxufTtcbnZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoIWNsYXNzTmFtZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBjbGFzc0xpc3QgPSBjbGFzc05hbWUuc3BsaXQoL1xccysvKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NMaXN0W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHJlbW92ZUN1c3RvbUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDdXN0b21DbGFzc2VzKGVsZW0sIHBhcmFtcykge1xuICB0b0FycmF5KGVsZW0uY2xhc3NMaXN0KS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAoIShvYmplY3RWYWx1ZXMoc3dhbENsYXNzZXMpLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpICYmICEob2JqZWN0VmFsdWVzKGljb25UeXBlcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkgJiYgIShvYmplY3RWYWx1ZXMocGFyYW1zLnNob3dDbGFzcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkpIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgYXBwbHlDdXN0b21DbGFzcyA9IGZ1bmN0aW9uIGFwcGx5Q3VzdG9tQ2xhc3MoZWxlbSwgcGFyYW1zLCBjbGFzc05hbWUpIHtcbiAgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyhlbGVtLCBwYXJhbXMpO1xuXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0uZm9yRWFjaCkge1xuICAgICAgcmV0dXJuIHdhcm4oXCJJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIhIEV4cGVjdGVkIHN0cmluZyBvciBpdGVyYWJsZSBvYmplY3QsIGdvdCBcXFwiXCIpLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSwgXCJcXFwiXCIpKTtcbiAgICB9XG5cbiAgICBhZGRDbGFzcyhlbGVtLCBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSk7XG4gIH1cbn07XG5mdW5jdGlvbiBnZXRJbnB1dChjb250ZW50LCBpbnB1dFR5cGUpIHtcbiAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgY2FzZSAnZmlsZSc6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pO1xuXG4gICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgcmV0dXJuIGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcblxuICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgIHJldHVybiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpjaGVja2VkXCIpKSB8fCBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpmaXJzdC1jaGlsZFwiKSk7XG5cbiAgICBjYXNlICdyYW5nZSc6XG4gICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICB9XG59XG52YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQuZm9jdXMoKTsgLy8gcGxhY2UgY3Vyc29yIGF0IGVuZCBvZiB0ZXh0IGluIHRleHQgaW5wdXRcblxuICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgIHZhciB2YWwgPSBpbnB1dC52YWx1ZTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICB9XG59O1xudmFyIHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGNvbmRpdGlvbikge1xuICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG5cbiAgY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmICh0YXJnZXQuZm9yRWFjaCkge1xuICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgY29uZGl0aW9uID8gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25kaXRpb24gPyB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCB0cnVlKTtcbn07XG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCkge1xuICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xufTtcbnZhciBnZXRDaGlsZEJ5Q2xhc3MgPSBmdW5jdGlvbiBnZXRDaGlsZEJ5Q2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGhhc0NsYXNzKGVsZW0uY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2hpbGROb2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgYXBwbHlOdW1lcmljYWxTdHlsZSA9IGZ1bmN0aW9uIGFwcGx5TnVtZXJpY2FsU3R5bGUoZWxlbSwgcHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSB8fCBwYXJzZUludCh2YWx1ZSkgPT09IDApIHtcbiAgICBlbGVtLnN0eWxlW3Byb3BlcnR5XSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICB9XG59O1xudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0pIHtcbiAgdmFyIGRpc3BsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdmbGV4JztcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59O1xudmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG52YXIgdG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGVsZW0sIGNvbmRpdGlvbiwgZGlzcGxheSkge1xuICBjb25kaXRpb24gPyBzaG93KGVsZW0sIGRpc3BsYXkpIDogaGlkZShlbGVtKTtcbn07IC8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cblxudmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gIHJldHVybiAhIShlbGVtICYmIChlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpKTtcbn07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgaXNTY3JvbGxhYmxlID0gZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsZW0pIHtcbiAgcmV0dXJuICEhKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpO1xufTsgLy8gYm9ycm93ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYzNTIxMTlcblxudmFyIGhhc0Nzc0FuaW1hdGlvbiA9IGZ1bmN0aW9uIGhhc0Nzc0FuaW1hdGlvbihlbGVtKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICB2YXIgYW5pbUR1cmF0aW9uID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdhbmltYXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICB2YXIgdHJhbnNEdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNpdGlvbi1kdXJhdGlvbicpIHx8ICcwJyk7XG4gIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwO1xufTtcbnZhciBjb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgaWYgKHR5cGVvZiBoYXlzdGFjay5jb250YWlucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBoYXlzdGFjay5jb250YWlucyhuZWVkbGUpO1xuICB9XG59O1xudmFyIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyID0gZnVuY3Rpb24gYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIodGltZXIpIHtcbiAgdmFyIHJlc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG5cbiAgaWYgKGlzVmlzaWJsZSh0aW1lclByb2dyZXNzQmFyKSkge1xuICAgIGlmIChyZXNldCkge1xuICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbiA9IFwid2lkdGggXCIuY29uY2F0KHRpbWVyIC8gMTAwMCwgXCJzIGxpbmVhclwiKTtcbiAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xuICAgIH0sIDEwKTtcbiAgfVxufTtcbnZhciBzdG9wVGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIHN0b3BUaW1lclByb2dyZXNzQmFyKCkge1xuICB2YXIgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpbWVyUHJvZ3Jlc3NCYXIpLndpZHRoKTtcbiAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICB2YXIgdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpbWVyUHJvZ3Jlc3NCYXIpLndpZHRoKTtcbiAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50ID0gcGFyc2VJbnQodGltZXJQcm9ncmVzc0JhcldpZHRoIC8gdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCAqIDEwMCk7XG4gIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcbiAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50LCBcIiVcIik7XG59O1xuXG4vLyBEZXRlY3QgTm9kZSBlbnZcbnZhciBpc05vZGVFbnYgPSBmdW5jdGlvbiBpc05vZGVFbnYoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIHN3ZWV0SFRNTCA9IFwiXFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIi5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCJcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5oZWFkZXIsIFwiXFxcIj5cXG4gICAgIDx1bCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSwgXCJcXFwiPjwvdWw+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLmVycm9yLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLnF1ZXN0aW9uLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLndhcm5pbmcsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuaW5mbywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5zdWNjZXNzLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8aW1nIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmltYWdlLCBcIlxcXCIgLz5cXG4gICAgIDxoMiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCI+PC9oMj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jbG9zZSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPlxcbiAgICAgPGRpdiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxpbnB1dCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbnB1dCwgXCJcXFwiIC8+XFxuICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZmlsZSwgXCJcXFwiIC8+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYW5nZVxcXCIgLz5cXG4gICAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICAgIDwvZGl2PlxcbiAgICAgPHNlbGVjdCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5zZWxlY3QsIFwiXFxcIj48L3NlbGVjdD5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxsYWJlbCBmb3I9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmxhYmVsLCBcIlxcXCI+PC9zcGFuPlxcbiAgICAgPC9sYWJlbD5cXG4gICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50ZXh0YXJlYSwgXCJcXFwiPjwvdGV4dGFyZWE+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCJcXFwiPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbmZpcm0sIFwiXFxcIj5PSzwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCwgXCJcXFwiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZm9vdGVyLCBcIlxcXCI+PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10sIFwiXFxcIj48L2Rpdj5cXG4gPC9kaXY+XFxuXCIpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxudmFyIHJlc2V0T2xkQ29udGFpbmVyID0gZnVuY3Rpb24gcmVzZXRPbGRDb250YWluZXIoKSB7XG4gIHZhciBvbGRDb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcblxuICBpZiAoIW9sZENvbnRhaW5lcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9sZENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZENvbnRhaW5lcik7XG4gIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLCBzd2FsQ2xhc3Nlc1snaGFzLWNvbHVtbiddXSk7XG59O1xuXG52YXIgb2xkSW5wdXRWYWw7IC8vIElFMTEgd29ya2Fyb3VuZCwgc2VlICMxMTA5IGZvciBkZXRhaWxzXG5cbnZhciByZXNldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKSB7XG4gIGlmIChTd2FsLmlzVmlzaWJsZSgpICYmIG9sZElucHV0VmFsICE9PSBlLnRhcmdldC52YWx1ZSkge1xuICAgIFN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICB9XG5cbiAgb2xkSW5wdXRWYWwgPSBlLnRhcmdldC52YWx1ZTtcbn07XG5cbnZhciBhZGRJbnB1dENoYW5nZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKCkge1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgdmFyIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgdmFyIGZpbGUgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gIHZhciByYW5nZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIGlucHV0XCIpKTtcbiAgdmFyIHJhbmdlT3V0cHV0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgb3V0cHV0XCIpKTtcbiAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICB2YXIgY2hlY2tib3ggPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG4gIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcblxuICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSk7XG4gICAgcmFuZ2UubmV4dFNpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcbn07XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbn07XG5cbnZhciBzZXR1cEFjY2Vzc2liaWxpdHkgPSBmdW5jdGlvbiBzZXR1cEFjY2Vzc2liaWxpdHkocGFyYW1zKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgncm9sZScsIHBhcmFtcy50b2FzdCA/ICdhbGVydCcgOiAnZGlhbG9nJyk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcGFyYW1zLnRvYXN0ID8gJ3BvbGl0ZScgOiAnYXNzZXJ0aXZlJyk7XG5cbiAgaWYgKCFwYXJhbXMudG9hc3QpIHtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICB9XG59O1xuXG52YXIgc2V0dXBSVEwgPSBmdW5jdGlvbiBzZXR1cFJUTCh0YXJnZXRFbGVtZW50KSB7XG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRFbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgYWRkQ2xhc3MoZ2V0Q29udGFpbmVyKCksIHN3YWxDbGFzc2VzLnJ0bCk7XG4gIH1cbn07XG4vKlxuICogQWRkIG1vZGFsICsgYmFja2Ryb3AgdG8gRE9NXG4gKi9cblxuXG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgY29udGFpbmVyIGlmIGl0IGV4aXN0c1xuICByZXNldE9sZENvbnRhaW5lcigpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHN3ZWV0SFRNTDtcbiAgdmFyIHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXQocGFyYW1zLnRhcmdldCk7XG4gIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcyk7XG4gIHNldHVwUlRMKHRhcmdldEVsZW1lbnQpO1xuICBhZGRJbnB1dENoYW5nZUxpc3RlbmVycygpO1xufTtcblxudmFyIHBhcnNlSHRtbFRvQ29udGFpbmVyID0gZnVuY3Rpb24gcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW0sIHRhcmdldCkge1xuICAvLyBET00gZWxlbWVudFxuICBpZiAocGFyYW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbSk7IC8vIE9iamVjdFxuICB9IGVsc2UgaWYgKF90eXBlb2YocGFyYW0pID09PSAnb2JqZWN0Jykge1xuICAgIGhhbmRsZU9iamVjdChwYXJhbSwgdGFyZ2V0KTsgLy8gUGxhaW4gc3RyaW5nXG4gIH0gZWxzZSBpZiAocGFyYW0pIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gcGFyYW07XG4gIH1cbn07XG5cbnZhciBoYW5kbGVPYmplY3QgPSBmdW5jdGlvbiBoYW5kbGVPYmplY3QocGFyYW0sIHRhcmdldCkge1xuICAvLyBKUXVlcnkgZWxlbWVudChzKVxuICBpZiAocGFyYW0uanF1ZXJ5KSB7XG4gICAgaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIHBhcmFtKTsgLy8gRm9yIG90aGVyIG9iamVjdHMgdXNlIHRoZWlyIHN0cmluZyByZXByZXNlbnRhdGlvblxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBwYXJhbS50b1N0cmluZygpO1xuICB9XG59O1xuXG52YXIgaGFuZGxlSnF1ZXJ5RWxlbSA9IGZ1bmN0aW9uIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBlbGVtKSB7XG4gIHRhcmdldC5pbm5lckhUTUwgPSAnJztcblxuICBpZiAoMCBpbiBlbGVtKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgaW4gZWxlbTsgaSsrKSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbVtpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbS5jbG9uZU5vZGUodHJ1ZSkpO1xuICB9XG59O1xuXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQnLFxuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcbiAgfTtcblxuICBmb3IgKHZhciBpIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodHJhbnNFbmRFdmVudE5hbWVzLCBpKSAmJiB0eXBlb2YgdGVzdEVsLnN0eWxlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KCk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9zcmMvbW9kYWwuanNcblxudmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1snc2Nyb2xsYmFyLW1lYXN1cmUnXTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xufTtcblxudmFyIHJlbmRlckFjdGlvbnMgPSBmdW5jdGlvbiByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpIHdyYXBwZXJcblxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBoaWRlKGFjdGlvbnMpO1xuICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhhY3Rpb25zLCBwYXJhbXMsICdhY3Rpb25zJyk7IC8vIFJlbmRlciBjb25maXJtIGJ1dHRvblxuXG4gIHJlbmRlckJ1dHRvbihjb25maXJtQnV0dG9uLCAnY29uZmlybScsIHBhcmFtcyk7IC8vIHJlbmRlciBDYW5jZWwgQnV0dG9uXG5cbiAgcmVuZGVyQnV0dG9uKGNhbmNlbEJ1dHRvbiwgJ2NhbmNlbCcsIHBhcmFtcyk7XG5cbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhbY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgIGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2FuY2VsQnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpIHtcbiAgYWRkQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7IC8vIEJ1dHRvbnMgYmFja2dyb3VuZCBjb2xvcnNcblxuICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3IpIHtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICB9IC8vIExvYWRpbmcgc3RhdGVcblxuXG4gIHZhciBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29uZmlybUJ1dHRvbikuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XG4gIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJ1dHRvbihidXR0b24sIGJ1dHRvblR5cGUsIHBhcmFtcykge1xuICB0b2dnbGUoYnV0dG9uLCBwYXJhbXNbXCJzaG93XCIuY29uY2F0KGNhcGl0YWxpemVGaXJzdExldHRlcihidXR0b25UeXBlKSwgXCJCdXR0b25cIildLCAnaW5saW5lLWJsb2NrJyk7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSBwYXJhbXNbXCJcIi5jb25jYXQoYnV0dG9uVHlwZSwgXCJCdXR0b25UZXh0XCIpXTsgLy8gU2V0IGNhcHRpb24gdGV4dFxuXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXNbXCJcIi5jb25jYXQoYnV0dG9uVHlwZSwgXCJCdXR0b25BcmlhTGFiZWxcIildKTsgLy8gQVJJQSBsYWJlbFxuICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuXG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1tidXR0b25UeXBlXTtcbiAgYXBwbHlDdXN0b21DbGFzcyhidXR0b24sIHBhcmFtcywgXCJcIi5jb25jYXQoYnV0dG9uVHlwZSwgXCJCdXR0b25cIikpO1xuICBhZGRDbGFzcyhidXR0b24sIHBhcmFtc1tcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvbkNsYXNzXCIpXSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wUGFyYW0oY29udGFpbmVyLCBiYWNrZHJvcCkge1xuICBpZiAodHlwZW9mIGJhY2tkcm9wID09PSAnc3RyaW5nJykge1xuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2Ryb3A7XG4gIH0gZWxzZSBpZiAoIWJhY2tkcm9wKSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcG9zaXRpb24pIHtcbiAgaWYgKHBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twb3NpdGlvbl0pO1xuICB9IGVsc2Uge1xuICAgIHdhcm4oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5jZW50ZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIGdyb3cpIHtcbiAgaWYgKGdyb3cgJiYgdHlwZW9mIGdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGdyb3dDbGFzcyA9IFwiZ3Jvdy1cIi5jb25jYXQoZ3Jvdyk7XG5cbiAgICBpZiAoZ3Jvd0NsYXNzIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcmVuZGVyQ29udGFpbmVyID0gZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaGFuZGxlQmFja2Ryb3BQYXJhbShjb250YWluZXIsIHBhcmFtcy5iYWNrZHJvcCk7XG5cbiAgaWYgKCFwYXJhbXMuYmFja2Ryb3AgJiYgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgd2FybignXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyk7XG4gIH1cblxuICBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLnBvc2l0aW9uKTtcbiAgaGFuZGxlR3Jvd1BhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmdyb3cpOyAvLyBDdXN0b20gY2xhc3NcblxuICBhcHBseUN1c3RvbUNsYXNzKGNvbnRhaW5lciwgcGFyYW1zLCAnY29udGFpbmVyJyk7IC8vIFNldCBxdWV1ZSBzdGVwIGF0dHJpYnV0ZSBmb3IgZ2V0UXVldWVTdGVwKCkgbWV0aG9kXG5cbiAgdmFyIHF1ZXVlU3RlcCA9IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcblxuICBpZiAocXVldWVTdGVwKSB7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1xdWV1ZS1zdGVwJywgcXVldWVTdGVwKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAqL1xudmFyIHByaXZhdGVQcm9wcyA9IHtcbiAgcHJvbWlzZTogbmV3IFdlYWtNYXAoKSxcbiAgaW5uZXJQYXJhbXM6IG5ldyBXZWFrTWFwKCksXG4gIGRvbUNhY2hlOiBuZXcgV2Vha01hcCgpXG59O1xuXG52YXIgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXTtcbnZhciByZW5kZXJJbnB1dCA9IGZ1bmN0aW9uIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICB2YXIgcmVyZW5kZXIgPSAhaW5uZXJQYXJhbXMgfHwgcGFyYW1zLmlucHV0ICE9PSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgaW5wdXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dFR5cGUpIHtcbiAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZV07XG4gICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIGlucHV0Q2xhc3MpOyAvLyBzZXQgYXR0cmlidXRlc1xuXG4gICAgc2V0QXR0cmlidXRlcyhpbnB1dFR5cGUsIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpOyAvLyBzZXQgY2xhc3NcblxuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IGlucHV0Q2xhc3M7XG5cbiAgICBpZiAocmVyZW5kZXIpIHtcbiAgICAgIGhpZGUoaW5wdXRDb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgc2hvd0lucHV0KHBhcmFtcyk7XG4gICAgfSAvLyBzZXQgY3VzdG9tIGNsYXNzXG5cblxuICAgIHNldEN1c3RvbUNsYXNzKHBhcmFtcyk7XG4gIH1cbn07XG5cbnZhciBzaG93SW5wdXQgPSBmdW5jdGlvbiBzaG93SW5wdXQocGFyYW1zKSB7XG4gIGlmICghcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0pIHtcbiAgICByZXR1cm4gZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFxcXCJ0ZXh0XFxcIiwgXFxcImVtYWlsXFxcIiwgXFxcInBhc3N3b3JkXFxcIiwgXFxcIm51bWJlclxcXCIsIFxcXCJ0ZWxcXFwiLCBcXFwic2VsZWN0XFxcIiwgXFxcInJhZGlvXFxcIiwgXFxcImNoZWNrYm94XFxcIiwgXFxcInRleHRhcmVhXFxcIiwgXFxcImZpbGVcXFwiIG9yIFxcXCJ1cmxcXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMuaW5wdXQsIFwiXFxcIlwiKSk7XG4gIH1cblxuICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpO1xuICB2YXIgaW5wdXQgPSByZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XShpbnB1dENvbnRhaW5lciwgcGFyYW1zKTtcbiAgc2hvdyhpbnB1dCk7IC8vIGlucHV0IGF1dG9mb2N1c1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICBpZiAoIShbJ3R5cGUnLCAndmFsdWUnLCAnc3R5bGUnXS5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpKSB7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGlucHV0VHlwZSwgaW5wdXRBdHRyaWJ1dGVzKSB7XG4gIHZhciBpbnB1dCA9IGdldElucHV0KGdldENvbnRlbnQoKSwgaW5wdXRUeXBlKTtcblxuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCk7XG5cbiAgZm9yICh2YXIgYXR0ciBpbiBpbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICAvLyBEbyBub3Qgc2V0IGEgcGxhY2Vob2xkZXIgZm9yIDxpbnB1dCB0eXBlPVwicmFuZ2VcIj5cbiAgICAvLyBpdCdsbCBjcmFzaCBFZGdlLCAjMTI5OFxuICAgIGlmIChpbnB1dFR5cGUgPT09ICdyYW5nZScgJiYgYXR0ciA9PT0gJ3BsYWNlaG9sZGVyJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gIH1cbn07XG5cbnZhciBzZXRDdXN0b21DbGFzcyA9IGZ1bmN0aW9uIHNldEN1c3RvbUNsYXNzKHBhcmFtcykge1xuICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpO1xuXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhpbnB1dENvbnRhaW5lciwgcGFyYW1zLmN1c3RvbUNsYXNzLmlucHV0KTtcbiAgfVxufTtcblxudmFyIHNldElucHV0UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpIHtcbiAgaWYgKCFpbnB1dC5wbGFjZWhvbGRlciB8fCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gIH1cbn07XG5cbnZhciBnZXRJbnB1dENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldElucHV0Q29udGFpbmVyKGlucHV0VHlwZSkge1xuICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZV0gPyBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdIDogc3dhbENsYXNzZXMuaW5wdXQ7XG4gIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoZ2V0Q29udGVudCgpLCBpbnB1dENsYXNzKTtcbn07XG5cbnZhciByZW5kZXJJbnB1dFR5cGUgPSB7fTtcblxucmVuZGVySW5wdXRUeXBlLnRleHQgPSByZW5kZXJJbnB1dFR5cGUuZW1haWwgPSByZW5kZXJJbnB1dFR5cGUucGFzc3dvcmQgPSByZW5kZXJJbnB1dFR5cGUubnVtYmVyID0gcmVuZGVySW5wdXRUeXBlLnRlbCA9IHJlbmRlcklucHV0VHlwZS51cmwgPSBmdW5jdGlvbiAoaW5wdXQsIHBhcmFtcykge1xuICBpZiAodHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcGFyYW1zLmlucHV0VmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgfSBlbHNlIGlmICghaXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKSkge1xuICAgIHdhcm4oXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRWYWx1ZSEgRXhwZWN0ZWQgXFxcInN0cmluZ1xcXCIsIFxcXCJudW1iZXJcXFwiIG9yIFxcXCJQcm9taXNlXFxcIiwgZ290IFxcXCJcIi5jb25jYXQoX3R5cGVvZihwYXJhbXMuaW5wdXRWYWx1ZSksIFwiXFxcIlwiKSk7XG4gIH1cblxuICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpO1xuICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5yZW5kZXJJbnB1dFR5cGUuZmlsZSA9IGZ1bmN0aW9uIChpbnB1dCwgcGFyYW1zKSB7XG4gIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbnJlbmRlcklucHV0VHlwZS5yYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSwgcGFyYW1zKSB7XG4gIHZhciByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgdmFyIHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgcmFuZ2VJbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICByYW5nZU91dHB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICByZXR1cm4gcmFuZ2U7XG59O1xuXG5yZW5kZXJJbnB1dFR5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdCwgcGFyYW1zKSB7XG4gIHNlbGVjdC5pbm5lckhUTUwgPSAnJztcblxuICBpZiAocGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBwbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3Q7XG59O1xuXG5yZW5kZXJJbnB1dFR5cGUucmFkaW8gPSBmdW5jdGlvbiAocmFkaW8pIHtcbiAgcmFkaW8uaW5uZXJIVE1MID0gJyc7XG4gIHJldHVybiByYWRpbztcbn07XG5cbnJlbmRlcklucHV0VHlwZS5jaGVja2JveCA9IGZ1bmN0aW9uIChjaGVja2JveENvbnRhaW5lciwgcGFyYW1zKSB7XG4gIHZhciBjaGVja2JveCA9IGdldElucHV0KGdldENvbnRlbnQoKSwgJ2NoZWNrYm94Jyk7XG4gIGNoZWNrYm94LnZhbHVlID0gMTtcbiAgY2hlY2tib3guaWQgPSBzd2FsQ2xhc3Nlcy5jaGVja2JveDtcbiAgY2hlY2tib3guY2hlY2tlZCA9IEJvb2xlYW4ocGFyYW1zLmlucHV0VmFsdWUpO1xuICB2YXIgbGFiZWwgPSBjaGVja2JveENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGxhYmVsLmlubmVySFRNTCA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICByZXR1cm4gY2hlY2tib3hDb250YWluZXI7XG59O1xuXG5yZW5kZXJJbnB1dFR5cGUudGV4dGFyZWEgPSBmdW5jdGlvbiAodGV4dGFyZWEsIHBhcmFtcykge1xuICB0ZXh0YXJlYS52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICBzZXRJbnB1dFBsYWNlaG9sZGVyKHRleHRhcmVhLCBwYXJhbXMpO1xuXG4gIGlmICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgLy8gIzE2OTlcbiAgICB2YXIgaW5pdGlhbFBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnZXRQb3B1cCgpKS53aWR0aCk7XG4gICAgdmFyIHBvcHVwUGFkZGluZyA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdldFBvcHVwKCkpLnBhZGRpbmdMZWZ0KSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdldFBvcHVwKCkpLnBhZGRpbmdSaWdodCk7XG5cbiAgICB2YXIgb3V0cHV0c2l6ZSA9IGZ1bmN0aW9uIG91dHB1dHNpemUoKSB7XG4gICAgICB2YXIgY29udGVudFdpZHRoID0gdGV4dGFyZWEub2Zmc2V0V2lkdGggKyBwb3B1cFBhZGRpbmc7XG5cbiAgICAgIGlmIChjb250ZW50V2lkdGggPiBpbml0aWFsUG9wdXBXaWR0aCkge1xuICAgICAgICBnZXRQb3B1cCgpLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQoY29udGVudFdpZHRoLCBcInB4XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UG9wdXAoKS5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKG91dHB1dHNpemUpLm9ic2VydmUodGV4dGFyZWEsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRleHRhcmVhO1xufTtcblxudmFyIHJlbmRlckNvbnRlbnQgPSBmdW5jdGlvbiByZW5kZXJDb250ZW50KGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCkucXVlcnlTZWxlY3RvcihcIiNcIi5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCkpOyAvLyBDb250ZW50IGFzIEhUTUxcblxuICBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgY29udGVudCk7XG4gICAgc2hvdyhjb250ZW50LCAnYmxvY2snKTsgLy8gQ29udGVudCBhcyBwbGFpbiB0ZXh0XG4gIH0gZWxzZSBpZiAocGFyYW1zLnRleHQpIHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7XG4gICAgc2hvdyhjb250ZW50LCAnYmxvY2snKTsgLy8gTm8gY29udGVudFxuICB9IGVsc2Uge1xuICAgIGhpZGUoY29udGVudCk7XG4gIH1cblxuICByZW5kZXJJbnB1dChpbnN0YW5jZSwgcGFyYW1zKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhnZXRDb250ZW50KCksIHBhcmFtcywgJ2NvbnRlbnQnKTtcbn07XG5cbnZhciByZW5kZXJGb290ZXIgPSBmdW5jdGlvbiByZW5kZXJGb290ZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7XG4gIHRvZ2dsZShmb290ZXIsIHBhcmFtcy5mb290ZXIpO1xuXG4gIGlmIChwYXJhbXMuZm9vdGVyKSB7XG4gICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTtcbiAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gIGFwcGx5Q3VzdG9tQ2xhc3MoZm9vdGVyLCBwYXJhbXMsICdmb290ZXInKTtcbn07XG5cbnZhciByZW5kZXJDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGNsb3NlQnV0dG9uID0gZ2V0Q2xvc2VCdXR0b24oKTtcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gcGFyYW1zLmNsb3NlQnV0dG9uSHRtbDsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLCAnY2xvc2VCdXR0b24nKTtcbiAgdG9nZ2xlKGNsb3NlQnV0dG9uLCBwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKTtcbiAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbn07XG5cbnZhciByZW5kZXJJY29uID0gZnVuY3Rpb24gcmVuZGVySWNvbihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpOyAvLyBpZiB0aGUgZ2l2ZSBpY29uIGFscmVhZHkgcmVuZGVyZWQsIGFwcGx5IHRoZSBjdXN0b20gY2xhc3Mgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIGljb25cblxuICBpZiAoaW5uZXJQYXJhbXMgJiYgcGFyYW1zLmljb24gPT09IGlubmVyUGFyYW1zLmljb24gJiYgZ2V0SWNvbigpKSB7XG4gICAgYXBwbHlDdXN0b21DbGFzcyhnZXRJY29uKCksIHBhcmFtcywgJ2ljb24nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBoaWRlQWxsSWNvbnMoKTtcblxuICBpZiAoIXBhcmFtcy5pY29uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGljb25UeXBlcykuaW5kZXhPZihwYXJhbXMuaWNvbikgIT09IC0xKSB7XG4gICAgdmFyIGljb24gPSBlbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIuXCIpLmNvbmNhdChpY29uVHlwZXNbcGFyYW1zLmljb25dKSk7XG4gICAgc2hvdyhpY29uKTsgLy8gQ3VzdG9tIG9yIGRlZmF1bHQgY29udGVudFxuXG4gICAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpO1xuICAgIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IoKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGljb24sIHBhcmFtcywgJ2ljb24nKTsgLy8gQW5pbWF0ZSBpY29uXG5cbiAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuc2hvd0NsYXNzLmljb24pO1xuICB9IGVsc2Uge1xuICAgIGVycm9yKFwiVW5rbm93biBpY29uISBFeHBlY3RlZCBcXFwic3VjY2Vzc1xcXCIsIFxcXCJlcnJvclxcXCIsIFxcXCJ3YXJuaW5nXFxcIiwgXFxcImluZm9cXFwiIG9yIFxcXCJxdWVzdGlvblxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KHBhcmFtcy5pY29uLCBcIlxcXCJcIikpO1xuICB9XG59O1xuXG52YXIgaGlkZUFsbEljb25zID0gZnVuY3Rpb24gaGlkZUFsbEljb25zKCkge1xuICB2YXIgaWNvbnMgPSBnZXRJY29ucygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaWNvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBoaWRlKGljb25zW2ldKTtcbiAgfVxufTsgLy8gQWRqdXN0IHN1Y2Nlc3MgaWNvbiBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHRoZSBwb3B1cCBiYWNrZ3JvdW5kIGNvbG9yXG5cblxudmFyIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IgPSBmdW5jdGlvbiBhZGp1c3RTdWNjZXNzSWNvbkJhY2tnb3VuZENvbG9yKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICB2YXIgc3VjY2Vzc0ljb25QYXJ0cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvcjtcbiAgfVxufTtcblxudmFyIHNldENvbnRlbnQgPSBmdW5jdGlvbiBzZXRDb250ZW50KGljb24sIHBhcmFtcykge1xuICBpY29uLmlubmVySFRNTCA9ICcnO1xuXG4gIGlmIChwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICBpY29uLmlubmVySFRNTCA9IGljb25Db250ZW50KHBhcmFtcy5pY29uSHRtbCk7XG4gIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdzdWNjZXNzJykge1xuICAgIGljb24uaW5uZXJIVE1MID0gXCJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFxcXCI+PC9kaXY+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXFxcIj48L3NwYW4+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1yaW5nXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1maXhcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFxcXCI+PC9kaXY+XFxuICAgIFwiO1xuICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnZXJyb3InKSB7XG4gICAgaWNvbi5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmtcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLWxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1yaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgXCI7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRlZmF1bHRJY29uSHRtbCA9IHtcbiAgICAgIHF1ZXN0aW9uOiAnPycsXG4gICAgICB3YXJuaW5nOiAnIScsXG4gICAgICBpbmZvOiAnaSdcbiAgICB9O1xuICAgIGljb24uaW5uZXJIVE1MID0gaWNvbkNvbnRlbnQoZGVmYXVsdEljb25IdG1sW3BhcmFtcy5pY29uXSk7XG4gIH1cbn07XG5cbnZhciBpY29uQ29udGVudCA9IGZ1bmN0aW9uIGljb25Db250ZW50KGNvbnRlbnQpIHtcbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzWydpY29uLWNvbnRlbnQnXSwgXCJcXFwiPlwiKS5jb25jYXQoY29udGVudCwgXCI8L2Rpdj5cIik7XG59O1xuXG52YXIgcmVuZGVySW1hZ2UgPSBmdW5jdGlvbiByZW5kZXJJbWFnZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG5cbiAgaWYgKCFwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICByZXR1cm4gaGlkZShpbWFnZSk7XG4gIH1cblxuICBzaG93KGltYWdlKTsgLy8gU3JjLCBhbHRcblxuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KTsgLy8gV2lkdGgsIGhlaWdodFxuXG4gIGFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7IC8vIENsYXNzXG5cbiAgaW1hZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuaW1hZ2U7XG4gIGFwcGx5Q3VzdG9tQ2xhc3MoaW1hZ2UsIHBhcmFtcywgJ2ltYWdlJyk7XG59O1xuXG52YXIgY3VycmVudFN0ZXBzID0gW107XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICovXG5cbnZhciBxdWV1ZSA9IGZ1bmN0aW9uIHF1ZXVlKHN0ZXBzKSB7XG4gIHZhciBTd2FsID0gdGhpcztcbiAgY3VycmVudFN0ZXBzID0gc3RlcHM7XG5cbiAgdmFyIHJlc2V0QW5kUmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc2V0QW5kUmVzb2x2ZShyZXNvbHZlLCB2YWx1ZSkge1xuICAgIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9O1xuXG4gIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAoZnVuY3Rpb24gc3RlcChpLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGkgPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnLCBpKTtcbiAgICAgICAgU3dhbC5maXJlKGN1cnJlbnRTdGVwc1tpXSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBxdWV1ZVJlc3VsdC5wdXNoKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICBzdGVwKGkgKyAxLCBjYWxsYmFjayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc2V0QW5kUmVzb2x2ZShyZXNvbHZlLCB7XG4gICAgICAgICAgICAgIGRpc21pc3M6IHJlc3VsdC5kaXNtaXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRBbmRSZXNvbHZlKHJlc29sdmUsIHtcbiAgICAgICAgICB2YWx1ZTogcXVldWVSZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkoMCk7XG4gIH0pO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAqL1xuXG52YXIgZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gZ2V0UXVldWVTdGVwKCkge1xuICByZXR1cm4gZ2V0Q29udGFpbmVyKCkuZ2V0QXR0cmlidXRlKCdkYXRhLXF1ZXVlLXN0ZXAnKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBpbnNlcnRpbmcgYSBwb3B1cCB0byB0aGUgcXVldWVcbiAqL1xuXG52YXIgaW5zZXJ0UXVldWVTdGVwID0gZnVuY3Rpb24gaW5zZXJ0UXVldWVTdGVwKHN0ZXAsIGluZGV4KSB7XG4gIGlmIChpbmRleCAmJiBpbmRleCA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMCwgc3RlcCk7XG4gIH1cblxuICByZXR1cm4gY3VycmVudFN0ZXBzLnB1c2goc3RlcCk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZGVsZXRpbmcgYSBwb3B1cCBmcm9tIHRoZSBxdWV1ZVxuICovXG5cbnZhciBkZWxldGVRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBkZWxldGVRdWV1ZVN0ZXAoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBjdXJyZW50U3RlcHNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgIGN1cnJlbnRTdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlU3RlcEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVTdGVwRWxlbWVudChzdGVwKSB7XG4gIHZhciBzdGVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwJ10pO1xuICBzdGVwRWwuaW5uZXJIVE1MID0gc3RlcDtcbiAgcmV0dXJuIHN0ZXBFbDtcbn07XG5cbnZhciBjcmVhdGVMaW5lRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxpbmVFbGVtZW50KHBhcmFtcykge1xuICB2YXIgbGluZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgYWRkQ2xhc3MobGluZUVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcC1saW5lJ10pO1xuXG4gIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKSB7XG4gICAgbGluZUVsLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZTtcbiAgfVxuXG4gIHJldHVybiBsaW5lRWw7XG59O1xuXG52YXIgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lciA9IGdldFByb2dyZXNzU3RlcHMoKTtcblxuICBpZiAoIXBhcmFtcy5wcm9ncmVzc1N0ZXBzIHx8IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICB9XG5cbiAgc2hvdyhwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgdmFyIGN1cnJlbnRQcm9ncmVzc1N0ZXAgPSBwYXJzZUludChwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCA9PT0gdW5kZWZpbmVkID8gZ2V0UXVldWVTdGVwKCkgOiBwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCk7XG5cbiAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgd2FybignSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICsgJyhjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApJyk7XG4gIH1cblxuICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgIHZhciBzdGVwRWwgPSBjcmVhdGVTdGVwRWxlbWVudChzdGVwKTtcbiAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZXBFbCk7XG5cbiAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgIGFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJ10pO1xuICAgIH1cblxuICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgdmFyIGxpbmVFbCA9IGNyZWF0ZUxpbmVFbGVtZW50KHN0ZXApO1xuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lRWwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgcmVuZGVyVGl0bGUgPSBmdW5jdGlvbiByZW5kZXJUaXRsZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG4gIHRvZ2dsZSh0aXRsZSwgcGFyYW1zLnRpdGxlIHx8IHBhcmFtcy50aXRsZVRleHQpO1xuXG4gIGlmIChwYXJhbXMudGl0bGUpIHtcbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMudGl0bGUsIHRpdGxlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dDtcbiAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gIGFwcGx5Q3VzdG9tQ2xhc3ModGl0bGUsIHBhcmFtcywgJ3RpdGxlJyk7XG59O1xuXG52YXIgcmVuZGVySGVhZGVyID0gZnVuY3Rpb24gcmVuZGVySGVhZGVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGhlYWRlciA9IGdldEhlYWRlcigpOyAvLyBDdXN0b20gY2xhc3NcblxuICBhcHBseUN1c3RvbUNsYXNzKGhlYWRlciwgcGFyYW1zLCAnaGVhZGVyJyk7IC8vIFByb2dyZXNzIHN0ZXBzXG5cbiAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyhpbnN0YW5jZSwgcGFyYW1zKTsgLy8gSWNvblxuXG4gIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcyk7IC8vIEltYWdlXG5cbiAgcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIFRpdGxlXG5cbiAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIENsb3NlIGJ1dHRvblxuXG4gIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpO1xufTtcblxudmFyIHJlbmRlclBvcHVwID0gZnVuY3Rpb24gcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpOyAvLyBXaWR0aFxuXG4gIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7IC8vIFBhZGRpbmdcblxuICBhcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAncGFkZGluZycsIHBhcmFtcy5wYWRkaW5nKTsgLy8gQmFja2dyb3VuZFxuXG4gIGlmIChwYXJhbXMuYmFja2dyb3VuZCkge1xuICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgfSAvLyBDbGFzc2VzXG5cblxuICBhZGRDbGFzc2VzKHBvcHVwLCBwYXJhbXMpO1xufTtcblxudmFyIGFkZENsYXNzZXMgPSBmdW5jdGlvbiBhZGRDbGFzc2VzKHBvcHVwLCBwYXJhbXMpIHtcbiAgLy8gRGVmYXVsdCBDbGFzcyArIHNob3dDbGFzcyB3aGVuIHVwZGF0aW5nIFN3YWwudXBkYXRlKHt9KVxuICBwb3B1cC5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgXCIpLmNvbmNhdChpc1Zpc2libGUocG9wdXApID8gcGFyYW1zLnNob3dDbGFzcy5wb3B1cCA6ICcnKTtcblxuICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gIH0gLy8gQ3VzdG9tIGNsYXNzXG5cblxuICBhcHBseUN1c3RvbUNsYXNzKHBvcHVwLCBwYXJhbXMsICdwb3B1cCcpO1xuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzID09PSAnc3RyaW5nJykge1xuICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICB9IC8vIEljb24gY2xhc3MgKCMxODQyKVxuXG5cbiAgaWYgKHBhcmFtcy5pY29uKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW1wiaWNvbi1cIi5jb25jYXQocGFyYW1zLmljb24pXSk7XG4gIH1cbn07XG5cbnZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICByZW5kZXJQb3B1cChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpO1xuICByZW5kZXJIZWFkZXIoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIHJlbmRlckNvbnRlbnQoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIHJlbmRlckFjdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKTtcblxuICBpZiAodHlwZW9mIHBhcmFtcy5vblJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhcmFtcy5vblJlbmRlcihnZXRQb3B1cCgpKTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgU3dlZXRBbGVydDIgcG9wdXAgaXMgc2hvd25cbiAqL1xuXG52YXIgaXNWaXNpYmxlJDEgPSBmdW5jdGlvbiBpc1Zpc2libGUkJDEoKSB7XG4gIHJldHVybiBpc1Zpc2libGUoZ2V0UG9wdXAoKSk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gKi9cblxudmFyIGNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uIGNsaWNrQ29uZmlybSgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1CdXR0b24oKSAmJiBnZXRDb25maXJtQnV0dG9uKCkuY2xpY2soKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICovXG5cbnZhciBjbGlja0NhbmNlbCA9IGZ1bmN0aW9uIGNsaWNrQ2FuY2VsKCkge1xuICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCkgJiYgZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcbn07XG5cbmZ1bmN0aW9uIGZpcmUoKSB7XG4gIHZhciBTd2FsID0gdGhpcztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QoU3dhbCwgYXJncyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBCZWZvcmU6XG4gKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nIH0pXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JyB9KVxuICpcbiAqIEFmdGVyOlxuICogY29uc3QgVGV4dFByb21wdCA9IFN3YWwubWl4aW4oeyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH0pXG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nKVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycpXG4gKlxuICogQHBhcmFtIG1peGluUGFyYW1zXG4gKi9cbmZ1bmN0aW9uIG1peGluKG1peGluUGFyYW1zKSB7XG4gIHZhciBNaXhpblN3YWwgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfdGhpcykge1xuICAgIF9pbmhlcml0cyhNaXhpblN3YWwsIF90aGlzKTtcblxuICAgIGZ1bmN0aW9uIE1peGluU3dhbCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaXhpblN3YWwpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1peGluU3dhbCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1peGluU3dhbCwgW3tcbiAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWluKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWl4aW5Td2FsLnByb3RvdHlwZSksIFwiX21haW5cIiwgdGhpcykuY2FsbCh0aGlzLCBfZXh0ZW5kcyh7fSwgbWl4aW5QYXJhbXMsIHBhcmFtcykpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNaXhpblN3YWw7XG4gIH0odGhpcyk7XG5cbiAgcmV0dXJuIE1peGluU3dhbDtcbn1cblxuLyoqXG4gKiBTaG93IHNwaW5uZXIgaW5zdGVhZCBvZiBDb25maXJtIGJ1dHRvblxuICovXG5cbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmICghcG9wdXApIHtcbiAgICBTd2FsLmZpcmUoKTtcbiAgfVxuXG4gIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICBzaG93KGFjdGlvbnMpO1xuICBzaG93KGNvbmZpcm1CdXR0b24sICdpbmxpbmUtYmxvY2snKTtcbiAgYWRkQ2xhc3MoW3BvcHVwLCBhY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsIHRydWUpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsIHRydWUpO1xuICBwb3B1cC5mb2N1cygpO1xufTtcblxudmFyIFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxudmFyIGdsb2JhbFN0YXRlID0ge307XG52YXIgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCgpIHtcbiAgaWYgKGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCAmJiBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gIH1cbn07IC8vIFJlc3RvcmUgcHJldmlvdXMgYWN0aXZlIChmb2N1c2VkKSBlbGVtZW50XG5cblxudmFyIHJlc3RvcmVBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHZhciB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgdmFyIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCgpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCk7IC8vIGlzc3Vlcy85MDBcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG4gICAgaWYgKHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIElFIGRvZXNuJ3QgaGF2ZSBzY3JvbGxYL3Njcm9sbFkgc3VwcG9ydFxuICAgICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzIHNldCwgcmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuXG52YXIgZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmdldFRpbWVyTGVmdCgpO1xufTtcbi8qKlxuICogU3RvcCB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuXG52YXIgc3RvcFRpbWVyID0gZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIHN0b3BUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICB9XG59O1xuLyoqXG4gKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cblxudmFyIHJlc3VtZVRpbWVyID0gZnVuY3Rpb24gcmVzdW1lVGltZXIoKSB7XG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgdmFyIHJlbWFpbmluZyA9IGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RhcnQoKTtcbiAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcpO1xuICAgIHJldHVybiByZW1haW5pbmc7XG4gIH1cbn07XG4vKipcbiAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuXG52YXIgdG9nZ2xlVGltZXIgPSBmdW5jdGlvbiB0b2dnbGVUaW1lcigpIHtcbiAgdmFyIHRpbWVyID0gZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgcmV0dXJuIHRpbWVyICYmICh0aW1lci5ydW5uaW5nID8gc3RvcFRpbWVyKCkgOiByZXN1bWVUaW1lcigpKTtcbn07XG4vKipcbiAqIEluY3JlYXNlIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgYW4gdXBkYXRlZCB0aW1lci5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cblxudmFyIGluY3JlYXNlVGltZXIgPSBmdW5jdGlvbiBpbmNyZWFzZVRpbWVyKG4pIHtcbiAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICB2YXIgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5pbmNyZWFzZShuKTtcbiAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcsIHRydWUpO1xuICAgIHJldHVybiByZW1haW5pbmc7XG4gIH1cbn07XG4vKipcbiAqIENoZWNrIGlmIHRpbWVyIGlzIHJ1bm5pbmcuIFJldHVybnMgdHJ1ZSBpZiB0aW1lciBpcyBydW5uaW5nXG4gKiBvciBmYWxzZSBpZiB0aW1lciBpcyBwYXVzZWQgb3Igc3RvcHBlZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuXG52YXIgaXNUaW1lclJ1bm5pbmcgPSBmdW5jdGlvbiBpc1RpbWVyUnVubmluZygpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5pc1J1bm5pbmcoKTtcbn07XG5cbnZhciBkZWZhdWx0UGFyYW1zID0ge1xuICB0aXRsZTogJycsXG4gIHRpdGxlVGV4dDogJycsXG4gIHRleHQ6ICcnLFxuICBodG1sOiAnJyxcbiAgZm9vdGVyOiAnJyxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBpY29uSHRtbDogdW5kZWZpbmVkLFxuICB0b2FzdDogZmFsc2UsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgc2hvd0NsYXNzOiB7XG4gICAgcG9wdXA6ICdzd2FsMi1zaG93JyxcbiAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLXNob3cnLFxuICAgIGljb246ICdzd2FsMi1pY29uLXNob3cnXG4gIH0sXG4gIGhpZGVDbGFzczoge1xuICAgIHBvcHVwOiAnc3dhbDItaGlkZScsXG4gICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1oaWRlJyxcbiAgICBpY29uOiAnc3dhbDItaWNvbi1oaWRlJ1xuICB9LFxuICBjdXN0b21DbGFzczogdW5kZWZpbmVkLFxuICB0YXJnZXQ6ICdib2R5JyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGhlaWdodEF1dG86IHRydWUsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogdHJ1ZSxcbiAga2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTogZmFsc2UsXG4gIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgcHJlQ29uZmlybTogdW5kZWZpbmVkLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY2FuY2VsQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gIHJldmVyc2VCdXR0b25zOiBmYWxzZSxcbiAgZm9jdXNDb25maXJtOiB0cnVlLFxuICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uSHRtbDogJyZ0aW1lczsnLFxuICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIHRoaXMgZGlhbG9nJyxcbiAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gIGltYWdlVXJsOiB1bmRlZmluZWQsXG4gIGltYWdlV2lkdGg6IHVuZGVmaW5lZCxcbiAgaW1hZ2VIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaW1hZ2VBbHQ6ICcnLFxuICB0aW1lcjogdW5kZWZpbmVkLFxuICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgcGFkZGluZzogdW5kZWZpbmVkLFxuICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXG4gIGlucHV0OiB1bmRlZmluZWQsXG4gIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICBpbnB1dFZhbHVlOiAnJyxcbiAgaW5wdXRPcHRpb25zOiB7fSxcbiAgaW5wdXRBdXRvVHJpbTogdHJ1ZSxcbiAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgaW5wdXRWYWxpZGF0b3I6IHVuZGVmaW5lZCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgZ3JvdzogZmFsc2UsXG4gIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgcHJvZ3Jlc3NTdGVwczogW10sXG4gIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IHVuZGVmaW5lZCxcbiAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiB1bmRlZmluZWQsXG4gIG9uQmVmb3JlT3BlbjogdW5kZWZpbmVkLFxuICBvbk9wZW46IHVuZGVmaW5lZCxcbiAgb25SZW5kZXI6IHVuZGVmaW5lZCxcbiAgb25DbG9zZTogdW5kZWZpbmVkLFxuICBvbkFmdGVyQ2xvc2U6IHVuZGVmaW5lZCxcbiAgb25EZXN0cm95OiB1bmRlZmluZWQsXG4gIHNjcm9sbGJhclBhZGRpbmc6IHRydWVcbn07XG52YXIgdXBkYXRhYmxlUGFyYW1zID0gWyd0aXRsZScsICd0aXRsZVRleHQnLCAndGV4dCcsICdodG1sJywgJ2ljb24nLCAnY3VzdG9tQ2xhc3MnLCAnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYWxsb3dFc2NhcGVLZXknLCAnc2hvd0NvbmZpcm1CdXR0b24nLCAnc2hvd0NhbmNlbEJ1dHRvbicsICdjb25maXJtQnV0dG9uVGV4dCcsICdjb25maXJtQnV0dG9uQXJpYUxhYmVsJywgJ2NvbmZpcm1CdXR0b25Db2xvcicsICdjYW5jZWxCdXR0b25UZXh0JywgJ2NhbmNlbEJ1dHRvbkFyaWFMYWJlbCcsICdjYW5jZWxCdXR0b25Db2xvcicsICdidXR0b25zU3R5bGluZycsICdyZXZlcnNlQnV0dG9ucycsICdpbWFnZVVybCcsICdpbWFnZVdpZHRoJywgJ2ltYWdlSGVpZ2h0JywgJ2ltYWdlQWx0JywgJ3Byb2dyZXNzU3RlcHMnLCAnY3VycmVudFByb2dyZXNzU3RlcCddO1xudmFyIGRlcHJlY2F0ZWRQYXJhbXMgPSB7XG4gIGFuaW1hdGlvbjogJ3Nob3dDbGFzc1wiIGFuZCBcImhpZGVDbGFzcydcbn07XG52YXIgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMgPSBbJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2FsbG93RW50ZXJLZXknLCAnYmFja2Ryb3AnLCAnZm9jdXNDb25maXJtJywgJ2ZvY3VzQ2FuY2VsJywgJ2hlaWdodEF1dG8nLCAna2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSddO1xuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVmYXVsdFBhcmFtcywgcGFyYW1OYW1lKTtcbn07XG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlciBmb3IgU3dhbC51cGRhdGUoKSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNVcGRhdGFibGVQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgcmV0dXJuIHVwZGF0YWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xO1xufTtcbi8qKlxuICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNEZXByZWNhdGVkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtc1twYXJhbU5hbWVdO1xufTtcblxudmFyIGNoZWNrSWZQYXJhbUlzVmFsaWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc1ZhbGlkKHBhcmFtKSB7XG4gIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICB3YXJuKFwiVW5rbm93biBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiXCIpKTtcbiAgfVxufTtcblxudmFyIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZCA9IGZ1bmN0aW9uIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZChwYXJhbSkge1xuICBpZiAodG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5kZXhPZihwYXJhbSkgIT09IC0xKSB7XG4gICAgd2FybihcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c1wiKSk7XG4gIH1cbn07XG5cbnZhciBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQocGFyYW0pIHtcbiAgaWYgKGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICB3YXJuQWJvdXREZXByZWF0aW9uKHBhcmFtLCBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKTtcbiAgfVxufTtcbi8qKlxuICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICovXG5cblxudmFyIHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpIHtcbiAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSk7XG5cbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQocGFyYW0pO1xuICAgIH1cblxuICAgIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZChwYXJhbSk7XG4gIH1cbn07XG5cblxuXG52YXIgc3RhdGljTWV0aG9kcyA9IE9iamVjdC5mcmVlemUoe1xuXHRpc1ZhbGlkUGFyYW1ldGVyOiBpc1ZhbGlkUGFyYW1ldGVyLFxuXHRpc1VwZGF0YWJsZVBhcmFtZXRlcjogaXNVcGRhdGFibGVQYXJhbWV0ZXIsXG5cdGlzRGVwcmVjYXRlZFBhcmFtZXRlcjogaXNEZXByZWNhdGVkUGFyYW1ldGVyLFxuXHRhcmdzVG9QYXJhbXM6IGFyZ3NUb1BhcmFtcyxcblx0aXNWaXNpYmxlOiBpc1Zpc2libGUkMSxcblx0Y2xpY2tDb25maXJtOiBjbGlja0NvbmZpcm0sXG5cdGNsaWNrQ2FuY2VsOiBjbGlja0NhbmNlbCxcblx0Z2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG5cdGdldFBvcHVwOiBnZXRQb3B1cCxcblx0Z2V0VGl0bGU6IGdldFRpdGxlLFxuXHRnZXRDb250ZW50OiBnZXRDb250ZW50LFxuXHRnZXRIdG1sQ29udGFpbmVyOiBnZXRIdG1sQ29udGFpbmVyLFxuXHRnZXRJbWFnZTogZ2V0SW1hZ2UsXG5cdGdldEljb246IGdldEljb24sXG5cdGdldEljb25zOiBnZXRJY29ucyxcblx0Z2V0Q2xvc2VCdXR0b246IGdldENsb3NlQnV0dG9uLFxuXHRnZXRBY3Rpb25zOiBnZXRBY3Rpb25zLFxuXHRnZXRDb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uLFxuXHRnZXRDYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbixcblx0Z2V0SGVhZGVyOiBnZXRIZWFkZXIsXG5cdGdldEZvb3RlcjogZ2V0Rm9vdGVyLFxuXHRnZXRGb2N1c2FibGVFbGVtZW50czogZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG5cdGdldFZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSxcblx0aXNMb2FkaW5nOiBpc0xvYWRpbmcsXG5cdGZpcmU6IGZpcmUsXG5cdG1peGluOiBtaXhpbixcblx0cXVldWU6IHF1ZXVlLFxuXHRnZXRRdWV1ZVN0ZXA6IGdldFF1ZXVlU3RlcCxcblx0aW5zZXJ0UXVldWVTdGVwOiBpbnNlcnRRdWV1ZVN0ZXAsXG5cdGRlbGV0ZVF1ZXVlU3RlcDogZGVsZXRlUXVldWVTdGVwLFxuXHRzaG93TG9hZGluZzogc2hvd0xvYWRpbmcsXG5cdGVuYWJsZUxvYWRpbmc6IHNob3dMb2FkaW5nLFxuXHRnZXRUaW1lckxlZnQ6IGdldFRpbWVyTGVmdCxcblx0c3RvcFRpbWVyOiBzdG9wVGltZXIsXG5cdHJlc3VtZVRpbWVyOiByZXN1bWVUaW1lcixcblx0dG9nZ2xlVGltZXI6IHRvZ2dsZVRpbWVyLFxuXHRpbmNyZWFzZVRpbWVyOiBpbmNyZWFzZVRpbWVyLFxuXHRpc1RpbWVyUnVubmluZzogaXNUaW1lclJ1bm5pbmdcbn0pO1xuXG4vKipcbiAqIEVuYWJsZXMgYnV0dG9ucyBhbmQgaGlkZSBsb2FkZXIuXG4gKi9cblxuZnVuY3Rpb24gaGlkZUxvYWRpbmcoKSB7XG4gIC8vIGRvIG5vdGhpbmcgaWYgcG9wdXAgaXMgY2xvc2VkXG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG5cbiAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgIGhpZGUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbik7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUuYWN0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoW2RvbUNhY2hlLnBvcHVwLCBkb21DYWNoZS5hY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0JDEoaW5zdGFuY2UpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCB0aGlzKTtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSB8fCB0aGlzKTtcblxuICBpZiAoIWRvbUNhY2hlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZ2V0SW5wdXQoZG9tQ2FjaGUuY29udGVudCwgaW5uZXJQYXJhbXMuaW5wdXQpO1xufVxuXG52YXIgZml4U2Nyb2xsYmFyID0gZnVuY3Rpb24gZml4U2Nyb2xsYmFyKCkge1xuICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG5cblxuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgKyBtZWFzdXJlU2Nyb2xsYmFyKCksIFwicHhcIik7XG4gIH1cbn07XG52YXIgdW5kb1Njcm9sbGJhciA9IGZ1bmN0aW9uIHVuZG9TY3JvbGxiYXIoKSB7XG4gIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcsIFwicHhcIik7XG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsO1xuICB9XG59O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xudmFyIGlPU2ZpeCA9IGZ1bmN0aW9uIGlPU2ZpeCgpIHtcbiAgdmFyIGlPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0gfHwgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDE7XG5cbiAgaWYgKGlPUyAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IFwiXCIuY29uY2F0KG9mZnNldCAqIC0xLCBcInB4XCIpO1xuICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgbG9ja0JvZHlTY3JvbGwoKTtcbiAgfVxufTtcblxudmFyIGxvY2tCb2R5U2Nyb2xsID0gZnVuY3Rpb24gbG9ja0JvZHlTY3JvbGwoKSB7XG4gIC8vICMxMjQ2XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHByZXZlbnRUb3VjaE1vdmU7XG5cbiAgY29udGFpbmVyLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcHJldmVudFRvdWNoTW92ZSA9IGUudGFyZ2V0ID09PSBjb250YWluZXIgfHwgIWlzU2Nyb2xsYWJsZShjb250YWluZXIpICYmIGUudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgLy8gIzE2MDNcbiAgICA7XG4gIH07XG5cbiAgY29udGFpbmVyLm9udG91Y2htb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocHJldmVudFRvdWNoTW92ZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgdW5kb0lPU2ZpeCA9IGZ1bmN0aW9uIHVuZG9JT1NmaXgoKSB7XG4gIGlmIChoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gb2Zmc2V0ICogLTE7XG4gIH1cbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG52YXIgaXNJRTExID0gZnVuY3Rpb24gaXNJRTExKCkge1xuICByZXR1cm4gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG59OyAvLyBGaXggSUUxMSBjZW50ZXJpbmcgc3dlZXRhbGVydDIvaXNzdWVzLzkzM1xuXG5cbnZhciBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUgPSBmdW5jdGlvbiBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgY29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdhbGlnbi1pdGVtcycpO1xuXG4gIGlmIChwb3B1cC5vZmZzZXRUb3AgPCAwKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnZmxleC1zdGFydCc7XG4gIH1cbn07XG5cbnZhciBJRWZpeCA9IGZ1bmN0aW9uIElFZml4KCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJRTExKCkpIHtcbiAgICBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4VmVydGljYWxQb3NpdGlvbklFKTtcbiAgfVxufTtcbnZhciB1bmRvSUVmaXggPSBmdW5jdGlvbiB1bmRvSUVmaXgoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0lFMTEoKSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICB9XG59O1xuXG4vLyBBZGRpbmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdG8gZWxlbWVudHMgb3V0c2lkZSBvZiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyBlbnN1cmVzIHRoYXRcbi8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4vLyByZWFkZXLigJlzIGxpc3Qgb2YgZWxlbWVudHMgKGhlYWRpbmdzLCBmb3JtIGNvbnRyb2xzLCBsYW5kbWFya3MsIGV0Yy4pIGluIHRoZSBkb2N1bWVudC5cblxudmFyIHNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiBzZXRBcmlhSGlkZGVuKCkge1xuICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsID09PSBnZXRDb250YWluZXIoKSB8fCBjb250YWlucyhlbCwgZ2V0Q29udGFpbmVyKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKTtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfSk7XG59O1xudmFyIHVuc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHVuc2V0QXJpYUhpZGRlbigpIHtcbiAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKTtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAqL1xudmFyIHByaXZhdGVNZXRob2RzID0ge1xuICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKClcbn07XG5cbi8qXG4gKiBJbnN0YW5jZSBtZXRob2QgdG8gY2xvc2Ugc3dlZXRBbGVydFxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCBpc1RvYXN0LCBvbkFmdGVyQ2xvc2UpIHtcbiAgaWYgKGlzVG9hc3QpIHtcbiAgICB0cmlnZ2VyT25BZnRlckNsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgb25BZnRlckNsb3NlKTtcbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlQWN0aXZlRWxlbWVudCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRyaWdnZXJPbkFmdGVyQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBvbkFmdGVyQ2xvc2UpO1xuICAgIH0pO1xuICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgfSk7XG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuXG4gIGlmIChpc01vZGFsKCkpIHtcbiAgICB1bmRvU2Nyb2xsYmFyKCk7XG4gICAgdW5kb0lPU2ZpeCgpO1xuICAgIHVuZG9JRWZpeCgpO1xuICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICB9XG5cbiAgcmVtb3ZlQm9keUNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQm9keUNsYXNzZXMoKSB7XG4gIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXMuc2hvd24sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXV0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZShyZXNvbHZlVmFsdWUpIHtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICBpZiAoIXBvcHVwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICBpZiAoIWlubmVyUGFyYW1zIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN3YWxQcm9taXNlUmVzb2x2ZSA9IHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcyk7XG4gIHJlbW92ZUNsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MucG9wdXApO1xuICBhZGRDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKTtcbiAgdmFyIGJhY2tkcm9wID0gZ2V0Q29udGFpbmVyKCk7XG4gIHJlbW92ZUNsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApO1xuICBhZGRDbGFzcyhiYWNrZHJvcCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLmJhY2tkcm9wKTtcbiAgaGFuZGxlUG9wdXBBbmltYXRpb24odGhpcywgcG9wdXAsIGlubmVyUGFyYW1zKTsgLy8gUmVzb2x2ZSBTd2FsIHByb21pc2VcblxuICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlIHx8IHt9KTtcbn1cblxudmFyIGhhbmRsZVBvcHVwQW5pbWF0aW9uID0gZnVuY3Rpb24gaGFuZGxlUG9wdXBBbmltYXRpb24oaW5zdGFuY2UsIHBvcHVwLCBpbm5lclBhcmFtcykge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7IC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcblxuICB2YXIgYW5pbWF0aW9uSXNTdXBwb3J0ZWQgPSBhbmltYXRpb25FbmRFdmVudCAmJiBoYXNDc3NBbmltYXRpb24ocG9wdXApO1xuICB2YXIgb25DbG9zZSA9IGlubmVyUGFyYW1zLm9uQ2xvc2UsXG4gICAgICBvbkFmdGVyQ2xvc2UgPSBpbm5lclBhcmFtcy5vbkFmdGVyQ2xvc2U7XG5cbiAgaWYgKG9uQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvbkNsb3NlKHBvcHVwKTtcbiAgfVxuXG4gIGlmIChhbmltYXRpb25Jc1N1cHBvcnRlZCkge1xuICAgIGFuaW1hdGVQb3B1cChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgb25BZnRlckNsb3NlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCBpc1RvYXN0KCksIG9uQWZ0ZXJDbG9zZSk7XG4gIH1cbn07XG5cbnZhciBhbmltYXRlUG9wdXAgPSBmdW5jdGlvbiBhbmltYXRlUG9wdXAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIG9uQWZ0ZXJDbG9zZSkge1xuICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2sgPSByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUuYmluZChudWxsLCBpbnN0YW5jZSwgY29udGFpbmVyLCBpc1RvYXN0KCksIG9uQWZ0ZXJDbG9zZSk7XG4gIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCkge1xuICAgICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCk7XG4gICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdHJpZ2dlck9uQWZ0ZXJDbG9zZUFuZERpc3Bvc2UgPSBmdW5jdGlvbiB0cmlnZ2VyT25BZnRlckNsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgb25BZnRlckNsb3NlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2Ygb25BZnRlckNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkFmdGVyQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5fZGVzdHJveSgpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHNldEJ1dHRvbnNEaXNhYmxlZChpbnN0YW5jZSwgYnV0dG9ucywgZGlzYWJsZWQpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSk7XG4gIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgZG9tQ2FjaGVbYnV0dG9uXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXREaXNhYmxlZChpbnB1dCwgZGlzYWJsZWQpIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgZmFsc2UpO1xufVxuZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoKSB7XG4gIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIHRydWUpO1xufVxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gIHJldHVybiBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgZmFsc2UpO1xufVxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuICByZXR1cm4gc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIHRydWUpO1xufVxuXG5mdW5jdGlvbiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3IpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3I7XG4gIHZhciBwb3B1cENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb21DYWNoZS5wb3B1cCk7XG4gIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi1cIi5jb25jYXQocG9wdXBDb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2Uuc3R5bGUubWFyZ2luUmlnaHQgPSBcIi1cIi5jb25jYXQocG9wdXBDb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gIHNob3coZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKGlucHV0KSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0cnVlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknLCBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgIGFkZENsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgfVxufSAvLyBIaWRlIGJsb2NrIHdpdGggdmFsaWRhdGlvbiBtZXNzYWdlXG5cbmZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSgpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcblxuICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgfVxuXG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScpO1xuICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzJDEoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIHJldHVybiBkb21DYWNoZS5wcm9ncmVzc1N0ZXBzO1xufVxuXG52YXIgVGltZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUaW1lcihjYWxsYmFjaywgZGVsYXkpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXIpO1xuXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucmVtYWluaW5nID0gZGVsYXk7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRpbWVyLCBbe1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuaWQgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nIC09IG5ldyBEYXRlKCkgLSB0aGlzLnN0YXJ0ZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5jcmVhc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5jcmVhc2Uobikge1xuICAgICAgdmFyIHJ1bm5pbmcgPSB0aGlzLnJ1bm5pbmc7XG5cbiAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbWFpbmluZyArPSBuO1xuXG4gICAgICBpZiAocnVubmluZykge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGltZXJMZWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpbWVyTGVmdCgpIHtcbiAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1J1bm5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSdW5uaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMucnVubmluZztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGltZXI7XG59KCk7XG5cbnZhciBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzID0ge1xuICBlbWFpbDogZnVuY3Rpb24gZW1haWwoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgIHJldHVybiAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gIH0sXG4gIHVybDogZnVuY3Rpb24gdXJsKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1IHdpdGggYSBzbWFsbCBjaGFuZ2UgZnJvbSAjMTMwNlxuICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fK34jPV17MiwyNTZ9XFwuW2Etel17Miw2M31cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLz1dKikkLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBVUkwnKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpIHtcbiAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICBpZiAoIXBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0ga2V5KSB7XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUN1c3RvbVRhcmdldEVsZW1lbnQocGFyYW1zKSB7XG4gIC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG4gIGlmICghcGFyYW1zLnRhcmdldCB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgIT09ICdzdHJpbmcnICYmICFwYXJhbXMudGFyZ2V0LmFwcGVuZENoaWxkKSB7XG4gICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKTtcbiAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICB9XG59XG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtcykge1xuICBzZXREZWZhdWx0SW5wdXRWYWxpZGF0b3JzKHBhcmFtcyk7IC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuXG4gIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSAmJiAhcGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICB3YXJuKCdzaG93TG9hZGVyT25Db25maXJtIGlzIHNldCB0byB0cnVlLCBidXQgcHJlQ29uZmlybSBpcyBub3QgZGVmaW5lZC5cXG4nICsgJ3Nob3dMb2FkZXJPbkNvbmZpcm0gc2hvdWxkIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBwcmVDb25maXJtLCBzZWUgdXNhZ2UgZXhhbXBsZTpcXG4nICsgJ2h0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3QnKTtcbiAgfSAvLyBwYXJhbXMuYW5pbWF0aW9uIHdpbGwgYmUgYWN0dWFsbHkgdXNlZCBpbiByZW5kZXJQb3B1cC5qc1xuICAvLyBidXQgaW4gY2FzZSB3aGVuIHBhcmFtcy5hbmltYXRpb24gaXMgYSBmdW5jdGlvbiwgd2UgbmVlZCB0byBjYWxsIHRoYXQgZnVuY3Rpb25cbiAgLy8gYmVmb3JlIHBvcHVwIChyZSlpbml0aWFsaXphdGlvbiwgc28gaXQnbGwgYmUgcG9zc2libGUgdG8gY2hlY2sgU3dhbC5pc1Zpc2libGUoKVxuICAvLyBpbnNpZGUgdGhlIHBhcmFtcy5hbmltYXRpb24gZnVuY3Rpb25cblxuXG4gIHBhcmFtcy5hbmltYXRpb24gPSBjYWxsSWZGdW5jdGlvbihwYXJhbXMuYW5pbWF0aW9uKTtcbiAgdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcyk7IC8vIFJlcGxhY2UgbmV3bGluZXMgd2l0aCA8YnI+IGluIHRpdGxlXG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIgLz4nKTtcbiAgfVxuXG4gIGluaXQocGFyYW1zKTtcbn1cblxuLyoqXG4gKiBPcGVuIHBvcHVwLCBhZGQgbmVjZXNzYXJ5IGNsYXNzZXMgYW5kIHN0eWxlcywgZml4IHNjcm9sbGJhclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICovXG5cbnZhciBvcGVuUG9wdXAgPSBmdW5jdGlvbiBvcGVuUG9wdXAocGFyYW1zKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICBpZiAodHlwZW9mIHBhcmFtcy5vbkJlZm9yZU9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTtcbiAgfVxuXG4gIGFkZENsYXNzZXMkMShjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpOyAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG5cbiAgc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eShjb250YWluZXIsIHBvcHVwKTtcblxuICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgcGFyYW1zLnNjcm9sbGJhclBhZGRpbmcpO1xuICB9XG5cbiAgaWYgKCFpc1RvYXN0KCkgJiYgIWdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHBhcmFtcy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYXJhbXMub25PcGVuKHBvcHVwKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZChldmVudCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmIChldmVudC50YXJnZXQgIT09IHBvcHVwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKTtcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbn1cblxudmFyIHNldFNjcm9sbGluZ1Zpc2liaWxpdHkgPSBmdW5jdGlvbiBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5KGNvbnRhaW5lciwgcG9wdXApIHtcbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmIGhhc0Nzc0FuaW1hdGlvbihwb3B1cCkpIHtcbiAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfVxufTtcblxudmFyIGZpeFNjcm9sbENvbnRhaW5lciA9IGZ1bmN0aW9uIGZpeFNjcm9sbENvbnRhaW5lcihjb250YWluZXIsIHNjcm9sbGJhclBhZGRpbmcpIHtcbiAgaU9TZml4KCk7XG4gIElFZml4KCk7XG4gIHNldEFyaWFIaWRkZW4oKTtcblxuICBpZiAoc2Nyb2xsYmFyUGFkZGluZykge1xuICAgIGZpeFNjcm9sbGJhcigpO1xuICB9IC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy8xMjQ3XG5cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgfSk7XG59O1xuXG52YXIgYWRkQ2xhc3NlcyQxID0gZnVuY3Rpb24gYWRkQ2xhc3Nlcyhjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpIHtcbiAgYWRkQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMuc2hvd0NsYXNzLmJhY2tkcm9wKTtcbiAgc2hvdyhwb3B1cCk7IC8vIEFuaW1hdGUgcG9wdXAgcmlnaHQgYWZ0ZXIgc2hvd2luZyBpdFxuXG4gIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuc2hvd0NsYXNzLnBvcHVwKTtcbiAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzLnNob3duKTtcblxuICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICB9XG59O1xuXG52YXIgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIGlmIChwYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnIHx8IHBhcmFtcy5pbnB1dCA9PT0gJ3JhZGlvJykge1xuICAgIGhhbmRsZUlucHV0T3B0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKTtcbiAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluZGV4T2YocGFyYW1zLmlucHV0KSAhPT0gLTEgJiYgaXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKSkge1xuICAgIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIH1cbn07XG52YXIgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKSB7XG4gIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG5cbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGlucHV0KTtcblxuICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgIHJldHVybiBnZXRSYWRpb1ZhbHVlKGlucHV0KTtcblxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgcmV0dXJuIGdldEZpbGVWYWx1ZShpbnB1dCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgfVxufTtcblxudmFyIGdldENoZWNrYm94VmFsdWUgPSBmdW5jdGlvbiBnZXRDaGVja2JveFZhbHVlKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG59O1xuXG52YXIgZ2V0UmFkaW9WYWx1ZSA9IGZ1bmN0aW9uIGdldFJhZGlvVmFsdWUoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG59O1xuXG52YXIgZ2V0RmlsZVZhbHVlID0gZnVuY3Rpb24gZ2V0RmlsZVZhbHVlKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5maWxlcy5sZW5ndGggPyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ211bHRpcGxlJykgIT09IG51bGwgPyBpbnB1dC5maWxlcyA6IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcbn07XG5cbnZhciBoYW5kbGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcblxuICB2YXIgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgcmV0dXJuIHBvcHVsYXRlSW5wdXRPcHRpb25zW3BhcmFtcy5pbnB1dF0oY29udGVudCwgZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyksIHBhcmFtcyk7XG4gIH07XG5cbiAgaWYgKGlzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKSkge1xuICAgIHNob3dMb2FkaW5nKCk7XG4gICAgcGFyYW1zLmlucHV0T3B0aW9ucy50aGVuKGZ1bmN0aW9uIChpbnB1dE9wdGlvbnMpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICBwcm9jZXNzSW5wdXRPcHRpb25zKHBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0LCBNYXAgb3IgUHJvbWlzZSwgZ290IFwiLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSk7XG4gIH1cbn07XG5cbnZhciBoYW5kbGVJbnB1dFZhbHVlID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gIGhpZGUoaW5wdXQpO1xuICBwYXJhbXMuaW5wdXRWYWx1ZS50aGVuKGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7XG4gICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXQgPT09ICdudW1iZXInID8gcGFyc2VGbG9hdChpbnB1dFZhbHVlKSB8fCAwIDogXCJcIi5jb25jYXQoaW5wdXRWYWx1ZSk7XG4gICAgc2hvdyhpbnB1dCk7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBlcnJvcihcIkVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogXCIuY29uY2F0KGVycikpO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgc2hvdyhpbnB1dCk7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICB9KTtcbn07XG5cbnZhciBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IHtcbiAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoY29udGVudCwgaW5wdXRPcHRpb25zLCBwYXJhbXMpIHtcbiAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICB2YXIgb3B0aW9uVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgIHZhciBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICBvcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uTGFiZWw7XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSBvcHRpb25WYWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIHNlbGVjdC5mb2N1cygpO1xuICB9LFxuICByYWRpbzogZnVuY3Rpb24gcmFkaW8oY29udGVudCwgaW5wdXRPcHRpb25zLCBwYXJhbXMpIHtcbiAgICB2YXIgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgdmFyIHJhZGlvVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgIHZhciByYWRpb0xhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICB2YXIgcmFkaW9MYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHJhZGlvVmFsdWU7XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgcmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gcmFkaW9MYWJlbDtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmxhYmVsO1xuICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsRWxlbWVudCk7XG4gICAgfSk7XG4gICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBpZiAocmFkaW9zLmxlbmd0aCkge1xuICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBgaW5wdXRPcHRpb25zYCBpbnRvIGFuIGFycmF5IG9mIGBbdmFsdWUsIGxhYmVsXWBzXG4gKiBAcGFyYW0gaW5wdXRPcHRpb25zXG4gKi9cblxudmFyIGZvcm1hdElucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dE9wdGlvbnMgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgaW5wdXRPcHRpb25zW2tleV1dKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcykge1xuICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpO1xuXG4gIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgIGhhbmRsZUNvbmZpcm1XaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maXJtKGluc3RhbmNlLCBpbm5lclBhcmFtcywgdHJ1ZSk7XG4gIH1cbn07XG52YXIgaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpIHtcbiAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jYW5jZWwpO1xufTtcblxudmFyIGhhbmRsZUNvbmZpcm1XaXRoSW5wdXQgPSBmdW5jdGlvbiBoYW5kbGVDb25maXJtV2l0aElucHV0KGluc3RhbmNlLCBpbm5lclBhcmFtcykge1xuICB2YXIgaW5wdXRWYWx1ZSA9IGdldElucHV0VmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcblxuICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICBpbnN0YW5jZS5kaXNhYmxlSW5wdXQoKTtcbiAgICB2YXIgdmFsaWRhdGlvblByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcihpbnB1dFZhbHVlLCBpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSk7XG4gICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUlucHV0KCk7XG5cbiAgICAgIGlmICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICBpbnN0YW5jZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFpbnN0YW5jZS5nZXRJbnB1dCgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICBpbnN0YW5jZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlubmVyUGFyYW1zLCBpbnB1dFZhbHVlKTtcbiAgfVxufTtcblxudmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKSB7XG4gIGluc3RhbmNlLmNsb3NlUG9wdXAoe1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn07XG5cbnZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHZhbHVlKSB7XG4gIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgc2hvd0xvYWRpbmcoKTsgLy8gVE9ETzogbWFrZSBzaG93TG9hZGluZyBhbiAqaW5zdGFuY2UqIG1ldGhvZFxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICBpbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG4gICAgdmFyIHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIHByZUNvbmZpcm1Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgaWYgKGlzVmlzaWJsZShnZXRWYWxpZGF0aW9uTWVzc2FnZSgpKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWNjZWVkV2l0aChpbnN0YW5jZSwgdHlwZW9mIHByZUNvbmZpcm1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6IHByZUNvbmZpcm1WYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKTtcbiAgfVxufTtcblxudmFyIGFkZEtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gYWRkS2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgJiYgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgfSk7XG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpbm5lclBhcmFtcy50b2FzdCkge1xuICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpO1xuICAgIH07XG5cbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0ID0gaW5uZXJQYXJhbXMua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA/IHdpbmRvdyA6IGdldFBvcHVwKCk7XG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICB9KTtcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gdHJ1ZTtcbiAgfVxufTsgLy8gRm9jdXMgaGFuZGxpbmdcblxudmFyIHNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIGluZGV4LCBpbmNyZW1lbnQpIHtcbiAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTsgLy8gc2VhcmNoIGZvciB2aXNpYmxlIGVsZW1lbnRzIGFuZCBzZWxlY3QgdGhlIG5leHQgcG9zc2libGUgbWF0Y2hcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDsgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuXG4gICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMDsgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gIH0gLy8gbm8gdmlzaWJsZSBmb2N1c2FibGUgZWxlbWVudHMsIGZvY3VzIHRoZSBwb3B1cFxuXG5cbiAgZ2V0UG9wdXAoKS5mb2N1cygpO1xufTtcbnZhciBhcnJvd0tleXMgPSBbJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ0xlZnQnLCAnUmlnaHQnLCAnVXAnLCAnRG93bicgLy8gSUUxMVxuXTtcbnZhciBlc2NLZXlzID0gWydFc2NhcGUnLCAnRXNjJyAvLyBJRTExXG5dO1xuXG52YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG5cbiAgaWYgKGlubmVyUGFyYW1zLnN0b3BLZXlkb3duUHJvcGFnYXRpb24pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9IC8vIEVOVEVSXG5cblxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpOyAvLyBUQUJcbiAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICBoYW5kbGVUYWIoZSwgaW5uZXJQYXJhbXMpOyAvLyBBUlJPV1MgLSBzd2l0Y2ggZm9jdXMgYmV0d2VlbiBidXR0b25zXG4gIH0gZWxzZSBpZiAoYXJyb3dLZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgIGhhbmRsZUFycm93cygpOyAvLyBFU0NcbiAgfSBlbHNlIGlmIChlc2NLZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgIGhhbmRsZUVzYyhlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICB9XG59O1xuXG52YXIgaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpIHtcbiAgLy8gIzcyMCAjNzIxXG4gIGlmIChlLmlzQ29tcG9zaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0ICYmIGluc3RhbmNlLmdldElucHV0KCkgJiYgZS50YXJnZXQub3V0ZXJIVE1MID09PSBpbnN0YW5jZS5nZXRJbnB1dCgpLm91dGVySFRNTCkge1xuICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgIH1cblxuICAgIGNsaWNrQ29uZmlybSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxudmFyIGhhbmRsZVRhYiA9IGZ1bmN0aW9uIGhhbmRsZVRhYihlLCBpbm5lclBhcmFtcykge1xuICB2YXIgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICB2YXIgYnRuSW5kZXggPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW2ldKSB7XG4gICAgICBidG5JbmRleCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICBzZXRGb2N1cyhpbm5lclBhcmFtcywgYnRuSW5kZXgsIDEpO1xuICB9IGVsc2Uge1xuICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgIHNldEZvY3VzKGlubmVyUGFyYW1zLCBidG5JbmRleCwgLTEpO1xuICB9XG5cbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxudmFyIGhhbmRsZUFycm93cyA9IGZ1bmN0aW9uIGhhbmRsZUFycm93cygpIHtcbiAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTsgLy8gZm9jdXMgQ2FuY2VsIGJ1dHRvbiBpZiBDb25maXJtIGJ1dHRvbiBpcyBjdXJyZW50bHkgZm9jdXNlZFxuXG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBjb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShjYW5jZWxCdXR0b24pKSB7XG4gICAgY2FuY2VsQnV0dG9uLmZvY3VzKCk7IC8vIGFuZCB2aWNlIHZlcnNhXG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gY2FuY2VsQnV0dG9uICYmIGlzVmlzaWJsZShjb25maXJtQnV0dG9uKSkge1xuICAgIGNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgfVxufTtcblxudmFyIGhhbmRsZUVzYyA9IGZ1bmN0aW9uIGhhbmRsZUVzYyhlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgaWYgKGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RXNjYXBlS2V5KSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmVzYyk7XG4gIH1cbn07XG5cbnZhciBoYW5kbGVQb3B1cENsaWNrID0gZnVuY3Rpb24gaGFuZGxlUG9wdXBDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuXG4gIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgIGhhbmRsZVRvYXN0Q2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIHBvcHVwIGJ1dCBtb3VzZXVwIG9uIHRoZSBjb250YWluZXJcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuICAgIGhhbmRsZU1vZGFsTW91c2Vkb3duKGRvbUNhY2hlKTsgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIGNvbnRhaW5lciBidXQgbW91c2V1cCBvbiB0aGUgcG9wdXBcblxuICAgIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93bihkb21DYWNoZSk7XG4gICAgaGFuZGxlTW9kYWxDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKTtcbiAgfVxufTtcblxudmFyIGhhbmRsZVRvYXN0Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVUb2FzdENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpIHtcbiAgLy8gQ2xvc2luZyB0b2FzdCBieSBpbnRlcm5hbCBjbGlja1xuICBkb21DYWNoZS5wb3B1cC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uIHx8IGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gIH07XG59O1xuXG52YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG5cbnZhciBoYW5kbGVNb2RhbE1vdXNlZG93biA9IGZ1bmN0aW9uIGhhbmRsZU1vZGFsTW91c2Vkb3duKGRvbUNhY2hlKSB7XG4gIGRvbUNhY2hlLnBvcHVwLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgLy8gaGF2ZSBhbnkgb3RoZXIgZGlyZWN0IGNoaWxkcmVuIGFzaWRlIG9mIHRoZSBwb3B1cFxuXG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59O1xuXG52YXIgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duID0gZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duKGRvbUNhY2hlKSB7XG4gIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIGEgY2hpbGQgb2YgdGhlIHBvcHVwXG5cbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUucG9wdXAgfHwgZG9tQ2FjaGUucG9wdXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn07XG5cbnZhciBoYW5kbGVNb2RhbENsaWNrID0gZnVuY3Rpb24gaGFuZGxlTW9kYWxDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSB7XG4gIGRvbUNhY2hlLmNvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgIGlmIChpZ25vcmVPdXRzaWRlQ2xpY2spIHtcbiAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyICYmIGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSkge1xuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gX21haW4odXNlclBhcmFtcykge1xuICBzaG93V2FybmluZ3NGb3JQYXJhbXModXNlclBhcmFtcyk7XG5cbiAgaWYgKGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZSkge1xuICAgIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZS5fZGVzdHJveSgpO1xuICB9XG5cbiAgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlID0gdGhpcztcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJlcGFyZVBhcmFtcyh1c2VyUGFyYW1zKTtcbiAgc2V0UGFyYW1ldGVycyhpbm5lclBhcmFtcyk7XG4gIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpOyAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcblxuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICB9IC8vIGNsZWFyIHRoZSByZXN0b3JlIGZvY3VzIHRpbWVvdXRcblxuXG4gIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgdmFyIGRvbUNhY2hlID0gcG9wdWxhdGVEb21DYWNoZSh0aGlzKTtcbiAgcmVuZGVyKHRoaXMsIGlubmVyUGFyYW1zKTtcbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCBpbm5lclBhcmFtcyk7XG4gIHJldHVybiBzd2FsUHJvbWlzZSh0aGlzLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpO1xufVxuXG52YXIgcHJlcGFyZVBhcmFtcyA9IGZ1bmN0aW9uIHByZXBhcmVQYXJhbXModXNlclBhcmFtcykge1xuICB2YXIgc2hvd0NsYXNzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMuc2hvd0NsYXNzLCB1c2VyUGFyYW1zLnNob3dDbGFzcyk7XG5cbiAgdmFyIGhpZGVDbGFzcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zLmhpZGVDbGFzcywgdXNlclBhcmFtcy5oaWRlQ2xhc3MpO1xuXG4gIHZhciBwYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcywgdXNlclBhcmFtcyk7XG5cbiAgcGFyYW1zLnNob3dDbGFzcyA9IHNob3dDbGFzcztcbiAgcGFyYW1zLmhpZGVDbGFzcyA9IGhpZGVDbGFzczsgLy8gQGRlcHJlY2F0ZWRcblxuICBpZiAodXNlclBhcmFtcy5hbmltYXRpb24gPT09IGZhbHNlKSB7XG4gICAgcGFyYW1zLnNob3dDbGFzcyA9IHtcbiAgICAgIHBvcHVwOiAnJyxcbiAgICAgIGJhY2tkcm9wOiAnc3dhbDItYmFja2Ryb3Atc2hvdyBzd2FsMi1ub2FuaW1hdGlvbidcbiAgICB9O1xuICAgIHBhcmFtcy5oaWRlQ2xhc3MgPSB7fTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXM7XG59O1xuXG52YXIgc3dhbFByb21pc2UgPSBmdW5jdGlvbiBzd2FsUHJvbWlzZShpbnN0YW5jZSwgZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIC8vIGZ1bmN0aW9ucyB0byBoYW5kbGUgYWxsIGNsb3NpbmdzL2Rpc21pc3NhbHNcbiAgICB2YXIgZGlzbWlzc1dpdGggPSBmdW5jdGlvbiBkaXNtaXNzV2l0aChkaXNtaXNzKSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHtcbiAgICAgICAgZGlzbWlzczogZGlzbWlzc1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQoaW5zdGFuY2UsIHJlc29sdmUpO1xuICAgIHNldHVwVGltZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG5cbiAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgfTtcblxuICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrKGluc3RhbmNlLCBkaXNtaXNzV2l0aCk7XG4gICAgfTtcblxuICAgIGRvbUNhY2hlLmNsb3NlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVBvcHVwQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgYWRkS2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0ICYmIChpbm5lclBhcmFtcy5pbnB1dCB8fCBpbm5lclBhcmFtcy5mb290ZXIgfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSkge1xuICAgICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgIG9wZW5Qb3B1cChpbm5lclBhcmFtcyk7XG4gICAgaW5pdEZvY3VzKGRvbUNhY2hlLCBpbm5lclBhcmFtcyk7IC8vIFNjcm9sbCBjb250YWluZXIgdG8gdG9wIG9uIG9wZW4gKCMxMjQ3KVxuXG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gIH0pO1xufTtcblxudmFyIHBvcHVsYXRlRG9tQ2FjaGUgPSBmdW5jdGlvbiBwb3B1bGF0ZURvbUNhY2hlKGluc3RhbmNlKSB7XG4gIHZhciBkb21DYWNoZSA9IHtcbiAgICBwb3B1cDogZ2V0UG9wdXAoKSxcbiAgICBjb250YWluZXI6IGdldENvbnRhaW5lcigpLFxuICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoKSxcbiAgICBhY3Rpb25zOiBnZXRBY3Rpb25zKCksXG4gICAgY29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbigpLFxuICAgIGNhbmNlbEJ1dHRvbjogZ2V0Q2FuY2VsQnV0dG9uKCksXG4gICAgY2xvc2VCdXR0b246IGdldENsb3NlQnV0dG9uKCksXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U6IGdldFZhbGlkYXRpb25NZXNzYWdlKCksXG4gICAgcHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gIH07XG4gIHByaXZhdGVQcm9wcy5kb21DYWNoZS5zZXQoaW5zdGFuY2UsIGRvbUNhY2hlKTtcbiAgcmV0dXJuIGRvbUNhY2hlO1xufTtcblxudmFyIHNldHVwVGltZXIgPSBmdW5jdGlvbiBzZXR1cFRpbWVyKGdsb2JhbFN0YXRlJCQxLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG4gIGhpZGUodGltZXJQcm9ncmVzc0Jhcik7XG5cbiAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgZ2xvYmFsU3RhdGUkJDEudGltZW91dCA9IG5ldyBUaW1lcihmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNtaXNzV2l0aCgndGltZXInKTtcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZSQkMS50aW1lb3V0O1xuICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICBzaG93KHRpbWVyUHJvZ3Jlc3NCYXIpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGluaXRGb2N1cyA9IGZ1bmN0aW9uIGluaXRGb2N1cyhkb21DYWNoZSwgaW5uZXJQYXJhbXMpIHtcbiAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgIHJldHVybiBibHVyQWN0aXZlRWxlbWVudCgpO1xuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgcmV0dXJuIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ29uZmlybSAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbikpIHtcbiAgICByZXR1cm4gZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICB9XG5cbiAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIC0xLCAxKTtcbn07XG5cbnZhciBibHVyQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIGJsdXJBY3RpdmVFbGVtZW50KCkge1xuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlcyBwb3B1cCBwYXJhbWV0ZXJzLlxuICovXG5cbmZ1bmN0aW9uIHVwZGF0ZShwYXJhbXMpIHtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICBpZiAoIXBvcHVwIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgcmV0dXJuIHdhcm4oXCJZb3UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgY2xvc2VkIG9yIGNsb3NpbmcgcG9wdXAsIHRoYXQgd29uJ3Qgd29yay4gVXNlIHRoZSB1cGRhdGUoKSBtZXRob2QgaW4gcHJlQ29uZmlybSBwYXJhbWV0ZXIgb3Igc2hvdyBhIG5ldyBwb3B1cC5cIik7XG4gIH1cblxuICB2YXIgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSB7fTsgLy8gYXNzaWduIHZhbGlkIHBhcmFtcyBmcm9tIGBwYXJhbXNgIHRvIGBkZWZhdWx0c2BcblxuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgaWYgKFN3YWwuaXNVcGRhdGFibGVQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB2YWxpZFVwZGF0YWJsZVBhcmFtc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKFwiSW52YWxpZCBwYXJhbWV0ZXIgdG8gdXBkYXRlOiBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCIuIFVwZGF0YWJsZSBwYXJhbXMgYXJlIGxpc3RlZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3BhcmFtcy5qc1wiKSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgdXBkYXRlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBpbm5lclBhcmFtcywgdmFsaWRVcGRhdGFibGVQYXJhbXMpO1xuXG4gIHJlbmRlcih0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHBhcmFtczoge1xuICAgICAgdmFsdWU6IF9leHRlbmRzKHt9LCB0aGlzLnBhcmFtcywgcGFyYW1zKSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgcmV0dXJuOyAvLyBUaGlzIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkXG4gIH0gLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYW5vdGhlciBTd2FsIGNsb3NpbmdcblxuXG4gIGlmIChkb21DYWNoZS5wb3B1cCAmJiBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKTtcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICB9IC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc3dhbCBkaXNwb3NhbCBkZWZlciB0aW1lclxuXG5cbiAgaWYgKGdsb2JhbFN0YXRlLmRlZmVyRGlzcG9zYWxUaW1lcikge1xuICAgIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5kZWZlckRpc3Bvc2FsVGltZXIpO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5kZWZlckRpc3Bvc2FsVGltZXI7XG4gIH1cblxuICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLm9uRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlubmVyUGFyYW1zLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgZGlzcG9zZVN3YWwodGhpcyk7XG59XG5cbnZhciBkaXNwb3NlU3dhbCA9IGZ1bmN0aW9uIGRpc3Bvc2VTd2FsKGluc3RhbmNlKSB7XG4gIC8vIFVuc2V0IHRoaXMucGFyYW1zIHNvIEdDIHdpbGwgZGlzcG9zZSBpdCAoIzE1NjkpXG4gIGRlbGV0ZSBpbnN0YW5jZS5wYXJhbXM7IC8vIFVuc2V0IGdsb2JhbFN0YXRlIHByb3BzIHNvIEdDIHdpbGwgZGlzcG9zZSBnbG9iYWxTdGF0ZSAoIzE1NjkpXG5cbiAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyO1xuICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldDsgLy8gVW5zZXQgV2Vha01hcHMgc28gR0Mgd2lsbCBiZSBhYmxlIHRvIGRpc3Bvc2UgdGhlbSAoIzE1NjkpXG5cbiAgdW5zZXRXZWFrTWFwcyhwcml2YXRlUHJvcHMpO1xuICB1bnNldFdlYWtNYXBzKHByaXZhdGVNZXRob2RzKTtcbn07XG5cbnZhciB1bnNldFdlYWtNYXBzID0gZnVuY3Rpb24gdW5zZXRXZWFrTWFwcyhvYmopIHtcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBvYmpbaV0gPSBuZXcgV2Vha01hcCgpO1xuICB9XG59O1xuXG5cblxudmFyIGluc3RhbmNlTWV0aG9kcyA9IE9iamVjdC5mcmVlemUoe1xuXHRoaWRlTG9hZGluZzogaGlkZUxvYWRpbmcsXG5cdGRpc2FibGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcblx0Z2V0SW5wdXQ6IGdldElucHV0JDEsXG5cdGNsb3NlOiBjbG9zZSxcblx0Y2xvc2VQb3B1cDogY2xvc2UsXG5cdGNsb3NlTW9kYWw6IGNsb3NlLFxuXHRjbG9zZVRvYXN0OiBjbG9zZSxcblx0ZW5hYmxlQnV0dG9uczogZW5hYmxlQnV0dG9ucyxcblx0ZGlzYWJsZUJ1dHRvbnM6IGRpc2FibGVCdXR0b25zLFxuXHRlbmFibGVJbnB1dDogZW5hYmxlSW5wdXQsXG5cdGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0LFxuXHRzaG93VmFsaWRhdGlvbk1lc3NhZ2U6IHNob3dWYWxpZGF0aW9uTWVzc2FnZSxcblx0cmVzZXRWYWxpZGF0aW9uTWVzc2FnZTogcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxLFxuXHRnZXRQcm9ncmVzc1N0ZXBzOiBnZXRQcm9ncmVzc1N0ZXBzJDEsXG5cdF9tYWluOiBfbWFpbixcblx0dXBkYXRlOiB1cGRhdGUsXG5cdF9kZXN0cm95OiBfZGVzdHJveVxufSk7XG5cbnZhciBjdXJyZW50SW5zdGFuY2U7IC8vIFN3ZWV0QWxlcnQgY29uc3RydWN0b3JcblxuZnVuY3Rpb24gU3dlZXRBbGVydCgpIHtcbiAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIFByb21pc2VcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuXG4gIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlcnJvcignVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydCknKTtcbiAgfVxuXG4gIGN1cnJlbnRJbnN0YW5jZSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWx1ZTogb3V0ZXJQYXJhbXMsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICB2YXIgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpO1xuXG4gIHByaXZhdGVQcm9wcy5wcm9taXNlLnNldCh0aGlzLCBwcm9taXNlKTtcbn0gLy8gYGNhdGNoYCBjYW5ub3QgYmUgdGhlIG5hbWUgb2YgYSBtb2R1bGUgZXhwb3J0LCBzbyB3ZSBkZWZpbmUgb3VyIHRoZW5hYmxlIG1ldGhvZHMgaGVyZSBpbnN0ZWFkXG5cblxuU3dlZXRBbGVydC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCkge1xuICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCk7XG59O1xuXG5Td2VldEFsZXJ0LnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZVtcImZpbmFsbHlcIl0ob25GaW5hbGx5KTtcbn07IC8vIEFzc2lnbiBpbnN0YW5jZSBtZXRob2RzIGZyb20gc3JjL2luc3RhbmNlTWV0aG9kcy8qLmpzIHRvIHByb3RvdHlwZVxuXG5cbl9leHRlbmRzKFN3ZWV0QWxlcnQucHJvdG90eXBlLCBpbnN0YW5jZU1ldGhvZHMpOyAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG5cblxuX2V4dGVuZHMoU3dlZXRBbGVydCwgc3RhdGljTWV0aG9kcyk7IC8vIFByb3h5IHRvIGluc3RhbmNlIG1ldGhvZHMgdG8gY29uc3RydWN0b3IsIGZvciBub3csIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG5cbk9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudEluc3RhbmNlKSB7XG4gICAgICB2YXIgX2N1cnJlbnRJbnN0YW5jZTtcblxuICAgICAgcmV0dXJuIChfY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlKVtrZXldLmFwcGx5KF9jdXJyZW50SW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufSk7XG5Td2VldEFsZXJ0LkRpc21pc3NSZWFzb24gPSBEaXNtaXNzUmVhc29uO1xuU3dlZXRBbGVydC52ZXJzaW9uID0gJzkuNy4xJztcblxudmFyIFN3YWwgPSBTd2VldEFsZXJ0O1xuU3dhbFtcImRlZmF1bHRcIl0gPSBTd2FsO1xuXG5yZXR1cm4gU3dhbDtcblxufSkpKTtcbmlmICh0eXBlb2YgdGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5Td2VldGFsZXJ0Mil7ICB0aGlzLnN3YWwgPSB0aGlzLnN3ZWV0QWxlcnQgPSB0aGlzLlN3YWwgPSB0aGlzLlN3ZWV0QWxlcnQgPSB0aGlzLlN3ZWV0YWxlcnQyfVxuXG5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobiksbi5zdHlsZVNoZWV0KW4uc3R5bGVTaGVldC5kaXNhYmxlZHx8KG4uc3R5bGVTaGVldC5jc3NUZXh0PXQpO2Vsc2UgdHJ5e24uaW5uZXJIVE1MPXR9Y2F0Y2goZSl7bi5pbm5lclRleHQ9dH19KGRvY3VtZW50LFwiLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0ey13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7ZmxleC1kaXJlY3Rpb246cm93Oy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6YXV0bztwYWRkaW5nOi42MjVlbTtvdmVyZmxvdy15OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmY7Ym94LXNoYWRvdzowIDAgLjYyNWVtICNkOWQ5ZDl9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1oZWFkZXJ7LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDtmbGV4LWRpcmVjdGlvbjpyb3d9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi10aXRsZXstd2Via2l0LWJveC1mbGV4OjE7ZmxleC1ncm93OjE7LXdlYmtpdC1ib3gtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1mb290ZXJ7bWFyZ2luOi41ZW0gMCAwO3BhZGRpbmc6LjVlbSAwIDA7Zm9udC1zaXplOi44ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jbG9zZXtwb3NpdGlvbjpzdGF0aWM7d2lkdGg6LjhlbTtoZWlnaHQ6LjhlbTtsaW5lLWhlaWdodDouOH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnR7LXdlYmtpdC1ib3gtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbnt3aWR0aDoyZW07bWluLXdpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjowfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEuOGVtO2ZvbnQtd2VpZ2h0OjcwMH1AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6bm9uZSksKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnR7Zm9udC1zaXplOi4yNWVtfX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3dpZHRoOjJlbTtoZWlnaHQ6MmVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXt0b3A6Ljg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnN7ZmxleC1iYXNpczphdXRvIWltcG9ydGFudDt3aWR0aDphdXRvO2hlaWdodDphdXRvO21hcmdpbjowIC4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWR7bWFyZ2luOjAgLjMxMjVlbTtwYWRkaW5nOi4zMTI1ZW0gLjYyNWVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWQ6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSg1MCwxMDAsMTUwLC40KX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxLjZlbTtoZWlnaHQ6M2VtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uOGVtO2xlZnQ6LS41ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoyZW0gMmVtO3RyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTtib3JkZXItcmFkaXVzOjRlbSAwIDAgNGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LS4yNWVtO2xlZnQ6LjkzNzVlbTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAxLjVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1zaG93IC41czthbmltYXRpb246c3dhbDItdG9hc3Qtc2hvdyAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWhpZGUgLjFzIGZvcndhcmRzfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDYwO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowOy13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7ZmxleC1kaXJlY3Rpb246cm93Oy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOi42MjVlbTtvdmVyZmxvdy14OmhpZGRlbjstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXM7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xczstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLXNob3d7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC40KX0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLWhpZGV7YmFja2dyb3VuZDowIDAhaW1wb3J0YW50fS5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wey13ZWJraXQtYm94LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydHstd2Via2l0LWJveC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0ey13ZWJraXQtYm94LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LXdlYmtpdC1ib3gtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0ey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tey13ZWJraXQtYm94LWFsaWduOmVuZDthbGlnbi1pdGVtczpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0ey13ZWJraXQtYm94LWFsaWduOmVuZDthbGlnbi1pdGVtczpmbGV4LWVuZDstd2Via2l0LWJveC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHstd2Via2l0LWJveC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7LXdlYmtpdC1ib3gtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZD46Zmlyc3QtY2hpbGQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdD46Zmlyc3QtY2hpbGQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQ+OmZpcnN0LWNoaWxkLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0PjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbT46Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDphdXRvfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuPi5zd2FsMi1tb2RhbHtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50Oy13ZWJraXQtYm94LWZsZXg6MTtmbGV4OjE7YWxpZ24tc2VsZjpzdHJldGNoOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdz4uc3dhbDItbW9kYWx7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudDstd2Via2l0LWJveC1mbGV4OjE7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbnstd2Via2l0LWJveC1mbGV4OjE7ZmxleDoxOy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbSwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlciwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1zdGFydCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXN0YXJ0ey13ZWJraXQtYm94LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1yaWdodCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtcmlnaHR7LXdlYmtpdC1ib3gtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtZmxleDoxO2ZsZXg6MTthbGlnbi1jb250ZW50OmNlbnRlcjstd2Via2l0LWJveC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi1jb250YWluZXI6bm90KC5zd2FsMi10b3ApOm5vdCguc3dhbDItdG9wLXN0YXJ0KTpub3QoLnN3YWwyLXRvcC1lbmQpOm5vdCguc3dhbDItdG9wLWxlZnQpOm5vdCguc3dhbDItdG9wLXJpZ2h0KTpub3QoLnN3YWwyLWNlbnRlci1zdGFydCk6bm90KC5zd2FsMi1jZW50ZXItZW5kKTpub3QoLnN3YWwyLWNlbnRlci1sZWZ0KTpub3QoLnN3YWwyLWNlbnRlci1yaWdodCk6bm90KC5zd2FsMi1ib3R0b20pOm5vdCguc3dhbDItYm90dG9tLXN0YXJ0KTpub3QoLnN3YWwyLWJvdHRvbS1lbmQpOm5vdCguc3dhbDItYm90dG9tLWxlZnQpOm5vdCguc3dhbDItYm90dG9tLXJpZ2h0KTpub3QoLnN3YWwyLWdyb3ctZnVsbHNjcmVlbik+LnN3YWwyLW1vZGFse21hcmdpbjphdXRvfUBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSwoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbHttYXJnaW46MCFpbXBvcnRhbnR9fS5zd2FsMi1wb3B1cHtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjMyZW07bWF4LXdpZHRoOjEwMCU7cGFkZGluZzoxLjI1ZW07Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czouMzEyNWVtO2JhY2tncm91bmQ6I2ZmZjtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtfS5zd2FsMi1wb3B1cDpmb2N1c3tvdXRsaW5lOjB9LnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmd7b3ZlcmZsb3cteTpoaWRkZW59LnN3YWwyLWhlYWRlcntkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItdGl0bGV7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjAgMCAuNGVtO3BhZGRpbmc6MDtjb2xvcjojNTk1OTU5O2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1hY3Rpb25ze2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTpmbGV4O3otaW5kZXg6MTtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG8gMH0uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRde29wYWNpdHk6LjR9LnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmhvdmVye2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbShyZ2JhKDAsMCwwLC4xKSksdG8ocmdiYSgwLDAsMCwuMSkpKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4xKSxyZ2JhKDAsMCwwLC4xKSl9LnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZXtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLGxlZnQgYm90dG9tLGZyb20ocmdiYSgwLDAsMCwuMikpLHRvKHJnYmEoMCwwLDAsLjIpKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuMikscmdiYSgwLDAsMCwuMikpfS5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoyLjVlbTtoZWlnaHQ6Mi41ZW07bWFyZ2luOi40Njg3NWVtO3BhZGRpbmc6MDstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtib3JkZXI6LjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtjb2xvcjp0cmFuc3BhcmVudDtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbHttYXJnaW4tcmlnaHQ6MzBweDttYXJnaW4tbGVmdDozMHB4fS5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOjphZnRlcntjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjE1cHg7aGVpZ2h0OjE1cHg7bWFyZ2luLWxlZnQ6NXB4Oy13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDthbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2JvcmRlcjozcHggc29saWQgIzk5OTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzoxcHggMXB4IDFweCAjZmZmfS5zd2FsMi1zdHlsZWR7bWFyZ2luOi4zMTI1ZW07cGFkZGluZzouNjI1ZW0gMmVtO2JveC1zaGFkb3c6bm9uZTtmb250LXdlaWdodDo1MDB9LnN3YWwyLXN0eWxlZDpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzMwODVkNjtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxLjA2MjVlbX0uc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbHtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiNhYWE7Y29sb3I6I2ZmZjtmb250LXNpemU6MS4wNjI1ZW19LnN3YWwyLXN0eWxlZDpmb2N1c3tvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgMCAxcHggI2ZmZiwwIDAgMCAzcHggcmdiYSg1MCwxMDAsMTUwLC40KX0uc3dhbDItc3R5bGVkOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsMi1mb290ZXJ7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MS4yNWVtIDAgMDtwYWRkaW5nOjFlbSAwIDA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZTtjb2xvcjojNTQ1NDU0O2ZvbnQtc2l6ZToxZW19LnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6LjI1ZW07YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yKX0uc3dhbDItaW1hZ2V7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjEuMjVlbSBhdXRvfS5zd2FsMi1jbG9zZXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOjA7cmlnaHQ6MDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuMmVtO2hlaWdodDoxLjJlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdHJhbnNpdGlvbjpjb2xvciAuMXMgZWFzZS1vdXQ7dHJhbnNpdGlvbjpjb2xvciAuMXMgZWFzZS1vdXQ7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO291dGxpbmU6aW5pdGlhbDtiYWNrZ3JvdW5kOjAgMDtjb2xvcjojY2NjO2ZvbnQtZmFtaWx5OnNlcmlmO2ZvbnQtc2l6ZToyLjVlbTtsaW5lLWhlaWdodDoxLjI7Y3Vyc29yOnBvaW50ZXJ9LnN3YWwyLWNsb3NlOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOm5vbmU7dHJhbnNmb3JtOm5vbmU7YmFja2dyb3VuZDowIDA7Y29sb3I6I2YyNzQ3NH0uc3dhbDItY2xvc2U6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwyLWNvbnRlbnR7ei1pbmRleDoxOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjA7cGFkZGluZzowO2NvbG9yOiM1NDU0NTQ7Zm9udC1zaXplOjEuMTI1ZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjt3b3JkLXdyYXA6YnJlYWstd29yZH0uc3dhbDItY2hlY2tib3gsLnN3YWwyLWZpbGUsLnN3YWwyLWlucHV0LC5zd2FsMi1yYWRpbywuc3dhbDItc2VsZWN0LC5zd2FsMi10ZXh0YXJlYXttYXJnaW46MWVtIGF1dG99LnN3YWwyLWZpbGUsLnN3YWwyLWlucHV0LC5zd2FsMi10ZXh0YXJlYXtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJTstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4zcyxib3gtc2hhZG93IC4zczt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuM3MsYm94LXNoYWRvdyAuM3M7Ym9yZGVyOjFweCBzb2xpZCAjZDlkOWQ5O2JvcmRlci1yYWRpdXM6LjE4NzVlbTtiYWNrZ3JvdW5kOmluaGVyaXQ7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvciwuc3dhbDItaW5wdXQuc3dhbDItaW5wdXRlcnJvciwuc3dhbDItdGV4dGFyZWEuc3dhbDItaW5wdXRlcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQhaW1wb3J0YW50fS5zd2FsMi1maWxlOmZvY3VzLC5zd2FsMi1pbnB1dDpmb2N1cywuc3dhbDItdGV4dGFyZWE6Zm9jdXN7Ym9yZGVyOjFweCBzb2xpZCAjYjRkYmVkO291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAzcHggI2M0ZTZmNX0uc3dhbDItZmlsZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLXRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLWZpbGU6Oi1tb3otcGxhY2Vob2xkZXIsLnN3YWwyLWlucHV0OjotbW96LXBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1maWxlOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItZmlsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1yYW5nZXttYXJnaW46MWVtIGF1dG87YmFja2dyb3VuZDojZmZmfS5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDo4MCV9LnN3YWwyLXJhbmdlIG91dHB1dHt3aWR0aDoyMCU7Y29sb3I6aW5oZXJpdDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLXJhbmdlIGlucHV0LC5zd2FsMi1yYW5nZSBvdXRwdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowO2ZvbnQtc2l6ZToxLjEyNWVtO2xpbmUtaGVpZ2h0OjIuNjI1ZW19LnN3YWwyLWlucHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MCAuNzVlbX0uc3dhbDItaW5wdXRbdHlwZT1udW1iZXJde21heC13aWR0aDoxMGVtfS5zd2FsMi1maWxle2JhY2tncm91bmQ6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItdGV4dGFyZWF7aGVpZ2h0OjYuNzVlbTtwYWRkaW5nOi43NWVtfS5zd2FsMi1zZWxlY3R7bWluLXdpZHRoOjUwJTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVlbSAuNjI1ZW07YmFja2dyb3VuZDppbmhlcml0O2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLWNoZWNrYm94LC5zd2FsMi1yYWRpb3std2Via2l0LWJveC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDojZmZmO2NvbG9yOmluaGVyaXR9LnN3YWwyLWNoZWNrYm94IGxhYmVsLC5zd2FsMi1yYWRpbyBsYWJlbHttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1jaGVja2JveCBpbnB1dCwuc3dhbDItcmFkaW8gaW5wdXR7bWFyZ2luOjAgLjRlbX0uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdle2Rpc3BsYXk6bm9uZTstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2YwZjBmMDtjb2xvcjojNjY2O2ZvbnQtc2l6ZToxZW07Zm9udC13ZWlnaHQ6MzAwfS5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2U6OmJlZm9yZXtjb250ZW50OlxcXCIhXFxcIjtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxLjVlbTttaW4td2lkdGg6MS41ZW07aGVpZ2h0OjEuNWVtO21hcmdpbjowIC42MjVlbTtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzQ7Y29sb3I6I2ZmZjtmb250LXdlaWdodDo2MDA7bGluZS1oZWlnaHQ6MS41ZW07dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLWljb257cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpjb250ZW50LWJveDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjVlbTtoZWlnaHQ6NWVtO21hcmdpbjoxLjI1ZW0gYXV0byAxLjg3NWVtO2JvcmRlcjouMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTtmb250LWZhbWlseTppbmhlcml0O2xpbmUtaGVpZ2h0OjVlbTtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudHtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZTozLjc1ZW19LnN3YWwyLWljb24uc3dhbDItZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzQ7Y29sb3I6I2YyNzQ3NH0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtYm94LWZsZXg6MTtmbGV4LWdyb3c6MX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyLjMxMjVlbTt3aWR0aDoyLjkzNzVlbTtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzR9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6MS4wNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0OjFlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnN3YWwyLWljb24uc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93ey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9LnN3YWwyLWljb24uc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93IC5zd2FsMi14LW1hcmt7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXN9LnN3YWwyLWljb24uc3dhbDItd2FybmluZ3tib3JkZXItY29sb3I6I2ZhY2VhODtjb2xvcjojZjhiYjg2fS5zd2FsMi1pY29uLnN3YWwyLWluZm97Ym9yZGVyLWNvbG9yOiM5ZGUwZjY7Y29sb3I6IzNmYzNlZX0uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbntib3JkZXItY29sb3I6I2M5ZGFlMTtjb2xvcjojODdhZGJkfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODY7Y29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozLjc1ZW07aGVpZ2h0OjcuNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotLjQzNzVlbTtsZWZ0Oi0yLjA2MzVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjMuNzVlbSAzLjc1ZW07dHJhbnNmb3JtLW9yaWdpbjozLjc1ZW0gMy43NWVtO2JvcmRlci1yYWRpdXM6Ny41ZW0gMCAwIDcuNWVtfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0uNjg3NWVtO2xlZnQ6MS44NzVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMy43NWVtO3RyYW5zZm9ybS1vcmlnaW46MCAzLjc1ZW07Ym9yZGVyLXJhZGl1czowIDcuNWVtIDcuNWVtIDB9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mjt0b3A6LS4yNWVtO2xlZnQ6LS4yNWVtO2JveC1zaXppbmc6Y29udGVudC1ib3g7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6LjI1ZW0gc29saWQgcmdiYSgxNjUsMjIwLDEzNCwuMyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXh7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDouNWVtO2xlZnQ6MS42MjVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDo1LjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MjtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNhNWRjODZ9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjIuODc1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHN7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MCAwIDEuMjVlbTtwYWRkaW5nOjA7YmFja2dyb3VuZDppbmhlcml0O2ZvbnQtd2VpZ2h0OjYwMH0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwe3otaW5kZXg6MjA7d2lkdGg6MmVtO2hlaWdodDoyZW07Ym9yZGVyLXJhZGl1czoyZW07YmFja2dyb3VuZDojMzA4NWQ2O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MmVtO3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiMzMDg1ZDZ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwe2JhY2tncm91bmQ6I2FkZDhlNjtjb2xvcjojZmZmfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le2JhY2tncm91bmQ6I2FkZDhlNn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZXt6LWluZGV4OjEwO3dpZHRoOjIuNWVtO2hlaWdodDouNGVtO21hcmdpbjowIC0xcHg7YmFja2dyb3VuZDojMzA4NWQ2fVtjbGFzc149c3dhbDJdey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0uc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1zaG93IC4zczthbmltYXRpb246c3dhbDItc2hvdyAuM3N9LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzO2FuaW1hdGlvbjpzd2FsMi1oaWRlIC4xNXMgZm9yd2FyZHN9LnN3YWwyLW5vYW5pbWF0aW9uey13ZWJraXQtdHJhbnNpdGlvbjpub25lO3RyYW5zaXRpb246bm9uZX0uc3dhbDItc2Nyb2xsYmFyLW1lYXN1cmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGx9LnN3YWwyLXJ0bCAuc3dhbDItY2xvc2V7cmlnaHQ6YXV0bztsZWZ0OjB9LnN3YWwyLXJ0bCAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFye3JpZ2h0OjA7bGVmdDphdXRvfUBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpey5zd2FsMi1jbG9zZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCByZ2JhKDUwLDEwMCwxNTAsLjQpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3Qtc2hvd3swJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKX0zMyV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjYyNWVtKSByb3RhdGVaKDJkZWcpfTMzJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO3RyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LS4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItc2hvd3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNyk7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjcpO3RyYW5zZm9ybTpzY2FsZSguNyl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzd2FsMi1oaWRlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOjEuMTg3NWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6MS4wNjI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOjIuMTg3NWVtO2xlZnQ6LS4zNzVlbTt3aWR0aDozLjEyNWVtfTg0JXt0b3A6M2VtO2xlZnQ6MS4zMTI1ZW07d2lkdGg6MS4wNjI1ZW19MTAwJXt0b3A6Mi44MTI1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6MS4xODc1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDoxLjA2MjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6Mi4xODc1ZW07bGVmdDotLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH02NSV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTg0JXt0b3A6Mi4xODc1ZW07cmlnaHQ6MDt3aWR0aDozLjQzNzVlbX0xMDAle3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9NTAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LS4zNzVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFya3swJXttYXJnaW4tdG9wOjEuNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTUwJXttYXJnaW4tdG9wOjEuNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTgwJXttYXJnaW4tdG9wOi0uMzc1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpfTEwMCV7bWFyZ2luLXRvcDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwKTt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMCk7dHJhbnNmb3JtOnJvdGF0ZVgoMCk7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3c6aGlkZGVufWJvZHkuc3dhbDItaGVpZ2h0LWF1dG97aGVpZ2h0OmF1dG8haW1wb3J0YW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lcnt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6YXV0bzttYXgtd2lkdGg6Y2FsYygxMDAlIC0gLjYyNWVtICogMik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyPi5zd2FsMi1tb2RhbHtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydHt0b3A6MDtsZWZ0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodHt0b3A6MDtyaWdodDowfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnR7dG9wOjUwJTtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e3RvcDo1MCU7cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b217Ym90dG9tOjA7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHtib3R0b206MDtsZWZ0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHtyaWdodDowO2JvdHRvbTowfUBtZWRpYSBwcmludHtib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93LXk6c2Nyb2xsIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pPlthcmlhLWhpZGRlbj10cnVlXXtkaXNwbGF5Om5vbmV9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVye3Bvc2l0aW9uOnN0YXRpYyFpbXBvcnRhbnR9fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHR7dG9wOjA7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG99Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnR7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnR7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e3RvcDo1MCU7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG87LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOjA7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0e3RvcDphdXRvO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDphdXRvfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdHstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNofWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9uc3std2Via2l0LWJveC1mbGV4OjE7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtoZWlnaHQ6Mi4yZW07bWFyZ2luLXRvcDouMzEyNWVtfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZ3std2Via2l0LWJveC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXR7aGVpZ2h0OjJlbTttYXJnaW46LjMxMjVlbSBhdXRvO2ZvbnQtc2l6ZToxZW19Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7Zm9udC1zaXplOjFlbX1cIik7IiwiaW1wb3J0IGNhbnZhc0JHVXJsIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jYW52YXNCYWNrZ3JvdW5kLmpwZyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9nYW1lT2JqZWN0cy9wZXJzb25zL1BsYXllcic7XHJcbmltcG9ydCBab21iaWUgZnJvbSAnLi9nYW1lT2JqZWN0cy9wZXJzb25zL1pvbWJpZSc7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi9zZXJ2aWNlcy9jb3VudGRvd24uc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yIH0gZnJvbSAnLi9nYW1lT2JqZWN0cy9wZXJzb25zL1BlcnNvbic7XHJcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4vaGVscGVycy9pbWFnZS5oZWxwZXInO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21ab21iaWUsIGdldFJhbmRvbVBvc2l0aW9uWm9tYmllIH0gZnJvbSAnLi9oZWxwZXJzL3pvbWJpZS5oZWxwZXInO1xyXG5pbXBvcnQgeyB2aWV3UmVzdWx0IH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XHJcbnZhciBHYW1lU3RhdGU7XHJcbihmdW5jdGlvbiAoR2FtZVN0YXRlKSB7XHJcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiU3RhcnRcIl0gPSAwXSA9IFwiU3RhcnRcIjtcclxuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJTdG9wXCJdID0gMV0gPSBcIlN0b3BcIjtcclxufSkoR2FtZVN0YXRlIHx8IChHYW1lU3RhdGUgPSB7fSkpO1xyXG47XHJcbnZhciBDb2xsaXNpb25XaXRoQ2FudmFzO1xyXG4oZnVuY3Rpb24gKENvbGxpc2lvbldpdGhDYW52YXMpIHtcclxuICAgIENvbGxpc2lvbldpdGhDYW52YXNbQ29sbGlzaW9uV2l0aENhbnZhc1tcIlhcIl0gPSAwXSA9IFwiWFwiO1xyXG4gICAgQ29sbGlzaW9uV2l0aENhbnZhc1tDb2xsaXNpb25XaXRoQ2FudmFzW1wiWVwiXSA9IDFdID0gXCJZXCI7XHJcbiAgICBDb2xsaXNpb25XaXRoQ2FudmFzW0NvbGxpc2lvbldpdGhDYW52YXNbXCJOb25lXCJdID0gMl0gPSBcIk5vbmVcIjtcclxufSkoQ29sbGlzaW9uV2l0aENhbnZhcyB8fCAoQ29sbGlzaW9uV2l0aENhbnZhcyA9IHt9KSk7XHJcbjtcclxudmFyIFpvbWJpZWxhbmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBab21iaWVsYW5kKGNvbnRhaW5lciwgY2FudmFzT3B0aW9ucywgY2FudmFzQmFja2dyb3VuZFVybCkge1xyXG4gICAgICAgIGlmIChjYW52YXNCYWNrZ3JvdW5kVXJsID09PSB2b2lkIDApIHsgY2FudmFzQmFja2dyb3VuZFVybCA9IGNhbnZhc0JHVXJsOyB9XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyhjb250YWluZXIsIGNhbnZhc09wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbnZhc0JhY2tncm91bmQgPSBsb2FkSW1hZ2UoY2FudmFzQmFja2dyb3VuZFVybCk7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLnpvbWJpZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmFkZFpvbWJpZVNldCgpO1xyXG4gICAgICAgIHRoaXMudGltZXJab21iaWVTZXQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5hZGRab21iaWVTZXQuYmluZCh0aGlzKSwgMTAwMCAqIDUpO1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IHtcclxuICAgICAgICAgICAgem9tYmllS2lsbGVkOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvdW50ZG93biA9IG5ldyBDb3VudGRvd24oNTkpO1xyXG4gICAgICAgIHRoaXMuY291bnRkb3duLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBab21iaWVsYW5kLmlzQ29sbGlzaW9uQmV0d2Vlbk9iamVjdHMgPSBmdW5jdGlvbiAoZ2FtZU9iamVjdDEsIGdhbWVPYmplY3QyKSB7XHJcbiAgICAgICAgcmV0dXJuIChnYW1lT2JqZWN0MS5wb3NpdGlvbi54ICsgZ2FtZU9iamVjdDEuc2l6ZS53aWR0aCA+PSBnYW1lT2JqZWN0Mi5wb3NpdGlvbi54ICYmXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QxLnBvc2l0aW9uLnggPD0gZ2FtZU9iamVjdDIucG9zaXRpb24ueCArIGdhbWVPYmplY3QyLnNpemUud2lkdGggJiZcclxuICAgICAgICAgICAgZ2FtZU9iamVjdDEucG9zaXRpb24ueSArIGdhbWVPYmplY3QxLnNpemUuaGVpZ2h0ID49IGdhbWVPYmplY3QyLnBvc2l0aW9uLnkgJiZcclxuICAgICAgICAgICAgZ2FtZU9iamVjdDEucG9zaXRpb24ueSA8PSBnYW1lT2JqZWN0Mi5wb3NpdGlvbi55ICsgZ2FtZU9iamVjdDIuc2l6ZS5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIFpvbWJpZWxhbmQucHJvdG90eXBlLmNyZWF0ZUNhbnZhcyA9IGZ1bmN0aW9uIChjb250YWluZXIsIF9hKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaWQnLCAnem9tYmllbGFuZCcpO1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5hZGRab21iaWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9tYmllTGlzdC5wdXNoKG5ldyBab21iaWUoZ2V0UmFuZG9tWm9tYmllKCksIGdldFJhbmRvbVBvc2l0aW9uWm9tYmllKHRoaXMucGxheWVyLnBvc2l0aW9uLCB0aGlzLmNhbnZhcykpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgWm9tYmllbGFuZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5TdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZW5kZXIodGhpcy5jdHgpO1xyXG4gICAgICAgICAgICB0aGlzLnpvbWJpZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoem9tYmllKSB7XHJcbiAgICAgICAgICAgICAgICB6b21iaWUucmVuZGVyKF90aGlzLmN0eCwgX3RoaXMucGxheWVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uRGV0ZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0luZm8oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRkb3duLmVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXN1bHQoeyB3aW5uZXI6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5jbGVhckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgWm9tYmllbGFuZC5wcm90b3R5cGUuc2V0Q2FudmFzQmFja2dyb3VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGF0dGVybiA9IHRoaXMuY3R4LmNyZWF0ZVBhdHRlcm4odGhpcy5jYW52YXNCYWNrZ3JvdW5kLCAncmVwZWF0Jyk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gcGF0dGVybjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5zZXRSZXN1bHQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgd2lubmVyID0gX2Eud2lubmVyO1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJZb3UgLSBcIiArICh3aW5uZXIgPyAnd2luJyA6ICdsb3N0JykgKyBcIiFcIjtcclxuICAgICAgICB2aWV3UmVzdWx0KG1lc3NhZ2UsIHRoaXMucmVzdGFydC5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlN0b3A7XHJcbiAgICAgICAgdGhpcy5jb3VudGRvd24uc3RvcCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lclpvbWJpZVNldCk7XHJcbiAgICB9O1xyXG4gICAgWm9tYmllbGFuZC5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5TdGFydDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jYW52YXMpO1xyXG4gICAgICAgIHRoaXMuem9tYmllTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWRkWm9tYmllU2V0KCk7XHJcbiAgICAgICAgdGhpcy50aW1lclpvbWJpZVNldCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLmFkZFpvbWJpZVNldC5iaW5kKHRoaXMpLCAxMDAwICogNSk7XHJcbiAgICAgICAgdGhpcy5pbmZvID0ge1xyXG4gICAgICAgICAgICB6b21iaWVLaWxsZWQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY291bnRkb3duID0gbmV3IENvdW50ZG93big1OSk7XHJcbiAgICAgICAgdGhpcy5jb3VudGRvd24uc3RhcnQoKTtcclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5kcmF3SW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdzdGF0dXMtYmFyJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAyNTUsIDI1NSwgLjgpJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkNvdW50ZG93bjogXCIgKyB0aGlzLmNvdW50ZG93bi5yZW1haW5zLCA4LCAyMCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJLaWxsZWQ6IFwiICsgdGhpcy5pbmZvLnpvbWJpZUtpbGxlZCwgOCwgMzYpO1xyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5jb2xsaXNpb25EZXRlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb2xsaXNpb25EZXRlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLmJ1bGxldENvbGxpc2lvbkRldGVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuem9tYmllQ29sbGlzaW9uRGV0ZWN0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgWm9tYmllbGFuZC5wcm90b3R5cGUucGxheWVyQ29sbGlzaW9uRGV0ZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb2xsaXNpb25QbGF5ZXJXaXRoQ2FudmFzID0gdGhpcy5pc0NvbGxpc2lvbldpdGhDYW52YXModGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5iZWhhdmlvciA9PSBCZWhhdmlvci5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaXNpb25QbGF5ZXJXaXRoQ2FudmFzID09IENvbGxpc2lvbldpdGhDYW52YXMuWCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb24ueCA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMucGxheWVyLnBvc2l0aW9uLngsIDApLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucGxheWVyLnNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbGxpc2lvblBsYXllcldpdGhDYW52YXMgPT0gQ29sbGlzaW9uV2l0aENhbnZhcy5ZKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvbi55ID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy5wbGF5ZXIucG9zaXRpb24ueSwgMCksIHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMucGxheWVyLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5idWxsZXRDb2xsaXNpb25EZXRlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnBsYXllci5idWxsZXRMaXN0ID0gdGhpcy5wbGF5ZXIuYnVsbGV0TGlzdC5maWx0ZXIoZnVuY3Rpb24gKGJ1bGxldCkgeyByZXR1cm4gX3RoaXMuaXNDb2xsaXNpb25XaXRoQ2FudmFzKGJ1bGxldCkgPT0gQ29sbGlzaW9uV2l0aENhbnZhcy5Ob25lOyB9KTtcclxuICAgICAgICB2YXIgYnVsbGV0SW5kZXggPSAtMSwgem9tYmllSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLnBsYXllci5idWxsZXRMaXN0LmZvckVhY2goZnVuY3Rpb24gKGJ1bGxldCwgYnVsbGV0SSkge1xyXG4gICAgICAgICAgICBfdGhpcy56b21iaWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKHpvbWJpZSwgem9tYmllSSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFpvbWJpZWxhbmQuaXNDb2xsaXNpb25CZXR3ZWVuT2JqZWN0cyhidWxsZXQsIHpvbWJpZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXRJbmRleCA9IGJ1bGxldEk7XHJcbiAgICAgICAgICAgICAgICAgICAgem9tYmllSW5kZXggPSB6b21iaWVJO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoYnVsbGV0SW5kZXggIT0gLTEgJiYgem9tYmllSW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvLnpvbWJpZUtpbGxlZCsrO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5idWxsZXRMaXN0LnNwbGljZShidWxsZXRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuem9tYmllTGlzdC5zcGxpY2Uoem9tYmllSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS56b21iaWVDb2xsaXNpb25EZXRlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnpvbWJpZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoem9tYmllKSB7XHJcbiAgICAgICAgICAgIGlmIChab21iaWVsYW5kLmlzQ29sbGlzaW9uQmV0d2Vlbk9iamVjdHMoX3RoaXMucGxheWVyLCB6b21iaWUpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5oaWdobGlnaHRPYmplY3Qoem9tYmllKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJlc3VsdCh7IHdpbm5lcjogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBab21iaWVsYW5kLnByb3RvdHlwZS5pc0NvbGxpc2lvbldpdGhDYW52YXMgPSBmdW5jdGlvbiAoZ2FtZU9iamVjdCkge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LnBvc2l0aW9uLnggPCAwIHx8IGdhbWVPYmplY3QucG9zaXRpb24ueCArIGdhbWVPYmplY3Quc2l6ZS53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb2xsaXNpb25XaXRoQ2FudmFzLlg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdhbWVPYmplY3QucG9zaXRpb24ueSA8IDAgfHwgZ2FtZU9iamVjdC5wb3NpdGlvbi55ICsgZ2FtZU9iamVjdC5zaXplLmhlaWdodCA+IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29sbGlzaW9uV2l0aENhbnZhcy5ZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIENvbGxpc2lvbldpdGhDYW52YXMuTm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgWm9tYmllbGFuZC5wcm90b3R5cGUuaGlnaGxpZ2h0T2JqZWN0ID0gZnVuY3Rpb24gKGdhbWVPYmplY3QpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBnYW1lT2JqZWN0LnBvc2l0aW9uLCBzaXplID0gZ2FtZU9iamVjdC5zaXplO1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDAsIDAsIC41KSc7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gWm9tYmllbGFuZDtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgWm9tYmllbGFuZDtcclxuO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjg0NDA5NjY2MTkwZWM5ZTVkNzAxNmEwZGNhM2FhMzUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNiODQwMTNlNWI4Y2VjYTY1M2FkMDQ5OGQyYThjYmFlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0MDU1Mjg3Mzk2MTY5OWJiMTE2NjVlNDY1ZGYwZjVkYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGQyYjM0YTE4MmRlZmNkZjc0N2Q1ZjBmMGM0MjljYWUucG5nXCI7IiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4uL2hlbHBlcnMvaW1hZ2UuaGVscGVyJztcclxuaW1wb3J0IGJ1bGxldEltYWdlVXJsIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYnVsbGV0LnBuZyc7XHJcbmltcG9ydCBUcmFqZWN0b3J5IGZyb20gJy4uL3NlcnZpY2VzL3RyYWplY3Rvcnkuc2VydmljZSc7XHJcbnZhciBCdWxsZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQnVsbGV0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnVsbGV0KHBvc2l0aW9uTW92ZW1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmJ1bGxldEltYWdlID0gbG9hZEltYWdlKGJ1bGxldEltYWdlVXJsKTtcclxuICAgICAgICBfdGhpcy5zaXplID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogX3RoaXMuYnVsbGV0SW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogX3RoaXMuYnVsbGV0SW1hZ2UuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5wb3NpdGlvbk1vdmVtZW50ID0gX3RoaXMuY29ycmVjdFBvc2l0aW9uTW92ZW1lbnQocG9zaXRpb25Nb3ZlbWVudCk7XHJcbiAgICAgICAgX3RoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uTW92ZW1lbnQuc3RhcnQueCxcclxuICAgICAgICAgICAgeTogcG9zaXRpb25Nb3ZlbWVudC5zdGFydC55XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5tb3ZlbWVudFRyYWplY3RvcnkgPSBUcmFqZWN0b3J5LmNhbGN1bGF0ZUh5cG90ZW51c2UoX3RoaXMucG9zaXRpb25Nb3ZlbWVudC5zdGFydCwgX3RoaXMucG9zaXRpb25Nb3ZlbWVudC5lbmQpO1xyXG4gICAgICAgIF90aGlzLnZlbG9jaXR5ID0gODtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBCdWxsZXQucHJvdG90eXBlLmNvcnJlY3RQb3NpdGlvbk1vdmVtZW50ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gX2Euc3RhcnQsIGVuZCA9IF9hLmVuZDtcclxuICAgICAgICB2YXIgYnVsbGV0Q2VudGVyRW5kID0ge1xyXG4gICAgICAgICAgICB4OiBlbmQueCAtIHRoaXMuc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHk6IGVuZC55IC0gdGhpcy5zaXplLmhlaWdodCAvIDJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgZW5kOiBidWxsZXRDZW50ZXJFbmRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIEJ1bGxldC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfTtcclxuICAgIEJ1bGxldC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYnVsbGV0SW1hZ2UsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgIH07XHJcbiAgICBCdWxsZXQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb3ZlbWVudFRyYWplY3RvcnksIHN0ZXAgPSBfYS5zdGVwLCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHN0ZXAueCAqIHRoaXMudmVsb2NpdHkgKiBkaXJlY3Rpb24ueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gc3RlcC55ICogdGhpcy52ZWxvY2l0eSAqIGRpcmVjdGlvbi55O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCdWxsZXQ7XHJcbn0oR2FtZU9iamVjdCkpO1xyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXQ7XHJcbiIsInZhciBHYW1lT2JqZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZU9iamVjdChwb3NpdGlvbiwgc2l6ZSkge1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdm9pZCAwKSB7IHBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07IH1cclxuICAgICAgICBpZiAoc2l6ZSA9PT0gdm9pZCAwKSB7IHNpemUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTsgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG4gICAgR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0UG9zaXRpb25DZW50ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLmhlaWdodCAvIDJcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lT2JqZWN0O1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0O1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi4vR2FtZU9iamVjdCc7XHJcbmV4cG9ydCB2YXIgQmVoYXZpb3I7XHJcbihmdW5jdGlvbiAoQmVoYXZpb3IpIHtcclxuICAgIEJlaGF2aW9yW0JlaGF2aW9yW1wiU3RvcFwiXSA9IDBdID0gXCJTdG9wXCI7XHJcbiAgICBCZWhhdmlvcltCZWhhdmlvcltcIk1vdmVcIl0gPSAxXSA9IFwiTW92ZVwiO1xyXG59KShCZWhhdmlvciB8fCAoQmVoYXZpb3IgPSB7fSkpO1xyXG47XHJcbnZhciBQZXJzb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGVyc29uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGVyc29uKGJlaGF2aW9yLCBwb3NpdGlvbiwgdmVsb2NpdHksIHNpemUpIHtcclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09IHZvaWQgMCkgeyBiZWhhdmlvciA9IEJlaGF2aW9yLlN0b3A7IH1cclxuICAgICAgICBpZiAodmVsb2NpdHkgPT09IHZvaWQgMCkgeyB2ZWxvY2l0eSA9IDA7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwb3NpdGlvbiwgc2l6ZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5iZWhhdmlvciA9IGJlaGF2aW9yO1xyXG4gICAgICAgIF90aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBlcnNvbjtcclxufShHYW1lT2JqZWN0KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjtcclxuO1xyXG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IFBlcnNvbiwgeyBCZWhhdmlvciB9IGZyb20gJy4vUGVyc29uJztcclxuaW1wb3J0IFBsYXllclNwcml0ZSBmcm9tICcuLi8uLi9zcHJpdGVzL3BsYXllci5zcHJpdGUnO1xyXG5pbXBvcnQgcGxheWVyU3ByaXRlVXJsIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL3BsYXllci5wbmcnO1xyXG5pbXBvcnQgQnVsbGV0IGZyb20gJy4uL0J1bGxldCc7XHJcbjtcclxuZXhwb3J0IHZhciBEaXJlY3Rpb25QbGF5ZXI7XHJcbihmdW5jdGlvbiAoRGlyZWN0aW9uUGxheWVyKSB7XHJcbiAgICBEaXJlY3Rpb25QbGF5ZXJbRGlyZWN0aW9uUGxheWVyW1wiVXBcIl0gPSAwXSA9IFwiVXBcIjtcclxuICAgIERpcmVjdGlvblBsYXllcltEaXJlY3Rpb25QbGF5ZXJbXCJMZWZ0XCJdID0gMV0gPSBcIkxlZnRcIjtcclxuICAgIERpcmVjdGlvblBsYXllcltEaXJlY3Rpb25QbGF5ZXJbXCJEb3duXCJdID0gMl0gPSBcIkRvd25cIjtcclxuICAgIERpcmVjdGlvblBsYXllcltEaXJlY3Rpb25QbGF5ZXJbXCJSaWdodFwiXSA9IDNdID0gXCJSaWdodFwiO1xyXG59KShEaXJlY3Rpb25QbGF5ZXIgfHwgKERpcmVjdGlvblBsYXllciA9IHt9KSk7XHJcbjtcclxudmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQbGF5ZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQbGF5ZXIoY2FudmFzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zcHJpdGUgPSBuZXcgUGxheWVyU3ByaXRlKHBsYXllclNwcml0ZVVybCk7XHJcbiAgICAgICAgX3RoaXMuc2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IF90aGlzLnNwcml0ZS51bml0LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IF90aGlzLnNwcml0ZS51bml0LmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgUGVyc29uLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICBfdGhpcy52ZWxvY2l0eSA9IDQ7XHJcbiAgICAgICAgX3RoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IChQZXJzb24uY2FudmFzLndpZHRoIC0gX3RoaXMuc3ByaXRlLnVuaXQud2lkdGgpIC8gMixcclxuICAgICAgICAgICAgeTogKFBlcnNvbi5jYW52YXMuaGVpZ2h0IC0gX3RoaXMuc3ByaXRlLnVuaXQuaGVpZ2h0KSAvIDIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5kaXJlY3Rpb24gPSBEaXJlY3Rpb25QbGF5ZXIuRG93bjtcclxuICAgICAgICBfdGhpcy5rZXlib2FyZCA9IHtcclxuICAgICAgICAgICAgcHJlc3NlZDogbnVsbCxcclxuICAgICAgICAgICAgdmFsaWRLZXlzOiBbJ0Fycm93VXAnLCAnQXJyb3dSaWdodCcsICdBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0J11cclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLm1vdXNlID0ge1xyXG4gICAgICAgICAgICBwcmVzc2VkOiBudWxsLFxyXG4gICAgICAgICAgICB2YWxpZEtleXM6IFswXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuYnVsbGV0TGlzdCA9IFtdO1xyXG4gICAgICAgIF90aGlzLnNldFVzZXJFdmVudHMoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5kcmF3KGN0eCwgdGhpcy5wb3NpdGlvbiwgdGhpcy5kaXJlY3Rpb24sIHRoaXMuYmVoYXZpb3IpO1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChidWxsZXQpIHtcclxuICAgICAgICAgICAgYnVsbGV0LnJlbmRlcihjdHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5wcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVoYXZpb3IgPSBCZWhhdmlvci5Nb3ZlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMua2V5Ym9hcmQucHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBEaXJlY3Rpb25QbGF5ZXIuVXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IC10aGlzLnZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBEaXJlY3Rpb25QbGF5ZXIuUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9uUGxheWVyLkRvd247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9uUGxheWVyLkxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IC10aGlzLnZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuc2V0VXNlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgUGVyc29uLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICAgIFBlcnNvbi5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUua2V5RG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBjb2RlID0gZS5jb2RlO1xyXG4gICAgICAgIGlmICh0aGlzLmtleWJvYXJkLnZhbGlkS2V5cy5pbmNsdWRlcyhjb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkLnByZXNzZWQgPSBjb2RlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmtleVVwSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZC5wcmVzc2VkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yID0gQmVoYXZpb3IuU3RvcDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBidXR0b24gPSBlLmJ1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5tb3VzZS52YWxpZEtleXMuaW5jbHVkZXMoYnV0dG9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlLnByZXNzZWQgPSBidXR0b247XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKHRoaXMuZ2V0TW91c2VQb3NpdGlvbk9uQ2FudmFzKGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3VzZVVwSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZS5wcmVzc2VkID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmdldE1vdXNlUG9zaXRpb25PbkNhbnZhcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gUGxheWVyLmNhbnZhcy5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICB5OiBlLmNsaWVudFkgLSBQbGF5ZXIuY2FudmFzLm9mZnNldFRvcFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5hdHRhY2sgPSBmdW5jdGlvbiAobW91c2VQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KG1vdXNlUG9zaXRpb24pO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuY3JlYXRlQnVsbGV0ID0gZnVuY3Rpb24gKG1vdXNlUG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgYnVsbGV0ID0gbmV3IEJ1bGxldCh7IHN0YXJ0OiB0aGlzLmdldFBvc2l0aW9uQ2VudGVyKCksIGVuZDogbW91c2VQb3NpdGlvbiB9KTtcclxuICAgICAgICB0aGlzLmJ1bGxldExpc3QucHVzaChidWxsZXQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXI7XHJcbn0oUGVyc29uKSk7XHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCBQZXJzb24sIHsgQmVoYXZpb3IgfSBmcm9tICcuL1BlcnNvbic7XHJcbmltcG9ydCBab21iaWVTcHJpdGUgZnJvbSAnLi4vLi4vc3ByaXRlcy96b21iaWUuc3ByaXRlJztcclxuaW1wb3J0IHpvbWJpZVNwcml0ZVVybCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy96b21iaWUucG5nJztcclxuaW1wb3J0IFRyYWplY3RvcnkgZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhamVjdG9yeS5zZXJ2aWNlJztcclxuZXhwb3J0IHZhciBEaXJlY3Rpb25ab21iaWU7XHJcbihmdW5jdGlvbiAoRGlyZWN0aW9uWm9tYmllKSB7XHJcbiAgICBEaXJlY3Rpb25ab21iaWVbRGlyZWN0aW9uWm9tYmllW1wiRG93blwiXSA9IDBdID0gXCJEb3duXCI7XHJcbiAgICBEaXJlY3Rpb25ab21iaWVbRGlyZWN0aW9uWm9tYmllW1wiTGVmdFwiXSA9IDFdID0gXCJMZWZ0XCI7XHJcbiAgICBEaXJlY3Rpb25ab21iaWVbRGlyZWN0aW9uWm9tYmllW1wiUmlnaHRcIl0gPSAyXSA9IFwiUmlnaHRcIjtcclxuICAgIERpcmVjdGlvblpvbWJpZVtEaXJlY3Rpb25ab21iaWVbXCJVcFwiXSA9IDNdID0gXCJVcFwiO1xyXG59KShEaXJlY3Rpb25ab21iaWUgfHwgKERpcmVjdGlvblpvbWJpZSA9IHt9KSk7XHJcbjtcclxudmFyIFpvbWJpZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhab21iaWUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBab21iaWUoc3ByaXRlU3RhcnQsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zcHJpdGUgPSBuZXcgWm9tYmllU3ByaXRlKHpvbWJpZVNwcml0ZVVybCwgc3ByaXRlU3RhcnQpO1xyXG4gICAgICAgIF90aGlzLnNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBfdGhpcy5zcHJpdGUudW5pdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBfdGhpcy5zcHJpdGUudW5pdC5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICBfdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcy52ZWxvY2l0eSA9IDE7XHJcbiAgICAgICAgX3RoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9uWm9tYmllLkRvd247XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgWm9tYmllLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4LCBnYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuZHJhdyhjdHgsIHRoaXMucG9zaXRpb24sIHRoaXMuZGlyZWN0aW9uLCB0aGlzLmJlaGF2aW9yKTtcclxuICAgICAgICB0aGlzLm1vdmVUbyhnYW1lT2JqZWN0KTtcclxuICAgIH07XHJcbiAgICBab21iaWUucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IEJlaGF2aW9yLk1vdmU7XHJcbiAgICAgICAgdmFyIF9hID0gVHJhamVjdG9yeS5jYWxjdWxhdGVIeXBvdGVudXNlKHRoaXMuZ2V0UG9zaXRpb25DZW50ZXIoKSwgZ2FtZU9iamVjdC5nZXRQb3NpdGlvbkNlbnRlcigpKSwgc3RlcCA9IF9hLnN0ZXAsIGRpcmVjdGlvbiA9IF9hLmRpcmVjdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbkNlbnRlcigpLnkgPj0gZ2FtZU9iamVjdC5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb25DZW50ZXIoKS55ICsgdGhpcy5zaXplLmhlaWdodCA8PSBnYW1lT2JqZWN0LnBvc2l0aW9uLnkgKyBnYW1lT2JqZWN0LnNpemUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLnggPT0gLTEgPyBEaXJlY3Rpb25ab21iaWUuTGVmdCA6IERpcmVjdGlvblpvbWJpZS5SaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLnkgPT0gLTEgPyBEaXJlY3Rpb25ab21iaWUuVXAgOiBEaXJlY3Rpb25ab21iaWUuRG93bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHN0ZXAueCAqIHRoaXMudmVsb2NpdHkgKiBkaXJlY3Rpb24ueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gc3RlcC55ICogdGhpcy52ZWxvY2l0eSAqIGRpcmVjdGlvbi55O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBab21iaWU7XHJcbn0oUGVyc29uKSk7XHJcbmV4cG9ydCBkZWZhdWx0IFpvbWJpZTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZShpbWFnZVNyYywgY2FsbGJhY2spIHtcclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBpbWFnZVNyYztcclxuICAgIGNhbGxiYWNrICYmIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgIHJldHVybiBpbWc7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xyXG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnRJbmNsdXNpdmUgfSBmcm9tICcuL3JhbmRvbS5oZWxwZXInO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tWm9tYmllKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBnZXRSYW5kb21JbnRJbmNsdXNpdmUoMCwgMyksXHJcbiAgICAgICAgeTogZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDAsIDEpXHJcbiAgICB9O1xyXG59XHJcbjtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVBvc2l0aW9uWm9tYmllKHBsYXllclBvc2l0aW9uLCBjYW52YXMsIHNhZmVab25lKSB7XHJcbiAgICBpZiAoc2FmZVpvbmUgPT09IHZvaWQgMCkgeyBzYWZlWm9uZSA9IDIwMDsgfVxyXG4gICAgdmFyIHBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICB2YXIgcmFuZG9tTGVmdFBvc2l0aW9uWCA9IGdldFJhbmRvbUludEluY2x1c2l2ZSgwLCBwbGF5ZXJQb3NpdGlvbi54IC0gc2FmZVpvbmUpO1xyXG4gICAgdmFyIHJhbmRvbVJpZ2h0UG9zaXRpb25YID0gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKHBsYXllclBvc2l0aW9uLnggKyBzYWZlWm9uZSwgY2FudmFzLndpZHRoKTtcclxuICAgIGlmIChwbGF5ZXJQb3NpdGlvbi54IC0gc2FmZVpvbmUgPD0gMCkge1xyXG4gICAgICAgIHBvc2l0aW9uLnggPSByYW5kb21SaWdodFBvc2l0aW9uWDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBsYXllclBvc2l0aW9uLnggKyBzYWZlWm9uZSA+PSBjYW52YXMud2lkdGgpIHtcclxuICAgICAgICBwb3NpdGlvbi54ID0gcmFuZG9tTGVmdFBvc2l0aW9uWDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciByYW5kb20gPSBnZXRSYW5kb21JbnRJbmNsdXNpdmUoMCwgMSk7XHJcbiAgICAgICAgaWYgKHJhbmRvbSkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbi54ID0gcmFuZG9tUmlnaHRQb3NpdGlvblg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbi54ID0gcmFuZG9tTGVmdFBvc2l0aW9uWDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcmFuZG9tTGVmdFBvc2l0aW9uWSA9IGdldFJhbmRvbUludEluY2x1c2l2ZSgwLCBwbGF5ZXJQb3NpdGlvbi55IC0gc2FmZVpvbmUpO1xyXG4gICAgdmFyIHJhbmRvbVJpZ2h0UG9zaXRpb25ZID0gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKHBsYXllclBvc2l0aW9uLnkgKyBzYWZlWm9uZSwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAocGxheWVyUG9zaXRpb24ueSAtIHNhZmVab25lIDw9IDApIHtcclxuICAgICAgICBwb3NpdGlvbi55ID0gcmFuZG9tUmlnaHRQb3NpdGlvblk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwbGF5ZXJQb3NpdGlvbi55ICsgc2FmZVpvbmUgPj0gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgIHBvc2l0aW9uLnkgPSByYW5kb21MZWZ0UG9zaXRpb25ZO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IGdldFJhbmRvbUludEluY2x1c2l2ZSgwLCAxKTtcclxuICAgICAgICBpZiAocmFuZG9tKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSByYW5kb21SaWdodFBvc2l0aW9uWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSByYW5kb21MZWZ0UG9zaXRpb25ZO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxufVxyXG47XHJcbiIsImltcG9ydCBab21iaWVsYW5kIGZyb20gJy4vQXBwJztcclxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyB2aWV3SW50cm8gfSBmcm9tICcuL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcclxudmFyIHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxudmFyIHpvbWJpZWxhbmQgPSBuZXcgWm9tYmllbGFuZChyb290RWxlbSwgeyB3aWR0aDogOTYwLCBoZWlnaHQ6IDQ4MCB9KTtcclxudmlld0ludHJvKHpvbWJpZWxhbmQucmVuZGVyLmJpbmQoem9tYmllbGFuZCkpO1xyXG4iLCJ2YXIgQ291bnRkb3duID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ291bnRkb3duKHRvdGFsU2Vjb25kcykge1xyXG4gICAgICAgIHRoaXMudG90YWxTZWNvbmRzID0gdG90YWxTZWNvbmRzO1xyXG4gICAgICAgIHRoaXMudGltZXJJZCA9IC0xO1xyXG4gICAgICAgIHRoaXMucmVtYWlucyA9ICcwMDowMCc7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIENvdW50ZG93bi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnRpbWVySWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMudG90YWxTZWNvbmRzLS0pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH07XHJcbiAgICBDb3VudGRvd24ucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSAwLCBzZWNvbmRzID0gMDtcclxuICAgICAgICBzZWNvbmRzID0gdGhpcy50b3RhbFNlY29uZHMgJSA2MDtcclxuICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnRvdGFsU2Vjb25kcyAvIDYwKSAlIDYwO1xyXG4gICAgICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xyXG4gICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xyXG4gICAgICAgIHRoaXMucmVtYWlucyA9IG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XHJcbiAgICB9O1xyXG4gICAgQ291bnRkb3duLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ291bnRkb3duO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3RpZmljYXRpb24uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0ICcuL25vdGlmaWNhdGlvbi5jc3MnO1xyXG5leHBvcnQgZnVuY3Rpb24gdmlld0ludHJvKGNhbGxiYWNrKSB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiAnWm9tYmllbGFuZCcsXHJcbiAgICAgICAgaHRtbDogXCJcXG4gICAgICA8dGFibGU+XFxuICAgICAgICA8Y2FwdGlvbj5Db250cm9sczwvY2FwdGlvbj5cXG4gICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxcbiAgICAgICAgICAgIDx0aD5LZXk8L3RoPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90aGVhZD5cXG4gICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0ZD5VcDwvdGQ+XFxuICAgICAgICAgICAgPHRkPiZ1YXJyOzwvdGQ+XFxuICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGQ+UmlnaHQ8L3RkPlxcbiAgICAgICAgICAgIDx0ZD4mcmFycjs8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRkPkRvd248L3RkPlxcbiAgICAgICAgICAgIDx0ZD4mZGFycjs8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRkPkxlZnQ8L3RkPlxcbiAgICAgICAgICAgIDx0ZD4mbGFycjs8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRkPkZpcmU8L3RkPlxcbiAgICAgICAgICAgIDx0ZD5sZWZ0ICYjMTI4NDMyOyBidXR0b248L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90Ym9keT5cXG4gICAgICA8L3RhYmxlPlxcbiAgICAgIDxwIGNsYXNzPSdzbG9nYW4nPmZpZ2h0IG9yIGRpZTwvcD5cXG4gICAgXCIsXHJcbiAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgIGFsbG93RXNjYXBlS2V5OiBmYWxzZVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB2aWV3UmVzdWx0KG1lc3NhZ2UsIGNhbGxiYWNrKSB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXHJcbiAgICAgICAgYWxsb3dFc2NhcGVLZXk6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnUmVzdGFydCcsXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwidmFyIFRyYWplY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmFqZWN0b3J5KCkge1xyXG4gICAgfVxyXG4gICAgVHJhamVjdG9yeS5jYWxjdWxhdGVIeXBvdGVudXNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiBzdGFydC54IDwgZW5kLnggPyAxIDogLTEsXHJcbiAgICAgICAgICAgIHk6IHN0YXJ0LnkgPCBlbmQueSA/IDEgOiAtMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGRlbHRhRGlzdGFuY2UgPSB7XHJcbiAgICAgICAgICAgIHg6IE1hdGguYWJzKHN0YXJ0LnggLSBlbmQueCksXHJcbiAgICAgICAgICAgIHk6IE1hdGguYWJzKHN0YXJ0LnkgLSBlbmQueSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzdGVwID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgaWYgKGRlbHRhRGlzdGFuY2UueCA+IGRlbHRhRGlzdGFuY2UueSkge1xyXG4gICAgICAgICAgICBzdGVwLnggPSAxO1xyXG4gICAgICAgICAgICBzdGVwLnkgPSBkZWx0YURpc3RhbmNlLnkgLyBkZWx0YURpc3RhbmNlLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdGVwLnkgPSAxO1xyXG4gICAgICAgICAgICBzdGVwLnggPSBkZWx0YURpc3RhbmNlLnggLyBkZWx0YURpc3RhbmNlLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHN0ZXA6IHN0ZXAsIGRpcmVjdGlvbjogZGlyZWN0aW9uIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYWplY3Rvcnk7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IFRyYWplY3Rvcnk7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgU3ByaXRlIGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQmVoYXZpb3IgfSBmcm9tICcuLi9nYW1lT2JqZWN0cy9wZXJzb25zL1BlcnNvbic7XHJcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4uL2hlbHBlcnMvaW1hZ2UuaGVscGVyJztcclxudmFyIFBsYXllclNwcml0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQbGF5ZXJTcHJpdGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQbGF5ZXJTcHJpdGUoc3ByaXRlSW1hZ2VVcmwpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB1bml0ID0geyB3aWR0aDogNjQsIGhlaWdodDogNjQsIHJvd3M6IDQsIGNvbHVtbnM6IDkgfTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHVuaXQpIHx8IHRoaXM7XHJcbiAgICAgICAgUGxheWVyU3ByaXRlLnNwcml0ZUltYWdlID0gbG9hZEltYWdlKHNwcml0ZUltYWdlVXJsKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBQbGF5ZXJTcHJpdGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBiZWhhdmlvcikge1xyXG4gICAgICAgIHZhciBzeCA9IGJlaGF2aW9yID09IEJlaGF2aW9yLlN0b3AgPyAwIDogKHRoaXMuZnJhbWUuY29sdW1uICsgMSkgKiB0aGlzLnVuaXQud2lkdGg7XHJcbiAgICAgICAgdmFyIHN5ID0gZGlyZWN0aW9uICogdGhpcy51bml0LmhlaWdodDtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFBsYXllclNwcml0ZS5zcHJpdGVJbWFnZSwgc3gsIHN5LCB0aGlzLnVuaXQud2lkdGgsIHRoaXMudW5pdC5oZWlnaHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHRoaXMudW5pdC53aWR0aCwgdGhpcy51bml0LmhlaWdodCk7XHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09IEJlaGF2aW9yLk1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFBsYXllclNwcml0ZS5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoKyt0aGlzLmZyYW1lLmNvdW50ZXIgPT0gdGhpcy5mcmFtZS5kZWxheSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZS5jb2x1bW4gPCB0aGlzLnVuaXQuY29sdW1ucyAtIDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUuY29sdW1uKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lLmNvbHVtbiA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mcmFtZS5jb3VudGVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXllclNwcml0ZTtcclxufShTcHJpdGUpKTtcclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyU3ByaXRlO1xyXG4iLCJ2YXIgU3ByaXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3ByaXRlKHVuaXQsIGZyYW1lKSB7XHJcbiAgICAgICAgaWYgKGZyYW1lID09PSB2b2lkIDApIHsgZnJhbWUgPSB7IHJvdzogMCwgY29sdW1uOiAwLCBkZWxheTogNCwgY291bnRlcjogMCB9OyB9XHJcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcclxuICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3ByaXRlO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBTcHJpdGU7XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgU3ByaXRlIGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQmVoYXZpb3IgfSBmcm9tICcuLi9nYW1lT2JqZWN0cy9wZXJzb25zL1BlcnNvbic7XHJcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4uL2hlbHBlcnMvaW1hZ2UuaGVscGVyJztcclxudmFyIFpvbWJpZVNwcml0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhab21iaWVTcHJpdGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBab21iaWVTcHJpdGUoc3ByaXRlSW1hZ2VVcmwsIHNwcml0ZVN0YXJ0KSB7XHJcbiAgICAgICAgaWYgKHNwcml0ZVN0YXJ0ID09PSB2b2lkIDApIHsgc3ByaXRlU3RhcnQgPSB7IHg6IDAsIHk6IDAgfTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVuaXQgPSB7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiwgcm93czogNCwgY29sdW1uczogMyB9O1xyXG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdW5pdCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zdGFydCA9IHNwcml0ZVN0YXJ0O1xyXG4gICAgICAgIFpvbWJpZVNwcml0ZS5zcHJpdGVJbWFnZSA9IGxvYWRJbWFnZShzcHJpdGVJbWFnZVVybCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgWm9tYmllU3ByaXRlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCwgcG9zaXRpb24sIGRpcmVjdGlvbiwgYmVoYXZpb3IpIHtcclxuICAgICAgICB0aGlzLmZyYW1lLnJvdyA9IGRpcmVjdGlvbjtcclxuICAgICAgICB2YXIgc3ggPSAodGhpcy5zdGFydC54ICogdGhpcy51bml0LmNvbHVtbnMgKyB0aGlzLmZyYW1lLmNvbHVtbikgKiB0aGlzLnVuaXQud2lkdGg7XHJcbiAgICAgICAgdmFyIHN5ID0gKHRoaXMuc3RhcnQueSAqIHRoaXMudW5pdC5yb3dzICsgdGhpcy5mcmFtZS5yb3cpICogdGhpcy51bml0LmhlaWdodDtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFpvbWJpZVNwcml0ZS5zcHJpdGVJbWFnZSwgc3gsIHN5LCB0aGlzLnVuaXQud2lkdGgsIHRoaXMudW5pdC5oZWlnaHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHRoaXMudW5pdC53aWR0aCwgdGhpcy51bml0LmhlaWdodCk7XHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09IEJlaGF2aW9yLk1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFpvbWJpZVNwcml0ZS5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoKyt0aGlzLmZyYW1lLmNvdW50ZXIgPT0gdGhpcy5mcmFtZS5kZWxheSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZS5jb2x1bW4gPCB0aGlzLnVuaXQuY29sdW1ucyAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUuY29sdW1uKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lLmNvbHVtbiA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mcmFtZS5jb3VudGVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFpvbWJpZVNwcml0ZTtcclxufShTcHJpdGUpKTtcclxuZXhwb3J0IGRlZmF1bHQgWm9tYmllU3ByaXRlO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=