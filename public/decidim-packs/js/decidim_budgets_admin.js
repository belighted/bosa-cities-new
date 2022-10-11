/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-budgets-0.27.0/app/packs/src/decidim/budgets/admin/projects.js":
/*!************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-budgets-0.27.0/app/packs/src/decidim/budgets/admin/projects.js ***!
  \************************************************************************************************************************************/
/***/ (function() {

/* eslint-disable no-invalid-this */
$(function () {
  var selectedResourcesCount = function selectedResourcesCount() {
    return $(".table-list .js-check-all-resources:checked").length;
  };
  var selectedResourcesNotPublishedAnswerCount = function selectedResourcesNotPublishedAnswerCount() {
    return $(".table-list [data-published-state=false] .js-check-all-resources:checked").length;
  };
  var selectedResourcesCountUpdate = function selectedResourcesCountUpdate() {
    var selectedResources = selectedResourcesCount();
    var selectedResourcesNotPublishedAnswer = selectedResourcesNotPublishedAnswerCount();
    if (selectedResources === 0) {
      $("#js-selected-resources-count").text("");
    } else {
      $("#js-selected-resources-count").text(selectedResources);
    }
    if (selectedResources >= 2) {
      $('button[data-action="merge-resources"]').parent().show();
    } else {
      $('button[data-action="merge-resources"]').parent().hide();
    }
    if (selectedResourcesNotPublishedAnswer > 0) {
      $('button[data-action="publish-answers"]').parent().show();
      $("#js-form-publish-answers-number").text(selectedResourcesNotPublishedAnswer);
    } else {
      $('button[data-action="publish-answers"]').parent().hide();
    }
  };
  var showBulkActionsButton = function showBulkActionsButton() {
    if (selectedResourcesCount() > 0) {
      $("#js-bulk-actions-button").removeClass("hide");
    }
  };
  var hideBulkActionsButton = function hideBulkActionsButton() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (selectedResourcesCount() === 0 || force === true) {
      $("#js-bulk-actions-button").addClass("hide");
      $("#js-bulk-actions-dropdown").removeClass("is-open");
    }
  };
  var showOtherActionsButtons = function showOtherActionsButtons() {
    $("#js-other-actions-wrapper").removeClass("hide");
  };
  var hideOtherActionsButtons = function hideOtherActionsButtons() {
    $("#js-other-actions-wrapper").addClass("hide");
  };
  var hideBulkActionForms = function hideBulkActionForms() {
    $(".js-bulk-action-form").addClass("hide");
  };
  if ($("#js-bulk-actions-wrapper").length === 0) {
    return;
  }

  // Expose functions to make them available in .js.erb templates
  window.hideBulkActionForms = hideBulkActionForms;
  window.hideBulkActionsButton = hideBulkActionsButton;
  window.showOtherActionsButtons = showOtherActionsButtons;
  window.selectedResourcesCountUpdate = selectedResourcesCountUpdate;
  if ($(".js-bulk-action-form").length) {
    hideBulkActionForms();
    $("#js-bulk-actions-button").addClass("hide");
    $("#js-bulk-actions-dropdown ul li button").on("click", function (event) {
      event.preventDefault();
      var action = $(event.target).data("action");
      if (action) {
        $("#js-form-".concat(action)).on("submit", function () {
          $(".layout-content > .callout-wrapper").html("");
        });
        $("#js-".concat(action, "-actions")).removeClass("hide");
        hideBulkActionsButton(true);
        hideOtherActionsButtons();
      }
    });

    // select all checkboxes
    $(".js-check-all").on("change", function () {
      $(".js-check-all-resources").prop("checked", $(this).prop("checked"));
      if ($(this).prop("checked")) {
        $(".js-check-all-resources").closest("tr").addClass("selected");
        showBulkActionsButton();
      } else {
        $(".js-check-all-resources").closest("tr").removeClass("selected");
        hideBulkActionsButton();
      }
      selectedResourcesCountUpdate();
    });

    // resource checkbox change
    $(".table-list").on("change", ".js-check-all-resources", function () {
      var resourceId = $(this).val();
      var checked = $(this).prop("checked");

      // uncheck "select all", if one of the listed checkbox item is unchecked
      if ($(this).prop("checked") === false) {
        $(".js-check-all").prop("checked", false);
      }
      // check "select all" if all checkbox resources are checked
      if ($(".js-check-all-resources:checked").length === $(".js-check-all-resources").length) {
        $(".js-check-all").prop("checked", true);
        showBulkActionsButton();
      }
      if ($(this).prop("checked")) {
        showBulkActionsButton();
        $(this).closest("tr").addClass("selected");
      } else {
        hideBulkActionsButton();
        $(this).closest("tr").removeClass("selected");
      }
      if ($(".js-check-all-resources:checked").length === 0) {
        hideBulkActionsButton();
      }
      $(".js-bulk-action-form").find(".js-resource-id-".concat(resourceId)).prop("checked", checked);
      selectedResourcesCountUpdate();
    });
    $(".js-cancel-bulk-action").on("click", function () {
      hideBulkActionForms();
      showBulkActionsButton();
      showOtherActionsButtons();
    });
  }
});
/* eslint-enable no-invalid-this */

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-budgets-0.27.0/app/packs/entrypoints/decidim_budgets_admin.js ***!
  \***********************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_budgets_admin_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/budgets/admin/projects */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-budgets-0.27.0/app/packs/src/decidim/budgets/admin/projects.js");
/* harmony import */ var src_decidim_budgets_admin_projects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_budgets_admin_projects__WEBPACK_IMPORTED_MODULE_0__);

}();
/******/ })()
;
//# sourceMappingURL=decidim_budgets_admin.js.map