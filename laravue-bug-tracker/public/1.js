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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      project: {
        image: null
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["user"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["addProject"]), {
    visibleForm: function visibleForm() {
      if (this.user.admin || this.user.developer) {
        this.visible = !this.visible;
      } else {
        this.restriction = true;
        this.$swal.fire("Not Allowed", "Only Admin & Developer", "info");
      }
    },
    onImageChange: function onImageChange(e) {
      // we get the image
      //   console.log(e.target.files[0]);
      this.project.image = e.target.files[0];
    },
    publish: function () {
      var _publish = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.addProject(this.project).then(function () {
                  _this.$swal.fire("Project Added!", "Success, A project is successfuly added", "success");

                  _this.project = {};
                  _this.project.image = null;

                  _this.$refs["imageUpload"].reset();

                  _this.visible = false;
                })["catch"](function () {
                  _this.$swal.fire("Not Allowed", "Only Admin & Developer", "error");
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function publish() {
        return _publish.apply(this, arguments);
      }

      return publish;
    }()
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsProject.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsProject.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      visible_screenshot: false
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["project_details", "user"]),
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
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["clearProjectDetails", "deleteProject"]), {
    hideDetails: function hideDetails() {
      this.clearProjectDetails();
      this.$emit("toggleDetails");
    },
    removeProject: function removeProject(id) {
      var _this = this;

      if (this.user.admin || this.user.developer) {
        this.$swal.fire({
          title: "Remove this Project?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Delete"
        }).then(function (result) {
          if (result.value) {
            _this.deleteProject(id).then(function () {
              _this.$swal.fire("Success!", "The Project is now Deleted.", "success");

              _this.$emit("toggleDetails");
            })["catch"](function () {
              _this.$swal.fire("Not allowed!", "Only Admin and developer", "error");
            });
          }
        });
      } else {
        this.$swal.fire("Not allowed!", "Only Admin and Developer", "info");
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProject.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditProject.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      project: {
        image: null
      }
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["project_details", "user"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["editProjectDetails"]), {
    visibleForm: function visibleForm() {
      if (this.user.admin || this.user.developer) {
        this.visible = !this.visible;
      } else {
        this.restriction = true;
        this.$swal.fire("Not Allowed", "Only Admin & Developer", "info");
      }
    },
    onImageChange: function onImageChange(e) {
      //   console.log(e.target.files[0]);
      this.project.cover_image = e.target.files[0];
    },
    update: function update() {
      var _this = this;

      var formData = new FormData();
      formData.append("id", this.project.id);
      formData.append("name", this.project.name);
      formData.append("version", this.project.version);
      formData.append("environment", this.project.environment);
      formData.append("os", this.project.os);
      formData.append("description", this.project.description);
      formData.append("started", this.project.development_start);
      formData.append("released", this.project.release_date);

      if (this.project.cover_image) {
        formData.append("image", this.project.cover_image);
      }

      this.editProjectDetails({
        project: formData,
        id: this.project.id
      }).then(function () {
        _this.$swal.fire("Project Edited!", "A project is successfuly Edited", "success");

        _this.visible = false;
      })["catch"](function () {
        _this.$swal.fire("Not Allowed", "Only Admin & Developer", "error");
      });
    }
  }),
  mounted: function mounted() {
    this.project = _objectSpread({}, this.project_details);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["projects"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["getProjects", "getProjectDetails"]), {
    showDetails: function showDetails(id) {
      var _this = this;

      this.getProjectDetails(id).then(function () {
        _this.$emit("toggleDetails");
      });
    }
  }),
  created: function created() {
    if (this.projects.length < 1) {
      this.getProjects();
    }
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
/* harmony import */ var _components_TableDataProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableDataProject */ "./resources/js/components/TableDataProject.vue");
/* harmony import */ var _components_DetailsProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DetailsProject */ "./resources/js/components/DetailsProject.vue");
/* harmony import */ var _components_EditProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditProject */ "./resources/js/components/EditProject.vue");
//
//
//
//
//
//
//
//
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
    TableDataProject: _components_TableDataProject__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddProject: _components_AddProject__WEBPACK_IMPORTED_MODULE_0__["default"],
    DetailsProject: _components_DetailsProject__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditProject: _components_EditProject__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      hideDetails: true
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton.btn-secondary[data-v-78a2f3e3] {\n  cursor: not-allowed !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-2f64cbbc] {\n  max-height: 100%;\n  max-width: 100%;\n}\nbutton.btn-secondary[data-v-2f64cbbc] {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton.btn-secondary[data-v-14700114] {\n  cursor: not-allowed !important;\n}\n", ""]);

// exports


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
exports.push([module.i, "\n.table-container[data-v-066c794c] {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n#tableHead[data-v-066c794c] {\n  top: 0 !important;\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\ntr[data-v-066c794c] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        ? _c("p", { staticClass: "text-danger mb-0" }, [
            _vm._v("*Admin & Developer only")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-button",
        {
          class: _vm.visible ? null : "collapsed",
          attrs: {
            "aria-expanded": _vm.visible ? "true" : "false",
            "aria-controls": "collapse-4",
            variant:
              !_vm.user.admin && !_vm.user.developer ? "secondary" : "success"
          },
          on: { click: _vm.visibleForm }
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
          _c("hr"),
          _vm._v(" "),
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
              _c("div", { staticClass: "row d-flex justify-content-center" }, [
                _c(
                  "div",
                  { staticClass: "col-md-10" },
                  [
                    _c(
                      "b-card",
                      {
                        attrs: {
                          header: "Adding a new Projects...",
                          "header-text-variant": "white",
                          "header-tag": "header",
                          "header-bg-variant": "primary"
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "name" }
                            },
                            [_vm._v("Name")]
                          ),
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
                              placeholder: "Name Generator...Weather app..."
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
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold",
                                  attrs: { for: "version" }
                                },
                                [_vm._v("Version")]
                              ),
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
                              _c("label", { staticClass: "font-weight-bold" }, [
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
                                        .call($event.target.options, function(
                                          o
                                        ) {
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
                                  _c(
                                    "option",
                                    { attrs: { value: "desktop" } },
                                    [_vm._v("Desktop")]
                                  ),
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
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "os" }
                              },
                              [_vm._v("Operating System")]
                            ),
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
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "description" }
                            },
                            [_vm._v("Description")]
                          ),
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
                              _c("label", { staticClass: "font-weight-bold" }, [
                                _vm._v("Development Date")
                              ]),
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
                              _c("label", { staticClass: "font-weight-bold" }, [
                                _vm._v("Released Dated")
                              ]),
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
                        _c(
                          "div",
                          { staticClass: "col-md-6 my-3" },
                          [
                            _c("b-form-file", {
                              ref: "imageUpload",
                              attrs: {
                                placeholder:
                                  "Choose a Image or drop it here...",
                                "drop-placeholder": "Drop file here..."
                              },
                              model: {
                                value: _vm.project.image,
                                callback: function($$v) {
                                  _vm.$set(_vm.project, "image", $$v)
                                },
                                expression: "project.image"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-3" }, [
                              _vm._v(
                                "Screen Shot: " +
                                  _vm._s(
                                    _vm.project.image
                                      ? _vm.project.image.name
                                      : ""
                                  )
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-right" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-lg",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                Submit\n                "
                              ),
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
                                    attrs: {
                                      x1: "22",
                                      y1: "2",
                                      x2: "11",
                                      y2: "13"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("polygon", {
                                    attrs: {
                                      points: "22 2 15 22 11 13 2 9 22 2"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsProject.vue?vue&type=template&id=2f64cbbc&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsProject.vue?vue&type=template&id=2f64cbbc&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-md-10" }, [
      _c("div", { staticClass: "card border-primary" }, [
        _c(
          "div",
          {
            staticClass:
              "card-header border-primary d-flex justify-content-between align-items-center"
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-outline-primary",
                on: { click: _vm.hideDetails }
              },
              [_vm._v("Back")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn",
                class:
                  !_vm.user.admin && !_vm.user.developer
                    ? "btn-secondary"
                    : "btn-danger",
                on: {
                  click: function($event) {
                    return _vm.removeProject(_vm.project_details.id)
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
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "b-button",
                  {
                    class: _vm.visible_screenshot ? null : "collapsed",
                    attrs: {
                      "aria-expanded": _vm.visible_screenshot
                        ? "true"
                        : "false",
                      "aria-controls": "collapse-4",
                      variant: "outline-primary"
                    },
                    on: {
                      click: function($event) {
                        _vm.visible_screenshot = !_vm.visible_screenshot
                      }
                    }
                  },
                  [
                    _vm._v("\n            Show Screenshot\n            "),
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
                        _c("circle", {
                          attrs: { cx: "8.5", cy: "8.5", r: "1.5" }
                        }),
                        _vm._v(" "),
                        _c("polyline", {
                          attrs: { points: "21 15 16 10 5 21" }
                        })
                      ]
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-collapse",
              {
                staticClass: "mt-2",
                attrs: { id: "collapse-4" },
                model: {
                  value: _vm.visible_screenshot,
                  callback: function($$v) {
                    _vm.visible_screenshot = $$v
                  },
                  expression: "visible_screenshot"
                }
              },
              [
                _c("b-card", [
                  _c(
                    "div",
                    { staticClass: "image-container text-center w-100" },
                    [
                      _c("img", {
                        attrs: {
                          src: _vm.project_details.image_src
                            ? _vm.project_details.image_src
                            : "https://via.placeholder.com/950x450",
                          alt: "Cover image"
                        }
                      })
                    ]
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("h5", { staticClass: "font-weight-bold mt-5" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.project_details.name) +
                  "\n          "
              ),
              _c("small", [
                _vm._v("version : " + _vm._s(_vm.project_details.version))
              ])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "mt-3 font-weight-bold" }, [
              _vm._v("Description :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card p-3 bg-light" }, [
              _c("p", { staticClass: "card-text bg-light" }, [
                _vm._v(_vm._s(_vm.project_details.description))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-3" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("label", { staticClass: "font-weight-bold" }, [
                  _vm._v("Development Started")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card bg-light p-2" }, [
                  _vm._v(_vm._s(_vm.project_details.development_start))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("label", { staticClass: "font-weight-bold" }, [
                  _vm._v("Released At")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card bg-light p-2" }, [
                  _vm._v(_vm._s(_vm.project_details.release_date))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-3" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("label", { staticClass: "font-weight-bold" }, [
                  _vm._v("Environment")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card bg-light p-2" }, [
                  _vm._v(_vm._s(_vm.project_details.environment))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("label", { staticClass: "font-weight-bold" }, [
                  _vm._v("Operating System")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card bg-light p-2" }, [
                  _vm._v(_vm._s(_vm.project_details.os))
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
                        header: "Total Reported Bugs"
                      }
                    },
                    [
                      _c("b-card-text", [
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v(_vm._s(_vm.project_details.bugs.length))
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
                        header: "Total Fixed Bugs"
                      }
                    },
                    [
                      _c("b-card-text", [
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("getFixedBugs")(_vm.project_details.bugs)
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
                        header: "Total Pending Bugs"
                      }
                    },
                    [
                      _c("b-card-text", [
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("getPendingBugs")(_vm.project_details.bugs)
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
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer border-primary text-left" }, [
          _c("div", [
            _vm._v("Added at: " + _vm._s(_vm.project_details.created_at))
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProject.vue?vue&type=template&id=14700114&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditProject.vue?vue&type=template&id=14700114&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        ? _c("p", { staticClass: "text-danger mb-0" }, [
            _vm._v("*Admin & Developer only")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-button",
        {
          class: _vm.visible ? null : "collapsed",
          attrs: {
            "aria-expanded": _vm.visible ? "true" : "false",
            "aria-controls": "collapse-4",
            variant:
              !_vm.user.admin && !_vm.user.developer ? "secondary" : "success"
          },
          on: { click: _vm.visibleForm }
        },
        [
          _vm._v("\n    Edit Project\n    "),
          _c(
            "svg",
            {
              attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                }
              })
            ]
          )
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
          _c("hr"),
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { enctype: "multipart/form-data" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.update($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row d-flex justify-content-center" }, [
                _c(
                  "div",
                  { staticClass: "col-md-10" },
                  [
                    _c(
                      "b-card",
                      {
                        attrs: {
                          header: "Editing a Project...",
                          "header-text-variant": "white",
                          "header-tag": "header",
                          "header-bg-variant": "primary"
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "name" }
                            },
                            [_vm._v("Name")]
                          ),
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
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold",
                                  attrs: { for: "version" }
                                },
                                [_vm._v("Version")]
                              ),
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
                              _c("label", { staticClass: "font-weight-bold" }, [
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
                                        .call($event.target.options, function(
                                          o
                                        ) {
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
                                  _c(
                                    "option",
                                    { attrs: { value: "desktop" } },
                                    [_vm._v("Desktop")]
                                  ),
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
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "os" }
                              },
                              [_vm._v("Operating System")]
                            ),
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
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "description" }
                            },
                            [_vm._v("Description")]
                          ),
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
                              _c("label", { staticClass: "font-weight-bold" }, [
                                _vm._v("Development Date")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.project.development_start,
                                    expression: "project.development_start"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date" },
                                domProps: {
                                  value: _vm.project.development_start
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.project,
                                      "development_start",
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
                              _c("label", { staticClass: "font-weight-bold" }, [
                                _vm._v("Released Dated")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.project.release_date,
                                    expression: "project.release_date"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date" },
                                domProps: { value: _vm.project.release_date },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.project,
                                      "release_date",
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
                        _c(
                          "div",
                          { staticClass: "col-md-6 my-3" },
                          [
                            _c("b-form-file", {
                              ref: "imageUpload",
                              attrs: {
                                placeholder:
                                  "Choose a Image or drop it here...",
                                "drop-placeholder": "Drop file here..."
                              },
                              model: {
                                value: _vm.project.cover_image,
                                callback: function($$v) {
                                  _vm.$set(_vm.project, "cover_image", $$v)
                                },
                                expression: "project.cover_image"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-3" }, [
                              _vm._v(
                                "Screen Shot: " +
                                  _vm._s(
                                    _vm.project.cover_image
                                      ? _vm.project.cover_image.name
                                      : ""
                                  )
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-right" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-lg",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                Submit\n                "
                              ),
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
                                    attrs: {
                                      x1: "22",
                                      y1: "2",
                                      x2: "11",
                                      y2: "13"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("polygon", {
                                    attrs: {
                                      points: "22 2 15 22 11 13 2 9 22 2"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ]
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
            return _c(
              "tr",
              {
                key: index,
                on: {
                  click: function($event) {
                    return _vm.showDetails(project.id)
                  }
                }
              },
              [
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
                _c("td", [_vm._v(_vm._s(project.release_date))])
              ]
            )
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "text-muted" }, [
      _vm._v("Click the Project to see more.")
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
      _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
        _vm.hideDetails
          ? _c(
              "div",
              { key: "1" },
              [
                _c("AddProject"),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("TableDataProject", {
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
          ? _c(
              "div",
              { key: "2" },
              [
                _c("EditProject"),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("DetailsProject", {
                  on: {
                    toggleDetails: function($event) {
                      _vm.hideDetails = true
                    }
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
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
/* harmony import */ var _AddProject_vue_vue_type_template_id_78a2f3e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProject.vue?vue&type=template&id=78a2f3e3&scoped=true& */ "./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&scoped=true&");
/* harmony import */ var _AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProject.vue?vue&type=script&lang=js& */ "./resources/js/components/AddProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddProject_vue_vue_type_style_index_0_id_78a2f3e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css& */ "./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProject_vue_vue_type_template_id_78a2f3e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProject_vue_vue_type_template_id_78a2f3e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78a2f3e3",
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

/***/ "./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_78a2f3e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=style&index=0&id=78a2f3e3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_78a2f3e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_78a2f3e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_78a2f3e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_78a2f3e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_78a2f3e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_78a2f3e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=template&id=78a2f3e3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddProject.vue?vue&type=template&id=78a2f3e3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_78a2f3e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_78a2f3e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DetailsProject.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/DetailsProject.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsProject_vue_vue_type_template_id_2f64cbbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsProject.vue?vue&type=template&id=2f64cbbc&scoped=true& */ "./resources/js/components/DetailsProject.vue?vue&type=template&id=2f64cbbc&scoped=true&");
/* harmony import */ var _DetailsProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsProject.vue?vue&type=script&lang=js& */ "./resources/js/components/DetailsProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DetailsProject_vue_vue_type_style_index_0_id_2f64cbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css& */ "./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetailsProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailsProject_vue_vue_type_template_id_2f64cbbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailsProject_vue_vue_type_template_id_2f64cbbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f64cbbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DetailsProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DetailsProject.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/DetailsProject.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_style_index_0_id_2f64cbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsProject.vue?vue&type=style&index=0&id=2f64cbbc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_style_index_0_id_2f64cbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_style_index_0_id_2f64cbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_style_index_0_id_2f64cbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_style_index_0_id_2f64cbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_style_index_0_id_2f64cbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/DetailsProject.vue?vue&type=template&id=2f64cbbc&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/DetailsProject.vue?vue&type=template&id=2f64cbbc&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_template_id_2f64cbbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsProject.vue?vue&type=template&id=2f64cbbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsProject.vue?vue&type=template&id=2f64cbbc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_template_id_2f64cbbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsProject_vue_vue_type_template_id_2f64cbbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditProject.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/EditProject.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProject_vue_vue_type_template_id_14700114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProject.vue?vue&type=template&id=14700114&scoped=true& */ "./resources/js/components/EditProject.vue?vue&type=template&id=14700114&scoped=true&");
/* harmony import */ var _EditProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProject.vue?vue&type=script&lang=js& */ "./resources/js/components/EditProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditProject_vue_vue_type_style_index_0_id_14700114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css& */ "./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProject_vue_vue_type_template_id_14700114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProject_vue_vue_type_template_id_14700114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14700114",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditProject.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/EditProject.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_style_index_0_id_14700114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProject.vue?vue&type=style&index=0&id=14700114&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_style_index_0_id_14700114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_style_index_0_id_14700114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_style_index_0_id_14700114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_style_index_0_id_14700114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_style_index_0_id_14700114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/EditProject.vue?vue&type=template&id=14700114&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/EditProject.vue?vue&type=template&id=14700114&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_template_id_14700114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditProject.vue?vue&type=template&id=14700114&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProject.vue?vue&type=template&id=14700114&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_template_id_14700114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProject_vue_vue_type_template_id_14700114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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