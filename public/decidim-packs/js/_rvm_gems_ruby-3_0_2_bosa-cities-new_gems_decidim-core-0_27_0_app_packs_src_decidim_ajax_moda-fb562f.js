(self["webpackChunkbosa_cities_new"] = self["webpackChunkbosa_cities_new"] || []).push([["_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_app_packs_src_decidim_ajax_moda-fb562f"],{

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/ajax_modals.js":
/*!**********************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/ajax_modals.js ***!
  \**********************************************************************************************************************/
/***/ (function() {

$(function () {
  $(document).on("click", "a[data-open-url],button[data-open-url]", function (event) {
    event.preventDefault();
    var link = event.currentTarget;
    var $modal = $("#".concat(link.dataset.open));
    $modal.html("<div class='loading-spinner'></div>");
    $.ajax({
      type: "get",
      url: link.dataset.openUrl,
      success: function success(html) {
        var $html = $(html);
        $modal.html($html);
        $html.foundation();
      },
      error: function error(request, status, _error) {
        $modal.html("<h3>".concat(status, "</h3><p>").concat(_error, "</p>"));
      }
    });
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/check_boxes_tree.js":
/*!***************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/check_boxes_tree.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CheckBoxesTree; }
/* harmony export */ });
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
/**
 * CheckBoxesTree component.
 */
var CheckBoxesTree = /*#__PURE__*/function () {
  function CheckBoxesTree() {
    var _this = this;
    _classCallCheck(this, CheckBoxesTree);
    this.checkboxesTree = document.querySelectorAll("[data-checkboxes-tree]");
    if (!this.checkboxesTree) {
      return;
    }
    this.globalChecks = document.querySelectorAll("[data-global-checkbox] input");
    this.globalChecks.forEach(function (global) {
      if (global.value === "") {
        global.classList.add("ignore-filter");
      }
    });
    this.checkGlobalCheck();

    // Event listeners
    this.checkboxesTree.forEach(function (input) {
      return input.addEventListener("click", function (event) {
        return _this.checkTheCheckBoxes(event.target);
      });
    });
    document.querySelectorAll("[data-children-checkbox] input").forEach(function (input) {
      input.addEventListener("change", function (event) {
        return _this.checkTheCheckParent(event.target);
      });
    });

    // Review parent checkboxes on initial load
    document.querySelectorAll("[data-children-checkbox] input").forEach(function (input) {
      _this.checkTheCheckParent(input);
    });
  }

  /**
   * Set checkboxes as checked if included in given values
   * @public
   * @param {Array} checkboxes - array of checkboxs to check
   * @param {Array} values - values of checkboxes that should be checked
   * @returns {Void} - Returns nothing.
   */
  _createClass(CheckBoxesTree, [{
    key: "updateChecked",
    value: function updateChecked(checkboxes, values) {
      var _this2 = this;
      checkboxes.each(function (index, checkbox) {
        if (checkbox.value === "" && values.length === 1 || checkbox.value !== "" && values.includes(checkbox.value)) {
          checkbox.checked = true;
          _this2.checkTheCheckBoxes(checkbox);
          _this2.checkTheCheckParent(checkbox);
        }
      });
    }

    /**
     * Set the container form(s) for the component, to disable ignored filters before submitting them
     * @public
     * @param {query} theForm - form or forms where the component will be used
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "setContainerForm",
    value: function setContainerForm(theForm) {
      theForm.on("submit ajax:before", function () {
        theForm.find(".ignore-filters input, input.ignore-filter").each(function (idx, elem) {
          elem.disabled = true;
        });
      });
      theForm.on("ajax:send", function () {
        theForm.find(".ignore-filters input, input.ignore-filter").each(function (idx, elem) {
          elem.disabled = false;
        });
      });
    }

    /**
     * Handles the click action on any checkbox.
     * @private
     * @param {Input} target - the input that has been checked
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "checkTheCheckBoxes",
    value: function checkTheCheckBoxes(target) {
      // Quis custodiet ipsos custodes?
      var targetChecks = target.dataset.checkboxesTree;
      var checkStatus = target.checked;
      var allChecks = document.querySelectorAll("#".concat(targetChecks, " input[type='checkbox']"));
      allChecks.forEach(function (input) {
        input.checked = checkStatus;
        input.indeterminate = false;
        input.classList.add("ignore-filter");
      });
    }

    /**
     * Update global checkboxes state when the current selection changes
     * @private
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "checkGlobalCheck",
    value: function checkGlobalCheck() {
      this.globalChecks.forEach(function (global) {
        var checksContext = global.dataset.checkboxesTree;
        var totalInputs = document.querySelectorAll("#".concat(checksContext, " input[type='checkbox']"));
        var checkedInputs = document.querySelectorAll("#".concat(checksContext, " input[type='checkbox']:checked"));
        var indeterminateInputs = Array.from(totalInputs).filter(function (checkbox) {
          return checkbox.indeterminate;
        });
        if (checkedInputs.length === 0 && indeterminateInputs.length === 0) {
          global.checked = false;
          global.indeterminate = false;
        } else if (checkedInputs.length === totalInputs.length && indeterminateInputs.length === 0) {
          global.checked = true;
          global.indeterminate = false;
        } else {
          global.checked = true;
          global.indeterminate = true;
        }
        totalInputs.forEach(function (input) {
          if (global.indeterminate && !input.indeterminate) {
            input.classList.remove("ignore-filter");
          } else {
            input.classList.add("ignore-filter");
          }
          var subfilters = input.parentNode.parentNode.nextElementSibling;
          if (subfilters && subfilters.classList.contains("filters__subfilters")) {
            if (input.indeterminate) {
              subfilters.classList.remove("ignore-filters");
            } else {
              subfilters.classList.add("ignore-filters");
            }
          }
        });
      });
    }

    /**
     * Update children checkboxes state when the current selection changes
     * @private
     * @param {Input} input - the checkbox to check its parent
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "checkTheCheckParent",
    value: function checkTheCheckParent(input) {
      var checkBoxContext = $(input).parents(".filters__subfilters").attr("id");
      if (!checkBoxContext) {
        this.checkGlobalCheck();
        return;
      }
      var parentCheck = document.querySelector("[data-checkboxes-tree=".concat(checkBoxContext, "]"));
      var totalCheckSiblings = document.querySelectorAll("#".concat(checkBoxContext, " > div > [data-children-checkbox] > input, #").concat(checkBoxContext, " > [data-children-checkbox] > input"));
      var checkedSiblings = document.querySelectorAll("#".concat(checkBoxContext, " > div > [data-children-checkbox] > input:checked, #").concat(checkBoxContext, " > [data-children-checkbox] > input:checked"));
      var indeterminateSiblings = Array.from(totalCheckSiblings).filter(function (checkbox) {
        return checkbox.indeterminate;
      });
      if (checkedSiblings.length === 0 && indeterminateSiblings.length === 0) {
        parentCheck.checked = false;
        parentCheck.indeterminate = false;
      } else if (checkedSiblings.length === totalCheckSiblings.length && indeterminateSiblings.length === 0) {
        parentCheck.checked = true;
        parentCheck.indeterminate = false;
      } else {
        parentCheck.checked = true;
        parentCheck.indeterminate = true;
      }
      totalCheckSiblings.forEach(function (sibling) {
        if (parent.indeterminate && !sibling.indeterminate) {
          sibling.classList.remove("ignore-filter");
        } else {
          sibling.classList.add("ignore-filter");
        }
        var subfilters = sibling.parentNode.parentNode.nextElementSibling;
        if (subfilters && subfilters.classList.contains("filters__subfilters")) {
          if (sibling.indeterminate) {
            subfilters.classList.remove("ignore-filters");
          } else {
            subfilters.classList.add("ignore-filters");
          }
        }
      });
      this.checkTheCheckParent(parentCheck);
    }
  }]);
  return CheckBoxesTree;
}();


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/data_picker.js":
/*!**********************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/data_picker.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DataPicker; }
/* harmony export */ });
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var DataPicker = /*#__PURE__*/function () {
  function DataPicker(pickers) {
    var _this = this;
    _classCallCheck(this, DataPicker);
    this.modal = this._createModalContainer();
    this.modal.appendTo($("body"));
    this.current = null;
    pickers.each(function (_index, picker) {
      _this.activate(picker);
    });
  }
  _createClass(DataPicker, [{
    key: "activate",
    value: function activate(picker) {
      var _this2 = this;
      var $picker = $(picker);
      this._setCurrentPicker($picker, null);
      var input = "hidden",
        name = this.current.name,
        values = this.current.values;
      if (this.current.multiple) {
        name += "[]";
      }
      $("div", values).each(function (_index2, div) {
        var value = $("a", div).data("picker-value");
        $(div).prepend($("<input type=\"".concat(input, "\" checked name=\"").concat(name, "\" value=\"").concat(value, "\"/>")));
      });
      $picker.on("click", "a", function (event) {
        event.preventDefault();
        if ($picker.hasClass("disabled")) {
          return;
        }
        var isMultiPicker = $picker.hasClass("picker-multiple");
        if ($(_this2._targetFromEvent(event)).hasClass("picker-prompt") || !isMultiPicker) {
          _this2._openPicker($picker, _this2._targetFromEvent(event));
        } else if (_this2._targetFromEvent(event).tagName === "A") {
          _this2._removeValue($picker, _this2._targetFromEvent(event).parentNode);
        } else {
          _this2._removeValue($picker, _this2._targetFromEvent(event));
        }
      });
      $picker.on("click", "input", function (event) {
        _this2._removeValue($picker, _this2._targetFromEvent(event));
      });
      if (this.current.autosort) {
        this._sort();
      }
    }
  }, {
    key: "enabled",
    value: function enabled(picker, value) {
      $(picker).toggleClass("disabled", !value);
      $("input", picker).attr("disabled", !value);
    }
  }, {
    key: "clear",
    value: function clear(picker) {
      $(".picker-values", picker).html("");
    }
  }, {
    key: "save",
    value: function save(picker) {
      return $(".picker-values div:has(input:checked)", picker).map(function (_index, div) {
        var $link = $("a", div);
        return {
          value: $("input", div).val(),
          text: $link.text(),
          url: $link.attr("href")
        };
      }).get();
    }
  }, {
    key: "load",
    value: function load(picker, savedData) {
      var _this3 = this;
      this._setCurrentPicker($(picker), null);
      $.each(savedData, function (_index, data) {
        _this3._choose(data, {
          interactive: false,
          modify: false
        });
      });
      if (this.current.autosort) {
        this._sort();
      }
    }
  }, {
    key: "_createModalContainer",
    value: function _createModalContainer() {
      // Add a header because we are referencing the title element with
      // `aria-labelledby`. If the title doesn't exist, the "labelled by"
      // reference is incorrect.
      var headerHtml = '<div class="scope-picker picker-header"><h6 id="data_picker-title" class="h2"></h6></div>';
      return $("<div class=\"small reveal\" id=\"data_picker-modal\" aria-hidden=\"true\" aria-live=\"assertive\" role=\"dialog\" aria-labelledby=\"data_picker-title\" data-reveal data-multiple-opened=\"true\">\n             <div class=\"data_picker-modal-content\">".concat(headerHtml, "</div>\n             <button class=\"close-button\" data-close type=\"button\" data-reveal-id=\"data_picker-modal\"><span aria-hidden=\"true\">&times;</span></button>\n             </div>"));
    }
  }, {
    key: "_openPicker",
    value: function _openPicker($picker, target) {
      this._setCurrentPicker($picker, target);
      this._load($("a", target).attr("href"));
    }
  }, {
    key: "_setCurrentPicker",
    value: function _setCurrentPicker($picker, target) {
      var $target = false;
      if (target && !$(target).hasClass("picker-prompt")) {
        $target = $(target);
      }
      this.current = {
        picker: $picker,
        name: $picker.data("picker-name"),
        values: $picker.find(".picker-values"),
        multiple: $picker.hasClass("picker-multiple"),
        autosort: $picker.hasClass("picker-multiple") && $picker.hasClass("picker-autosort"),
        target: $target
      };
    }
  }, {
    key: "_load",
    value: function _load(url) {
      var _this4 = this;
      $.ajax(url).done(function (resp) {
        var modalContent = $(".data_picker-modal-content", _this4.modal);
        modalContent.html(resp);
        _this4._handleLinks(modalContent);
        _this4._handleCheckboxes(modalContent);
        _this4.modal.foundation("open");
      });
    }
  }, {
    key: "_handleLinks",
    value: function _handleLinks(content) {
      var _this5 = this;
      $("a", content).each(function (_index, link) {
        var $link = $(link);
        $link.click(function (event) {
          event.preventDefault();
          if ($link.data("close") || $link.data("close") === "") {
            return;
          }
          var chooseUrl = $link.attr("href");
          if (chooseUrl) {
            if (typeof $link.data("picker-choose") === "undefined") {
              _this5._load(chooseUrl);
            } else {
              _this5._choose({
                url: chooseUrl,
                value: $link.data("picker-value") || "",
                text: $link.data("picker-text") || ""
              });
            }
          }
        });
      });
    }
  }, {
    key: "_handleCheckboxes",
    value: function _handleCheckboxes(content) {
      var _this6 = this;
      $("input[type=checkbox][data-picker-choose]", content).each(function (_index, checkbox) {
        var $checkbox = $(checkbox);
        checkbox.checked = _this6._targetFromValue($checkbox.val()) !== null;
      }).change(function (event) {
        var $checkbox = $(event.target);
        if (event.target.checked) {
          _this6._choose({
            url: $checkbox.data("picker-url"),
            value: $checkbox.val() || "",
            text: $checkbox.data("picker-text") || ""
          }, {
            modify: false,
            close: false
          });
        } else {
          _this6._removeValue(_this6.current.picker, _this6._targetFromValue($checkbox.val()));
        }
      });
    }
  }, {
    key: "_choose",
    value: function _choose(data) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = Object.assign({
        interactive: true,
        modify: true,
        close: true
      }, opts);
      var dataText = this._escape(data.text);
      var choosenOption = null;
      if (!this.current.target && options.modify) {
        this.current.target = this._targetFromValue(data.value);
      }

      // Add or update value appearance
      if (this.current.target && options.modify) {
        var link = $("a", this.current.target);
        link.data("picker-value", data.value);
        link.attr("href", data.url);
        choosenOption = this.current.target;
        if (this.current.multiple) {
          link.html("&times;&nbsp;".concat(dataText));
        } else {
          link.text(dataText);
        }
      } else {
        var input = "hidden",
          name = this.current.name;
        if (this.current.multiple) {
          name += "[]";
          choosenOption = $("<div><input type=\"".concat(input, "\" checked name=\"").concat(name, "\"/><a href=\"").concat(data.url, "\" data-picker-value=\"").concat(data.value, "\" class=\"label primary\">&times;&nbsp;").concat(dataText, "</a></div>"));
        } else {
          choosenOption = $("<div><input type=\"".concat(input, "\" checked name=\"").concat(name, "\"/><a href=\"").concat(data.url, "\" data-picker-value=\"").concat(data.value, "\">").concat(dataText, "</a></div>"));
        }
        choosenOption.appendTo(this.current.values);
        if (!this.current.target) {
          this.current.target = choosenOption;
        }
      }

      // Set input value
      var $input = $("input", choosenOption);
      $input.attr("value", data.value);
      if (this.current.autosort) {
        this._sort();
      }
      if (options.interactive) {
        // Raise changed event
        $input.trigger("change");
        this._removeErrors();
        if (options.close) {
          this._close();
        }
      }
    }
  }, {
    key: "_sort",
    value: function _sort() {
      var values = $(".picker-values", this.current.picker);
      values.children().sort(function (item1, item2) {
        return $("input", item1).val() - $("input", item2).val();
      }).detach().appendTo(values);
    }
  }, {
    key: "_close",
    value: function _close() {
      // Close modal and unset target element
      this.modal.foundation("close");
      this.current.target = null;
    }
  }, {
    key: "_removeValue",
    value: function _removeValue($picker, target) {
      var _this7 = this;
      if (target) {
        this._setCurrentPicker($picker, target);
        // Fadeout (with time) doesn't work in system tests
        var fadeoutTime = 500;
        if (navigator && navigator.webdriver) {
          fadeoutTime = 0;
        }
        this.current.target.fadeOut(fadeoutTime, function () {
          _this7.current.target.remove();
          _this7.current.target = null;
        });
      }
    }
  }, {
    key: "_removeErrors",
    value: function _removeErrors() {
      var parent = this.current.picker.parent();
      $(".is-invalid-input", parent).removeClass("is-invalid-input");
      $(".is-invalid-label", parent).removeClass("is-invalid-label");
      $(".form-error.is-visible", parent).removeClass("is-visible");
    }
  }, {
    key: "_escape",
    value: function _escape(str) {
      return str.replace(/[\u00A0-\u9999<>&]/gim, function (_char) {
        return "&#".concat(_char.charCodeAt(0), ";");
      });
    }
  }, {
    key: "_targetFromEvent",
    value: function _targetFromEvent(event) {
      return event.target.parentNode;
    }
  }, {
    key: "_targetFromValue",
    value: function _targetFromValue(value) {
      return $("[data-picker-value=".concat(value, "]"), this.current.picker).parent()[0] || null;
    }
  }]);
  return DataPicker;
}();


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/delayed.js":
/*!******************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/delayed.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ delayed; }
/* harmony export */ });
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds.
 * @param {Object} context - the context for the called function.
 * @param {Function} func - the function to be executed.
 * @param {int} wait - number of milliseconds to wait before executing the function.
 * @private
 * @returns {Void} - Returns nothing.
 */
function delayed(context, func, wait) {
  var timeout = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      timeout = null;
      Reflect.apply(func, context, args);
    }, wait);
  };
}

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/form_datepicker.js":
/*!**************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/form_datepicker.js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formDatePicker; }
/* harmony export */ });
/* eslint-disable require-jsdoc */

function formDatePicker() {
  $("[data-datepicker]").each(function (_index, node) {
    var language = $("html").attr("lang") || "en";
    var initialDate = $(node).data("startdate") || "";
    var pickTime = $(node).data("timepicker") === "";
    var languageProps = $(node).fdatepicker.dates[language] && $(node).fdatepicker.dates[language].format;
    var format = $(node).data("date-format") || languageProps || "mm/dd/yyyy";
    $(node).fdatepicker({
      format: format,
      initialDate: initialDate,
      language: language,
      pickTime: pickTime,
      disableDblClickSelection: true,
      leftArrow: "<<",
      rightArrow: ">>"
    });
  });
}

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/form_filter.js":
/*!**********************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/form_filter.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormFilterComponent; }
/* harmony export */ });
/* harmony import */ var src_decidim_delayed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/delayed */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/delayed.js");
/* harmony import */ var src_decidim_check_boxes_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/check_boxes_tree */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/check_boxes_tree.js");
/* harmony import */ var src_decidim_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/history */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/history.js");
/* harmony import */ var src_decidim_data_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/data_picker */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/data_picker.js");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
/* eslint-disable no-div-regex, no-useless-escape, no-param-reassign, id-length */
/* eslint max-lines: ["error", {"max": 350, "skipBlankLines": true}] */

/**
 * A plain Javascript component that handles the form filter.
 * @class
 * @augments Component
 */





var FormFilterComponent = /*#__PURE__*/function () {
  function FormFilterComponent($form) {
    _classCallCheck(this, FormFilterComponent);
    this.$form = $form;
    this.id = this.$form.attr("id") || this._getUID();
    this.mounted = false;
    this.changeEvents = true;
    this.theCheckBoxesTree = new src_decidim_check_boxes_tree__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.theDataPicker = window.theDataPicker || new src_decidim_data_picker__WEBPACK_IMPORTED_MODULE_3__["default"]($(".data-picker"));
    this._updateInitialState();
    this._onFormChange = (0,src_decidim_delayed__WEBPACK_IMPORTED_MODULE_0__["default"])(this, this._onFormChange.bind(this));
    this._onPopState = this._onPopState.bind(this);
    if (window.Decidim.PopStateHandler) {
      this.popStateSubmiter = false;
    } else {
      this.popStateSubmiter = true;
      window.Decidim.PopStateHandler = this.id;
    }
  }

  /**
   * Handles the logic for unmounting the component
   * @public
   * @returns {Void} - Returns nothing
   */
  _createClass(FormFilterComponent, [{
    key: "unmountComponent",
    value: function unmountComponent() {
      if (this.mounted) {
        this.mounted = false;
        this.$form.off("change", "input, select", this._onFormChange);
        (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.unregisterCallback)("filters-".concat(this.id));
      }
    }

    /**
     * Handles the logic for mounting the component
     * @public
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "mountComponent",
    value: function mountComponent() {
      var _this = this;
      if (this.$form.length > 0 && !this.mounted) {
        this.mounted = true;
        var queue = 0;
        var contentContainer = $(this.$form.closest(".filters").parent().find(".skip").attr("href"));
        if (contentContainer.length === 0 && this.$form.data("remoteFill")) {
          contentContainer = this.$form.data("remoteFill");
        }
        this.$form.on("change", "input:not([data-disable-dynamic-change]), select:not([data-disable-dynamic-change])", this._onFormChange);
        this.currentFormRequest = null;
        this.$form.on("ajax:beforeSend", function (e) {
          if (_this.currentFormRequest) {
            _this.currentFormRequest.abort();
          }
          _this.currentFormRequest = e.originalEvent.detail[0];
          queue += 1;
          if (queue > 0 && contentContainer.length > 0 && !contentContainer.hasClass("spinner-container")) {
            contentContainer.addClass("spinner-container");
          }
        });
        this.$form.on("ajax:success", function () {
          queue -= 1;
          if (queue <= 0 && contentContainer.length > 0) {
            contentContainer.removeClass("spinner-container");
          }
        });
        this.$form.on("ajax:error", function () {
          queue -= 1;
          if (queue <= 0 && contentContainer.length > 0) {
            contentContainer.removeClass("spinner-container");
          }
          _this.$form.find(".spinner-container").addClass("hide");
        });
        this.theCheckBoxesTree.setContainerForm(this.$form);
        (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.registerCallback)("filters-".concat(this.id), function (currentState) {
          _this._onPopState(currentState);
        });
      }
    }

    /**
     * Sets path in the browser history with the initial filters state, to allow to restoring it when using browser history.
     * @private
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_updateInitialState",
    value: function _updateInitialState() {
      var _this$_currentStateAn = this._currentStateAndPath(),
        _this$_currentStateAn2 = _slicedToArray(_this$_currentStateAn, 2),
        initialPath = _this$_currentStateAn2[0],
        initialState = _this$_currentStateAn2[1];
      initialState._path = initialPath;
      (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.replaceState)(null, initialState);
    }

    /**
     * Finds the current location.
     * @param {boolean} withHost - include the host part in the returned location
     * @private
     * @returns {String} - Returns the current location.
     */
  }, {
    key: "_getLocation",
    value: function _getLocation() {
      var withHost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var currentState = (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.state)();
      var path = "";
      if (currentState && currentState._path) {
        path = currentState._path;
      } else {
        path = window.location.pathname + window.location.search + window.location.hash;
      }
      if (withHost) {
        return window.location.origin + path;
      }
      return path;
    }

    /**
     * Parse current location and get filter values.
     * @private
     * @returns {Object} - An object where a key correspond to a filter field
     *                     and the value is the current value for the filter.
     */
  }, {
    key: "_parseLocationFilterValues",
    value: function _parseLocationFilterValues() {
      // Every location param is constructed like this: filter[key]=value
      var regexpResult = decodeURIComponent(this._getLocation()).match(/filter\[([^\]]*)\](?:\[\])?=([^&]*)/g);

      // The RegExp g flag returns null or an array of coincidences. It doesn't return the match groups
      if (regexpResult) {
        var filterParams = regexpResult.reduce(function (acc, result) {
          var _result$match = result.match(/filter\[([^\]]*)\](\[\])?=([^&]*)/),
            _result$match2 = _slicedToArray(_result$match, 4),
            key = _result$match2[1],
            array = _result$match2[2],
            value = _result$match2[3];
          if (array) {
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(value);
          } else {
            acc[key] = value;
          }
          return acc;
        }, {});
        return filterParams;
      }
      return null;
    }

    /**
     * Parse current location and get the current order.
     * @private
     * @returns {string} - The current order
     */
  }, {
    key: "_parseLocationOrderValue",
    value: function _parseLocationOrderValue() {
      var url = this._getLocation();
      var match = url.match(/order=([^&]*)/);
      var $orderMenu = this.$form.find(".order-by .menu");
      var order = $orderMenu.find(".menu a:first").data("order");
      if (match) {
        order = match[1];
      }
      return order;
    }

    /**
     * Clears the form to start with a clean state.
     * @private
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_clearForm",
    value: function _clearForm() {
      var _this2 = this;
      this.$form.find("input[type=checkbox]").each(function (index, element) {
        element.checked = element.indeterminate = false;
      });
      this.$form.find("input[type=radio]").attr("checked", false);
      this.$form.find(".data-picker").each(function (_index, picker) {
        _this2.theDataPicker.clear(picker);
      });

      // This ensure the form is reset in a valid state where a fieldset of
      // radio buttons has the first selected.
      this.$form.find("fieldset input[type=radio]:first").each(function () {
        // I need the this to iterate a jQuery collection
        $(this)[0].checked = true; // eslint-disable-line no-invalid-this
      });
    }

    /**
     * Handles the logic when going back to a previous state in the filter form.
     * @private
     * @param {Object} currentState - state stored along with location URL
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_onPopState",
    value: function _onPopState(currentState) {
      var _this3 = this;
      this.changeEvents = false;
      this._clearForm();
      var filterParams = this._parseLocationFilterValues();
      var currentOrder = this._parseLocationOrderValue();
      this.$form.find("input.order_filter").val(currentOrder);
      if (filterParams) {
        var fieldIds = Object.keys(filterParams);

        // Iterate the filter params and set the correct form values
        fieldIds.forEach(function (fieldName) {
          var value = filterParams[fieldName];
          if (Array.isArray(value)) {
            var checkboxes = _this3.$form.find("input[type=checkbox][name=\"filter[".concat(fieldName, "][]\"]"));
            _this3.theCheckBoxesTree.updateChecked(checkboxes, value);
          } else {
            _this3.$form.find("*[name=\"filter[".concat(fieldName, "]\"]")).each(function (index, element) {
              switch (element.type) {
                case "hidden":
                  break;
                case "radio":
                case "checkbox":
                  element.checked = value === element.value;
                  break;
                default:
                  element.value = value;
              }
            });
          }
        });
      }

      // Retrieves picker information for selected values (value, text and link) from the state object
      $(".data-picker", this.$form).each(function (_index, picker) {
        var pickerState = currentState[picker.id];
        if (pickerState) {
          _this3.theDataPicker.load(picker, pickerState);
        }
      });

      // Only one instance should submit the form on browser history navigation
      if (this.popStateSubmiter) {
        Rails.fire(this.$form[0], "submit");
      }
      this.changeEvents = true;
    }

    /**
     * Handles the logic to update the current location after a form change event.
     * @private
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_onFormChange",
    value: function _onFormChange() {
      if (!this.changeEvents) {
        return;
      }
      var _this$_currentStateAn3 = this._currentStateAndPath(),
        _this$_currentStateAn4 = _slicedToArray(_this$_currentStateAn3, 2),
        newPath = _this$_currentStateAn4[0],
        newState = _this$_currentStateAn4[1];
      var path = this._getLocation(false);
      if (newPath === path) {
        return;
      }
      Rails.fire(this.$form[0], "submit");
      (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.pushState)(newPath, newState);
      this._saveFilters(newPath);
    }

    /**
     * Calculates the path and the state associated to the filters inputs.
     * @private
     * @returns {Array} - Returns an array with the path and the state for the current filters state.
     */
  }, {
    key: "_currentStateAndPath",
    value: function _currentStateAndPath() {
      var _this4 = this;
      var formAction = this.$form.attr("action");
      var params = this.$form.find(":not(.ignore-filters)").find("select:not(.ignore-filter), input:not(.ignore-filter)").serialize();
      var path = "";
      var currentState = {};
      if (formAction.indexOf("?") < 0) {
        path = "".concat(formAction, "?").concat(params);
      } else {
        path = "".concat(formAction, "&").concat(params);
      }

      // Stores picker information for selected values (value, text and link) in the currentState object
      $(".data-picker", this.$form).each(function (_index, picker) {
        currentState[picker.id] = _this4.theDataPicker.save(picker);
      });
      return [path, currentState];
    }

    /**
     * Generates a unique identifier for the form.
     * @private
     * @returns {String} - Returns a unique identifier
     */
  }, {
    key: "_getUID",
    value: function _getUID() {
      return "filter-form-".concat(new Date().setUTCMilliseconds(), "-").concat(Math.floor(Math.random() * 10000000));
    }

    /**
     * Saves the changed filters on sessionStorage API.
     * @private
     * @param {string} pathWithQueryStrings - path with all the query strings for filter. To be used with backToListLink().
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_saveFilters",
    value: function _saveFilters(pathWithQueryStrings) {
      if (!window.sessionStorage) {
        return;
      }
      var pathName = this.$form.attr("action");
      sessionStorage.setItem("filteredParams", JSON.stringify(_defineProperty({}, pathName, pathWithQueryStrings)));
    }
  }]);
  return FormFilterComponent;
}();


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/foundation-datepicker/js/locales/foundation-datepicker.lb.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/foundation-datepicker/js/locales/foundation-datepicker.lb.js ***!
  \********************************************************************************************************************************************************************/
/***/ (function() {

/**
 * Luxembourgish localisation
 */
;
(function (jQuery) {
  jQuery.fn.fdatepicker.dates.lb = {
    days: ["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg", "Sonndeg"],
    daysShort: ["Son", "Méi", "Dën", "Mët", "Don", "Fre", "Sam", "Son"],
    daysMin: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa", "So"],
    months: ["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthsShort: ["Jan", "Febr", "Mrz", "Abr", "Mee", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"],
    today: "Haut"
  };
})(jQuery);

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/foundation_datepicker_locales.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/foundation_datepicker_locales.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.ar */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.ar.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_ar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_az__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.az */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.az.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_az__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_az__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_bg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.bg */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.bg.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_bg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_bg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.bs */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.bs.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ca__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.ca */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.ca.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ca__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_ca__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_cs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.cs */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.cs.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_cs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_cs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_cy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.cy */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.cy.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_cy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_cy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_da__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.da */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.da.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_da__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_da__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_de__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.de */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.de.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_de__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_de__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_el__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.el */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.el.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_el__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_el__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_en_GB__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.en-GB */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.en-GB.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_en_GB__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_en_GB__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_eo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.eo */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.eo.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_eo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_eo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.es */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.es.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_es__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_es__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_et__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.et */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.et.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_et__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_et__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_eu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.eu */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.eu.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_eu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_eu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.fa */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.fa.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fa__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_fa__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.fi */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.fi.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fi__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_fi__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.fo */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.fo.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fo__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_fo__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fr_CH__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.fr-CH */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.fr-CH.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fr_CH__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_fr_CH__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.fr */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.fr.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_fr__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_fr__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_gl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.gl */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.gl.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_gl__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_gl__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_he__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.he */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.he.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_he__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_he__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_hr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.hr */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.hr.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_hr__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_hr__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_hu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.hu */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.hu.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_hu__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_hu__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_hy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.hy */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.hy.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_hy__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_hy__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_id__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.id */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.id.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_id__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_id__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_is__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.is */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.is.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_is__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_is__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_it_CH__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.it-CH */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.it-CH.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_it_CH__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_it_CH__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_it__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.it */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.it.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_it__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_it__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ja__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.ja */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.ja.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ja__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_ja__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ka__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.ka */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.ka.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ka__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_ka__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_kh__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.kh */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.kh.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_kh__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_kh__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_kk__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.kk */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.kk.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_kk__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_kk__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ko__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.ko */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.ko.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ko__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_ko__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_kr__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.kr */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.kr.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_kr__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_kr__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_lv__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.lv */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.lv.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_lv__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_lv__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_me__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.me */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.me.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_me__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_me__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_mk__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.mk */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.mk.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_mk__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_mk__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_mn__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.mn */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.mn.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_mn__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_mn__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.ms */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.ms.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ms__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_ms__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_nb__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.nb */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.nb.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_nb__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_nb__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_nl_BE__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.nl-BE */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.nl-BE.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_nl_BE__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_nl_BE__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_nl__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.nl */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.nl.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_nl__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_nl__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_no__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.no */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.no.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_no__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_no__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_pl__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.pl */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.pl.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_pl__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_pl__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_pt_br__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.pt-br */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.pt-br.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_pt_br__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_pt_br__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_pt__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.pt */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.pt.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_pt__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_pt__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ro__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.ro */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.ro.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ro__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_ro__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_rs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.rs */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.rs.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_rs__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_rs__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_rs_latin__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.rs-latin */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.rs-latin.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_rs_latin__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_rs_latin__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ru__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.ru */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.ru.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_ru__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_ru__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sk__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.sk */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.sk.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sk__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_sk__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sl__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.sl */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.sl.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sl__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_sl__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sq__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.sq */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.sq.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sq__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_sq__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sr__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.sr */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.sr.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sr__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_sr__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sr_latin__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.sr-latin */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.sr-latin.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sr_latin__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_sr_latin__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sv__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.sv */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.sv.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sv__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_sv__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sw__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.sw */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.sw.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_sw__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_sw__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_th__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.th */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.th.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_th__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_th__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_tr__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.tr */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.tr.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_tr__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_tr__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_uk__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.uk */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.uk.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_uk__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_uk__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_vi__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.vi */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.vi.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_vi__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_vi__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_zh_CN__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.zh-CN */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.zh-CN.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_zh_CN__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_zh_CN__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_zh_TW__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! foundation-datepicker/js/locales/foundation-datepicker.zh-TW */ "./node_modules/foundation-datepicker/js/locales/foundation-datepicker.zh-TW.js");
/* harmony import */ var foundation_datepicker_js_locales_foundation_datepicker_zh_TW__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(foundation_datepicker_js_locales_foundation_datepicker_zh_TW__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var src_decidim_foundation_datepicker_js_locales_foundation_datepicker_lb__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! src/decidim/foundation-datepicker/js/locales/foundation-datepicker.lb */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/foundation-datepicker/js/locales/foundation-datepicker.lb.js");
/* harmony import */ var src_decidim_foundation_datepicker_js_locales_foundation_datepicker_lb__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(src_decidim_foundation_datepicker_js_locales_foundation_datepicker_lb__WEBPACK_IMPORTED_MODULE_64__);


































































/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/gallery.js":
/*!******************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/gallery.js ***!
  \******************************************************************************************************************/
/***/ (function() {

$(function () {
  $(".gallery__container").on("closed.zf.callout", function (event) {
    $(event.target).remove();
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/history.js":
/*!******************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/history.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ registerCallback; },
/* harmony export */   "pushState": function() { return /* binding */ pushState; },
/* harmony export */   "registerCallback": function() { return /* binding */ registerCallback; },
/* harmony export */   "replaceState": function() { return /* binding */ replaceState; },
/* harmony export */   "state": function() { return /* binding */ state; },
/* harmony export */   "unregisterCallback": function() { return /* binding */ unregisterCallback; }
/* harmony export */ });
/* eslint-disable require-jsdoc */
/* eslint-disable no-prototype-builtins, no-restricted-syntax, no-param-reassign */

var callbacks = {};
function registerCallback(callbackId, callback) {
  callbacks[callbackId] = callback;
}
var unregisterCallback = function unregisterCallback(callbackId) {
  callbacks[callbackId] = null;
};
var pushState = function pushState(url) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (window.history) {
    window.history.pushState(state, null, url);
  }
};
var replaceState = function replaceState(url) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (window.history) {
    window.history.replaceState(state, null, url);
  }
};
var state = function state() {
  if (window.history) {
    return window.history.state;
  }
  return null;
};
window.onpopstate = function (event) {
  // Ensure the event is caused by user action
  if (event.isTrusted) {
    for (var callbackId in callbacks) {
      if (callbacks.hasOwnProperty(callbackId)) {
        callbacks[callbackId](event.state);
      }
    }
  }
};


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_character_counter.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_character_counter.js ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputCharacterCounter": function() { return /* binding */ InputCharacterCounter; },
/* harmony export */   "createCharacterCounter": function() { return /* binding */ createCharacterCounter; },
/* harmony export */   "default": function() { return /* binding */ InputCharacterCounter; }
/* harmony export */ });
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
/* eslint max-lines: ["error", {"max": 350, "skipBlankLines": true}] */

var COUNT_KEY = "%count%";
// How often SR announces the message in relation to maximum characters. E.g.
// if max characters is 1000, screen reader announces the remaining characters
// every 100 (= 0.1 * 1000) characters. This will be "floored" to the closest
// 100 if the maximum characters > 100. E.g. if max characters is 5500, the
// threshold is 500 (= Math.floor(550 / 100) * 100). With 100 or less
// characters, this ratio is omitted and the announce threshold is always set to
// 10.
var SR_ANNOUNCE_THRESHOLD_RATIO = 0.1;
// The number of characters left after which every keystroke will be announced.
var SR_ANNOUNCE_EVERY_THRESHOLD = 10;
var DEFAULT_MESSAGES = {
  charactersAtLeast: {
    one: "at least ".concat(COUNT_KEY, " character"),
    other: "at least ".concat(COUNT_KEY, " characters")
  },
  charactersLeft: {
    one: "".concat(COUNT_KEY, " character left"),
    other: "".concat(COUNT_KEY, " characters left")
  }
};
var MESSAGES = DEFAULT_MESSAGES;
var InputCharacterCounter = /*#__PURE__*/function () {
  function InputCharacterCounter(input) {
    var _this = this;
    _classCallCheck(this, InputCharacterCounter);
    this.$input = input;
    this.$target = $(this.$input.data("remaining-characters"));
    this.minCharacters = parseInt(this.$input.attr("minlength"), 10);
    this.maxCharacters = parseInt(this.$input.attr("maxlength"), 10);
    this.describeByCounter = typeof this.$input.attr("aria-describedby") === "undefined";

    // Define the closest length for the input "gaps" defined by the threshold.
    if (this.maxCharacters > 10) {
      if (this.maxCharacters > 100) {
        this.announceThreshold = Math.floor(this.maxCharacters * SR_ANNOUNCE_THRESHOLD_RATIO);
      } else {
        this.announceThreshold = 10;
      }

      // The number of characters left after which every keystroke will be announced.
      this.announceEveryThreshold = SR_ANNOUNCE_EVERY_THRESHOLD;
    } else {
      this.announceThreshold = 1;
      this.announceEveryThreshold = 1;
    }
    var targetId = this.$target.attr("id");
    if (typeof targetId === "undefined") {
      if (this.$input.attr("id") && this.$input.attr("id").length > 0) {
        targetId = "".concat(this.$input.attr("id"), "_characters");
      } else {
        targetId = "characters_".concat(Math.random().toString(36).substr(2, 9));
      }
    }
    if (this.$target.length > 0) {
      this.$target.attr("id", targetId);
    } else {
      this.$target = $("<span id=\"".concat(targetId, "\" class=\"form-input-extra-before\" />"));

      // If input is a hidden for WYSIWYG editor add it at the end
      if (this.$input.parent().is(".editor")) {
        this.$input.parent().after(this.$target);
      }
      // Prefix and suffix columns are wrapped in columns, so put the
      // character counter before that.
      else if (this.$input.parent().is(".columns") && this.$input.parent().parent().is(".row")) {
        this.$input.parent().parent().after(this.$target);
      } else {
        this.$input.after(this.$target);
      }
    }
    if (this.$target.length > 0 && (this.maxCharacters > 0 || this.minCharacters > 0)) {
      // Create the screen reader target element. We don't want to constantly
      // announce every change to screen reader, only occasionally.
      this.$srTarget = $("<span role=\"status\" id=\"".concat(targetId, "_sr\" class=\"show-for-sr remaining-character-count-sr\" />"));
      this.$target.before(this.$srTarget);
      this.$target.attr("aria-hidden", "true");
      this.$userInput = this.$input;

      // In WYSIWYG editors (Quill) we need to find the active editor from the
      // DOM node. Quill has the experimental "find" method that should work
      // fine in this case
      if (Quill && this.$input.parent().is(".editor")) {
        // Wait until the next javascript loop so Quill editors are created
        setTimeout(function () {
          _this.editor = Quill.find(_this.$input.siblings(".editor-container")[0]);
          _this.$userInput = $(_this.editor.root);
          _this.initialize();
        });
      } else {
        this.initialize();
      }
    }
  }
  _createClass(InputCharacterCounter, [{
    key: "initialize",
    value: function initialize() {
      this.updateInputLength();
      this.previousInputLength = this.inputLength;
      this.bindEvents();
      this.setDescribedBy(true);
    }
  }, {
    key: "setDescribedBy",
    value: function setDescribedBy(active) {
      if (!this.describeByCounter) {
        return;
      }
      if (active) {
        this.$userInput.attr("aria-describedby", this.$srTarget.attr("id"));
      } else {
        this.$userInput.removeAttr("aria-describedby");
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;
      if (this.editor) {
        this.editor.on("text-change", function () {
          _this2.handleInput();
        });
      } else {
        this.$userInput.on("input", function () {
          _this2.handleInput();
        });
      }
      this.$userInput.on("keyup", function () {
        _this2.updateStatus();
      });
      this.$userInput.on("focus", function () {
        _this2.updateScreenReaderStatus();
      });
      this.$userInput.on("blur", function () {
        _this2.updateScreenReaderStatus();
        _this2.setDescribedBy(true);
      });
      if (this.$userInput.get(0) !== null) {
        this.$userInput.get(0).addEventListener("emoji.added", function () {
          _this2.updateStatus();
        });
      }
      this.updateStatus();
      this.updateScreenReaderStatus();
    }
  }, {
    key: "getInputLength",
    value: function getInputLength() {
      return this.inputLength;
    }
  }, {
    key: "updateInputLength",
    value: function updateInputLength() {
      this.previousInputLength = this.inputLength;
      if (this.editor) {
        this.inputLength = this.editor.getLength();
      } else {
        this.inputLength = this.$input.val().length;
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput() {
      this.updateInputLength();
      this.checkScreenReaderUpdate();
      // If the input is "described by" the character counter, some screen
      // readers (NVDA) announce the status twice when it is updated. By
      // removing the aria-describedby attribute while the user is typing makes
      // the screen reader announce the status only once.
      this.setDescribedBy(false);
    }

    /**
     * This compares the current inputLength to the previous value and decides
     * whether the user is currently adding or deleting characters from the view.
     *
     * @returns {String} The input direction either "ins" for insert or "del" for
     *   delete.
     */
  }, {
    key: "getInputDirection",
    value: function getInputDirection() {
      if (this.inputLength < this.previousInputLength) {
        return "del";
      }
      return "ins";
    }
  }, {
    key: "getScreenReaderLength",
    value: function getScreenReaderLength() {
      var currentLength = this.getInputLength();
      if (this.maxCharacters < 10) {
        return currentLength;
      } else if (this.maxCharacters - currentLength <= this.announceEveryThreshold) {
        return currentLength;
      }
      var srLength = currentLength - currentLength % this.announceThreshold;

      // Prevent the screen reader telling too many characters left if the user
      // deletes a characters. This can cause confusing experience e.g. when the
      // user is closing the maximum amount of characters, so if the previous
      // announcement was "10 characters left" and the user removes one character,
      // the screen reader would announce "100 characters left" next time (when
      // they actually have only 11 characters left). Similar when they are
      // deleting a character at 900 characters, the screen reader would announce
      // "1000 characters left" even when they only have 901 characters left.
      if (this.getInputDirection() === "del") {
        // The first branch makes sure that if the SR length matches the actual
        // length, it will be always announced.
        if (srLength === currentLength) {
          return srLength;
          // The second branch checks that if we are at the final threshold, we
          // should not announce "0 characters left" when the user deletes more than
          // the "announce after every stroke" limit (this.announceEveryThreshold).
        } else if (this.maxCharacters - srLength === this.announceThreshold) {
          return this.announcedAt || currentLength;
          // The third branch checks that when deleting characters, we should
          // announce the next threshold to get accurate annoucement. E.g. when we
          // have 750 characters left and the user deletes 100 characters at once,
          // we should announce "700 characters left" after that deletion.
        } else if (srLength < currentLength) {
          return srLength + this.announceThreshold;
        }
        // This fixes an issue in the following situation:
        // 1. 750 characters left
        // 2. Delete 100 characters in a row
        // 3. SR: "800 characters left" (actual 850)
        // 4. Type one additional character
        // 5. Without this, SR would announce "900 characters left" = confusing
      } else if (srLength < this.announcedAt) {
        return this.announcedAt;
      }
      return srLength;
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      var currentLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var showMessages = [];
      var inputLength = currentLength;
      if (inputLength === null) {
        inputLength = this.getInputLength();
      }
      if (this.minCharacters > 0) {
        var message = MESSAGES.charactersAtLeast.other;
        if (this.minCharacters === 1) {
          message = MESSAGES.charactersAtLeast.one;
        }
        showMessages.push(message.replace(COUNT_KEY, this.minCharacters));
      }
      if (this.maxCharacters > 0) {
        var remaining = this.maxCharacters - inputLength;
        var _message = MESSAGES.charactersLeft.other;
        if (remaining === 1) {
          _message = MESSAGES.charactersLeft.one;
        }
        this.$input[0].dispatchEvent(new CustomEvent("characterCounter", {
          detail: {
            remaining: remaining
          }
        }));
        showMessages.push(_message.replace(COUNT_KEY, remaining));
      }
      return showMessages;
    }
  }, {
    key: "updateStatus",
    value: function updateStatus() {
      this.$target.text(this.getMessages().join(", "));
    }
  }, {
    key: "checkScreenReaderUpdate",
    value: function checkScreenReaderUpdate() {
      if (this.maxCharacters < 1) {
        return;
      }
      var currentLength = this.getScreenReaderLength();
      if (currentLength === this.announcedAt) {
        return;
      }
      this.announcedAt = currentLength;
      this.updateScreenReaderStatus(currentLength);
    }
  }, {
    key: "updateScreenReaderStatus",
    value: function updateScreenReaderStatus() {
      var currentLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.$srTarget.text(this.getMessages(currentLength).join(", "));
    }
  }], [{
    key: "configureMessages",
    value: function configureMessages(messages) {
      MESSAGES = $.extend(DEFAULT_MESSAGES, messages);
    }
  }]);
  return InputCharacterCounter;
}();

var createCharacterCounter = function createCharacterCounter($input) {
  if (typeof $input !== "undefined" && $input.length) {
    $input.data("remaining-characters-counter", new InputCharacterCounter($input));
  }
};
$(function () {
  $("input[type='text'], textarea, .editor>input[type='hidden']").each(function (_i, elem) {
    var $input = $(elem);
    if (!$input.is("[minlength]") && !$input.is("[maxlength]")) {
      return;
    }
    createCharacterCounter($input);
  });
});


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_hashtags.js":
/*!*************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_hashtags.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_vendor_tribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/vendor/tribute */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vendor/tribute.js");
/* harmony import */ var src_decidim_vendor_tribute__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_tribute__WEBPACK_IMPORTED_MODULE_0__);
/* eslint no-unused-vars: 0 */

$(function () {
  var $hashtagContainer = $(".js-hashtags");
  var nodatafound = $hashtagContainer.attr("data-noresults");
  var noMatchTemplate = null;
  if (nodatafound) {
    noMatchTemplate = function noMatchTemplate() {
      return "<li>".concat(nodatafound, "</li>");
    };
  }

  // Listener for the event triggered by quilljs
  var cursor = "";
  $hashtagContainer.on("quill-position", function (event) {
    if (event.detail !== null) {
      // When replacing the text content after selecting a hashtag, we only need
      // to know the hashtag's start position as that is the point which we want
      // to replace.
      var quill = event.target.__quill;
      if (quill.getText(event.detail.index - 1, 1) === "#") {
        cursor = event.detail.index;
      }
    }
  });

  /* eslint no-use-before-define: ["error", { "variables": false }]*/
  var remoteSearch = function remoteSearch(text, cb) {
    $.post("/api", {
      query: "{hashtags(name:\"".concat(text, "\") {name}}")
    }).then(function (response) {
      var data = response.data.hashtags || {};
      cb(data);
    }).fail(function () {
      cb([]);
    }).always(function () {
      // This function runs Tribute every single time you type something
      // So we must evalute DOM properties after each
      var $parent = $(tribute.current.element).parent();
      $parent.addClass("is-active");

      // We need to move the container to the wrapper selected
      var $tribute = $parent.find(".tribute-container");
      // Remove the inline styles, relative to absolute positioning
      $tribute.removeAttr("style");
    });
  };

  // tribute.js docs - http://github.com/zurb/tribute
  /* global Tribute*/
  var tribute = new (src_decidim_vendor_tribute__WEBPACK_IMPORTED_MODULE_0___default())({
    trigger: "#",
    values: function values(text, cb) {
      remoteSearch(text, function (hashtags) {
        return cb(hashtags);
      });
    },
    positionMenu: true,
    menuContainer: null,
    fillAttr: "name",
    noMatchTemplate: noMatchTemplate,
    lookup: function lookup(item) {
      return item.name;
    },
    selectTemplate: function selectTemplate(item) {
      if (typeof item === "undefined") {
        return null;
      }
      if (this.range.isContentEditable(this.current.element)) {
        // Check quill.js
        if ($(this.current.element).hasClass("ql-editor")) {
          var editorContainer = $(this.current.element).parent().get(0);
          var quill = editorContainer.__quill;
          quill.insertText(cursor - 1, "#".concat(item.original.name, " "), Quill.sources.API);
          // cursor position + hashtag length + "#" sign + space
          var position = cursor + item.original.name.length + 2;
          var next = 0;
          if (quill.getLength() > position) {
            next = position;
          } else {
            next = quill.getLength() - 1;
          }
          // Workaround https://github.com/quilljs/quill/issues/731
          setTimeout(function () {
            quill.setSelection(next, 0);
          }, 500);
          return "";
        }
        return "<span contenteditable=\"false\">#".concat(item.original.name, "</span>");
      }
      return "#".concat(item.original.name);
    },
    menuItemTemplate: function menuItemTemplate(item) {
      var tpl = "<strong>".concat(item.original.name, "</strong>");
      return tpl;
    }
  });

  // Tribute needs to be attached to the `.ql-editor` element as said at:
  // https://github.com/quilljs/quill/issues/1816
  //
  // For this reason we need to wait a bit for quill to initialize itself.
  setTimeout(function () {
    $hashtagContainer.each(function (index, item) {
      var $qlEditor = $(".ql-editor", item);
      if ($qlEditor.length > 0) {
        tribute.attach($qlEditor);
      } else {
        tribute.attach(item);
      }
    });
  }, 1000);

  // DOM manipulation
  $hashtagContainer.on("focusin", function (event) {
    // Set the parent container relative to the current element

    tribute.menuContainer = event.target.parentNode;
  });
  $hashtagContainer.on("focusout", function (event) {
    var $parent = $(event.target).parent();
    if ($parent.hasClass("is-active")) {
      $parent.removeClass("is-active");
    }
  });
  $hashtagContainer.on("input", function (event) {
    var $parent = $(event.target).parent();
    if (tribute.isActive) {
      // We need to move the container to the wrapper selected
      var $tribute = $(".tribute-container");
      $tribute.appendTo($parent);
      // Parent adaptation
      $parent.addClass("is-active");
    } else {
      $parent.removeClass("is-active");
    }
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_mentions.js":
/*!*************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_mentions.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_vendor_tribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/vendor/tribute */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vendor/tribute.js");
/* harmony import */ var src_decidim_vendor_tribute__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_tribute__WEBPACK_IMPORTED_MODULE_0__);
/* eslint no-unused-vars: 0 */

$(function () {
  var $mentionContainer = $(".js-mentions");
  var nodatafound = $mentionContainer.attr("data-noresults");
  var noMatchTemplate = null;
  if (nodatafound) {
    noMatchTemplate = function noMatchTemplate() {
      return "<li>".concat(nodatafound, "</li>");
    };
  }

  // Listener for the event triggered by quilljs
  var cursor = "";
  $mentionContainer.on("quill-position", function (event) {
    if (event.detail !== null) {
      // When replacing the text content after selecting a hashtag, we only need
      // to know the hashtag's start position as that is the point which we want
      // to replace.
      var quill = event.target.__quill;
      if (quill.getText(event.detail.index - 1, 1) === "@") {
        cursor = event.detail.index;
      }
    }
  });

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds
  /* eslint no-invalid-this: 0 */
  /* eslint consistent-this: 0 */
  /* eslint prefer-reflect: 0 */
  var debounce = function debounce(callback, wait) {
    var _this = this;
    var timeout = null;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var context = _this;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        return callback.apply(context, args);
      }, wait);
    };
  };

  /* eslint no-use-before-define: ["error", { "variables": false }]*/
  var remoteSearch = function remoteSearch(text, cb) {
    var query = "{users(filter:{wildcard:\"".concat(text, "\"}){nickname,name,avatarUrl,__typename,...on UserGroup{membersCount}}}");
    $.post("/api", {
      query: query
    }).then(function (response) {
      var data = response.data.users || {};
      cb(data);
    }).fail(function () {
      cb([]);
    }).always(function () {
      // This function runs Tribute every single time you type something
      // So we must evalute DOM properties after each
      var $parent = $(tribute.current.element).parent();
      $parent.addClass("is-active");

      // We need to move the container to the wrapper selected
      var $tribute = $parent.find(".tribute-container");
      // Remove the inline styles, relative to absolute positioning
      $tribute.removeAttr("style");
    });
  };

  // tribute.js docs - http://github.com/zurb/tribute
  /* global Tribute*/
  var tribute = new (src_decidim_vendor_tribute__WEBPACK_IMPORTED_MODULE_0___default())({
    trigger: "@",
    // avoid overloading the API if the user types too fast
    values: debounce(function (text, cb) {
      remoteSearch(text, function (users) {
        return cb(users);
      });
    }, 250),
    positionMenu: true,
    menuContainer: null,
    allowSpaces: true,
    menuItemLimit: 5,
    fillAttr: "nickname",
    selectClass: "highlight",
    noMatchTemplate: noMatchTemplate,
    lookup: function lookup(item) {
      return item.nickname + item.name;
    },
    selectTemplate: function selectTemplate(item) {
      if (typeof item === "undefined") {
        return null;
      }
      if (this.range.isContentEditable(this.current.element)) {
        // Check quill.js
        if ($(this.current.element).hasClass("ql-editor")) {
          var editorContainer = $(this.current.element).parent().get(0);
          var quill = editorContainer.__quill;
          quill.insertText(cursor - 1, "".concat(item.original.nickname, " "), Quill.sources.API);
          // cursor position + nickname length + "@" sign + space
          var position = cursor + item.original.nickname.length + 2;
          var next = 0;
          if (quill.getLength() > position) {
            next = position;
          } else {
            next = quill.getLength() - 1;
          }
          // Workaround https://github.com/quilljs/quill/issues/731
          setTimeout(function () {
            quill.setSelection(next, 0);
          }, 500);
          return "";
        }
        return "<span contenteditable=\"false\">".concat(item.original.nickname, "</span>");
      }
      return item.original.nickname;
    },
    menuItemTemplate: function menuItemTemplate(item) {
      var svg = "";
      if (window.Decidim && item.original.__typename === "UserGroup") {
        var iconsPath = window.Decidim.config.get("icons_path");
        svg = "<span class=\"is-group\">".concat(item.original.membersCount, "x <svg class=\"icon--members icon\"><use href=\"").concat(iconsPath, "#icon-members\"/></svg></span>");
      }
      return "<div class=\"tribute-item ".concat(item.original.__typename, "\">\n      <span class=\"author__avatar\"><img src=\"").concat(item.original.avatarUrl, "\" alt=\"author-avatar\"></span>\n        <strong>").concat(item.original.nickname, "</strong>\n        <small>").concat(item.original.name, "</small>\n        ").concat(svg, "\n      </div>");
    }
  });
  var setupEvents = function setupEvents($element) {
    // DOM manipulation
    $element.on("focusin", function (event) {
      // Set the parent container relative to the current element
      tribute.menuContainer = event.target.parentNode;
    });
    $element.on("focusout", function (event) {
      var $parent = $(event.target).parent();
      if ($parent.hasClass("is-active")) {
        $parent.removeClass("is-active");
      }
    });
    $element.on("input", function (event) {
      var $parent = $(event.target).parent();
      if (tribute.isActive) {
        // We need to move the container to the wrapper selected
        var $tribute = $(".tribute-container");
        $tribute.appendTo($parent);

        // Parent adaptation
        $parent.addClass("is-active");
      } else {
        $parent.removeClass("is-active");
      }
    });
  };
  setupEvents($mentionContainer);

  // This allows external libraries (like React) to use the component
  // by simply firing and event targeting the element where to attach Tribute
  $(document).on("attach-mentions-element", function (event, element) {
    if (!element) {
      return;
    }
    tribute.attach(element);
    // Due a bug in Tribute, re-add menu to DOM if it has been removed
    // See https://github.com/zurb/tribute/issues/140
    if (tribute.menu && !document.body.contains(tribute.menu)) {
      tribute.range.getDocument().body.appendChild(tribute.menu);
    }
    setupEvents($(element));
  });

  // tribute.attach($mentionContainer);
  // Tribute needs to be attached to the `.ql-editor` element as said at:
  // https://github.com/quilljs/quill/issues/1816
  //
  // For this reason we need to wait a bit for quill to initialize itself.
  setTimeout(function () {
    $mentionContainer.each(function (index, item) {
      var $qlEditor = $(".ql-editor", item);
      if ($qlEditor.length > 0) {
        tribute.attach($qlEditor);
      } else {
        tribute.attach(item);
      }
    });
  }, 1000);
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/session_timeouter.js":
/*!****************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/session_timeouter.js ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  var sessionTimeOutEnabled = true;
  var $timeoutModal = $("#timeoutModal");
  var timeoutInSeconds = parseInt($timeoutModal.data("session-timeout"), 10);
  var secondsUntilTimeoutPath = $timeoutModal.data("seconds-until-timeout-path");
  var heartbeatPath = $timeoutModal.data("heartbeat-path");
  var interval = parseInt($timeoutModal.data("session-timeout-interval"), 10);
  var preventTimeOutSeconds = $timeoutModal.data("prevent-timeout-seconds");
  var endsAt = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(timeoutInSeconds, "seconds");
  var lastAction = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
  var $continueSessionButton = $("#continueSession");
  var lastActivityCheck = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
  // 5 * 60 seconds = 5 Minutes
  var activityCheckInterval = 5 * 60;
  var preventTimeOutUntil = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(preventTimeOutSeconds, "seconds");

  // Ajax request is made at timeout_modal.html.erb
  $continueSessionButton.on("click", function () {
    $timeoutModal.foundation("close");
    // In admin panel we have to hide all overlays
    $(".reveal-overlay").css("display", "none");
    lastActivityCheck = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
  });
  if (isNaN(interval)) {
    return;
  }
  if (!timeoutInSeconds) {
    return;
  }
  var disableSessionTimeout = function disableSessionTimeout() {
    sessionTimeOutEnabled = false;
  };
  var enableSessionTimeout = function enableSessionTimeout() {
    sessionTimeOutEnabled = true;
  };
  var setTimer = function setTimer(secondsUntilExpiration) {
    if (!secondsUntilExpiration) {
      return;
    }
    endsAt = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(secondsUntilExpiration, "seconds");
  };
  var sessionTimeLeft = function sessionTimeLeft() {
    return $.ajax({
      method: "GET",
      url: secondsUntilTimeoutPath,
      contentType: "application/json",
      headers: {
        "X-CSRF-Token": $("meta[name=csrf-token]").attr("content")
      }
    });
  };
  var heartbeat = function heartbeat() {
    return $.ajax({
      method: "POST",
      url: heartbeatPath,
      contentType: "application/javascript"
    });
  };
  var userBeenActiveSince = function userBeenActiveSince(seconds) {
    return (dayjs__WEBPACK_IMPORTED_MODULE_0___default()() - lastAction) / 1000 < seconds;
  };
  var exitInterval = setInterval(function () {
    var timeSinceLastActivityCheckInSeconds = Math.round((dayjs__WEBPACK_IMPORTED_MODULE_0___default()() - lastActivityCheck) / 1000);
    var popupOpen = $("#timeoutModal").parent().css("display") === "block";
    if (!popupOpen && timeSinceLastActivityCheckInSeconds >= activityCheckInterval) {
      lastActivityCheck = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
      if (userBeenActiveSince(activityCheckInterval)) {
        heartbeat();
        return;
      }
    }
    var timeRemaining = Math.round((endsAt - dayjs__WEBPACK_IMPORTED_MODULE_0___default()()) / 1000);
    if (timeRemaining > 170) {
      return;
    }
    if (dayjs__WEBPACK_IMPORTED_MODULE_0___default()() < preventTimeOutUntil) {
      heartbeat();
      return;
    }
    sessionTimeLeft().then(function (result) {
      var secondsUntilSessionExpires = result.seconds_remaining;
      setTimer(secondsUntilSessionExpires);
      if (!sessionTimeOutEnabled) {
        heartbeat();
      } else if (secondsUntilSessionExpires <= 90) {
        $timeoutModal.find("#reveal-hidden-sign-out")[0].click();
      } else if (secondsUntilSessionExpires <= 150) {
        $timeoutModal.foundation("open");
      }
    });
  }, interval);
  $(document).mousemove(function () {
    lastAction = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
  });
  $(document).scroll(function () {
    lastAction = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
  });
  $(document).keypress(function () {
    lastAction = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
  });

  // Devise restarts its own timer on ajax requests,
  // so here we restart our.
  $(document).on("ajax:complete", function () {
    setTimer(timeoutInSeconds);
  });
  $(document).ajaxComplete(function (_event, _xhr, settings) {
    if (settings && settings.url === secondsUntilTimeoutPath) {
      return;
    }
    setTimer(timeoutInSeconds);
  });
  window.addEventListener("beforeunload", function () {
    clearInterval(exitInterval);
    return;
  });
  window.Decidim.enableSessionTimeout = enableSessionTimeout;
  window.Decidim.disableSessionTimeout = disableSessionTimeout;
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vendor/foundation-datepicker.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vendor/foundation-datepicker.js ***!
  \***************************************************************************************************************************************/
/***/ (function() {

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
/* eslint-disable */

/* =========================================================
 * foundation-datepicker.js
 * Copyright 2015 Peter Beno, najlepsiwebdesigner@gmail.com, @benopeter
 * project website http://foundation-datepicker.peterbeno.com
 * ========================================================= */

// This file is a modified version of the original file
// See
//  - https://github.com/decidim/decidim/pull/1207
//  - https://github.com/decidim/decidim/pull/2512
//  - https://github.com/decidim/decidim/pull/3515

!function ($) {
  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function UTCToday() {
    var today = new Date();
    return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  }
  var Datepicker = function Datepicker(element, options) {
    var that = this;
    this.element = $(element);
    this.autoShow = options.autoShow == undefined ? true : options.autoShow;
    this.appendTo = options.appendTo || "body";
    this.closeButton = options.closeButton;
    this.language = options.language || this.element.data("date-language") || "en";
    this.language = this.language in dates ? this.language : this.language.split("-")[0]; // Check if "de-DE" style date is available, if not language should fallback to 2 letter code eg "de"
    this.language = this.language in dates ? this.language : "en";
    this.isRTL = dates[this.language].rtl || false;
    this.format = DPGlobal.parseFormat(options.format || this.element.data("date-format") || dates[this.language].format || "mm/dd/yyyy");
    this.formatText = options.format || this.element.data("date-format") || dates[this.language].format || "mm/dd/yyyy";
    this.isInline = false;
    this.isInput = this.element.is("input");
    this.component = this.element.is(".date") ? this.element.find(".prefix, .postfix") : false;
    this.hasInput = this.component && this.element.find("input").length;
    this.disableDblClickSelection = options.disableDblClickSelection;
    this.onRender = options.onRender || function () {};
    if (this.component && this.component.length === 0) {
      this.component = false;
    }
    this.linkField = options.linkField || this.element.data("link-field") || false;
    this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data("link-format") || "yyyy-mm-dd hh:ii:ss");
    this.minuteStep = options.minuteStep || this.element.data("minute-step") || 5;
    this.pickerPosition = options.pickerPosition || this.element.data("picker-position") || "bottom-right";
    this.initialDate = options.initialDate || null;
    this.faCSSprefix = options.faCSSprefix || "fa";
    this.leftArrow = options.leftArrow || "<i class=\"".concat(this.faCSSprefix, " ").concat(this.faCSSprefix, "-chevron-left fi-arrow-left\"/>");
    this.rightArrow = options.rightArrow || "<i class=\"".concat(this.faCSSprefix, " ").concat(this.faCSSprefix, "-chevron-right fi-arrow-right\"/>");
    this.closeIcon = options.closeIcon || "<i class=\"".concat(this.faCSSprefix, " ").concat(this.faCSSprefix, "-remove ").concat(this.faCSSprefix, "-times fi-x\"></i>");
    this.minView = 0;
    if ("minView" in options) {
      this.minView = options.minView;
    } else if ("minView" in this.element.data()) {
      this.minView = this.element.data("min-view");
    }
    this.minView = DPGlobal.convertViewMode(this.minView);
    this.maxView = DPGlobal.modes.length - 1;
    if ("maxView" in options) {
      this.maxView = options.maxView;
    } else if ("maxView" in this.element.data()) {
      this.maxView = this.element.data("max-view");
    }
    this.maxView = DPGlobal.convertViewMode(this.maxView);
    this.startViewMode = "month";
    if ("startView" in options) {
      this.startViewMode = options.startView;
    } else if ("startView" in this.element.data()) {
      this.startViewMode = this.element.data("start-view");
    }
    this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
    this.viewMode = this.startViewMode;
    if (!("minView" in options) && !("maxView" in options) && !this.element.data("min-view") && !this.element.data("max-view")) {
      this.pickTime = false;
      if ("pickTime" in options) {
        this.pickTime = options.pickTime;
      }
      if (this.pickTime == true) {
        this.minView = 0;
        this.maxView = 4;
      } else {
        this.minView = 2;
        this.maxView = 4;
      }
    }
    this.forceParse = true;
    if ("forceParse" in options) {
      this.forceParse = options.forceParse;
    } else if ("dateForceParse" in this.element.data()) {
      this.forceParse = this.element.data("date-force-parse");
    }
    this.picker = $(DPGlobal.template(this.leftArrow, this.rightArrow, this.closeIcon)).appendTo(this.isInline ? this.element : this.appendTo).on({
      click: $.proxy(this.click, this),
      mousedown: $.proxy(this.mousedown, this)
    });
    if (this.closeButton) {
      this.picker.find("a.datepicker-close").show();
    } else {
      this.picker.find("a.datepicker-close").hide();
    }
    if (this.isInline) {
      this.picker.addClass("datepicker-inline");
    } else {
      this.picker.addClass("datepicker-dropdown dropdown-menu");
    }
    if (this.isRTL) {
      this.picker.addClass("datepicker-rtl");
      this.picker.find(".date-switch").each(function () {
        $(this).parent().prepend($(this).siblings(".next"));
        $(this).parent().append($(this).siblings(".prev"));
      });
      this.picker.find(".prev, .next").toggleClass("prev next");
    }
    $(document).on("mousedown", function (e) {
      if (that.isInput && e.target === that.element[0]) {
        return;
      }

      // Clicked outside the datepicker, hide it
      if ($(e.target).closest(".datepicker.datepicker-inline, .datepicker.datepicker-dropdown").length === 0) {
        that.hide();
      }
    });
    this.autoclose = true;
    if ("autoclose" in options) {
      this.autoclose = options.autoclose;
    } else if ("dateAutoclose" in this.element.data()) {
      this.autoclose = this.element.data("date-autoclose");
    }
    this.keyboardNavigation = true;
    if ("keyboardNavigation" in options) {
      this.keyboardNavigation = options.keyboardNavigation;
    } else if ("dateKeyboardNavigation" in this.element.data()) {
      this.keyboardNavigation = this.element.data("date-keyboard-navigation");
    }
    this.todayBtn = options.todayBtn || this.element.data("date-today-btn") || false;
    this.todayHighlight = options.todayHighlight || this.element.data("date-today-highlight") || false;
    this.calendarWeeks = false;
    if ("calendarWeeks" in options) {
      this.calendarWeeks = options.calendarWeeks;
    } else if ("dateCalendarWeeks" in this.element.data()) {
      this.calendarWeeks = this.element.data("date-calendar-weeks");
    }
    if (this.calendarWeeks) {
      this.picker.find("tfoot th.today").attr("colspan", function (i, val) {
        return parseInt(val) + 1;
      });
    }
    this.weekStart = (options.weekStart || this.element.data("date-weekstart") || dates[this.language].weekStart || 0) % 7;
    this.weekEnd = (this.weekStart + 6) % 7;
    this.startDate = -Infinity;
    this.endDate = Infinity;
    this.daysOfWeekDisabled = [];
    this.datesDisabled = [];
    this.setStartDate(options.startDate || this.element.data("date-startdate"));
    this.setEndDate(options.endDate || this.element.data("date-enddate"));
    this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled"));
    this.setDatesDisabled(options.datesDisabled || this.element.data("dates-disabled"));
    if (this.initialDate != null) {
      this.date = this.viewDate = DPGlobal.parseDate(this.initialDate, this.format, this.language);
      this.setValue();
    }
    this.fillDow();
    this.fillMonths();
    this.update();
    this.showMode();
    if (this.isInline) {
      this.show();
    }
    this._attachEvents();
  };
  Datepicker.prototype = {
    constructor: Datepicker,
    _events: [],
    _attachEvents: function _attachEvents() {
      this._detachEvents();
      if (this.isInput) {
        // single input
        if (!this.keyboardNavigation) {
          this._events = [[this.element, {
            focus: this.autoShow ? $.proxy(this.show, this) : function () {}
          }]];
        } else {
          this._events = [[this.element, {
            focus: this.autoShow ? $.proxy(this.show, this) : function () {},
            keyup: $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this),
            click: this.element.attr("readonly") ? $.proxy(this.show, this) : function () {}
          }]];
        }
      } else if (this.component && this.hasInput) {
        // component: input + button
        this._events = [
        // For components that are not readonly, allow keyboard nav
        [this.element.find("input"), {
          focus: this.autoShow ? $.proxy(this.show, this) : function () {},
          keyup: $.proxy(this.update, this),
          keydown: $.proxy(this.keydown, this)
        }], [this.component, {
          click: $.proxy(this.show, this)
        }]];
      } else if (this.element.is("div")) {
        // inline datepicker
        this.isInline = true;
      } else {
        this._events = [[this.element, {
          click: $.proxy(this.show, this)
        }]];
      }
      if (this.disableDblClickSelection) {
        this._events[this._events.length] = [this.element, {
          dblclick: function dblclick(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).blur();
          }
        }];
      }
      for (var el, ev, i = 0; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.on(ev);
      }
    },
    _detachEvents: function _detachEvents() {
      for (var el, ev, i = 0; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.off(ev);
      }
      this._events = [];
    },
    show: function show(e) {
      this.picker.show();
      this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
      this.update();
      this.place();
      $(window).on("resize", $.proxy(this.place, this));
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.element.trigger({
        type: "show",
        date: this.date
      });
    },
    hide: function hide(e) {
      if (this.isInline) {
        return;
      }
      if (!this.picker.is(":visible")) {
        return;
      }
      this.picker.hide();
      $(window).off("resize", this.place);
      this.viewMode = this.startViewMode;
      this.showMode();
      if (!this.isInput) {
        $(document).off("mousedown", this.hide);
      }
      if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) {
        this.setValue();
      }
      this.element.trigger({
        type: "hide",
        date: this.date
      });
    },
    remove: function remove() {
      this._detachEvents();
      this.picker.remove();
      delete this.element.data().datepicker;
    },
    getDate: function getDate() {
      var d = this.getUTCDate();
      return new Date(d.getTime() + d.getTimezoneOffset() * 60000);
    },
    getUTCDate: function getUTCDate() {
      return this.date;
    },
    setDate: function setDate(d) {
      this.setUTCDate(new Date(d.getTime() - d.getTimezoneOffset() * 60000));
    },
    setUTCDate: function setUTCDate(d) {
      this.date = d;
      this.setValue();
    },
    setValue: function setValue() {
      var formatted = this.getFormattedDate();
      if (!this.isInput) {
        if (this.component) {
          this.element.find("input").val(formatted);
        }
        this.element.data("date", formatted);
      } else {
        this.element.val(formatted);
      }
    },
    getFormattedDate: function getFormattedDate(format) {
      if (format === undefined) {
        format = this.format;
      }
      return DPGlobal.formatDate(this.date, format, this.language);
    },
    setStartDate: function setStartDate(startDate) {
      this.startDate = startDate || -Infinity;
      if (this.startDate !== -Infinity) {
        this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language);
      }
      this.update();
      this.updateNavArrows();
    },
    setEndDate: function setEndDate(endDate) {
      this.endDate = endDate || Infinity;
      if (this.endDate !== Infinity) {
        this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language);
      }
      this.update();
      this.updateNavArrows();
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(daysOfWeekDisabled) {
      this.daysOfWeekDisabled = daysOfWeekDisabled || [];
      if (!$.isArray(this.daysOfWeekDisabled)) {
        this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
      }
      this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },
    setDatesDisabled: function setDatesDisabled(datesDisabled) {
      this.datesDisabled = datesDisabled || [];
      if (!$.isArray(this.datesDisabled)) {
        this.datesDisabled = this.datesDisabled.split(/,\s*/);
      }
      this.datesDisabled = $.map(this.datesDisabled, function (d) {
        return DPGlobal.parseDate(d, this.format, this.language).valueOf();
      });
      this.update();
      this.updateNavArrows();
    },
    place: function place() {
      if (this.isInline) {
        return;
      }
      var zIndexes = [];
      this.element.parents().map(function () {
        if ($(this).css("z-index") != "auto") {
          zIndexes.push(parseInt($(this).css("z-index")));
        }
      });
      var zIndex = zIndexes.sort(function (a, b) {
        return a - b;
      }).pop() + 10;
      var textbox = this.component ? this.component : this.element;
      var offset = textbox.offset();
      var height = textbox.outerHeight() + parseInt(textbox.css("margin-top"));
      var width = textbox.outerWidth() + parseInt(textbox.css("margin-left"));
      var fullOffsetTop = offset.top + height;
      var offsetLeft = offset.left;
      this.picker.removeClass("datepicker-top datepicker-bottom");
      // can we show it on top?
      var canShowTop = $(window).scrollTop() < offset.top - this.picker.outerHeight();
      var canShowBottom = fullOffsetTop + this.picker.outerHeight() < $(window).scrollTop() + $(window).height();
      // If the datepicker is going to be below the window, show it on top of the input if it fits
      if (!canShowBottom && canShowTop) {
        fullOffsetTop = offset.top - this.picker.outerHeight();
        this.picker.addClass("datepicker-top");
      } else {
        // Scroll up if we cannot show it on bottom or top (for mobile devices)
        if (!canShowBottom) {
          $(window).scrollTop(offset.top);
        }
        this.picker.addClass("datepicker-bottom");
      }

      // if the datepicker is going to go past the right side of the window, we want
      // to set the right position so the datepicker lines up with the textbox
      if (offset.left + this.picker.width() >= $(window).width()) {
        offsetLeft = offset.left + width - this.picker.width();
      }
      this.picker.css({
        top: fullOffsetTop,
        left: offsetLeft,
        zIndex: zIndex
      });
    },
    update: function update() {
      var date,
        fromArgs = false;
      var currentVal = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val();
      if (arguments && arguments.length && (typeof arguments[0] === "string" || arguments[0] instanceof Date)) {
        date = arguments[0];
        fromArgs = true;
      } else {
        date = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val();
      }
      this.date = DPGlobal.parseDate(date, this.format, this.language);
      if (fromArgs) {
        this.setValue();
      } else if (currentVal == "") {
        this.element.trigger({
          type: "changeDate",
          date: null
        });
      }
      if (this.date < this.startDate) {
        this.viewDate = new Date(this.startDate.valueOf());
      } else if (this.date > this.endDate) {
        this.viewDate = new Date(this.endDate.valueOf());
      } else {
        this.viewDate = new Date(this.date.valueOf());
      }
      this.fill();
    },
    fillDow: function fillDow() {
      var dowCnt = this.weekStart,
        html = "<tr>";
      if (this.calendarWeeks) {
        var cell = '<th class="cw">&nbsp;</th>';
        html += cell;
        this.picker.find(".datepicker-days thead tr:first-child").prepend(cell);
      }
      while (dowCnt < this.weekStart + 7) {
        html += "<th class=\"dow\">".concat(dates[this.language].daysMin[dowCnt++ % 7], "</th>");
      }
      html += "</tr>";
      this.picker.find(".datepicker-days thead").append(html);
    },
    fillMonths: function fillMonths() {
      var html = "",
        i = 0;
      while (i < 12) {
        html += "<span class=\"month\">".concat(dates[this.language].monthsShort[i++], "</span>");
      }
      this.picker.find(".datepicker-months td").html(html);
    },
    fill: function fill() {
      if (this.date == null || this.viewDate == null) {
        return;
      }
      var d = new Date(this.viewDate.valueOf()),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        dayMonth = d.getUTCDate(),
        hours = d.getUTCHours(),
        minutes = d.getUTCMinutes(),
        startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
        startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
        endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
        endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
        currentDate = this.date && UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
        today = new Date(),
        titleFormat = dates[this.language].titleFormat || dates.en.titleFormat;
      // this.picker.find('.datepicker-days thead th.date-switch')
      //          .text(DPGlobal.formatDate(new UTCDate(year, month), titleFormat, this.language));

      this.picker.find(".datepicker-days thead th:eq(1)").text("".concat(dates[this.language].months[month], " ").concat(year));
      this.picker.find(".datepicker-hours thead th:eq(1)").text("".concat(dayMonth, " ").concat(dates[this.language].months[month], " ").concat(year));
      this.picker.find(".datepicker-minutes thead th:eq(1)").text("".concat(dayMonth, " ").concat(dates[this.language].months[month], " ").concat(year));
      this.picker.find("tfoot th.today").text(dates[this.language].today).toggle(this.todayBtn !== false);
      this.updateNavArrows();
      this.fillMonths();
      var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
        day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth.valueOf());
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var clsName;
      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() == this.weekStart) {
          html.push("<tr>");
          if (this.calendarWeeks) {
            // adapted from https://github.com/timrwood/moment/blob/master/moment.js#L128
            var a = new Date(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth(), prevMonth.getUTCDate() - prevMonth.getDay() + 10 - (this.weekStart && this.weekStart % 7 < 5 && 7)),
              b = new Date(a.getFullYear(), 0, 4),
              calWeek = ~~((a - b) / 864e5 / 7 + 1.5);
            html.push("<td class=\"cw\">".concat(calWeek, "</td>"));
          }
        }
        clsName = " ".concat(this.onRender(prevMonth), " ");
        if (prevMonth.getUTCFullYear() < year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month) {
          clsName += " old";
        } else if (prevMonth.getUTCFullYear() > year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month) {
          clsName += " new";
        }
        // Compare internal UTC date with local today, not UTC today
        if (this.todayHighlight && prevMonth.getUTCFullYear() == today.getFullYear() && prevMonth.getUTCMonth() == today.getMonth() && prevMonth.getUTCDate() == today.getDate()) {
          clsName += " today";
        }
        if (currentDate && prevMonth.valueOf() == currentDate) {
          clsName += " active";
        }
        if (prevMonth.valueOf() < this.startDate || prevMonth.valueOf() > this.endDate || $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1 || $.inArray(prevMonth.valueOf(), this.datesDisabled) !== -1) {
          clsName += " disabled";
        }
        html.push("<td class=\"day".concat(clsName, "\">").concat(prevMonth.getUTCDate(), "</td>"));
        if (prevMonth.getUTCDay() == this.weekEnd) {
          html.push("</tr>");
        }
        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }
      this.picker.find(".datepicker-days tbody").empty().append(html.join(""));
      html = [];
      for (var i = 0; i < 24; i++) {
        var actual = UTCDate(year, month, dayMonth, i);
        clsName = "";
        // We want the previous hour for the startDate
        if (actual.valueOf() + 3600000 < this.startDate || actual.valueOf() > this.endDate) {
          clsName += " disabled";
        } else if (hours == i) {
          clsName += " active";
        }
        html.push("<span class=\"hour".concat(clsName, "\">").concat(i, ":00</span>"));
      }
      this.picker.find(".datepicker-hours td").html(html.join(""));
      html = [];
      for (var i = 0; i < 60; i += this.minuteStep) {
        var actual = UTCDate(year, month, dayMonth, hours, i);
        clsName = "";
        if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
          clsName += " disabled";
        } else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
          clsName += " active";
        }
        html.push("<span class=\"minute".concat(clsName, "\">").concat(hours, ":").concat(i < 10 ? "0".concat(i) : i, "</span>"));
      }
      this.picker.find(".datepicker-minutes td").html(html.join(""));
      var currentYear = this.date && this.date.getUTCFullYear();
      var months = this.picker.find(".datepicker-months").find("th:eq(1)").text(year).end().find("span").removeClass("active");
      if (currentYear && currentYear == year) {
        months.eq(this.date.getUTCMonth()).addClass("active");
      }
      if (year < startYear || year > endYear) {
        months.addClass("disabled");
      }
      if (year == startYear) {
        months.slice(0, startMonth).addClass("disabled");
      }
      if (year == endYear) {
        months.slice(endMonth + 1).addClass("disabled");
      }
      html = "";
      year = parseInt(year / 10, 10) * 10;
      var yearCont = this.picker.find(".datepicker-years").find("th:eq(1)").text("".concat(year, "-").concat(year + 9)).end().find("td");
      year -= 1;
      for (var i = -1; i < 11; i++) {
        html += "<span class=\"year".concat(i == -1 || i == 10 ? " old" : "").concat(currentYear == year ? " active" : "").concat(year < startYear || year > endYear ? " disabled" : "", "\">").concat(year, "</span>");
        year += 1;
      }
      yearCont.html(html);
    },
    updateNavArrows: function updateNavArrows() {
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        day = d.getUTCDate(),
        hour = d.getUTCHours();
      switch (this.viewMode) {
        case 0:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate() && hour <= this.startDate.getUTCHours()) {
            this.picker.find(".prev").css({
              visibility: "hidden"
            });
          } else {
            this.picker.find(".prev").css({
              visibility: "visible"
            });
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate() && hour >= this.endDate.getUTCHours()) {
            this.picker.find(".next").css({
              visibility: "hidden"
            });
          } else {
            this.picker.find(".next").css({
              visibility: "visible"
            });
          }
          break;
        case 1:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate()) {
            this.picker.find(".prev").css({
              visibility: "hidden"
            });
          } else {
            this.picker.find(".prev").css({
              visibility: "visible"
            });
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate()) {
            this.picker.find(".next").css({
              visibility: "hidden"
            });
          } else {
            this.picker.find(".next").css({
              visibility: "visible"
            });
          }
          break;
        case 2:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
            this.picker.find(".prev").css({
              visibility: "hidden"
            });
          } else {
            this.picker.find(".prev").css({
              visibility: "visible"
            });
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
            this.picker.find(".next").css({
              visibility: "hidden"
            });
          } else {
            this.picker.find(".next").css({
              visibility: "visible"
            });
          }
          break;
        case 3:
        case 4:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
            this.picker.find(".prev").css({
              visibility: "hidden"
            });
          } else {
            this.picker.find(".prev").css({
              visibility: "visible"
            });
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
            this.picker.find(".next").css({
              visibility: "hidden"
            });
          } else {
            this.picker.find(".next").css({
              visibility: "visible"
            });
          }
          break;
      }
    },
    click: function click(e) {
      e.stopPropagation();
      e.preventDefault();
      if ($(e.target).hasClass("datepicker-close") || $(e.target).parent().hasClass("datepicker-close")) {
        this.hide();
      }
      var target = $(e.target).closest("span, td, th");
      if (target.length == 1) {
        if (target.is(".disabled")) {
          this.element.trigger({
            type: "outOfRange",
            date: this.viewDate,
            startDate: this.startDate,
            endDate: this.endDate
          });
          return;
        }
        switch (target[0].nodeName.toLowerCase()) {
          case "th":
            switch (target[0].className) {
              case "date-switch":
                this.showMode(1);
                break;
              case "prev":
              case "next":
                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == "prev" ? -1 : 1);
                switch (this.viewMode) {
                  case 0:
                    this.viewDate = this.moveHour(this.viewDate, dir);
                    break;
                  case 1:
                    this.viewDate = this.moveDate(this.viewDate, dir);
                    break;
                  case 2:
                    this.viewDate = this.moveMonth(this.viewDate, dir);
                    break;
                  case 3:
                  case 4:
                    this.viewDate = this.moveYear(this.viewDate, dir);
                    break;
                }
                this.fill();
                break;
              case "today":
                var date = new Date();
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
                this.viewMode = this.startViewMode;
                this.showMode(0);
                this._setDate(date);
                break;
            }
            break;
          case "span":
            if (!target.is(".disabled")) {
              if (target.is(".month")) {
                if (this.minView === 3) {
                  var month = target.parent().find("span").index(target) || 0;
                  var year = this.viewDate.getUTCFullYear(),
                    day = 1,
                    hours = this.viewDate.getUTCHours(),
                    minutes = this.viewDate.getUTCMinutes(),
                    seconds = this.viewDate.getUTCSeconds();
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                } else {
                  this.viewDate.setUTCDate(1);
                  var month = target.parent().find("span").index(target);
                  this.viewDate.setUTCMonth(month);
                  this.element.trigger({
                    type: "changeMonth",
                    date: this.viewDate
                  });
                }
              } else if (target.is(".year")) {
                if (this.minView === 4) {
                  var year = parseInt(target.text(), 10) || 0;
                  var month = 0,
                    day = 1,
                    hours = this.viewDate.getUTCHours(),
                    minutes = this.viewDate.getUTCMinutes(),
                    seconds = this.viewDate.getUTCSeconds();
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                } else {
                  this.viewDate.setUTCDate(1);
                  var year = parseInt(target.text(), 10) || 0;
                  this.viewDate.setUTCFullYear(year);
                  this.element.trigger({
                    type: "changeYear",
                    date: this.viewDate
                  });
                }
              } else if (target.is(".hour")) {
                var hours = parseInt(target.text(), 10) || 0;
                var year = this.viewDate.getUTCFullYear(),
                  month = this.viewDate.getUTCMonth(),
                  day = this.viewDate.getUTCDate(),
                  minutes = this.viewDate.getUTCMinutes(),
                  seconds = this.viewDate.getUTCSeconds();
                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
              } else if (target.is(".minute")) {
                var minutes = parseInt(target.text().substr(target.text().indexOf(":") + 1), 10) || 0;
                var year = this.viewDate.getUTCFullYear(),
                  month = this.viewDate.getUTCMonth(),
                  day = this.viewDate.getUTCDate(),
                  hours = this.viewDate.getUTCHours(),
                  seconds = this.viewDate.getUTCSeconds();
                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
              }
              if (this.viewMode != 0) {
                var oldViewMode = this.viewMode;
                this.showMode(-1);
                this.fill();
                if (oldViewMode == this.viewMode && this.autoclose) {
                  this.hide();
                }
              } else {
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
              }
            }
            break;
          case "td":
            if (target.is(".day") && !target.is(".disabled")) {
              var day = parseInt(target.text(), 10) || 1;
              var year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                hours = this.viewDate.getUTCHours(),
                minutes = this.viewDate.getUTCMinutes(),
                seconds = this.viewDate.getUTCSeconds();
              if (target.is(".old")) {
                if (month === 0) {
                  month = 11;
                  year -= 1;
                } else {
                  month -= 1;
                }
              } else if (target.is(".new")) {
                if (month == 11) {
                  month = 0;
                  year += 1;
                } else {
                  month += 1;
                }
              }
              this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
            }
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode == this.viewMode && this.autoclose) {
              this.hide();
            }
            break;
        }
      }
    },
    _setDate: function _setDate(date, which) {
      if (!which || which == "date") {
        this.date = date;
      }
      if (!which || which == "view") {
        this.viewDate = date;
      }
      this.fill();
      this.setValue();
      this.element.trigger({
        type: "changeDate",
        date: this.date
      });
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find("input");
      }
      if (element) {
        element.change();
        if (this.autoclose && (!which || which == "date")) {
          // this.hide();
        }
      }
    },
    moveHour: function moveHour(date, dir) {
      if (!dir) {
        return date;
      }
      var new_date = new Date(date.valueOf());
      dir = dir > 0 ? 1 : -1;
      new_date.setUTCHours(new_date.getUTCHours() + dir);
      return new_date;
    },
    moveDate: function moveDate(date, dir) {
      if (!dir) {
        return date;
      }
      var new_date = new Date(date.valueOf());
      dir = dir > 0 ? 1 : -1;
      new_date.setUTCDate(new_date.getUTCDate() + dir);
      return new_date;
    },
    moveMonth: function moveMonth(date, dir) {
      if (!dir) {
        return date;
      }
      var new_date = new Date(date.valueOf()),
        day = new_date.getUTCDate(),
        month = new_date.getUTCMonth(),
        mag = Math.abs(dir),
        new_month,
        test;
      dir = dir > 0 ? 1 : -1;
      if (mag == 1) {
        test = dir == -1
        // If going back one month, make sure month is not current month
        // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
        ? function () {
          return new_date.getUTCMonth() == month;
        }
        // If going forward one month, make sure month is as expected
        // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
        : function () {
          return new_date.getUTCMonth() != new_month;
        };
        new_month = month + dir;
        new_date.setUTCMonth(new_month);
        // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
        if (new_month < 0 || new_month > 11) {
          new_month = (new_month + 12) % 12;
        }
      } else {
        // For magnitudes >1, move one month at a time...
        for (var i = 0; i < mag; i++)
        // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
        {
          new_date = this.moveMonth(new_date, dir);
        }
        // ...then reset the day, keeping it in the new month
        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);
        test = function test() {
          return new_month != new_date.getUTCMonth();
        };
      }
      // Common date-resetting loop -- if date is beyond end of month, make it
      // end of month
      while (test()) {
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }
      return new_date;
    },
    moveYear: function moveYear(date, dir) {
      return this.moveMonth(date, dir * 12);
    },
    dateWithinRange: function dateWithinRange(date) {
      return date >= this.startDate && date <= this.endDate;
    },
    keydown: function keydown(e) {
      if (!this.keyboardNavigation) {
        return true;
      }
      if (this.picker.is(":not(:visible)")) {
        if (e.keyCode == 27)
          // allow escape to hide and re-show picker
          {
            this.show();
          }
        return;
      }
      var dateChanged = false,
        day,
        dir,
        month,
        newDate,
        newViewDate;
      switch (e.keyCode) {
        case 27:
          // escape
          this.hide();
          e.preventDefault();
          break;
        case 37: // left
        case 39:
          // right
          if (!this.keyboardNavigation) {
            break;
          }
          dir = e.keyCode == 37 ? -1 : 1;
          if (e.ctrlKey) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (e.shiftKey) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else {
            newDate = new Date(this.date.valueOf());
            newDate.setUTCDate(this.date.getUTCDate() + dir);
            newViewDate = new Date(this.viewDate.valueOf());
            newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 38: // up
        case 40:
          // down
          if (!this.keyboardNavigation) {
            break;
          }
          dir = e.keyCode == 38 ? -1 : 1;
          if (e.ctrlKey) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (e.shiftKey) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else {
            newDate = new Date(this.date.valueOf());
            newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
            newViewDate = new Date(this.viewDate.valueOf());
            newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 13:
          // enter
          this.hide();
          e.preventDefault();
          break;
        case 9:
          // tab
          this.hide();
          break;
      }
      if (dateChanged) {
        this.element.trigger({
          type: "changeDate",
          date: this.date
        });
        var element;
        if (this.isInput) {
          element = this.element;
        } else if (this.component) {
          element = this.element.find("input");
        }
        if (element) {
          element.change();
        }
      }
    },
    showMode: function showMode(dir) {
      if (dir) {
        var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
        if (newViewMode >= this.minView && newViewMode <= this.maxView) {
          this.viewMode = newViewMode;
        }
      }

      /*
                vitalets: fixing bug of very special conditions:
                jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
                Method show() does not set display css correctly and datepicker is not shown.
                Changed to .css('display', 'block') solve the problem.
                See https://github.com/vitalets/x-editable/issues/37
                 In jquery 1.7.2+ everything works fine.
            */
      // this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
      this.picker.find(">div").hide().filter(".datepicker-".concat(DPGlobal.modes[this.viewMode].clsName)).css("display", "block");
      this.updateNavArrows();
    },
    changeViewDate: function changeViewDate(date) {
      this.date = date;
      this.viewDate = date;
      this.fill();
    },
    reset: function reset(e) {
      this._setDate(null, "date");
    }
  };
  $.fn.fdatepicker = function (option) {
    var args = Array.apply(void 0, arguments);
    args.shift();
    return this.each(function () {
      var $this = $(this),
        data = $this.data("datepicker"),
        options = _typeof(option) === "object" && option;
      if (!data) {
        $this.data("datepicker", data = new Datepicker(this, $.extend({}, $.fn.fdatepicker.defaults, options)));
      }
      if (typeof option === "string" && typeof data[option] === "function") {
        var _data;
        (_data = data)[option].apply(_data, _toConsumableArray(args));
      }
    });
  };
  $.fn.fdatepicker.defaults = {
    onRender: function onRender(date) {
      return "";
    }
  };
  $.fn.fdatepicker.Constructor = Datepicker;
  var dates = $.fn.fdatepicker.dates = {
    "en": {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      titleFormat: "MM yyyy"
    }
  };
  var DPGlobal = {
    modes: [{
      clsName: "minutes",
      navFnc: "Hours",
      navStep: 1
    }, {
      clsName: "hours",
      navFnc: "Date",
      navStep: 1
    }, {
      clsName: "days",
      navFnc: "Month",
      navStep: 1
    }, {
      clsName: "months",
      navFnc: "FullYear",
      navStep: 1
    }, {
      clsName: "years",
      navFnc: "FullYear",
      navStep: 10
    }],
    isLeapYear: function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    getDaysInMonth: function getDaysInMonth(year, month) {
      return [31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },
    validParts: /hh?|ii?|ss?|dd?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(format) {
      // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway
      var separators = format.replace(this.validParts, "\0").split("\0"),
        parts = format.match(this.validParts);
      if (!separators || !separators.length || !parts || parts.length === 0) {
        throw new Error("Invalid date format.");
      }
      this.formatText = format;
      return {
        separators: separators,
        parts: parts
      };
    },
    parseDate: function parseDate(date, format, language) {
      if (date instanceof Date) {
        return new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
        format = this.parseFormat("yyyy-mm-dd");
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
        format = this.parseFormat("yyyy-mm-dd hh:ii");
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
        format = this.parseFormat("yyyy-mm-dd hh:ii:ss");
      }
      if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
        var part_re = /([-+]\d+)([dmwy])/,
          parts = date.match(/([-+]\d+)([dmwy])/g),
          part,
          dir;
        date = new Date();
        for (var i = 0; i < parts.length; i++) {
          part = part_re.exec(parts[i]);
          dir = parseInt(part[1]);
          switch (part[2]) {
            case "d":
              date.setUTCDate(date.getUTCDate() + dir);
              break;
            case "m":
              date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
              break;
            case "w":
              date.setUTCDate(date.getUTCDate() + dir * 7);
              break;
            case "y":
              date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
              break;
          }
        }
        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
      }
      var parts = date && date.match(this.nonpunctuation) || [],
        date = new Date(),
        parsed = {},
        setters_order = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
        setters_map = {
          hh: function hh(d, v) {
            return d.setUTCHours(v);
          },
          h: function h(d, v) {
            return d.setUTCHours(v);
          },
          ii: function ii(d, v) {
            return d.setUTCMinutes(v);
          },
          i: function i(d, v) {
            return d.setUTCMinutes(v);
          },
          ss: function ss(d, v) {
            return d.setUTCSeconds(v);
          },
          s: function s(d, v) {
            return d.setUTCSeconds(v);
          },
          yyyy: function yyyy(d, v) {
            return d.setUTCFullYear(v);
          },
          yy: function yy(d, v) {
            return d.setUTCFullYear(2000 + v);
          },
          m: function m(d, v) {
            v -= 1;
            while (v < 0) {
              v += 12;
            }
            v %= 12;
            d.setUTCMonth(v);
            while (d.getUTCMonth() != v) {
              d.setUTCDate(d.getUTCDate() - 1);
            }
            return d;
          },
          d: function d(_d, v) {
            return _d.setUTCDate(v);
          }
        },
        val,
        filtered,
        part;
      setters_map.M = setters_map.MM = setters_map.mm = setters_map.m;
      setters_map.dd = setters_map.d;
      date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0); // date.getHours(), date.getMinutes(), date.getSeconds());
      if (parts.length == format.parts.length) {
        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = format.parts[i];
          if (isNaN(val)) {
            switch (part) {
              case "MM":
                filtered = $(dates[language].months).filter(function () {
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;
              case "M":
                filtered = $(dates[language].monthsShort).filter(function () {
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
            }
          }
          parsed[part] = val;
        }
        for (var i = 0, s; i < setters_order.length; i++) {
          s = setters_order[i];
          if (s in parsed && !isNaN(parsed[s])) {
            setters_map[s](date, parsed[s]);
          }
        }
      }
      return date;
    },
    formatDate: function formatDate(date, format, language) {
      if (date == null) {
        return "";
      }
      var val = {
        h: date.getUTCHours(),
        i: date.getUTCMinutes(),
        s: date.getUTCSeconds(),
        d: date.getUTCDate(),
        m: date.getUTCMonth() + 1,
        M: dates[language].monthsShort[date.getUTCMonth()],
        MM: dates[language].months[date.getUTCMonth()],
        yy: date.getUTCFullYear().toString().substring(2),
        yyyy: date.getUTCFullYear()
      };
      val.hh = (val.h < 10 ? "0" : "") + val.h;
      val.ii = (val.i < 10 ? "0" : "") + val.i;
      val.ss = (val.s < 10 ? "0" : "") + val.s;
      val.dd = (val.d < 10 ? "0" : "") + val.d;
      val.mm = (val.m < 10 ? "0" : "") + val.m;
      var date = [],
        seps = $.extend([], format.separators);
      for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
        if (seps.length) {
          date.push(seps.shift());
        }
        date.push(val[format.parts[i]]);
      }
      return date.join("");
    },
    convertViewMode: function convertViewMode(viewMode) {
      switch (viewMode) {
        case 4:
        case "decade":
          viewMode = 4;
          break;
        case 3:
        case "year":
          viewMode = 3;
          break;
        case 2:
        case "month":
          viewMode = 2;
          break;
        case 1:
        case "day":
          viewMode = 1;
          break;
        case 0:
        case "hour":
          viewMode = 0;
          break;
      }
      return viewMode;
    },
    headTemplate: function headTemplate(leftArrow, rightArrow) {
      return "".concat("<thead>" + "<tr>" + '<th class="prev">').concat(leftArrow, "</th>") + "<th colspan=\"5\" class=\"date-switch\"></th>" + "<th class=\"next\">".concat(rightArrow, "</th>") + "</tr>" + "</thead>";
    },
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
  };
  DPGlobal.template = function (leftArrow, rightArrow, closeIcon) {
    return "".concat('<div class="datepicker">' + '<div class="datepicker-minutes">' + '<table class=" table-condensed">').concat(DPGlobal.headTemplate(leftArrow, rightArrow)).concat(DPGlobal.contTemplate).concat(DPGlobal.footTemplate, "</table>") + "</div>" + "<div class=\"datepicker-hours\">" + "<table class=\" table-condensed\">".concat(DPGlobal.headTemplate(leftArrow, rightArrow)).concat(DPGlobal.contTemplate).concat(DPGlobal.footTemplate, "</table>") + "</div>" + "<div class=\"datepicker-days\">" + "<table class=\" table-condensed\">".concat(DPGlobal.headTemplate(leftArrow, rightArrow), "<tbody></tbody>").concat(DPGlobal.footTemplate, "</table>") + "</div>" + "<div class=\"datepicker-months\">" + "<table class=\"table-condensed\">".concat(DPGlobal.headTemplate(leftArrow, rightArrow)).concat(DPGlobal.contTemplate).concat(DPGlobal.footTemplate, "</table>") + "</div>" + "<div class=\"datepicker-years\">" + "<table class=\"table-condensed\">".concat(DPGlobal.headTemplate(leftArrow, rightArrow)).concat(DPGlobal.contTemplate).concat(DPGlobal.footTemplate, "</table>") + "</div>" + "<a class=\"button datepicker-close tiny alert right\" style=\"width:auto;\">".concat(closeIcon, "</a>") + "</div>";
  };
  $.fn.fdatepicker.DPGlobal = DPGlobal;
}(window.jQuery);

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vendor/tribute.js":
/*!*************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vendor/tribute.js ***!
  \*************************************************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
/* eslint-disable */

/*
  Modified file from the original tribute.js
  Adding inside click event the conditional if the li element has no disabled-tribute-element class name. if true, then it must continue with normal behaviour.
*/
(function (f) {
  if (( false ? 0 : _typeof(exports)) === "object" && "object" !== "undefined") {
    module.exports = f();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var g; }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = undefined;
            if (!f && c) return require(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }
          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }
        return n[i].exports;
      }
      for (var u = undefined, i = 0; i < t.length; i++) {
        o(t[i]);
      }
      return o;
    }
    return r;
  }()({
    1: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      require("./utils");
      var _TributeEvents = _interopRequireDefault(require("./TributeEvents"));
      var _TributeMenuEvents = _interopRequireDefault(require("./TributeMenuEvents"));
      var _TributeRange = _interopRequireDefault(require("./TributeRange"));
      var _TributeSearch = _interopRequireDefault(require("./TributeSearch"));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
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
      var Tribute = /*#__PURE__*/
      function () {
        function Tribute(_ref) {
          var _this = this;
          var _ref$values = _ref.values,
            values = _ref$values === void 0 ? null : _ref$values,
            _ref$iframe = _ref.iframe,
            iframe = _ref$iframe === void 0 ? null : _ref$iframe,
            _ref$selectClass = _ref.selectClass,
            selectClass = _ref$selectClass === void 0 ? 'highlight' : _ref$selectClass,
            _ref$trigger = _ref.trigger,
            trigger = _ref$trigger === void 0 ? '@' : _ref$trigger,
            _ref$autocompleteMode = _ref.autocompleteMode,
            autocompleteMode = _ref$autocompleteMode === void 0 ? false : _ref$autocompleteMode,
            _ref$selectTemplate = _ref.selectTemplate,
            selectTemplate = _ref$selectTemplate === void 0 ? null : _ref$selectTemplate,
            _ref$menuItemTemplate = _ref.menuItemTemplate,
            menuItemTemplate = _ref$menuItemTemplate === void 0 ? null : _ref$menuItemTemplate,
            _ref$lookup = _ref.lookup,
            lookup = _ref$lookup === void 0 ? 'key' : _ref$lookup,
            _ref$fillAttr = _ref.fillAttr,
            fillAttr = _ref$fillAttr === void 0 ? 'value' : _ref$fillAttr,
            _ref$collection = _ref.collection,
            collection = _ref$collection === void 0 ? null : _ref$collection,
            _ref$menuContainer = _ref.menuContainer,
            menuContainer = _ref$menuContainer === void 0 ? null : _ref$menuContainer,
            _ref$noMatchTemplate = _ref.noMatchTemplate,
            noMatchTemplate = _ref$noMatchTemplate === void 0 ? null : _ref$noMatchTemplate,
            _ref$requireLeadingSp = _ref.requireLeadingSpace,
            requireLeadingSpace = _ref$requireLeadingSp === void 0 ? true : _ref$requireLeadingSp,
            _ref$allowSpaces = _ref.allowSpaces,
            allowSpaces = _ref$allowSpaces === void 0 ? false : _ref$allowSpaces,
            _ref$replaceTextSuffi = _ref.replaceTextSuffix,
            replaceTextSuffix = _ref$replaceTextSuffi === void 0 ? null : _ref$replaceTextSuffi,
            _ref$positionMenu = _ref.positionMenu,
            positionMenu = _ref$positionMenu === void 0 ? true : _ref$positionMenu,
            _ref$spaceSelectsMatc = _ref.spaceSelectsMatch,
            spaceSelectsMatch = _ref$spaceSelectsMatc === void 0 ? false : _ref$spaceSelectsMatc,
            _ref$searchOpts = _ref.searchOpts,
            searchOpts = _ref$searchOpts === void 0 ? {} : _ref$searchOpts,
            _ref$menuItemLimit = _ref.menuItemLimit,
            menuItemLimit = _ref$menuItemLimit === void 0 ? null : _ref$menuItemLimit;
          _classCallCheck(this, Tribute);
          this.autocompleteMode = autocompleteMode;
          this.menuSelected = 0;
          this.current = {};
          this.inputEvent = false;
          this.isActive = false;
          this.menuContainer = menuContainer;
          this.allowSpaces = allowSpaces;
          this.replaceTextSuffix = replaceTextSuffix;
          this.positionMenu = positionMenu;
          this.hasTrailingSpace = false;
          this.spaceSelectsMatch = spaceSelectsMatch;
          if (this.autocompleteMode) {
            trigger = '';
            allowSpaces = false;
          }
          if (values) {
            this.collection = [{
              // symbol that starts the lookup
              trigger: trigger,
              // is it wrapped in an iframe
              iframe: iframe,
              // class applied to selected item
              selectClass: selectClass,
              // function called on select that retuns the content to insert
              selectTemplate: (selectTemplate || Tribute.defaultSelectTemplate).bind(this),
              // function called that returns content for an item
              menuItemTemplate: (menuItemTemplate || Tribute.defaultMenuItemTemplate).bind(this),
              // function called when menu is empty, disables hiding of menu.
              noMatchTemplate: function (t) {
                if (typeof t === 'function') {
                  return t.bind(_this);
                }
                return noMatchTemplate || function () {
                  return '';
                }.bind(_this);
              }(noMatchTemplate),
              // column to search against in the object
              lookup: lookup,
              // column that contains the content to insert by default
              fillAttr: fillAttr,
              // array of objects or a function returning an array of objects
              values: values,
              requireLeadingSpace: requireLeadingSpace,
              searchOpts: searchOpts,
              menuItemLimit: menuItemLimit
            }];
          } else if (collection) {
            if (this.autocompleteMode) console.warn('Tribute in autocomplete mode does not work for collections');
            this.collection = collection.map(function (item) {
              return {
                trigger: item.trigger || trigger,
                iframe: item.iframe || iframe,
                selectClass: item.selectClass || selectClass,
                selectTemplate: (item.selectTemplate || Tribute.defaultSelectTemplate).bind(_this),
                menuItemTemplate: (item.menuItemTemplate || Tribute.defaultMenuItemTemplate).bind(_this),
                // function called when menu is empty, disables hiding of menu.
                noMatchTemplate: function (t) {
                  if (typeof t === 'function') {
                    return t.bind(_this);
                  }
                  return null;
                }(noMatchTemplate),
                lookup: item.lookup || lookup,
                fillAttr: item.fillAttr || fillAttr,
                values: item.values,
                requireLeadingSpace: item.requireLeadingSpace,
                searchOpts: item.searchOpts || searchOpts,
                menuItemLimit: item.menuItemLimit || menuItemLimit
              };
            });
          } else {
            throw new Error('[Tribute] No collection specified.');
          }
          new _TributeRange["default"](this);
          new _TributeEvents["default"](this);
          new _TributeMenuEvents["default"](this);
          new _TributeSearch["default"](this);
        }
        _createClass(Tribute, [{
          key: "triggers",
          value: function triggers() {
            return this.collection.map(function (config) {
              return config.trigger;
            });
          }
        }, {
          key: "attach",
          value: function attach(el) {
            if (!el) {
              throw new Error('[Tribute] Must pass in a DOM node or NodeList.');
            } // Check if it is a jQuery collection

            if (typeof jQuery !== 'undefined' && el instanceof jQuery) {
              el = el.get();
            } // Is el an Array/Array-like object?

            if (el.constructor === NodeList || el.constructor === HTMLCollection || el.constructor === Array) {
              var length = el.length;
              for (var i = 0; i < length; ++i) {
                this._attach(el[i]);
              }
            } else {
              this._attach(el);
            }
          }
        }, {
          key: "_attach",
          value: function _attach(el) {
            if (el.hasAttribute('data-tribute')) {
              console.warn('Tribute was already bound to ' + el.nodeName);
            }
            this.ensureEditable(el);
            this.events.bind(el);
            el.setAttribute('data-tribute', true);
          }
        }, {
          key: "ensureEditable",
          value: function ensureEditable(element) {
            if (Tribute.inputTypes().indexOf(element.nodeName) === -1) {
              if (element.contentEditable) {
                element.contentEditable = true;
              } else {
                throw new Error('[Tribute] Cannot bind to ' + element.nodeName);
              }
            }
          }
        }, {
          key: "createMenu",
          value: function createMenu() {
            var wrapper = this.range.getDocument().createElement('div'),
              ul = this.range.getDocument().createElement('ul');
            wrapper.className = 'tribute-container';
            wrapper.setAttribute('aria-expanded', 'true');
            ul.setAttribute('id', 'results');
            wrapper.appendChild(ul);
            if (this.menuContainer) {
              return this.menuContainer.appendChild(wrapper);
            }
            return this.range.getDocument().body.appendChild(wrapper);
          }
        }, {
          key: "showMenuFor",
          value: function showMenuFor(element, scrollTo) {
            var _this2 = this;

            // Only proceed if menu isn't already shown for the current element & mentionText
            if (this.isActive && this.current.element === element && this.current.mentionText === this.currentMentionTextSnapshot) {
              return;
            }
            this.currentMentionTextSnapshot = this.current.mentionText; // create the menu if it doesn't exist.

            if (!this.menu) {
              this.menu = this.createMenu();
              element.tributeMenu = this.menu;
              this.menuEvents.bind(this.menu);
            }
            this.isActive = true;
            this.menuSelected = 0;
            if (!this.current.mentionText) {
              this.current.mentionText = '';
            }
            var processValues = function processValues(values) {
              // Tribute may not be active any more by the time the value callback returns
              if (!_this2.isActive) {
                return;
              }
              var items = _this2.search.filter(_this2.current.mentionText, values, {
                pre: _this2.current.collection.searchOpts.pre || '<span>',
                post: _this2.current.collection.searchOpts.post || '</span>',
                skip: _this2.current.collection.searchOpts.skip,
                extract: function extract(el) {
                  if (typeof _this2.current.collection.lookup === 'string') {
                    return el[_this2.current.collection.lookup];
                  } else if (typeof _this2.current.collection.lookup === 'function') {
                    return _this2.current.collection.lookup(el, _this2.current.mentionText);
                  } else {
                    throw new Error('Invalid lookup attribute, lookup must be string or function.');
                  }
                }
              });
              if (_this2.current.collection.menuItemLimit) {
                items = items.slice(0, _this2.current.collection.menuItemLimit);
              }
              _this2.current.filteredItems = items;
              var ul = _this2.menu.querySelector('ul');
              _this2.range.positionMenuAtCaret(scrollTo);
              if (!items.length) {
                var noMatchEvent = new CustomEvent('tribute-no-match', {
                  detail: _this2.menu
                });
                _this2.current.element.dispatchEvent(noMatchEvent);
                if (typeof _this2.current.collection.noMatchTemplate === 'function' && !_this2.current.collection.noMatchTemplate() || !_this2.current.collection.noMatchTemplate) {
                  _this2.hideMenu();
                } else {
                  typeof _this2.current.collection.noMatchTemplate === 'function' ? ul.innerHTML = _this2.current.collection.noMatchTemplate() : ul.innerHTML = _this2.current.collection.noMatchTemplate;
                }
                return;
              }
              ul.innerHTML = '';
              var fragment = _this2.range.getDocument().createDocumentFragment();
              items.forEach(function (item, index) {
                var li = _this2.range.getDocument().createElement('li');
                li.setAttribute('role', 'option');
                li.setAttribute('data-index', index);
                li.addEventListener('mousemove', function (e) {
                  var _this2$_findLiTarget = _this2._findLiTarget(e.target),
                    _this2$_findLiTarget2 = _slicedToArray(_this2$_findLiTarget, 2),
                    li = _this2$_findLiTarget2[0],
                    index = _this2$_findLiTarget2[1];
                  if (e.movementY !== 0) {
                    _this2.events.setActiveLi(index);
                  }
                });
                if (_this2.menuSelected === index) {
                  li.className = _this2.current.collection.selectClass;
                }
                li.innerHTML = _this2.current.collection.menuItemTemplate(item);
                fragment.appendChild(li);
              });
              ul.appendChild(fragment);
            };
            if (typeof this.current.collection.values === 'function') {
              this.current.collection.values(this.current.mentionText, processValues);
            } else {
              processValues(this.current.collection.values);
            }
          }
        }, {
          key: "_findLiTarget",
          value: function _findLiTarget(el) {
            if (!el) return [];
            var index = el.getAttribute('data-index');
            return !index ? this._findLiTarget(el.parentNode) : [el, index];
          }
        }, {
          key: "showMenuForCollection",
          value: function showMenuForCollection(element, collectionIndex) {
            if (element !== document.activeElement) {
              this.placeCaretAtEnd(element);
            }
            this.current.collection = this.collection[collectionIndex || 0];
            this.current.externalTrigger = true;
            this.current.element = element;
            if (element.isContentEditable) this.insertTextAtCursor(this.current.collection.trigger);else this.insertAtCaret(element, this.current.collection.trigger);
            this.showMenuFor(element);
          } // TODO: make sure this works for inputs/textareas
        }, {
          key: "placeCaretAtEnd",
          value: function placeCaretAtEnd(el) {
            el.focus();
            if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
              var range = document.createRange();
              range.selectNodeContents(el);
              range.collapse(false);
              var sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            } else if (typeof document.body.createTextRange != "undefined") {
              var textRange = document.body.createTextRange();
              textRange.moveToElementText(el);
              textRange.collapse(false);
              textRange.select();
            }
          } // for contenteditable
        }, {
          key: "insertTextAtCursor",
          value: function insertTextAtCursor(text) {
            var sel, range, html;
            sel = window.getSelection();
            range = sel.getRangeAt(0);
            range.deleteContents();
            var textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.selectNodeContents(textNode);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
          } // for regular inputs
        }, {
          key: "insertAtCaret",
          value: function insertAtCaret(textarea, text) {
            var scrollPos = textarea.scrollTop;
            var caretPos = textarea.selectionStart;
            var front = textarea.value.substring(0, caretPos);
            var back = textarea.value.substring(textarea.selectionEnd, textarea.value.length);
            textarea.value = front + text + back;
            caretPos = caretPos + text.length;
            textarea.selectionStart = caretPos;
            textarea.selectionEnd = caretPos;
            textarea.focus();
            textarea.scrollTop = scrollPos;
          }
        }, {
          key: "hideMenu",
          value: function hideMenu() {
            if (this.menu) {
              this.menu.style.cssText = 'display: none;';
              this.isActive = false;
              this.menuSelected = 0;
              this.current = {};
            }
          }
        }, {
          key: "selectItemAtIndex",
          value: function selectItemAtIndex(index, originalEvent) {
            index = parseInt(index);
            if (typeof index !== 'number' || isNaN(index)) return;
            var item = this.current.filteredItems[index];
            var content = this.current.collection.selectTemplate(item);
            if (content !== null) this.replaceText(content, originalEvent, item);
          }
        }, {
          key: "replaceText",
          value: function replaceText(content, originalEvent, item) {
            this.range.replaceTriggerText(content, true, true, originalEvent, item);
          }
        }, {
          key: "_append",
          value: function _append(collection, newValues, replace) {
            if (typeof collection.values === 'function') {
              throw new Error('Unable to append to values, as it is a function.');
            } else if (!replace) {
              collection.values = collection.values.concat(newValues);
            } else {
              collection.values = newValues;
            }
          }
        }, {
          key: "append",
          value: function append(collectionIndex, newValues, replace) {
            var index = parseInt(collectionIndex);
            if (typeof index !== 'number') throw new Error('please provide an index for the collection to update.');
            var collection = this.collection[index];
            this._append(collection, newValues, replace);
          }
        }, {
          key: "appendCurrent",
          value: function appendCurrent(newValues, replace) {
            if (this.isActive) {
              this._append(this.current.collection, newValues, replace);
            } else {
              throw new Error('No active state. Please use append instead and pass an index.');
            }
          }
        }, {
          key: "detach",
          value: function detach(el) {
            if (!el) {
              throw new Error('[Tribute] Must pass in a DOM node or NodeList.');
            } // Check if it is a jQuery collection

            if (typeof jQuery !== 'undefined' && el instanceof jQuery) {
              el = el.get();
            } // Is el an Array/Array-like object?

            if (el.constructor === NodeList || el.constructor === HTMLCollection || el.constructor === Array) {
              var length = el.length;
              for (var i = 0; i < length; ++i) {
                this._detach(el[i]);
              }
            } else {
              this._detach(el);
            }
          }
        }, {
          key: "_detach",
          value: function _detach(el) {
            var _this3 = this;
            this.events.unbind(el);
            if (el.tributeMenu) {
              this.menuEvents.unbind(el.tributeMenu);
            }
            setTimeout(function () {
              el.removeAttribute('data-tribute');
              _this3.isActive = false;
              if (el.tributeMenu) {
                el.tributeMenu.remove();
              }
            });
          }
        }], [{
          key: "defaultSelectTemplate",
          value: function defaultSelectTemplate(item) {
            if (typeof item === 'undefined') return null;
            if (this.range.isContentEditable(this.current.element)) {
              return '<span class="tribute-mention">' + (this.current.collection.trigger + item.original[this.current.collection.fillAttr]) + '</span>';
            }
            return this.current.collection.trigger + item.original[this.current.collection.fillAttr];
          }
        }, {
          key: "defaultMenuItemTemplate",
          value: function defaultMenuItemTemplate(matchItem) {
            return matchItem.string;
          }
        }, {
          key: "inputTypes",
          value: function inputTypes() {
            return ['TEXTAREA', 'INPUT'];
          }
        }]);
        return Tribute;
      }();
      var _default = Tribute;
      exports["default"] = _default;
      module.exports = exports["default"];
    }, {
      "./TributeEvents": 2,
      "./TributeMenuEvents": 3,
      "./TributeRange": 4,
      "./TributeSearch": 5,
      "./utils": 7
    }],
    2: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
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
      var TributeEvents = /*#__PURE__*/
      function () {
        function TributeEvents(tribute) {
          _classCallCheck(this, TributeEvents);
          this.tribute = tribute;
          this.tribute.events = this;
        }
        _createClass(TributeEvents, [{
          key: "bind",
          value: function bind(element) {
            element.boundKeydown = this.keydown.bind(element, this);
            element.boundKeyup = this.keyup.bind(element, this);
            element.boundInput = this.input.bind(element, this);
            element.addEventListener('keydown', element.boundKeydown, false);
            element.addEventListener('keyup', element.boundKeyup, false);
            element.addEventListener('input', element.boundInput, false);
          }
        }, {
          key: "unbind",
          value: function unbind(element) {
            element.removeEventListener('keydown', element.boundKeydown, false);
            element.removeEventListener('keyup', element.boundKeyup, false);
            element.removeEventListener('input', element.boundInput, false);
            delete element.boundKeydown;
            delete element.boundKeyup;
            delete element.boundInput;
          }
        }, {
          key: "keydown",
          value: function keydown(instance, event) {
            if (instance.shouldDeactivate(event)) {
              instance.tribute.isActive = false;
              instance.tribute.hideMenu();
            }
            var element = this;
            instance.commandEvent = false;
            TributeEvents.keys().forEach(function (o) {
              if (o.key === event.keyCode) {
                instance.commandEvent = true;
                instance.callbacks()[o.value.toLowerCase()](event, element);
              }
            });
          }
        }, {
          key: "input",
          value: function input(instance, event) {
            instance.inputEvent = true;
            instance.keyup.call(this, instance, event);
          }
        }, {
          key: "click",
          value: function click(instance, event) {
            var tribute = instance.tribute;
            if (tribute.menu && tribute.menu.contains(event.target)) {
              var li = event.target;
              event.preventDefault();
              event.stopPropagation();
              while (li.nodeName.toLowerCase() !== 'li') {
                li = li.parentNode;
                if (!li || li === tribute.menu) {
                  throw new Error('cannot find the <li> container for the click');
                }
              }
              if (li.getElementsByClassName("disabled-tribute-element")[0] == undefined) {
                tribute.selectItemAtIndex(li.getAttribute('data-index'), event);
                tribute.hideMenu(); // TODO: should fire with externalTrigger and target is outside of menu
              }
            } else if (tribute.current.element && !tribute.current.externalTrigger) {
              tribute.current.externalTrigger = false;
              setTimeout(function () {
                return tribute.hideMenu();
              });
            }
          }
        }, {
          key: "keyup",
          value: function keyup(instance, event) {
            if (instance.inputEvent) {
              instance.inputEvent = false;
            }
            instance.updateSelection(this);
            if (event.keyCode === 27) return;
            if (!instance.tribute.allowSpaces && instance.tribute.hasTrailingSpace) {
              instance.tribute.hasTrailingSpace = false;
              instance.commandEvent = true;
              instance.callbacks()["space"](event, this);
              return;
            }
            if (!instance.tribute.isActive) {
              if (instance.tribute.autocompleteMode) {
                instance.callbacks().triggerChar(event, this, '');
              } else {
                var keyCode = instance.getKeyCode(instance, this, event);
                if (isNaN(keyCode) || !keyCode) return;
                var trigger = instance.tribute.triggers().find(function (trigger) {
                  return trigger.charCodeAt(0) === keyCode;
                });
                if (typeof trigger !== 'undefined') {
                  instance.callbacks().triggerChar(event, this, trigger);
                }
              }
            }
            if ((instance.tribute.current.trigger || instance.tribute.autocompleteMode) && instance.commandEvent === false || instance.tribute.isActive && event.keyCode === 8) {
              instance.tribute.showMenuFor(this, true);
            }
          }
        }, {
          key: "shouldDeactivate",
          value: function shouldDeactivate(event) {
            if (!this.tribute.isActive) return false;
            if (this.tribute.current.mentionText.length === 0) {
              var eventKeyPressed = false;
              TributeEvents.keys().forEach(function (o) {
                if (event.keyCode === o.key) eventKeyPressed = true;
              });
              return !eventKeyPressed;
            }
            return false;
          }
        }, {
          key: "getKeyCode",
          value: function getKeyCode(instance, el, event) {
            var _char;
            var tribute = instance.tribute;
            var info = tribute.range.getTriggerInfo(false, tribute.hasTrailingSpace, true, tribute.allowSpaces, tribute.autocompleteMode);
            if (info) {
              return info.mentionTriggerChar.charCodeAt(0);
            } else {
              return false;
            }
          }
        }, {
          key: "updateSelection",
          value: function updateSelection(el) {
            this.tribute.current.element = el;
            var info = this.tribute.range.getTriggerInfo(false, this.tribute.hasTrailingSpace, true, this.tribute.allowSpaces, this.tribute.autocompleteMode);
            if (info) {
              this.tribute.current.selectedPath = info.mentionSelectedPath;
              this.tribute.current.mentionText = info.mentionText;
              this.tribute.current.selectedOffset = info.mentionSelectedOffset;
            }
          }
        }, {
          key: "callbacks",
          value: function callbacks() {
            var _this = this;
            return {
              triggerChar: function triggerChar(e, el, trigger) {
                var tribute = _this.tribute;
                tribute.current.trigger = trigger;
                var collectionItem = tribute.collection.find(function (item) {
                  return item.trigger === trigger;
                });
                tribute.current.collection = collectionItem;
                if (tribute.inputEvent) tribute.showMenuFor(el, true);
              },
              enter: function enter(e, el) {
                // choose selection
                if (_this.tribute.isActive && _this.tribute.current.filteredItems) {
                  e.preventDefault();
                  e.stopPropagation();
                  setTimeout(function () {
                    _this.tribute.selectItemAtIndex(_this.tribute.menuSelected, e);
                    _this.tribute.hideMenu();
                  }, 0);
                }
              },
              escape: function escape(e, el) {
                if (_this.tribute.isActive) {
                  e.preventDefault();
                  e.stopPropagation();
                  _this.tribute.isActive = false;
                  _this.tribute.hideMenu();
                }
              },
              tab: function tab(e, el) {
                // choose first match
                _this.callbacks().enter(e, el);
              },
              space: function space(e, el) {
                if (_this.tribute.isActive) {
                  if (_this.tribute.spaceSelectsMatch) {
                    _this.callbacks().enter(e, el);
                  } else if (!_this.tribute.allowSpaces) {
                    e.stopPropagation();
                    setTimeout(function () {
                      _this.tribute.hideMenu();
                      _this.tribute.isActive = false;
                    }, 0);
                  }
                }
              },
              up: function up(e, el) {
                // navigate up ul
                if (_this.tribute.isActive && _this.tribute.current.filteredItems) {
                  e.preventDefault();
                  e.stopPropagation();
                  var count = _this.tribute.current.filteredItems.length,
                    selected = _this.tribute.menuSelected;
                  if (count > selected && selected > 0) {
                    _this.tribute.menuSelected--;
                    _this.setActiveLi();
                  } else if (selected === 0) {
                    _this.tribute.menuSelected = count - 1;
                    _this.setActiveLi();
                    _this.tribute.menu.scrollTop = _this.tribute.menu.scrollHeight;
                  }
                }
              },
              down: function down(e, el) {
                // navigate down ul
                if (_this.tribute.isActive && _this.tribute.current.filteredItems) {
                  e.preventDefault();
                  e.stopPropagation();
                  var count = _this.tribute.current.filteredItems.length - 1,
                    selected = _this.tribute.menuSelected;
                  if (count > selected) {
                    _this.tribute.menuSelected++;
                    _this.setActiveLi();
                  } else if (count === selected) {
                    _this.tribute.menuSelected = 0;
                    _this.setActiveLi();
                    _this.tribute.menu.scrollTop = 0;
                  }
                }
              },
              "delete": function _delete(e, el) {
                if (_this.tribute.isActive && _this.tribute.current.mentionText.length < 1) {
                  _this.tribute.hideMenu();
                } else if (_this.tribute.isActive) {
                  _this.tribute.showMenuFor(el);
                }
              }
            };
          }
        }, {
          key: "setActiveLi",
          value: function setActiveLi(index) {
            var lis = this.tribute.menu.querySelectorAll('li'),
              length = lis.length >>> 0;
            if (index) this.tribute.menuSelected = parseInt(index);
            for (var i = 0; i < length; i++) {
              var li = lis[i];
              if (i === this.tribute.menuSelected) {
                li.classList.add(this.tribute.current.collection.selectClass);
                var liClientRect = li.getBoundingClientRect();
                var menuClientRect = this.tribute.menu.getBoundingClientRect();
                if (liClientRect.bottom > menuClientRect.bottom) {
                  var scrollDistance = liClientRect.bottom - menuClientRect.bottom;
                  this.tribute.menu.scrollTop += scrollDistance;
                } else if (liClientRect.top < menuClientRect.top) {
                  var _scrollDistance = menuClientRect.top - liClientRect.top;
                  this.tribute.menu.scrollTop -= _scrollDistance;
                }
              } else {
                li.classList.remove(this.tribute.current.collection.selectClass);
              }
            }
          }
        }, {
          key: "getFullHeight",
          value: function getFullHeight(elem, includeMargin) {
            var height = elem.getBoundingClientRect().height;
            if (includeMargin) {
              var style = elem.currentStyle || window.getComputedStyle(elem);
              return height + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            }
            return height;
          }
        }], [{
          key: "keys",
          value: function keys() {
            return [{
              key: 9,
              value: 'TAB'
            }, {
              key: 8,
              value: 'DELETE'
            }, {
              key: 13,
              value: 'ENTER'
            }, {
              key: 27,
              value: 'ESCAPE'
            }, {
              key: 32,
              value: 'SPACE'
            }, {
              key: 38,
              value: 'UP'
            }, {
              key: 40,
              value: 'DOWN'
            }];
          }
        }]);
        return TributeEvents;
      }();
      var _default = TributeEvents;
      exports["default"] = _default;
      module.exports = exports["default"];
    }, {}],
    3: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
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
      var TributeMenuEvents = /*#__PURE__*/
      function () {
        function TributeMenuEvents(tribute) {
          _classCallCheck(this, TributeMenuEvents);
          this.tribute = tribute;
          this.tribute.menuEvents = this;
          this.menu = this.tribute.menu;
        }
        _createClass(TributeMenuEvents, [{
          key: "bind",
          value: function bind(menu) {
            var _this = this;
            this.menuClickEvent = this.tribute.events.click.bind(null, this);
            this.menuContainerScrollEvent = this.debounce(function () {
              if (_this.tribute.isActive) {
                _this.tribute.showMenuFor(_this.tribute.current.element, false);
              }
            }, 300, false);
            this.windowResizeEvent = this.debounce(function () {
              if (_this.tribute.isActive) {
                _this.tribute.range.positionMenuAtCaret(true);
              }
            }, 300, false); // fixes IE11 issues with mousedown

            this.tribute.range.getDocument().addEventListener('MSPointerDown', this.menuClickEvent, false);
            this.tribute.range.getDocument().addEventListener('mousedown', this.menuClickEvent, false);
            window.addEventListener('resize', this.windowResizeEvent);
            if (this.menuContainer) {
              this.menuContainer.addEventListener('scroll', this.menuContainerScrollEvent, false);
            } else {
              window.addEventListener('scroll', this.menuContainerScrollEvent);
            }
          }
        }, {
          key: "unbind",
          value: function unbind(menu) {
            this.tribute.range.getDocument().removeEventListener('mousedown', this.menuClickEvent, false);
            this.tribute.range.getDocument().removeEventListener('MSPointerDown', this.menuClickEvent, false);
            window.removeEventListener('resize', this.windowResizeEvent);
            if (this.menuContainer) {
              this.menuContainer.removeEventListener('scroll', this.menuContainerScrollEvent, false);
            } else {
              window.removeEventListener('scroll', this.menuContainerScrollEvent);
            }
          }
        }, {
          key: "debounce",
          value: function debounce(func, wait, immediate) {
            var _this2 = this,
              _arguments = arguments;
            var timeout;
            return function () {
              var context = _this2,
                args = _arguments;
              var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
              };
              var callNow = immediate && !timeout;
              clearTimeout(timeout);
              timeout = setTimeout(later, wait);
              if (callNow) func.apply(context, args);
            };
          }
        }]);
        return TributeMenuEvents;
      }();
      var _default = TributeMenuEvents;
      exports["default"] = _default;
      module.exports = exports["default"];
    }, {}],
    4: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
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

      // Thanks to https://github.com/jeff-collins/ment.io
      var TributeRange = /*#__PURE__*/
      function () {
        function TributeRange(tribute) {
          _classCallCheck(this, TributeRange);
          this.tribute = tribute;
          this.tribute.range = this;
        }
        _createClass(TributeRange, [{
          key: "getDocument",
          value: function getDocument() {
            var iframe;
            if (this.tribute.current.collection) {
              iframe = this.tribute.current.collection.iframe;
            }
            if (!iframe) {
              return document;
            }
            return iframe.contentWindow.document;
          }
        }, {
          key: "positionMenuAtCaret",
          value: function positionMenuAtCaret(scrollTo) {
            var _this = this;
            var context = this.tribute.current,
              coordinates;
            var info = this.getTriggerInfo(false, this.tribute.hasTrailingSpace, true, this.tribute.allowSpaces, this.tribute.autocompleteMode);
            if (typeof info !== 'undefined') {
              if (!this.tribute.positionMenu) {
                this.tribute.menu.style.cssText = "display: block;";
                return;
              }
              if (!this.isContentEditable(context.element)) {
                coordinates = this.getTextAreaOrInputUnderlinePosition(this.tribute.current.element, info.mentionPosition);
              } else {
                coordinates = this.getContentEditableCaretPosition(info.mentionPosition);
              }
              this.tribute.menu.style.cssText = "top: ".concat(coordinates.top, "px;\n                                     left: ").concat(coordinates.left, "px;\n                                     right: ").concat(coordinates.right, "px;\n                                     bottom: ").concat(coordinates.bottom, "px;\n                                     position: absolute;\n                                     display: block;");
              if (coordinates.left === 'auto') {
                this.tribute.menu.style.left = 'auto';
              }
              if (coordinates.top === 'auto') {
                this.tribute.menu.style.top = 'auto';
              }
              if (scrollTo) this.scrollIntoView();
              window.setTimeout(function () {
                var menuDimensions = {
                  width: _this.tribute.menu.offsetWidth,
                  height: _this.tribute.menu.offsetHeight
                };
                var menuIsOffScreen = _this.isMenuOffScreen(coordinates, menuDimensions);
                var menuIsOffScreenHorizontally = window.innerWidth > menuDimensions.width && (menuIsOffScreen.left || menuIsOffScreen.right);
                var menuIsOffScreenVertically = window.innerHeight > menuDimensions.height && (menuIsOffScreen.top || menuIsOffScreen.bottom);
                if (menuIsOffScreenHorizontally || menuIsOffScreenVertically) {
                  _this.tribute.menu.style.cssText = 'display: none';
                  _this.positionMenuAtCaret(scrollTo);
                }
              }, 0);
            } else {
              this.tribute.menu.style.cssText = 'display: none';
            }
          }
        }, {
          key: "selectElement",
          value: function selectElement(targetElement, path, offset) {
            var range;
            var elem = targetElement;
            if (path) {
              for (var i = 0; i < path.length; i++) {
                elem = elem.childNodes[path[i]];
                if (elem === undefined) {
                  return;
                }
                while (elem.length < offset) {
                  offset -= elem.length;
                  elem = elem.nextSibling;
                }
                if (elem.childNodes.length === 0 && !elem.length) {
                  elem = elem.previousSibling;
                }
              }
            }
            var sel = this.getWindowSelection();
            range = this.getDocument().createRange();
            range.setStart(elem, offset);
            range.setEnd(elem, offset);
            range.collapse(true);
            try {
              sel.removeAllRanges();
            } catch (error) {}
            sel.addRange(range);
            targetElement.focus();
          }
        }, {
          key: "replaceTriggerText",
          value: function replaceTriggerText(text, requireLeadingSpace, hasTrailingSpace, originalEvent, item) {
            var info = this.getTriggerInfo(true, hasTrailingSpace, requireLeadingSpace, this.tribute.allowSpaces, this.tribute.autocompleteMode);
            if (info !== undefined) {
              var context = this.tribute.current;
              var replaceEvent = new CustomEvent('tribute-replaced', {
                detail: {
                  item: item,
                  instance: context,
                  context: info,
                  event: originalEvent
                }
              });
              if (!this.isContentEditable(context.element)) {
                var myField = this.tribute.current.element;
                var textSuffix = typeof this.tribute.replaceTextSuffix == 'string' ? this.tribute.replaceTextSuffix : ' ';
                text += textSuffix;
                var startPos = info.mentionPosition;
                var endPos = info.mentionPosition + info.mentionText.length + textSuffix.length;
                myField.value = myField.value.substring(0, startPos) + text + myField.value.substring(endPos, myField.value.length);
                myField.selectionStart = startPos + text.length;
                myField.selectionEnd = startPos + text.length;
              } else {
                // add a space to the end of the pasted text
                var _textSuffix = typeof this.tribute.replaceTextSuffix == 'string' ? this.tribute.replaceTextSuffix : '\xA0';
                text += _textSuffix;
                this.pasteHtml(text, info.mentionPosition, info.mentionPosition + info.mentionText.length + !this.tribute.autocompleteMode);
              }
              context.element.dispatchEvent(replaceEvent);
            }
          }
        }, {
          key: "pasteHtml",
          value: function pasteHtml(html, startPos, endPos) {
            var range, sel;
            sel = this.getWindowSelection();
            range = this.getDocument().createRange();
            range.setStart(sel.anchorNode, startPos);
            range.setEnd(sel.anchorNode, endPos);
            range.deleteContents();
            var el = this.getDocument().createElement('div');
            el.innerHTML = html;
            var frag = this.getDocument().createDocumentFragment(),
              node,
              lastNode;
            while (node = el.firstChild) {
              lastNode = frag.appendChild(node);
            }
            range.insertNode(frag); // Preserve the selection

            if (lastNode) {
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
            }
          }
        }, {
          key: "getWindowSelection",
          value: function getWindowSelection() {
            if (this.tribute.collection.iframe) {
              return this.tribute.collection.iframe.contentWindow.getSelection();
            }
            return window.getSelection();
          }
        }, {
          key: "getNodePositionInParent",
          value: function getNodePositionInParent(element) {
            if (element.parentNode === null) {
              return 0;
            }
            for (var i = 0; i < element.parentNode.childNodes.length; i++) {
              var node = element.parentNode.childNodes[i];
              if (node === element) {
                return i;
              }
            }
          }
        }, {
          key: "getContentEditableSelectedPath",
          value: function getContentEditableSelectedPath(ctx) {
            var sel = this.getWindowSelection();
            var selected = sel.anchorNode;
            var path = [];
            var offset;
            if (selected != null) {
              var i;
              var ce = selected.contentEditable;
              while (selected !== null && ce !== 'true') {
                i = this.getNodePositionInParent(selected);
                path.push(i);
                selected = selected.parentNode;
                if (selected !== null) {
                  ce = selected.contentEditable;
                }
              }
              path.reverse(); // getRangeAt may not exist, need alternative

              offset = sel.getRangeAt(0).startOffset;
              return {
                selected: selected,
                path: path,
                offset: offset
              };
            }
          }
        }, {
          key: "getTextPrecedingCurrentSelection",
          value: function getTextPrecedingCurrentSelection() {
            var context = this.tribute.current,
              text = '';
            if (!this.isContentEditable(context.element)) {
              var textComponent = this.tribute.current.element;
              if (textComponent) {
                var startPos = textComponent.selectionStart;
                if (textComponent.value && startPos >= 0) {
                  text = textComponent.value.substring(0, startPos);
                }
              }
            } else {
              var selectedElem = this.getWindowSelection().anchorNode;
              if (selectedElem != null) {
                var workingNodeContent = selectedElem.textContent;
                var selectStartOffset = this.getWindowSelection().getRangeAt(0).startOffset;
                if (workingNodeContent && selectStartOffset >= 0) {
                  text = workingNodeContent.substring(0, selectStartOffset);
                }
              }
            }
            return text;
          }
        }, {
          key: "getLastWordInText",
          value: function getLastWordInText(text) {
            text = text.replace(/\u00A0/g, ' '); // https://stackoverflow.com/questions/29850407/how-do-i-replace-unicode-character-u00a0-with-a-space-in-javascript

            var wordsArray = text.split(/\s+/);
            var worldsCount = wordsArray.length - 1;
            return wordsArray[worldsCount].trim();
          }
        }, {
          key: "getTriggerInfo",
          value: function getTriggerInfo(menuAlreadyActive, hasTrailingSpace, requireLeadingSpace, allowSpaces, isAutocomplete) {
            var _this2 = this;
            var ctx = this.tribute.current;
            var selected, path, offset;
            if (!this.isContentEditable(ctx.element)) {
              selected = this.tribute.current.element;
            } else {
              var selectionInfo = this.getContentEditableSelectedPath(ctx);
              if (selectionInfo) {
                selected = selectionInfo.selected;
                path = selectionInfo.path;
                offset = selectionInfo.offset;
              }
            }
            var effectiveRange = this.getTextPrecedingCurrentSelection();
            var lastWordOfEffectiveRange = this.getLastWordInText(effectiveRange);
            if (isAutocomplete) {
              return {
                mentionPosition: effectiveRange.length - lastWordOfEffectiveRange.length,
                mentionText: lastWordOfEffectiveRange,
                mentionSelectedElement: selected,
                mentionSelectedPath: path,
                mentionSelectedOffset: offset
              };
            }
            if (effectiveRange !== undefined && effectiveRange !== null) {
              var mostRecentTriggerCharPos = -1;
              var triggerChar;
              this.tribute.collection.forEach(function (config) {
                var c = config.trigger;
                var idx = config.requireLeadingSpace ? _this2.lastIndexWithLeadingSpace(effectiveRange, c) : effectiveRange.lastIndexOf(c);
                if (idx > mostRecentTriggerCharPos) {
                  mostRecentTriggerCharPos = idx;
                  triggerChar = c;
                  requireLeadingSpace = config.requireLeadingSpace;
                }
              });
              if (mostRecentTriggerCharPos >= 0 && (mostRecentTriggerCharPos === 0 || !requireLeadingSpace || /[\xA0\s]/g.test(effectiveRange.substring(mostRecentTriggerCharPos - 1, mostRecentTriggerCharPos)))) {
                var currentTriggerSnippet = effectiveRange.substring(mostRecentTriggerCharPos + 1, effectiveRange.length);
                triggerChar = effectiveRange.substring(mostRecentTriggerCharPos, mostRecentTriggerCharPos + 1);
                var firstSnippetChar = currentTriggerSnippet.substring(0, 1);
                var leadingSpace = currentTriggerSnippet.length > 0 && (firstSnippetChar === ' ' || firstSnippetChar === '\xA0');
                if (hasTrailingSpace) {
                  currentTriggerSnippet = currentTriggerSnippet.trim();
                }
                var regex = allowSpaces ? /[^\S ]/g : /[\xA0\s]/g;
                this.tribute.hasTrailingSpace = regex.test(currentTriggerSnippet);
                if (!leadingSpace && (menuAlreadyActive || !regex.test(currentTriggerSnippet))) {
                  return {
                    mentionPosition: mostRecentTriggerCharPos,
                    mentionText: currentTriggerSnippet,
                    mentionSelectedElement: selected,
                    mentionSelectedPath: path,
                    mentionSelectedOffset: offset,
                    mentionTriggerChar: triggerChar
                  };
                }
              }
            }
          }
        }, {
          key: "lastIndexWithLeadingSpace",
          value: function lastIndexWithLeadingSpace(str, _char) {
            var reversedStr = str.split('').reverse().join('');
            var index = -1;
            for (var cidx = 0, len = str.length; cidx < len; cidx++) {
              var firstChar = cidx === str.length - 1;
              var leadingSpace = /\s/.test(reversedStr[cidx + 1]);
              var match = _char === reversedStr[cidx];
              if (match && (firstChar || leadingSpace)) {
                index = str.length - 1 - cidx;
                break;
              }
            }
            return index;
          }
        }, {
          key: "isContentEditable",
          value: function isContentEditable(element) {
            return element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA';
          }
        }, {
          key: "isMenuOffScreen",
          value: function isMenuOffScreen(coordinates, menuDimensions) {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var doc = document.documentElement;
            var windowLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var windowTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            var menuTop = typeof coordinates.top === 'number' ? coordinates.top : windowTop + windowHeight - coordinates.bottom - menuDimensions.height;
            var menuRight = typeof coordinates.right === 'number' ? coordinates.right : coordinates.left + menuDimensions.width;
            var menuBottom = typeof coordinates.bottom === 'number' ? coordinates.bottom : coordinates.top + menuDimensions.height;
            var menuLeft = typeof coordinates.left === 'number' ? coordinates.left : windowLeft + windowWidth - coordinates.right - menuDimensions.width;
            return {
              top: menuTop < Math.floor(windowTop),
              right: menuRight > Math.ceil(windowLeft + windowWidth),
              bottom: menuBottom > Math.ceil(windowTop + windowHeight),
              left: menuLeft < Math.floor(windowLeft)
            };
          }
        }, {
          key: "getMenuDimensions",
          value: function getMenuDimensions() {
            // Width of the menu depends of its contents and position
            // We must check what its width would be without any obstruction
            // This way, we can achieve good positioning for flipping the menu
            var dimensions = {
              width: null,
              height: null
            };
            this.tribute.menu.style.cssText = "top: 0px;\n                                 left: 0px;\n                                 position: fixed;\n                                 display: block;\n                                 visibility; hidden;";
            dimensions.width = this.tribute.menu.offsetWidth;
            dimensions.height = this.tribute.menu.offsetHeight;
            this.tribute.menu.style.cssText = "display: none;";
            return dimensions;
          }
        }, {
          key: "getTextAreaOrInputUnderlinePosition",
          value: function getTextAreaOrInputUnderlinePosition(element, position, flipped) {
            var properties = ['direction', 'boxSizing', 'width', 'height', 'overflowX', 'overflowY', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize', 'fontSizeAdjust', 'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration', 'letterSpacing', 'wordSpacing'];
            var isFirefox = window.mozInnerScreenX !== null;
            var div = this.getDocument().createElement('div');
            div.id = 'input-textarea-caret-position-mirror-div';
            this.getDocument().body.appendChild(div);
            var style = div.style;
            var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
            style.whiteSpace = 'pre-wrap';
            if (element.nodeName !== 'INPUT') {
              style.wordWrap = 'break-word';
            } // position off-screen

            style.position = 'absolute';
            style.visibility = 'hidden'; // transfer the element's properties to the div

            properties.forEach(function (prop) {
              style[prop] = computed[prop];
            });
            if (isFirefox) {
              style.width = "".concat(parseInt(computed.width) - 2, "px");
              if (element.scrollHeight > parseInt(computed.height)) style.overflowY = 'scroll';
            } else {
              style.overflow = 'hidden';
            }
            div.textContent = element.value.substring(0, position);
            if (element.nodeName === 'INPUT') {
              div.textContent = div.textContent.replace(/\s/g, ' ');
            }
            var span = this.getDocument().createElement('span');
            span.textContent = element.value.substring(position) || '.';
            div.appendChild(span);
            var rect = element.getBoundingClientRect();
            var doc = document.documentElement;
            var windowLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var windowTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            var top = 0;
            var left = 0;
            if (this.menuContainerIsBody) {
              top = rect.top;
              left = rect.left;
            }
            var coordinates = {
              top: top + windowTop + span.offsetTop + parseInt(computed.borderTopWidth) + parseInt(computed.fontSize) - element.scrollTop,
              left: left + windowLeft + span.offsetLeft + parseInt(computed.borderLeftWidth)
            };
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var menuDimensions = this.getMenuDimensions();
            var menuIsOffScreen = this.isMenuOffScreen(coordinates, menuDimensions);
            if (menuIsOffScreen.right) {
              coordinates.right = windowWidth - coordinates.left;
              coordinates.left = 'auto';
            }
            var parentHeight = this.tribute.menuContainer ? this.tribute.menuContainer.offsetHeight : this.getDocument().body.offsetHeight;
            if (menuIsOffScreen.bottom) {
              var parentRect = this.tribute.menuContainer ? this.tribute.menuContainer.getBoundingClientRect() : this.getDocument().body.getBoundingClientRect();
              var scrollStillAvailable = parentHeight - (windowHeight - parentRect.top);
              coordinates.bottom = scrollStillAvailable + (windowHeight - rect.top - span.offsetTop);
              coordinates.top = 'auto';
            }
            menuIsOffScreen = this.isMenuOffScreen(coordinates, menuDimensions);
            if (menuIsOffScreen.left) {
              coordinates.left = windowWidth > menuDimensions.width ? windowLeft + windowWidth - menuDimensions.width : windowLeft;
              delete coordinates.right;
            }
            if (menuIsOffScreen.top) {
              coordinates.top = windowHeight > menuDimensions.height ? windowTop + windowHeight - menuDimensions.height : windowTop;
              delete coordinates.bottom;
            }
            this.getDocument().body.removeChild(div);
            return coordinates;
          }
        }, {
          key: "getContentEditableCaretPosition",
          value: function getContentEditableCaretPosition(selectedNodePosition) {
            var markerTextChar = '﻿';
            var markerEl,
              markerId = "sel_".concat(new Date().getTime(), "_").concat(Math.random().toString().substr(2));
            var range;
            var sel = this.getWindowSelection();
            var prevRange = sel.getRangeAt(0);
            range = this.getDocument().createRange();
            range.setStart(sel.anchorNode, selectedNodePosition);
            range.setEnd(sel.anchorNode, selectedNodePosition);
            range.collapse(false); // Create the marker element containing a single invisible character using DOM methods and insert it

            markerEl = this.getDocument().createElement('span');
            markerEl.id = markerId;
            markerEl.appendChild(this.getDocument().createTextNode(markerTextChar));
            range.insertNode(markerEl);
            sel.removeAllRanges();
            sel.addRange(prevRange);
            var rect = markerEl.getBoundingClientRect();
            var doc = document.documentElement;
            var windowLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var windowTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            var left = 0;
            var top = 0;
            if (this.menuContainerIsBody) {
              left = rect.left;
              top = rect.top;
            } else {
              left = markerEl.offsetLeft;
              top = markerEl.offsetTop;
            }
            var coordinates = {
              left: left + windowLeft,
              top: top + markerEl.offsetHeight + windowTop
            };
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var menuDimensions = this.getMenuDimensions();
            var menuIsOffScreen = this.isMenuOffScreen(coordinates, menuDimensions);
            if (menuIsOffScreen.right) {
              coordinates.left = 'auto';
              coordinates.right = windowWidth - rect.left - windowLeft;
            }
            var parentHeight = this.tribute.menuContainer ? this.tribute.menuContainer.offsetHeight : this.getDocument().body.offsetHeight;
            if (menuIsOffScreen.bottom) {
              var parentRect = this.tribute.menuContainer ? this.tribute.menuContainer.getBoundingClientRect() : this.getDocument().body.getBoundingClientRect();
              var scrollStillAvailable = parentHeight - (windowHeight - parentRect.top);
              coordinates.top = 'auto';
              coordinates.bottom = scrollStillAvailable + (windowHeight - rect.top);
            }
            menuIsOffScreen = this.isMenuOffScreen(coordinates, menuDimensions);
            if (menuIsOffScreen.left) {
              coordinates.left = windowWidth > menuDimensions.width ? windowLeft + windowWidth - menuDimensions.width : windowLeft;
              delete coordinates.right;
            }
            if (menuIsOffScreen.top) {
              coordinates.top = windowHeight > menuDimensions.height ? windowTop + windowHeight - menuDimensions.height : windowTop;
              delete coordinates.bottom;
            }
            markerEl.parentNode.removeChild(markerEl);
            return coordinates;
          }
        }, {
          key: "scrollIntoView",
          value: function scrollIntoView(elem) {
            var reasonableBuffer = 20,
              clientRect;
            var maxScrollDisplacement = 100;
            var e = this.menu;
            if (typeof e === 'undefined') return;
            while (clientRect === undefined || clientRect.height === 0) {
              clientRect = e.getBoundingClientRect();
              if (clientRect.height === 0) {
                e = e.childNodes[0];
                if (e === undefined || !e.getBoundingClientRect) {
                  return;
                }
              }
            }
            var elemTop = clientRect.top;
            var elemBottom = elemTop + clientRect.height;
            if (elemTop < 0) {
              window.scrollTo(0, window.pageYOffset + clientRect.top - reasonableBuffer);
            } else if (elemBottom > window.innerHeight) {
              var maxY = window.pageYOffset + clientRect.top - reasonableBuffer;
              if (maxY - window.pageYOffset > maxScrollDisplacement) {
                maxY = window.pageYOffset + maxScrollDisplacement;
              }
              var targetY = window.pageYOffset - (window.innerHeight - elemBottom);
              if (targetY > maxY) {
                targetY = maxY;
              }
              window.scrollTo(0, targetY);
            }
          }
        }, {
          key: "menuContainerIsBody",
          get: function get() {
            return this.tribute.menuContainer === document.body || !this.tribute.menuContainer;
          }
        }]);
        return TributeRange;
      }();
      var _default = TributeRange;
      exports["default"] = _default;
      module.exports = exports["default"];
    }, {}],
    5: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
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

      // Thanks to https://github.com/mattyork/fuzzy
      var TributeSearch = /*#__PURE__*/
      function () {
        function TributeSearch(tribute) {
          _classCallCheck(this, TributeSearch);
          this.tribute = tribute;
          this.tribute.search = this;
        }
        _createClass(TributeSearch, [{
          key: "simpleFilter",
          value: function simpleFilter(pattern, array) {
            var _this = this;
            return array.filter(function (string) {
              return _this.test(pattern, string);
            });
          }
        }, {
          key: "test",
          value: function test(pattern, string) {
            return this.match(pattern, string) !== null;
          }
        }, {
          key: "match",
          value: function match(pattern, string, opts) {
            opts = opts || {};
            var patternIdx = 0,
              result = [],
              len = string.length,
              totalScore = 0,
              currScore = 0,
              pre = opts.pre || '',
              post = opts.post || '',
              compareString = opts.caseSensitive && string || string.toLowerCase(),
              ch,
              compareChar;
            if (opts.skip) {
              return {
                rendered: string,
                score: 0
              };
            }
            pattern = opts.caseSensitive && pattern || pattern.toLowerCase();
            var patternCache = this.traverse(compareString, pattern, 0, 0, []);
            if (!patternCache) {
              return null;
            }
            return {
              rendered: this.render(string, patternCache.cache, pre, post),
              score: patternCache.score
            };
          }
        }, {
          key: "traverse",
          value: function traverse(string, pattern, stringIndex, patternIndex, patternCache) {
            // if the pattern search at end
            if (pattern.length === patternIndex) {
              // calculate score and copy the cache containing the indices where it's found
              return {
                score: this.calculateScore(patternCache),
                cache: patternCache.slice()
              };
            } // if string at end or remaining pattern > remaining string

            if (string.length === stringIndex || pattern.length - patternIndex > string.length - stringIndex) {
              return undefined;
            }
            var c = pattern[patternIndex];
            var index = string.indexOf(c, stringIndex);
            var best, temp;
            while (index > -1) {
              patternCache.push(index);
              temp = this.traverse(string, pattern, index + 1, patternIndex + 1, patternCache);
              patternCache.pop(); // if downstream traversal failed, return best answer so far

              if (!temp) {
                return best;
              }
              if (!best || best.score < temp.score) {
                best = temp;
              }
              index = string.indexOf(c, index + 1);
            }
            return best;
          }
        }, {
          key: "calculateScore",
          value: function calculateScore(patternCache) {
            var score = 0;
            var temp = 1;
            patternCache.forEach(function (index, i) {
              if (i > 0) {
                if (patternCache[i - 1] + 1 === index) {
                  temp += temp + 1;
                } else {
                  temp = 1;
                }
              }
              score += temp;
            });
            return score;
          }
        }, {
          key: "render",
          value: function render(string, indices, pre, post) {
            var rendered = string.substring(0, indices[0]);
            indices.forEach(function (index, i) {
              rendered += pre + string[index] + post + string.substring(index + 1, indices[i + 1] ? indices[i + 1] : string.length);
            });
            return rendered;
          }
        }, {
          key: "filter",
          value: function filter(pattern, arr, opts) {
            var _this2 = this;
            opts = opts || {};
            return arr.reduce(function (prev, element, idx, arr) {
              var str = element;
              if (opts.extract) {
                str = opts.extract(element);
                if (!str) {
                  // take care of undefineds / nulls / etc.
                  str = '';
                }
              }
              var rendered = _this2.match(pattern, str, opts);
              if (rendered != null) {
                prev[prev.length] = {
                  string: rendered.rendered,
                  score: rendered.score,
                  index: idx,
                  original: element
                };
              }
              return prev;
            }, []).sort(function (a, b) {
              var compare = b.score - a.score;
              if (compare) return compare;
              return a.index - b.index;
            });
          }
        }]);
        return TributeSearch;
      }();
      var _default = TributeSearch;
      exports["default"] = _default;
      module.exports = exports["default"];
    }, {}],
    6: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _Tribute = _interopRequireDefault(require("./Tribute"));
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      /**
      * Tribute.js
      * Native ES6 JavaScript @mention Plugin
      **/
      var _default = _Tribute["default"];
      exports["default"] = _default;
      module.exports = exports["default"];
    }, {
      "./Tribute": 1
    }],
    7: [function (require, module, exports) {
      "use strict";

      if (!Array.prototype.find) {
        Array.prototype.find = function (predicate) {
          if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
          }
          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
          }
          var list = Object(this);
          var length = list.length >>> 0;
          var thisArg = arguments[1];
          var value;
          for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
              return value;
            }
          }
          return undefined;
        };
      }
      if (window && typeof window.CustomEvent !== "function") {
        var CustomEvent = function CustomEvent(event, params) {
          params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
          };
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        if (typeof window.Event !== 'undefined') {
          CustomEvent.prototype = window.Event.prototype;
        }
        window.CustomEvent = CustomEvent;
      }
    }, {}]
  }, {}, [6])(6);
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vizzs/areachart.js":
/*!**************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vizzs/areachart.js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ areachart; }
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/mouse.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/month.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/isoParse.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/line.js");
/* eslint-disable require-jsdoc, id-length, no-undefined, no-unused-vars, multiline-ternary, no-ternary, no-nested-ternary, no-invalid-this */
/* eslint prefer-reflect: ["error", { "exceptions": ["call"] }] */
/* eslint dot-location: ["error", "property"] */
/* eslint no-unused-vars: 0 */









// lib
function areachart() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var parseData = function parseData(data) {
    // format the data
    data.forEach(function (d) {
      d.key = (0,d3_time_format__WEBPACK_IMPORTED_MODULE_3__["default"])(d.key);
      d.value = Number(d.value);
    });

    // order by date
    return data.sort(function (x, y) {
      return (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.ascending)(x.key, y.key);
    });
  };

  // OPTIONAL: Helper function to accumulates all data values
  var aggregate = function aggregate(agg) {
    return agg.map(function (item, index, array) {
      if (index > 0) {
        item.value += array[index - 1].value;
      }
      return item;
    });
  };

  // parse opts
  var data = parseData(opts.data);
  var title = opts.title;
  var objectName = opts.objectName || "";
  var container = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])(opts.container);
  var showAxis = opts.axis || false;
  var ratio = (opts.ratio || "").split(":").reduce(function (a, b) {
    return a / b;
  }) || 4 / 3;
  var showTooltip = Object.is(opts.tip, undefined) ? true : opts.tip;
  var cumulative = opts.agg || false;
  if (cumulative) {
    data = aggregate(data);
  }

  // set the dimensions and margins of the graph
  var margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  var width = Number(container.node().getBoundingClientRect().width) - margin.left - margin.right;
  var height = width / ratio - margin.top - margin.bottom;
  var titlePadding = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.min)([width / 10, 32]);

  // set the ranges
  var x = (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__.scaleTime)().range([0, width]);
  var y = (0,d3_scale__WEBPACK_IMPORTED_MODULE_1__.scaleLinear)().range([height, 0]);

  // define the area
  var _area = (0,d3_shape__WEBPACK_IMPORTED_MODULE_5__["default"])().x(function (d) {
    return x(d.key);
  }).y0(height).y1(function (d) {
    return y(d.value);
  });

  // define the line
  var valueline = (0,d3_shape__WEBPACK_IMPORTED_MODULE_6__["default"])().x(function (d) {
    return x(d.key);
  }).y(function (d) {
    return y(d.value);
  });
  var svg = container.append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(".concat(margin.left, ",").concat(margin.top, ")"));

  // scale the range of the data
  x.domain((0,d3_array__WEBPACK_IMPORTED_MODULE_0__.extent)(data, function (d) {
    return d.key;
  }));
  y.domain([0, (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.max)(data, function (d) {
    return d.value;
  })]).nice();

  // add the valueline path.
  var topLine = svg.append("path").data([data]).attr("class", "line").attr("d", valueline);

  // add the area
  svg.append("path").data([data]).attr("class", "area").attr("d", _area);
  if (showTooltip) {
    // tooltip
    var circle = svg.append("circle").attr("class", "circle").attr("r", 6).style("display", "none");
    var tooltip = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])("body").append("div").attr("id", "".concat(container.node().id, "-tooltip")).attr("class", "chart-tooltip").style("opacity", 0);
    svg.on("mouseover", function () {
      circle.style("display", null);
      tooltip.style("opacity", 1);
    }).on("mouseout", function () {
      circle.style("display", "none");
      tooltip.style("opacity", 0);
    }).on("mousemove", function () {
      var x0 = x.invert((0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this)[0]);
      var i = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.bisector)(function (d) {
        return d.key;
      }).left(data, x0, 1);
      var d0 = data[i - 1];
      var d1 = data[i];
      var d = x0 - d0.key > d1.key - x0 ? d1 : d0;

      // svg position relative to document
      var coords = {
        x: window.pageXOffset + container.node().getBoundingClientRect().left,
        y: window.pageYOffset + container.node().getBoundingClientRect().top
      };
      var tooltipContent = "\n          <div class=\"tooltip-content\">\n            ".concat((0,d3_time_format__WEBPACK_IMPORTED_MODULE_8__.timeFormat)("%e %B %Y")(d.key), "<br />\n            ").concat(d.value.toLocaleString(), " ").concat(objectName, "\n          </div>");
      circle.attr("transform", "translate(".concat(x(d.key), ",").concat(y(d.value), ")"));
      tooltip.html(tooltipContent).style("left", "".concat(coords.x + x(d.key), "px")).style("top", "".concat(coords.y + y(d.value), "px"));
    });
  }
  if (showAxis) {
    var xAxis = (0,d3_axis__WEBPACK_IMPORTED_MODULE_2__.axisBottom)(x).ticks(d3_time__WEBPACK_IMPORTED_MODULE_9__["default"]).tickFormat((0,d3_time_format__WEBPACK_IMPORTED_MODULE_8__.timeFormat)("%b %y")).tickSize(-height);
    var yAxis = (0,d3_axis__WEBPACK_IMPORTED_MODULE_2__.axisLeft)(y).ticks(5).tickSize(8);
    var _xAxis = function _xAxis(g) {
      g.call(xAxis);
      g.select(".domain").remove();
      g.selectAll(".tick line").attr("class", "dashed");
      g.selectAll(".tick text").attr("y", 6);
    };
    var _yAxis = function _yAxis(g) {
      g.call(yAxis);
      g.select(".domain").remove();
      g.select(".tick:first-of-type").remove();
      g.selectAll(".tick text").attr("text-anchor", "start").attr("x", 6);
    };

    // custom X-Axis
    svg.append("g").attr("transform", "translate(0,".concat(height, ")")).call(_xAxis);

    // custom Y-Axis
    svg.append("g").call(_yAxis);

    // last circle (current value)
    var g = svg.append("g").data([data]).attr("transform", function (d) {
      return "translate(".concat(x(d[d.length - 1].key), ",").concat(y(d[d.length - 1].value), ")");
    });
    g.append("circle").attr("class", "circle").attr("r", 8);
    g.append("text").attr("class", "sum").attr("text-anchor", "end").attr("dx", -8 * 2).text(function (d) {
      return d[d.length - 1].value.toLocaleString();
    });
  } else {
    // add the title group
    var _g = svg.append("g").attr("text-anchor", "start").attr("transform", "translate(".concat(titlePadding, ",").concat(titlePadding, ")"));
    var titleLines = 0;
    if (title.length) {
      _g.append("text").attr("x", 0).attr("y", 0).attr("class", "title").text(title).call(function (fulltext, wrapwidth) {
        var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        fulltext.each(function () {
          var text = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])(this);
          var word = "";
          var words = text.text().split(/\s+/).reverse();
          var _line = [];
          var lineNumber = 0;
          var lineHeight = 1.1;
          var _x = text.attr("x");
          var _y = text.attr("y");
          var dy = 0;
          var tspan = text.text(null).append("tspan").attr("x", _x).attr("y", _y).attr("dy", "".concat(dy, "em"));

          /* eslint-disable no-cond-assign, no-plusplus */
          while (word = words.pop()) {
            _line.push(word);
            tspan.text(_line.join(" "));
            if (tspan.node().getComputedTextLength() > wrapwidth) {
              _line.pop();
              tspan.text(_line.join(" "));
              _line = [word];
              tspan = text.append("tspan").attr("x", _x).attr("y", _y).attr("dy", "".concat(++lineNumber * lineHeight + dy, "em")).text(word);
            }
          }
          titleLines = lineNumber * lineHeight;
        });
      }, width - titlePadding * 2);
    }
    var fontSize = parseFloat(getComputedStyle(_g.node()).fontSize);
    _g.append("text").attr("x", 0).attr("dy", title.length ? titlePadding * 2 + titleLines * fontSize : titlePadding * 1.25).attr("class", "sum").text(data[data.length - 1].value.toLocaleString());
  }
}

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vizzs/index.js":
/*!**********************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vizzs/index.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_vizzs_areachart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/vizzs/areachart */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vizzs/areachart.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
/* eslint-disable require-jsdoc, no-console */


$(function () {
  var metricsData = {};
  var metricsContainer = {};
  var metricsParams = {};
  var query = function query() {
    var metricsQuery = "metrics(names: ".concat(metricsParams.names, ", space_type: \"").concat(metricsParams.spaceType, "\", space_id: ").concat(metricsParams.spaceId, ") { name history { key value } }");
    return {
      query: "{ ".concat(metricsQuery, " }")
    };
  };
  var parameterize = function parameterize(metrics) {
    metricsParams.names = JSON.stringify(metrics || []);
    metricsParams.spaceType = $("#metrics #metrics-space_type").val() || null;
    metricsParams.spaceId = $("#metrics #metrics-space_id").val() || null;
  };
  var fetch = function fetch(metrics) {
    return $.post("/api", query(metrics));
  };
  var downloadMetricData = function downloadMetricData(event) {
    event.preventDefault();
    var metricName = $(event.target).parents(".metric-downloader").data("metric");
    var csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "key,value\r\n";
    metricsData[metricName].forEach(function (metricData) {
      csvContent += "".concat(metricData.key, ",").concat(metricData.value, "\r\n");
    });

    // Required for FF
    var link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "".concat(metricName, "_metric_data.csv"));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  $(".metric-chart:visible").each(function (_index, container) {
    metricsContainer[$(container).data("metric")] = container;
  });
  $(".metric-downloader").each(function (_index, container) {
    container.onclick = downloadMetricData;
  });
  if (!$.isEmptyObject(metricsContainer)) {
    parameterize(Object.keys(metricsContainer));
    fetch().then(function (response) {
      if (response.data) {
        $.each(response.data.metrics, function (_index, metricData) {
          var container = metricsContainer[metricData.name];
          if (metricData.history.length === 0) {
            $(container).remove();
            return;
          }
          var info = $(container).data("info");
          metricsData[metricData.name] = $.extend(true, [], metricData.history);
          (0,src_decidim_vizzs_areachart__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread({
            container: "#".concat(container.id),
            data: metricData.history,
            title: info.title,
            objectName: info.object
          }, $(container).data()));
        });
      } else if (response.errors) {
        console.log("Something wrong happened when fetching metrics:");
        $.each(response.errors, function (_index, error) {
          console.log(error.message);
        });
        $("#metrics").remove();
      }
    }).fail(function (err) {
      console.log("Something wrong happened when fetching metrics: ".concat(err.statusText));
      $("#metrics").remove();
    });
  }
});

/***/ })

}]);
//# sourceMappingURL=_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_app_packs_src_decidim_ajax_moda-fb562f.js.map