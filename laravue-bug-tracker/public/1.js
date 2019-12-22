(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddBug.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      projects: [],
      bug: {}
    };
  },
  methods: {
    submit: function submit() {
      console.log(this.bug);
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                method: "get",
                url: "api_web_session/v1/projects"
              };
              _context.prev = 1;
              _context.next = 4;
              return axios(config);

            case 4:
              result = _context.sent;
              this.projects = result.data; //   console.log(this.projects);

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              alert(_context.t0); //   console.log(error.response);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }()
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Bugs.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Bugs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AddBug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AddBug */ "./resources/js/components/AddBug.vue");
//
//
//
//
//
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
  name: "bugs",
  components: {
    AddBug: _components_AddBug__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=template&id=0c4baa84&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddBug.vue?vue&type=template&id=0c4baa84&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-100" },
    [
      _c(
        "b-button",
        {
          directives: [
            {
              name: "b-toggle",
              rawName: "v-b-toggle.collapse-1",
              modifiers: { "collapse-1": true }
            }
          ],
          attrs: { variant: "success" }
        },
        [
          _vm._v("\n    New Bug\n    "),
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
      _c("b-collapse", { staticClass: "mt-2", attrs: { id: "collapse-1" } }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [
            _c("b-card", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "title" } }, [
                      _vm._v("Bug Title")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.bug.title,
                          expression: "bug.title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "title",
                        "aria-describedby": "helpId",
                        placeholder: "Navbar error"
                      },
                      domProps: { value: _vm.bug.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.bug, "title", $event.target.value)
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
                      [_vm._v("name that describe the bug")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "project" } }, [
                      _vm._v("Project Name")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.bug.project,
                            expression: "bug.project"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "project", id: "project" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.bug,
                              "project",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.projects, function(project) {
                        return _c(
                          "option",
                          { key: project.id, domProps: { value: project.id } },
                          [_vm._v(_vm._s(project.name))]
                        )
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("Bug Description")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.bug.description,
                      expression: "bug.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "description", id: "description", rows: "3" },
                  domProps: { value: _vm.bug.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.bug, "description", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "browser" } }, [
                      _vm._v("Browser")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.bug.browser,
                            expression: "bug.browser"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "browser", id: "browser" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.bug,
                              "browser",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", [_vm._v("Chrome")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Firefox")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Opera")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Edge")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Safari")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Internet Explorer")])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "operating_system" } }, [
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
                            value: _vm.bug.os,
                            expression: "bug.os"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "operating_system",
                          id: "operating_system"
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.bug,
                              "os",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", [_vm._v("Mac Os")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Windows 10")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Windows 8")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Linux (Debian/Ubuntu)")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Linux (Manjaro)")])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "type" } }, [
                      _vm._v("Bug Type")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.bug.type,
                            expression: "bug.type"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "type", id: "type" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.bug,
                              "type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", [_vm._v("New Feature")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Frontend/Design")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Functional Bugs")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Api")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Handling Error")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Control Flow")])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "radio-container" }, [
                    _c("label", [_vm._v("Priority")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check" }, [
                      _c("label", { staticClass: "form-check-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bug.priority,
                              expression: "bug.priority"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "radio", id: "high", value: "high" },
                          domProps: {
                            checked: _vm._q(_vm.bug.priority, "high")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.bug, "priority", "high")
                            }
                          }
                        }),
                        _vm._v("\n                  High\n                ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check" }, [
                      _c("label", { staticClass: "form-check-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bug.priority,
                              expression: "bug.priority"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "radio", id: "mid", value: "mid" },
                          domProps: {
                            checked: _vm._q(_vm.bug.priority, "mid")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.bug, "priority", "mid")
                            }
                          }
                        }),
                        _vm._v("\n                  Mid\n                ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check" }, [
                      _c("label", { staticClass: "form-check-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bug.priority,
                              expression: "bug.priority"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "radio", id: "low", value: "low" },
                          domProps: {
                            checked: _vm._q(_vm.bug.priority, "low")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.bug, "priority", "low")
                            }
                          }
                        }),
                        _vm._v("\n                  Low\n                ")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "radio-container" }, [
                    _c("label", [_vm._v("Severity")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check" }, [
                      _c("label", { staticClass: "form-check-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bug.severity,
                              expression: "bug.severity"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "radio", id: "high", value: "high" },
                          domProps: {
                            checked: _vm._q(_vm.bug.severity, "high")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.bug, "severity", "high")
                            }
                          }
                        }),
                        _vm._v("\n                  High\n                ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check" }, [
                      _c("label", { staticClass: "form-check-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bug.severity,
                              expression: "bug.severity"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "radio", id: "mid", value: "mid" },
                          domProps: {
                            checked: _vm._q(_vm.bug.severity, "mid")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.bug, "severity", "mid")
                            }
                          }
                        }),
                        _vm._v("\n                  Mid\n                ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check" }, [
                      _c("label", { staticClass: "form-check-label" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bug.severity,
                              expression: "bug.severity"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "radio", id: "low", value: "low" },
                          domProps: {
                            checked: _vm._q(_vm.bug.severity, "low")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.bug, "severity", "low")
                            }
                          }
                        }),
                        _vm._v("\n                  Low\n                ")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "assigned" } }, [
                      _vm._v("Assigned To :")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.bug.developer,
                            expression: "bug.developer"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "assigned", id: "assigned" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.bug,
                              "developer",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1x" } }, [
                          _vm._v("Naruto")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2x" } }, [
                          _vm._v("Sakura")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3x" } }, [
                          _vm._v("Sasuke")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4x" } }, [
                          _vm._v("Luffy")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "5x" } }, [
                          _vm._v("Nami")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 mt-5" }, [
                  _c("div", { staticClass: "input-group" }, [
                    _c("div", { staticClass: "input-group-prepend" }, [
                      _c(
                        "span",
                        {
                          staticClass: "input-group-text",
                          attrs: { id: "inputGroupFileAddon01" }
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
                          id: "inputGroupFile01",
                          "aria-describedby": "inputGroupFileAddon01"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-file-label",
                          attrs: { for: "inputGroupFile01" }
                        },
                        [_vm._v("Choose file")]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-center my-3" }, [
                _c("button", { staticClass: "btn btn-primary btn-lg" }, [
                  _vm._v("\n            Submit\n            "),
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
                      _c("line", {
                        attrs: { x1: "22", y1: "2", x2: "11", y2: "13" }
                      }),
                      _vm._v(" "),
                      _c("polygon", {
                        attrs: { points: "22 2 15 22 11 13 2 9 22 2" }
                      })
                    ]
                  )
                ])
              ])
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Bugs.vue?vue&type=template&id=6ac3a408&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Bugs.vue?vue&type=template&id=6ac3a408& ***!
  \**************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "row justify-content-start w-100 px-3" },
      [_c("AddBug")],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "add-form" }, [_c("form")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("Table here")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AddBug.vue":
/*!********************************************!*\
  !*** ./resources/js/components/AddBug.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddBug_vue_vue_type_template_id_0c4baa84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBug.vue?vue&type=template&id=0c4baa84&scoped=true& */ "./resources/js/components/AddBug.vue?vue&type=template&id=0c4baa84&scoped=true&");
/* harmony import */ var _AddBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBug.vue?vue&type=script&lang=js& */ "./resources/js/components/AddBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBug_vue_vue_type_template_id_0c4baa84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddBug_vue_vue_type_template_id_0c4baa84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c4baa84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddBug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddBug.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/AddBug.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddBug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddBug.vue?vue&type=template&id=0c4baa84&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/AddBug.vue?vue&type=template&id=0c4baa84&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_template_id_0c4baa84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddBug.vue?vue&type=template&id=0c4baa84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=template&id=0c4baa84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_template_id_0c4baa84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_template_id_0c4baa84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Bugs.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Bugs.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bugs_vue_vue_type_template_id_6ac3a408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bugs.vue?vue&type=template&id=6ac3a408& */ "./resources/js/pages/Bugs.vue?vue&type=template&id=6ac3a408&");
/* harmony import */ var _Bugs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bugs.vue?vue&type=script&lang=js& */ "./resources/js/pages/Bugs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bugs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bugs_vue_vue_type_template_id_6ac3a408___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bugs_vue_vue_type_template_id_6ac3a408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Bugs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Bugs.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Bugs.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bugs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Bugs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Bugs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bugs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Bugs.vue?vue&type=template&id=6ac3a408&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Bugs.vue?vue&type=template&id=6ac3a408& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bugs_vue_vue_type_template_id_6ac3a408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Bugs.vue?vue&type=template&id=6ac3a408& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Bugs.vue?vue&type=template&id=6ac3a408&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bugs_vue_vue_type_template_id_6ac3a408___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bugs_vue_vue_type_template_id_6ac3a408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);