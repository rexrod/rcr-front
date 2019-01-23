(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-demo-custom-pages-forgot-password-forgot-password-module"],{

/***/ "./src/app/core/common/route.animation.ts":
/*!************************************************!*\
  !*** ./src/app/core/common/route.animation.ts ***!
  \************************************************/
/*! exports provided: routeAnimation, fadeOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimation", function() { return routeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutAnimation", function() { return fadeOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms 150ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }))
    ]),
]);
var fadeOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeOutAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        'min-width': '100%',
        'min-height': '100%',
        'max-width': '100%',
        display: 'flex',
        'flex-direction': 'column',
        flex: '1',
        height: '100%'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        'min-width': '100%',
        'min-height': '100%',
        'max-width': '100%',
        display: 'flex',
        'flex-direction': 'column',
        flex: '1',
        height: '100%'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }))
    ]),
]);


/***/ }),

/***/ "./src/app/demo/custom-pages/forgot-password/forgot-password-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/custom-pages/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ForgotPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function() { return ForgotPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/demo/custom-pages/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
    }
];
var ForgotPasswordRoutingModule = /** @class */ (function () {
    function ForgotPasswordRoutingModule() {
    }
    ForgotPasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ForgotPasswordRoutingModule);
    return ForgotPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/custom-pages/forgot-password/forgot-password.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/custom-pages/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forgot-password\"\r\n     fxLayout=\"row\"\r\n     fxLayoutAlign=\"center center\">\r\n    <div class=\"session-card\">\r\n        <div class=\"header\"\r\n             fxLayout=\"column\"\r\n             fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/img/icon.png\">\r\n        </div>\r\n        <div class=\"content\"\r\n             fxLayout=\"column\"\r\n             fxLayoutGap=\"24px\">\r\n            <mat-form-field fxFlex=\"grow\">\r\n                <mat-placeholder>E-Mail</mat-placeholder>\r\n                <input matInput\r\n                       required\r\n                       [formControl]=\"email\">\r\n                <mat-hint>Enter your mail to recover your password.</mat-hint>\r\n                <mat-error *ngIf=\"email.hasError('required')\">We can't recover your password, without your email.\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <button type=\"submit\"\r\n                    color=\"primary\"\r\n                    mat-raised-button\r\n                    [disabled]=\"email.invalid\"\r\n                    (click)=\"send()\">\r\n                RECOVER PASSWORD\r\n            </button>\r\n            <a class=\"link\"\r\n               [routerLink]=\"['/login']\">Back to login</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/demo/custom-pages/forgot-password/forgot-password.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/custom-pages/forgot-password/forgot-password.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgot-password {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvZGVtby9jdXN0b20tcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxvRkFBbUY7RUFDbkYsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2N1c3RvbS1wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzLzMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/demo/custom-pages/forgot-password/forgot-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/custom-pages/forgot-password/forgot-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router) {
        this.router = router;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    };
    ForgotPasswordComponent.prototype.send = function () {
        this.router.navigate(['/']);
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/demo/custom-pages/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/demo/custom-pages/forgot-password/forgot-password.component.scss")],
            host: {
                '[@fadeOutAnimation]': 'true'
            },
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeOutAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/demo/custom-pages/forgot-password/forgot-password.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/custom-pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/demo/custom-pages/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/demo/custom-pages/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordRoutingModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-demo-custom-pages-forgot-password-forgot-password-module.js.map