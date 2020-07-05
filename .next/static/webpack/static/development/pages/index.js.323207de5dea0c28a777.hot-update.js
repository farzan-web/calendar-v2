webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/time-hour/time-hour.component.jsx":
/*!******************************************************!*\
  !*** ./components/time-hour/time-hour.component.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _time_hour_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-hour.styles.scss */ "./components/time-hour/time-hour.styles.scss");
/* harmony import */ var _time_hour_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_time_hour_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_hours_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/hours.json */ "./data/hours.json");
var _data_hours_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/hours.json */ "./data/hours.json", 1);
var _jsxFileName = "E:\\Farzan\\My Work\\Opeqe Company\\React\\calendar-v2\\components\\time-hour\\time-hour.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function TimeHour(_ref) {
  var _this = this;

  var timeHandle = _ref.timeHandle;
  return (//<div className={`${this.state.timeHandle ? "time-visible" : "time-hide"} time`}>
    __jsx("div", {
      className: "".concat(timeHandle ? "time-visible" : "time-hide", " time"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "time-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "time-api",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "time-date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, "Monday, July 6"), __jsx("div", {
      className: "time-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, _data_hours_json__WEBPACK_IMPORTED_MODULE_2__.map(function (hour) {
      return __jsx("div", {
        className: "time-hours",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: "".concat(hour.id < 10 ? "one" : "two"),
        key: hour.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }
      }, " ", hour.hour, " "));
    }))))
  );
}

_c = TimeHour;
/* harmony default export */ __webpack_exports__["default"] = (TimeHour);

var _c;

$RefreshReg$(_c, "TimeHour");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RpbWUtaG91ci90aW1lLWhvdXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJUaW1lSG91ciIsInRpbWVIYW5kbGUiLCJob3VycyIsIm1hcCIsImhvdXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFiQyxVQUFhLFFBQWJBLFVBQWE7QUFDL0IsU0FDTztBQUNBO0FBQUssZUFBUyxZQUFNQSxVQUFVLEdBQUcsY0FBSCxHQUFvQixXQUFwQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEQSxFQUVBO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsZUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUVJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNNQyw2Q0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLGFBQ1o7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsWUFBS0EsSUFBSSxDQUFDQyxFQUFMLEdBQVEsRUFBUixHQUFhLEtBQWIsR0FBcUIsS0FBMUIsQ0FBWjtBQUErQyxXQUFHLEVBQUVELElBQUksQ0FBQ0MsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFnRUQsSUFBSSxDQUFDQSxJQUFyRSxNQURKLENBRFk7QUFBQSxLQUFkLENBRE4sQ0FGSixDQUZBO0FBRlA7QUFnQkE7O0tBakJRSixRO0FBbUJNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzIzMjA3ZGU1ZGVhMGMyOGE3NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi90aW1lLWhvdXIuc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgaG91cnMgZnJvbSAnLi4vLi4vZGF0YS9ob3Vycy5qc29uJztcclxuXHJcbmZ1bmN0aW9uIFRpbWVIb3VyKHt0aW1lSGFuZGxlfSkge1xyXG5cdHJldHVybihcclxuICAgICAgICAvLzxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnRpbWVIYW5kbGUgPyBcInRpbWUtdmlzaWJsZVwiIDogXCJ0aW1lLWhpZGVcIn0gdGltZWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7YCR7dGltZUhhbmRsZSA/IFwidGltZS12aXNpYmxlXCIgOiBcInRpbWUtaGlkZVwifSB0aW1lYH0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW1lLWhlYWRlcic+PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLWFwaSc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGltZS1kYXRlJz5Nb25kYXksIEp1bHkgNjwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWUtYm9keSc+XHJcbiAgICAgICAgICAgICAgICB7IGhvdXJzLm1hcChob3VyID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLWhvdXJzJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7aG91ci5pZDwxMCA/IFwib25lXCIgOiBcInR3b1wifWB9IGtleT17aG91ci5pZH0+IHsgaG91ci5ob3VyIH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZUhvdXI7Il0sInNvdXJjZVJvb3QiOiIifQ==