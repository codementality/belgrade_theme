/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

/**
 * @file
 * Belgrade theme main JS file.
 *
 */
(function ($, Drupal) {
  'use strict'; // Initiate all Toasts on page.

  Drupal.behaviors.belgradeToast = {
    attach: function attach(context, settings) {
      $('.toast', context).once('initToast').each(function () {
        $(this).toast("show");
      });
    }
  }; // Accordion buttons containing Edit links.

  Drupal.behaviors.accordionButtonLinks = {
    attach: function attach(context, settings) {
      $('.fieldset-legend.accordion-button a', context).once().on('click', function (event) {
        window.location = $(this).attr('href');
        event.preventDefault();
      });
    }
  }; // Collapse and accordion if a field is required.

  Drupal.behaviors.focusRequired = {
    attach: function attach(context, settings) {
      var inputs = document.querySelectorAll('form .accordion input');
      [].forEach.call(inputs, function (input) {
        input.addEventListener('invalid', function (e) {
          var accordion = input.closest(".collapse");
          $(accordion).collapse('show');
        });
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scss/commerce/commerce_wishlist.scss":
/*!**************************************************!*\
  !*** ./src/scss/commerce/commerce_wishlist.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/commerce/product.images.scss":
/*!***********************************************!*\
  !*** ./src/scss/commerce/product.images.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/icons.scss":
/*!****************************************!*\
  !*** ./src/scss/components/icons.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/color.scss":
/*!*****************************!*\
  !*** ./src/scss/color.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/product-teaser/belgrade.scss":
/*!***********************************************!*\
  !*** ./src/scss/product-teaser/belgrade.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/product-teaser/zoom.scss":
/*!*******************************************!*\
  !*** ./src/scss/product-teaser/zoom.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/commerce/commerce-demo--frontpage.scss":
/*!*********************************************************!*\
  !*** ./src/scss/commerce/commerce-demo--frontpage.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/commerce/commerce_cart_block.scss":
/*!****************************************************!*\
  !*** ./src/scss/commerce/commerce_cart_block.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/commerce/commerce_checkout-progress.scss":
/*!***********************************************************!*\
  !*** ./src/scss/commerce/commerce_checkout-progress.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/main": 0,
/******/ 			"dist/commerce/commerce_checkout-progress": 0,
/******/ 			"dist/commerce/commerce_cart_block": 0,
/******/ 			"dist/commerce/commerce-demo--frontpage": 0,
/******/ 			"dist/product-teaser/zoom": 0,
/******/ 			"dist/product-teaser/belgrade": 0,
/******/ 			"dist/color": 0,
/******/ 			"dist/main": 0,
/******/ 			"dist/components/icons": 0,
/******/ 			"dist/commerce/product.images": 0,
/******/ 			"dist/commerce/commerce_wishlist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbelgrade"] = self["webpackChunkbelgrade"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/product-teaser/belgrade.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/product-teaser/zoom.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/commerce/commerce-demo--frontpage.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/commerce/commerce_cart_block.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/commerce/commerce_checkout-progress.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/commerce/commerce_wishlist.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/commerce/product.images.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/components/icons.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/commerce/commerce_checkout-progress","dist/commerce/commerce_cart_block","dist/commerce/commerce-demo--frontpage","dist/product-teaser/zoom","dist/product-teaser/belgrade","dist/color","dist/main","dist/components/icons","dist/commerce/product.images","dist/commerce/commerce_wishlist"], () => (__webpack_require__("./src/scss/color.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;