(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddProject.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      visible: false,
      project: {
        image: ""
      }
    };
  },
  methods: {
    onImageChange: function onImageChange(e) {
      // we get the image
      //   console.log(e.target.files[0]);
      this.project.image = e.target.files[0];
    },
    publish: function () {
      var _publish = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // we append our data
                formData = new FormData();
                formData.append("name", this.project.name);
                formData.append("version", this.project.version);
                formData.append("environment", this.project.environment);
                formData.append("os", this.project.os);
                formData.append("description", this.project.description);
                formData.append("started", this.project.started);
                formData.append("released", this.project.released);

                if (this.project.image) {
                  formData.append("image", this.project.image);
                }

                _context.prev = 9;
                _context.next = 12;
                return axios.post("api_web_session/v1/projects", formData, {
                  headers: {
                    Accept: "application/json",
                    "content-type": "multipart/form-data"
                  }
                });

              case 12:
                result = _context.sent;
                alert("".concat(result.statusText, ", A project is successfuly added.")); // console.log(result);

                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](9);
                alert(_context.t0); // console.log(error.response);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[9, 16]]);
      }));

      function publish() {
        return _publish.apply(this, arguments);
      }

      return publish;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataProject.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataProject.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["projects"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["getProjects"])),
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.getProjects();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }()
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Projects.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Projects.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AddProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AddProject */ "./resources/js/components/AddProject.vue");
/* harmony import */ var _components_TableDataProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableDataProject */ "./resources/js/components/TableDataProject.vue");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "projects",
  components: {
    TableDataProject: _components_TableDataProject__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddProject: _components_AddProject__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table-container[data-v-066c794c] {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n#tableHead[data-v-066c794c] {\n  top: 0 !important;\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-button",
        {
          class: _vm.visible ? null : "collapsed",
          attrs: {
            "aria-expanded": _vm.visible ? "true" : "false",
            "aria-controls": "collapse-4",
            variant: "success"
          },
          on: {
            click: function($event) {
              _vm.visible = !_vm.visible
            }
          }
        },
        [
          _vm._v("\n    New Project\n    "),
          _c("span", [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              },
              [
                _c("rect", {
                  attrs: {
                    x: "3",
                    y: "3",
                    width: "18",
                    height: "18",
                    rx: "2",
                    ry: "2"
                  }
                }),
                _vm._v(" "),
                _c("line", {
                  attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
                }),
                _vm._v(" "),
                _c("line", { attrs: { x1: "8", y1: "12", x2: "16", y2: "12" } })
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-collapse",
        {
          staticClass: "mt-2",
          attrs: { id: "collapse-4" },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c("b-card", [
            _c(
              "form",
              {
                attrs: { enctype: "multipart/form-data" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.publish($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "row d-flex justify-content-center" },
                  [
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.project.name,
                              expression: "project.name",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder:
                              "Name Generator...justify-content-center"
                          },
                          domProps: { value: _vm.project.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "name",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            staticClass: "form-text text-muted",
                            attrs: { id: "helpId" }
                          },
                          [_vm._v("Name of the Project")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "version" } }, [
                              _vm._v("Version")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.project.version,
                                  expression: "project.version",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "version",
                                id: "version",
                                placeholder: "1.0.0"
                              },
                              domProps: { value: _vm.project.version },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.project,
                                    "version",
                                    $event.target.value.trim()
                                  )
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "small",
                              { staticClass: "form-text text-muted" },
                              [_vm._v("Version of the Project")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Environment")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.project.environment,
                                    expression: "project.environment"
                                  }
                                ],
                                staticClass: "custom-select",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.project,
                                      "environment",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { selected: "" } }, [
                                  _vm._v("Web")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "mobile" } }, [
                                  _vm._v("Mobile")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "desktop" } }, [
                                  _vm._v("Desktop")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "web and mobile" } },
                                  [_vm._v("Web and Mobile")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "desktop and mobile" } },
                                  [_vm._v("Desktop and Mobile")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "all" } }, [
                                  _vm._v("All")
                                ])
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "os" } }, [
                            _vm._v("Operating System")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.project.os,
                                  expression: "project.os"
                                }
                              ],
                              staticClass: "custom-select",
                              attrs: { name: "os", id: "os" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.project,
                                    "os",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "cross platform" } },
                                [_vm._v("Cross Platform")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "mac os" } }, [
                                _vm._v("Mac OS")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "windows" } }, [
                                _vm._v("Windows")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "linux" } }, [
                                _vm._v("Linux")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "android" } }, [
                                _vm._v("Android")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "ios" } }, [
                                _vm._v("IOS")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "description" } }, [
                          _vm._v("Description")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.project.description,
                              expression: "project.description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "description", rows: "3" },
                          domProps: { value: _vm.project.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.project,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Development Date")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.project.started,
                                  expression: "project.started"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "date" },
                              domProps: { value: _vm.project.started },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.project,
                                    "started",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "small",
                              { staticClass: "form-text text-muted" },
                              [_vm._v("Date Development Started")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Released Dated")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.project.released,
                                  expression: "project.released"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "date" },
                              domProps: { value: _vm.project.released },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.project,
                                    "released",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "small",
                              { staticClass: "form-text text-muted" },
                              [_vm._v("Date Development Started")]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6 my-3" }, [
                        _c("div", { staticClass: "input-group" }, [
                          _c("div", { staticClass: "input-group-prepend" }, [
                            _c(
                              "span",
                              {
                                staticClass: "input-group-text",
                                attrs: { id: "image-upload" }
                              },
                              [_vm._v("Upload")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "custom-file" }, [
                            _c("input", {
                              staticClass: "custom-file-input",
                              attrs: {
                                type: "file",
                                id: "cover-image-upload",
                                "aria-describedby": "image-upload"
                              },
                              on: { change: _vm.onImageChange }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "custom-file-label",
                                attrs: { for: "cover-image-upload" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.project.image
                                      ? _vm.project.image.name
                                      : "Cover Image"
                                  )
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-right" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Submit")]
                        )
                      ])
                    ])
                  ]
                )
              ]
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataProject.vue?vue&type=template&id=066c794c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataProject.vue?vue&type=template&id=066c794c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "table-container" }, [
      _c("table", { staticClass: "table table-hover" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.projects, function(project, index) {
            return _c("tr", { key: index }, [
              _c("th", { attrs: { scope: "row" } }, [
                _vm._v(_vm._s(index + 1))
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(project.name))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(project.version))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(project.environment))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(project.os))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(project.development_start))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(project.release_date))])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "thead",
      { staticClass: "thead-light", attrs: { id: "tableHead" } },
      [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Version")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Environment")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Operasting System")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [
            _vm._v("Development Started")
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Released at")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Projects.vue?vue&type=template&id=55bf53fa&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Projects.vue?vue&type=template&id=55bf53fa& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("AddProject"),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("TableDataProject")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AddProject.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AddProject.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProject_vue_vue_type_template_id_78a2f3e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProject.vue?vue&type=template&id=78a2f3e3& */ "./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&");
/* harmony import */ var _AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProject.vue?vue&type=script&lang=js& */ "./resources/js/components/AddProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProject_vue_vue_type_template_id_78a2f3e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProject_vue_vue_type_template_id_78a2f3e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddProject.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/AddProject.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_78a2f3e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=template&id=78a2f3e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_78a2f3e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_78a2f3e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TableDataProject.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/TableDataProject.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableDataProject_vue_vue_type_template_id_066c794c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableDataProject.vue?vue&type=template&id=066c794c&scoped=true& */ "./resources/js/components/TableDataProject.vue?vue&type=template&id=066c794c&scoped=true&");
/* harmony import */ var _TableDataProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableDataProject.vue?vue&type=script&lang=js& */ "./resources/js/components/TableDataProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TableDataProject_vue_vue_type_style_index_0_id_066c794c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css& */ "./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TableDataProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableDataProject_vue_vue_type_template_id_066c794c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableDataProject_vue_vue_type_template_id_066c794c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "066c794c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TableDataProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TableDataProject.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/TableDataProject.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_style_index_0_id_066c794c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataProject.vue?vue&type=style&index=0&id=066c794c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_style_index_0_id_066c794c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_style_index_0_id_066c794c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_style_index_0_id_066c794c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_style_index_0_id_066c794c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_style_index_0_id_066c794c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/TableDataProject.vue?vue&type=template&id=066c794c&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/TableDataProject.vue?vue&type=template&id=066c794c&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_template_id_066c794c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataProject.vue?vue&type=template&id=066c794c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataProject.vue?vue&type=template&id=066c794c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_template_id_066c794c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataProject_vue_vue_type_template_id_066c794c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Projects.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Projects.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_55bf53fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=55bf53fa& */ "./resources/js/pages/Projects.vue?vue&type=template&id=55bf53fa&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/pages/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_55bf53fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projects_vue_vue_type_template_id_55bf53fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Projects.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Projects.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects.vue?vue&type=template&id=55bf53fa&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Projects.vue?vue&type=template&id=55bf53fa& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_55bf53fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=template&id=55bf53fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Projects.vue?vue&type=template&id=55bf53fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_55bf53fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_55bf53fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);