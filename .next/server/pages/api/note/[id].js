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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nasync function handler(req, res) {\n    const noteId = req.query.id;\n    const { title , content , id  } = req.body;\n    // DELETE\n    if (req.method === \"DELETE\") {\n        const note = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note[\"delete\"]({\n            where: {\n                id: Number(noteId)\n            }\n        });\n        res.json(note);\n    } else if (req.method === \"PUT\") {\n        const note1 = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note.update({\n            where: {\n                id: Number(noteId)\n            },\n            data: {\n                title,\n                content\n            }\n        });\n        res.status(200).json({\n            message: \"Note updated\"\n        });\n    } else {\n        const notes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma?.note.findFirst({\n            where: {\n                id: Number(noteId)\n            }\n        });\n        if (notes === null) {\n            res.json(\"Not found or Excluded\");\n        }\n        res.json(notes);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90ZS9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzRDO0FBRTdCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNDLEVBQUU7SUFDM0IsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRUYsRUFBRSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ08sSUFBSTtJQUN2QyxTQUFTO0lBQ1QsSUFBSVAsR0FBRyxDQUFDUSxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzNCLE1BQU1DLElBQUksR0FBRyxNQUFNWCw4REFBa0IsQ0FBQztZQUNwQ2EsS0FBSyxFQUFFO2dCQUFFUCxFQUFFLEVBQUVRLE1BQU0sQ0FBQ1YsTUFBTSxDQUFDO2FBQUU7U0FDOUIsQ0FBQztRQUNGRCxHQUFHLENBQUNZLElBQUksQ0FBQ0osSUFBSSxDQUFDO0tBQ2YsTUFFSSxJQUFJVCxHQUFHLENBQUNRLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDN0IsTUFBTUMsS0FBSSxHQUFHLE1BQU1YLDJEQUFrQixDQUFDO1lBQ3BDYSxLQUFLLEVBQUU7Z0JBQUVQLEVBQUUsRUFBRVEsTUFBTSxDQUFDVixNQUFNLENBQUM7YUFBRTtZQUM3QmEsSUFBSSxFQUFFO2dCQUNKVixLQUFLO2dCQUNMQyxPQUFPO2FBQ1I7U0FDRixDQUFDO1FBQ0ZMLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSCxJQUFJLENBQUM7WUFBRUksT0FBTyxFQUFFLGNBQWM7U0FBRSxDQUFDO0tBQ2xELE1BQ0k7UUFDSCxNQUFNQyxLQUFLLEdBQUcsTUFBTXBCLCtDQUFNLEVBQUVXLElBQUksQ0FBQ1UsU0FBUyxDQUFDO1lBQ3pDUixLQUFLLEVBQUU7Z0JBQ0xQLEVBQUUsRUFBRVEsTUFBTSxDQUFDVixNQUFNLENBQUM7YUFDbkI7U0FDRixDQUFDO1FBQ0YsSUFBSWdCLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbEJqQixHQUFHLENBQUNZLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztTQUNsQztRQUNEWixHQUFHLENBQUNZLElBQUksQ0FBQ0ssS0FBSyxDQUFDO0tBQ2hCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByaXNtYS1hcHAvLi9wYWdlcy9hcGkvbm90ZS9baWRdLnRzP2RiNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCBub3RlSWQgPSByZXEucXVlcnkuaWRcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgaWQgfSA9IHJlcS5ib2R5XG4gIC8vIERFTEVURVxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICBjb25zdCBub3RlID0gYXdhaXQgcHJpc21hLm5vdGUuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIobm90ZUlkKSB9XG4gICAgfSlcbiAgICByZXMuanNvbihub3RlKVxuICB9XG4gIC8vIFVQREFURVxuICBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUFVUJykge1xuICAgIGNvbnN0IG5vdGUgPSBhd2FpdCBwcmlzbWEubm90ZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihub3RlSWQpIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50XG4gICAgICB9XG4gICAgfSlcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdOb3RlIHVwZGF0ZWQnIH0pXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3Qgbm90ZXMgPSBhd2FpdCBwcmlzbWE/Lm5vdGUuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBOdW1iZXIobm90ZUlkKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKG5vdGVzID09PSBudWxsKSB7XG4gICAgICByZXMuanNvbignTm90IGZvdW5kIG9yIEV4Y2x1ZGVkJylcbiAgICB9XG4gICAgcmVzLmpzb24obm90ZXMpXG4gIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5vdGVJZCIsInF1ZXJ5IiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJib2R5IiwibWV0aG9kIiwibm90ZSIsImRlbGV0ZSIsIndoZXJlIiwiTnVtYmVyIiwianNvbiIsInVwZGF0ZSIsImRhdGEiLCJzdGF0dXMiLCJtZXNzYWdlIiwibm90ZXMiLCJmaW5kRmlyc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/note/[id].ts\n");

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