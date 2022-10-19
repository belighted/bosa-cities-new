/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/entrypoints/decidim_admin.js":
/*!*************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/entrypoints/decidim_admin.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.flags.js */ "./node_modules/core-js/modules/es.regexp.flags.js");
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.immediate.js */ "./node_modules/core-js/modules/web.immediate.js");
/* harmony import */ var core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill-exposed.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs-exposed.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var foundation_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! foundation-sites */ "./node_modules/foundation-sites/dist/js/foundation.esm.js");
/* harmony import */ var src_decidim_vendor_foundation_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/decidim/vendor/foundation-datepicker */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vendor/foundation-datepicker.js");
/* harmony import */ var src_decidim_vendor_foundation_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_foundation_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_decidim_foundation_datepicker_locales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/decidim/foundation_datepicker_locales */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/foundation_datepicker_locales.js");
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery-serializejson */ "./node_modules/jquery-serializejson/jquery.serializejson.js");
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery_serializejson__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/decidim/admin/tab_focus */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/tab_focus.js");
/* harmony import */ var src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_decidim_admin_choose_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/decidim/admin/choose_language */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/choose_language.js");
/* harmony import */ var src_decidim_admin_application__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/decidim/admin/application */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/application.js");
/* harmony import */ var src_decidim_admin_resources_permissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/decidim/admin/resources_permissions */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/resources_permissions.js");
/* harmony import */ var src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/decidim/admin/welcome_notification */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/welcome_notification.js");
/* harmony import */ var src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/decidim/admin/newsletters */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/newsletters.js");
/* harmony import */ var src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_decidim_admin_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/decidim/admin/form */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/form.js");
/* harmony import */ var src_decidim_admin_external_domain_whitelist__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/decidim/admin/external_domain_whitelist */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/external_domain_whitelist.js");
/* harmony import */ var src_decidim_confirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/decidim/confirm */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/confirm.js");
/* harmony import */ var src_decidim_admin_draggable_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/decidim/admin/draggable-list */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/draggable-list.js");
/* harmony import */ var src_decidim_admin_sortable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/decidim/admin/sortable */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/sortable.js");
/* harmony import */ var src_decidim_gallery__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/decidim/gallery */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/gallery.js");
/* harmony import */ var src_decidim_gallery__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(src_decidim_gallery__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/decidim/admin/moderations */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/moderations.js");
/* harmony import */ var src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var src_decidim_input_tags__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/decidim/input_tags */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_tags.js");
/* harmony import */ var src_decidim_input_hashtags__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/decidim/input_hashtags */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_hashtags.js");
/* harmony import */ var src_decidim_input_mentions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/decidim/input_mentions */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_mentions.js");
/* harmony import */ var src_decidim_vizzs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/decidim/vizzs */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/vizzs/index.js");
/* harmony import */ var src_decidim_ajax_modals__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/decidim/ajax_modals */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/ajax_modals.js");
/* harmony import */ var src_decidim_ajax_modals__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(src_decidim_ajax_modals__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/decidim/admin/officializations */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/officializations.js");
/* harmony import */ var src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var src_decidim_session_timeouter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/decidim/session_timeouter */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/session_timeouter.js");
/* harmony import */ var src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/decidim/slug_form */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/slug_form.js");
/* harmony import */ var src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var src_decidim_direct_uploads_upload_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/decidim/direct_uploads/upload_field */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_field.js");
/* harmony import */ var src_decidim_admin_admin_autocomplete__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/decidim/admin/admin_autocomplete */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/admin_autocomplete.js");
/* harmony import */ var entrypoints_decidim_admin_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! entrypoints/decidim_admin.scss */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/entrypoints/decidim_admin.scss");


































// CSS


// This needs to be loaded after confirm dialog to bind properly
_rails_ujs__WEBPACK_IMPORTED_MODULE_5___default().start();
window.addEventListener("DOMContentLoaded", function () {
  (0,src_decidim_admin_choose_language__WEBPACK_IMPORTED_MODULE_11__["default"])(document.querySelectorAll("select.language-change"));
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/admin_autocomplete.js":
/*!************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/admin_autocomplete.js ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/autocomplete */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/autocomplete.js");
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


/**
 * This function can be used to create an autocomplete input automatically
 * from the following kind of div:
 *   <div data-autocomplete="{...}"></div>
 *
 * The data-autocomplete attribute should contain the following configuration
 * as an encoded JSON, which is used to generate the AutoComplete options:
 * - name: assembly_member[user_id],
 * - options: [],
 * - placeholder: "Select a participant",
 * - searchURL: "http://..."
 * - selected: "",
 *
 * @param {HTMLElement} el The element to generate the autocomplete for.
 * @returns {AutoComplete} An instance of the AutoComplete class.
 */
var autoConfigure = function autoConfigure(el) {
  var config = JSON.parse(el.dataset.autocomplete);
  var searchUrl = new URL(config.searchURL);
  var textInput = document.createElement("input");
  textInput.type = "text";
  textInput.className = "autocomplete-input";
  el.appendChild(textInput);
  var mode = config.mode || "sticky";
  var selected = null;
  if (config.selected) {
    switch (mode) {
      case "multi":
        selected = config.selected.map(function (item) {
          return {
            key: "label",
            value: {
              value: item.value,
              label: item.label
            }
          };
        });
        break;
      case "sticky":
        selected = {
          key: "label",
          value: config.options[config.options.length - 1]
        };
        break;
      default:
        selected = config.selected;
    }
  }
  var dataSource = function dataSource(query, callback) {
    var params = new URLSearchParams(_objectSpread(_objectSpread({}, Object.fromEntries(searchUrl.searchParams)), {}, {
      term: query
    }));
    fetch("".concat(searchUrl.origin).concat(searchUrl.pathname, "?").concat(params.toString()), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      callback(data);
    });
  };
  var ac = new src_decidim_autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"](textInput, {
    name: config.name,
    placeholder: config.placeholder,
    selected: selected,
    mode: mode,
    searchPrompt: true,
    searchPromptText: config.searchPromptText,
    threshold: 3,
    dataMatchKeys: ["label"],
    dataSource: dataSource
  });
  return ac;
};
$(function () {
  var $autocompleteDiv = $("[data-autocomplete]");
  if ($autocompleteDiv.length < 1) {
    return;
  }
  $autocompleteDiv.each(function (_index, element) {
    autoConfigure(element);
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/application.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/application.js ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_toggle_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/toggle_nav */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/toggle_nav.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/sort_list.component.js");
/* harmony import */ var src_decidim_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/editor */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/editor.js");
/* harmony import */ var src_decidim_form_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/form_datepicker */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/form_datepicker.js");
/* harmony import */ var src_decidim_data_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/data_picker */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/data_picker.js");
/* harmony import */ var src_decidim_form_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/decidim/form_filter */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/form_filter.js");
/* harmony import */ var src_decidim_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/decidim/configuration */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/configuration.js");
/* harmony import */ var src_decidim_input_character_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/decidim/input_character_counter */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_character_counter.js");
/* harmony import */ var src_decidim_admin_managed_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/decidim/admin/managed_users */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/managed_users.js");
/* eslint-disable no-invalid-this */










window.Decidim = window.Decidim || {};
window.Decidim.managedUsersForm = src_decidim_admin_managed_users__WEBPACK_IMPORTED_MODULE_8__["default"];
window.Decidim.config = new src_decidim_configuration__WEBPACK_IMPORTED_MODULE_6__["default"]();
window.Decidim.InputCharacterCounter = src_decidim_input_character_counter__WEBPACK_IMPORTED_MODULE_7__["default"];
$(function () {
  window.theDataPicker = new src_decidim_data_picker__WEBPACK_IMPORTED_MODULE_4__["default"]($(".data-picker"));
  $(document).foundation();
  (0,src_decidim_admin_toggle_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_1__["default"])("#steps tbody", {
    placeholder: $('<tr style="border-style: dashed; border-color: #000"><td colspan="4">&nbsp;</td></tr>')[0],
    onSortUpdate: function onSortUpdate($children) {
      var sortUrl = $("#steps tbody").data("sort-url");
      var order = $children.map(function (index, child) {
        return $(child).data("id");
      }).toArray();
      $.ajax({
        method: "POST",
        url: sortUrl,
        contentType: "application/json",
        data: JSON.stringify({
          items_ids: order
        })
      } // eslint-disable-line camelcase
      );
    }
  });

  (0,src_decidim_form_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  $(".editor-container").each(function (_idx, container) {
    (0,src_decidim_editor__WEBPACK_IMPORTED_MODULE_2__["default"])(container);
  });
  $("form.new_filter").each(function () {
    var formFilter = new src_decidim_form_filter__WEBPACK_IMPORTED_MODULE_5__["default"]($(this));
    formFilter.mountComponent();
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/budget_rule_toggler.component.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/budget_rule_toggler.component.js ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BudgetRuleTogglerComponent; }
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
var BudgetRuleTogglerComponent = /*#__PURE__*/function () {
  function BudgetRuleTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, BudgetRuleTogglerComponent);
    this.ruleCheckboxes = options.ruleCheckboxes;
    this._runAll();
  }
  _createClass(BudgetRuleTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;
      this.ruleCheckboxes.each(function (_i, checkbox) {
        _this._bindEvent(checkbox);
        _this.run(checkbox);
      });
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent(target) {
      var _this2 = this;
      $(target).on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var _this3 = this;
      this.toggleTextInput(target);
      if ($(target).prop("checked")) {
        this.ruleCheckboxes.filter(function (_i, checkbox) {
          return checkbox !== target;
        }).prop("checked", false).each(function (_i, checkbox) {
          _this3.toggleTextInput(checkbox);
        });
      }
    }
  }, {
    key: "toggleTextInput",
    value: function toggleTextInput(target) {
      var container = $(target).closest("div");
      if (container.length < 1) {
        return;
      }
      var containerClassPrefix = container.attr("class").replace(/^vote_rule_/, "vote_").replace(/_enabled_container$/, "");
      var input = $("[class^=\"".concat(containerClassPrefix, "\"][class$=\"_container\"]"));
      if ($(target).prop("checked")) {
        input.slideDown();
      } else {
        input.slideUp();
      }
    }
  }]);
  return BudgetRuleTogglerComponent;
}();


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/choose_language.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/choose_language.js ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ initLanguageChangeSelect; }
/* harmony export */ });
/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */

function initLanguageChangeSelect(elements) {
  elements.forEach(function (select) {
    select.addEventListener("change", function () {
      var targetTabPaneSelector = select.value;
      var tabsContent = select.parentElement.parentElement.nextElementSibling;
      tabsContent.querySelector(".is-active").classList.remove("is-active");
      tabsContent.querySelector(targetTabPaneSelector).classList.add("is-active");
    });
  });
}

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/draggable-list.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/draggable-list.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSortableList; }
/* harmony export */ });
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/sort_list.component.js");
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
/* eslint-disable require-jsdoc */

function createSortableList(lists) {
  (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__["default"])(lists, {
    handle: "li",
    forcePlaceholderSize: true,
    connectWith: ".js-connect"
  });
}

// Once in DOM
$(function () {
  var $draggables = $(".draggable-list");
  var draggablesClassNames = [];
  $draggables.each(function (index, elem) {
    draggablesClassNames = [].concat(_toConsumableArray(draggablesClassNames), [".".concat(elem.className.split(" ").filter(function (name) {
      return /js-list.*/.test(name);
    })[0])]);
  });
  document.addEventListener("drag", function (event) {
    $draggables.not(event.target.parentElement).addClass("dragging");
  });
  document.addEventListener("dragend", function () {
    $draggables.removeClass("dragging");
  });
  createSortableList(draggablesClassNames.join(", "));
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/external_domain_whitelist.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/external_domain_whitelist.js ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/auto_buttons_by_position.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/auto_buttons_by_position.component.js");
/* harmony import */ var src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/auto_label_by_position.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/auto_label_by_position.component.js");
/* harmony import */ var src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/dynamic_fields.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/dynamic_fields.component.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/sort_list.component.js");




$(function () {
  var dynamicFieldDefinitions = [{
    placeHolderId: "external-domain-id",
    wrapperSelector: ".external-domains",
    fieldSelector: ".external-domain",
    addFieldSelector: ".add-external-domain"
  }];
  dynamicFieldDefinitions.forEach(function (section) {
    var fieldSelectorSuffix = section.fieldSelector.replace(".", "");
    var autoButtonsByPosition = new src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
      listSelector: "".concat(section.fieldSelector, ":not(.hidden)"),
      hideOnFirstSelector: ".move-up-question",
      hideOnLastSelector: ".move-down-question"
    });
    var autoLabelByPosition = new src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__["default"]({
      listSelector: "".concat(section.fieldSelector, ":not(.hidden)"),
      labelSelector: ".card-title span:first",
      onPositionComputed: function onPositionComputed(el, idx) {
        $(el).find("input[name$=\\[position\\]]").val(idx);
      }
    });
    var createSortableList = function createSortableList() {
      (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__["default"])(".external-domains-list:not(.published)", {
        handle: ".external-domain-divider",
        placeholder: '<div style="border-style: dashed; border-color: #000"></div>',
        forcePlaceholderSize: true,
        onSortUpdate: function onSortUpdate() {
          autoLabelByPosition.run();
          autoButtonsByPosition.run();
        }
      });
    };
    var hideDeletedItem = function hideDeletedItem($target) {
      var inputDeleted = $target.find("input[name$=\\[deleted\\]]").val();
      if (inputDeleted === "true") {
        $target.addClass("hidden");
        $target.hide();

        // Allows re-submitting of the form
        $("input", $target).removeAttr("required");
      }
    };
    (0,src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__["default"])({
      placeholderId: section.placeHolderId,
      wrapperSelector: section.wrapperSelector,
      containerSelector: "".concat(section.wrapperSelector, "-list"),
      fieldSelector: section.fieldSelector,
      addFieldButtonSelector: section.addFieldSelector,
      removeFieldButtonSelector: ".remove-".concat(fieldSelectorSuffix),
      moveUpFieldButtonSelector: ".move-up-question",
      moveDownFieldButtonSelector: ".move-down-question",
      onAddField: function onAddField() {
        createSortableList();
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      },
      onRemoveField: function onRemoveField($field) {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();

        // Allows re-submitting of the form
        $("input", $field).removeAttr("required");
      },
      onMoveUpField: function onMoveUpField() {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      },
      onMoveDownField: function onMoveDownField() {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      }
    });
    createSortableList();
    $(section.fieldSelector).each(function (_idx, el) {
      var $target = $(el);
      hideDeletedItem($target);
    });
    autoLabelByPosition.run();
    autoButtonsByPosition.run();
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/form.js":
/*!**********************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/form.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/scope_picker_enabler.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/scope_picker_enabler.component.js");
/* harmony import */ var src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/proposal_infinite_edit */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/proposal_infinite_edit.js");
/* harmony import */ var src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_decidim_admin_budget_rule_toggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/budget_rule_toggler.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/budget_rule_toggler.component.js");




// Checks if the form contains fields with special CSS classes added in
// Decidim::Admin::SettingsHelper and acts accordingly.
$(function () {
  var budgetRuleToggler = new src_decidim_admin_budget_rule_toggler_component__WEBPACK_IMPORTED_MODULE_2__["default"]({
    ruleCheckboxes: $("input[id^='component_settings_vote_rule_']")
  });
  budgetRuleToggler.run();

  // Prevents readonly containers from being modified.
  var $readonlyContainer = $(".readonly_container input");
  $readonlyContainer.click(function (event) {
    event.preventDefault();
    return false;
  });

  // Target fields:
  // - amendments_wizard_help_text
  // - amendments_visibility
  // - amendment_creation_enabled
  // - amendment_reaction_enabled
  // - amendment_promotion_enabled

  // (1) Hides target fields if amendments_enabled component setting is NOT checked.
  // (2) Toggles visibilty of target fields when amendments_enabled component setting is clicked.
  var $amendmentsEnabled = $("input#component_settings_amendments_enabled");
  if ($amendmentsEnabled.length > 0) {
    var $amendmentStepSettings = $(".amendments_wizard_help_text_container, .amendments_visibility_container, .amendment_creation_enabled_container, .amendment_reaction_enabled_container, .amendment_promotion_enabled_container");
    if ($amendmentsEnabled.is(":not(:checked)")) {
      $amendmentStepSettings.hide();
    }
    $amendmentsEnabled.click(function () {
      $amendmentStepSettings.toggle();
    });
  }
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/managed_users.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/managed_users.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ managedUsersForm; }
/* harmony export */ });
/* harmony import */ var src_decidim_admin_subform_toggler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/subform_toggler.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/subform_toggler.component.js");
/* eslint-disable require-jsdoc */


function managedUsersForm() {
  var subformToggler = new src_decidim_admin_subform_toggler_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
    controllerSelect: $("select#impersonate_user_authorization_handler_name"),
    subformWrapperClass: "authorization-handler",
    globalWrapperSelector: "form"
  });
  subformToggler.run();
}

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/moderations.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/moderations.js ***!
  \*****************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $moderationDetails = $(".moderation-details");
  var $toggleContentButton = $moderationDetails.find(".toggle-content");
  var $reportedContent = $moderationDetails.find(".reported-content");
  var $currentContent = $reportedContent.find(".current");
  var $originalContent = $reportedContent.find(".original");
  $originalContent.hide();
  $toggleContentButton.on("click", function () {
    $currentContent.toggle();
    $originalContent.toggle();
    if ($currentContent.is(":hidden")) {
      $toggleContentButton.html($toggleContentButton.data("see-current-button-label"));
    } else {
      $toggleContentButton.html($toggleContentButton.data("see-original-button-label"));
    }
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/newsletters.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/newsletters.js ***!
  \*****************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $form = $(".form.newsletter_deliver");
  if ($form.length > 0) {
    var $sendNewsletterToAllUsers = $form.find("#send_newsletter_to_all_users");
    var $sendNewsletterToFollowers = $form.find("#send_newsletter_to_followers");
    var $sendNewsletterToParticipants = $form.find("#send_newsletter_to_participants");
    var $participatorySpacesForSelect = $form.find("#participatory_spaces_for_select");
    var checkSelectiveNewsletterFollowers = $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked");
    var checkSelectiveNewsletterParticipants = $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked");
    $sendNewsletterToAllUsers.on("change", function (event) {
      var checked = event.target.checked;
      if (checked) {
        $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked", !checked);
        $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.hide();
      } else {
        $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked", !checked);
        $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      }
    });
    $sendNewsletterToFollowers.on("change", function (event) {
      var checked = event.target.checked;
      var selectiveNewsletterParticipants = $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked");
      if (checked) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      } else if (!selectiveNewsletterParticipants) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", true);
        $participatorySpacesForSelect.hide();
      }
    });
    $sendNewsletterToParticipants.on("change", function (event) {
      var checked = event.target.checked;
      var selectiveNewsletterFollowers = $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked");
      if (checked) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      } else if (!selectiveNewsletterFollowers) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", true);
        $participatorySpacesForSelect.hide();
      }
    });
    if (checkSelectiveNewsletterFollowers || checkSelectiveNewsletterParticipants) {
      $participatorySpacesForSelect.show();
    } else {
      $participatorySpacesForSelect.hide();
    }
    $(".form .spaces-block-tag").each(function (_i, blockTag) {
      var selectTag = $(blockTag).find(".chosen-select");
      selectTag.change(function () {
        var optionSelected = selectTag.find("option:selected").val();
        if (optionSelected === "all") {
          selectTag.find("option").not(":first").prop("selected", true);
          selectTag.find("option[value='all']").prop("selected", false);
        } else if (optionSelected === "") {
          selectTag.find("option").not(":first").prop("selected", false);
        }
      });
    });
    $form.on("change", function () {
      var $data = $form.serializeJSON().newsletter;
      var $url = $form.data("recipients-count-newsletter-path");
      var $modal = $("#recipients_count_spinner");
      $modal.removeClass("hide");
      $.get($url, {
        data: $data
      }, function (recipientsCount) {
        $("#recipients_count").text(recipientsCount);
      }).always(function () {
        $modal.addClass("hide");
      });
    });
  }
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/officializations.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/officializations.js ***!
  \**********************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $modal = $("#show-email-modal");
  if ($modal.length === 0) {
    return;
  }
  var $button = $("[data-open=user_email]", $modal);
  var $email = $("#user_email", $modal);
  var $fullName = $("#user_full_name", $modal);
  $("[data-toggle=show-email-modal]").on("click", function (event) {
    event.preventDefault();
    $button.show();
    $button.attr("data-open-url", event.currentTarget.href);
    $fullName.text($(event.currentTarget).data("full-name"));
    $email.html("");
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/proposal_infinite_edit.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/proposal_infinite_edit.js ***!
  \****************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $limitiedTimeLabel = $("label[for='component_settings_proposal_edit_time_limited']");
  var $limitedTimeRadioButton = $("#component_settings_proposal_edit_time_limited");
  var $infiniteTimeRadioButton = $("#component_settings_proposal_edit_time_infinite");
  var $editTimeContainer = $(".proposal_edit_before_minutes_container");
  $editTimeContainer.detach().appendTo($limitiedTimeLabel);
  if ($infiniteTimeRadioButton.is(":checked")) {
    $editTimeContainer.hide();
  }
  $limitedTimeRadioButton.on("click", function () {
    $editTimeContainer.show();
  });
  $infiniteTimeRadioButton.on("click", function () {
    $editTimeContainer.hide();
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/resources_permissions.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/resources_permissions.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_subform_multi_toggler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/subform_multi_toggler.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/subform_multi_toggler.component.js");

$(function () {
  var subformMultiToggler = new src_decidim_admin_subform_multi_toggler_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
    controllerSelect: $("input[name$=\\[authorization_handlers\\]\\[\\]]"),
    subformWrapperClass: "authorization-handler",
    globalWrapperSelector: "fieldset"
  });
  subformMultiToggler.run();
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/scope_picker_enabler.component.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/scope_picker_enabler.component.js ***!
  \************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $ComponentScopeEnabled = $("#component_settings_scopes_enabled");
  var $ComponentScopeId = $("#component_settings_scope_id");
  if ($(".edit_component, .new_component").length > 0) {
    $ComponentScopeEnabled.on("change", function (event) {
      var checked = event.target.checked;
      window.theDataPicker.enabled($ComponentScopeId, checked);
    });
    window.theDataPicker.enabled($ComponentScopeId, $ComponentScopeEnabled.prop("checked"));
  }
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/sortable.js":
/*!**************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/sortable.js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/sort_list.component.js");
/* eslint-disable no-ternary */



// Once in DOM
$(function () {
  var selector = ".js-sortable";
  var $sortable = $(selector);
  $sortable.each(function (index, elem) {
    var item = elem.id ? "#".concat(elem.id) : selector;
    (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__["default"])(item, {
      handle: "li",
      forcePlaceholderSize: true,
      placeholderClass: "sort-placeholder"
    });
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/subform_multi_toggler.component.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/subform_multi_toggler.component.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubformMultiTogglerComponent; }
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
var SubformMultiTogglerComponent = /*#__PURE__*/function () {
  function SubformMultiTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, SubformMultiTogglerComponent);
    this.controllerSelect = options.controllerSelect;
    this.subformWrapperClass = options.subformWrapperClass;
    this.globalWrapperSelector = options.globalWrapperSelector;
    this._bindEvent();
    this._runAll();
  }
  _createClass(SubformMultiTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;
      this.controllerSelect.each(function (idx, el) {
        _this.run(el);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var $target = $(target);
      var subformWrapperClass = this.subformWrapperClass;
      var value = $target.val();
      var $form = $target.parents(this.globalWrapperSelector);
      var $selectedSubform = $form.find("#".concat(subformWrapperClass, "-").concat(value));
      if ($target.prop("checked")) {
        $selectedSubform.find("input,textarea,select").prop("disabled", false);
        $selectedSubform.show();
      } else {
        $selectedSubform.find("input,textarea,select").prop("disabled", true);
        $selectedSubform.hide();
      }
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      this.controllerSelect.on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }]);
  return SubformMultiTogglerComponent;
}();


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/subform_toggler.component.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/subform_toggler.component.js ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubformTogglerComponent; }
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
var SubformTogglerComponent = /*#__PURE__*/function () {
  function SubformTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, SubformTogglerComponent);
    this.controllerSelect = options.controllerSelect;
    this.subformWrapperClass = options.subformWrapperClass;
    this.globalWrapperSelector = options.globalWrapperSelector;
    this._bindEvent();
    this._runAll();
  }
  _createClass(SubformTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;
      this.controllerSelect.each(function (idx, el) {
        _this.run(el);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var $target = $(target);
      var subformWrapperClass = this.subformWrapperClass;
      var value = $target.val();
      var $form = $target.parents(this.globalWrapperSelector);
      var $subforms = $form.find(".".concat(subformWrapperClass));
      var $selectedSubform = $subforms.filter("#".concat(subformWrapperClass, "-").concat(value));
      $subforms.find("input,textarea,select").prop("disabled", true);
      $subforms.hide();
      $selectedSubform.find("input,textarea,select").prop("disabled", false);
      $selectedSubform.show();
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      this.controllerSelect.on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }]);
  return SubformTogglerComponent;
}();


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/tab_focus.js":
/*!***************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/tab_focus.js ***!
  \***************************************************************************************************************************/
/***/ (function() {

/**
 * When switching tabs in i18n fields, autofocus on the input to save clicks #212
 */
$(function () {
  // Event launched by foundation
  $("[data-tabs]").on("change.zf.tabs", function (event) {
    var $container = $(event.target).next(".tabs-content .tabs-panel.is-active");
    // Detect quilljs editor inside the tabs-panel
    var $content = $container.find(".editor .ql-editor");
    if ($content.length > 0) {
      $content.focus();
      // Detect if inside the tabs-panel have an input
    } else {
      $content = $container.find("input:first");
      if ($content.length > 0) {
        $content.focus();
      }
    }
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/toggle_nav.js":
/*!****************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/toggle_nav.js ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toggleNav; }
/* harmony export */ });
/* eslint-disable require-jsdoc */
var showHideNav = function showHideNav(evt) {
  var navMenu = document.querySelector(".layout-nav");
  evt.preventDefault();
  navMenu.classList.toggle("is-nav-open");
};
function toggleNav() {
  var navTrigger = document.querySelector(".menu-trigger");
  if (navTrigger) {
    navTrigger.addEventListener("click", showHideNav);
  }
}

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/welcome_notification.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/src/decidim/admin/welcome_notification.js ***!
  \**************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $scope = $("#welcome-notification-details");
  var $sendNotificationCheckbox = $("#organization_send_welcome_notification", $scope);
  var $customizeCheckbox = $("#organization_customize_welcome_notification", $scope);
  var toggleVisibility = function toggleVisibility() {
    if ($sendNotificationCheckbox.is(":checked")) {
      $(".send-welcome-notification-details", $scope).show();
    } else {
      $(".send-welcome-notification-details", $scope).hide();
    }
    if ($customizeCheckbox.is(":checked")) {
      $(".customize-welcome-notification-details", $scope).show();
    } else {
      $(".customize-welcome-notification-details", $scope).hide();
    }
  };
  $($sendNotificationCheckbox).click(function () {
    return toggleVisibility();
  });
  $($customizeCheckbox).click(function () {
    return toggleVisibility();
  });
  toggleVisibility();
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/slug_form.js":
/*!********************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/slug_form.js ***!
  \********************************************************************************************************************/
/***/ (function() {

$(function () {
  var $wrapper = $(".slug");
  var $input = $wrapper.find("input");
  var $target = $wrapper.find("span.slug-url-value");
  $input.on("keyup", function (event) {
    $target.html(event.target.value);
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/entrypoints/decidim_admin.scss":
/*!***************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/entrypoints/decidim_admin.scss ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"decidim_admin": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbosa_cities_new"] = self["webpackChunkbosa_cities_new"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html5sortable_dist_html5sortable_es_js","vendors-node_modules_rails_activestorage_app_assets_javascripts_activestorage_js-node_modules-03f302","vendors-node_modules_d3-array_src_index_js-node_modules_d3-collection_src_index_js-node_modul-f618e0","vendors-node_modules_tarekraafat_autocomplete_js_dist_autoComplete_min_js-node_modules_d3-axi-b5cfa0","vendors-node_modules_jquery-serializejson_jquery_serializejson_js","_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_app_packs_src_decidim_editor_js","_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_app_packs_src_decidim_autocomplete_js","_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-admin-0_27_0_app_packs_src_decidim_admin_au-f709d2","_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_app_packs_src_decidim_configura-dbcbee","_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_app_packs_src_decidim_ajax_moda-fb562f"], function() { return __webpack_require__("../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-admin-0.27.0/app/packs/entrypoints/decidim_admin.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=decidim_admin.js.map