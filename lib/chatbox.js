/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["create-ui"] = factory();
	else
		root["create-ui"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/chatbox/src/main.vue":
/*!***************************************!*\
  !*** ./packages/chatbox/src/main.vue ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_2c4a1464_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=2c4a1464&scoped=true& */ \"./packages/chatbox/src/main.vue?vue&type=template&id=2c4a1464&scoped=true&\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ \"./packages/chatbox/src/main.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _main_vue_vue_type_style_index_0_id_2c4a1464_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.vue?vue&type=style&index=0&id=2c4a1464&lang=less&scoped=true& */ \"./packages/chatbox/src/main.vue?vue&type=style&index=0&id=2c4a1464&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ \"./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_2c4a1464_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _main_vue_vue_type_template_id_2c4a1464_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"2c4a1464\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/chatbox/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://create-ui/./packages/chatbox/src/main.vue?");

/***/ }),

/***/ "./packages/chatbox/src/main.vue?vue&type=template&id=2c4a1464&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./packages/chatbox/src/main.vue?vue&type=template&id=2c4a1464&scoped=true& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_2c4a1464_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_2c4a1464_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_2c4a1464_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=2c4a1464&scoped=true& */ \"./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=template&id=2c4a1464&scoped=true&\");\n\n\n//# sourceURL=webpack://create-ui/./packages/chatbox/src/main.vue?");

/***/ }),

/***/ "./packages/chatbox/src/main.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./packages/chatbox/src/main.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_0_rules_0_use_0_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!../../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_0_rules_0_use_0_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://create-ui/./packages/chatbox/src/main.vue?");

/***/ }),

/***/ "./packages/chatbox/src/main.vue?vue&type=style&index=0&id=2c4a1464&lang=less&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./packages/chatbox/src/main.vue?vue&type=style&index=0&id=2c4a1464&lang=less&scoped=true& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_32_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_32_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_32_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_clonedRuleSet_32_0_rules_0_use_3_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_2c4a1464_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[1]!../../../node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[2]!../../../node_modules/less-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[3]!../../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./main.vue?vue&type=style&index=0&id=2c4a1464&lang=less&scoped=true& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=style&index=0&id=2c4a1464&lang=less&scoped=true&\");\n\n\n//# sourceURL=webpack://create-ui/./packages/chatbox/src/main.vue?");

/***/ }),

/***/ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=template&id=2c4a1464&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=template&id=2c4a1464&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"ct-chatbox\",\n      class: _vm.sent ? \"ct-chatbox__left\" : \"ct-chatbox__right\",\n      style: { \"--bg-color\": _vm.bgColorCopy },\n    },\n    [\n      _c(\"div\", { staticClass: \"ct-chatbox__outer\" }, [\n        _vm.avatar\n          ? _c(\"div\", { staticClass: \"ct-chatbox__avatar\" }, [\n              _c(\"img\", { attrs: { src: _vm.avatar, alt: \"\" } }),\n            ])\n          : _vm._e(),\n        _c(\n          \"div\",\n          { staticClass: \"ct-chatbox__inner\" },\n          [\n            _vm.name\n              ? _c(\"div\", { staticClass: \"ct-chatbox__name\" }, [\n                  _vm._v(_vm._s(_vm.name)),\n                ])\n              : _vm._e(),\n            _vm._l(_vm.text, function (msg, index) {\n              return _c(\n                \"div\",\n                {\n                  key: index,\n                  staticClass: \"ct-chatbox__main\",\n                  class: index === 0 ? \"ct-chatbox__first\" : \"\",\n                },\n                [\n                  _c(\"div\", { staticClass: \"ct-chatbox__msg\" }, [\n                    _vm._v(_vm._s(msg)),\n                  ]),\n                  _vm.stamp && index + 1 === _vm.text.length\n                    ? _c(\"div\", { staticClass: \"ct-chatbox__stamp\" }, [\n                        _vm._v(\" \" + _vm._s(_vm.stamp) + \" \"),\n                      ])\n                    : _vm._e(),\n                ]\n              )\n            }),\n          ],\n          2\n        ),\n      ]),\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://create-ui/./packages/chatbox/src/main.vue?./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ normalizeComponent; }\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://create-ui/./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"CtChatbox\",\n  props: {\n    text: {\n      type: Array\n    },\n    sent: {\n      type: Boolean,\n      default: false\n    },\n    name: {\n      type: String,\n      default: undefined\n    },\n    avatar: {\n      type: String,\n      default: undefined\n    },\n    stamp: {\n      type: String,\n      default: undefined\n    },\n    bgColor: {\n      type: String,\n      default: undefined\n    }\n  },\n\n  data() {\n    return {\n      bgColorCopy: \"\"\n    };\n  },\n\n  mounted() {\n    this.bgColorCopy = this.bgColor;\n\n    if (!this.bgColorCopy) {\n      this.bgColorCopy = this.sent ? \"#a8ddfa\" : \"#dde3e7\";\n    }\n  }\n\n});\n\n//# sourceURL=webpack://create-ui/./packages/chatbox/src/main.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40%5B0%5D.rules%5B0%5D.use%5B0%5D!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./packages/chatbox/index.js":
/*!***********************************!*\
  !*** ./packages/chatbox/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main */ \"./packages/chatbox/src/main.vue\");\n\n\n_src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\n  Vue.component(_src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://create-ui/./packages/chatbox/index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=style&index=0&id=2c4a1464&lang=less&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/chatbox/src/main.vue?vue&type=style&index=0&id=2c4a1464&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://create-ui/./packages/chatbox/src/main.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-32%5B0%5D.rules%5B0%5D.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-32%5B0%5D.rules%5B0%5D.use%5B1%5D!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-32%5B0%5D.rules%5B0%5D.use%5B2%5D!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-32%5B0%5D.rules%5B0%5D.use%5B3%5D!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./packages/chatbox/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});