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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduls_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/modal */ \"./moduls/modal.js\");\n/* harmony import */ var _moduls_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/timer */ \"./moduls/timer.js\");\n/* harmony import */ var _moduls_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/scroll */ \"./moduls/scroll.js\");\n/* harmony import */ var _moduls_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/calc */ \"./moduls/calc.js\");\n/* harmony import */ var _moduls_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/validation */ \"./moduls/validation.js\");\n/* harmony import */ var _moduls_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/sendForm */ \"./moduls/sendForm.js\");\n/* harmony import */ var _moduls_sliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moduls/sliders */ \"./moduls/sliders.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_moduls_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n(0,_moduls_timer__WEBPACK_IMPORTED_MODULE_1__.timer)('27 march 2022');\r\n(0,_moduls_scroll__WEBPACK_IMPORTED_MODULE_2__.scrol)();\r\n(0,_moduls_calc__WEBPACK_IMPORTED_MODULE_3__.calc)();\r\n(0,_moduls_validation__WEBPACK_IMPORTED_MODULE_4__.validation)();\r\n(0,_moduls_sendForm__WEBPACK_IMPORTED_MODULE_5__.sendForm)({\r\n    classForm: '.form-horizontal',\r\n    addInfo: [{\r\n        type: 'input',\r\n        id: 'calc-total'\r\n    }]\r\n});\r\n(0,_moduls_sliders__WEBPACK_IMPORTED_MODULE_6__.sliders)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./moduls/calc.js":
/*!************************!*\
  !*** ./moduls/calc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcBlock = document.getElementById('calc');\r\n    const type = document.getElementById('calc-type');\r\n    const material = document.getElementById('calc-type-material');\r\n    const square = document.getElementById('calc-input');\r\n    const total = document.getElementById('calc-total');\r\n\r\n    function countTotal() {\r\n        if (type.options[0].selected !== true && material.options[0].selected !== true && square.value !== '') \r\n        {\r\n            total.value = (+square.value * type.options[type.selectedIndex].value * material.options[type.selectedIndex].value).toFixed(1);\r\n        } \r\n        else \r\n        {\r\n            total.value = '0';\r\n        }\r\n    }\r\n\r\n    if (calcBlock) {\r\n        calcBlock.addEventListener('change', (e) => {\r\n            if (e.target === type || e.target === material || e.target === square) \r\n            {\r\n                countTotal();\r\n            }\r\n        });\r\n    } \r\n};\n\n//# sourceURL=webpack:///./moduls/calc.js?");

/***/ }),

/***/ "./moduls/modal.js":
/*!*************************!*\
  !*** ./moduls/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n     const buttonCall = document.querySelector('.button');\r\n     const headerModal = document.querySelector('.header-modal');\r\n     const overlay = document.querySelector('.overlay');\r\n     const services = document.getElementById('services');\r\n     const serviceModal = document.querySelector('.services-modal');\r\n     const modalBlock = document.querySelector('.modals');\r\n     \r\n     function changeDisplay(prop, modal) {\r\n       modal.style.display = prop;\r\n       overlay.style.display = prop;\r\n    }\r\n\r\n    buttonCall.addEventListener('click', () => {\r\n        changeDisplay('block', headerModal); \r\n    });\r\n\r\n    services.addEventListener('click', (e) => {\r\n         if (e.target.closest('.service-button')) \r\n         {\r\n            changeDisplay('block', serviceModal); \r\n         }\r\n    });\r\n\r\n    modalBlock.addEventListener('click', (e) => {\r\n         if (e.target.classList.contains('overlay')) \r\n         {\r\n            changeDisplay('none', headerModal);\r\n            changeDisplay('none', serviceModal); \r\n         } \r\n         else if (e.target.classList.contains('header-modal__close')) \r\n         {\r\n            changeDisplay('none', headerModal);\r\n         } \r\n         else if (e.target.classList.contains('services-modal__close')) \r\n         {\r\n            changeDisplay('none', serviceModal);\r\n         }\r\n    });\r\n};\n\n//# sourceURL=webpack:///./moduls/modal.js?");

/***/ }),

/***/ "./moduls/scroll.js":
/*!**************************!*\
  !*** ./moduls/scroll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrol\": () => (/* binding */ scrol)\n/* harmony export */ });\nconst scrol = () => {\r\n    const arrowImg = document.querySelector('.smooth-scroll img');\r\n    arrowImg.hidden = true;\r\n\r\n    arrowImg.addEventListener('click', () => {\r\n        window.scrollTo(pageXOffset, 0);\r\n    });\r\n\r\n    window.addEventListener('scroll', function() {\r\n      arrowImg.hidden = (pageYOffset < document.documentElement.clientHeight);\r\n    });\r\n};\n\n//# sourceURL=webpack:///./moduls/scroll.js?");

/***/ }),

/***/ "./moduls/sendForm.js":
/*!****************************!*\
  !*** ./moduls/sendForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\nconst sendForm = ({classForm, addInfo = []}) => {\r\n    const forms = document.querySelectorAll(classForm);\r\n\r\n    forms.forEach(form => {\r\n        const inputs = Array.from(form.querySelectorAll('input'));\r\n        inputs.forEach(input => input.required = true);\r\n\r\n        const sendData = (data) => {\r\n            return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n                method: 'POST',\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\" \r\n                }}).then(res => res.json());\r\n        };\r\n\r\n        const submitForm = () => {\r\n            if (inputs.every(input => input.style.border !== '3px solid red')) \r\n            {\r\n                const formData = new FormData(form);\r\n                const formBody = {};\r\n\r\n                formData.forEach((val, key) => {\r\n                    formBody[key] = val; \r\n                });\r\n\r\n                addInfo.forEach(elem => {\r\n                const element = document.getElementById(elem.id);\r\n                if (element) \r\n                {\r\n                    if (elem.type === 'block') \r\n                    {\r\n                        formBody[elem.id] = element.textContent;\r\n                    } \r\n                    else if (elem.type === 'input')\r\n                    {\r\n                        formBody[elem.id] = element.value;  \r\n                    }\r\n                }\r\n            });\r\n            \r\n                sendData(formBody)\r\n                    .then(() => {\r\n                        inputs.forEach(input => {\r\n                            input.value = '';\r\n                        });\r\n                    })\r\n                    .catch(error => console.log(error));\r\n            } \r\n            else \r\n            {\r\n                return;\r\n            }\r\n        };\r\n\r\n        try \r\n        {\r\n            if (!form) \r\n            {\r\n                throw new Error('Не найдена форма');\r\n            }\r\n\r\n            form.addEventListener('submit', (e) => {\r\n                e.preventDefault();\r\n                \r\n                submitForm();\r\n            });\r\n        } \r\n        catch (error) \r\n        {\r\n            console.log(error.message);\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack:///./moduls/sendForm.js?");

/***/ }),

/***/ "./moduls/sliders.js":
/*!***************************!*\
  !*** ./moduls/sliders.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliders\": () => (/* binding */ sliders)\n/* harmony export */ });\nconst sliders = () => {\r\n    const services = document.getElementById('services');\r\n    const serviceBlocks = document.querySelectorAll('.service-block');\r\n    let width = document.documentElement.clientWidth;\r\n\r\n    function doSlide (countOfSlides) {\r\n        let currentSlide1 = countOfSlides - countOfSlides;\r\n        let currentSlide2 = countOfSlides - 1;\r\n\r\n        const activeSlides = (elements, index1, index2, strClass) => {\r\n            elements[index1].classList.remove(strClass);\r\n            elements[index2].classList.remove(strClass);\r\n        };\r\n\r\n        const noActiveSlides = (elements, index1, index2, strClass) => {\r\n            elements[index1].classList.add(strClass);\r\n            elements[index2].classList.add(strClass);\r\n        };\r\n\r\n        activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n\r\n        services.addEventListener('click', (e) => {\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n                    currentSlide1 += countOfSlides;\r\n                    currentSlide2 += countOfSlides;\r\n                if (currentSlide1 >= serviceBlocks.length ||currentSlide2 >= serviceBlocks.length ) {\r\n                    currentSlide1 = countOfSlides - countOfSlides;\r\n                    currentSlide2 = countOfSlides - 1;\r\n                }\r\n                activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n            } else if (e.target.closest('.services__arrow--left')) {\r\n                noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n                    currentSlide1 -= countOfSlides;\r\n                    currentSlide2 -= countOfSlides;\r\n                if (currentSlide1 < 0 ||currentSlide2 < 0 ) {\r\n                    currentSlide1 = serviceBlocks.length-countOfSlides;\r\n                    currentSlide2 = serviceBlocks.length-1;\r\n                }\r\n                activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n            }\r\n        });\r\n    }\r\n\r\n    width > 576 ? doSlide(2) : doSlide(1);\r\n};\n\n//# sourceURL=webpack:///./moduls/sliders.js?");

/***/ }),

/***/ "./moduls/timer.js":
/*!*************************!*\
  !*** ./moduls/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (date) => {\r\n    const daysSpan = document.querySelectorAll('.count_1 span');\r\n    const hoursSpan = document.querySelectorAll('.count_2 span');\r\n    const minutesSpan = document.querySelectorAll('.count_3 span');\r\n    const secondsSpan = document.querySelectorAll('.count_4 span');\r\n\r\n    const getRemaining = () => {\r\n        let dateStop = new Date(date).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) %24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n         if (timeRemaining < 0) \r\n         {\r\n            timeRemaining = 0;\r\n            days = 0;\r\n            hours = 0;\r\n            minutes = 0;\r\n            seconds = 0;\r\n         }\r\n        \r\n        return {timeRemaining, days, hours, minutes, seconds};\r\n    };\r\n\r\n    const addZero = (time, spans) => {\r\n        spans.forEach(span => {\r\n            time < 10 ? span.textContent = '0' + time : span.textContent = time;\r\n        });\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getRemaining();\r\n        \r\n        addZero(getTime.days, daysSpan);\r\n        addZero(getTime.hours, hoursSpan);\r\n        addZero(getTime.minutes, minutesSpan);\r\n        addZero(getTime.seconds, secondsSpan);\r\n    };\r\n\r\n    const interval = () => {\r\n        let intervalId;\r\n        let getTime = getRemaining();\r\n        \r\n        updateClock();\r\n\r\n        if(getTime.timeRemaining > 0) \r\n        {\r\n            intervalId = setInterval(updateClock, 1000);\r\n        } \r\n        else \r\n        {\r\n            clearInterval(intervalId);\r\n        }\r\n    };\r\n    interval();\r\n};\n\n//# sourceURL=webpack:///./moduls/timer.js?");

/***/ }),

/***/ "./moduls/validation.js":
/*!******************************!*\
  !*** ./moduls/validation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validation\": () => (/* binding */ validation)\n/* harmony export */ });\nconst validation = () => {\r\n    const names = document.querySelectorAll('input[name=\"fio\"]');\r\n    const tels = document.querySelectorAll('input[name=\"phone\"]');\r\n    const calcInput = document.getElementById('calc-input');\r\n    \r\n    names.forEach(name => {\r\n        name.addEventListener('input', (e) => {\r\n            let reg = /[^a-zа-я]/gi;\r\n            e.target.value =  e.target.value.replace(reg, '');\r\n        });\r\n    });\r\n\r\n    tels.forEach(tel => {\r\n        tel.addEventListener('input', (e) => {\r\n            let reg = /[^\\d\\+]/g;\r\n            e.target.value =  e.target.value.replace(reg, '');\r\n            if (e.target.value.length > 17) \r\n            {\r\n               tel.style.border = '3px solid red';\r\n            } \r\n            else \r\n            {\r\n                tel.style.border = '';\r\n            }\r\n        });\r\n    });\r\n\r\n    if (calcInput) {\r\n        calcInput.addEventListener('input', (e) => {\r\n            let reg = /[^\\d]/g;\r\n            e.target.value =  e.target.value.replace(reg, '');\r\n        });\r\n    }\r\n};\n\n//# sourceURL=webpack:///./moduls/validation.js?");

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