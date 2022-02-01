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
exports.id = "pages/api/createComment";
exports.ids = ["pages/api/createComment"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./pages/api/createComment.ts":
/*!************************************!*\
  !*** ./pages/api/createComment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createComment)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"ttj6rssr\",\n    useCdn: \"development\" === 'production',\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function createComment(req, res) {\n    const { _id , name , email , comment  } = JSON.parse(req.body);\n    try {\n        await client.create({\n            _type: 'comment',\n            post: {\n                _type: 'reference',\n                _ref: _id\n            },\n            name,\n            email,\n            comment\n        });\n    } catch (err) {\n        console.log(err);\n        return res.status(500).json({\n            message: `Couldn't submit comment!`,\n            err\n        });\n    }\n    console.log('submitted');\n    return res.status(200).json({\n        message: `Comment submitted!`\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxFQUE2RTtBQUNwQztBQUd6QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2RDLE9BQU8sRUFBRUMsWUFBc0MsSUFBSSxDQUFZO0lBQy9ERyxTQUFTLEVBQUVILFVBQXlDO0lBQ3BESyxNQUFNLEVBUFIsQ0FBYSxpQkFPc0IsQ0FBWTtJQUM3Q0MsS0FBSyxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sZ0JBQWdCO0FBQ3JDLENBQUM7QUFDRCxLQUFLLENBQUNDLE1BQU0sR0FBR1gscURBQVksQ0FBQ0MsTUFBTTtBQUVuQixlQUFlVyxhQUFhLENBQ3pDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEIsQ0FBQztJQUNELEtBQUssQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxHQUFHLENBQUNRLElBQUk7SUFFekQsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNWLE1BQU0sQ0FBQ1csTUFBTSxDQUFDLENBQUM7WUFDbkJDLEtBQUssRUFBRSxDQUFTO1lBQ2hCQyxJQUFJLEVBQUUsQ0FBQztnQkFDTEQsS0FBSyxFQUFFLENBQVc7Z0JBQ2xCRSxJQUFJLEVBQUVWLEdBQUc7WUFDWCxDQUFDO1lBQ0RDLElBQUk7WUFDSkMsS0FBSztZQUNMQyxPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVRLEdBQUcsRUFBRSxDQUFDO1FBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1FBQ2YsTUFBTSxDQUFDWixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sR0FBRyx3QkFBd0I7WUFBR0wsR0FBRztRQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXO0lBQ3ZCLE1BQU0sQ0FBQ2QsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDQyxPQUFPLEdBQUcsa0JBQWtCO0lBQUUsQ0FBQztBQUMvRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NyZWF0ZUNvbW1lbnQudHM/YThlNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8ICdwcm9kdWN0aW9uJyxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTixcclxufVxyXG5jb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoY29uZmlnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29tbWVudChcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGNvbnN0IHsgX2lkLCBuYW1lLCBlbWFpbCwgY29tbWVudCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNsaWVudC5jcmVhdGUoe1xyXG4gICAgICBfdHlwZTogJ2NvbW1lbnQnLFxyXG4gICAgICBwb3N0OiB7XHJcbiAgICAgICAgX3R5cGU6ICdyZWZlcmVuY2UnLFxyXG4gICAgICAgIF9yZWY6IF9pZCxcclxuICAgICAgfSxcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIGNvbW1lbnQsXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogYENvdWxkbid0IHN1Ym1pdCBjb21tZW50IWAsIGVyciB9KVxyXG4gIH1cclxuICBjb25zb2xlLmxvZygnc3VibWl0dGVkJylcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBgQ29tbWVudCBzdWJtaXR0ZWQhYCB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJ1c2VDZG4iLCJ0b2tlbiIsIlNBTklUWV9BUElfVE9LRU4iLCJjbGllbnQiLCJjcmVhdGVDb21tZW50IiwicmVxIiwicmVzIiwiX2lkIiwibmFtZSIsImVtYWlsIiwiY29tbWVudCIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjcmVhdGUiLCJfdHlwZSIsInBvc3QiLCJfcmVmIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/createComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createComment.ts"));
module.exports = __webpack_exports__;

})();