webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__less_base_less__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__less_base_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__less_base_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeController_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeController_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__homeController_js__);
// import './scss/base.scss';





/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

angular.module('todoapp', []);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

class HomeController {
  constructor() {
    this.todos = [
      {item: 'learn guitar', completed: false},
      {item: 'buy groceries', completed: false},
      {item: 'wash car', completed: false},
    ];
  }

  addTodo(){
    this.todos.push({'item': this.newTodo, 'completed': false});
    this.newTodo = "";
    console.log(`I have to do this next: ${this.newTodo}`);

  }

  clearList(){
    this.todos = this.todos.filter(function(item){
      return !item.completed
    })
  }

}

angular.module('todoapp').controller('HomeController', HomeController);


/***/ })
],[2]);
//# sourceMappingURL=main.d484bde67c2886f619f8.js.map