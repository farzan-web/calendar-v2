webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/appointment-details/appointment-details.component.jsx":
/*!**************************************************************************!*\
  !*** ./components/appointment-details/appointment-details.component.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appointment_details_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment-details.styles.scss */ "./components/appointment-details/appointment-details.styles.scss");
/* harmony import */ var _appointment_details_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_appointment_details_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Farzan\\My Work\\Opeqe Company\\React\\calendar-v2\\components\\appointment-details\\appointment-details.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AppointmentDetails() {
  return __jsx("div", {
    className: "review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "back-btn-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "back-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, " \u02FF ")), __jsx("p", {
    className: "review-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Enter Details"), __jsx("p", {
    className: "review-time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "name"), __jsx("p", {
    className: "clock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Please share anything that will help prepare for our meeting."));
}

_c = AppointmentDetails;
/* harmony default export */ __webpack_exports__["default"] = (AppointmentDetails);

var _c;

$RefreshReg$(_c, "AppointmentDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_appointment_details_appointment_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/appointment-details/appointment-details.component */ "./components/appointment-details/appointment-details.component.jsx");
/* harmony import */ var _components_appointment_review_appointment_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/appointment-review/appointment-review.component */ "./components/appointment-review/appointment-review.component.jsx");
/* harmony import */ var _components_calender_calender_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/calender/calender.component */ "./components/calender/calender.component.jsx");
/* harmony import */ var _components_time_hour_time_hour_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/time-hour/time-hour.component */ "./components/time-hour/time-hour.component.jsx");






var _jsxFileName = "E:\\Farzan\\My Work\\Opeqe Company\\React\\calendar-v2\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this);
    _this.timeHandleClick = _this.timeHandleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.detailsHandleClick = _this.detailsHandleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      timeHandle: false,
      detailsHandle: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "timeHandleClick",
    value: function timeHandleClick() {
      this.setState({
        timeHandle: true
      });
    }
  }, {
    key: "detailsHandleClick",
    value: function detailsHandleClick() {
      this.setState({
        timeHandle: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "appointment-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "".concat(this.state.timeHandle ? "appointment-grid3" : "appointment-grid2"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }
      }, __jsx(_components_appointment_review_appointment_review_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 29
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }
      }, __jsx(_components_calender_calender_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
        timeHandleClick: this.timeHandleClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 29
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, __jsx(_components_time_hour_time_hour_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
        timeHandle: this.state.timeHandle,
        detailsHandleClick: this.detailsHandleClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcG9pbnRtZW50LWRldGFpbHMvYXBwb2ludG1lbnQtZGV0YWlscy5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcG9pbnRtZW50RGV0YWlscyIsIkluZGV4IiwidGltZUhhbmRsZUNsaWNrIiwiYmluZCIsImRldGFpbHNIYW5kbGVDbGljayIsInN0YXRlIiwidGltZUhhbmRsZSIsImRldGFpbHNIYW5kbGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxrQkFBVCxHQUE4QjtBQUM3QixTQUNPO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBREosRUFJSTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosRUFLSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1JO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFOSixDQURQO0FBVUE7O0tBWFFBLGtCO0FBYU1BLGlGQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJDLEs7Ozs7O0FBQ2pCLG1CQUFhO0FBQUE7O0FBQUE7O0FBQ1Q7QUFFQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLHlHQUF2QjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4Qix5R0FBMUI7QUFFQSxVQUFLRSxLQUFMLEdBQWE7QUFDVEMsZ0JBQVUsRUFBQyxLQURGO0FBRVRDLG1CQUFhLEVBQUM7QUFGTCxLQUFiO0FBTlM7QUFVWjs7OztzQ0FFaUI7QUFDZCxXQUFLQyxRQUFMLENBQWM7QUFBRUYsa0JBQVUsRUFBRTtBQUFkLE9BQWQ7QUFDSDs7O3lDQUVvQjtBQUNqQixXQUFLRSxRQUFMLENBQWM7QUFBRUYsa0JBQVUsRUFBRTtBQUFkLE9BQWQ7QUFDSDs7OzZCQUdPO0FBQ0osYUFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLFlBQUssS0FBS0QsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLG1CQUF4QixHQUE4QyxtQkFBbkQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsbUdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnRkFBRDtBQUFVLHVCQUFlLEVBQUUsS0FBS0osZUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBSkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxrRkFBRDtBQUFVLGtCQUFVLEVBQUUsS0FBS0csS0FBTCxDQUFXQyxVQUFqQztBQUE2QywwQkFBa0IsRUFBRSxLQUFLRixrQkFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBUEosQ0FESixDQURKLENBREo7QUFpQkg7Ozs7RUF4QzhCSyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kODU1YmRiOWRlZTdmOTBmZGU3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2FwcG9pbnRtZW50LWRldGFpbHMuc3R5bGVzLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gQXBwb2ludG1lbnREZXRhaWxzKCkge1xyXG5cdHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2stYnRuLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JhY2stYnRuJz4gJiM3Njc7IDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncmV2aWV3LWhlYWRlcic+RW50ZXIgRGV0YWlsczwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmV2aWV3LXRpbWVcIj5uYW1lPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbG9ja1wiPlBsZWFzZSBzaGFyZSBhbnl0aGluZyB0aGF0IHdpbGwgaGVscCBwcmVwYXJlIGZvciBvdXIgbWVldGluZy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwb2ludG1lbnREZXRhaWxzOyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuXHJcbmltcG9ydCBBcHBvaW50bWVudERldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL2FwcG9pbnRtZW50LWRldGFpbHMvYXBwb2ludG1lbnQtZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgQXBwb2ludG1lbnRSZXZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9hcHBvaW50bWVudC1yZXZpZXcvYXBwb2ludG1lbnQtcmV2aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCBDYWxlbmRlciBmcm9tICcuLi9jb21wb25lbnRzL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCBUaW1lSG91ciBmcm9tICcuLi9jb21wb25lbnRzL3RpbWUtaG91ci90aW1lLWhvdXIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVIYW5kbGVDbGljayA9IHRoaXMudGltZUhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzSGFuZGxlQ2xpY2sgPSB0aGlzLmRldGFpbHNIYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0aW1lSGFuZGxlOmZhbHNlLFxyXG4gICAgICAgICAgICBkZXRhaWxzSGFuZGxlOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aW1lSGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVIYW5kbGU6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWlsc0hhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lSGFuZGxlOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBvaW50bWVudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnRpbWVIYW5kbGUgPyBcImFwcG9pbnRtZW50LWdyaWQzXCIgOiBcImFwcG9pbnRtZW50LWdyaWQyXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwb2ludG1lbnRSZXZpZXcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kZXIgdGltZUhhbmRsZUNsaWNrPXt0aGlzLnRpbWVIYW5kbGVDbGlja30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lSG91ciB0aW1lSGFuZGxlPXt0aGlzLnN0YXRlLnRpbWVIYW5kbGV9IGRldGFpbHNIYW5kbGVDbGljaz17dGhpcy5kZXRhaWxzSGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9