"use strict";
(self["webpackChunkbosa_cities_new"] = self["webpackChunkbosa_cities_new"] || []).push([["_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_rc1_app_packs_src_decidim_autoc-931da0"],{

/***/ "../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0.rc1/app/packs/src/decidim/autocomplete.js":
/*!***************************************************************************************************************************!*\
  !*** ../../../../.rvm/gems/ruby-3.0.2@bosa-cities-new/gems/decidim-core-0.27.0.rc1/app/packs/src/decidim/autocomplete.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoComplete; }
/* harmony export */ });
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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



var AutoComplete = /*#__PURE__*/function () {
  function AutoComplete(el) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, AutoComplete);

    this.element = el;
    this.stickySelectedSpan = null;
    this.clearStickySelectionSpan = null;
    this.stickyHiddenInput = null;
    this.promptDiv = null;
    var thresholdTemp = options.threshold || 2;
    this.options = Object.assign({
      // Defines name of the hidden input (e.g. assembly_member[user_id])
      name: null,
      // Placeholder of the visible input field
      placeholder: "",
      // Defines what happens after user has selected value from suggestions
      // sticky - Allows selecting a single value and not editing the value after selected (e.g. as the admin autocomplete fields)
      // single - Allows selecting a single value and editing the selected text after the selection (e.g. geocoding field)
      // multi - Allows selecting multiple values
      // null (default) - Disable selection event handling in this class
      mode: null,
      // Defines if we show input help (e.g. "Type at least three characters to search") or not.
      searchPrompt: false,
      // Defines search prompt message, only shown if showPrompt is enabled!
      searchPromptText: "Type at least ".concat(thresholdTemp, " characters to search"),
      // Defines items that are selected already when page is loaded before user selects them. (e.g. when form submit fails)
      selected: null,
      // Defines how many characters input has to have before we start searching
      threshold: thresholdTemp,
      // Defines how many results to show in the autocomplete selection list
      // by maximum.
      maxResults: 10,
      // Defines the data keys against which to match the user input when
      // searching through the results. For example, when the following
      // data is returned by the API:
      //   { id: 123, name: "John", nickname: "john", __typename: "User" }
      //
      // You can define the data keys array as ["name", "nickname"] in
      // which case the results shown to user would be only those that
      // have matching text in these defined fields.
      dataMatchKeys: null,
      // The data source is a method that gets the callback parameter as
      // its first argument which should be called with the results array
      // once they are returned by the API.
      // For example:
      //   (query, callback) => {
      //     (async () => {
      //       const results = await callAjax(`/api/url?query=${query}`);
      //       callback(results);
      //     })();
      //   }
      //
      // Signature: (callback: Function)
      dataSource: function dataSource() {
        return [];
      },
      // Filters the data list returned by the data source before it is shown
      // to the user. Can be used e.g. to hide already selected values from
      // the list.
      dataFilter: null,
      // Delay in milliseconds how long to wait after user action before
      // doing a backend request.
      delay: 200,
      // Allows modifying the suggested items before they are displayed in the list
      // Signature: (element: HTMLElement, value: Object)
      modifyResult: null
    }, options);
    this.autocomplete = new (_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default())({
      selector: function selector() {
        return _this.element;
      },
      placeHolder: options.placeholder,
      // Delay (milliseconds) before autocomplete engine starts. It's preventing many queries when user is typing fast.
      debounce: 200,
      threshold: this.options.threshold,
      data: {
        keys: this.options.dataMatchKeys,
        src: function () {
          var _src = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
            var fetchResults;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    fetchResults = function fetchResults() {
                      return new Promise(function (resolve) {
                        _this.options.dataSource(query, resolve);
                      });
                    };

                    _context.prev = 1;
                    _context.next = 4;
                    return fetchResults();

                  case 4:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](1);
                    return _context.abrupt("return", _context.t0);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[1, 7]]);
          }));

          function src(_x) {
            return _src.apply(this, arguments);
          }

          return src;
        }(),
        filter: function filter(list) {
          if (_this.options.dataFilter) {
            return _this.options.dataFilter(list);
          }

          return list;
        }
      },
      resultsList: {
        maxResults: this.options.maxResults
      },
      resultItem: {
        element: function element(item, data) {
          if (!_this.options.modifyResult) {
            return;
          }

          _this.options.modifyResult(item, data.value);
        }
      },
      events: {
        input: {
          blur: function blur() {
            _this.promptDiv.style.display = "none";
          }
        }
      }
    });
    this.acWrapper = this.element.closest(".autoComplete_wrapper");
    this.element.ac = this.autocomplete; // Stop input field from bubbling open and close events to parent elements,
    // because foundation closes modal from these events.

    var stopPropagation = function stopPropagation(event) {
      event.stopPropagation();
    };

    this.element.addEventListener("close", stopPropagation);
    this.element.addEventListener("open", stopPropagation);
    this.createPromptDiv();

    switch (this.options.mode) {
      case "sticky":
        this.createStickySelect(this.options.name);
        break;

      case "multi":
        this.createMultiSelect(this.options.name);
        break;

      default:
    }
  }

  _createClass(AutoComplete, [{
    key: "setInput",
    value: function setInput(value) {
      this.autocomplete.input.value = value;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      switch (this.options.mode) {
        case "single":
          this.setInput(event.detail.selection.value[event.detail.selection.key]);
          break;

        case "sticky":
          this.handleStickyEvents(event);
          break;

        case "multi":
          this.handleMultiEvents(event);
          break;

        default:
      }
    }
  }, {
    key: "handleMultiEvents",
    value: function handleMultiEvents(event) {
      switch (event.type) {
        case "selection":
          this.addMultiSelectItem(event.detail.selection);
          break;

        default:
      }
    }
  }, {
    key: "handleStickyEvents",
    value: function handleStickyEvents(event) {
      switch (event.type) {
        case "selection":
          this.addStickySelectItem(event.detail.selection);
          break;

        case "click":
          if (event.target === this.clearStickySelectionSpan) {
            this.removeStickySelection();
          }

          break;

        case "keyup":
          if (this.stickyHiddenInput.value !== "" && event.target === this.element && (["Escape", "Backspace", "Delete"].includes(event.key) || /^[a-z0-9]$/i.test(event.key))) {
            this.removeStickySelection();
          } else if (this.options.searchPrompt) {
            if (this.stickyHiddenInput.value === "" && this.element.value.length < this.options.threshold) {
              this.promptDiv.style.display = "block";
            } else {
              this.promptDiv.style.display = "none";
            }
          }

          break;

        default:
      }
    }
  }, {
    key: "createHiddenInput",
    value: function createHiddenInput(value) {
      var hiddenInput = document.createElement("input");
      hiddenInput.name = this.options.name;
      hiddenInput.type = "hidden";

      if (value) {
        hiddenInput.value = value;
      }

      this.acWrapper.prepend(hiddenInput);
      return hiddenInput;
    }
  }, {
    key: "removeStickySelection",
    value: function removeStickySelection() {
      this.stickyHiddenInput.value = "";
      this.element.placeholder = this.options.placeholder;
      this.clearStickySelectionSpan.style.display = "none";
      this.stickySelectedSpan.style.display = "none";
    }
  }, {
    key: "addStickySelectItem",
    value: function addStickySelectItem(selection) {
      this.stickyHiddenInput.value = selection.value.value;
      this.element.placeholder = "";
      this.stickySelectedSpan.innerHTML = selection.value[selection.key];
      this.stickySelectedSpan.style.display = "block";
      this.clearStickySelectionSpan.style.display = "block";
      this.setInput("");
    }
  }, {
    key: "addMultiSelectItem",
    value: function addMultiSelectItem(selection) {
      var _this2 = this;

      this.setInput("");
      var chosen = document.createElement("span");
      chosen.classList.add("label", "primary", "autocomplete__selected-item", "multi");
      chosen.innerHTML = selection.value[selection.key];
      var clearSelection = document.createElement("span");
      clearSelection.classList.add("clear-multi-selection");
      clearSelection.innerHTML = "&times;";
      clearSelection.setAttribute("data-remove", selection.value.value);
      clearSelection.addEventListener("click", function (evt) {
        var hiddenInput = _this2.acWrapper.querySelector("input[type='hidden'][value='".concat(selection.value.value, "']"));

        if (hiddenInput) {
          hiddenInput.remove();
          evt.target.parentElement.remove();
        }
      });
      chosen.appendChild(clearSelection);
      var multiSelectWrapper = this.acWrapper.querySelector(".multiselect");
      var inputContainer = multiSelectWrapper.querySelector("span.input-container");
      multiSelectWrapper.insertBefore(chosen, inputContainer);
      this.createHiddenInput(selection.value.value);
    }
  }, {
    key: "createStickySelect",
    value: function createStickySelect() {
      var _this3 = this;

      this.stickySelectedSpan = document.createElement("span");
      this.stickySelectedSpan.classList.add("autocomplete__selected-item", "sticky");
      this.stickySelectedSpan.style.display = "none";
      this.stickySelectedSpan.addEventListener("click", function () {
        return _this3.element.focus();
      });
      this.stickyHiddenInput = this.createHiddenInput();
      this.clearStickySelectionSpan = document.createElement("span");
      this.clearStickySelectionSpan.className = "clear-sticky-selection";
      this.clearStickySelectionSpan.innerHTML = "&times;";
      this.clearStickySelectionSpan.style.display = "none";
      this.clearStickySelectionSpan.addEventListener("click", this);
      this.element.addEventListener("selection", this);
      this.element.addEventListener("keyup", this);
      this.acWrapper.insertBefore(this.clearStickySelectionSpan, this.element);
      this.acWrapper.insertBefore(this.stickySelectedSpan, this.element);

      if (this.options.selected) {
        this.addStickySelectItem(this.options.selected);
      }
    }
  }, {
    key: "createMultiSelect",
    value: function createMultiSelect() {
      var _this4 = this;

      var multiSelectWrapper = document.createElement("div");
      multiSelectWrapper.classList.add("multiselect");
      var inputContainer = document.createElement("span");
      inputContainer.classList.add("input-container");
      multiSelectWrapper.appendChild(inputContainer);
      this.acWrapper.prepend(multiSelectWrapper);
      inputContainer.appendChild(this.element);
      this.element.addEventListener("selection", this);
      multiSelectWrapper.addEventListener("click", function () {
        _this4.element.focus();
      });

      if (this.options.selected) {
        this.options.selected.forEach(function (selection) {
          _this4.addMultiSelectItem(selection);
        });
      }
    }
  }, {
    key: "createPromptDiv",
    value: function createPromptDiv() {
      this.promptDiv = document.createElement("div");
      this.promptDiv.classList.add("search-prompt");
      this.promptDiv.style.display = "none";
      this.promptDiv.innerHTML = this.options.searchPromptText;
      this.acWrapper.appendChild(this.promptDiv);
    }
  }]);

  return AutoComplete;
}();



/***/ })

}]);
//# sourceMappingURL=_rvm_gems_ruby-3_0_2_bosa-cities-new_gems_decidim-core-0_27_0_rc1_app_packs_src_decidim_autoc-931da0.js.map