webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/calender/calender.component.jsx":
/*!****************************************************!*\
  !*** ./components/calender/calender.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calender; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _calender_styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calender.styles.scss */ "./components/calender/calender.styles.scss");
/* harmony import */ var _calender_styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_calender_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_calender_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/calender.json */ "./data/calender.json");
var _data_calender_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/calender.json */ "./data/calender.json", 1);
/* harmony import */ var _data_hours_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/hours.json */ "./data/hours.json");
var _data_hours_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/hours.json */ "./data/hours.json", 1);
/* harmony import */ var _timzone_timezone_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../timzone/timezone.component */ "./components/timzone/timezone.component.jsx");







var _jsxFileName = "E:\\Farzan\\My Work\\Opeqe Company\\React\\calendar-v2\\components\\calender\\calender.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Calender = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Calender, _React$Component);

  var _super = _createSuper(Calender);

  function Calender() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Calender);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Calender, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        className: "calender-component-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "calender-component-grid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "calender",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: "calender-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }
      }, "Choose your appointment date"), __jsx("div", {
        className: "calender-api",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }
      }, __jsx("p", {
        className: "calender-date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 29
        }
      }, "July 2020"), __jsx("div", {
        className: "calender-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 29
        }
      }, __jsx("p", {
        className: "week-days",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 33
        }
      }, " MON "), __jsx("p", {
        className: "week-days",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 33
        }
      }, " TUE "), __jsx("p", {
        className: "week-days",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 33
        }
      }, " WED "), __jsx("p", {
        className: "week-days",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 33
        }
      }, " THU "), __jsx("p", {
        className: "week-days",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 33
        }
      }, " FRI "), __jsx("p", {
        className: "week-days",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 33
        }
      }, " SAT "), __jsx("p", {
        className: "week-days",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 33
        }
      }, " SUN "), _data_calender_json__WEBPACK_IMPORTED_MODULE_9__.map(function (day) {
        return __jsx("div", {
          className: "month-days",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 37
          }
        }, __jsx("p", {
          onClick: function onClick() {
            console.log(_this.props.timeHandle);
          },
          className: "".concat(day.id < 10 ? "one" : "two"),
          key: day.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 41
          }
        }, " ", day.day));
      }))), __jsx(_timzone_timezone_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: "time-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "time-api",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }
      }, __jsx("p", {
        className: "time-date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }
      }, "Monday, July 6"), __jsx("div", {
        className: "time-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 29
        }
      }, _data_hours_json__WEBPACK_IMPORTED_MODULE_10__.map(function (hour) {
        return __jsx("div", {
          className: "time-hours",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 37
          }
        }, __jsx("p", {
          className: "".concat(hour.id < 10 ? "one" : "two"),
          key: hour.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 41
          }
        }, " ", hour.hour, " "));
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  timeHandle: "time-hide",
                  gridHandle: "grid-1fr"
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Calender;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FsZW5kZXIiLCJkYXlzIiwibWFwIiwiZGF5IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidGltZUhhbmRsZSIsImlkIiwiaG91cnMiLCJob3VyIiwiZ3JpZEhhbmRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdxQkEsUTs7Ozs7Ozs7Ozs7Ozs2QkFRVDtBQUFBOztBQUNKLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FESixFQUVJO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSTtBQUFHLGlCQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0k7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixFQUlJO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosRUFLSTtBQUFHLGlCQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLEVBTUk7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixFQU9JO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosRUFRTUMsZ0RBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLEdBQUc7QUFBQSxlQUNWO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFHLGlCQUFPLEVBQUUsbUJBQU07QUFBRUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxVQUF2QjtBQUFvQyxXQUF4RDtBQUNJLG1CQUFTLFlBQUtKLEdBQUcsQ0FBQ0ssRUFBSixHQUFPLEVBQVAsR0FBWSxLQUFaLEdBQW9CLEtBQXpCLENBRGI7QUFDK0MsYUFBRyxFQUFFTCxHQUFHLENBQUNLLEVBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQytETCxHQUFHLENBQUNBLEdBRG5FLENBREosQ0FEVTtBQUFBLE9BQVosQ0FSTixDQUZKLENBRkosRUFxQkksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBckJKLENBRkosRUEwQkk7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNNTSw4Q0FBSyxDQUFDUCxHQUFOLENBQVUsVUFBQVEsSUFBSTtBQUFBLGVBQ1o7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUcsbUJBQVMsWUFBS0EsSUFBSSxDQUFDRixFQUFMLEdBQVEsRUFBUixHQUFhLEtBQWIsR0FBcUIsS0FBMUIsQ0FBWjtBQUErQyxhQUFHLEVBQUVFLElBQUksQ0FBQ0YsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0VFLElBQUksQ0FBQ0EsSUFBckUsTUFESixDQURZO0FBQUEsT0FBZCxDQUROLENBRkosQ0FGSixDQTFCSixDQURKLENBREo7QUE4Q0g7Ozs7Ozs7OztpREFyRFU7QUFDSEgsNEJBQVUsRUFBQyxXQURSO0FBRUhJLDRCQUFVLEVBQUM7QUFGUixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUZ1QkMsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODc1NDk1OTZhZjk0OTZkZDljZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jYWxlbmRlci5zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBkYXlzIGZyb20gJy4uLy4uL2RhdGEvY2FsZW5kZXIuanNvbic7XHJcbmltcG9ydCBob3VycyBmcm9tICcuLi8uLi9kYXRhL2hvdXJzLmpzb24nO1xyXG5pbXBvcnQgVGltZXpvbmUgZnJvbSAnLi4vdGltem9uZS90aW1lem9uZS5jb21wb25lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpbWVIYW5kbGU6XCJ0aW1lLWhpZGVcIixcclxuICAgICAgICAgICAgZ3JpZEhhbmRsZTpcImdyaWQtMWZyXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGVyLWNvbXBvbmVudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGVyLWNvbXBvbmVudC1ncmlkJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYWxlbmRlci1oZWFkZXInPkNob29zZSB5b3VyIGFwcG9pbnRtZW50IGRhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYWxlbmRlci1hcGknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYWxlbmRlci1kYXRlJz5KdWx5IDIwMjA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kZXItYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBNT04gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gVFVFIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3dlZWstZGF5cyc+IFdFRCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBUSFUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gRlJJIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3dlZWstZGF5cyc+IFNBVCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBTVU4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF5cy5tYXAoZGF5ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9udGgtZGF5cycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4geyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnRpbWVIYW5kbGUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtkYXkuaWQ8MTAgPyBcIm9uZVwiIDogXCJ0d29cIn1gfSBrZXk9e2RheS5pZH0+IHsgZGF5LmRheSB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWV6b25lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW1lLWhlYWRlcic+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1hcGknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW1lLWRhdGUnPk1vbmRheSwgSnVseSA2PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWUtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBob3Vycy5tYXAoaG91ciA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWUtaG91cnMnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7aG91ci5pZDwxMCA/IFwib25lXCIgOiBcInR3b1wifWB9IGtleT17aG91ci5pZH0+IHsgaG91ci5ob3VyIH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=