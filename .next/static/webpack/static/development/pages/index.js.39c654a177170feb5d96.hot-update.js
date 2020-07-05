webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/calender/calender.component.jsx":
/*!****************************************************!*\
  !*** ./components/calender/calender.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calender_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calender.styles.scss */ "./components/calender/calender.styles.scss");
/* harmony import */ var _calender_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calender_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_calender_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/calender.json */ "./data/calender.json");
var _data_calender_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/calender.json */ "./data/calender.json", 1);
/* harmony import */ var _data_hours_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/hours.json */ "./data/hours.json");
var _data_hours_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/hours.json */ "./data/hours.json", 1);
/* harmony import */ var _timzone_timezone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../timzone/timezone.component */ "./components/timzone/timezone.component.jsx");


var _jsxFileName = "E:\\Farzan\\My Work\\Opeqe Company\\React\\calendar-v2\\components\\calender\\calender.component.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Calender() {
  var _this = this;

  return __jsx("div", {
    className: "calender-component-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "calender-component-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "calender",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "calender-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Choose your appointment date"), __jsx("div", {
    className: "calender-api",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "calender-date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "July 2020"), __jsx("div", {
    className: "calender-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, " MON "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, " TUE "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, " WED "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, " THU "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, " FRI "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, " SAT "), __jsx("p", {
    className: "week-days",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, " SUN "), _data_calender_json__WEBPACK_IMPORTED_MODULE_4__.map(function (day) {
    return __jsx("div", {
      className: "month-days",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 33
      }
    }, __jsx("p", {
      onClick: function onClick() {
        console.log("Sd");
      },
      className: "".concat(day.id < 10 ? "one" : "two"),
      key: day.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, " ", day.day));
  }))), __jsx(_timzone_timezone_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "time-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "time-api",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "time-date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, "Monday, July 6"), __jsx("div", {
    className: "time-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, _data_hours_json__WEBPACK_IMPORTED_MODULE_5__.map(function (hour) {
    return __jsx("div", {
      className: "time-hours",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "".concat(hour.id < 10 ? "one" : "two"),
      key: hour.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 37
      }
    }, " ", hour.hour, " "));
  }))))));
}

_c = Calender;

Calender.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            res = "hi";
            return _context.abrupt("return", {
              stars: res
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FsZW5kZXIiLCJkYXlzIiwibWFwIiwiZGF5IiwiY29uc29sZSIsImxvZyIsImlkIiwiaG91cnMiLCJob3VyIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicmVzIiwic3RhcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ25CLFNBQ087QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFSTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUdJO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBSUk7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosRUFLSTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixFQU1JO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLEVBT0k7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosRUFRTUMsZ0RBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLEdBQUc7QUFBQSxXQUNWO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsYUFBTyxFQUFFLG1CQUFNO0FBQUVDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFBbUIsT0FBdkM7QUFDSSxlQUFTLFlBQUtGLEdBQUcsQ0FBQ0csRUFBSixHQUFPLEVBQVAsR0FBWSxLQUFaLEdBQW9CLEtBQXpCLENBRGI7QUFDK0MsU0FBRyxFQUFFSCxHQUFHLENBQUNHLEVBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDK0RILEdBQUcsQ0FBQ0EsR0FEbkUsQ0FESixDQURVO0FBQUEsR0FBWixDQVJOLENBRkosQ0FGSixFQXFCSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkosQ0FGSixFQTBCSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNSSw2Q0FBSyxDQUFDTCxHQUFOLENBQVUsVUFBQU0sSUFBSTtBQUFBLFdBQ1o7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxlQUFTLFlBQUtBLElBQUksQ0FBQ0YsRUFBTCxHQUFRLEVBQVIsR0FBYSxLQUFiLEdBQXFCLEtBQTFCLENBQVo7QUFBK0MsU0FBRyxFQUFFRSxJQUFJLENBQUNGLEVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBZ0VFLElBQUksQ0FBQ0EsSUFBckUsTUFESixDQURZO0FBQUEsR0FBZCxDQUROLENBRkosQ0FGSixDQTFCSixDQURKLENBRFA7QUE4Q0E7O0tBL0NRUixROztBQWlEVEEsUUFBUSxDQUFDUyxlQUFUO0FBQUEsK0xBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxlQUFULFFBQVNBLEdBQVQ7QUFDakJDLGVBRGlCLEdBQ1gsSUFEVztBQUFBLDZDQUVoQjtBQUFFQyxtQkFBSyxFQUFFRDtBQUFULGFBRmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlWCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzljNjU0YTE3NzE3MGZlYjVkOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jYWxlbmRlci5zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBkYXlzIGZyb20gJy4uLy4uL2RhdGEvY2FsZW5kZXIuanNvbic7XHJcbmltcG9ydCBob3VycyBmcm9tICcuLi8uLi9kYXRhL2hvdXJzLmpzb24nO1xyXG5pbXBvcnQgVGltZXpvbmUgZnJvbSAnLi4vdGltem9uZS90aW1lem9uZS5jb21wb25lbnQnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENhbGVuZGVyKCkge1xyXG5cdHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kZXItY29tcG9uZW50LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYWxlbmRlci1jb21wb25lbnQtZ3JpZCc+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhbGVuZGVyLWhlYWRlcic+Q2hvb3NlIHlvdXIgYXBwb2ludG1lbnQgZGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kZXItYXBpJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYWxlbmRlci1kYXRlJz5KdWx5IDIwMjA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYWxlbmRlci1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gTU9OIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gVFVFIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gV0VEIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gVEhVIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gRlJJIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gU0FUIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nd2Vlay1kYXlzJz4gU1VOIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF5cy5tYXAoZGF5ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb250aC1kYXlzJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IHsgY29uc29sZS5sb2coXCJTZFwiKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtkYXkuaWQ8MTAgPyBcIm9uZVwiIDogXCJ0d29cIn1gfSBrZXk9e2RheS5pZH0+IHsgZGF5LmRheSB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpbWV6b25lIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW1lLWhlYWRlcic+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLWFwaSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGltZS1kYXRlJz5Nb25kYXksIEp1bHkgNjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWUtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhvdXJzLm1hcChob3VyID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLWhvdXJzJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7aG91ci5pZDwxMCA/IFwib25lXCIgOiBcInR3b1wifWB9IGtleT17aG91ci5pZH0+IHsgaG91ci5ob3VyIH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cdCk7XHJcbn1cclxuXHJcbkNhbGVuZGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBcImhpXCJcclxuICAgIHJldHVybiB7IHN0YXJzOiByZXMgfTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==