/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// class MathHandler {\n//     constructor(x, y){\n//         this.x = x;\n//         this.y = y;\n//     }\n//     add(){\n//         return this.x + this.y;\n//     }\n// }\n// var m = new MathHandler(1, 2);\n// console.log(m.add());\n// console.log(typeof MathHandler);    //function\n// console.log(MathHandler === MathHandler.prototype.constructor); //true\n// class Animal{\n//     constructor(name){\n//         this.name = name;\n//     }\n//     eat(){\n//         alert(this.name + ' eat');\n//     }\n// }\n// class Dog extends Animal {\n//     constructor(name){\n//         super(name);\n//         this.name = name;\n//     }\n//     say(){\n//         alert(this.name + ' say');\n//     }\n// }\n// const dog = new Dog('哈士奇');\n// dog.say();\n// dog.eat();\n// function loadImage(src, callback, fail){\n//     var img = document.createElement('img');\n//     img.onload = function(){\n//         callback(img);\n//     }\n//     img.onerror = function(){\n//         fail();\n//     }\n//     img.src = src;\n// }\n// var src = 'https://www.imooc.com/static/img/index/logo-recommended.png';\n// loadImage(src, function(img){\n//     console.log(img.width);\n// }, function(){\n//     console.log('error');\n// })\n// function loadImage(src){\n//     const promise = new Promise(function(resolve, reject){\n//         let img = document.createElement('img');\n//         img.onload = function(){\n//             resolve(img);\n//         }\n//         img.onerror = function(){\n//             reject();\n//         }\n//         img.src = src;\n//     })\n//     return promise;\n// }\n// var src = 'https://www.imooc.com/static/img/index/logo-recommended.png';\n// loadImage(src)\n//     .then(function(img){\n//         console.log(img.width);\n//     }, function(){\n//         console.log('failed');\n//     })\n// loadImage(src)\n//     .then(function(img){\n//         console.log(img.height);\n//     })\n// ES6常用功能\n// let i = 10;\n// i = 100;\n// const j = 20;\n// j = 200;\n// var name = 'zhangshan', age = 20, html = '';\n// html += '<div>';\n// html += '   <p>' + name + '</p>';\n// html += '   <p>' + age + '</p>';\n// html += '</div>';\n// const name = 'lisi', age = 22;\n// const html = `\n//         <div>\n//             <p>${name}</p>\n//             <p>${age}</p>\n//         </div>\n// `;\n// const obj = {\n//     a: 100,\n//     b: 200\n// }\n// const {a, b} = obj;\n// const arr = ['xxx', 'yyy', 'zzz'];\n// const [x, y, z] = arr;\n// var obj = {a: 100, b: 200};\n// for(var item in obj){\n//     console.log(item);\n// }\n// console.log(item);\n// var obj = {a: 100, b: 200};\n// for(let item in obj){\n//     console.log(item);\n// }\n// console.log(item);\n// 默认参数\n// function fn(a, b){\n//     if(b === null){\n//         b = 0;\n//     }\n// }\n// function fn(a, b=0){\n// }\n// 箭头函数\n// var arr = [1,2,3];\n// arr.map(function(item){\n//     return item + 1;\n// })\n// const arr = [1,2,3];\n// arr.map(item => item + 1);\n// arr.map((item, index) => {\n//     console.log(index);\n//     return item + 1;\n// })\nfunction fn() {\n  var _this = this;\n\n  console.log('real', this);\n  var arr = [1, 2, 3];\n  arr.map(function (item) {\n    console.log(_this); //window\n  });\n}\n\nfn.call({\n  a: 100\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });