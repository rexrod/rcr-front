(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-demo-custom-pages-register-register-module"],{

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

/***/ "./src/app/demo/custom-pages/register/register-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/custom-pages/register/register-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/demo/custom-pages/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }
];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/custom-pages/register/register.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demo/custom-pages/register/register.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register\"\r\n     fxLayout=\"row\"\r\n     fxLayoutAlign=\"center center\">\r\n    <div class=\"session-card\">\r\n        <div class=\"header\"\r\n             fxLayout=\"column\"\r\n             fxLayoutAlign=\"center center\" \r\n             style=\"background-color: white\">\r\n            <img src=\"assets/rcr/logo_login.png\"/>\r\n        </div>\r\n        <div class=\"content\"\r\n             fxLayout=\"column\"\r\n             fxLayoutGap=\"24px\"\r\n             [formGroup]=\"form\">\r\n            <div fxFlex=\"grow\"\r\n                 fxLayout=\"column\"\r\n                 fxLayoutGap=\"8px\">\r\n                 <mat-form-field fxFlex=\"grow\">\r\n                    <mat-placeholder>Nome</mat-placeholder>\r\n                    <input matInput\r\n                           required\r\n                           formControlName=\"name\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"grow\">\r\n                    <mat-placeholder>Matricula</mat-placeholder>\r\n                    <input matInput\r\n                           required\r\n                           formControlName=\"registration\">\r\n                </mat-form-field>\r\n                 <mat-form-field fxFlex=\"grow\">\r\n                    <mat-placeholder>Email</mat-placeholder>\r\n                    <input matInput\r\n                           required\r\n                           formControlName=\"email\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"grow\">\r\n                    <mat-placeholder>Senha</mat-placeholder>\r\n                    <input matInput\r\n                           required\r\n                           [type]=\"inputType\"\r\n                           formControlName=\"password\">\r\n                    <!-- <button *ngIf=\"!visible\"\r\n                            type=\"button\"\r\n                            mat-icon-button\r\n                            matSuffix\r\n                            (click)=\"show()\">\r\n                        <mat-icon>visibility</mat-icon>\r\n                    </button>\r\n                    <button *ngIf=\"visible\"\r\n                            type=\"button\"\r\n                            mat-icon-button\r\n                            matSuffix\r\n                            (click)=\"hide()\">\r\n                        <mat-icon>visibility_off</mat-icon>\r\n                    </button> -->\r\n                    <!-- <mat-hint>Try clicking the eye to toggle the visibility.</mat-hint> -->\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"grow\">\r\n                    <mat-placeholder>Confirmar senha</mat-placeholder>\r\n                    <input matInput\r\n                           required\r\n                           [type]=\"inputType\"\r\n                           formControlName=\"passwordConfirm\">\r\n                    <!-- <button *ngIf=\"!visible\"\r\n                            type=\"button\"\r\n                            mat-icon-button\r\n                            matSuffix\r\n                            (click)=\"show()\">\r\n                        <mat-icon>visibility</mat-icon>\r\n                    </button>\r\n                    <button *ngIf=\"visible\"\r\n                            type=\"button\"\r\n                            mat-icon-button\r\n                            matSuffix\r\n                            (click)=\"hide()\">\r\n                        <mat-icon>visibility_off</mat-icon>\r\n                    </button> -->\r\n                    <!-- <mat-hint>Type in your password again.</mat-hint> -->\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <!-- <div class=\"extra-options\"\r\n                 fxLayout=\"row\"\r\n                 fxLayoutAlign=\"center center\">\r\n                <mat-checkbox class=\"remember-me\">I accept the <a href=\"#\">terms and conditions.</a></mat-checkbox>\r\n            </div> -->\r\n\r\n            <button type=\"button\"\r\n                    color=\"primary\"\r\n                    mat-raised-button\r\n                    [disabled]=\"form.invalid\"\r\n                    (click)=\"sendCustom()\">\r\n                Registrar\r\n            </button>\r\n\r\n            <!-- <p class=\"extra\">\r\n                Already have an account?<br/>\r\n                <a [routerLink]=\"['/login']\">Sign in here</a>\r\n            </p> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/demo/custom-pages/register/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demo/custom-pages/register/register.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register {\n  display: block;\n  background: #fff url(\"/assets/rcr/mapa2@2x.png\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvZGVtby9jdXN0b20tcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsK0VBQThFO0VBQzlFLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvZGVtby9jdXN0b20tcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKCcvYXNzZXRzL3Jjci9tYXBhMkAyeC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/custom-pages/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/custom-pages/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var app_module_users_api_userController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/module/users/api/userController.service */ "./src/app/module/users/api/userController.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, fb, cd, users, snackBar) {
        this.router = router;
        this.fb = fb;
        this.cd = cd;
        this.users = users;
        this.snackBar = snackBar;
        this.inputType = 'password';
        this.visible = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            registration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    RegisterComponent.prototype.send = function () {
        // this.router.navigate(['/']);
    };
    RegisterComponent.prototype.sendCustom = function () {
        var _this = this;
        this.visible = true;
        this.create(this.form.get('email').value, this.form.get('password').value, this.form.get('name').value, this.form.get('registration').value).then(function (success) {
            _this.router.navigate(['/dashboard-lives']);
            console.log(success);
            _this.router.navigate(['/']);
        }, function (error) {
            console.log(error);
            _this.visible = false;
            _this.snackBar.open('Usuário Inválido!', 'OK', {
                duration: 30000,
                panelClass: ['blue-snackbar']
            });
        });
        this.visible = false;
    };
    RegisterComponent.prototype.create = function (email, senha, name, registration) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Async Work Complete');
                //resolve();
            }, 1000);
            _this.users.createNewUser(email, senha, name, registration).subscribe(function (res) {
                resolve(res);
                //localStorage.setItem('token', res.access_token);
                //this.sessionStore.dispatchCreateAction(res);
            }, function (err) { return reject(err); });
        });
    };
    RegisterComponent.prototype.showPassword = function () {
        this.inputType = 'text';
        this.visible = true;
        this.cd.markForCheck();
    };
    RegisterComponent.prototype.hidePassword = function () {
        this.inputType = 'password';
        this.visible = false;
        this.cd.markForCheck();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/demo/custom-pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/demo/custom-pages/register/register.component.scss")],
            host: {
                '[@fadeOutAnimation]': 'true'
            },
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeOutAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            app_module_users_api_userController_service__WEBPACK_IMPORTED_MODULE_4__["UserControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/demo/custom-pages/register/register.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/custom-pages/register/register.module.ts ***!
  \***************************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/demo/custom-pages/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/demo/custom-pages/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-demo-custom-pages-register-register-module.js.map