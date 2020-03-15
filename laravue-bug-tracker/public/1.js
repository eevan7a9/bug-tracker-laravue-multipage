(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testers/DetailsTester.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/testers/DetailsTester.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bugs_BugsCardLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bugs/BugsCardLists */ "./resources/js/components/bugs/BugsCardLists.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BugsCardLists: _bugs_BugsCardLists__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["tester_details", "user"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["deleteTester", "toggleLoader"]), {
    removeTester: function removeTester(id) {
      var _this = this;

      if (this.user.admin) {
        this.$swal.fire({
          title: "Remove this Tester?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Delete"
        }).then(function (result) {
          if (result.value) {
            _this.toggleLoader();

            _this.deleteTester(id).then(function () {
              _this.$swal.fire("Success!", "The Tester is now Deleted.", "success");

              _this.$emit("toggleDetails");

              _this.toggleLoader();
            })["catch"](function () {
              _this.$swal.fire("Not allowed!", "Only Admin", "error");

              _this.toggleLoader();
            });
          }
        });
      } else {
        this.$swal.fire("Not allowed!", "Only Admin can perform this action", "info");
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton.btn-secondary[data-v-02b96a0b] {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testers/DetailsTester.vue?vue&type=template&id=02b96a0b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/testers/DetailsTester.vue?vue&type=template&id=02b96a0b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row justify-content-center" },
    [
      _c("div", { staticClass: "col-md-10" }, [
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "card border-primary mt-3" }, [
          _c(
            "div",
            {
              staticClass:
                "card-header bg-light border-primary d-flex justify-content-between align-items-center"
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-primary",
                  on: {
                    click: function($event) {
                      return _vm.$emit("toggleDetails")
                    }
                  }
                },
                [_vm._v("Back")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn",
                  class: !_vm.user.admin ? "btn-secondary" : "btn-danger",
                  on: {
                    click: function($event) {
                      return _vm.removeTester(_vm.tester_details.id)
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }
                    },
                    [
                      _c("polyline", { attrs: { points: "3 6 5 6 21 6" } }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        }
                      }),
                      _vm._v(" "),
                      _c("line", {
                        attrs: { x1: "10", y1: "11", x2: "10", y2: "17" }
                      }),
                      _vm._v(" "),
                      _c("line", {
                        attrs: { x1: "14", y1: "11", x2: "14", y2: "17" }
                      })
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "mb-2" }, [
              _c("label", { staticClass: "font-weight-bold" }, [
                _vm._v("Name")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card bg-light p-2" }, [
                _vm._v(_vm._s(_vm.tester_details.name))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-2" }, [
              _c("label", { staticClass: "font-weight-bold" }, [
                _vm._v("Email")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card bg-light p-2" }, [
                _vm._v(_vm._s(_vm.tester_details.email))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Role")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.tester_details.roles, function(role) {
                    return _c(
                      "div",
                      { key: role.id, staticClass: "card bg-light p-2" },
                      [_vm._v(_vm._s(role.name))]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("label", { staticClass: "font-weight-bold" }, [
                  _vm._v("Joined")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card bg-light p-2" }, [
                  _vm._v(_vm._s(_vm.tester_details.created_at))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 mt-3" },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "text-center",
                      attrs: {
                        "bg-variant": "light",
                        "border-variant": "primary",
                        "header-bg-variant": "primary",
                        "header-text-variant": "white",
                        "text-variant": "dark",
                        header: "Total Bugs Reported"
                      }
                    },
                    [
                      _c("b-card-text", [
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v(_vm._s(_vm.tester_details.bugs_added.length))
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer border-primary" })
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("h3", { staticClass: "mt-4 font-weight-bold" }, [
          _vm._v("Reported Bugs :")
        ])
      ]),
      _vm._v(" "),
      _c("BugsCardLists", {
        staticClass: "col-md-8",
        attrs: { bugs: _vm.tester_details.bugs_added }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/testers/DetailsTester.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/testers/DetailsTester.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsTester_vue_vue_type_template_id_02b96a0b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsTester.vue?vue&type=template&id=02b96a0b&scoped=true& */ "./resources/js/components/testers/DetailsTester.vue?vue&type=template&id=02b96a0b&scoped=true&");
/* harmony import */ var _DetailsTester_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsTester.vue?vue&type=script&lang=js& */ "./resources/js/components/testers/DetailsTester.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DetailsTester_vue_vue_type_style_index_0_id_02b96a0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css& */ "./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetailsTester_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailsTester_vue_vue_type_template_id_02b96a0b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailsTester_vue_vue_type_template_id_02b96a0b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02b96a0b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/testers/DetailsTester.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/testers/DetailsTester.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/testers/DetailsTester.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsTester.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testers/DetailsTester.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_style_index_0_id_02b96a0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testers/DetailsTester.vue?vue&type=style&index=0&id=02b96a0b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_style_index_0_id_02b96a0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_style_index_0_id_02b96a0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_style_index_0_id_02b96a0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_style_index_0_id_02b96a0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_style_index_0_id_02b96a0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/testers/DetailsTester.vue?vue&type=template&id=02b96a0b&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/testers/DetailsTester.vue?vue&type=template&id=02b96a0b&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_template_id_02b96a0b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsTester.vue?vue&type=template&id=02b96a0b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/testers/DetailsTester.vue?vue&type=template&id=02b96a0b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_template_id_02b96a0b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsTester_vue_vue_type_template_id_02b96a0b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);