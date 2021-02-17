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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutUs\": () => (/* binding */ AboutUs)\n/* harmony export */ });\nclass AboutUs{\n  static about(){\n    document.write('About Us')\n  }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\nclass Contact {\n  static footer(){ \n    // create footer\n    const footer = document.createElement('footer');\n    footer.className = `footer`;\n  \n    // create contact h3\n    const ftContact = document.createElement('h3')\n    ftContact.className = `ft-contact text-center`;\n    const ftContactText = document.createTextNode(\"Contact Us\");\n    ftContact.appendChild(ftContactText);\n    footer.appendChild(ftContact);\n  \n    // create phone p\n    const ftPhone = document.createElement('p')\n    ftPhone.className = `ft-phone text-center`;\n    const ftPhoneText = document.createTextNode(\"+27 50 754 9281\");\n    ftPhone.appendChild(ftPhoneText);\n    footer.appendChild(ftPhone);\n  \n    // create address h4\n    const ftAddress = document.createElement('p')\n    ftAddress.className = `ft-contact text-center`;\n    const ftAddressText = document.createTextNode(\"73 Rosseten Road, JHB\");\n    ftAddress.appendChild(ftAddressText);\n    footer.appendChild(ftAddress);\n  \n    // create social-media icons\n    const ftSocial = document.createElement('div')\n    ftSocial.className = `ft-contact text-center`;\n    ftSocial.innerHTML = `\n      <a href=\"https://github.com/BigWizzo\" class=\"tag-blue\"><i class=\"fab fa-github-square font-25\"></i></a>\n      <a href=\"https://www.linkedin.com/in/willnyamunokora\" class=\"tag-blue\"><i class=\"fab fa-linkedin font-25\"></i></a>\n      <a href=\"https://twitter.com/willnyamunokora\" class=\"tag-blue\"><i class=\"fab fa-twitter font-25\"></i></a>   \n    `;\n    footer.appendChild(ftSocial);\n  \n    content.appendChild(footer);\n  }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ \"./src/landing.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n// import _ from 'lodash';\n// import img from './file.png';\n\n\n\n\n\n\n// Landing.tabs();\nclass tabs {\n  static checkTab(){}\n}\n\n_nav__WEBPACK_IMPORTED_MODULE_3__.Nav.createNav();\n_landing__WEBPACK_IMPORTED_MODULE_0__.Landing.header();\n_landing__WEBPACK_IMPORTED_MODULE_0__.Landing.main();\n_about__WEBPACK_IMPORTED_MODULE_2__.AboutUs.about();\n_contact__WEBPACK_IMPORTED_MODULE_1__.Contact.footer();\n\n\n// console.log(bro('dush'))\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Landing\": () => (/* binding */ Landing)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\nclass Landing {\n  static header(){\n    // Create header\n    const header = document.createElement('header');\n    header.className = `jumbotron m-0`;\n\n    // create H1\n    const jumboH1 = document.createElement('h1');\n    jumboH1.className = `display-4`;\n    const h1Text = document.createTextNode(\"My Restaurant\");\n    jumboH1.appendChild(h1Text);\n    header.appendChild(jumboH1);\n\n    // create jumboPara\n    const jumboPara = document.createElement('p')\n    jumboPara.className = `lead`;\n    const jumboParaText = document.createTextNode(\"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\");\n    jumboPara.appendChild(jumboParaText);\n    header.appendChild(jumboPara);\n\n    // create jumbo anchor\n    const jumboA = document.createElement('a')\n    jumboA.className = `btn btn-primary btn-lg`;\n    const jumboAText = document.createTextNode(\"Learn more\");\n    jumboA.appendChild(jumboAText);\n    header.appendChild(jumboA);\n\n    // append header to content\n    content.appendChild(header);\n  }\n\n  static main(){\n     // create main div\n    const main = document.createElement('main');\n    main.className = `menu-section container-fluid row m-0 p-0`;\n\n    // Keep cards as objects\n    const cards = {\n      card1: {\n  \t    image1: \"http://127.0.0.1:5500/src/images/img1.jpg\",\n        image2: \"http://127.0.0.1:5500/src/images/img2.jpg\",\n        h3: \"H31\",\n        p: \"This is an H3 1\",\n  \t  },\n      card2: {\n        image1: \"http://127.0.0.1:5500/src/images/img3.jpg\",\n        image2: \"http://127.0.0.1:5500/src/images/img4.jpg\",\n        h5: \"My H3 2\",\n        p: \"This is an H3 2\",\n      },\n      card3: {\n        image1: \"http://127.0.0.1:5500/src/images/img5.jpg\",\n        image2: \"http://127.0.0.1:5500/src/images/img6.jpg\",\n        h3: \"H31\",\n        p: \"This is an H3 1\",\n      },\n      card4: {\n        image1: \"http://127.0.0.1:5500/src/images/img7.jpg\",\n        image2: \"http://127.0.0.1:5500/src/images/img8.jpg\",\n        h3: \"H31\",\n        p: \"This is an H3 1\",\n      },\n      card5: {\n        image1: \"http://127.0.0.1:5500/src/images/img9.jpg\",\n        image2: \"http://127.0.0.1:5500/src/images/img10.jpg\",\n        h3: \"H31\",\n        p: \"This is an H3 1\",\n      },\n      card6: {\n        image1: \"http://127.0.0.1:5500/src/images/img11.jpg\",\n        image2: \"http://127.0.0.1:5500/src/images/img12.jpg\",\n        h3: \"H31\",\n        p: \"This is an H3 1\",\n      }\n    };\n    \n    // Loop through cards using Object.keys\n    Object.keys(cards).forEach(key => {\n\n      // create card div\n      const card = document.createElement(\"div\");\n      card.className = `menu-card col-4 p-0`;\n      card.innerHTML = `\n      <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src=\"${cards[key].image1}\" class=\"d-block w-100\" alt=\"...\">\n            <div class=\"carousel-caption\">\n              <h5>${cards[key].h5}</h5>\n              <p>${cards[key].p}</p>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"${cards[key].image2}\" class=\"d-block w-100\" alt=\"...\">\n            <div class=\"carousel-caption\">\n              <h5>${cards[key].h5}</h5>\n              <p>${cards[key].p}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      `;\n      main.appendChild(card);\n    });\n    content.appendChild(main);\n  }\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/landing.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": () => (/* binding */ Nav)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\nclass Nav {\n  static createNav(){\n    content.innerHTML = `\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\" role=\"presentation\">\n      <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">1 ...</div>\n    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">2 ...</div>\n    <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">3 ...</div>\n    `;\n  }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;