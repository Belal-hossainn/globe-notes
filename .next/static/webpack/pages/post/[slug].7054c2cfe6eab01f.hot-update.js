"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-portable-text */ \"./node_modules/react-portable-text/dist/index.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sanity */ \"./sanity.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Post(param1) {\n    var post = param1.post;\n    console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"h-44 w-full object-cover\",\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__.urlFor)(post.mainImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"mx-auto mb-10 max-w-3xl p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mt-10 mb-5 text-3xl font-bold\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-12 w-12 rounded-full object-cover\",\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_4__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between text-sm font-light\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"By\",\n                                            ' ',\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-normal text-black\",\n                                                children: post.author.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"pr-5\",\n                                        children: [\n                                            \"published at \",\n                                            new Date(post._createdAt).toDateString()\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"\",\n                            dataset: \"production\",\n                            projectId: \"ttj6rssr\",\n                            content: post.body,\n                            serializers: {\n                                h1: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"my-5 text-2xl font-bold\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                h2: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", _objectSpread({\n                                        className: \"my-5 text-xl font-bold\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                li: function(param) {\n                                    var children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-4 list-disc \",\n                                        children: children\n                                    }, void 0, false, void 0, void 0);\n                                },\n                                link: function(param) {\n                                    var href = param.href, children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: href,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: children\n                                    }, void 0, false, void 0, void 0);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\web development\\\\PROJECTS\\\\nextjs-blog\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDeUI7QUFDcUI7QUFDRjtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQU0xQ0ksSUFBSSxDQUFDLE1BQWUsRUFBRSxDQUFDO1FBQWhCQyxJQUFJLEdBQU4sTUFBZSxDQUFiQSxJQUFJO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTtJQUNoQixNQUFNLDZFQUNIRyxDQUFJOzt3RkFDRk4sMERBQU07Ozs7O3dGQUNOTyxDQUFHO2dCQUNGQyxTQUFTLEVBQUMsQ0FBMEI7Z0JBQ3BDQyxHQUFHLEVBQUVSLCtDQUFNLENBQUNFLElBQUksQ0FBQ08sU0FBUyxFQUFFQyxHQUFHO2dCQUMvQkMsR0FBRyxFQUFDLENBQUU7Ozs7Ozt3RkFFUEMsQ0FBTztnQkFBQ0wsU0FBUyxFQUFDLENBQTZCOztnR0FDN0NNLENBQUU7d0JBQUNOLFNBQVMsRUFBQyxDQUErQjtrQ0FBRUwsSUFBSSxDQUFDWSxLQUFLOzs7Ozs7Z0dBQ3hEQyxDQUFHOzt3R0FDRFQsQ0FBRztnQ0FDRkMsU0FBUyxFQUFDLENBQXFDO2dDQUMvQ0MsR0FBRyxFQUFFUiwrQ0FBTSxDQUFDRSxJQUFJLENBQUNjLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFUCxHQUFHO2dDQUNsQ0MsR0FBRyxFQUFDLENBQUU7Ozs7Ozt3R0FFUEksQ0FBRztnQ0FBQ1IsU0FBUyxFQUFDLENBQXNEOztnSEFDbEVXLENBQUM7OzRDQUFDLENBQ0M7NENBQUMsQ0FBRzt3SEFDTEMsQ0FBSTtnREFBQ1osU0FBUyxFQUFDLENBQXdCOzBEQUFFTCxJQUFJLENBQUNjLE1BQU0sQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7O2dIQUUzREYsQ0FBQzt3Q0FBQ1gsU0FBUyxFQUFDLENBQU07OzRDQUFDLENBQ0w7NENBQUMsR0FBRyxDQUFDYyxJQUFJLENBQUNuQixJQUFJLENBQUNvQixVQUFVLEVBQUVDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBS3pEUixDQUFHO3dCQUFDUixTQUFTLEVBQUMsQ0FBTTs4R0FDbEJULDREQUFZOzRCQUNYUyxTQUFTLEVBQUMsQ0FBRTs0QkFDWmlCLE9BQU8sRUFBRUMsWUFBc0M7NEJBQy9DRyxTQUFTLEVBQUVILFVBQXlDOzRCQUNwREssT0FBTyxFQUFFNUIsSUFBSSxDQUFDNkIsSUFBSTs0QkFDbEJDLFdBQVcsRUFBRSxDQUFDO2dDQUNabkIsRUFBRSxFQUFFLFFBQVEsQ0FBUG9CLEtBQVU7a0RBQ2IsTUFBTSwrREFBTHBCLENBQUU7d0NBQUNOLFNBQVMsRUFBQyxDQUF5Qjt1Q0FBSzBCLEtBQUs7O2dDQUVuREMsRUFBRSxFQUFFLFFBQVEsQ0FBUEQsS0FBVTtrREFDYixNQUFNLCtEQUFMQyxDQUFFO3dDQUFDM0IsU0FBUyxFQUFDLENBQXdCO3VDQUFLMEIsS0FBSzs7Z0NBRWxERSxFQUFFLEVBQUUsUUFBUTt3Q0FBTEMsUUFBUSxTQUFSQSxRQUFRO2tEQUNiLE1BQU0sK0RBQUxELENBQUU7d0NBQUM1QixTQUFTLEVBQUMsQ0FBaUI7a0RBQUU2QixRQUFROzs7Z0NBRTNDQyxJQUFJLEVBQUUsUUFBUTt3Q0FBTEMsSUFBSSxTQUFKQSxJQUFJLEVBQUVGLFFBQVEsU0FBUkEsUUFBUTtrREFDckIsTUFBTSwrREFBTEcsQ0FBQzt3Q0FBQ0QsSUFBSSxFQUFFQSxJQUFJO3dDQUFFL0IsU0FBUyxFQUFDLENBQStCO2tEQUNyRDZCLFFBQVE7Ozs0QkFHZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iLENBQUM7S0F4RFFuQyxJQUFJOztBQTBEYiwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS50c3g/MzAxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBvcnRhYmxlVGV4dCBmcm9tICdyZWFjdC1wb3J0YWJsZS10ZXh0J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQsIHVybEZvciB9IGZyb20gJy4uLy4uL3Nhbml0eSdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uLy4uL3R5cGluZ3MnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHBvc3Q6IFBvc3RcclxufVxyXG5mdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKHBvc3QpXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJoLTQ0IHctZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9XHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibXgtYXV0byBtYi0xMCBtYXgtdy0zeGwgcC01XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTEwIG1iLTUgdGV4dC0zeGwgZm9udC1ib2xkXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMTIgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QuYXV0aG9yLmltYWdlKS51cmwoKSF9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSBmb250LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEJ5eycgJ31cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWJsYWNrXCI+e3Bvc3QuYXV0aG9yLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByLTVcIj5cclxuICAgICAgICAgICAgICBwdWJsaXNoZWQgYXQge25ldyBEYXRlKHBvc3QuX2NyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgIDxQb3J0YWJsZVRleHRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgZGF0YXNldD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQhfVxyXG4gICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIX1cclxuICAgICAgICAgICAgY29udGVudD17cG9zdC5ib2R5fVxyXG4gICAgICAgICAgICBzZXJpYWxpemVycz17e1xyXG4gICAgICAgICAgICAgIGgxOiAocHJvcHM6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTUgdGV4dC0yeGwgZm9udC1ib2xkXCIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgaDI6IChwcm9wczogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktNSB0ZXh0LXhsIGZvbnQtYm9sZFwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGxpOiAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtbC00IGxpc3QtZGlzYyBcIj57Y2hpbGRyZW59PC9saT5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGxpbms6ICh7IGhyZWYsIGNoaWxkcmVuIH06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIl0ge1xyXG4gICAgICAgIF9pZCxcclxuICAgICAgICBzbHVnIHtcclxuICAgICAgICBjdXJyZW50XHJcbiAgICAgIH1cclxuICAgICAgfWBcclxuXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpXHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0OiBQb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50LFxyXG4gICAgfSxcclxuICB9KSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXSBbMF0gIHtcclxuICAgICAgICBfaWQsXHJcbiAgICAgICAgX2NyZWF0ZWRBdCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBzbHVnLFxyXG4gICAgICAgIGF1dGhvciAtPntcclxuICAgICAgICBuYW1lLCBpbWFnZVxyXG4gICAgICB9LFxyXG4gICAgICAnY29tbWVudHMnOiAqW190eXBlID09IFwiY29tbWVudFwiICYmIHBvc3QuX3JlZiA9PSBeLl9pZCAmJiBhcHByb3ZlZCA9PSB0cnVlXSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIG1haW5JbWFnZSxcclxuICAgICAgc2x1ZyxcclxuICAgICAgYm9keVxyXG4gICAgICB9YFxyXG5cclxuICBjb25zdCBwb3N0ID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5LCB7XHJcbiAgICBzbHVnOiBwYXJhbXM/LnNsdWcsXHJcbiAgfSlcclxuXHJcbiAgaWYgKCFwb3N0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjAsIC8vYWZ0ZXIgNjAgc2Vjb25kIGl0IHdpbGwgdXBkYXRlIHRoZSBjYWNoZWQgdmVyc2lvblxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3J0YWJsZVRleHQiLCJIZWFkZXIiLCJ1cmxGb3IiLCJQb3N0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwibWFpbkltYWdlIiwidXJsIiwiYWx0IiwiYXJ0aWNsZSIsImgxIiwidGl0bGUiLCJkaXYiLCJhdXRob3IiLCJpbWFnZSIsInAiLCJzcGFuIiwibmFtZSIsIkRhdGUiLCJfY3JlYXRlZEF0IiwidG9EYXRlU3RyaW5nIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiY29udGVudCIsImJvZHkiLCJzZXJpYWxpemVycyIsInByb3BzIiwiaDIiLCJsaSIsImNoaWxkcmVuIiwibGluayIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});