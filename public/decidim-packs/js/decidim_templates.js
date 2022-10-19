/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/images sync recursive ^\\.\\/.*$":
/*!**********************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/images/ sync ^\.\/.*$ ***!
  \**********************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./decidim/templates/decidim_templates.svg": "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/images/decidim/templates/decidim_templates.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/datalist_select.js":
/*!**************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/datalist_select.js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "datalistSelect": function() { return /* binding */ datalistSelect; }
/* harmony export */ });
/**
// Function adds feature to datalist that you can have different id and label.
// Used with datalist_select_helper.rb#datalist_select
 * @param {HTMLElement} target - dataselect wrapper
 * @param {Function} callback - the function to be executed after a successful selection.
 * @returns {Void} - Returns nothing.
 */

var datalistSelect = function datalistSelect(target, callback) {
  if (!target) {
    return;
  }
  var input = target.querySelector("input[type='hidden'");
  var textInput = target.querySelector("input[type='text']");
  var items = target.querySelector("datalist").children;
  var selectValue = function selectValue(selected) {
    for (var idx = 0; idx < items.length; idx += 1) {
      if (items[idx].innerHTML === selected) {
        var id = items[idx].dataset.value;
        input.value = id;
        if (callback) {
          return callback(id);
        }
        return true;
      }
    }
    return false;
  };
  textInput.addEventListener("input", function () {
    var selected = textInput.value;
    selectValue(selected);
  });
};

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/src/decidim/templates/admin/choose_template.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/src/decidim/templates/admin/choose_template.js ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_datalist_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/datalist_select */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/datalist_select.js");

$(function () {
  var wrapper = document.querySelector("#choose-template");
  if (!wrapper) {
    return;
  }
  var preview = function preview(id) {
    var options = wrapper.dataset;
    var previewURL = options.previewurl;
    if (!previewURL) {
      return;
    }
    var params = new URLSearchParams({
      id: id
    });
    fetch("".concat(previewURL, "?").concat(params.toString()), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = data;
      document.getElementsByTagName("head")[0].appendChild(script);
    })["catch"](function (error) {
      console.error(error); // eslint-disable-line no-console
    });
  };

  (0,src_decidim_datalist_select__WEBPACK_IMPORTED_MODULE_0__.datalistSelect)(wrapper, preview);
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/entrypoints/decidim_templates.scss":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/entrypoints/decidim_templates.scss ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/images/decidim/templates/decidim_templates.svg":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/images/decidim/templates/decidim_templates.svg ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/decidim_templates-15e5583a7f2834cd644e.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/decidim-packs/";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/entrypoints/decidim_templates.js ***!
  \*********************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_templates_admin_choose_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/templates/admin/choose_template */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/src/decidim/templates/admin/choose_template.js");
/* harmony import */ var entrypoints_decidim_templates_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entrypoints/decidim_templates.scss */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/entrypoints/decidim_templates.scss");



// Images
__webpack_require__("../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-templates-0.27.0/app/packs/images sync recursive ^\\.\\/.*$");
}();
/******/ })()
;
//# sourceMappingURL=decidim_templates.js.map