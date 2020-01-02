(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddBug.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bug: {
        developer: 0,
        image: null
      }
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["projects", "developers", "user"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["newBug", "toggleLoader"]), {
    visibleForm: function visibleForm() {
      if (this.user.admin || this.user.tester) {
        this.visible = !this.visible;
      } else {
        this.restriction = true;
        this.$swal.fire("Not Allowed", "Only Admin & Testers", "info");
      }
    },
    onImageChange: function onImageChange(e) {
      //   console.log(e.target.files[0]);
      this.bug.image = e.target.files[0];
    },
    submit: function submit() {
      var _this = this;

      this.toggleLoader(); // submit new bug

      this.newBug(this.bug).then(function () {
        _this.$swal.fire("New Bug", "Success new Bug is added", "success"); //   clear and close form


        _this.bug = {};
        _this.bug.image = null;
        _this.bug.developer = 0;

        _this.$refs["imageUpload"].reset(); // this.$refs.imageUpload.value = null; // we clear the value of upload image


        _this.visible = false;

        _this.toggleLoader();
      })["catch"](function () {
        _this.$swal.fire("Not Allowed", "Only Admin and Tester", "error");

        _this.toggleLoader();
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCommentBug.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddCommentBug.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    bug_id: Number
  },
  data: function data() {
    return {
      message: ""
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["addBugComment", "toggleLoader"]), {
    submit: function submit() {
      var _this = this;

      this.toggleLoader();
      this.addBugComment({
        bug_id: this.bug_id,
        message: this.message
      }).then(function () {
        _this.toggleLoader();

        _this.$swal.fire("Comment Submited!!!", "Success new comment is added", "success");

        _this.message = "";
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommentsBug.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CommentsBug.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCommentBug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCommentBug */ "./resources/js/components/AddCommentBug.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AddCommentBug: _AddCommentBug__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    comments: Array,
    bug_id: Number
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["user"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["deleteBugComment"]), {
    removeComment: function removeComment(comment) {
      var _this = this;

      if (this.user.id === comment.user.id || this.user.admin) {
        this.$swal.fire({
          title: "Remove this comment?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Delete"
        }).then(function (result) {
          if (result.value) {
            _this.deleteBugComment(comment.id).then(function () {
              _this.$swal.fire("Success!", "The comment is now Deleted.", "success");
            })["catch"](function () {
              _this.$swal.fire("Failed!", "The comment is not Deleted.", "error");
            });
          }
        });
      } else {
        this.$swal.fire("Not Allowed!", "The comment is not yours.", "info");
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsBug.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsBug.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentsBug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentsBug */ "./resources/js/components/CommentsBug.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CommentsBug: _CommentsBug__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      visible_screenshot: false
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["bug_details", "user"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["clearBugDetails", "changeBugStatus", "deleteBug", "toggleLoader"]), {
    hideDetails: function hideDetails() {
      this.clearBugDetails();
      this.$emit("toggleDetails");
    },
    changeStatus: function changeStatus() {
      var _this = this;

      var title;
      var text;
      var success;
      var message;
      var confirm_btn;

      if (this.user.admin || this.user.developer) {
        if (!this.bug_details.is_fixed) {
          title = "The bug is fixed?";
          text = "are you sure the bug is fixed!";
          success = "Fixed!";
          message = 'This Bug is now set as "Fixed"';
          confirm_btn = "Bug is Fixed";
        } else {
          title = "The bug is Not fixed?";
          text = "are you sure the bug is not fixed!";
          success = "Not Fixed!";
          message = 'This Bug is now set as "Not Fixed"';
          confirm_btn = "Not Fixed";
        }

        this.$swal.fire({
          title: title,
          text: text,
          type: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: confirm_btn
        }).then(function (result) {
          if (result.value) {
            _this.toggleLoader();

            _this.changeBugStatus(_this.bug_details.id).then(function () {
              _this.$swal.fire(success, message, "success");

              _this.toggleLoader();
            });
          }
        });
      } else {
        this.$swal.fire("Not Allowed", "Only Admin and Developer", "error");
      }
    },
    removeBug: function removeBug(id) {
      var _this2 = this;

      if (this.user.admin || this.user.tester) {
        this.$swal.fire({
          title: "Remove this Bug?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Delete"
        }).then(function (result) {
          if (result.value) {
            _this2.toggleLoader();

            _this2.deleteBug(id).then(function () {
              _this2.$swal.fire("Success!", "The Bug is now Deleted.", "success");

              _this2.$emit("toggleDetails");

              _this2.toggleLoader();
            })["catch"](function () {
              _this2.$swal.fire("Not allowed!", "Only Admin and Tester", "error");

              _this2.toggleLoader();
            });
          }
        });
      } else {
        this.$swal.fire("Not allowed!", "Only Admin and Tester", "info");
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditBug.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditBug.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bug: {
        developer: 0,
        image: null
      }
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["projects", "developers", "bug_details", "user"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["editBugDetails", "getProjects", "getDevelopers"]), {
    visibleForm: function visibleForm() {
      if (this.user.admin || this.user.tester) {
        this.visible = !this.visible;
      } else {
        this.restriction = true;
        this.$swal.fire("Not Allowed", "Only Admin & Tester", "info");
      }
    },
    onImageChange: function onImageChange(e) {
      //   console.log(e.target.files[0]);
      this.bug.image = e.target.files[0];
    },
    update: function update() {
      var _this = this;

      // submit new bug
      this.editBugDetails(this.bug).then(function () {
        _this.$swal.fire("Updated!", "Success, Bug is now updated", "success"); //   clear and close form


        _this.bug.image = null;

        _this.$refs["imageUpload"].reset();

        _this.visible = false;
      });
    }
  }),
  mounted: function mounted() {
    this.bug.id = this.bug_details.id;
    this.bug.title = this.bug_details.title;
    this.bug.project = this.bug_details.project.id;
    this.bug.description = this.bug_details.description;
    this.bug.browser = this.bug_details.browser;
    this.bug.os = this.bug_details.os;
    this.bug.type = this.bug_details.bug_type;
    this.bug.severity = this.bug_details.severity;
    this.bug.priority = this.bug_details.priority;
    this.bug_details.assigned_to ? this.bug.developer = this.bug_details.assigned_to.id : null;
  },
  created: function created() {
    var _this2 = this;

    if (this.projects.length == 0 && this.developers.length == 0) {
      this.getProjects().then(function () {
        _this2.getDevelopers();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataBugs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataBugs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["bugs"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["getBugDetails", "toggleLoader"]), {
    showDetails: function showDetails(id) {
      var _this = this;

      this.toggleLoader();
      this.getBugDetails(id).then(function () {
        _this.$emit("toggleDetails");

        _this.toggleLoader();
      });
    }
  })
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
/* harmony import */ var _components_TableDataBugs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableDataBugs */ "./resources/js/components/TableDataBugs.vue");
/* harmony import */ var _components_DetailsBug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DetailsBug */ "./resources/js/components/DetailsBug.vue");
/* harmony import */ var _components_EditBug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditBug */ "./resources/js/components/EditBug.vue");
//
//
//
//
//
//
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
    AddBug: _components_AddBug__WEBPACK_IMPORTED_MODULE_0__["default"],
    TableDataBugs: _components_TableDataBugs__WEBPACK_IMPORTED_MODULE_1__["default"],
    DetailsBug: _components_DetailsBug__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditBug: _components_EditBug__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    ShowDetails: Boolean
  },
  data: function data() {
    return {
      hideDetails: true
    };
  },
  created: function created() {
    if (this.ShowDetails) {
      this.hideDetails = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton.btn-secondary[data-v-0c4baa84] {\n  cursor: not-allowed !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-custom-light[data-v-6dd4fec5] {\n  background-color: #d5dbe1 !important;\n}\nbutton.btn-secondary[data-v-6dd4fec5] {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-bdd06f06] {\n  max-width: 100%;\n  height: 100%;\n}\nbutton.btn-secondary[data-v-bdd06f06] {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbutton.btn-secondary[data-v-5557786f] {\n  cursor: not-allowed !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table-container[data-v-80872d48] {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n#tableHead[data-v-80872d48] {\n  top: 0 !important;\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\ntable tr[data-v-80872d48] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css&");

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
    [
      _vm.restriction
        ? _c("p", { staticClass: "text-danger mb-0" }, [
            _vm._v("*Admin & Tester only")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-button",
        {
          class: _vm.visible ? null : "collapsed",
          attrs: {
            "aria-expanded": _vm.visible ? "true" : "false",
            "aria-controls": "collapse-1",
            variant:
              !_vm.user.admin && !_vm.user.tester ? "secondary" : "success"
          },
          on: { click: _vm.visibleForm }
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
      _c(
        "b-collapse",
        {
          attrs: { id: "collapse-1" },
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
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-10" }, [
              _c(
                "form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c(
                    "b-card",
                    {
                      attrs: {
                        header: "Adding a new Bug...",
                        "header-text-variant": "white",
                        "header-tag": "header",
                        "header-bg-variant": "primary"
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "title" }
                              },
                              [_vm._v("Bug Title")]
                            ),
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
                                placeholder: "Navbar error",
                                required: ""
                              },
                              domProps: { value: _vm.bug.title },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.bug,
                                    "title",
                                    $event.target.value
                                  )
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
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "project" }
                              },
                              [_vm._v("Project Name")]
                            ),
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
                                attrs: {
                                  name: "project",
                                  id: "project",
                                  required: ""
                                },
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
                                  {
                                    key: project.id,
                                    domProps: { value: project.id }
                                  },
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
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "description" }
                          },
                          [_vm._v("Bug Description")]
                        ),
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
                          attrs: {
                            name: "description",
                            id: "description",
                            rows: "3",
                            required: ""
                          },
                          domProps: { value: _vm.bug.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.bug,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "browser" }
                              },
                              [_vm._v("Browser")]
                            ),
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
                                        var val =
                                          "_value" in o ? o._value : o.value
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
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "operating_system" }
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
                                    value: _vm.bug.os,
                                    expression: "bug.os"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "operating_system",
                                  id: "operating_system",
                                  required: ""
                                },
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
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "type" }
                              },
                              [_vm._v("Bug Type")]
                            ),
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
                                attrs: {
                                  name: "type",
                                  id: "type",
                                  required: ""
                                },
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
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Priority")
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
                                  attrs: { type: "radio", value: "high" },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.priority, "high")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "priority",
                                        "high"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      High\n                    "
                                )
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
                                  attrs: { type: "radio", value: "mid" },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.priority, "mid")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "priority",
                                        "mid"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      Mid\n                    "
                                )
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
                                  attrs: { type: "radio", value: "low" },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.priority, "low")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "priority",
                                        "low"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      Low\n                    "
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("div", { staticClass: "radio-container" }, [
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Severity")
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
                                  attrs: { type: "radio", value: "high" },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.severity, "high")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "severity",
                                        "high"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      High\n                    "
                                )
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
                                  attrs: { type: "radio", value: "mid" },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.severity, "mid")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "severity",
                                        "mid"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      Mid\n                    "
                                )
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
                                  attrs: { type: "radio", value: "low" },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.severity, "low")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "severity",
                                        "low"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      Low\n                    "
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "assigned" }
                              },
                              [_vm._v("Assigned To :")]
                            ),
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
                                        var val =
                                          "_value" in o ? o._value : o.value
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
                              _vm._l(_vm.developers, function(
                                developer,
                                index
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: developer.id }
                                  },
                                  [_vm._v(_vm._s(developer.email))]
                                )
                              }),
                              0
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6 mt-5" },
                          [
                            _c("b-form-file", {
                              ref: "imageUpload",
                              attrs: {
                                placeholder:
                                  "Choose a Image or drop it here...",
                                "drop-placeholder": "Drop file here..."
                              },
                              model: {
                                value: _vm.bug.image,
                                callback: function($$v) {
                                  _vm.$set(_vm.bug, "image", $$v)
                                },
                                expression: "bug.image"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-3" }, [
                              _vm._v(
                                "Screen Shot: " +
                                  _vm._s(
                                    _vm.bug.image ? _vm.bug.image.name : ""
                                  )
                              )
                            ])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-right my-2" }, [
                        _c(
                          "button",
                          { staticClass: "btn btn-primary btn-lg" },
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
                                  attrs: { points: "22 2 15 22 11 13 2 9 22 2" }
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
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCommentBug.vue?vue&type=template&id=f654308a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddCommentBug.vue?vue&type=template&id=f654308a& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card border-primary mt-3" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
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
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.message,
                expression: "message"
              }
            ],
            staticClass: "form-control",
            attrs: { name: "message" },
            domProps: { value: _vm.message },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.message = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-primary bg-primary" }, [
      _c("h4", { staticClass: "text-light" }, [_vm._v("Add Comment :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-right" }, [
      _c("button", { staticClass: "btn btn-primary mt-2" }, [_vm._v("Submit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommentsBug.vue?vue&type=template&id=6dd4fec5&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CommentsBug.vue?vue&type=template&id=6dd4fec5&scoped=true& ***!
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c(
      "div",
      { staticClass: "col-md-8 bg-custom-light py-3" },
      [
        _c("AddCommentBug", { attrs: { bug_id: _vm.bug_id } }),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("h1", { staticClass: "mt-3 font-weight-bold" }, [
          _vm._v("Comments :")
        ]),
        _vm._v(" "),
        _vm._l(_vm.comments, function(comment) {
          return _c(
            "div",
            { key: comment.id, staticClass: "card border-secondary mt-3" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "card-header border-secondary d-flex justify-content-between align-items-center"
                },
                [
                  _c("h5", [_vm._v(_vm._s(comment.user.email))]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      class:
                        _vm.user.id === comment.user.id || _vm.user.admin
                          ? "btn-danger"
                          : "btn-secondary",
                      on: {
                        click: function($event) {
                          return _vm.removeComment(comment)
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
                _c("p", [_vm._v(_vm._s(comment.message))])
              ])
            ]
          )
        }),
        _vm._v(" "),
        _vm.comments.length < 1
          ? _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header bg-secondary" }),
              _vm._v(" "),
              _vm._m(0)
            ])
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center text-uppercase" }, [
      _c("h3", { staticClass: "font-weight-bold" }, [
        _vm._v("Be the first to leave a comment.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsBug.vue?vue&type=template&id=bdd06f06&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DetailsBug.vue?vue&type=template&id=bdd06f06&scoped=true& ***!
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
    { staticClass: "row justify-content-center" },
    [
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
                    !_vm.user.admin && !_vm.user.tester
                      ? "btn-secondary"
                      : "btn-danger",
                  on: {
                    click: function($event) {
                      return _vm.removeBug(_vm.bug_details.id)
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
                    _c("div", { staticClass: "text-center w-100" }, [
                      _c("img", {
                        attrs: {
                          src: _vm.bug_details.image_src
                            ? _vm.bug_details.image_src
                            : "https://via.placeholder.com/950x450",
                          alt: "Screenshot"
                        }
                      })
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h4",
                {
                  staticClass: "card-title py-2 mt-5 text-left font-weight-bold"
                },
                [_vm._v(_vm._s(_vm.bug_details.title))]
              ),
              _vm._v(" "),
              _c("label", { staticClass: "font-weight-bold" }, [
                _vm._v("Description :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card p-3 bg-light mb-1" }, [
                _c("p", { staticClass: "card-text bg-light" }, [
                  _vm._v(_vm._s(_vm.bug_details.description))
                ])
              ]),
              _vm._v(" "),
              _c("h6", { staticClass: "py-1 text-right" }, [
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Issued at :")
                ]),
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.bug_details.created_at) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Project Name :")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card bg-light p-2" }, [
                    _vm._v(_vm._s(_vm.bug_details.project.name))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Version :")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card bg-light p-2" }, [
                    _vm._v(_vm._s(_vm.bug_details.project.version))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Browser :")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card bg-light p-2" }, [
                    _vm._v(_vm._s(_vm.bug_details.browser))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Operating System :")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card bg-light p-2" }, [
                    _vm._v(_vm._s(_vm.bug_details.os))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Bug Type :")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card bg-light p-2" }, [
                    _vm._v(_vm._s(_vm.bug_details.bug_type))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c(
                  "div",
                  { staticClass: "col-md-4 text-center" },
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
                          header: "Priority"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c(
                            "span",
                            { staticClass: "font-weight-bold text-capitalize" },
                            [_vm._v(_vm._s(_vm.bug_details.priority))]
                          )
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
                  { staticClass: "col-md-4 text-center" },
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
                          header: "Severity"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c(
                            "span",
                            { staticClass: "font-weight-bold text-capitalize" },
                            [_vm._v(_vm._s(_vm.bug_details.severity))]
                          )
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
                  { staticClass: "col-md-4 text-center" },
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
                          header: "Assigned To"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c("span", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              _vm._s(
                                _vm.bug_details.assigned_to
                                  ? _vm.bug_details.assigned_to.email
                                  : "Unassigned"
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
                _c("div", { staticClass: "col-md-4 mt-3" }, [
                  _c("label", { staticClass: "font-weight-bold mt-2" }, [
                    _vm._v("Status")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "card bg-light font-weight-bold d-flex flex-row justify-content-between align-items-center pl-2",
                      class: _vm.bug_details.is_fixed
                        ? "text-success"
                        : "text-danger"
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.bug_details.is_fixed != 1 ? "Active" : "Fixed"
                          ) +
                          "\n              "
                      ),
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          class: _vm.bug_details.is_fixed
                            ? "btn-danger"
                            : "btn-success",
                          on: { click: _vm.changeStatus }
                        },
                        [
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
                              _c("circle", {
                                attrs: { cx: "12", cy: "12", r: "3" }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.bug_details.is_fixed
                    ? _c("small", [_vm._v(_vm._s(_vm.bug_details.fixed_at))])
                    : _vm._e()
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card-footer border-primary d-flex justify-content-between align-items-center"
            },
            [
              _c("div", [
                _vm._v("Added By: " + _vm._s(_vm.bug_details.added_by.email))
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("hr")
      ]),
      _vm._v(" "),
      _c("CommentsBug", {
        staticClass: "w-100",
        attrs: {
          comments: _vm.bug_details.comments,
          bug_id: _vm.bug_details.id
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditBug.vue?vue&type=template&id=5557786f&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditBug.vue?vue&type=template&id=5557786f&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            _vm._v("*Admin & Tester only")
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
              !_vm.user.admin && !_vm.user.tester ? "secondary" : "success"
          },
          on: { click: _vm.visibleForm }
        },
        [
          _vm._v("\n    Update Bug\n    "),
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
          staticClass: "mt-3",
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
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-10" }, [
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
                  _c(
                    "b-card",
                    {
                      attrs: {
                        header: "Editing a Bug...",
                        "header-text-variant": "white",
                        "header-tag": "header",
                        "header-bg-variant": "primary"
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "title" }
                              },
                              [_vm._v("Bug Title")]
                            ),
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
                                  _vm.$set(
                                    _vm.bug,
                                    "title",
                                    $event.target.value
                                  )
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
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "project" }
                              },
                              [_vm._v("Project Name")]
                            ),
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
                                        var val =
                                          "_value" in o ? o._value : o.value
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
                                  {
                                    key: project.id,
                                    domProps: { value: project.id }
                                  },
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
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "description" }
                          },
                          [_vm._v("Bug Description")]
                        ),
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
                          attrs: {
                            name: "description",
                            id: "description",
                            rows: "3"
                          },
                          domProps: { value: _vm.bug.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.bug,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "browser" }
                              },
                              [_vm._v("Browser")]
                            ),
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
                                        var val =
                                          "_value" in o ? o._value : o.value
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
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "operating_system" }
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
                                        var val =
                                          "_value" in o ? o._value : o.value
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
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "type" }
                              },
                              [_vm._v("Bug Type")]
                            ),
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
                                        var val =
                                          "_value" in o ? o._value : o.value
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
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Priority")
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
                                  attrs: {
                                    type: "radio",
                                    name: "priority",
                                    value: "high"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.priority, "high")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "priority",
                                        "high"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      High\n                    "
                                )
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
                                  attrs: {
                                    type: "radio",
                                    name: "priority",
                                    value: "mid"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.priority, "mid")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "priority",
                                        "mid"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      Mid\n                    "
                                )
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
                                  attrs: {
                                    type: "radio",
                                    name: "priority",
                                    value: "low"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.priority, "low")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "priority",
                                        "low"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      Low\n                    "
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("div", { staticClass: "radio-container" }, [
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Severity")
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
                                  attrs: {
                                    type: "radio",
                                    name: "severity",
                                    value: "high"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.severity, "high")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "severity",
                                        "high"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      High\n                    "
                                )
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
                                  attrs: {
                                    type: "radio",
                                    name: "severity",
                                    value: "mid"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.severity, "mid")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "severity",
                                        "mid"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      Mid\n                    "
                                )
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
                                  attrs: {
                                    type: "radio",
                                    name: "severity",
                                    value: "low"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.bug.severity, "low")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.bug,
                                        "severity",
                                        "low"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                      Low\n                    "
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "assigned" }
                              },
                              [_vm._v("Assigned To :")]
                            ),
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
                                        var val =
                                          "_value" in o ? o._value : o.value
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
                              _vm._l(_vm.developers, function(
                                developer,
                                index
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: developer.id }
                                  },
                                  [_vm._v(_vm._s(developer.email))]
                                )
                              }),
                              0
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6 mt-5" },
                          [
                            _c("b-form-file", {
                              ref: "imageUpload",
                              attrs: {
                                placeholder:
                                  "Choose a Image or drop it here...",
                                "drop-placeholder": "Drop file here..."
                              },
                              model: {
                                value: _vm.bug.image,
                                callback: function($$v) {
                                  _vm.$set(_vm.bug, "image", $$v)
                                },
                                expression: "bug.image"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-3" }, [
                              _vm._v(
                                "Screen Shot: " +
                                  _vm._s(
                                    _vm.bug.image ? _vm.bug.image.name : ""
                                  )
                              )
                            ])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-right my-2" }, [
                        _c(
                          "button",
                          { staticClass: "btn btn-primary btn-lg" },
                          [
                            _vm._v(
                              "\n                Update\n                "
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
                                _c("polyline", {
                                  attrs: { points: "9 11 12 14 22 4" }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
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
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataBugs.vue?vue&type=template&id=80872d48&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TableDataBugs.vue?vue&type=template&id=80872d48&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
          _vm._l(_vm.bugs, function(bug, index) {
            return _c(
              "tr",
              {
                key: index,
                on: {
                  click: function($event) {
                    return _vm.showDetails(bug.id)
                  }
                }
              },
              [
                _c("td", [_vm._v(_vm._s(bug.title))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(bug.project.name))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      bug.assigned_to ? bug.assigned_to.email : "Unassigned"
                    )
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-capitalize font-weight-bold" }, [
                  _vm._v(_vm._s(bug.priority))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-capitalize font-weight-bold" }, [
                  _vm._v(_vm._s(bug.severity))
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "font-weight-bold",
                    class: bug.is_fixed ? "text-success" : "text-danger"
                  },
                  [_vm._v(_vm._s(bug.is_fixed ? "Fixed" : "Active"))]
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(bug.created_at))])
              ]
            )
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "text-muted" }, [
      _vm._v("Click the Bug to see more.")
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
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Project")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Assigned")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Priority")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Severity")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Reported at")])
        ])
      ]
    )
  }
]
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
    _vm.hideDetails
      ? _c(
          "div",
          [
            _c("AddBug"),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("TableDataBugs", {
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
          [
            _c("EditBug"),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("DetailsBug", {
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
}
var staticRenderFns = []
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
/* empty/unused harmony star reexport *//* harmony import */ var _AddBug_vue_vue_type_style_index_0_id_0c4baa84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css& */ "./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_style_index_0_id_0c4baa84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddBug.vue?vue&type=style&index=0&id=0c4baa84&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_style_index_0_id_0c4baa84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_style_index_0_id_0c4baa84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_style_index_0_id_0c4baa84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_style_index_0_id_0c4baa84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBug_vue_vue_type_style_index_0_id_0c4baa84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./resources/js/components/AddCommentBug.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/AddCommentBug.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCommentBug_vue_vue_type_template_id_f654308a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCommentBug.vue?vue&type=template&id=f654308a& */ "./resources/js/components/AddCommentBug.vue?vue&type=template&id=f654308a&");
/* harmony import */ var _AddCommentBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCommentBug.vue?vue&type=script&lang=js& */ "./resources/js/components/AddCommentBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddCommentBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCommentBug_vue_vue_type_template_id_f654308a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCommentBug_vue_vue_type_template_id_f654308a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddCommentBug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddCommentBug.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AddCommentBug.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCommentBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddCommentBug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCommentBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCommentBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddCommentBug.vue?vue&type=template&id=f654308a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/AddCommentBug.vue?vue&type=template&id=f654308a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCommentBug_vue_vue_type_template_id_f654308a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddCommentBug.vue?vue&type=template&id=f654308a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddCommentBug.vue?vue&type=template&id=f654308a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCommentBug_vue_vue_type_template_id_f654308a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCommentBug_vue_vue_type_template_id_f654308a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CommentsBug.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CommentsBug.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentsBug_vue_vue_type_template_id_6dd4fec5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentsBug.vue?vue&type=template&id=6dd4fec5&scoped=true& */ "./resources/js/components/CommentsBug.vue?vue&type=template&id=6dd4fec5&scoped=true&");
/* harmony import */ var _CommentsBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentsBug.vue?vue&type=script&lang=js& */ "./resources/js/components/CommentsBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CommentsBug_vue_vue_type_style_index_0_id_6dd4fec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css& */ "./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CommentsBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentsBug_vue_vue_type_template_id_6dd4fec5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CommentsBug_vue_vue_type_template_id_6dd4fec5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6dd4fec5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CommentsBug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CommentsBug.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CommentsBug.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CommentsBug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommentsBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_style_index_0_id_6dd4fec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommentsBug.vue?vue&type=style&index=0&id=6dd4fec5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_style_index_0_id_6dd4fec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_style_index_0_id_6dd4fec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_style_index_0_id_6dd4fec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_style_index_0_id_6dd4fec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_style_index_0_id_6dd4fec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/CommentsBug.vue?vue&type=template&id=6dd4fec5&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/CommentsBug.vue?vue&type=template&id=6dd4fec5&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_template_id_6dd4fec5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CommentsBug.vue?vue&type=template&id=6dd4fec5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommentsBug.vue?vue&type=template&id=6dd4fec5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_template_id_6dd4fec5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsBug_vue_vue_type_template_id_6dd4fec5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DetailsBug.vue":
/*!************************************************!*\
  !*** ./resources/js/components/DetailsBug.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsBug_vue_vue_type_template_id_bdd06f06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsBug.vue?vue&type=template&id=bdd06f06&scoped=true& */ "./resources/js/components/DetailsBug.vue?vue&type=template&id=bdd06f06&scoped=true&");
/* harmony import */ var _DetailsBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsBug.vue?vue&type=script&lang=js& */ "./resources/js/components/DetailsBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DetailsBug_vue_vue_type_style_index_0_id_bdd06f06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css& */ "./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetailsBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailsBug_vue_vue_type_template_id_bdd06f06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailsBug_vue_vue_type_template_id_bdd06f06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bdd06f06",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DetailsBug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DetailsBug.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/DetailsBug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsBug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_style_index_0_id_bdd06f06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsBug.vue?vue&type=style&index=0&id=bdd06f06&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_style_index_0_id_bdd06f06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_style_index_0_id_bdd06f06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_style_index_0_id_bdd06f06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_style_index_0_id_bdd06f06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_style_index_0_id_bdd06f06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/DetailsBug.vue?vue&type=template&id=bdd06f06&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/DetailsBug.vue?vue&type=template&id=bdd06f06&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_template_id_bdd06f06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailsBug.vue?vue&type=template&id=bdd06f06&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DetailsBug.vue?vue&type=template&id=bdd06f06&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_template_id_bdd06f06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsBug_vue_vue_type_template_id_bdd06f06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditBug.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/EditBug.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditBug_vue_vue_type_template_id_5557786f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditBug.vue?vue&type=template&id=5557786f&scoped=true& */ "./resources/js/components/EditBug.vue?vue&type=template&id=5557786f&scoped=true&");
/* harmony import */ var _EditBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditBug.vue?vue&type=script&lang=js& */ "./resources/js/components/EditBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditBug_vue_vue_type_style_index_0_id_5557786f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css& */ "./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditBug_vue_vue_type_template_id_5557786f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditBug_vue_vue_type_template_id_5557786f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5557786f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditBug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditBug.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/EditBug.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditBug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditBug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_style_index_0_id_5557786f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditBug.vue?vue&type=style&index=0&id=5557786f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_style_index_0_id_5557786f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_style_index_0_id_5557786f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_style_index_0_id_5557786f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_style_index_0_id_5557786f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_style_index_0_id_5557786f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/EditBug.vue?vue&type=template&id=5557786f&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/EditBug.vue?vue&type=template&id=5557786f&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_template_id_5557786f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditBug.vue?vue&type=template&id=5557786f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditBug.vue?vue&type=template&id=5557786f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_template_id_5557786f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBug_vue_vue_type_template_id_5557786f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TableDataBugs.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/TableDataBugs.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableDataBugs_vue_vue_type_template_id_80872d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableDataBugs.vue?vue&type=template&id=80872d48&scoped=true& */ "./resources/js/components/TableDataBugs.vue?vue&type=template&id=80872d48&scoped=true&");
/* harmony import */ var _TableDataBugs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableDataBugs.vue?vue&type=script&lang=js& */ "./resources/js/components/TableDataBugs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TableDataBugs_vue_vue_type_style_index_0_id_80872d48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css& */ "./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TableDataBugs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableDataBugs_vue_vue_type_template_id_80872d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableDataBugs_vue_vue_type_template_id_80872d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "80872d48",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TableDataBugs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TableDataBugs.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/TableDataBugs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataBugs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataBugs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_style_index_0_id_80872d48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataBugs.vue?vue&type=style&index=0&id=80872d48&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_style_index_0_id_80872d48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_style_index_0_id_80872d48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_style_index_0_id_80872d48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_style_index_0_id_80872d48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_style_index_0_id_80872d48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/TableDataBugs.vue?vue&type=template&id=80872d48&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/TableDataBugs.vue?vue&type=template&id=80872d48&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_template_id_80872d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TableDataBugs.vue?vue&type=template&id=80872d48&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TableDataBugs.vue?vue&type=template&id=80872d48&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_template_id_80872d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableDataBugs_vue_vue_type_template_id_80872d48_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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