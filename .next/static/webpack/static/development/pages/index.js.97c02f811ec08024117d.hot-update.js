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





function Calender(_ref) {
  var _this = this;

  var stars = _ref.stars;
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
  }, "July 2020 ", stars), __jsx("div", {
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
  }, " MON  "), __jsx("p", {
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
        console.log(stars);
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
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
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
    return _ref3.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FsZW5kZXIiLCJzdGFycyIsImRheXMiLCJtYXAiLCJkYXkiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJob3VycyIsImhvdXIiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxRQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzVCLFNBQ087QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF3Q0EsS0FBeEMsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHSTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixFQUlJO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLEVBS0k7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosRUFNSTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixFQU9JO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLEVBUU1DLGdEQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsV0FDVjtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGFBQU8sRUFBRSxtQkFBTTtBQUFFQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUFvQixPQUF4QztBQUNJLGVBQVMsWUFBS0csR0FBRyxDQUFDRyxFQUFKLEdBQU8sRUFBUCxHQUFZLEtBQVosR0FBb0IsS0FBekIsQ0FEYjtBQUMrQyxTQUFHLEVBQUVILEdBQUcsQ0FBQ0csRUFEeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUMrREgsR0FBRyxDQUFDQSxHQURuRSxDQURKLENBRFU7QUFBQSxHQUFaLENBUk4sQ0FGSixDQUZKLEVBcUJJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixDQUZKLEVBMEJJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01JLDZDQUFLLENBQUNMLEdBQU4sQ0FBVSxVQUFBTSxJQUFJO0FBQUEsV0FDWjtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsWUFBS0EsSUFBSSxDQUFDRixFQUFMLEdBQVEsRUFBUixHQUFhLEtBQWIsR0FBcUIsS0FBMUIsQ0FBWjtBQUErQyxTQUFHLEVBQUVFLElBQUksQ0FBQ0YsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFnRUUsSUFBSSxDQUFDQSxJQUFyRSxNQURKLENBRFk7QUFBQSxHQUFkLENBRE4sQ0FGSixDQUZKLENBMUJKLENBREosQ0FEUDtBQThDQTs7S0EvQ1FULFE7O0FBaURUQSxRQUFRLENBQUNVLGVBQVQ7QUFBQSwrTEFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVDtBQUNqQkMsZUFEaUIsR0FDWCxJQURXO0FBQUEsNkNBRWhCO0FBQUVYLG1CQUFLLEVBQUVXO0FBQVQsYUFGZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2VaLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45N2MwMmY4MTFlYzA4MDI0MTE3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NhbGVuZGVyLnN0eWxlcy5zY3NzJztcclxuaW1wb3J0IGRheXMgZnJvbSAnLi4vLi4vZGF0YS9jYWxlbmRlci5qc29uJztcclxuaW1wb3J0IGhvdXJzIGZyb20gJy4uLy4uL2RhdGEvaG91cnMuanNvbic7XHJcbmltcG9ydCBUaW1lem9uZSBmcm9tICcuLi90aW16b25lL3RpbWV6b25lLmNvbXBvbmVudCc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ2FsZW5kZXIoeyBzdGFycyB9KSB7XHJcblx0cmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYWxlbmRlci1jb21wb25lbnQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGVyLWNvbXBvbmVudC1ncmlkJz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FsZW5kZXItaGVhZGVyJz5DaG9vc2UgeW91ciBhcHBvaW50bWVudCBkYXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYWxlbmRlci1hcGknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhbGVuZGVyLWRhdGUnPkp1bHkgMjAyMCB7c3RhcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kZXItYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3dlZWstZGF5cyc+IE1PTiAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBUVUUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBXRUQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBUSFUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBGUkkgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBTQVQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWVrLWRheXMnPiBTVU4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkYXlzLm1hcChkYXkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vbnRoLWRheXMnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4geyBjb25zb2xlLmxvZyhzdGFycykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZGF5LmlkPDEwID8gXCJvbmVcIiA6IFwidHdvXCJ9YH0ga2V5PXtkYXkuaWR9PiB7IGRheS5kYXkgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaW1lem9uZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGltZS1oZWFkZXInPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1hcGknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbWUtZGF0ZSc+TW9uZGF5LCBKdWx5IDY8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBob3Vycy5tYXAoaG91ciA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1ob3VycycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2hvdXIuaWQ8MTAgPyBcIm9uZVwiIDogXCJ0d29cIn1gfSBrZXk9e2hvdXIuaWR9PiB7IGhvdXIuaG91ciB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHQpO1xyXG59XHJcblxyXG5DYWxlbmRlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gXCJoaVwiO1xyXG4gICAgcmV0dXJuIHsgc3RhcnM6IHJlcyB9O1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRlcjsiXSwic291cmNlUm9vdCI6IiJ9