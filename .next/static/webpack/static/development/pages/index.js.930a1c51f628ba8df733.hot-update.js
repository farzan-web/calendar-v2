webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/calender/calender.component.jsx":
/*!****************************************************!*\
  !*** ./components/calender/calender.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calender_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calender.styles.scss */ "./components/calender/calender.styles.scss");
/* harmony import */ var _calender_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_calender_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_calender_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/calender.json */ "./data/calender.json");
var _data_calender_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/calender.json */ "./data/calender.json", 1);
/* harmony import */ var _data_hours_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/hours.json */ "./data/hours.json");
var _data_hours_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/hours.json */ "./data/hours.json", 1);
/* harmony import */ var _timzone_timezone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timzone/timezone.component */ "./components/timzone/timezone.component.jsx");

var _jsxFileName = "E:\\Farzan\\My Work\\Opeqe Company\\React\\calendar-v2\\components\\calender\\calender.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var timeVisible = false;
var grid1fr = true;

function setTimeHandler() {
  timeVisible = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("timeVisible"), !timeVisible);
}

function getTimeHandler() {
  return timeVisible;
}

function setGridHandler() {
  grid1fr = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("grid1fr"), !grid1fr);
}

function getGridHandler() {
  return grid1fr;
}

function Calender(_ref) {
  var _this = this;

  var stars = _ref.stars;
  return __jsx("div", {
    className: "calender-component-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "calender-component-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "calender",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "calender-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Choose your appointment date"), __jsx("div", {
    className: "calender-api",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "calender-date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "July 2020 "), __jsx("div", {
    className: "calender-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, " MON  "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, " TUE "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, " WED "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, " THU "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, " FRI "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, " SAT "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, " SUN "), _data_calender_json__WEBPACK_IMPORTED_MODULE_3__.map(function (day) {
    return __jsx("div", {
      className: "month-days",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, __jsx("p", {
      onClick: function onClick() {
        setTimeHandler();
      },
      className: "".concat(day.id < 10 ? "one" : "two"),
      key: day.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 37
      }
    }, " ", day.day));
  }))), __jsx(_timzone_timezone_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "".concat(timeVisible ? "time-visible" : "time-hide", " time"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "time-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "time-api",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "time-date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Monday, July 6"), __jsx("div", {
    className: "time-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, _data_hours_json__WEBPACK_IMPORTED_MODULE_4__.map(function (hour) {
    return __jsx("div", {
      className: "time-hours",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "".concat(hour.id < 10 ? "one" : "two"),
      key: hour.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    }, " ", hour.hour, " "));
  }))))));
}

_c = Calender;
/* harmony default export */ __webpack_exports__["default"] = (Calender);

var _c;

$RefreshReg$(_c, "Calender");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsidGltZVZpc2libGUiLCJncmlkMWZyIiwic2V0VGltZUhhbmRsZXIiLCJnZXRUaW1lSGFuZGxlciIsInNldEdyaWRIYW5kbGVyIiwiZ2V0R3JpZEhhbmRsZXIiLCJDYWxlbmRlciIsInN0YXJzIiwiZGF5cyIsIm1hcCIsImRheSIsImlkIiwiaG91cnMiLCJob3VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsS0FBcEI7QUFDQSxJQUFNQyxPQUFPLEdBQUUsSUFBZjs7QUFFQSxTQUFTQyxjQUFULEdBQXlCO0FBQ3JCRixhQUFXLDZHQUFHLENBQUNBLFdBQUosQ0FBWDtBQUNIOztBQUNELFNBQVNHLGNBQVQsR0FBeUI7QUFDckIsU0FBT0gsV0FBUDtBQUNIOztBQUVELFNBQVNJLGNBQVQsR0FBeUI7QUFDckJILFNBQU8seUdBQUcsQ0FBQ0EsT0FBSixDQUFQO0FBQ0g7O0FBQ0QsU0FBU0ksY0FBVCxHQUF5QjtBQUNyQixTQUFPSixPQUFQO0FBQ0g7O0FBRUQsU0FBU0ssUUFBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUM1QixTQUNPO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHSTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixFQUlJO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLEVBS0k7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosRUFNSTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixFQU9JO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLEVBUU1DLGdEQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsV0FDVjtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGFBQU8sRUFBRSxtQkFBTTtBQUFFUixzQkFBYztBQUFJLE9BQXRDO0FBQ0ksZUFBUyxZQUFLUSxHQUFHLENBQUNDLEVBQUosR0FBTyxFQUFQLEdBQVksS0FBWixHQUFvQixLQUF6QixDQURiO0FBQytDLFNBQUcsRUFBRUQsR0FBRyxDQUFDQyxFQUR4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQytERCxHQUFHLENBQUNBLEdBRG5FLENBREosQ0FEVTtBQUFBLEdBQVosQ0FSTixDQUZKLENBRkosRUFxQkksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJKLENBRkosRUEwQkk7QUFBSyxhQUFTLFlBQUtWLFdBQVcsR0FBRyxjQUFILEdBQW9CLFdBQXBDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01ZLDZDQUFLLENBQUNILEdBQU4sQ0FBVSxVQUFBSSxJQUFJO0FBQUEsV0FDWjtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsWUFBS0EsSUFBSSxDQUFDRixFQUFMLEdBQVEsRUFBUixHQUFhLEtBQWIsR0FBcUIsS0FBMUIsQ0FBWjtBQUErQyxTQUFHLEVBQUVFLElBQUksQ0FBQ0YsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFnRUUsSUFBSSxDQUFDQSxJQUFyRSxNQURKLENBRFk7QUFBQSxHQUFkLENBRE4sQ0FGSixDQUZKLENBMUJKLENBREosQ0FEUDtBQThDQTs7S0EvQ1FQLFE7QUFrRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45MzBhMWM1MWY2MjhiYThkZjczMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NhbGVuZGVyLnN0eWxlcy5zY3NzJztcclxuaW1wb3J0IGRheXMgZnJvbSAnLi4vLi4vZGF0YS9jYWxlbmRlci5qc29uJztcclxuaW1wb3J0IGhvdXJzIGZyb20gJy4uLy4uL2RhdGEvaG91cnMuanNvbic7XHJcbmltcG9ydCBUaW1lem9uZSBmcm9tICcuLi90aW16b25lL3RpbWV6b25lLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCB0aW1lVmlzaWJsZSA9IGZhbHNlO1xyXG5jb25zdCBncmlkMWZyPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gc2V0VGltZUhhbmRsZXIoKXtcclxuICAgIHRpbWVWaXNpYmxlID0gIXRpbWVWaXNpYmxlO1xyXG59XHJcbmZ1bmN0aW9uIGdldFRpbWVIYW5kbGVyKCl7XHJcbiAgICByZXR1cm4gdGltZVZpc2libGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEdyaWRIYW5kbGVyKCl7XHJcbiAgICBncmlkMWZyID0gIWdyaWQxZnI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0R3JpZEhhbmRsZXIoKXtcclxuICAgIHJldHVybiBncmlkMWZyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDYWxlbmRlcih7IHN0YXJzIH0pIHtcclxuXHRyZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGVyLWNvbXBvbmVudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kZXItY29tcG9uZW50LWdyaWQnPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYWxlbmRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYWxlbmRlci1oZWFkZXInPkNob29zZSB5b3VyIGFwcG9pbnRtZW50IGRhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGVyLWFwaSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FsZW5kZXItZGF0ZSc+SnVseSAyMDIwIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGVyLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBNT04gIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gVFVFIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gV0VEIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gVEhVIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gRlJJIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gU0FUIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gU1VOIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF5cy5tYXAoZGF5ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb250aC1kYXlzJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IHsgc2V0VGltZUhhbmRsZXIoKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtkYXkuaWQ8MTAgPyBcIm9uZVwiIDogXCJ0d29cIn1gfSBrZXk9e2RheS5pZH0+IHsgZGF5LmRheSB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpbWV6b25lIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGltZVZpc2libGUgPyBcInRpbWUtdmlzaWJsZVwiIDogXCJ0aW1lLWhpZGVcIn0gdGltZWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGltZS1oZWFkZXInPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1hcGknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbWUtZGF0ZSc+TW9uZGF5LCBKdWx5IDY8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBob3Vycy5tYXAoaG91ciA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1ob3VycycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2hvdXIuaWQ8MTAgPyBcIm9uZVwiIDogXCJ0d29cIn1gfSBrZXk9e2hvdXIuaWR9PiB7IGhvdXIuaG91ciB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHQpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==