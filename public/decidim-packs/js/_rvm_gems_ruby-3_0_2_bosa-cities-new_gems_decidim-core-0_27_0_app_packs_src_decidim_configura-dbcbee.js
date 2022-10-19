"use strict";
(self["webpackChunkbosa_cities_new"] = self["webpackChunkbosa_cities_new"] || []).push([["_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_app_packs_src_decidim_configura-dbcbee"],{

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/configuration.js":
/*!************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/configuration.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Configuration; }
/* harmony export */ });
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
var Configuration = /*#__PURE__*/function () {
  function Configuration() {
    _classCallCheck(this, Configuration);
    this.config = {};
  }
  _createClass(Configuration, [{
    key: "set",
    value: function set(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (_typeof(key) === "object") {
        this.config = _objectSpread(_objectSpread({}, this.config), key);
      } else {
        this.config[key] = value;
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.config[key];
    }
  }]);
  return Configuration;
}();


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/confirm.js":
/*!******************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/confirm.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs-exposed.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
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
 * A custom confirm dialog for Decidim based on Foundation reveals.
 *
 * Note that this needs to be loaded before the application JS in order for
 * it to gain control over the confirm events BEFORE rails-ujs is loaded.
 */


var TEMPLATE_HTML = null;
var ConfirmDialog = /*#__PURE__*/function () {
  function ConfirmDialog(sourceElement) {
    _classCallCheck(this, ConfirmDialog);
    this.$modal = $(TEMPLATE_HTML);
    this.$source = sourceElement;
    this.$content = $(".confirm-modal-content", this.$modal);
    this.$buttonConfirm = $("[data-confirm-ok]", this.$modal);
    this.$buttonCancel = $("[data-confirm-cancel]", this.$modal);

    // Avoid duplicate IDs and append the new modal to the body
    var titleId = "confirm-modal-title-".concat(Math.random().toString(36).substring(7));
    this.$modal.removeAttr("id");
    $("#confirm-modal-title", this.$modal).attr("id", titleId);
    this.$modal.attr("aria-labelledby", titleId);
    $("body").append(this.$modal);
    this.$modal.foundation();
  }
  _createClass(ConfirmDialog, [{
    key: "confirm",
    value: function confirm(message) {
      var _this = this;
      this.$content.html(message);
      this.$buttonConfirm.off("click");
      this.$buttonCancel.off("click");
      return new Promise(function (resolve) {
        _this.$buttonConfirm.on("click", function (ev) {
          ev.preventDefault();
          _this.$modal.foundation("close");
          resolve(true);
          _this.$source.focus();
        });
        _this.$buttonCancel.on("click", function (ev) {
          ev.preventDefault();
          _this.$modal.foundation("close");
          resolve(false);
          _this.$source.focus();
        });
        _this.$modal.foundation("open").on("closed.zf.reveal", function () {
          _this.$modal.remove();
        });
      });
    }
  }]);
  return ConfirmDialog;
}(); // Override the default confirm dialog by Rails
// See:
// https://github.com/rails/rails/blob/fba1064153d8e2f4654df7762a7d3664b93e9fc8/actionview/app/assets/javascripts/rails-ujs/features/confirm.coffee
//
// There is apparently a better way coming in Rails 6:
// https://github.com/rails/rails/commit/e9aa7ecdee0aa7bb4dcfa5046881bde2f1fe21cc#diff-e1aaa45200e9adcbcb8baf1c5375b5d1
//
// The old approach is broken according to https://github.com/rails/rails/issues/36686#issuecomment-514213323
// so for the moment this needs to be executed **before** Rails.start()
var allowAction = function allowAction(ev, element) {
  var message = $(element).data("confirm");
  if (!message) {
    return true;
  }
  if (!_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().fire(element, "confirm")) {
    return false;
  }
  if (TEMPLATE_HTML === null) {
    TEMPLATE_HTML = $("#confirm-modal")[0].outerHTML;
    $("#confirm-modal").remove();
  }
  var dialog = new ConfirmDialog($(element));
  dialog.confirm(message).then(function (answer) {
    var completed = _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().fire(element, "confirm:complete", [answer]);
    if (answer && completed) {
      // Allow the event to propagate normally and re-dispatch it without
      // the confirm data attribute which the Rails internal method is
      // checking.
      $(element).data("confirm", null);
      $(element).removeAttr("data-confirm");

      // The submit button click events won't do anything if they are
      // dispatched as is. In these cases, just submit the underlying form.
      if (ev.type === "click" && ($(element).is('button[type="submit"]') || $(element).is('input[type="submit"]'))) {
        $(element).parents("form").submit();
      } else {
        var origEv = ev.originalEvent || ev;
        var newEv = origEv;
        if (typeof Event === "function") {
          // Clone the event because otherwise some click events may not
          // work properly when re-dispatched.
          newEv = new origEv.constructor(origEv.type, origEv);
        }
        ev.target.dispatchEvent(newEv);
      }
    }
  });
  return false;
};
var handleConfirm = function handleConfirm(ev, element) {
  if (!allowAction(ev, element)) {
    _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().stopEverything(ev);
  }
};
var getMatchingEventTarget = function getMatchingEventTarget(ev, selector) {
  var target = ev.target;
  while (!(!(target instanceof Element) || _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().matches(target, selector))) {
    target = target.parentNode;
  }
  if (target instanceof Element) {
    return target;
  }
  return null;
};
var handleDocumentEvent = function handleDocumentEvent(ev, matchSelectors) {
  return matchSelectors.some(function (currentSelector) {
    var target = getMatchingEventTarget(ev, currentSelector);
    if (target === null) {
      return false;
    }
    handleConfirm(ev, target);
    return true;
  });
};
document.addEventListener("click", function (ev) {
  return handleDocumentEvent(ev, [(_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().linkClickSelector), (_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().buttonClickSelector), (_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().formInputClickSelector)]);
});
document.addEventListener("change", function (ev) {
  return handleDocumentEvent(ev, [(_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().inputChangeSelector)]);
});
document.addEventListener("submit", function (ev) {
  return handleDocumentEvent(ev, [(_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().formSubmitSelector)]);
});

// This is needed for the confirm dialog to work with Foundation Abide.
// Abide registers its own submit click listeners since Foundation 5.6.x
// which will be handled before the document listeners above. This would
// break the custom confirm functionality when used with Foundation Abide.
document.addEventListener("DOMContentLoaded", function () {
  $((_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().formInputClickSelector)).on("click.confirm", function (ev) {
    handleConfirm(ev, getMatchingEventTarget(ev, (_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default().formInputClickSelector)));
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_field.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_field.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_direct_uploads_upload_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/direct_uploads/upload_modal */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_modal.js");
/* harmony import */ var src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/direct_uploads/upload_utility */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_utility.js");


var loadAttachments = function loadAttachments(modal) {
  Array.from(modal.activeAttachments.children).forEach(function (child) {
    modal.createUploadItem(child.dataset.filename, child.dataset.title, "validated");
  });
};
var addInputEventListener = function addInputEventListener(modal) {
  modal.input.addEventListener("change", function (event) {
    event.preventDefault();
    var files = event.target.files;
    Array.from(files).forEach(function (file) {
      return modal.uploadFile(file);
    });
  });
};
var addButtonEventListener = function addButtonEventListener(modal) {
  modal.button.addEventListener("click", function (event) {
    event.preventDefault();
    Array.from(modal.trashCan.children).forEach(function (item) {
      modal.uploadItems.append(item);
    });
    if (modal.uploadItems.children.length === 0) {
      modal.modalTitle.innerHTML = modal.modalTitle.dataset.addlabel;
    } else {
      modal.modalTitle.innerHTML = modal.modalTitle.dataset.editlabel;
    }
    modal.updateDropZone();
  });
};
var addDropZoneEventListeners = function addDropZoneEventListeners(modal) {
  modal.dropZone.addEventListener("dragenter", function (event) {
    event.preventDefault();
  });
  modal.dropZone.addEventListener("dragover", function (event) {
    event.preventDefault();
    modal.dropZone.classList.add("is-dragover");
  });
  modal.dropZone.addEventListener("dragleave", function () {
    modal.dropZone.classList.remove("is-dragover");
  });
  modal.dropZone.addEventListener("drop", function (event) {
    event.preventDefault();
    var files = event.dataTransfer.files;
    Array.from(files).forEach(function (file) {
      return modal.uploadFile(file);
    });
  });
};
var addSaveButtonEventListener = function addSaveButtonEventListener(modal) {
  modal.saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    var validatedItems = modal.uploadItems.querySelectorAll(".upload-item[data-state='validated']");
    var validatedItemsCount = validatedItems.length;
    validatedItems.forEach(function (item) {
      var details = item.querySelector(".attachment-details");
      if (details) {
        modal.activeAttachments.appendChild(details);
      } else {
        details = modal.activeAttachments.querySelector(".attachment-details[data-filename='".concat(item.dataset.filename, "'"));
      }
      var span = details.querySelector("span");
      span.classList.add("filename");
      if (modal.options.titled) {
        var title = item.querySelector("input[type='text']").value;
        details.dataset.title = title;
        var hiddenTitle = details.querySelector(".hidden-title");
        if (hiddenTitle) {
          hiddenTitle.value = title;
        } else {
          var attachmentId = details.querySelector("[name='".concat(modal.options.resourceName, "[").concat(modal.name, "][]'")).value;
          var ordinalNumber = modal.getOrdinalNumber();
          var hiddenTitleField = (0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.createHiddenInput)("hidden-title", "".concat(modal.options.resourceName, "[").concat(modal.options.addAttribute, "][").concat(ordinalNumber, "][title]"), title);
          var hiddenIdField = (0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.createHiddenInput)("hidden-id", "".concat(modal.options.resourceName, "[").concat(modal.options.addAttribute, "][").concat(ordinalNumber, "][id]"), attachmentId);
          details.appendChild(hiddenTitleField);
          details.appendChild(hiddenIdField);
        }
        span.innerHTML = "".concat(title, " (").concat((0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.truncateFilename)(item.dataset.filename), ")");
      } else {
        span.innerHTML = (0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.truncateFilename)(item.dataset.filename, 19);
      }
      span.style.display = "block";
    });
    if (!modal.options.titled && modal.trashCan.children.length > 0) {
      modal.activeAttachments.innerHTML = "<input name='".concat(modal.options.resourceName, "[remove_").concat(modal.name, "]' type=\"hidden\" value=\"true\">");
    }
    if (validatedItemsCount > 0) {
      // Foundation helper does some magic with error fields, so these must be triggered using jQuery.
      var $el = $(modal.uploadContainer.querySelector("input[type='checkbox']"));
      if ($el) {
        $el.prop("checked", true);
        $el.trigger("change");
      }
    }
    modal.cleanTrashCan();
    modal.updateAddAttachmentsButton();
  });
};
document.addEventListener("DOMContentLoaded", function () {
  var attachmentButtons = document.querySelectorAll("button.add-file");
  attachmentButtons.forEach(function (attachmentButton) {
    var modal = new src_decidim_direct_uploads_upload_modal__WEBPACK_IMPORTED_MODULE_0__["default"](attachmentButton);
    loadAttachments(modal);
    addInputEventListener(modal);
    addButtonEventListener(modal);
    addDropZoneEventListeners(modal);
    addSaveButtonEventListener(modal);
  });
});

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_modal.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_modal.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UploadModal; }
/* harmony export */ });
/* harmony import */ var src_decidim_direct_uploads_uploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/direct_uploads/uploader */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/uploader.js");
/* harmony import */ var src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/direct_uploads/upload_utility */ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_utility.js");
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



// This class handles logic inside upload modal, but since modal is not inside the form
// logic here moves "upload items" / hidden inputs to form.
var UploadModal = /*#__PURE__*/function () {
  function UploadModal(button) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, UploadModal);
    // Button that opens the modal.
    this.button = button;

    // The provided options contains the options passed from the view in the
    // `data-upload` attribute as a JSON.
    var providedOptions = {};
    try {
      // The providedOptions can contain the following keys:
      // - addAttribute - Field name / attribute of resource (e.g. avatar)
      // - resourceName - The resource to which the attribute belongs (e.g. user)
      // - resourceClass - Ruby class of the resource (e.g. Decidim::User)
      // - optional - Defines if file is optional
      // - multiple - Defines if multiple files can be uploaded
      // - titled - Defines if file(s) can have titles
      // - maxFileSize - Defines maximum file size in bytes
      // - formObjectClass - Class of the current form object (e.g. Decidim::AccountForm)
      providedOptions = JSON.parse(button.dataset.upload);
    } catch (_e) {
      // Don't care about the parse errors, just skip the provided options.
    }
    this.options = Object.assign(providedOptions, options);
    this.name = this.button.name;
    this.modal = document.querySelector("#".concat(button.dataset.open));
    this.saveButton = this.modal.querySelector("button.add-file-".concat(this.name));
    this.attachmentCounter = 0;
    this.dropZoneEnabled = true;
    this.modalTitle = this.modal.querySelector(".reveal__title");
    this.uploadItems = this.modal.querySelector(".upload-items");
    this.locales = JSON.parse(this.uploadItems.dataset.locales);
    this.dropZone = this.modal.querySelector(".dropzone");
    this.input = this.dropZone.querySelector("input");
    this.uploadContainer = document.querySelector(".upload-container-for-".concat(this.name));
    this.activeAttachments = this.uploadContainer.querySelector(".active-uploads");
    this.trashCan = this.createTrashCan();
  }
  _createClass(UploadModal, [{
    key: "uploadFile",
    value: function uploadFile(file) {
      var _this = this;
      if (!this.dropZoneEnabled) {
        return;
      }
      var title = file.name.split(".")[0].slice(0, 31);
      var uploadItem = this.createUploadItem(file.name, title, "init");
      var uploader = new src_decidim_direct_uploads_uploader__WEBPACK_IMPORTED_MODULE_0__.Uploader(this, uploadItem, {
        file: file,
        url: this.input.dataset.directUploadUrl,
        attachmentName: file.name
      });
      if (uploader.fileTooBig) {
        return;
      }
      uploader.upload.create(function (error, blob) {
        if (error) {
          uploadItem.dataset.state = "error";
          var progressBar = uploadItem.querySelector(".progress-bar");
          progressBar.classList.add("filled");
          progressBar.innerHTML = _this.locales.error;
          console.error(error);
        } else {
          var ordinalNumber = _this.getOrdinalNumber();
          var attachmentDetails = document.createElement("div");
          attachmentDetails.classList.add("attachment-details");
          attachmentDetails.dataset.filename = file.name;
          var titleAndFileNameSpan = document.createElement("span");
          titleAndFileNameSpan.style.display = "none";
          attachmentDetails.appendChild(titleAndFileNameSpan);
          var hiddenBlobField = (0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.createHiddenInput)(null, null, blob.signed_id);
          if (_this.options.titled) {
            hiddenBlobField.name = "".concat(_this.options.resourceName, "[").concat(_this.options.addAttribute, "][").concat(ordinalNumber, "][file]");
          } else {
            hiddenBlobField.name = "".concat(_this.options.resourceName, "[").concat(_this.options.addAttribute, "]");
          }
          if (_this.options.titled) {
            var hiddenTitleField = (0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.createHiddenInput)("hidden-title", "".concat(_this.options.resourceName, "[").concat(_this.options.addAttribute, "][").concat(ordinalNumber, "][title]"), title);
            titleAndFileNameSpan.innerHTML = "".concat(title, " (").concat(file.name, ")");
            attachmentDetails.appendChild(hiddenTitleField);
          } else {
            titleAndFileNameSpan.innerHTML = file.name;
          }
          if (!_this.options.multiple) {
            _this.cleanTrashCan();
          }
          attachmentDetails.appendChild(hiddenBlobField);
          uploadItem.appendChild(attachmentDetails);
          uploader.validate(blob.signed_id);
        }
      });
      this.updateDropZone();
    }
  }, {
    key: "getOrdinalNumber",
    value: function getOrdinalNumber() {
      var nextOrdinalNumber = this.attachmentCounter;
      this.attachmentCounter += 1;
      return nextOrdinalNumber;
    }
  }, {
    key: "updateDropZone",
    value: function updateDropZone() {
      if (this.options.multiple) {
        return;
      }
      if (this.uploadItems.children.length > 0) {
        this.dropZone.classList.add("disabled");
        this.dropZoneEnabled = false;
        this.input.disabled = true;
      } else {
        this.dropZone.classList.remove("disabled");
        this.dropZoneEnabled = true;
        this.input.disabled = false;
      }
    }
  }, {
    key: "createUploadItem",
    value: function createUploadItem(fileName, title, state) {
      var _fileNameSpan$classLi,
        _this2 = this;
      var wrapper = document.createElement("div");
      wrapper.classList.add("upload-item");
      wrapper.setAttribute("data-filename", fileName);
      var firstRow = document.createElement("div");
      var secondRow = document.createElement("div");
      var thirdRow = document.createElement("div");
      firstRow.classList.add("row", "upload-item-first-row");
      secondRow.classList.add("row", "upload-item-second-row");
      thirdRow.classList.add("row", "upload-item-third-row");
      var fileNameSpan = document.createElement("span");
      var fileNameSpanClasses = ["columns", "file-name-span"];
      if (this.options.titled) {
        fileNameSpanClasses.push("small-4", "medium-5");
      } else {
        fileNameSpanClasses.push("small-12");
      }
      (_fileNameSpan$classLi = fileNameSpan.classList).add.apply(_fileNameSpan$classLi, fileNameSpanClasses);
      fileNameSpan.innerHTML = (0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.truncateFilename)(fileName);
      var progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      if (state) {
        if (state === "validated") {
          progressBar.innerHTML = this.locales.uploaded;
        } else {
          progressBar.innerHTML = "0%";
          progressBar.style.width = "15%";
        }
        wrapper.dataset.state = state;
      }
      var progressBarBorder = document.createElement("div");
      progressBarBorder.classList.add("progress-bar-border");
      progressBarBorder.appendChild(progressBar);
      var progressBarWrapper = document.createElement("div");
      progressBarWrapper.classList.add("columns", "progress-bar-wrapper");
      progressBarWrapper.appendChild(progressBarBorder);
      if (this.options.titled) {
        progressBarWrapper.classList.add("small-4", "medium-5");
      } else {
        progressBarWrapper.classList.add("small-10");
      }
      var errorList = document.createElement("ul");
      errorList.classList.add("upload-errors");
      var removeButton = document.createElement("button");
      removeButton.classList.add("columns", "small-3", "medium-2", "remove-upload-item");
      removeButton.innerHTML = "&times; ".concat(this.locales.remove);
      removeButton.addEventListener("click", function (event) {
        event.preventDefault();
        var item = _this2.uploadItems.querySelector("[data-filename='".concat(fileName, "']"));
        _this2.trashCan.append(item);
        _this2.updateDropZone();
      });
      var titleAndFileNameSpan = document.createElement("span");
      titleAndFileNameSpan.classList.add("columns", "small-5", "title-and-filename-span");
      titleAndFileNameSpan.innerHTML = "".concat(title, " (").concat((0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.truncateFilename)(fileName), ")");
      firstRow.appendChild(fileNameSpan);
      secondRow.appendChild(progressBarWrapper);
      thirdRow.appendChild(errorList);
      var titleInputContainer = null;
      if (this.options.titled) {
        var titleInput = document.createElement("input");
        titleInput.classList.add("attachment-title");
        titleInput.type = "text";
        titleInput.value = title;
        titleInput.addEventListener("input", function (event) {
          event.preventDefault();
          (0,src_decidim_direct_uploads_upload_utility__WEBPACK_IMPORTED_MODULE_1__.checkTitles)(_this2.uploadItems, _this2.saveButton);
        });
        titleInputContainer = document.createElement("div");
        titleInputContainer.classList.add("columns", "small-5", "title-input-container");
        titleInputContainer.appendChild(titleInput);
        var noTitleErrorSpan = document.createElement("span");
        noTitleErrorSpan.classList.add("form-error", "no-title-error");
        noTitleErrorSpan.role = "alert";
        noTitleErrorSpan.innerHTML = this.locales.title_required;
        titleInputContainer.appendChild(noTitleErrorSpan);
        var titleLabelSpan = document.createElement("span");
        titleLabelSpan.classList.add("title-label-span");
        titleLabelSpan.innerHTML = this.locales.title;
        var titleContainer = document.createElement("div");
        titleContainer.classList.add("columns", "small-8", "medium-7", "title-container");
        titleContainer.appendChild(titleLabelSpan);
        firstRow.appendChild(titleContainer);
        secondRow.appendChild(titleInputContainer);
      }
      secondRow.appendChild(removeButton);
      wrapper.appendChild(firstRow);
      wrapper.appendChild(secondRow);
      wrapper.appendChild(thirdRow);
      this.uploadItems.appendChild(wrapper);
      return wrapper;
    }
  }, {
    key: "updateAddAttachmentsButton",
    value: function updateAddAttachmentsButton() {
      if (this.activeAttachments.children.length === 0) {
        this.button.innerHTML = this.modalTitle.dataset.addlabel;
      } else {
        this.button.innerHTML = this.modalTitle.dataset.editlabel;
      }
    }
  }, {
    key: "createTrashCan",
    value: function createTrashCan() {
      var trashCan = document.createElement("div");
      trashCan.classList.add("trash-can");
      trashCan.style.display = "none";
      this.uploadItems.parentElement.appendChild(trashCan);
      return trashCan;
    }
  }, {
    key: "cleanTrashCan",
    value: function cleanTrashCan() {
      var _this3 = this;
      Array.from(this.trashCan.children).forEach(function (item) {
        var fileName = item.dataset.filename;
        var activeAttachment = _this3.activeAttachments.querySelector("div[data-filename='".concat(fileName, "']"));
        if (activeAttachment) {
          activeAttachment.remove();
        }
        item.remove();
      });
    }
  }]);
  return UploadModal;
}();


/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_utility.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/upload_utility.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTitles": function() { return /* binding */ checkTitles; },
/* harmony export */   "createHiddenInput": function() { return /* binding */ createHiddenInput; },
/* harmony export */   "truncateFilename": function() { return /* binding */ truncateFilename; }
/* harmony export */ });
var checkTitles = function checkTitles(parentElement, saveButton) {
  var everyItemHasTitle = true;
  Array.from(parentElement.children).forEach(function (item) {
    var title = item.querySelector("input[type='text']").value;
    var noTitleErrorSpan = item.querySelector(".no-title-error");
    if (!title || title.length === 0) {
      everyItemHasTitle = false;
      saveButton.disabled = true;
      noTitleErrorSpan.classList.add("is-visible");
      item.appendChild(noTitleErrorSpan);
    } else {
      noTitleErrorSpan.classList.remove("is-visible");
    }
  });
  if (everyItemHasTitle) {
    saveButton.disabled = false;
  }
};
var truncateFilename = function truncateFilename(filename) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 31;
  if (filename.length <= maxLength) {
    return filename;
  }
  var charactersFromBegin = Math.floor(maxLength / 2) - 3;
  var charactersFromEnd = maxLength - charactersFromBegin - 3;
  return "".concat(filename.slice(0, charactersFromBegin), "...").concat(filename.slice(-charactersFromEnd));
};
var createHiddenInput = function createHiddenInput(elClasses, elName, elValue) {
  var el = document.createElement("input");
  el.type = "hidden";
  if (elClasses) {
    if (typeof elClasses === "string") {
      el.className = elClasses;
    } else {
      el.className = elClasses.join(" ");
    }
  }
  if (elName) {
    el.name = elName;
  }
  if (elValue) {
    el.value = elValue;
  }
  return el;
};

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/uploader.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/direct_uploads/uploader.js ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uploader": function() { return /* binding */ Uploader; }
/* harmony export */ });
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_0__);
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

var Uploader = /*#__PURE__*/function () {
  function Uploader(modal, uploadItem, options) {
    _classCallCheck(this, Uploader);
    this.modal = modal;
    this.uploadItem = uploadItem;
    this.progressBar = uploadItem.querySelector(".progress-bar");
    this.validationSent = false;
    this.fileTooBig = false;
    if (modal.options.maxFileSize && options.file.size > modal.options.maxFileSize) {
      this.fileTooBig = true;
      this.showError([modal.locales.file_size_too_large]);
    } else {
      this.upload = new _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__.DirectUpload(options.file, options.url, this);
    }
  }
  _createClass(Uploader, [{
    key: "showError",
    value: function showError(errors) {
      this.progressBar.classList.add("filled");
      this.progressBar.innerHTML = this.modal.locales.validation_error;
      this.uploadItem.dataset.state = "error";
      var errorList = this.uploadItem.querySelector(".upload-errors");
      errors.forEach(function (error) {
        var errorItem = document.createElement("li");
        errorItem.classList.add("form-error", "is-visible");
        errorItem.innerHTML = error;
        errorList.appendChild(errorItem);
      });
    }
  }, {
    key: "validate",
    value: function validate(blobId) {
      var _this = this;
      var callback = function callback(data) {
        var errors = [];
        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            value = _Object$entries$_i[1];
          errors = errors.concat(value);
        }
        _this.progressBar.style.justifyContent = "center";
        if (errors.length === 0) {
          _this.progressBar.innerHTML = _this.modal.locales.uploaded;
          _this.uploadItem.dataset.state = "validated";
        } else {
          _this.showError(errors);
        }
        _this.progressBar.classList.add("filled");
      };
      if (!this.validationSent) {
        var property = this.modal.options.addAttribute;
        if (this.modal.options.titled) {
          property = "file";
        }
        var params = new URLSearchParams({
          resourceClass: this.modal.options.resourceClass,
          property: property,
          blob: blobId,
          formClass: this.modal.options.formObjectClass
        });
        fetch("/upload_validations?".concat(params.toString()), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": $("meta[name=csrf-token]").attr("content")
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          callback(data);
        });
        this.validationSent = true;
      }
    }
  }, {
    key: "directUploadWillStoreFileWithXHR",
    value: function directUploadWillStoreFileWithXHR(request) {
      var _this2 = this;
      request.upload.addEventListener("progress", function (event) {
        var progress = Math.floor(event.loaded / event.total * 100);
        var width = "15%";
        if (progress > 15) {
          width = "".concat(progress, "%");
        }
        _this2.progressBar.style.width = width;
        if (progress === 100) {
          _this2.progressBar.innerHTML = _this2.modal.locales.validating;
          return;
        }
        _this2.progressBar.innerHTML = "".concat(progress, "%");
      });
    }
  }]);
  return Uploader;
}();

/***/ }),

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_tags.js":
/*!*********************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0/app/packs/src/decidim/input_tags.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-tagsinput */ "./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js");
/* harmony import */ var bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  var $tagContainer = $(".js-tags-container");

  // Initialize
  $tagContainer.tagsinput({
    tagClass: "input__tag",
    trimValue: true
  });
});

/***/ })

}]);
//# sourceMappingURL=_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_app_packs_src_decidim_configura-dbcbee.js.map