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
exports.id = "pages/api/note/[id]";
exports.ids = ["pages/api/note/[id]"];
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

/***/ "(api)/./pages/api/note/[id].ts":
/*!********************************!*\
  !*** ./pages/api/note/[id].ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nasync function handler(req, res) {\n    const noteId = req.query.id;\n    const { title , content , id  } = req.body;\n    // DELETE\n    if (req.method === \"DELETE\") {\n        const note = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note[\"delete\"]({\n            where: {\n                id: Number(noteId)\n            }\n        });\n        res.json(note);\n    } else if (req.method === \"PUT\") {\n        const note1 = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note.update({\n            where: {\n                id: Number(noteId)\n            },\n            data: {\n                title,\n                content\n            }\n        });\n        res.status(200).json({\n            message: \"Note updated\"\n        });\n    } else {\n        console.log(\"Note could not be modified\");\n        res.status(400).json({\n            message: \"Note could not be modified\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90ZS9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzRDO0FBRTdCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNDLEVBQUU7SUFDM0IsTUFBTSxFQUFDQyxLQUFLLEdBQUVDLE9BQU8sR0FBRUYsRUFBRSxHQUFDLEdBQUdKLEdBQUcsQ0FBQ08sSUFBSTtJQUNuQyxTQUFTO0lBQ1QsSUFBSVAsR0FBRyxDQUFDUSxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQ3pCLE1BQU1DLElBQUksR0FBRyxNQUFNWCw4REFBa0IsQ0FBQztZQUNsQ2EsS0FBSyxFQUFFO2dCQUFFUCxFQUFFLEVBQUVRLE1BQU0sQ0FBQ1YsTUFBTSxDQUFDO2FBQUU7U0FDaEMsQ0FBQztRQUNGRCxHQUFHLENBQUNZLElBQUksQ0FBQ0osSUFBSSxDQUFDO0tBQ2pCLE1BRUksSUFBSVQsR0FBRyxDQUFDUSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQzdCLE1BQU1DLEtBQUksR0FBRyxNQUFNWCwyREFBa0IsQ0FBQztZQUNwQ2EsS0FBSyxFQUFFO2dCQUFFUCxFQUFFLEVBQUVRLE1BQU0sQ0FBQ1YsTUFBTSxDQUFDO2FBQUU7WUFDN0JhLElBQUksRUFBRTtnQkFDSlYsS0FBSztnQkFDTEMsT0FBTzthQUNSO1NBQ0YsQ0FBQztRQUNGTCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO1lBQUVJLE9BQU8sRUFBRSxjQUFjO1NBQUUsQ0FBQztLQUNsRCxNQUNJO1FBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDO1FBQ3pDbEIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNILElBQUksQ0FBQztZQUFFSSxPQUFPLEVBQUUsNEJBQTRCO1NBQUUsQ0FBQztLQUNsRTtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wcmlzbWEtYXBwLy4vcGFnZXMvYXBpL25vdGUvW2lkXS50cz9kYjY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3Qgbm90ZUlkID0gcmVxLnF1ZXJ5LmlkXG4gIGNvbnN0IHt0aXRsZSwgY29udGVudCwgaWR9ID0gcmVxLmJvZHlcbiAgICAvLyBERUxFVEVcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgY29uc3Qgbm90ZSA9IGF3YWl0IHByaXNtYS5ub3RlLmRlbGV0ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKG5vdGVJZCkgfVxuICAgICAgICB9KVxuICAgICAgICByZXMuanNvbihub3RlKVxuICAgIH0gXG4gICAgLy8gVVBEQVRFXG4gICAgZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgIGNvbnN0IG5vdGUgPSBhd2FpdCBwcmlzbWEubm90ZS51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKG5vdGVJZCkgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ05vdGUgdXBkYXRlZCcgfSlcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGUgY291bGQgbm90IGJlIG1vZGlmaWVkXCIpXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJOb3RlIGNvdWxkIG5vdCBiZSBtb2RpZmllZFwiIH0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJub3RlSWQiLCJxdWVyeSIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiYm9keSIsIm1ldGhvZCIsIm5vdGUiLCJkZWxldGUiLCJ3aGVyZSIsIk51bWJlciIsImpzb24iLCJ1cGRhdGUiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/note/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/note/[id].ts"));
module.exports = __webpack_exports__;

})();