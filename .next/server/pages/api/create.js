"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/create";
exports.ids = ["pages/api/create"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQU10QyxNQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxJQUFJLElBQUlELHdEQUFZLEVBQUU7QUFFekQsSUFBSUcsSUFBcUMsRUFBRUQsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByaXNtYS1hcHAvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/create.ts":
/*!*****************************!*\
  !*** ./pages/api/create.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nasync function handler(req, res) {\n    const { title , content  } = req.body;\n    try {\n        // CREATE\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note.create({\n            data: {\n                title,\n                content\n            }\n        });\n        res.status(200).json({\n            message: \"Note created\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(400).json({\n            message: error\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3lDO0FBTTFCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNBLE1BQU0sRUFBQ0MsS0FBSyxHQUFFQyxPQUFPLEdBQUMsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBRWpDLElBQUk7UUFDRixTQUFTO1FBQ1QsTUFBTU4sMkRBQWtCLENBQUM7WUFDdkJTLElBQUksRUFBRTtnQkFDSkwsS0FBSztnQkFDTEMsT0FBTzthQUNSO1NBQ0YsQ0FBQztRQUNGRixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxjQUFjO1NBQUUsQ0FBQztLQUNsRCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO1FBQ2xCVixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRUMsS0FBSztTQUFFLENBQUM7S0FDekM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcHJpc21hLWFwcC8uL3BhZ2VzL2FwaS9jcmVhdGUudHM/ZjJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIlxuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4gIGNvbnN0IHt0aXRsZSwgY29udGVudH0gPSByZXEuYm9keVxuXG4gIHRyeSB7XG4gICAgLy8gQ1JFQVRFXG4gICAgYXdhaXQgcHJpc21hLm5vdGUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNvbnRlbnRcbiAgICAgIH1cbiAgICB9KVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ05vdGUgY3JlYXRlZCcgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidGl0bGUiLCJjb250ZW50IiwiYm9keSIsIm5vdGUiLCJjcmVhdGUiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create.ts"));
module.exports = __webpack_exports__;

})();