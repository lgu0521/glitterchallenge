"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "organisms_ChallengeProgress_tsx";
exports.ids = ["organisms_ChallengeProgress_tsx"];
exports.modules = {

/***/ "./axios.setting.tsx":
/*!***************************!*\
  !*** ./axios.setting.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createClientHttpInstance)\n/* harmony export */ });\n/* harmony import */ var _hooks_useCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/useCookie */ \"./hooks/useCookie.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction createClientHttpInstance() {\n  const instance = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n    baseURL: \"http://localhost:3001\"\n  });\n  instance.defaults.headers.post['Content-Type'] = 'application/json';\n  instance.interceptors.response.use(function (response) {\n    return response;\n  }, async function (error) {\n    if (error.response && error.response.status === 401) {\n      const accessToken = (0,_hooks_useCookie__WEBPACK_IMPORTED_MODULE_0__.getCookie)(\"mohmind-accessToken\");\n\n      if (accessToken) {\n        instance.defaults.headers.common['authorization'] = accessToken;\n        return await instance.request(error.config);\n      } else {\n        window.location.href = \"/login\";\n        return Promise.reject(error);\n      }\n    }\n  });\n  return instance;\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9heGlvcy5zZXR0aW5nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0Usd0JBQVQsR0FBb0M7RUFDL0MsTUFBTUMsUUFBUSxHQUFHRixvREFBQSxDQUFhO0lBQzFCSSxPQUFPLEVBQUVDLHVCQUErQkU7RUFEZCxDQUFiLENBQWpCO0VBSUFMLFFBQVEsQ0FBQ00sUUFBVCxDQUFrQkMsT0FBbEIsQ0FBMEJDLElBQTFCLENBQStCLGNBQS9CLElBQWlELGtCQUFqRDtFQUVBUixRQUFRLENBQUNTLFlBQVQsQ0FBc0JDLFFBQXRCLENBQStCQyxHQUEvQixDQUNJLFVBQVVELFFBQVYsRUFBb0I7SUFDaEIsT0FBT0EsUUFBUDtFQUNILENBSEwsRUFJSSxnQkFBZ0JFLEtBQWhCLEVBQXVCO0lBQ25CLElBQUlBLEtBQUssQ0FBQ0YsUUFBTixJQUFrQkUsS0FBSyxDQUFDRixRQUFOLENBQWVHLE1BQWYsS0FBMEIsR0FBaEQsRUFBcUQ7TUFDakQsTUFBTUMsV0FBVyxHQUFHakIsMkRBQVMsQ0FBQyxxQkFBRCxDQUE3Qjs7TUFDQSxJQUFJaUIsV0FBSixFQUFpQjtRQUNiZCxRQUFRLENBQUNNLFFBQVQsQ0FBa0JDLE9BQWxCLENBQTBCUSxNQUExQixDQUFpQyxlQUFqQyxJQUFvREQsV0FBcEQ7UUFDQSxPQUFPLE1BQU1kLFFBQVEsQ0FBQ2dCLE9BQVQsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBdkIsQ0FBYjtNQUNILENBSEQsTUFHTztRQUNIQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLFFBQXZCO1FBQ0EsT0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVWLEtBQWYsQ0FBUDtNQUNIO0lBQ0o7RUFDSixDQWZMO0VBaUJBLE9BQU9aLFFBQVA7QUFDSCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9obWluZF9hZG1pbi8uL2F4aW9zLnNldHRpbmcudHN4P2IxNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi9ob29rcy91c2VDb29raWUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2xpZW50SHR0cEluc3RhbmNlKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gZ2V0Q29va2llKFwibW9obWluZC1hY2Nlc3NUb2tlblwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ2F1dGhvcml6YXRpb24nXSA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgaW5zdGFuY2UucmVxdWVzdChlcnJvci5jb25maWcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIClcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59Il0sIm5hbWVzIjpbImdldENvb2tpZSIsImF4aW9zIiwiY3JlYXRlQ2xpZW50SHR0cEluc3RhbmNlIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsImFjY2Vzc1Rva2VuIiwiY29tbW9uIiwicmVxdWVzdCIsImNvbmZpZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./axios.setting.tsx\n");

/***/ }),

/***/ "./hooks/useCookie.ts":
/*!****************************!*\
  !*** ./hooks/useCookie.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cookie = new react_cookie__WEBPACK_IMPORTED_MODULE_0__.Cookies();\nconst setCookie = (name, value, options) => {\n  return cookie.set(name, value, options);\n};\nconst getCookie = name => {\n  return cookie.get(name);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDb29raWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELGlEQUFKLEVBQWY7QUFlTyxNQUFNRSxTQUFTLEdBQUcsQ0FBQ0MsSUFBRCxFQUFlQyxLQUFmLEVBQThCQyxPQUE5QixLQUE2RDtFQUNsRixPQUFPSixNQUFNLENBQUNLLEdBQVAsQ0FBV0gsSUFBWCxFQUFpQkMsS0FBakIsRUFBd0JDLE9BQXhCLENBQVA7QUFDSCxDQUZNO0FBSUEsTUFBTUUsU0FBUyxHQUFJSixJQUFELElBQWtCO0VBQ3ZDLE9BQU9GLE1BQU0sQ0FBQ08sR0FBUCxDQUFXTCxJQUFYLENBQVA7QUFDSCxDQUZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9obWluZF9hZG1pbi8uL2hvb2tzL3VzZUNvb2tpZS50cz84OWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcbmNvbnN0IGNvb2tpZSA9IG5ldyBDb29raWVzKCk7XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgQ29va2llID0gYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb2tpZVNldE9wdGlvbnMge1xuICAgIHBhdGg/OiBzdHJpbmc7XG4gICAgZXhwaXJlcz86IERhdGU7XG4gICAgbWF4QWdlPzogbnVtYmVyO1xuICAgIGRvbWFpbj86IHN0cmluZztcbiAgICBzZWN1cmU/OiBib29sZWFuO1xuICAgIGh0dHBPbmx5PzogYm9vbGVhbjtcbiAgICBzYW1lU2l0ZT86IGJvb2xlYW4gfCAnbm9uZScgfCAnbGF4JyB8ICdzdHJpY3QnO1xuICAgIGVuY29kZT86ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogQ29va2llLCBvcHRpb25zPzogQ29va2llU2V0T3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBjb29raWUuc2V0KG5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gY29va2llLmdldChuYW1lKTtcbn0iXSwibmFtZXMiOlsiQ29va2llcyIsImNvb2tpZSIsInNldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZXQiLCJnZXRDb29raWUiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useCookie.ts\n");

/***/ }),

/***/ "./molecules/ProgressBar.tsx":
/*!***********************************!*\
  !*** ./molecules/ProgressBar.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/gaeun/Documents/GitHub/mohmind_admin/molecules/ProgressBar.tsx\";\n\n\nconst ProgressBar = ({\n  percent,\n  color,\n  backgroundColor\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      width: \"100%\",\n      height: \"1.5rem\",\n      borderRadius: \"1rem\",\n      background: backgroundColor\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        width: `${percent}%`,\n        height: \"1.5rem\",\n        borderRadius: \"1rem\",\n        background: color\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2xlY3VsZXMvUHJvZ3Jlc3NCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0VBQ2pCQyxPQURpQjtFQUVqQkMsS0FGaUI7RUFHakJDO0FBSGlCLENBQUQsS0FJUDtFQUVULG9CQUNJO0lBQUssS0FBSyxFQUFFO01BQ1JDLEtBQUssRUFBRSxNQURDO01BRVJDLE1BQU0sRUFBRSxRQUZBO01BR1JDLFlBQVksRUFBRSxNQUhOO01BSVJDLFVBQVUsRUFBRUo7SUFKSixDQUFaO0lBQUEsdUJBTUk7TUFBSyxLQUFLLEVBQUU7UUFDUkMsS0FBSyxFQUFHLEdBQUVILE9BQVEsR0FEVjtRQUVSSSxNQUFNLEVBQUUsUUFGQTtRQUdSQyxZQUFZLEVBQUUsTUFITjtRQUlSQyxVQUFVLEVBQUVMO01BSko7SUFBWjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBTko7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURKO0FBZUgsQ0FyQkQ7O0FBdUJBLGlFQUFlRixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9obWluZF9hZG1pbi8uL21vbGVjdWxlcy9Qcm9ncmVzc0Jhci50c3g/MDQ5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFByb3BzID0ge1xuICAgIHBlcmNlbnQ6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XG4gICAgcGVyY2VudCxcbiAgICBjb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3Jcbn06IFByb3BzKSA9PiB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEuNXJlbVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRDb2xvclxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7cGVyY2VudH0lYCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMS41cmVtXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvclxuICAgICAgICAgICAgfX0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicGVyY2VudCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./molecules/ProgressBar.tsx\n");

/***/ }),

/***/ "./organisms/ChallengeProgress.tsx":
/*!*****************************************!*\
  !*** ./organisms/ChallengeProgress.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _molecules_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../molecules/Box */ \"./molecules/Box.tsx\");\n/* harmony import */ var _molecules_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/ProgressBar */ \"./molecules/ProgressBar.tsx\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _axios_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axios.setting */ \"./axios.setting.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ChallengeProgressSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChallengeProgressSkeleton */ \"./organisms/ChallengeProgressSkeleton.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_setting__WEBPACK_IMPORTED_MODULE_4__]);\n_axios_setting__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _jsxFileName = \"/Users/gaeun/Documents/GitHub/mohmind_admin/organisms/ChallengeProgress.tsx\";\n\n\n\n\n\n\n\n\n\nconst ChallengeProgress = () => {\n  const clientHttp = (0,_axios_setting__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // 현재 진행률\n\n  const {\n    0: total,\n    1: setTotal\n  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n  const {\n    0: progress,\n    1: setProgress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n  const money = Number((30000 / 59).toFixed(2));\n  const {\n    isLoading,\n    data\n  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(['my', 'statistics'], async () => {\n    const res = await clientHttp.get(`/post/my/statistics`);\n    if (res.status !== 200) alert(res.data.message);\n    return res.data.body;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_StyledBox, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Head, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Title, {\n        children: [\"\\uC9C4\\uD589\\uB960\\uD83C\\uDFC3\\u200D\\u2640\\uFE0F\", isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ChallengeProgressSkeleton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          width: \"20%\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 37\n        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Span, {\n          children: [Math.floor((Number(data?.lemonOilImage) + Number(data?.proteinImage) + Number(data?.isExercise)) / 59 * 100), \"%\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 29\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Content, {\n        children: [isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ChallengeProgressSkeleton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 37\n        }, undefined) : (money * (Number(data?.lemonOilImage) + Number(data?.proteinImage) + Number(data?.isExercise))).toFixed(2), \"\\uC6D0\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Body, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_molecules_ProgressBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        percent: Math.floor((Number(data?.lemonOilImage) + Number(data?.proteinImage) + Number(data?.isExercise)) / 59 * 100),\n        color: \"#FFD262\",\n        backgroundColor: \"#E5E5E5\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst Title = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({\n  displayName: \"ChallengeProgress__Title\",\n  componentId: \"sc-kp59y0-0\"\n})([\"font-weight:700;font-size:1.5rem;line-height:150%;letter-spacing:-0.3px;color:#051B2C;\"]);\nconst Span = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({\n  displayName: \"ChallengeProgress__Span\",\n  componentId: \"sc-kp59y0-1\"\n})([\"font-weight:400;font-size:1.5rem;letter-spacing:-0.3px;color:#051B2C;\"]);\nconst Content = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({\n  displayName: \"ChallengeProgress__Content\",\n  componentId: \"sc-kp59y0-2\"\n})([\"font-weight:500;font-size:1.5rem;letter-spacing:-0.3px;color:#95A1AC;\"]);\nconst Head = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"ChallengeProgress__Head\",\n  componentId: \"sc-kp59y0-3\"\n})([\"display:flex;justify-content:space-between;align-items:center;\"]);\nconst Body = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"ChallengeProgress__Body\",\n  componentId: \"sc-kp59y0-4\"\n})([\"margin-top:0.5rem;\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChallengeProgress);\n\nvar _StyledBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_molecules_Box__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n  displayName: \"ChallengeProgress___StyledBox\",\n  componentId: \"sc-kp59y0-5\"\n})({\n  padding: \"1.5rem 1rem 1rem\",\n  width: \"100%\",\n  borderRadius: \"1rem\",\n  background: \"#FFFFFF\"\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRzdCLHNFQUFIO0VBQUE7RUFBQTtBQUFBLDhGQUFYO0FBUUEsTUFBTStCLElBQUksZ0JBQUcvQix3RUFBSDtFQUFBO0VBQUE7QUFBQSw2RUFBVjtBQU9BLE1BQU1pQyxPQUFPLGdCQUFHakMsc0VBQUg7RUFBQTtFQUFBO0FBQUEsNkVBQWI7QUFPQSxNQUFNa0MsSUFBSSxnQkFBR2xDLHVFQUFIO0VBQUE7RUFBQTtBQUFBLHNFQUFWO0FBS0EsTUFBTW9DLElBQUksZ0JBQUdwQyx1RUFBSDtFQUFBO0VBQUE7QUFBQSwwQkFBVjtBQUlBLGlFQUFlTyxpQkFBZjs7Ozs7R0E3RGtCO0VBQ044QixPQUFPLEVBQUUsa0JBREg7RUFFTkMsS0FBSyxFQUFFLE1BRkQ7RUFHTkMsWUFBWSxFQUFFLE1BSFI7RUFJTkMsVUFBVSxFQUFFO0FBSk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2htaW5kX2FkbWluLy4vb3JnYW5pc21zL0NoYWxsZW5nZVByb2dyZXNzLnRzeD82YTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCBCb3ggZnJvbSBcIi4uL21vbGVjdWxlcy9Cb3hcIlxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi9tb2xlY3VsZXMvUHJvZ3Jlc3NCYXJcIlxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIlxuaW1wb3J0IGNyZWF0ZUNsaWVudEh0dHBJbnN0YW5jZSBmcm9tIFwiLi4vYXhpb3Muc2V0dGluZ1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcIi4vQ2hhbGxlbmdlUHJvZ3Jlc3NTa2VsZXRvblwiXG5cbmNvbnN0IENoYWxsZW5nZVByb2dyZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudEh0dHAgPSBjcmVhdGVDbGllbnRIdHRwSW5zdGFuY2UoKTtcbiAgICAvLyDtmITsnqwg7KeE7ZaJ66WgXG4gICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IG1vbmV5ID0gTnVtYmVyKCgzMDAwMCAvIDU5KS50b0ZpeGVkKDIpKTtcblxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShbJ215JywgJ3N0YXRpc3RpY3MnXSwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXM9IGF3YWl0IGNsaWVudEh0dHAuZ2V0KGAvcG9zdC9teS9zdGF0aXN0aWNzYCk7XG4gICAgICAgIGlmKHJlcy5zdGF0dXMgIT09IDIwMCkgYWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmJvZHk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgICAgcGFkZGluZzogXCIxLjVyZW0gMXJlbSAxcmVtXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8VGl0bGU+7KeE7ZaJ66Wg8J+Pg+KAjeKZgO+4j1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgPyA8U2tlbGV0b24gd2lkdGg9XCIyMCVcIiAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+e01hdGguZmxvb3IoKChOdW1iZXIoZGF0YT8ubGVtb25PaWxJbWFnZSkgKyBOdW1iZXIoZGF0YT8ucHJvdGVpbkltYWdlKSArIE51bWJlcihkYXRhPy5pc0V4ZXJjaXNlKSkgLyA1OSkgKiAxMDApfSU8L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IDxTa2VsZXRvbiAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vbmV5ICogKE51bWJlcihkYXRhPy5sZW1vbk9pbEltYWdlKSArIE51bWJlcihkYXRhPy5wcm90ZWluSW1hZ2UpICsgTnVtYmVyKGRhdGE/LmlzRXhlcmNpc2UpKSkudG9GaXhlZCgyKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAg7JuQXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICAgICAgPFByb2dyZXNzQmFyIHBlcmNlbnQ9e01hdGguZmxvb3IoKChOdW1iZXIoZGF0YT8ubGVtb25PaWxJbWFnZSkgKyBOdW1iZXIoZGF0YT8ucHJvdGVpbkltYWdlKSArIE51bWJlcihkYXRhPy5pc0V4ZXJjaXNlKSkgLyA1OSkgKiAxMDApfSBjb2xvcj1cIiNGRkQyNjJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRTVFNUU1XCIgLz5cbiAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgY29sb3I6ICMwNTFCMkM7XG5gXG5cbmNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgY29sb3I6ICMwNTFCMkM7XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuaDNgXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICAgIGNvbG9yOiAjOTVBMUFDO1xuYFxuXG5jb25zdCBIZWFkID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBDaGFsbGVuZ2VQcm9ncmVzcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJCb3giLCJQcm9ncmVzc0JhciIsInVzZVF1ZXJ5IiwiY3JlYXRlQ2xpZW50SHR0cEluc3RhbmNlIiwidXNlU3RhdGUiLCJTa2VsZXRvbiIsIkNoYWxsZW5nZVByb2dyZXNzIiwiY2xpZW50SHR0cCIsInRvdGFsIiwic2V0VG90YWwiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwibW9uZXkiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiaXNMb2FkaW5nIiwiZGF0YSIsInJlcyIsImdldCIsInN0YXR1cyIsImFsZXJ0IiwibWVzc2FnZSIsImJvZHkiLCJNYXRoIiwiZmxvb3IiLCJsZW1vbk9pbEltYWdlIiwicHJvdGVpbkltYWdlIiwiaXNFeGVyY2lzZSIsIlRpdGxlIiwiaDMiLCJTcGFuIiwic3BhbiIsIkNvbnRlbnQiLCJIZWFkIiwiZGl2IiwiQm9keSIsInBhZGRpbmciLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./organisms/ChallengeProgress.tsx\n");

/***/ }),

/***/ "./organisms/ChallengeProgressSkeleton.tsx":
/*!*************************************************!*\
  !*** ./organisms/ChallengeProgressSkeleton.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/gaeun/Documents/GitHub/mohmind_admin/organisms/ChallengeProgressSkeleton.tsx\";\n\n\n\nconst shimmer = /*#__PURE__*/(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)([\"0%{background-position:-200px 0;}100%{background-position:200px 0;}\"]);\nconst SkeletonCardWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"ChallengeProgressSkeleton__SkeletonCardWrapper\",\n  componentId: \"sc-oxt5kl-0\"\n})([\"display:inline-block;width:\", \";height:\", \";background-color:#f0f0f0;border-radius:\", \";overflow:hidden;position:relative;\"], props => typeof props.width === \"number\" ? props.width + \"rem\" : props.width, props => typeof props.height === \"number\" ? props.height + \"rem\" : props.height, props => props.borderRadius ? props.borderRadius + \"rem\" : \"2rem\");\nconst SkeletonShimmer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"ChallengeProgressSkeleton__SkeletonShimmer\",\n  componentId: \"sc-oxt5kl-1\"\n})([\"position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to right,#f0f0f0 8%,#e0e0e0 18%,#f0f0f0 33%);background-size:800px 104px;animation:\", \" 1s infinite linear;\"], shimmer);\n\nconst Skeleton = ({\n  width = \"100%\",\n  height = 1,\n  borderRadius\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SkeletonCardWrapper, {\n    width: width,\n    height: height,\n    borderRadius: borderRadius,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SkeletonShimmer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vcmdhbmlzbXMvQ2hhbGxlbmdlUHJvZ3Jlc3NTa2VsZXRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUdBLE1BQU1HLE9BQU8sZ0JBQUdELDREQUFILHlFQUFiO0FBU0EsTUFBTUUsbUJBQW1CLGdCQUFHSCx1RUFBSDtFQUFBO0VBQUE7QUFBQSxtSUFFZEssS0FBSyxJQUFJLE9BQU9BLEtBQUssQ0FBQ0MsS0FBYixLQUF1QixRQUF2QixHQUFrQ0QsS0FBSyxDQUFDQyxLQUFOLEdBQWMsS0FBaEQsR0FBd0RELEtBQUssQ0FBQ0MsS0FGekQsRUFHYkQsS0FBSyxJQUFJLE9BQU9BLEtBQUssQ0FBQ0UsTUFBYixLQUF3QixRQUF4QixHQUFtQ0YsS0FBSyxDQUFDRSxNQUFOLEdBQWUsS0FBbEQsR0FBMERGLEtBQUssQ0FBQ0UsTUFINUQsRUFLTkYsS0FBSyxJQUFJQSxLQUFLLENBQUNHLFlBQU4sR0FBcUJILEtBQUssQ0FBQ0csWUFBTixHQUFxQixLQUExQyxHQUFrRCxNQUxyRCxDQUF6QjtBQVVBLE1BQU1DLGVBQWUsZ0JBQUdULHVFQUFIO0VBQUE7RUFBQTtBQUFBLHFNQVFORSxPQVJNLENBQXJCOztBQWlCQSxNQUFNUSxRQUFRLEdBQUcsQ0FBQztFQUNoQkosS0FBSyxHQUFHLE1BRFE7RUFFaEJDLE1BQU0sR0FBRyxDQUZPO0VBR2hCQztBQUhnQixDQUFELEtBSUo7RUFDWCxvQkFDRSw4REFBQyxtQkFBRDtJQUFxQixLQUFLLEVBQUVGLEtBQTVCO0lBQW1DLE1BQU0sRUFBRUMsTUFBM0M7SUFBbUQsWUFBWSxFQUFFQyxZQUFqRTtJQUFBLHVCQUNFLDhEQUFDLGVBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQU1ELENBWEQ7O0FBYUEsaUVBQWVFLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2htaW5kX2FkbWluLy4vb3JnYW5pc21zL0NoYWxsZW5nZVByb2dyZXNzU2tlbGV0b24udHN4Pzk3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSB9IGZyb20gJ29zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vbW9sZWN1bGVzL0JveCc7XG5cbmNvbnN0IHNoaW1tZXIgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDBweCAwO1xuICB9XG5gO1xuXG5jb25zdCBTa2VsZXRvbkNhcmRXcmFwcGVyID0gc3R5bGVkLmRpdjx7IHdpZHRoOiBudW1iZXIgfCBzdHJpbmcsIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nLCBib3JkZXJSYWRpdXM/OiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6ICR7cHJvcHMgPT4gdHlwZW9mIHByb3BzLndpZHRoID09PSBcIm51bWJlclwiID8gcHJvcHMud2lkdGggKyBcInJlbVwiIDogcHJvcHMud2lkdGh9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gdHlwZW9mIHByb3BzLmhlaWdodCA9PT0gXCJudW1iZXJcIiA/IHByb3BzLmhlaWdodCArIFwicmVtXCIgOiBwcm9wcy5oZWlnaHR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLmJvcmRlclJhZGl1cyA/IHByb3BzLmJvcmRlclJhZGl1cyArIFwicmVtXCIgOiBcIjJyZW1cIn07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFNrZWxldG9uU2hpbW1lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMGYwZjAgOCUsICNlMGUwZTAgMTglLCAjZjBmMGYwIDMzJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gIGFuaW1hdGlvbjogJHtzaGltbWVyfSAxcyBpbmZpbml0ZSBsaW5lYXI7XG5gO1xuXG50eXBlIFByb3BzID0ge1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZyxcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBib3JkZXJSYWRpdXM/OiBudW1iZXJcbn1cblxuY29uc3QgU2tlbGV0b24gPSAoe1xuICB3aWR0aCA9IFwiMTAwJVwiLFxuICBoZWlnaHQgPSAxLFxuICBib3JkZXJSYWRpdXNcbn06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNrZWxldG9uQ2FyZFdyYXBwZXIgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gYm9yZGVyUmFkaXVzPXtib3JkZXJSYWRpdXN9PlxuICAgICAgPFNrZWxldG9uU2hpbW1lciAvPlxuICAgIDwvU2tlbGV0b25DYXJkV3JhcHBlcj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJzaGltbWVyIiwiU2tlbGV0b25DYXJkV3JhcHBlciIsImRpdiIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJTa2VsZXRvblNoaW1tZXIiLCJTa2VsZXRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./organisms/ChallengeProgressSkeleton.tsx\n");

/***/ })

};
;