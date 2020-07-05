webpackHotUpdate("static\\development\\pages\\index.js",{

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
        detailsHandle: false
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
        className: "".concat(this.state.detailsHandle ? "invisible" : "visible"),
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
        className: "".concat(this.state.timeHandle ? "visible" : "invisible"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, __jsx(_components_time_hour_time_hour_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
        detailsHandleClick: this.detailsHandleClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "".concat(this.state.detailsHandle ? "visible" : "invisible"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }
      }, __jsx(_components_appointment_details_appointment_details_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInRpbWVIYW5kbGVDbGljayIsImJpbmQiLCJkZXRhaWxzSGFuZGxlQ2xpY2siLCJzdGF0ZSIsInRpbWVIYW5kbGUiLCJkZXRhaWxzSGFuZGxlIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxLOzs7OztBQUNqQixtQkFBYTtBQUFBOztBQUFBOztBQUNUO0FBRUEsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQix5R0FBdkI7QUFDQSxVQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIseUdBQTFCO0FBRUEsVUFBS0UsS0FBTCxHQUFhO0FBQ1RDLGdCQUFVLEVBQUMsS0FERjtBQUVUQyxtQkFBYSxFQUFDO0FBRkwsS0FBYjtBQU5TO0FBVVo7Ozs7c0NBRWlCO0FBQ2QsV0FBS0MsUUFBTCxDQUFjO0FBQUVGLGtCQUFVLEVBQUU7QUFBZCxPQUFkO0FBQ0g7Ozt5Q0FFb0I7QUFDakIsV0FBS0UsUUFBTCxDQUFjO0FBQUVELHFCQUFhLEVBQUU7QUFBakIsT0FBZDtBQUNIOzs7NkJBR087QUFDSixhQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsWUFBSyxLQUFLRixLQUFMLENBQVdDLFVBQVgsR0FBd0IsbUJBQXhCLEdBQThDLG1CQUFuRCxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxtR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixFQUlJO0FBQUssaUJBQVMsWUFBTSxLQUFLRCxLQUFMLENBQVdFLGFBQVgsR0FBMkIsV0FBM0IsR0FBeUMsU0FBL0MsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnRkFBRDtBQUFVLHVCQUFlLEVBQUUsS0FBS0wsZUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBSkosRUFPSTtBQUFLLGlCQUFTLFlBQU0sS0FBS0csS0FBTCxDQUFXQyxVQUFYLEdBQXdCLFNBQXhCLEdBQW9DLFdBQTFDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsa0ZBQUQ7QUFBVywwQkFBa0IsRUFBRSxLQUFLRixrQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBUEosRUFVSTtBQUFLLGlCQUFTLFlBQU0sS0FBS0MsS0FBTCxDQUFXRSxhQUFYLEdBQTJCLFNBQTNCLEdBQXVDLFdBQTdDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMscUdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBVkosQ0FESixDQURKLENBREo7QUFvQkg7Ozs7RUEzQzhCRSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMjJjMWFmM2Y5Y2Y1MTFlMDVlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuaW1wb3J0IEFwcG9pbnRtZW50RGV0YWlsIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwb2ludG1lbnQtZGV0YWlscy9hcHBvaW50bWVudC1kZXRhaWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCBBcHBvaW50bWVudFJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL2FwcG9pbnRtZW50LXJldmlldy9hcHBvaW50bWVudC1yZXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IENhbGVuZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY2FsZW5kZXIvY2FsZW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IFRpbWVIb3VyIGZyb20gJy4uL2NvbXBvbmVudHMvdGltZS1ob3VyL3RpbWUtaG91ci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZUhhbmRsZUNsaWNrID0gdGhpcy50aW1lSGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRldGFpbHNIYW5kbGVDbGljayA9IHRoaXMuZGV0YWlsc0hhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRpbWVIYW5kbGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIGRldGFpbHNIYW5kbGU6ZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVIYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGltZUhhbmRsZTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhaWxzSGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHNIYW5kbGU6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcG9pbnRtZW50LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUudGltZUhhbmRsZSA/IFwiYXBwb2ludG1lbnQtZ3JpZDNcIiA6IFwiYXBwb2ludG1lbnQtZ3JpZDJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBvaW50bWVudFJldmlldyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtgJHt0aGlzLnN0YXRlLmRldGFpbHNIYW5kbGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kZXIgdGltZUhhbmRsZUNsaWNrPXt0aGlzLnRpbWVIYW5kbGVDbGlja30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtgJHt0aGlzLnN0YXRlLnRpbWVIYW5kbGUgPyBcInZpc2libGVcIiA6IFwiaW52aXNpYmxlXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZUhvdXIgIGRldGFpbHNIYW5kbGVDbGljaz17dGhpcy5kZXRhaWxzSGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge2Ake3RoaXMuc3RhdGUuZGV0YWlsc0hhbmRsZSA/IFwidmlzaWJsZVwiIDogXCJpbnZpc2libGVcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBvaW50bWVudERldGFpbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==