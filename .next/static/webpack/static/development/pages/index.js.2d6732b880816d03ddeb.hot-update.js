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



function TimeHour() {
  var _this = this;

  return (//<div className={`${this.state.timeHandle ? "time-visible" : "time-hide"} time`}>
    __jsx("div", {
      className: "".concat(this.props.timeHandle ? "time-visible" : "time-hide", " time"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RpbWUtaG91ci90aW1lLWhvdXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJUaW1lSG91ciIsInByb3BzIiwidGltZUhhbmRsZSIsImhvdXJzIiwibWFwIiwiaG91ciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNuQixTQUNPO0FBQ0E7QUFBSyxlQUFTLFlBQU0sS0FBS0MsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLGNBQXhCLEdBQXlDLFdBQS9DLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLEVBRUE7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxlQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ01DLDZDQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsYUFDWjtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxZQUFLQSxJQUFJLENBQUNDLEVBQUwsR0FBUSxFQUFSLEdBQWEsS0FBYixHQUFxQixLQUExQixDQUFaO0FBQStDLFdBQUcsRUFBRUQsSUFBSSxDQUFDQyxFQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWdFRCxJQUFJLENBQUNBLElBQXJFLE1BREosQ0FEWTtBQUFBLEtBQWQsQ0FETixDQUZKLENBRkE7QUFGUDtBQWdCQTs7S0FqQlFMLFE7QUFtQk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yZDY3MzJiODgwODE2ZDAzZGRlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3RpbWUtaG91ci5zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBob3VycyBmcm9tICcuLi8uLi9kYXRhL2hvdXJzLmpzb24nO1xyXG5cclxuZnVuY3Rpb24gVGltZUhvdXIoKSB7XHJcblx0cmV0dXJuKFxyXG4gICAgICAgIC8vPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUudGltZUhhbmRsZSA/IFwidGltZS12aXNpYmxlXCIgOiBcInRpbWUtaGlkZVwifSB0aW1lYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtgJHt0aGlzLnByb3BzLnRpbWVIYW5kbGUgPyBcInRpbWUtdmlzaWJsZVwiIDogXCJ0aW1lLWhpZGVcIn0gdGltZWB9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGltZS1oZWFkZXInPjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1hcGknPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbWUtZGF0ZSc+TW9uZGF5LCBKdWx5IDY8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgeyBob3Vycy5tYXAoaG91ciA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1ob3VycycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2hvdXIuaWQ8MTAgPyBcIm9uZVwiIDogXCJ0d29cIn1gfSBrZXk9e2hvdXIuaWR9PiB7IGhvdXIuaG91ciB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVIb3VyOyJdLCJzb3VyY2VSb290IjoiIn0=