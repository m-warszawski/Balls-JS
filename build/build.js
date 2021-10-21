/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/deco.ts":
/*!*********************!*\
  !*** ./src/deco.ts ***!
  \*********************/
/*! namespace exports */
/*! export Deco [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Deco\": () => /* binding */ Deco\n/* harmony export */ });\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nfunction log(target) {\r\n    return target;\r\n}\r\nlet Deco = class Deco {\r\n    constructor() {\r\n        this.header = document.createElement(\"h1\");\r\n        this.header.id = \"header\";\r\n        this.header.innerHTML = \"GRA KULKI\";\r\n        this.prev = document.createElement(\"div\");\r\n        this.prev.id = \"prev\";\r\n    }\r\n    napis() {\r\n        return this.header;\r\n    }\r\n    poprz() {\r\n        return this.prev;\r\n    }\r\n};\r\nDeco = __decorate([\r\n    log\r\n], Deco);\r\n\r\n\n\n//# sourceURL=webpack://typescript_template/./src/deco.ts?");

/***/ }),

/***/ "./src/generator.ts":
/*!**************************!*\
  !*** ./src/generator.ts ***!
  \**************************/
/*! namespace exports */
/*! export Generator [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Generator\": () => /* binding */ Generator\n/* harmony export */ });\nclass Generator {\r\n    constructor() {\r\n        this.rozmiar = 9;\r\n        this.ile = 10;\r\n        this.lpnowe = 3;\r\n        this.iksy = [];\r\n        this.colors = [\"#d6080b\", \"#d9e004\", \"#0239e0\", \"#02d605\", \"#cc00c8\", \"#a0a0a0\", \"#02e0ca\"];\r\n        this.kuleczka = \"\";\r\n        this.punkty = [];\r\n        this.siatka = [];\r\n        this.droga = [];\r\n        this.nastepne = [];\r\n        this.pola = [];\r\n        this.plansza();\r\n        this.losowanie();\r\n    }\r\n    plansza() {\r\n        var that = this;\r\n        var main = document.createElement(\"div\");\r\n        main.id = \"main\";\r\n        var root = document.getElementById(\"root\");\r\n        for (let x = 0; x < this.rozmiar; x++) {\r\n            let wiersz = document.createElement('div');\r\n            wiersz.setAttribute('class', 'wiersz');\r\n            for (let y = 0; y < this.rozmiar; y++) {\r\n                let pole = document.createElement('div');\r\n                pole.classList.add('pole');\r\n                pole.id = x + '_' + y;\r\n                pole.addEventListener(\"click\", function klik() {\r\n                    that.wytyczne(this);\r\n                });\r\n                this.pola.push(pole.id);\r\n                wiersz.appendChild(pole);\r\n            }\r\n            main.appendChild(wiersz);\r\n        }\r\n        root.appendChild(main);\r\n    }\r\n    ;\r\n    losowanie() {\r\n        for (let k = 0; k < this.ile; k++) {\r\n            let x = Math.floor(Math.random() * this.rozmiar);\r\n            let y = Math.floor(Math.random() * this.rozmiar);\r\n            let wsp = x + '_' + y;\r\n            var czy = false;\r\n            for (let l = 0; l < this.iksy.length; l++) {\r\n                if (wsp == this.iksy[l]) {\r\n                    czy = true;\r\n                    k--;\r\n                }\r\n            }\r\n            if (czy == false) {\r\n                this.iksy.push(wsp);\r\n            }\r\n        }\r\n        for (let i = 0; i < this.iksy.length; i++) {\r\n            var l = Math.floor(Math.random() * this.colors.length);\r\n            var color = this.colors[l];\r\n            var kulka = document.createElement(\"div\");\r\n            kulka.classList.add(\"kulki\");\r\n            kulka.style.background = color;\r\n            document.getElementById(this.iksy[i]).append(kulka);\r\n            document.getElementById(this.iksy[i]).setAttribute(\"status\", \"Kula\");\r\n        }\r\n        this.nowe();\r\n    }\r\n    ;\r\n    wytyczne(ten) {\r\n        var status = ten.getAttribute(\"status\");\r\n        if (this.punkty.length <= 1) {\r\n            if (status == \"Kula\") {\r\n                if (ten.id == this.punkty[0]) {\r\n                    document.getElementById(this.punkty[0]).style.background = \"#222222\";\r\n                    this.punkty[0] = undefined;\r\n                    this.kuleczka = \"\";\r\n                }\r\n                else {\r\n                    if (this.punkty[0] == undefined) {\r\n                        this.punkty[0] = ten.id;\r\n                        this.kuleczka = ten.innerHTML;\r\n                        document.getElementById(ten.id).style.background = \"white\";\r\n                    }\r\n                    else {\r\n                        document.getElementById(this.punkty[0]).style.background = \"#222222\";\r\n                        this.punkty[0] = ten.id;\r\n                        this.kuleczka = ten.innerHTML;\r\n                        document.getElementById(ten.id).style.background = \"white\";\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        if (this.punkty.length == 1) {\r\n            if (status != \"Kula\") {\r\n                this.punkty.push(ten.id);\r\n            }\r\n        }\r\n        if (this.punkty.length == 2) {\r\n            this.trasa(this.punkty[0], this.punkty[1]);\r\n        }\r\n    }\r\n    ;\r\n    trasa(start, meta) {\r\n        var sx = parseInt(start.split(\"_\")[0]);\r\n        var sy = parseInt(start.split(\"_\")[1]);\r\n        var mx = parseInt(meta.split(\"_\")[0]);\r\n        var my = parseInt(meta.split(\"_\")[1]);\r\n        for (let l = 0; l < this.rozmiar; l++) {\r\n            this.siatka.push([]);\r\n            for (let j = 0; j < this.rozmiar; j++) {\r\n                this.siatka[l].push(\"0\");\r\n            }\r\n        }\r\n        this.siatka[mx][my] = \"META\";\r\n        for (let i = 0; i < this.iksy.length; i++) {\r\n            let str = this.iksy[i];\r\n            let x = parseInt(str.split(\"_\")[0]);\r\n            let y = parseInt(str.split(\"_\")[1]);\r\n            this.siatka[x][y] = 'Kula';\r\n        }\r\n        var droga = this.najkrocej([sx, sy]);\r\n        console.log(\"DROGA: \", droga);\r\n        if (droga == false) {\r\n            console.log(\"NIE ZNALEZIONO DROGI\");\r\n            document.getElementById(this.punkty[0]).style.background = '#222222';\r\n            this.punkty = [];\r\n            this.siatka = [];\r\n        }\r\n        else {\r\n            for (let i = 0; i < droga.length; i++) {\r\n                document.getElementById(droga[i]).style.background = 'white';\r\n                document.getElementById(this.punkty[1]).style.background = 'white';\r\n            }\r\n            document.getElementById(meta).innerHTML = this.kuleczka;\r\n            document.getElementById(meta).setAttribute(\"status\", \"Kula\");\r\n            document.getElementById(start).setAttribute(\"status\", \"pusty\");\r\n            document.getElementById(start).innerHTML = \" \";\r\n            let nr = this.iksy.indexOf(start);\r\n            this.iksy.splice(nr, 1);\r\n            this.iksy.push(meta);\r\n            var siatka = this.siatka;\r\n            setTimeout(function () {\r\n                for (let i = 0; i < siatka.length; i++) {\r\n                    for (let j = 0; j < siatka.length; j++) {\r\n                        let it = i + \"_\" + j;\r\n                        document.getElementById(it).style.background = \"#222222\";\r\n                    }\r\n                }\r\n            }, 500);\r\n            var sprawdz = this.sprawdz();\r\n            if (sprawdz == false) {\r\n                var that = this;\r\n                setTimeout(function () {\r\n                    that.dodoajnowe();\r\n                    that.nowe();\r\n                }, 1000);\r\n                this.punkty = [];\r\n                this.siatka = [];\r\n            }\r\n            else {\r\n                for (let i = 0; i < this.pola.length; i++) {\r\n                    document.getElementById(this.pola[i]).removeAttribute('click');\r\n                }\r\n            }\r\n        }\r\n    }\r\n    ;\r\n    najkrocej(wspolrzedne) {\r\n        var gora = wspolrzedne[0];\r\n        var lewa = wspolrzedne[1];\r\n        var kolejka = [];\r\n        kolejka.push({ gora: gora, lewa: lewa, path: [], stat: 'Start' });\r\n        while (kolejka.length > 0) {\r\n            var aktualny = kolejka.shift();\r\n            var nowy = this.kierunki(aktualny, \"G\");\r\n            if (nowy.stat === 'Cel') {\r\n                return nowy.path;\r\n            }\r\n            else if (nowy.stat === 'OK') {\r\n                kolejka.push(nowy);\r\n            }\r\n            var nowy = this.kierunki(aktualny, \"P\");\r\n            if (nowy.stat === 'Cel') {\r\n                return nowy.path;\r\n            }\r\n            else if (nowy.stat === 'OK') {\r\n                kolejka.push(nowy);\r\n            }\r\n            var nowy = this.kierunki(aktualny, \"D\");\r\n            if (nowy.stat === 'Cel') {\r\n                return nowy.path;\r\n            }\r\n            else if (nowy.stat === 'OK') {\r\n                kolejka.push(nowy);\r\n            }\r\n            var nowy = this.kierunki(aktualny, \"L\");\r\n            if (nowy.stat === 'Cel') {\r\n                return nowy.path;\r\n            }\r\n            else if (nowy.stat === 'OK') {\r\n                kolejka.push(nowy);\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    ;\r\n    kierunki(aktualny, kierunek) {\r\n        var newPath = aktualny.path.slice();\r\n        newPath.push(aktualny.gora + '_' + aktualny.lewa);\r\n        var lt = aktualny.gora;\r\n        var ll = aktualny.lewa;\r\n        if (kierunek === \"G\") {\r\n            lt -= 1;\r\n        }\r\n        else if (kierunek === \"P\") {\r\n            ll += 1;\r\n        }\r\n        else if (kierunek === \"D\") {\r\n            lt += 1;\r\n        }\r\n        else if (kierunek === \"L\") {\r\n            ll -= 1;\r\n        }\r\n        var nowy = {\r\n            gora: lt,\r\n            lewa: ll,\r\n            path: newPath,\r\n            stat: 'Brak'\r\n        };\r\n        var wynik = this.status(nowy);\r\n        nowy.stat = wynik;\r\n        if (nowy.stat == 'OK') {\r\n            this.siatka[nowy.gora][nowy.lewa] = \"Spr\";\r\n        }\r\n        return nowy;\r\n    }\r\n    ;\r\n    status(lokalizacja) {\r\n        var siatkarozmiar = this.siatka.length;\r\n        var lt = lokalizacja.gora;\r\n        var ll = lokalizacja.lewa;\r\n        if (lokalizacja.lewa < 0 ||\r\n            lokalizacja.lewa >= siatkarozmiar ||\r\n            lokalizacja.gora < 0 ||\r\n            lokalizacja.gora >= siatkarozmiar) {\r\n            return 'Poza';\r\n        }\r\n        else if (this.siatka[lt][ll] == 'META') {\r\n            return 'Cel';\r\n        }\r\n        else if (this.siatka[lt][ll] == 'Kula') {\r\n            return 'Kula';\r\n        }\r\n        else if (this.siatka[lt][ll] == '0') {\r\n            return 'OK';\r\n        }\r\n    }\r\n    ;\r\n    nowe() {\r\n        this.nastepne = [];\r\n        for (let k = 0; k < this.lpnowe; k++) {\r\n            var l = Math.floor(Math.random() * this.colors.length);\r\n            var color = this.colors[l];\r\n            var kulka = document.createElement(\"div\");\r\n            kulka.classList.add(\"kulki\");\r\n            kulka.style.background = color;\r\n            this.nastepne.push(kulka);\r\n        }\r\n        for (let j = 0; j < this.nastepne.length; j++) {\r\n            document.getElementById(\"prev\").append(this.nastepne[j]);\r\n        }\r\n    }\r\n    ;\r\n    dodoajnowe() {\r\n        for (let k = 0; k < this.nastepne.length; k++) {\r\n            let x = Math.floor(Math.random() * this.rozmiar);\r\n            let y = Math.floor(Math.random() * this.rozmiar);\r\n            let wsp = x + '_' + y;\r\n            var czy = false;\r\n            for (let l = 0; l < this.iksy.length; l++) {\r\n                if (wsp == this.iksy[l]) {\r\n                    czy = true;\r\n                    k--;\r\n                }\r\n            }\r\n            if (czy == false) {\r\n                document.getElementById(wsp).append(this.nastepne[k]);\r\n                document.getElementById(wsp).setAttribute(\"status\", \"Kula\");\r\n                this.iksy.push(wsp);\r\n            }\r\n        }\r\n    }\r\n    ;\r\n    sprawdz() {\r\n        var dl = (this.rozmiar * this.rozmiar) - this.rozmiar;\r\n        if (this.iksy.length > dl) {\r\n            alert(\"===== PRZEGRAŁEŚ !!! =====\");\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n    ;\r\n}\r\n\n\n//# sourceURL=webpack://typescript_template/./src/generator.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generator */ \"./src/generator.ts\");\n/* harmony import */ var _deco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deco */ \"./src/deco.ts\");\n\r\n\r\nvar deco = new _deco__WEBPACK_IMPORTED_MODULE_0__.Deco();\r\nvar root = document.getElementById(\"root\");\r\nroot.appendChild(deco.napis());\r\nroot.appendChild(deco.poprz());\r\nvar generator = new _generator__WEBPACK_IMPORTED_MODULE_1__.Generator();\r\n\n\n//# sourceURL=webpack://typescript_template/./src/main.ts?");

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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;