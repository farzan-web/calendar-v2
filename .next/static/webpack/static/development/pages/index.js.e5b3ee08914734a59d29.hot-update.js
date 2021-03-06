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
        timeHandle: false
      });
      this.setState({
        detailsHandle: true
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
          lineNumber: 33,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "appointment-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "".concat(this.state.detailsHandle ? "appointment-grid-details" : this.state.timeHandle ? "appointment-grid3" : "appointment-grid2"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }
      }, __jsx(_components_appointment_review_appointment_review_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "".concat(this.state.detailsHandle ? "invisible" : "visible"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }
      }, __jsx(_components_calender_calender_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
        timeHandleClick: this.timeHandleClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "".concat(this.state.timeHandle ? "visible" : "invisible"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }
      }, __jsx(_components_time_hour_time_hour_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
        detailsHandleClick: this.detailsHandleClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "".concat(this.state.detailsHandle ? "visible" : "invisible"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }
      }, __jsx(_components_appointment_details_appointment_details_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInRpbWVIYW5kbGVDbGljayIsImJpbmQiLCJkZXRhaWxzSGFuZGxlQ2xpY2siLCJzdGF0ZSIsInRpbWVIYW5kbGUiLCJkZXRhaWxzSGFuZGxlIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxLOzs7OztBQUNqQixtQkFBYTtBQUFBOztBQUFBOztBQUNUO0FBRUEsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQix5R0FBdkI7QUFDQSxVQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIseUdBQTFCO0FBRUEsVUFBS0UsS0FBTCxHQUFhO0FBQ1RDLGdCQUFVLEVBQUMsS0FERjtBQUVUQyxtQkFBYSxFQUFDO0FBRkwsS0FBYjtBQU5TO0FBVVo7Ozs7c0NBRWlCO0FBQ2QsV0FBS0MsUUFBTCxDQUFjO0FBQUVGLGtCQUFVLEVBQUU7QUFBZCxPQUFkO0FBQ0g7Ozt5Q0FFb0I7QUFDakIsV0FBS0UsUUFBTCxDQUFjO0FBQUVGLGtCQUFVLEVBQUU7QUFBZCxPQUFkO0FBQ0EsV0FBS0UsUUFBTCxDQUFjO0FBQUVELHFCQUFhLEVBQUU7QUFBakIsT0FBZDtBQUNIOzs7NkJBR087QUFDSixhQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsWUFBSyxLQUFLRixLQUFMLENBQVdFLGFBQVgsR0FBMkIsMEJBQTNCLEdBQXdELEtBQUtGLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QixtQkFBeEIsR0FBOEMsbUJBQTNHLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLG1HQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLEVBSUk7QUFBSyxpQkFBUyxZQUFNLEtBQUtELEtBQUwsQ0FBV0UsYUFBWCxHQUEyQixXQUEzQixHQUF5QyxTQUEvQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdGQUFEO0FBQVUsdUJBQWUsRUFBRSxLQUFLTCxlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FKSixFQU9JO0FBQUssaUJBQVMsWUFBTSxLQUFLRyxLQUFMLENBQVdDLFVBQVgsR0FBd0IsU0FBeEIsR0FBb0MsV0FBMUMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxrRkFBRDtBQUFXLDBCQUFrQixFQUFFLEtBQUtGLGtCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FQSixFQVVJO0FBQUssaUJBQVMsWUFBTSxLQUFLQyxLQUFMLENBQVdFLGFBQVgsR0FBMkIsU0FBM0IsR0FBdUMsV0FBN0MsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxxR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FWSixDQURKLENBREosQ0FESjtBQW9CSDs7OztFQTVDOEJFLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmU1YjNlZTA4OTE0NzM0YTU5ZDI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcblxyXG5pbXBvcnQgQXBwb2ludG1lbnREZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9hcHBvaW50bWVudC1kZXRhaWxzL2FwcG9pbnRtZW50LWRldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IEFwcG9pbnRtZW50UmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvYXBwb2ludG1lbnQtcmV2aWV3L2FwcG9pbnRtZW50LXJldmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgQ2FsZW5kZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jYWxlbmRlci9jYWxlbmRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgVGltZUhvdXIgZnJvbSAnLi4vY29tcG9uZW50cy90aW1lLWhvdXIvdGltZS1ob3VyLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lSGFuZGxlQ2xpY2sgPSB0aGlzLnRpbWVIYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsc0hhbmRsZUNsaWNrID0gdGhpcy5kZXRhaWxzSGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGltZUhhbmRsZTpmYWxzZSxcclxuICAgICAgICAgICAgZGV0YWlsc0hhbmRsZTpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGltZUhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lSGFuZGxlOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFpbHNIYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGltZUhhbmRsZTogZmFsc2UgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHNIYW5kbGU6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0FwcCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwb2ludG1lbnQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5kZXRhaWxzSGFuZGxlID8gXCJhcHBvaW50bWVudC1ncmlkLWRldGFpbHNcIiA6IHRoaXMuc3RhdGUudGltZUhhbmRsZSA/IFwiYXBwb2ludG1lbnQtZ3JpZDNcIiA6IFwiYXBwb2ludG1lbnQtZ3JpZDJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBvaW50bWVudFJldmlldyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtgJHt0aGlzLnN0YXRlLmRldGFpbHNIYW5kbGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kZXIgdGltZUhhbmRsZUNsaWNrPXt0aGlzLnRpbWVIYW5kbGVDbGlja30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtgJHt0aGlzLnN0YXRlLnRpbWVIYW5kbGUgPyBcInZpc2libGVcIiA6IFwiaW52aXNpYmxlXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZUhvdXIgIGRldGFpbHNIYW5kbGVDbGljaz17dGhpcy5kZXRhaWxzSGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge2Ake3RoaXMuc3RhdGUuZGV0YWlsc0hhbmRsZSA/IFwidmlzaWJsZVwiIDogXCJpbnZpc2libGVcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBvaW50bWVudERldGFpbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==