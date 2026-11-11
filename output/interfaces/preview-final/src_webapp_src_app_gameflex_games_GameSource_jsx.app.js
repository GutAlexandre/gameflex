"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_webapp_src_app_gameflex_games_GameSource_jsx"],{

/***/ "./src/webapp/src/app/gameflex/games/GameSource.jsx"
/*!**********************************************************!*\
  !*** ./src/webapp/src/app/gameflex/games/GameSource.jsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameSource: () => (/* binding */ GameSource)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./src/webapp/src/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/localLibrary.js */ "./src/webapp/src/app/gameflex/libs/localLibrary.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./src/webapp/src/app/gameflex/games/helpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webapp/src/node_modules/react/jsx-runtime.js");




function GameSource(_ref) {
  var rom = _ref.rom,
    t = _ref.t;
  var kind = rom.kind || "local";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "d-flex align-items-center gap-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
      className: _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ORIGIN_ICON[kind] || "bi bi-hdd"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      children: t(_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ORIGIN_LABEL[kind] || "retrogaming.origin.unknown")
    }), (0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__.isRemoteSource)(kind) && rom.source && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      className: "text-muted text-truncate",
      children: ["\xB7 ", rom.source]
    }), !(0,_libs_localLibrary_js__WEBPACK_IMPORTED_MODULE_1__.isRemoteSource)(kind) && rom.disk && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      className: "text-muted text-truncate",
      children: ["\xB7 ", t("retrogaming.origin.disk", {
        name: rom.disk
      })]
    })]
  });
}

/***/ }

}]);