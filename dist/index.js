/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://script/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_img_directRoom_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/directRoom.jpg */ \"./src/assets/img/directRoom.jpg\");\n/* harmony import */ var _assets_img_directRoom2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/directRoom2.jpg */ \"./src/assets/img/directRoom2.jpg\");\n/* harmony import */ var _assets_img_directRoom3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/directRoom3.jpg */ \"./src/assets/img/directRoom3.jpg\");\n/* harmony import */ var _assets_img_directRoom4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/directRoom4.jpg */ \"./src/assets/img/directRoom4.jpg\");\n/* harmony import */ var _assets_img_directRoom5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/directRoom5.jpg */ \"./src/assets/img/directRoom5.jpg\");\n/* harmony import */ var _assets_img_basket_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/basket.svg */ \"./src/assets/img/basket.svg\");\n/* harmony import */ var _assets_img_arrowUp_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/arrowUp.svg */ \"./src/assets/img/arrowUp.svg\");\n/* harmony import */ var _assets_img_questionIcon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/questionIcon.svg */ \"./src/assets/img/questionIcon.svg\");\n/* harmony import */ var _assets_img_buttonArrow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/buttonArrow.svg */ \"./src/assets/img/buttonArrow.svg\");\n/* harmony import */ var _assets_img_modalIconRussia_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/img/modalIconRussia.svg */ \"./src/assets/img/modalIconRussia.svg\");\n\r\nconst modal = __webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\")\r\nconst logics = __webpack_require__(/*! ./js/logics */ \"./src/js/logics.js\")\r\nconst modalInfo = __webpack_require__(/*! ./js/modalInfo */ \"./src/js/modalInfo.js\")\r\nconst slider = __webpack_require__(/*! ./js/slider */ \"./src/js/slider.js\")\r\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://script/./src/index.js?");

/***/ }),

/***/ "./src/js/logics.js":
/*!**************************!*\
  !*** ./src/js/logics.js ***!
  \**************************/
/***/ (() => {

eval("let presentDirect = document.querySelector('.present__directroom')\r\nlet furnitureList = document.querySelector('.aside__price__list')\r\nlet swiperSlide = document.querySelectorAll('.swiper-slide')\r\n\r\nlet flag = true\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  fetch('https://6529c43d55b137ddc83f22c7.mockapi.io/api/v1/furniture')\r\n  .then(response => response.json())\r\n  .then(data => renderFurniture(data))\r\n  .catch((err) => {\r\n    alert(\"Ошибка загрузки данных\", err)\r\n  })\r\n  \r\n})\r\nfunction renderFurniture(items){\r\n  \r\n    items.forEach(item => {\r\n      presentDirect.innerHTML += `\r\n            <div id=\"itemInfo\" class=\"present__photo__item-${item.id}\">\r\n              <p class=\"present__photo__item__number \">${item.id}</p>\r\n              <div class=\"present__photo__item__info\">\r\n                <p>${item.title}</p>\r\n                <p>от ${item.price} руб</p>\r\n              </div>\r\n            </div>\r\n      `\r\n      swiperSlide[0].innerHTML += `\r\n      <div id=\"itemInfo\" class=\"present__photo__item-${item.id}\">\r\n              <p class=\"present__photo__item__number \">${item.id}</p>\r\n              <div class=\"present__photo__item__info\">\r\n                <p>${item.title}</p>\r\n                <p>от ${item.price} руб</p>\r\n              </div>\r\n            </div>\r\n      `\r\n      furnitureList.innerHTML += `\r\n      <li class=\"aside__price__item item__info\">\r\n      <div class=\"item__info-flex\">\r\n        <p class=\"item__info__index\">${item.id}</p>\r\n        <p class=\"item__info__text\">${item.title} </p>\r\n      </div>\r\n      <div class=\"item__info__current-block\">\r\n        <p class=\"item__info__current-price\">от <span id=\"item-price\">${item.price}</span> руб</p>\r\n        <div class=\"item__info__current-info\">\r\n          <input step=\"1\" max=\"10\" min=\"0\" class=\"item__info__current__input\" readonly type=\"number\" value=\"0\" />\r\n          <div class=\"item__info__current-buttons\">\r\n            <button class=\"item__info__current-up\"><img src=\"./assets/buttonArrow.svg\" alt=\"arrow up\"></button>\r\n            <button disabled class=\"item__info__current-down\"><img src=\"./assets/buttonArrow.svg\" alt=\"arrow down\"></button>\r\n          </div>\r\n        </div>\r\n      </div> \r\n    </li>\r\n      `\r\n    });\r\n\r\n    changeInputValue()\r\n    if(document.documentElement.clientWidth >= 400){\r\n      openModalOfDirectRoom()\r\n    }\r\n    \r\n}\r\n\r\nfunction changeInputValue(){\r\n  let buttonUp = document.querySelectorAll('.item__info__current-up')\r\n  let buttonDown = document.querySelectorAll('.item__info__current-down')\r\n  let currentInput = document.querySelectorAll('.item__info__current__input')\r\n\r\n  \r\n  buttonUp.forEach((btn, index) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      let numberInput = +(currentInput[index].value)\r\n      numberInput += 1\r\n      currentInput[index].value = numberInput\r\n      \r\n      if(currentInput[index].value == 1){\r\n        buttonDown[index].disabled = false\r\n      } \r\n\r\n      if(currentInput[index].value >= 10){\r\n        btn.disabled = true\r\n      } else{\r\n        btn.disabled=  false\r\n      }\r\n\r\n      countPrice(currentInput)\r\n    })\r\n  })\r\n  buttonDown.forEach((btn, index) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      let numberInput = +(currentInput[index].value)\r\n      numberInput -= 1\r\n      currentInput[index].value = numberInput\r\n\r\n\r\n      if(currentInput[index].value == 0){\r\n        btn.disabled = true\r\n      } else{\r\n        btn.disabled=  false\r\n      }\r\n\r\n      if(currentInput[index].value == 9){\r\n        buttonUp[index].disabled = false\r\n      }\r\n\r\n      countPrice(currentInput)\r\n    })\r\n  })\r\n}\r\n\r\nfunction countPrice(inputArray){\r\n  let finalyPriceBlock = document.querySelector('.aside__cost')\r\n  let finalyPriseInfoBlock = document.querySelector('.aside__finaly__price')\r\n  let finalyPrice =  document.querySelector('.aside__cost__info__final')\r\n  let itemInfoCurrentPrice = document.querySelectorAll('#item-price')\r\n  let finalyPriceNumber = 0;\r\nlet inputValueArr = []\r\n  inputArray.forEach(input => {\r\n    inputValueArr.push(input.value)\r\n  })\r\nif(inputValueArr.every(value => value == 0)){\r\n  finalyPriseInfoBlock.style.display = 'flex'\r\nfinalyPriceBlock.style.display = 'none'\r\n}else{\r\n  finalyPriseInfoBlock.style.display = 'none'\r\n  finalyPriceBlock.style.display = 'flex'\r\n}\r\n\r\n\r\nfor(let n = 0; n < inputValueArr.length; n++){\r\n  finalyPriceNumber += +inputValueArr[n] * +itemInfoCurrentPrice[n].textContent \r\n}\r\nlet array = [...finalyPriceNumber.toString()].map(Number);\r\nif(array.length === 5){\r\n  array.splice(2, 0, \" \")\r\n}else if(array.length === 6){\r\n  array.splice(3, 0, \" \")\r\n}else if(array.length === 7){\r\n  array.splice(4, 0, \" \")\r\n  array.splice(1, 0, \" \")\r\n\r\n}\r\nfinalyPriceNumber = array.join('')\r\nfinalyPrice.innerHTML = `${finalyPriceNumber} руб`\r\n}\r\n\r\nfunction openModalOfDirectRoom(){\r\n  let modalInfoItems = document.querySelectorAll('.present__photo__item__info')\r\n  let itemInfoIndex = document.querySelectorAll('.present__photo__item__number')\r\n  let presentPhoto = document.querySelector('.present__photo')\r\n  itemInfoIndex.forEach((item, index) => {\r\n    item.addEventListener('click', () => {\r\n      modalInfoItems.forEach(modal => {\r\n        if(modal.classList.contains('item__info-active')){\r\n          modal.classList.remove('item__info-active')\r\n        }\r\n\r\n        \r\n      })\r\n      modalInfoItems[index].classList.toggle('item__info-active')\r\n\r\n    })\r\n  })\r\nwindow.addEventListener(\"click\", (e) => {\r\n\r\nif(e.target.classList.contains('present__photo') || e.target.id == 'itemInfo'){\r\n  modalInfoItems.forEach(modal => {\r\n    if(modal.classList.contains('item__info-active')){\r\n      modal.classList.remove('item__info-active')\r\n    }\r\n    \r\n    \r\n  })\r\n}\r\n})\r\n}\r\n\n\n//# sourceURL=webpack://script/./src/js/logics.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

eval("let modal = document.querySelector('.modal')\r\nlet modalClose = document.querySelector('.modal__close')\r\nlet buttons = document.querySelectorAll('.aside__button')\r\nlet modalButton = document.querySelector('.modal__button')\r\n\r\n\r\nlet inputMask = document.querySelector('#phone')\r\nlet maskOptions = {\r\nmask: '(000) 000-00-00',\r\nlazy: true,\r\nplaceholderChar: '9' \r\n}\r\nlet mask = new IMask(inputMask, maskOptions)\r\n\r\nmodalClose.addEventListener('click', () => {\r\n  modal.style.opacity = 0\r\n  modal.style.visibility = 'hidden'\r\n})\r\n\r\nbuttons.forEach(btn => {\r\n  btn.addEventListener('click', () => {\r\n    modal.style.visibility = 'visible'\r\n    modal.style.opacity = 1\r\n  })\r\n})\r\ninputMask.addEventListener('input', () => {\r\nif(inputMask.value.length === 15){\r\n    modalButton.disabled = false\r\n    modalButton.style.cursor = 'pointer'\r\n  }else{\r\n    modalButton.disabled = true\r\n    modalButton.style.cursor = 'default'\r\n  }\r\n})\r\nmodalButton.addEventListener(\"click\", (e) => {\r\n  e.preventDefault()\r\n  location.reload()\r\n})\n\n//# sourceURL=webpack://script/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/modalInfo.js":
/*!*****************************!*\
  !*** ./src/js/modalInfo.js ***!
  \*****************************/
/***/ (() => {

eval("let itemNumber = document.querySelectorAll('.present__photo__item__number')\r\n\r\nitemNumber.forEach(item => {\r\n  item.addEventListener('click', (e) => {\r\n    console.log('sdsdd')\r\n  })\r\n})\n\n//# sourceURL=webpack://script/./src/js/modalInfo.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("let swiper = new Swiper(\".mySwiper\", {\r\n  spaceBetween: 30,\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  mousewhell: true\r\n})\n\n//# sourceURL=webpack://script/./src/js/slider.js?");

/***/ }),

/***/ "./src/assets/img/arrowUp.svg":
/*!************************************!*\
  !*** ./src/assets/img/arrowUp.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/arrowUp.svg\";\n\n//# sourceURL=webpack://script/./src/assets/img/arrowUp.svg?");

/***/ }),

/***/ "./src/assets/img/basket.svg":
/*!***********************************!*\
  !*** ./src/assets/img/basket.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/basket.svg\";\n\n//# sourceURL=webpack://script/./src/assets/img/basket.svg?");

/***/ }),

/***/ "./src/assets/img/buttonArrow.svg":
/*!****************************************!*\
  !*** ./src/assets/img/buttonArrow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/buttonArrow.svg\";\n\n//# sourceURL=webpack://script/./src/assets/img/buttonArrow.svg?");

/***/ }),

/***/ "./src/assets/img/directRoom.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/directRoom.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/directRoom.jpg\";\n\n//# sourceURL=webpack://script/./src/assets/img/directRoom.jpg?");

/***/ }),

/***/ "./src/assets/img/directRoom2.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/directRoom2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/directRoom2.jpg\";\n\n//# sourceURL=webpack://script/./src/assets/img/directRoom2.jpg?");

/***/ }),

/***/ "./src/assets/img/directRoom3.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/directRoom3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/directRoom3.jpg\";\n\n//# sourceURL=webpack://script/./src/assets/img/directRoom3.jpg?");

/***/ }),

/***/ "./src/assets/img/directRoom4.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/directRoom4.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/directRoom4.jpg\";\n\n//# sourceURL=webpack://script/./src/assets/img/directRoom4.jpg?");

/***/ }),

/***/ "./src/assets/img/directRoom5.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/directRoom5.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/directRoom5.jpg\";\n\n//# sourceURL=webpack://script/./src/assets/img/directRoom5.jpg?");

/***/ }),

/***/ "./src/assets/img/modalIconRussia.svg":
/*!********************************************!*\
  !*** ./src/assets/img/modalIconRussia.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/modalIconRussia.svg\";\n\n//# sourceURL=webpack://script/./src/assets/img/modalIconRussia.svg?");

/***/ }),

/***/ "./src/assets/img/questionIcon.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/questionIcon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/questionIcon.svg\";\n\n//# sourceURL=webpack://script/./src/assets/img/questionIcon.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;