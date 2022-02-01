"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Blogs.tsx":
/*!******************************!*\
  !*** ./components/Blogs.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction Blogs(param) {\n    var posts = param.posts;\n    var _this = this;\n    console.log(posts);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3\",\n        children: posts.map(function(post) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/post/\".concat(post.slug.current),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"group cursor-pointer overflow-hidden rounded-lg border\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-60 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105\",\n                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.mainImage).url(),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between bg-white p-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-xl font-bold\",\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"by \",\n                                                post.author.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-12 w-12 rounded-full object-cover\",\n                                    src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.author.image).url(),\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, _this)\n            }, post._id, false, {\n                fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\components\\\\Blogs.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n}\n_c = Blogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogs);\nvar _c;\n$RefreshReg$(_c, \"Blogs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRCO0FBQ0g7QUFDUztTQU16QkcsS0FBSyxDQUFDLEtBQWdCLEVBQUUsQ0FBQztRQUFqQkMsS0FBSyxHQUFQLEtBQWdCLENBQWRBLEtBQUs7O0lBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztJQUNqQixNQUFNLDZFQUNIRyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUEwRTtrQkFDdEZKLEtBQUssQ0FBQ0ssR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTswQkFDZCxNQUFNQyxDQUFBQSw2REFBQUEsQ0FBTFgsa0RBQUk7Z0JBQWdCWSxJQUFJLEVBQUcsQ0FBTSxRQUFvQixPQUFsQkYsSUFBSSxDQUFDRyxJQUFJLENBQUNDLE9BQU87c0dBQ2xEUCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBd0Q7O29HQUNwRU8sQ0FBRzs0QkFDRlAsU0FBUyxFQUFDLENBQThGOzRCQUN4R1EsR0FBRyxFQUFFZCwrQ0FBTSxDQUFDUSxJQUFJLENBQUNPLFNBQVMsRUFBRUMsR0FBRzs0QkFDL0JDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7b0dBRVBaLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFnRDs7NEdBQzVERCxDQUFHOztvSEFDRGEsQ0FBRTs0Q0FBQ1osU0FBUyxFQUFDLENBQW1CO3NEQUFFRSxJQUFJLENBQUNXLEtBQUs7Ozs7OztvSEFDNUNDLENBQUM7O2dEQUFDLENBQUc7Z0RBQUNaLElBQUksQ0FBQ2EsTUFBTSxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7OzRHQUV4QlQsQ0FBRztvQ0FDRlAsU0FBUyxFQUFDLENBQXFDO29DQUMvQ1EsR0FBRyxFQUFFZCwrQ0FBTSxDQUFDUSxJQUFJLENBQUNhLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFUCxHQUFHO29DQUNsQ0MsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWZIVCxJQUFJLENBQUNnQixHQUFHOzs7Ozs7Ozs7OztBQXVCM0IsQ0FBQztLQTVCUXZCLEtBQUs7QUE4QmQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9ncy50c3g/YjRlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSAnLi4vc2FuaXR5J1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vdHlwaW5ncydcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBwb3N0czogW1Bvc3RdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJsb2dzKHsgcG9zdHMgfTogUHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwb3N0cylcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0zIHAtMiBzbTpncmlkLWNvbHMtMiBtZDpnYXAtNiBtZDpwLTYgbGc6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGtleT17cG9zdC5faWR9IGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBib3JkZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNjAgdy1mdWxsIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0Lm1haW5JbWFnZSkudXJsKCkhfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXdoaXRlIHAtNVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57cG9zdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+Ynkge3Bvc3QuYXV0aG9yLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy0xMiByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QuYXV0aG9yLmltYWdlKS51cmwoKSF9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ3NcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVybEZvciIsIkJsb2dzIiwicG9zdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCIsImtleSIsImhyZWYiLCJzbHVnIiwiY3VycmVudCIsImltZyIsInNyYyIsIm1haW5JbWFnZSIsInVybCIsImFsdCIsImgzIiwidGl0bGUiLCJwIiwiYXV0aG9yIiwibmFtZSIsImltYWdlIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Blogs.tsx\n");

/***/ })

});