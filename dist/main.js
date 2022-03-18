/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduls_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/modal */ \"./moduls/modal.js\");\n/* harmony import */ var _moduls_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/timer */ \"./moduls/timer.js\");\n/* harmony import */ var _moduls_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/scroll */ \"./moduls/scroll.js\");\n\r\n\r\n\r\n\r\n(0,_moduls_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n(0,_moduls_timer__WEBPACK_IMPORTED_MODULE_1__.timer)('27 march 2022');\r\n(0,_moduls_scroll__WEBPACK_IMPORTED_MODULE_2__.scrol)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./moduls/modal.js":
/*!*************************!*\
  !*** ./moduls/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n    const callBtn = document.querySelector('.button');\r\n    const headerModal = document.querySelector('.header-modal');\r\n    const overlay = document.querySelector('.overlay');\r\n    const close = headerModal.querySelector('.header-modal__close');\r\n\r\n     function changeDisplay(prop) {\r\n       headerModal.style.display = prop;\r\n       overlay.style.display = prop;\r\n    }\r\n  \r\n    callBtn.addEventListener('click', () => {\r\n        changeDisplay('block');\r\n    });\r\n\r\n   close.addEventListener('click', () => {\r\n        changeDisplay('none');  \r\n   });\r\n};\n\n//# sourceURL=webpack:///./moduls/modal.js?");

/***/ }),

/***/ "./moduls/scroll.js":
/*!**************************!*\
  !*** ./moduls/scroll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrol\": () => (/* binding */ scrol)\n/* harmony export */ });\nconst scrol = () => {\r\n    const arrowImg = document.querySelector('.smooth-scroll img');\r\n    arrowImg.hidden = true;\r\n\r\n    arrowImg.addEventListener('click', () => {\r\n        window.scrollTo(pageXOffset, 0);\r\n    });\r\n\r\n    window.addEventListener('scroll', function() {\r\n      arrowImg.hidden = (pageYOffset < document.documentElement.clientHeight);\r\n    });\r\n};\n\n//# sourceURL=webpack:///./moduls/scroll.js?");

/***/ }),

/***/ "./moduls/timer.js":
/*!*************************!*\
  !*** ./moduls/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (date) => {\r\n    const daysSpan = document.querySelectorAll('.count_1 span');\r\n    const hoursSpan = document.querySelectorAll('.count_2 span');\r\n    const minutesSpan = document.querySelectorAll('.count_3 span');\r\n    const secondsSpan = document.querySelectorAll('.count_4 span');\r\n\r\n    const getRemaining = () => {\r\n        let dateStop = new Date(date).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) %24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n         if (timeRemaining < 0) {\r\n            timeRemaining = 0;\r\n            days = 0;\r\n            hours = 0;\r\n            minutes = 0;\r\n            seconds = 0;\r\n        }\r\n        \r\n        return {timeRemaining, days, hours, minutes, seconds}\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getRemaining();\r\n        \r\n        daysSpan.forEach(daySpan => {\r\n            getTime.days < 10 ? daySpan.textContent = '0' + getTime.days : daySpan.textContent = getTime.days;\r\n        });\r\n        hoursSpan.forEach(hourSpan => {\r\n            getTime.hours < 10 ? hourSpan.textContent = '0' + getTime.hours : hourSpan.textContent = getTime.hours;\r\n        });\r\n        minutesSpan.forEach(minuteSpan => {\r\n            getTime.minutes < 10 ?  minuteSpan.textContent = '0' + getTime.minutes : minuteSpan.textContent = getTime.minutes;\r\n        });\r\n        secondsSpan.forEach(secondSpan => {\r\n            getTime.seconds < 10 ? secondSpan.textContent = '0' + getTime.seconds : secondSpan.textContent = getTime.seconds;\r\n        });\r\n    };\r\n\r\n    const interval = () => {\r\n        let intervalId;\r\n        let getTime = getRemaining();\r\n        updateClock();\r\n        if(getTime.timeRemaining > 0) {\r\n            intervalId = setInterval(updateClock, 1000);\r\n        } else {\r\n            clearInterval(intervalId);\r\n        }\r\n    };\r\n    interval();\r\n};\n\n//# sourceURL=webpack:///./moduls/timer.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;