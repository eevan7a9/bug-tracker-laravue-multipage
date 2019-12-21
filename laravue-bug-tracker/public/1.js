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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      visible: false,
      project: {}
    };
  },
  methods: {
    publish: function () {
      var _publish = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("https://jsonplaceholder.typicode.com/todos/1");

              case 2:
                result = _context.sent;
                console.log(result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function publish() {
        return _publish.apply(this, arguments);
      }

      return publish;
    }()
  }
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
    AddProject: _components_AddProject__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

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
    "form",
    { staticClass: "mt-5" },
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
          _vm._v("\n    Toggle Collapse\n    "),
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
                              rawName: "v-model",
                              value: _vm.project.name,
                              expression: "project.name"
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
                              _vm.$set(_vm.project, "name", $event.target.value)
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
                                  rawName: "v-model",
                                  value: _vm.project.version,
                                  expression: "project.version"
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
                                    $event.target.value
                                  )
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
                              _vm._v("Type")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.project.type,
                                    expression: "project.type"
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
                                      "type",
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
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Mobile")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Desktop")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Web and Mobile")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Desktop and Mobile")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
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
                              staticClass: "custom-select",
                              attrs: { name: "os", id: "os" }
                            },
                            [
                              _c("option", [_vm._v("Cross Platform")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Mac OS")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Windows")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Linux")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Android")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("IOS")])
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
                          staticClass: "form-control",
                          attrs: {
                            name: "description",
                            id: "description",
                            rows: "3"
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
    [_c("AddProject"), _vm._v(" "), _c("h1", [_vm._v("Projects")])],
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