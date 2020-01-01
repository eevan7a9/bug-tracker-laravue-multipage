(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeveloper.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddDeveloper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      visible: false,
      restriction: false,
      email: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["user"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["addDeveloper"]), {
    visibleForm: function visibleForm() {
      if (this.user.admin) {
        this.visible = !this.visible;
      } else {
        this.restriction = true;
        this.$swal.fire("Not Allowed", "Only Admin is allowed", "info");
      }
    },
    submit: function submit() {
      var _this = this;

      this.addDeveloper(this.email).then(function (res) {
        _this.$swal.fire("Developer Added!", "Success, we have new developer", "success");

        _this.email = "";
        _this.visible = false;
      })["catch"](function () {
        _this.$swal.fire("Unknown Email!", "Failed, unregistered E-mail.", "error");
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsDeveloper.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsDeveloper.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["developer_details", "user"]),
  filters: {
    getFixedBugs: function getFixedBugs(bugs) {
      if (bugs.length < 1) {
        return 0;
      }

      var fixed = bugs.filter(function (bug) {
        return bug.is_fixed == 1;
      });
      return fixed.length;
    },
    getPendingBugs: function getPendingBugs(bugs) {
      if (bugs.length < 1) {
        return 0;
      }

      var fixed = bugs.filter(function (bug) {
        return bug.is_fixed != 1;
      });
      return fixed.length;
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["deleteDeveloper"]), {
    removeDeveloper: function removeDeveloper(id) {
      var _this = this;

      if (this.user.admin) {
        this.$swal.fire({
          title: "Remove this Developer?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Delete"
        }).then(function (result) {
          if (result.value) {
            _this.deleteDeveloper(id).then(function () {
              _this.$swal.fire("Success!", "The Developer is now Deleted.", "success");

              _this.$emit("toggleDetails");
            })["catch"](function () {
              _this.$swal.fire("Not allowed!", "Only Admin", "error");
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataDevelopers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataDevelopers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["developers"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["getDeveloperDetails"]), {
    showDetails: function showDetails(id) {
      var _this = this;

      this.getDeveloperDetails(id).then(function () {
        _this.$emit("toggleDetails");
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Developers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Developers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AddDeveloper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AddDeveloper */ "./resources/js/components/AddDeveloper.vue");
/* harmony import */ var _components_TableDataDevelopers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableDataDevelopers */ "./resources/js/components/TableDataDevelopers.vue");
/* harmony import */ var _components_DetailsDeveloper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DetailsDeveloper */ "./resources/js/components/DetailsDeveloper.vue");
//
//
//
//
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
  name: "projects",
  components: {
    AddDeveloper: _components_AddDeveloper__WEBPACK_IMPORTED_MODULE_0__["default"],
    TableDataDevelopers: _components_TableDataDevelopers__WEBPACK_IMPORTED_MODULE_1__["default"],
    DetailsDeveloper: _components_DetailsDeveloper__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      hideDetails: true
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton.btn-secondary[data-v-0cb3eb94] {\n  cursor: not-allowed !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton.btn-secondary[data-v-3c4dfe13] {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table-container[data-v-7bb13e06] {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n#tableHead[data-v-7bb13e06] {\n  top: 0 !important;\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\ntr[data-v-7bb13e06] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeveloper.vue?vue&type=template&id=0cb3eb94&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddDeveloper.vue?vue&type=template&id=0cb3eb94&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _vm.restriction
        ? _c("p", { staticClass: "text-danger mb-0" }, [_vm._v("*Admin only")])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-button",
        {
          class: _vm.visible ? null : "collapsed",
          attrs: {
            "aria-expanded": _vm.visible ? "true" : "false",
            "aria-controls": "collapse-3",
            variant: !_vm.user.admin ? "secondary" : "success"
          },
          on: { click: _vm.visibleForm }
        },
        [
          _vm._v("\n    New Developer\n    "),
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
          attrs: { id: "collapse-3" },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "b-card",
            {
              attrs: {
                header: "Adding a new Developer...",
                "header-text-variant": "white",
                "header-tag": "header",
                "header-bg-variant": "primary"
              }
            },
            [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-sm-8" }, [
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
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "developer" }
                          },
                          [_vm._v("User's E-mail address")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            name: "developer",
                            placeholder: "people@email.com",
                            required: ""
                          },
                          domProps: { value: _vm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("small", { staticClass: "form-text text-muted" }, [
                          _vm._v("To be assign as Developer")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary float-right",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Add")]
                      )
                    ]
                  )
                ])
              ])
            ]
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsDeveloper.vue?vue&type=template&id=3c4dfe13&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsDeveloper.vue?vue&type=template&id=3c4dfe13&scoped=true& ***!
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card border-primary mt-5" }, [
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
                    return _vm.removeDeveloper(_vm.developer_details.id)
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
            _c("label", { staticClass: "font-weight-bold" }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("div", { staticClass: "card bg-light p-2" }, [
              _vm._v(_vm._s(_vm.developer_details.name))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-2" }, [
            _c("label", { staticClass: "font-weight-bold" }, [_vm._v("Email")]),
            _vm._v(" "),
            _c("div", { staticClass: "card bg-light p-2" }, [
              _vm._v(_vm._s(_vm.developer_details.email))
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
                _vm._l(_vm.developer_details.roles, function(role) {
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
                _vm._v(_vm._s(_vm.developer_details.created_at))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4 mt-3" },
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
                      header: "Total Bugs Assigned"
                    }
                  },
                  [
                    _c("b-card-text", [
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(
                          _vm._s(_vm.developer_details.bugs_assigned.length)
                        )
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4 mt-3" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "text-center",
                    attrs: {
                      "bg-variant": "light",
                      "border-variant": "success",
                      "header-bg-variant": "success",
                      "header-text-variant": "white",
                      "text-variant": "dark",
                      header: "Total Bugs Fixed"
                    }
                  },
                  [
                    _c("b-card-text", [
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("getFixedBugs")(
                              _vm.developer_details.bugs_assigned
                            )
                          )
                        )
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4 mt-3" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "text-center",
                    attrs: {
                      "bg-variant": "light",
                      "border-variant": "danger",
                      "header-bg-variant": "danger",
                      "header-text-variant": "white",
                      "text-variant": "dark",
                      header: "Total Bugs Pending"
                    }
                  },
                  [
                    _c("b-card-text", [
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("getPendingBugs")(
                              _vm.developer_details.bugs_assigned
                            )
                          )
                        )
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
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataDevelopers.vue?vue&type=template&id=7bb13e06&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataDevelopers.vue?vue&type=template&id=7bb13e06&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
          _vm._l(_vm.developers, function(developer, index) {
            return _c(
              "tr",
              {
                key: index,
                on: {
                  click: function($event) {
                    return _vm.showDetails(developer.id)
                  }
                }
              },
              [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(index + 1))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(developer.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(developer.email))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(developer.created_at))])
              ]
            )
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "text-muted" }, [
      _vm._v("Click the Developer to see more.")
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
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Joined")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Developers.vue?vue&type=template&id=3994c7b2&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Developers.vue?vue&type=template&id=3994c7b2& ***!
  \********************************************************************************************************************************************************************************************************/
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
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _vm.hideDetails
            ? _c(
                "div",
                { key: "1" },
                [
                  _c("AddDeveloper"),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("TableDataDevelopers", {
                    on: {
                      toggleDetails: function($event) {
                        _vm.hideDetails = false
                      }
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.hideDetails
            ? _c("DetailsDeveloper", {
                key: "2",
                on: {
                  toggleDetails: function($event) {
                    _vm.hideDetails = true
                  }
                }
              })
            : _vm._e()
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

/***/ "./resources/js/components/AddDeveloper.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/AddDeveloper.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddDeveloper_vue_vue_type_template_id_0cb3eb94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDeveloper.vue?vue&type=template&id=0cb3eb94&scoped=true& */ "./resources/js/components/AddDeveloper.vue?vue&type=template&id=0cb3eb94&scoped=true&");
/* harmony import */ var _AddDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDeveloper.vue?vue&type=script&lang=js& */ "./resources/js/components/AddDeveloper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddDeveloper_vue_vue_type_style_index_0_id_0cb3eb94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css& */ "./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDeveloper_vue_vue_type_template_id_0cb3eb94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddDeveloper_vue_vue_type_template_id_0cb3eb94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0cb3eb94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddDeveloper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddDeveloper.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/AddDeveloper.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddDeveloper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeveloper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_style_index_0_id_0cb3eb94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeveloper.vue?vue&type=style&index=0&id=0cb3eb94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_style_index_0_id_0cb3eb94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_style_index_0_id_0cb3eb94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_style_index_0_id_0cb3eb94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_style_index_0_id_0cb3eb94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_style_index_0_id_0cb3eb94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/AddDeveloper.vue?vue&type=template&id=0cb3eb94&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/AddDeveloper.vue?vue&type=template&id=0cb3eb94&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_template_id_0cb3eb94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddDeveloper.vue?vue&type=template&id=0cb3eb94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddDeveloper.vue?vue&type=template&id=0cb3eb94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_template_id_0cb3eb94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDeveloper_vue_vue_type_template_id_0cb3eb94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DetailsDeveloper.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/DetailsDeveloper.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsDeveloper_vue_vue_type_template_id_3c4dfe13_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsDeveloper.vue?vue&type=template&id=3c4dfe13&scoped=true& */ "./resources/js/components/DetailsDeveloper.vue?vue&type=template&id=3c4dfe13&scoped=true&");
/* harmony import */ var _DetailsDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsDeveloper.vue?vue&type=script&lang=js& */ "./resources/js/components/DetailsDeveloper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DetailsDeveloper_vue_vue_type_style_index_0_id_3c4dfe13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css& */ "./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetailsDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailsDeveloper_vue_vue_type_template_id_3c4dfe13_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailsDeveloper_vue_vue_type_template_id_3c4dfe13_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c4dfe13",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DetailsDeveloper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DetailsDeveloper.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/DetailsDeveloper.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsDeveloper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsDeveloper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_style_index_0_id_3c4dfe13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsDeveloper.vue?vue&type=style&index=0&id=3c4dfe13&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_style_index_0_id_3c4dfe13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_style_index_0_id_3c4dfe13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_style_index_0_id_3c4dfe13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_style_index_0_id_3c4dfe13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_style_index_0_id_3c4dfe13_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/DetailsDeveloper.vue?vue&type=template&id=3c4dfe13&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/DetailsDeveloper.vue?vue&type=template&id=3c4dfe13&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_template_id_3c4dfe13_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsDeveloper.vue?vue&type=template&id=3c4dfe13&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsDeveloper.vue?vue&type=template&id=3c4dfe13&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_template_id_3c4dfe13_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsDeveloper_vue_vue_type_template_id_3c4dfe13_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TableDataDevelopers.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/TableDataDevelopers.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableDataDevelopers_vue_vue_type_template_id_7bb13e06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableDataDevelopers.vue?vue&type=template&id=7bb13e06&scoped=true& */ "./resources/js/components/TableDataDevelopers.vue?vue&type=template&id=7bb13e06&scoped=true&");
/* harmony import */ var _TableDataDevelopers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableDataDevelopers.vue?vue&type=script&lang=js& */ "./resources/js/components/TableDataDevelopers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TableDataDevelopers_vue_vue_type_style_index_0_id_7bb13e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css& */ "./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TableDataDevelopers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableDataDevelopers_vue_vue_type_template_id_7bb13e06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableDataDevelopers_vue_vue_type_template_id_7bb13e06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7bb13e06",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TableDataDevelopers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TableDataDevelopers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/TableDataDevelopers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataDevelopers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataDevelopers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_style_index_0_id_7bb13e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataDevelopers.vue?vue&type=style&index=0&id=7bb13e06&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_style_index_0_id_7bb13e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_style_index_0_id_7bb13e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_style_index_0_id_7bb13e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_style_index_0_id_7bb13e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_style_index_0_id_7bb13e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/TableDataDevelopers.vue?vue&type=template&id=7bb13e06&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/TableDataDevelopers.vue?vue&type=template&id=7bb13e06&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_template_id_7bb13e06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataDevelopers.vue?vue&type=template&id=7bb13e06&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataDevelopers.vue?vue&type=template&id=7bb13e06&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_template_id_7bb13e06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataDevelopers_vue_vue_type_template_id_7bb13e06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Developers.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Developers.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Developers_vue_vue_type_template_id_3994c7b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Developers.vue?vue&type=template&id=3994c7b2& */ "./resources/js/pages/Developers.vue?vue&type=template&id=3994c7b2&");
/* harmony import */ var _Developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Developers.vue?vue&type=script&lang=js& */ "./resources/js/pages/Developers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Developers_vue_vue_type_template_id_3994c7b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Developers_vue_vue_type_template_id_3994c7b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Developers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Developers.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Developers.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Developers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Developers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Developers.vue?vue&type=template&id=3994c7b2&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Developers.vue?vue&type=template&id=3994c7b2& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Developers_vue_vue_type_template_id_3994c7b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Developers.vue?vue&type=template&id=3994c7b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Developers.vue?vue&type=template&id=3994c7b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Developers_vue_vue_type_template_id_3994c7b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Developers_vue_vue_type_template_id_3994c7b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);