(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-core-login-login-module"],{

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

/***/ "./src/app/core/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/core/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div id=\"login\">\r\n        <div id=\"card\">\r\n            <div id=\"logo\">\r\n                <div id=\"title\">\r\n                    <span class=\"text\">RCR</span> \r\n                </div>\r\n                <div id=\"subtitle\">\r\n                    <span class=\"text\">Sistema de Rastreamento de Cargas e Rotas</span>\r\n                </div>\r\n            </div>\r\n            <div id=\"conteiner\">\r\n\r\n                <div id=\"left\">\r\n                    <!-- left -->\r\n                    <!-- <div class=\"tag\">\r\n                        <div class=\"button\" [class.active]=\"inputType=='password'\" (click)=\"inputType='password'\">\r\n                            <div class=\"img\">\r\n                                <div class=\"icon\" [ngStyle]=\"{'background-image': 'url(/assets/login/password.png)'}\"></div>\r\n                                <div class=\"text\">\r\n                                    Senha\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tag\">\r\n                        <div class=\"button\" [class.active]=\"inputType=='biometry'\" (click)=\"inputType='biometry'\">\r\n                            <div class=\"img\">\r\n                                <div class=\"icon\" [ngStyle]=\"{'background-image': 'url(/assets/login/finger.png)'}\"></div>\r\n                                <div class=\"text\">\r\n                                    Biometria\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tag\">\r\n                        <div class=\"button\" [class.active]=\"inputType=='credential'\" (click)=\"inputType='credential'\">\r\n                            <div class=\"img\">\r\n                                <div class=\"icon\" [ngStyle]=\"{'background-image': 'url(/assets/login/credential.png)'}\"></div>\r\n                                <div class=\"text\">\r\n                                    Credencial\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"tag\"></div>\r\n                    <div class=\"tag\"></div>\r\n                    <div class=\"tag\"></div>\r\n                    <!-- <div class=\"tag\"></div> -->\r\n                </div>\r\n                <div id=\"center\">\r\n                    <!-- class=\"logo\" -->\r\n                    <!-- <img class=\"logo\" src=\"assets/rcr/logo_login.png\"> -->\r\n                    <div id=\"image\">\r\n                        <!-- <div class=\"circle\"> -->\r\n                        <!-- <div class=\"photo\"> -->\r\n                            <!-- </div> -->\r\n                        <div>    \r\n                            <img class=\"logo\" src=\"assets/rcr/logo_login.png\">\r\n                        </div>\r\n                    </div>\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"send()\">\r\n                        <!-- <div class=\"idCompany\">\r\n                            <mat-form-field id=\"idCompany\">\r\n                                <mat-select placeholder=\"Selecione a Empresa\" formControlName=\"idCompany\" required>\r\n                                    <mat-option *ngFor=\"let company of companies\" [value]=\"company.idCompany\">\r\n                                        {{company.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div> -->\r\n                        <div class=\"enroll\">\r\n                            <mat-form-field id=\"enroll\">\r\n                                <input matInput placeholder=\"Email\" formControlName=\"enroll\">\r\n                                <!--  [formGroup]=\"form\" [formControl]=\"user\" -->\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"password\">\r\n                            <mat-form-field id=\"password\">\r\n                                <input matInput placeholder=\"Senha\" type=\"password\" formControlName=\"password\">\r\n                                <!--  [formGroup]=\"form\" [formControl]=\"user\" -->\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <!-- <div id=\"problem\"> -->\r\n                            <!-- <span class=\"problem\" color=\"primary\">Problemas para Entrar?</span> -->\r\n                        <!-- </div> -->\r\n                        <div id=\"btn-login\" *ngIf=\"inputType=='password'\">\r\n                            <!-- <button mat-raised-button *ngIf=\"!visible\" [disabled]=\"!form.valid\" class=\"btn-rounded btn-login\"\r\n                                color=\"primary\">Login</button> -->\r\n                            <button mat-raised-button *ngIf=\"!visible\" class=\"btn-rounded btn-login\"\r\n                                color=\"primary\">Entrar</button>\r\n\r\n                            <mat-spinner *ngIf=\"visible\"></mat-spinner>\r\n                        </div>\r\n                        <div class=\"enroll\">\r\n                            <p class=\"extra\">\r\n                                <!-- Don't have an account?<br/> -->\r\n                                <a [routerLink]=\"['/register']\">Criar nova conta</a>\r\n                            </p>\r\n                        </div>\r\n                        <div id=\"btn-login\" *ngIf=\"inputType=='biometry'\">\r\n                            <div class=\"img\">\r\n                                <div class=\"icon\" [ngStyle]=\"{'background-image': 'url(/assets/login/finger5.png)'}\"></div>\r\n                                <div class=\"text\">\r\n                                    Biometria\r\n                                </div>\r\n                            </div>\r\n                            <mat-spinner *ngIf=\"visible\"></mat-spinner>\r\n                        </div>\r\n                        <div id=\"btn-login\" *ngIf=\"inputType=='credential'\">\r\n                            <div class=\"img\">\r\n                                <div class=\"icon\" [ngStyle]=\"{'background-image': 'url(/assets/login/credential5.png)'}\"></div>\r\n                                <div class=\"text\">\r\n                                    Credencial\r\n                                </div>\r\n                            </div>\r\n                            <mat-spinner *ngIf=\"visible\"></mat-spinner>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div id=\"right\">\r\n                    <!-- Right -->\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"dateFooter\" style=\"color: #3F4ADE\">\r\n        {{ dateFooter }}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n.background {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  max-width: 100%;\n  background-image: url(/assets/rcr/mapa2@2x.png);\n  background-size: cover; }\n\n.background #login {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 61.76%;\n    width: 64.41%; }\n\n.background #login #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap;\n      box-shadow: 0 60px 80px rgba(0, 0, 0, 0.3);\n      background-color: rgba(255, 255, 255, 0.95);\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px;\n      border-top-right-radius: 13px;\n      border-bottom-right-radius: 13px; }\n\n.background #login #card #logo {\n        background-image: url(/assets/rcr/img-bg@2x.png);\n        background-size: cover;\n        background-position: left;\n        background-color: #3F4ADE;\n        flex: 1 0 40.77%;\n        display: flex;\n        flex-direction: column;\n        border-top-left-radius: 13px;\n        border-bottom-left-radius: 13px;\n        box-shadow: 5px 10px 60px rgba(0, 0, 0, 0.2); }\n\n.background #login #card #logo #title {\n          flex: 1 1 50%;\n          align-content: flex-end;\n          justify-content: center;\n          align-items: flex-end;\n          display: flex;\n          min-height: 64px; }\n\n.background #login #card #logo #title .text {\n            font-size: 350%;\n            font-weight: 500;\n            color: rgba(255, 255, 255, 0.8); }\n\n.background #login #card #logo #subtitle {\n          flex: 1 1 50%;\n          align-content: flex-start;\n          justify-content: center;\n          align-items: flex-start;\n          text-align: center;\n          display: flex; }\n\n.background #login #card #logo #subtitle .text {\n            font-size: 90%;\n            font-weight: lighter;\n            color: rgba(255, 255, 255, 0.8); }\n\n.background #login #card #conteiner {\n        flex: 1 1 auto;\n        flex-direction: row;\n        box-sizing: border-box;\n        display: flex;\n        min-height: 292px; }\n\n.background #login #card #conteiner #left {\n          max-width: 25%;\n          flex: 1 1 auto;\n          display: flex;\n          flex-direction: column; }\n\n.background #login #card #conteiner #left .tag {\n            flex: 1 1 auto;\n            border: 2px unset solid;\n            width: 100%;\n            height: 100%;\n            margin-top: 10px; }\n\n.background #login #card #conteiner #left .tag .button {\n              width: 53%;\n              height: 100%;\n              border: 1px #95989A solid;\n              border-top-right-radius: 13px;\n              border-bottom-right-radius: 13px;\n              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n              -webkit-filter: opacity(50%);\n                      filter: opacity(50%); }\n\n.background #login #card #conteiner #left .tag .button .img {\n                height: 100%;\n                justify-content: center;\n                display: flex;\n                align-items: center;\n                flex-direction: column; }\n\n.background #login #card #conteiner #left .tag .button .img .icon {\n                  width: 58px;\n                  height: 58px;\n                  background-size: cover; }\n\n.background #login #card #conteiner #left .tag .button .img .text {\n                  color: #273B56;\n                  font-size: 12px; }\n\n.background #login #card #conteiner #left .tag .active {\n              width: 64%;\n              border: 1px #273B56 solid;\n              -webkit-filter: opacity(100%);\n                      filter: opacity(100%); }\n\n.background #login #card #conteiner #center {\n          max-width: 100%;\n          flex: 1 1 auto;\n          flex-direction: column;\n          display: flex; }\n\n.background #login #card #conteiner #center #image {\n            flex: 1 1 auto;\n            box-sizing: border-box;\n            max-height: 33.58%;\n            justify-content: center;\n            align-content: center;\n            align-items: center;\n            display: flex; }\n\n.background #login #card #conteiner #center #image .photo {\n              min-width: 235px;\n              min-height: 90px;\n              background-size: cover;\n              width: auto;\n              height: auto;\n              z-index: 5;\n              position: relative; }\n\n.background #login #card #conteiner #center form {\n            display: contents; }\n\n.background #login #card #conteiner #center form .idCompany {\n              flex: 1 1 100%;\n              box-sizing: border-box;\n              max-height: 10.35%;\n              justify-content: center;\n              align-content: center;\n              align-items: center;\n              display: flex; }\n\n.background #login #card #conteiner #center form .idCompany #idCompany {\n                flex: 1 1 auto; }\n\n.background #login #card #conteiner #center form .enroll {\n              flex: 1 1 100%;\n              box-sizing: border-box;\n              max-height: 10.35%;\n              justify-content: center;\n              align-content: center;\n              align-items: center;\n              display: flex; }\n\n.background #login #card #conteiner #center form .enroll #enroll {\n                flex: 1 1 auto; }\n\n.background #login #card #conteiner #center form .password {\n              flex: 1 1 auto;\n              box-sizing: border-box;\n              max-height: 10.35%;\n              justify-content: center;\n              align-content: center;\n              align-items: center;\n              display: flex; }\n\n.background #login #card #conteiner #center form .password #password {\n                flex: 1 1 auto; }\n\n.background #login #card #conteiner #center form #problem {\n              flex: 1 1 auto;\n              box-sizing: border-box;\n              max-height: 10.77%;\n              justify-content: flex-end;\n              align-content: center;\n              align-items: flex-end;\n              display: flex; }\n\n.background #login #card #conteiner #center form #problem .problem {\n                font-size: 66%;\n                opacity: 0.8; }\n\n.background #login #card #conteiner #center form #btn-login {\n              flex: 1 1 auto;\n              box-sizing: border-box;\n              max-height: 34.95%;\n              justify-content: center;\n              align-content: center;\n              align-items: center;\n              display: flex; }\n\n.background #login #card #conteiner #center form #btn-login .btn-login {\n                flex: .82 1 0%;\n                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n                font-size: 150%;\n                font-weight: lighter;\n                background: #F8AD2F; }\n\n.background #login #card #conteiner #center form #btn-login .img {\n                height: 100%;\n                justify-content: center;\n                display: flex;\n                align-items: center;\n                flex-direction: column; }\n\n.background #login #card #conteiner #center form #btn-login .img .icon {\n                  width: 150px;\n                  height: 150px;\n                  background-size: cover; }\n\n.background #login #card #conteiner #center form #btn-login .img .text {\n                  color: #273B56; }\n\n.background #login #card #conteiner #right {\n          max-width: 25%;\n          flex: 1 1 auto; }\n\n.background #dateFooter {\n    position: relative;\n    bottom: -11%;\n    font-size: 115%;\n    font-weight: 100;\n    color: rgba(255, 255, 255, 0.5); }\n\n@media only screen and (max-width: 600px) {\n  #login {\n    height: 100% !important;\n    width: 100% !important; }\n    #login #card {\n      border-radius: unset !important;\n      flex-direction: column; }\n      #login #card #logo {\n        border-radius: unset !important; }\n  #dateFooter {\n    display: none !important; } }\n\n@media only screen and (max-height: 480px) {\n  #login {\n    height: 100% !important;\n    width: 100% !important; }\n    #login #card {\n      border-radius: unset !important; }\n      #login #card #logo {\n        border-radius: unset !important; }\n  #dateFooter {\n    display: none !important; } }\n\n.blue-snackbar {\n  background-color: #202020; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29yZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0VBRWYsK0NBQStDO0VBQy9DLHNCQUFzQixFQUFBOztBQVh4QjtJQWNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxhQUFhLEVBQUE7O0FBckJqQjtNQXVCTSxjQUFjO01BQ2QsYUFBYTtNQUNiLGVBQWU7TUFDZiwwQ0FBMEM7TUFDMUMsMkNBQTBDO01BQzFDLDRCQUE0QjtNQUM1QiwrQkFBK0I7TUFDL0IsNkJBQTZCO01BQzdCLGdDQUFnQyxFQUFBOztBQS9CdEM7UUFpQ1EsZ0RBQWdEO1FBQ2hELHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFFekIseUJBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsNENBQTRDLEVBQUE7O0FBM0NwRDtVQTZDVSxhQUFhO1VBQ2IsdUJBQXVCO1VBQ3ZCLHVCQUF1QjtVQUN2QixxQkFBcUI7VUFDckIsYUFBYTtVQUNiLGdCQUFnQixFQUFBOztBQWxEMUI7WUFvRFksZUFBZTtZQUNmLGdCQUFnQjtZQUNoQiwrQkFBb0IsRUFBQTs7QUF0RGhDO1VBMERVLGFBQWE7VUFDYix5QkFBeUI7VUFDekIsdUJBQXVCO1VBQ3ZCLHVCQUF1QjtVQUN2QixrQkFBa0I7VUFDbEIsYUFBYSxFQUFBOztBQS9EdkI7WUFpRVksY0FBYztZQUNkLG9CQUFvQjtZQUNwQiwrQkFBb0IsRUFBQTs7QUFuRWhDO1FBeUVRLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixpQkFBaUIsRUFBQTs7QUE3RXpCO1VBZ0ZVLGNBQWM7VUFDZCxjQUFjO1VBQ2QsYUFBYTtVQUNiLHNCQUFzQixFQUFBOztBQW5GaEM7WUFxRlksY0FBYztZQUVkLHVCQUF1QjtZQUN2QixXQUFXO1lBQ1gsWUFBWTtZQUNaLGdCQUFnQixFQUFBOztBQTFGNUI7Y0E0RmMsVUFBVTtjQUNWLFlBQVk7Y0FDWix5QkFBeUI7Y0FDekIsNkJBQTZCO2NBQzdCLGdDQUFnQztjQUNoQyx3Q0FBd0M7Y0FDeEMsNEJBQW9CO3NCQUFwQixvQkFBb0IsRUFBQTs7QUFsR2xDO2dCQW9HZ0IsWUFBWTtnQkFDWix1QkFBdUI7Z0JBQ3ZCLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixzQkFBc0IsRUFBQTs7QUF4R3RDO2tCQTJHa0IsV0FBVztrQkFDWCxZQUFZO2tCQUNaLHNCQUFzQixFQUFBOztBQTdHeEM7a0JBZ0hrQixjQUFjO2tCQUNkLGVBQWUsRUFBQTs7QUFqSGpDO2NBc0hjLFVBQVU7Y0FDVix5QkFBeUI7Y0FDekIsNkJBQXFCO3NCQUFyQixxQkFBcUIsRUFBQTs7QUF4SG5DO1VBZ0lZLGVBQWU7VUFDZixjQUFjO1VBQ2Qsc0JBQXNCO1VBQ3RCLGFBQWEsRUFBQTs7QUFuSXpCO1lBc0ljLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsa0JBQWtCO1lBQ2xCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLGFBQWEsRUFBQTs7QUE1STNCO2NBK0lrQixnQkFBZ0I7Y0FDaEIsZ0JBQWdCO2NBRWhCLHNCQUFzQjtjQUN0QixXQUFXO2NBQ1gsWUFBWTtjQUdaLFVBQVU7Y0FDVixrQkFBa0IsRUFBQTs7QUF4SnBDO1lBNkpjLGlCQUFpQixFQUFBOztBQTdKL0I7Y0FnS2dCLGNBQWM7Y0FDZCxzQkFBc0I7Y0FDdEIsa0JBQWtCO2NBQ2xCLHVCQUF1QjtjQUN2QixxQkFBcUI7Y0FDckIsbUJBQW1CO2NBQ25CLGFBQWEsRUFBQTs7QUF0SzdCO2dCQXdLa0IsY0FBYyxFQUFBOztBQXhLaEM7Y0E2S2MsY0FBYztjQUNkLHNCQUFzQjtjQUN0QixrQkFBa0I7Y0FDbEIsdUJBQXVCO2NBQ3ZCLHFCQUFxQjtjQUNyQixtQkFBbUI7Y0FDbkIsYUFBYSxFQUFBOztBQW5MM0I7Z0JBcUxnQixjQUFjLEVBQUE7O0FBckw5QjtjQTBMYyxjQUFjO2NBQ2Qsc0JBQXNCO2NBQ3RCLGtCQUFrQjtjQUNsQix1QkFBdUI7Y0FDdkIscUJBQXFCO2NBQ3JCLG1CQUFtQjtjQUNuQixhQUFhLEVBQUE7O0FBaE0zQjtnQkFrTWdCLGNBQWMsRUFBQTs7QUFsTTlCO2NBdU1jLGNBQWM7Y0FDZCxzQkFBc0I7Y0FDdEIsa0JBQWtCO2NBQ2xCLHlCQUF5QjtjQUN6QixxQkFBcUI7Y0FDckIscUJBQXFCO2NBQ3JCLGFBQWEsRUFBQTs7QUE3TTNCO2dCQStNZ0IsY0FBYztnQkFDZCxZQUFZLEVBQUE7O0FBaE41QjtjQXFOYyxjQUFjO2NBQ2Qsc0JBQXNCO2NBQ3RCLGtCQUFrQjtjQUNsQix1QkFBdUI7Y0FDdkIscUJBQXFCO2NBQ3JCLG1CQUFtQjtjQUNuQixhQUFhLEVBQUE7O0FBM04zQjtnQkE2TmdCLGNBQWM7Z0JBQ2QsMENBQTBDO2dCQUMxQyxlQUFlO2dCQUNmLG9CQUFvQjtnQkFFcEIsbUJBQW1CLEVBQUE7O0FBbE9uQztnQkFxTzBCLFlBQVk7Z0JBQ1osdUJBQXVCO2dCQUN2QixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsc0JBQXNCLEVBQUE7O0FBek9oRDtrQkE0TzRCLFlBQVk7a0JBQ1osYUFBYTtrQkFDYixzQkFBc0IsRUFBQTs7QUE5T2xEO2tCQWlQNEIsY0FBYyxFQUFBOztBQWpQMUM7VUEyUFUsY0FBYztVQUNkLGNBQWMsRUFBQTs7QUE1UHhCO0lBa1FJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwrQkFBb0IsRUFBQTs7QUFJeEI7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0IsRUFBQTtJQUZ4QjtNQUlJLCtCQUErQjtNQUMvQixzQkFBc0IsRUFBQTtNQUwxQjtRQU9NLCtCQUErQixFQUFBO0VBUXJDO0lBQ0Usd0JBQXdCLEVBQUEsRUFDekI7O0FBRUg7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixzQkFBc0IsRUFBQTtJQUZ4QjtNQUlJLCtCQUErQixFQUFBO01BSm5DO1FBTU0sK0JBQStCLEVBQUE7RUFRckM7SUFDRSx3QkFBd0IsRUFBQSxFQUN6Qjs7QUFHSDtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICAvL2JhY2tncm91bmQ6ICMzMzVENTM7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvcmNyL21hcGEyQDJ4LnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgI2xvZ2luIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBoZWlnaHQ6IDYxLjc2JTsgLy8gaGVpZ2h0OjUwLjYlOyAvLyB0byBjb21wYXJlIHdpdGggdGhlIGltYWdlIHByb3RvdHlwZVxyXG4gICAgd2lkdGg6IDY0LjQxJTtcclxuICAgICNjYXJkIHtcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgYm94LXNoYWRvdzogMCA2MHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45NSk7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7IC8vIHRoaXMgdmFsdWUgaXMgdG8gaGlkZSBib3JkZXIgb2YgdGhlIGJhY2tncm91bmRcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDsgLy8gdGhpcyB2YWx1ZSBpcyB0byBoaWRlIGJvcmRlciBvZiB0aGUgYmFja2dyb3VuZFxyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTNweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICNsb2dvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9yY3IvaW1nLWJnQDJ4LnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzI3M0I1NjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzRjRBREU7XHJcbiAgICAgICAgZmxleDogMSAwIDQwLjc3JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyAxMHB4IDBweCAtMjRweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgI3RpdGxlIHtcclxuICAgICAgICAgIGZsZXg6IDEgMSA1MCU7IC8vYmFja2dyb3VuZDogYmx1ZTtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNjRweDtcclxuICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNTAlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSggI0ZGRkZGRiwgMC44KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI3N1YnRpdGxlIHtcclxuICAgICAgICAgIGZsZXg6IDEgMSA1MCU7IC8vYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCAjRkZGRkZGLCAwLjgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAjY29udGVpbmVyIHtcclxuICAgICAgICAvLyBmbGV4OiAxIDEgNTkuMjMlO1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI5MnB4O1xyXG4gICAgICAgICNsZWZ0IHtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgLnRhZ3tcclxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggdW5zZXQgc29saWQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC5idXR0b257XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUzJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggIzk1OTg5QSBzb2xpZDsgIFxyXG4gICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxM3B4OyAgICAgICBcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTNweDsgICBcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpOyBcclxuICAgICAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoNTAlKTtcclxuICAgICAgICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNThweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4OyBcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzI3M0I1NjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aXZle1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2NCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggIzI3M0I1NiBzb2xpZDtcclxuICAgICAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICAgI2NlbnRlciB7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgI2ltYWdlIHtcclxuICAgICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMy41OCU7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAvLyAuY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgIC5waG90byB7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjM1cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvcmNyL2xvZ29fbG9naW4ucG5nKTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjMjYzQjU1O1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiA1OyAvLyBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICAgIC5pZENvbXBhbnkge1xyXG4gICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwLjM1JTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAjaWRDb21wYW55IHtcclxuICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87IC8vIGZsZXg6IDwnZmxleC1ncm93Jz4gPCdmbGV4LXNocmluayc+IDwnZmxleC1iYXNpcyc+IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmVucm9sbCB7XHJcbiAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwLjM1JTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICNlbnJvbGwge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87IC8vIGZsZXg6IDwnZmxleC1ncm93Jz4gPCdmbGV4LXNocmluayc+IDwnZmxleC1iYXNpcyc+IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwLjM1JTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICNwYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3Byb2JsZW0ge1xyXG4gICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMC43NyU7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgLnByb2JsZW0ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NiU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNidG4tbG9naW4ge1xyXG4gICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM0Ljk1JTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIC5idG4tbG9naW4ge1xyXG4gICAgICAgICAgICAgICAgZmxleDogLjgyIDEgMCU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIC8vY29sb3I6ICNGOEFEMkZcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOEFEMkY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI3M0I1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgI3JpZ2h0IHtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHB1cnBsZTtcclxuICAgICAgICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICNkYXRlRm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTExJTtcclxuICAgIGZvbnQtc2l6ZTogMTE1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogcmdiYSggI0ZGRkZGRiwgMC41KVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICNsb2dpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAjY2FyZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICNsb2dvIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAucGhvdG8ge1xyXG4gICAgLy8gICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gICNkYXRlRm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDgwcHgpIHtcclxuICAjbG9naW4ge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgI2NhcmQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAjbG9nbyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLnBob3RvIHtcclxuICAgIC8vICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICAjZGF0ZUZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYmx1ZS1zbmFja2JhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/core/login/login.service.ts");
/* harmony import */ var app_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _common_route_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_module_performa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/module/performa */ "./src/app/module/performa/index.ts");
/* harmony import */ var app_service_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/session.service */ "./src/app/service/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { CookieService } from 'ngx-cookie-service;
var LoginComponent = /** @class */ (function () {
    //toolbarUserButton;
    function LoginComponent(router, fb, cd, login, companyPerformaApi, 
    // private companyService: CompanyService,
    snackBar, session) {
        this.router = router;
        this.fb = fb;
        this.cd = cd;
        this.login = login;
        this.companyPerformaApi = companyPerformaApi;
        this.snackBar = snackBar;
        this.session = session;
        this.inputType = 'password';
        this.visible = false;
        this.companies = [];
        this.selectedCompanyId = 1;
        localStorage.clear();
        //this.toolbarUserButton = ToolbarUserButtonComponent;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            idCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enroll: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        localStorage.clear();
        //this.loadData();
    };
    LoginComponent.prototype.send = function () {
        var _this = this;
        this.visible = true;
        this.login.login(this.form.get('enroll').value, this.form.get('password').value).then(function (success) {
            //this.session.loadUser();
            _this.router.navigate(['/dashboard-lives']);
            //console.log(success);
        }, function (error) {
            console.log(error);
            _this.visible = false;
            _this.snackBar.open('Usuário Inválido!', 'OK', {
                duration: 30000,
                panelClass: ['blue-snackbar']
            });
        });
        //this.visible = false;
    };
    LoginComponent.prototype.show = function () {
        this.inputType = 'text';
        this.visible = true;
        this.cd.markForCheck();
    };
    LoginComponent.prototype.hide = function () {
        this.inputType = 'password';
        this.visible = false;
        this.cd.markForCheck();
        this.send();
    };
    LoginComponent.prototype.loadData = function () {
        //this.getCompanies();
        // this.sessionSub = this.sessionStore.getSession$().subscribe(res => {
        // console.log(res);
        // this.user = res.user;
        // this.isExpiredSession = res.isExpiredSession;
        // this.hasError = res.error;
        // });
    };
    Object.defineProperty(LoginComponent.prototype, "dateFooter", {
        get: function () {
            var date = new Date().toLocaleDateString('en-GB');
            // Date formatting for footer
            var d = date.split('/');
            var m = app_utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].mesPorExtenso(d[1]);
            return d[0] + ' de ' + m.charAt(0).toUpperCase() + m.substr(1) + ' de ' + d[2];
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyPerformaApi.getAllUsingGET1(0).subscribe(function (data) {
            // console.log(data)
            _this.companies = data.content;
            // this.selectCompanyTransire();
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                //this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/login/login.component.html"),
            animations: [_common_route_animation__WEBPACK_IMPORTED_MODULE_5__["fadeOutAnimation"]],
            providers: [app_service_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            app_module_performa__WEBPACK_IMPORTED_MODULE_7__["CompanyControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            app_service_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/core/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/core/login/login.service.ts");
/* harmony import */ var _common_material_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var app_module_performa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/module/performa */ "./src/app/module/performa/index.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _common_material_components_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
                { provide: app_module_performa__WEBPACK_IMPORTED_MODULE_7__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.performaApi },
                app_module_performa__WEBPACK_IMPORTED_MODULE_7__["CompanyControllerService"]
            ],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/module/performa/api.module.ts":
/*!***********************************************!*\
  !*** ./src/app/module/performa/api.module.ts ***!
  \***********************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/app/module/performa/configuration.ts");
/* harmony import */ var _api_areasController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/areasController.service */ "./src/app/module/performa/api/areasController.service.ts");
/* harmony import */ var _api_companyController_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/companyController.service */ "./src/app/module/performa/api/companyController.service.ts");
/* harmony import */ var _api_databasesController_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/databasesController.service */ "./src/app/module/performa/api/databasesController.service.ts");
/* harmony import */ var _api_defectClassController_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/defectClassController.service */ "./src/app/module/performa/api/defectClassController.service.ts");
/* harmony import */ var _api_defectsController_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/defectsController.service */ "./src/app/module/performa/api/defectsController.service.ts");
/* harmony import */ var _api_departmentsController_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/departmentsController.service */ "./src/app/module/performa/api/departmentsController.service.ts");
/* harmony import */ var _api_downtimeDetailController_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/downtimeDetailController.service */ "./src/app/module/performa/api/downtimeDetailController.service.ts");
/* harmony import */ var _api_downtimeHeaderController_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/downtimeHeaderController.service */ "./src/app/module/performa/api/downtimeHeaderController.service.ts");
/* harmony import */ var _api_downtimeReasonController_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api/downtimeReasonController.service */ "./src/app/module/performa/api/downtimeReasonController.service.ts");
/* harmony import */ var _api_downtimeTypeReasonController_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/downtimeTypeReasonController.service */ "./src/app/module/performa/api/downtimeTypeReasonController.service.ts");
/* harmony import */ var _api_employeesController_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api/employeesController.service */ "./src/app/module/performa/api/employeesController.service.ts");
/* harmony import */ var _api_linesController_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api/linesController.service */ "./src/app/module/performa/api/linesController.service.ts");
/* harmony import */ var _api_machinesController_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api/machinesController.service */ "./src/app/module/performa/api/machinesController.service.ts");
/* harmony import */ var _api_maintenanceActionController_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./api/maintenanceActionController.service */ "./src/app/module/performa/api/maintenanceActionController.service.ts");
/* harmony import */ var _api_modelsController_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./api/modelsController.service */ "./src/app/module/performa/api/modelsController.service.ts");
/* harmony import */ var _api_modulesController_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./api/modulesController.service */ "./src/app/module/performa/api/modulesController.service.ts");
/* harmony import */ var _api_movementHeadersController_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./api/movementHeadersController.service */ "./src/app/module/performa/api/movementHeadersController.service.ts");
/* harmony import */ var _api_movementHistoriesController_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./api/movementHistoriesController.service */ "./src/app/module/performa/api/movementHistoriesController.service.ts");
/* harmony import */ var _api_positionController_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./api/positionController.service */ "./src/app/module/performa/api/positionController.service.ts");
/* harmony import */ var _api_productionOrdersController_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./api/productionOrdersController.service */ "./src/app/module/performa/api/productionOrdersController.service.ts");
/* harmony import */ var _api_profilesController_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./api/profilesController.service */ "./src/app/module/performa/api/profilesController.service.ts");
/* harmony import */ var _api_routesController_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./api/routesController.service */ "./src/app/module/performa/api/routesController.service.ts");
/* harmony import */ var _api_sessionsController_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./api/sessionsController.service */ "./src/app/module/performa/api/sessionsController.service.ts");
/* harmony import */ var _api_shiftsController_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./api/shiftsController.service */ "./src/app/module/performa/api/shiftsController.service.ts");
/* harmony import */ var _api_technicalActionsController_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./api/technicalActionsController.service */ "./src/app/module/performa/api/technicalActionsController.service.ts");
/* harmony import */ var _api_technicalAnalysisController_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./api/technicalAnalysisController.service */ "./src/app/module/performa/api/technicalAnalysisController.service.ts");
/* harmony import */ var _api_workstationsController_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./api/workstationsController.service */ "./src/app/module/performa/api/workstationsController.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};































var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], useFactory: configurationFactory }]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            declarations: [],
            exports: [],
            providers: [
                _api_areasController_service__WEBPACK_IMPORTED_MODULE_4__["AreasControllerService"],
                _api_companyController_service__WEBPACK_IMPORTED_MODULE_5__["CompanyControllerService"],
                _api_databasesController_service__WEBPACK_IMPORTED_MODULE_6__["DatabasesControllerService"],
                _api_defectClassController_service__WEBPACK_IMPORTED_MODULE_7__["DefectClassControllerService"],
                _api_defectsController_service__WEBPACK_IMPORTED_MODULE_8__["DefectsControllerService"],
                _api_departmentsController_service__WEBPACK_IMPORTED_MODULE_9__["DepartmentsControllerService"],
                _api_downtimeDetailController_service__WEBPACK_IMPORTED_MODULE_10__["DowntimeDetailControllerService"],
                _api_downtimeHeaderController_service__WEBPACK_IMPORTED_MODULE_11__["DowntimeHeaderControllerService"],
                _api_downtimeReasonController_service__WEBPACK_IMPORTED_MODULE_12__["DowntimeReasonControllerService"],
                _api_downtimeTypeReasonController_service__WEBPACK_IMPORTED_MODULE_13__["DowntimeTypeReasonControllerService"],
                _api_employeesController_service__WEBPACK_IMPORTED_MODULE_14__["EmployeesControllerService"],
                _api_linesController_service__WEBPACK_IMPORTED_MODULE_15__["LinesControllerService"],
                _api_machinesController_service__WEBPACK_IMPORTED_MODULE_16__["MachinesControllerService"],
                _api_maintenanceActionController_service__WEBPACK_IMPORTED_MODULE_17__["MaintenanceActionControllerService"],
                _api_modelsController_service__WEBPACK_IMPORTED_MODULE_18__["ModelsControllerService"],
                _api_modulesController_service__WEBPACK_IMPORTED_MODULE_19__["ModulesControllerService"],
                _api_movementHeadersController_service__WEBPACK_IMPORTED_MODULE_20__["MovementHeadersControllerService"],
                _api_movementHistoriesController_service__WEBPACK_IMPORTED_MODULE_21__["MovementHistoriesControllerService"],
                _api_positionController_service__WEBPACK_IMPORTED_MODULE_22__["PositionControllerService"],
                _api_productionOrdersController_service__WEBPACK_IMPORTED_MODULE_23__["ProductionOrdersControllerService"],
                _api_profilesController_service__WEBPACK_IMPORTED_MODULE_24__["ProfilesControllerService"],
                _api_routesController_service__WEBPACK_IMPORTED_MODULE_25__["RoutesControllerService"],
                _api_sessionsController_service__WEBPACK_IMPORTED_MODULE_26__["SessionsControllerService"],
                _api_shiftsController_service__WEBPACK_IMPORTED_MODULE_27__["ShiftsControllerService"],
                _api_technicalActionsController_service__WEBPACK_IMPORTED_MODULE_28__["TechnicalActionsControllerService"],
                _api_technicalAnalysisController_service__WEBPACK_IMPORTED_MODULE_29__["TechnicalAnalysisControllerService"],
                _api_workstationsController_service__WEBPACK_IMPORTED_MODULE_30__["WorkstationsControllerService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [ApiModule])
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "./src/app/module/performa/api/api.ts":
/*!********************************************!*\
  !*** ./src/app/module/performa/api/api.ts ***!
  \********************************************/
/*! exports provided: APIS, AreasControllerService, CompanyControllerService, DatabasesControllerService, DefectClassControllerService, DefectsControllerService, DepartmentsControllerService, DowntimeDetailControllerService, DowntimeHeaderControllerService, DowntimeReasonControllerService, DowntimeTypeReasonControllerService, EmployeesControllerService, LinesControllerService, MachinesControllerService, MaintenanceActionControllerService, ModelsControllerService, ModulesControllerService, MovementHeadersControllerService, MovementHistoriesControllerService, PositionControllerService, ProductionOrdersControllerService, ProfilesControllerService, RoutesControllerService, SessionsControllerService, ShiftsControllerService, TechnicalActionsControllerService, TechnicalAnalysisControllerService, WorkstationsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _areasController_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areasController.service */ "./src/app/module/performa/api/areasController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreasControllerService", function() { return _areasController_service__WEBPACK_IMPORTED_MODULE_0__["AreasControllerService"]; });

/* harmony import */ var _companyController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companyController.service */ "./src/app/module/performa/api/companyController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyControllerService", function() { return _companyController_service__WEBPACK_IMPORTED_MODULE_1__["CompanyControllerService"]; });

/* harmony import */ var _databasesController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./databasesController.service */ "./src/app/module/performa/api/databasesController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatabasesControllerService", function() { return _databasesController_service__WEBPACK_IMPORTED_MODULE_2__["DatabasesControllerService"]; });

/* harmony import */ var _defectClassController_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defectClassController.service */ "./src/app/module/performa/api/defectClassController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefectClassControllerService", function() { return _defectClassController_service__WEBPACK_IMPORTED_MODULE_3__["DefectClassControllerService"]; });

/* harmony import */ var _defectsController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defectsController.service */ "./src/app/module/performa/api/defectsController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefectsControllerService", function() { return _defectsController_service__WEBPACK_IMPORTED_MODULE_4__["DefectsControllerService"]; });

/* harmony import */ var _departmentsController_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departmentsController.service */ "./src/app/module/performa/api/departmentsController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentsControllerService", function() { return _departmentsController_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentsControllerService"]; });

/* harmony import */ var _downtimeDetailController_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downtimeDetailController.service */ "./src/app/module/performa/api/downtimeDetailController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowntimeDetailControllerService", function() { return _downtimeDetailController_service__WEBPACK_IMPORTED_MODULE_6__["DowntimeDetailControllerService"]; });

/* harmony import */ var _downtimeHeaderController_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./downtimeHeaderController.service */ "./src/app/module/performa/api/downtimeHeaderController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowntimeHeaderControllerService", function() { return _downtimeHeaderController_service__WEBPACK_IMPORTED_MODULE_7__["DowntimeHeaderControllerService"]; });

/* harmony import */ var _downtimeReasonController_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./downtimeReasonController.service */ "./src/app/module/performa/api/downtimeReasonController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowntimeReasonControllerService", function() { return _downtimeReasonController_service__WEBPACK_IMPORTED_MODULE_8__["DowntimeReasonControllerService"]; });

/* harmony import */ var _downtimeTypeReasonController_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./downtimeTypeReasonController.service */ "./src/app/module/performa/api/downtimeTypeReasonController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowntimeTypeReasonControllerService", function() { return _downtimeTypeReasonController_service__WEBPACK_IMPORTED_MODULE_9__["DowntimeTypeReasonControllerService"]; });

/* harmony import */ var _employeesController_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employeesController.service */ "./src/app/module/performa/api/employeesController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeesControllerService", function() { return _employeesController_service__WEBPACK_IMPORTED_MODULE_10__["EmployeesControllerService"]; });

/* harmony import */ var _linesController_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./linesController.service */ "./src/app/module/performa/api/linesController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinesControllerService", function() { return _linesController_service__WEBPACK_IMPORTED_MODULE_11__["LinesControllerService"]; });

/* harmony import */ var _machinesController_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./machinesController.service */ "./src/app/module/performa/api/machinesController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MachinesControllerService", function() { return _machinesController_service__WEBPACK_IMPORTED_MODULE_12__["MachinesControllerService"]; });

/* harmony import */ var _maintenanceActionController_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./maintenanceActionController.service */ "./src/app/module/performa/api/maintenanceActionController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaintenanceActionControllerService", function() { return _maintenanceActionController_service__WEBPACK_IMPORTED_MODULE_13__["MaintenanceActionControllerService"]; });

/* harmony import */ var _modelsController_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modelsController.service */ "./src/app/module/performa/api/modelsController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelsControllerService", function() { return _modelsController_service__WEBPACK_IMPORTED_MODULE_14__["ModelsControllerService"]; });

/* harmony import */ var _modulesController_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modulesController.service */ "./src/app/module/performa/api/modulesController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModulesControllerService", function() { return _modulesController_service__WEBPACK_IMPORTED_MODULE_15__["ModulesControllerService"]; });

/* harmony import */ var _movementHeadersController_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./movementHeadersController.service */ "./src/app/module/performa/api/movementHeadersController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovementHeadersControllerService", function() { return _movementHeadersController_service__WEBPACK_IMPORTED_MODULE_16__["MovementHeadersControllerService"]; });

/* harmony import */ var _movementHistoriesController_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./movementHistoriesController.service */ "./src/app/module/performa/api/movementHistoriesController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovementHistoriesControllerService", function() { return _movementHistoriesController_service__WEBPACK_IMPORTED_MODULE_17__["MovementHistoriesControllerService"]; });

/* harmony import */ var _positionController_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./positionController.service */ "./src/app/module/performa/api/positionController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositionControllerService", function() { return _positionController_service__WEBPACK_IMPORTED_MODULE_18__["PositionControllerService"]; });

/* harmony import */ var _productionOrdersController_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./productionOrdersController.service */ "./src/app/module/performa/api/productionOrdersController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductionOrdersControllerService", function() { return _productionOrdersController_service__WEBPACK_IMPORTED_MODULE_19__["ProductionOrdersControllerService"]; });

/* harmony import */ var _profilesController_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profilesController.service */ "./src/app/module/performa/api/profilesController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesControllerService", function() { return _profilesController_service__WEBPACK_IMPORTED_MODULE_20__["ProfilesControllerService"]; });

/* harmony import */ var _routesController_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routesController.service */ "./src/app/module/performa/api/routesController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutesControllerService", function() { return _routesController_service__WEBPACK_IMPORTED_MODULE_21__["RoutesControllerService"]; });

/* harmony import */ var _sessionsController_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sessionsController.service */ "./src/app/module/performa/api/sessionsController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionsControllerService", function() { return _sessionsController_service__WEBPACK_IMPORTED_MODULE_22__["SessionsControllerService"]; });

/* harmony import */ var _shiftsController_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shiftsController.service */ "./src/app/module/performa/api/shiftsController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShiftsControllerService", function() { return _shiftsController_service__WEBPACK_IMPORTED_MODULE_23__["ShiftsControllerService"]; });

/* harmony import */ var _technicalActionsController_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./technicalActionsController.service */ "./src/app/module/performa/api/technicalActionsController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TechnicalActionsControllerService", function() { return _technicalActionsController_service__WEBPACK_IMPORTED_MODULE_24__["TechnicalActionsControllerService"]; });

/* harmony import */ var _technicalAnalysisController_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./technicalAnalysisController.service */ "./src/app/module/performa/api/technicalAnalysisController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TechnicalAnalysisControllerService", function() { return _technicalAnalysisController_service__WEBPACK_IMPORTED_MODULE_25__["TechnicalAnalysisControllerService"]; });

/* harmony import */ var _workstationsController_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./workstationsController.service */ "./src/app/module/performa/api/workstationsController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkstationsControllerService", function() { return _workstationsController_service__WEBPACK_IMPORTED_MODULE_26__["WorkstationsControllerService"]; });























































var APIS = [_areasController_service__WEBPACK_IMPORTED_MODULE_0__["AreasControllerService"], _companyController_service__WEBPACK_IMPORTED_MODULE_1__["CompanyControllerService"], _databasesController_service__WEBPACK_IMPORTED_MODULE_2__["DatabasesControllerService"], _defectClassController_service__WEBPACK_IMPORTED_MODULE_3__["DefectClassControllerService"], _defectsController_service__WEBPACK_IMPORTED_MODULE_4__["DefectsControllerService"], _departmentsController_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentsControllerService"], _downtimeDetailController_service__WEBPACK_IMPORTED_MODULE_6__["DowntimeDetailControllerService"], _downtimeHeaderController_service__WEBPACK_IMPORTED_MODULE_7__["DowntimeHeaderControllerService"], _downtimeReasonController_service__WEBPACK_IMPORTED_MODULE_8__["DowntimeReasonControllerService"], _downtimeTypeReasonController_service__WEBPACK_IMPORTED_MODULE_9__["DowntimeTypeReasonControllerService"], _employeesController_service__WEBPACK_IMPORTED_MODULE_10__["EmployeesControllerService"], _linesController_service__WEBPACK_IMPORTED_MODULE_11__["LinesControllerService"], _machinesController_service__WEBPACK_IMPORTED_MODULE_12__["MachinesControllerService"], _maintenanceActionController_service__WEBPACK_IMPORTED_MODULE_13__["MaintenanceActionControllerService"], _modelsController_service__WEBPACK_IMPORTED_MODULE_14__["ModelsControllerService"], _modulesController_service__WEBPACK_IMPORTED_MODULE_15__["ModulesControllerService"], _movementHeadersController_service__WEBPACK_IMPORTED_MODULE_16__["MovementHeadersControllerService"], _movementHistoriesController_service__WEBPACK_IMPORTED_MODULE_17__["MovementHistoriesControllerService"], _positionController_service__WEBPACK_IMPORTED_MODULE_18__["PositionControllerService"], _productionOrdersController_service__WEBPACK_IMPORTED_MODULE_19__["ProductionOrdersControllerService"], _profilesController_service__WEBPACK_IMPORTED_MODULE_20__["ProfilesControllerService"], _routesController_service__WEBPACK_IMPORTED_MODULE_21__["RoutesControllerService"], _sessionsController_service__WEBPACK_IMPORTED_MODULE_22__["SessionsControllerService"], _shiftsController_service__WEBPACK_IMPORTED_MODULE_23__["ShiftsControllerService"], _technicalActionsController_service__WEBPACK_IMPORTED_MODULE_24__["TechnicalActionsControllerService"], _technicalAnalysisController_service__WEBPACK_IMPORTED_MODULE_25__["TechnicalAnalysisControllerService"], _workstationsController_service__WEBPACK_IMPORTED_MODULE_26__["WorkstationsControllerService"]];


/***/ }),

/***/ "./src/app/module/performa/api/areasController.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/module/performa/api/areasController.service.ts ***!
  \****************************************************************/
/*! exports provided: AreasControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasControllerService", function() { return AreasControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AreasControllerService = /** @class */ (function () {
    function AreasControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    AreasControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    AreasControllerService.prototype.createUsingPOST = function (areaDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (areaDTO === null || areaDTO === undefined) {
            throw new Error('Required parameter areaDTO was null or undefined when calling createUsingPOST.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/areas", areaDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AreasControllerService.prototype.deleteUsingDELETE = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/areas/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AreasControllerService.prototype.findByIdUsingGET = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/areas/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AreasControllerService.prototype.getAllUsingGET = function (page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/areas", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AreasControllerService.prototype.updateUsingPUT = function (id, areaDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT.');
        }
        if (areaDTO === null || areaDTO === undefined) {
            throw new Error('Required parameter areaDTO was null or undefined when calling updateUsingPUT.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/areas/" + encodeURIComponent(String(id)), areaDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AreasControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], AreasControllerService);
    return AreasControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/companyController.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/module/performa/api/companyController.service.ts ***!
  \******************************************************************/
/*! exports provided: CompanyControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyControllerService", function() { return CompanyControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CompanyControllerService = /** @class */ (function () {
    function CompanyControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    CompanyControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    CompanyControllerService.prototype.createUsingPOST1 = function (companyDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (companyDTO === null || companyDTO === undefined) {
            throw new Error('Required parameter companyDTO was null or undefined when calling createUsingPOST1.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/companies", companyDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CompanyControllerService.prototype.deleteUsingDELETE1 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE1.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/companies/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CompanyControllerService.prototype.findByIdUsingGET1 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET1.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/companies/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CompanyControllerService.prototype.getAllUsingGET1 = function (page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET1.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/companies", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CompanyControllerService.prototype.updateUsingPUT1 = function (id, companyDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT1.');
        }
        if (companyDTO === null || companyDTO === undefined) {
            throw new Error('Required parameter companyDTO was null or undefined when calling updateUsingPUT1.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/companies/" + encodeURIComponent(String(id)), companyDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CompanyControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], CompanyControllerService);
    return CompanyControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/databasesController.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/module/performa/api/databasesController.service.ts ***!
  \********************************************************************/
/*! exports provided: DatabasesControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabasesControllerService", function() { return DatabasesControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DatabasesControllerService = /** @class */ (function () {
    function DatabasesControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DatabasesControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DatabasesControllerService.prototype.findByIdUsingGET2 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET2.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/databases/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DatabasesControllerService.prototype.getAllUsingGET2 = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/databases", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DatabasesControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], DatabasesControllerService);
    return DatabasesControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/defectClassController.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/module/performa/api/defectClassController.service.ts ***!
  \**********************************************************************/
/*! exports provided: DefectClassControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectClassControllerService", function() { return DefectClassControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DefectClassControllerService = /** @class */ (function () {
    function DefectClassControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DefectClassControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DefectClassControllerService.prototype.createUsingPOST2 = function (defectClassDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (defectClassDTO === null || defectClassDTO === undefined) {
            throw new Error('Required parameter defectClassDTO was null or undefined when calling createUsingPOST2.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST2.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/defect-classes", defectClassDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectClassControllerService.prototype.deleteUsingDELETE2 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE2.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE2.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/defect-classes/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectClassControllerService.prototype.findByIdUsingGET3 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET3.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET3.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/defect-classes/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectClassControllerService.prototype.getAllUsingGET3 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET3.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET3.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/defect-classes", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectClassControllerService.prototype.updateUsingPUT2 = function (id, defectClassDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT2.');
        }
        if (defectClassDTO === null || defectClassDTO === undefined) {
            throw new Error('Required parameter defectClassDTO was null or undefined when calling updateUsingPUT2.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT2.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/defect-classes/" + encodeURIComponent(String(id)), defectClassDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectClassControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], DefectClassControllerService);
    return DefectClassControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/defectsController.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/module/performa/api/defectsController.service.ts ***!
  \******************************************************************/
/*! exports provided: DefectsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectsControllerService", function() { return DefectsControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DefectsControllerService = /** @class */ (function () {
    function DefectsControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DefectsControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DefectsControllerService.prototype.createUsingPOST3 = function (defectDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (defectDTO === null || defectDTO === undefined) {
            throw new Error('Required parameter defectDTO was null or undefined when calling createUsingPOST3.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST3.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/defects", defectDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectsControllerService.prototype.deleteUsingDELETE3 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE3.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE3.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/defects/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectsControllerService.prototype.findByIdUsingGET4 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET4.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET4.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/defects/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectsControllerService.prototype.findByMachineUsingGET = function (idMachine, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idMachine === null || idMachine === undefined) {
            throw new Error('Required parameter idMachine was null or undefined when calling findByMachineUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByMachineUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/defects/machines/" + encodeURIComponent(String(idMachine)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectsControllerService.prototype.getAllUsingGET4 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET4.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET4.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/defects", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectsControllerService.prototype.reportUsingGET = function (idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling reportUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/defects/report", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectsControllerService.prototype.updateUsingPUT3 = function (id, defectDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT3.');
        }
        if (defectDTO === null || defectDTO === undefined) {
            throw new Error('Required parameter defectDTO was null or undefined when calling updateUsingPUT3.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT3.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/defects/" + encodeURIComponent(String(id)), defectDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DefectsControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], DefectsControllerService);
    return DefectsControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/departmentsController.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/module/performa/api/departmentsController.service.ts ***!
  \**********************************************************************/
/*! exports provided: DepartmentsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsControllerService", function() { return DepartmentsControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DepartmentsControllerService = /** @class */ (function () {
    function DepartmentsControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DepartmentsControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DepartmentsControllerService.prototype.createUsingPOST4 = function (departmentDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (departmentDTO === null || departmentDTO === undefined) {
            throw new Error('Required parameter departmentDTO was null or undefined when calling createUsingPOST4.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST4.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/departments", departmentDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DepartmentsControllerService.prototype.deleteUsingDELETE4 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE4.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE4.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/departments/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DepartmentsControllerService.prototype.findByIdUsingGET5 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET5.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET5.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/departments/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DepartmentsControllerService.prototype.getAllUsingGET5 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET5.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET5.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/departments", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DepartmentsControllerService.prototype.updateUsingPUT4 = function (id, departmentDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT4.');
        }
        if (departmentDTO === null || departmentDTO === undefined) {
            throw new Error('Required parameter departmentDTO was null or undefined when calling updateUsingPUT4.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT4.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/departments/" + encodeURIComponent(String(id)), departmentDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DepartmentsControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], DepartmentsControllerService);
    return DepartmentsControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/downtimeDetailController.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/module/performa/api/downtimeDetailController.service.ts ***!
  \*************************************************************************/
/*! exports provided: DowntimeDetailControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DowntimeDetailControllerService", function() { return DowntimeDetailControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DowntimeDetailControllerService = /** @class */ (function () {
    function DowntimeDetailControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DowntimeDetailControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DowntimeDetailControllerService.prototype.createUsingPOST5 = function (downtimeDetailDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (downtimeDetailDTO === null || downtimeDetailDTO === undefined) {
            throw new Error('Required parameter downtimeDetailDTO was null or undefined when calling createUsingPOST5.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/downtime-details", downtimeDetailDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeDetailControllerService.prototype.deleteUsingDELETE5 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE5.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/downtime-details/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeDetailControllerService.prototype.findByIdUsingGET6 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET6.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-details/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeDetailControllerService.prototype.getAllUsingGET6 = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-details", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeDetailControllerService.prototype.updateUsingPUT5 = function (id, downtimeDetailDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT5.');
        }
        if (downtimeDetailDTO === null || downtimeDetailDTO === undefined) {
            throw new Error('Required parameter downtimeDetailDTO was null or undefined when calling updateUsingPUT5.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/downtime-details/" + encodeURIComponent(String(id)), downtimeDetailDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeDetailControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], DowntimeDetailControllerService);
    return DowntimeDetailControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/downtimeHeaderController.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/module/performa/api/downtimeHeaderController.service.ts ***!
  \*************************************************************************/
/*! exports provided: DowntimeHeaderControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DowntimeHeaderControllerService", function() { return DowntimeHeaderControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DowntimeHeaderControllerService = /** @class */ (function () {
    function DowntimeHeaderControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DowntimeHeaderControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DowntimeHeaderControllerService.prototype.createUsingPOST6 = function (downtimeHeaderDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (downtimeHeaderDTO === null || downtimeHeaderDTO === undefined) {
            throw new Error('Required parameter downtimeHeaderDTO was null or undefined when calling createUsingPOST6.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST6.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/downtime-headers", downtimeHeaderDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService.prototype.createWithDetailsUsingPOST = function (downtimeHeaderDetailDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (downtimeHeaderDetailDTO === null || downtimeHeaderDetailDTO === undefined) {
            throw new Error('Required parameter downtimeHeaderDetailDTO was null or undefined when calling createWithDetailsUsingPOST.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createWithDetailsUsingPOST.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/downtime-headers/details", downtimeHeaderDetailDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService.prototype.deleteUsingDELETE6 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE6.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE6.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/downtime-headers/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService.prototype.findByIdUsingGET7 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET7.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET7.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-headers/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService.prototype.findByIdWithDetailsUsingGET = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdWithDetailsUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdWithDetailsUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-headers/details/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService.prototype.getAllUsingGET7 = function (idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET7.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-headers", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService.prototype.getAllWithDetailsUsingGET = function (page, idEmployee, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllWithDetailsUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllWithDetailsUsingGET.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-headers/details", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService.prototype.getDashboardUsingGET = function (date, shiftId, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling getDashboardUsingGET.');
        }
        if (shiftId === null || shiftId === undefined) {
            throw new Error('Required parameter shiftId was null or undefined when calling getDashboardUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getDashboardUsingGET.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (date !== undefined) {
            queryParameters = queryParameters.set('date', date);
        }
        if (shiftId !== undefined) {
            queryParameters = queryParameters.set('shiftId', shiftId);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-headers/dashboard", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService.prototype.updateUsingPUT6 = function (id, downtimeHeaderDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT6.');
        }
        if (downtimeHeaderDTO === null || downtimeHeaderDTO === undefined) {
            throw new Error('Required parameter downtimeHeaderDTO was null or undefined when calling updateUsingPUT6.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT6.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/downtime-headers/" + encodeURIComponent(String(id)), downtimeHeaderDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeHeaderControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], DowntimeHeaderControllerService);
    return DowntimeHeaderControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/downtimeReasonController.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/module/performa/api/downtimeReasonController.service.ts ***!
  \*************************************************************************/
/*! exports provided: DowntimeReasonControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DowntimeReasonControllerService", function() { return DowntimeReasonControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DowntimeReasonControllerService = /** @class */ (function () {
    function DowntimeReasonControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DowntimeReasonControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DowntimeReasonControllerService.prototype.createUsingPOST7 = function (downtimeReasonDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (downtimeReasonDTO === null || downtimeReasonDTO === undefined) {
            throw new Error('Required parameter downtimeReasonDTO was null or undefined when calling createUsingPOST7.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/downtime-reasons", downtimeReasonDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeReasonControllerService.prototype.deleteUsingDELETE7 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE7.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/downtime-reasons/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeReasonControllerService.prototype.findByIdUsingGET8 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET8.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-reasons/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeReasonControllerService.prototype.getAllUsingGET8 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET8.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET8.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-reasons", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeReasonControllerService.prototype.updateUsingPUT7 = function (id, downtimeReasonDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT7.');
        }
        if (downtimeReasonDTO === null || downtimeReasonDTO === undefined) {
            throw new Error('Required parameter downtimeReasonDTO was null or undefined when calling updateUsingPUT7.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/downtime-reasons/" + encodeURIComponent(String(id)), downtimeReasonDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeReasonControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], DowntimeReasonControllerService);
    return DowntimeReasonControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/downtimeTypeReasonController.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/module/performa/api/downtimeTypeReasonController.service.ts ***!
  \*****************************************************************************/
/*! exports provided: DowntimeTypeReasonControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DowntimeTypeReasonControllerService", function() { return DowntimeTypeReasonControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DowntimeTypeReasonControllerService = /** @class */ (function () {
    function DowntimeTypeReasonControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DowntimeTypeReasonControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DowntimeTypeReasonControllerService.prototype.createUsingPOST8 = function (downtimeTypeReasonDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (downtimeTypeReasonDTO === null || downtimeTypeReasonDTO === undefined) {
            throw new Error('Required parameter downtimeTypeReasonDTO was null or undefined when calling createUsingPOST8.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/downtime-type-reasons", downtimeTypeReasonDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeTypeReasonControllerService.prototype.deleteUsingDELETE8 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE8.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/downtime-type-reasons/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeTypeReasonControllerService.prototype.findByIdUsingGET9 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET9.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-type-reasons/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeTypeReasonControllerService.prototype.getAllUsingGET9 = function (page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET9.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/downtime-type-reasons", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeTypeReasonControllerService.prototype.updateUsingPUT8 = function (id, downtimeTypeReasonDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT8.');
        }
        if (downtimeTypeReasonDTO === null || downtimeTypeReasonDTO === undefined) {
            throw new Error('Required parameter downtimeTypeReasonDTO was null or undefined when calling updateUsingPUT8.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/downtime-type-reasons/" + encodeURIComponent(String(id)), downtimeTypeReasonDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DowntimeTypeReasonControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], DowntimeTypeReasonControllerService);
    return DowntimeTypeReasonControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/employeesController.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/module/performa/api/employeesController.service.ts ***!
  \********************************************************************/
/*! exports provided: EmployeesControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesControllerService", function() { return EmployeesControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EmployeesControllerService = /** @class */ (function () {
    function EmployeesControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    EmployeesControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    EmployeesControllerService.prototype.createUsingPOST9 = function (employeeDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (employeeDTO === null || employeeDTO === undefined) {
            throw new Error('Required parameter employeeDTO was null or undefined when calling createUsingPOST9.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/employees", employeeDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EmployeesControllerService.prototype.deleteUsingDELETE9 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE9.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/employees/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EmployeesControllerService.prototype.findByEnrollAndCompanyIdUsingGET = function (enroll, companyId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (enroll === null || enroll === undefined) {
            throw new Error('Required parameter enroll was null or undefined when calling findByEnrollAndCompanyIdUsingGET.');
        }
        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling findByEnrollAndCompanyIdUsingGET.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (enroll !== undefined) {
            queryParameters = queryParameters.set('enroll', enroll);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/employees/companies/" + encodeURIComponent(String(companyId)), {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EmployeesControllerService.prototype.findByIdUsingGET10 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET10.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/employees/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EmployeesControllerService.prototype.getAllUsingGET10 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET10.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET10.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/employees", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EmployeesControllerService.prototype.updateUsingPUT9 = function (id, employeeDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT9.');
        }
        if (employeeDTO === null || employeeDTO === undefined) {
            throw new Error('Required parameter employeeDTO was null or undefined when calling updateUsingPUT9.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/employees/" + encodeURIComponent(String(id)), employeeDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EmployeesControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], EmployeesControllerService);
    return EmployeesControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/linesController.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/module/performa/api/linesController.service.ts ***!
  \****************************************************************/
/*! exports provided: LinesControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesControllerService", function() { return LinesControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LinesControllerService = /** @class */ (function () {
    function LinesControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    LinesControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    LinesControllerService.prototype.createUsingPOST10 = function (lineDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lineDTO === null || lineDTO === undefined) {
            throw new Error('Required parameter lineDTO was null or undefined when calling createUsingPOST10.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST10.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/lines", lineDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LinesControllerService.prototype.deleteUsingDELETE10 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE10.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE10.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/lines/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LinesControllerService.prototype.findByIdUsingGET11 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET11.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET11.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/lines/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LinesControllerService.prototype.getAllUsingGET11 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET11.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET11.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/lines", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LinesControllerService.prototype.updateUsingPUT10 = function (id, lineDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT10.');
        }
        if (lineDTO === null || lineDTO === undefined) {
            throw new Error('Required parameter lineDTO was null or undefined when calling updateUsingPUT10.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT10.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/lines/" + encodeURIComponent(String(id)), lineDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LinesControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], LinesControllerService);
    return LinesControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/machinesController.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module/performa/api/machinesController.service.ts ***!
  \*******************************************************************/
/*! exports provided: MachinesControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesControllerService", function() { return MachinesControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MachinesControllerService = /** @class */ (function () {
    function MachinesControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    MachinesControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    MachinesControllerService.prototype.createUsingPOST11 = function (machineDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (machineDTO === null || machineDTO === undefined) {
            throw new Error('Required parameter machineDTO was null or undefined when calling createUsingPOST11.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST11.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/machines", machineDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MachinesControllerService.prototype.deleteUsingDELETE11 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE11.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE11.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/machines/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MachinesControllerService.prototype.findByIdUsingGET12 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET12.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET12.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/machines/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MachinesControllerService.prototype.findByWorkstationUsingGET = function (idWorkstation, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idWorkstation === null || idWorkstation === undefined) {
            throw new Error('Required parameter idWorkstation was null or undefined when calling findByWorkstationUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByWorkstationUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/machines/workstations/" + encodeURIComponent(String(idWorkstation)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MachinesControllerService.prototype.getAllUsingGET12 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET12.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET12.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/machines", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MachinesControllerService.prototype.updateUsingPUT11 = function (id, machineDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT11.');
        }
        if (machineDTO === null || machineDTO === undefined) {
            throw new Error('Required parameter machineDTO was null or undefined when calling updateUsingPUT11.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT11.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/machines/" + encodeURIComponent(String(id)), machineDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MachinesControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], MachinesControllerService);
    return MachinesControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/maintenanceActionController.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/module/performa/api/maintenanceActionController.service.ts ***!
  \****************************************************************************/
/*! exports provided: MaintenanceActionControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceActionControllerService", function() { return MaintenanceActionControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MaintenanceActionControllerService = /** @class */ (function () {
    function MaintenanceActionControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    MaintenanceActionControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    MaintenanceActionControllerService.prototype.createUsingPOST12 = function (maintenanceActionDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (maintenanceActionDTO === null || maintenanceActionDTO === undefined) {
            throw new Error('Required parameter maintenanceActionDTO was null or undefined when calling createUsingPOST12.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/maintenance-action", maintenanceActionDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MaintenanceActionControllerService.prototype.deleteUsingDELETE12 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE12.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/maintenance-action/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MaintenanceActionControllerService.prototype.findByIdUsingGET13 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET13.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/maintenance-action/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MaintenanceActionControllerService.prototype.getAllUsingGET13 = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/maintenance-action", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MaintenanceActionControllerService.prototype.updateUsingPUT12 = function (id, maintenanceActionDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT12.');
        }
        if (maintenanceActionDTO === null || maintenanceActionDTO === undefined) {
            throw new Error('Required parameter maintenanceActionDTO was null or undefined when calling updateUsingPUT12.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/maintenance-action/" + encodeURIComponent(String(id)), maintenanceActionDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MaintenanceActionControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], MaintenanceActionControllerService);
    return MaintenanceActionControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/modelsController.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module/performa/api/modelsController.service.ts ***!
  \*****************************************************************/
/*! exports provided: ModelsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsControllerService", function() { return ModelsControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ModelsControllerService = /** @class */ (function () {
    function ModelsControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ModelsControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ModelsControllerService.prototype.createUsingPOST13 = function (modelDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (modelDTO === null || modelDTO === undefined) {
            throw new Error('Required parameter modelDTO was null or undefined when calling createUsingPOST13.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST13.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/models", modelDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModelsControllerService.prototype.deleteUsingDELETE13 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE13.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE13.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/models/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModelsControllerService.prototype.findByIdUsingGET14 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET14.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET14.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/models/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModelsControllerService.prototype.getAllUsingGET14 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET14.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET14.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/models", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModelsControllerService.prototype.updateUsingPUT13 = function (id, modelDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT13.');
        }
        if (modelDTO === null || modelDTO === undefined) {
            throw new Error('Required parameter modelDTO was null or undefined when calling updateUsingPUT13.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT13.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/models/" + encodeURIComponent(String(id)), modelDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModelsControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ModelsControllerService);
    return ModelsControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/modulesController.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/module/performa/api/modulesController.service.ts ***!
  \******************************************************************/
/*! exports provided: ModulesControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesControllerService", function() { return ModulesControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ModulesControllerService = /** @class */ (function () {
    function ModulesControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ModulesControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ModulesControllerService.prototype.getAllUsingGET15 = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/modules", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModulesControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], ModulesControllerService);
    return ModulesControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/movementHeadersController.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/module/performa/api/movementHeadersController.service.ts ***!
  \**************************************************************************/
/*! exports provided: MovementHeadersControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementHeadersControllerService", function() { return MovementHeadersControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MovementHeadersControllerService = /** @class */ (function () {
    function MovementHeadersControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    MovementHeadersControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    MovementHeadersControllerService.prototype.createUsingPOST14 = function (movementHeaderDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (movementHeaderDTO === null || movementHeaderDTO === undefined) {
            throw new Error('Required parameter movementHeaderDTO was null or undefined when calling createUsingPOST14.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST14.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/movement-headers", movementHeaderDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHeadersControllerService.prototype.findByRunningAndLineUsingGET = function (idLine, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idLine === null || idLine === undefined) {
            throw new Error('Required parameter idLine was null or undefined when calling findByRunningAndLineUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByRunningAndLineUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/movement-headers/lines/" + encodeURIComponent(String(idLine)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHeadersControllerService.prototype.findByUsingGET = function (status, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling findByUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/movement-headers/status/" + encodeURIComponent(String(status)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHeadersControllerService.prototype.getByProductionOrderUsingGET = function (numProductionOrder, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (numProductionOrder === null || numProductionOrder === undefined) {
            throw new Error('Required parameter numProductionOrder was null or undefined when calling getByProductionOrderUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getByProductionOrderUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/movement-headers/production-orders/" + encodeURIComponent(String(numProductionOrder)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHeadersControllerService.prototype.getUsingGET = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/movement-headers/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHeadersControllerService.prototype.updateUsingPUT14 = function (id, movementHeaderDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT14.');
        }
        if (movementHeaderDTO === null || movementHeaderDTO === undefined) {
            throw new Error('Required parameter movementHeaderDTO was null or undefined when calling updateUsingPUT14.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT14.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/movement-headers/" + encodeURIComponent(String(id)), movementHeaderDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHeadersControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], MovementHeadersControllerService);
    return MovementHeadersControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/movementHistoriesController.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/module/performa/api/movementHistoriesController.service.ts ***!
  \****************************************************************************/
/*! exports provided: MovementHistoriesControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementHistoriesControllerService", function() { return MovementHistoriesControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MovementHistoriesControllerService = /** @class */ (function () {
    function MovementHistoriesControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    MovementHistoriesControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    MovementHistoriesControllerService.prototype.createUsingPOST15 = function (movementHistoryDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (movementHistoryDTO === null || movementHistoryDTO === undefined) {
            throw new Error('Required parameter movementHistoryDTO was null or undefined when calling createUsingPOST15.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/movement-histories", movementHistoryDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHistoriesControllerService.prototype.findByMovementHeaderUsingGET = function (idMovementHeader, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idMovementHeader === null || idMovementHeader === undefined) {
            throw new Error('Required parameter idMovementHeader was null or undefined when calling findByMovementHeaderUsingGET.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/movement-histories/movement-headers/" + encodeURIComponent(String(idMovementHeader)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHistoriesControllerService.prototype.getByMovementHeaderAndWorkstationUsingGET = function (idMovementHeader, idWorkstation, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idMovementHeader === null || idMovementHeader === undefined) {
            throw new Error('Required parameter idMovementHeader was null or undefined when calling getByMovementHeaderAndWorkstationUsingGET.');
        }
        if (idWorkstation === null || idWorkstation === undefined) {
            throw new Error('Required parameter idWorkstation was null or undefined when calling getByMovementHeaderAndWorkstationUsingGET.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (idMovementHeader !== undefined) {
            queryParameters = queryParameters.set('idMovementHeader', idMovementHeader);
        }
        if (idWorkstation !== undefined) {
            queryParameters = queryParameters.set('idWorkstation', idWorkstation);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/movement-histories", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MovementHistoriesControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], MovementHistoriesControllerService);
    return MovementHistoriesControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/positionController.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module/performa/api/positionController.service.ts ***!
  \*******************************************************************/
/*! exports provided: PositionControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionControllerService", function() { return PositionControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PositionControllerService = /** @class */ (function () {
    function PositionControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    PositionControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PositionControllerService.prototype.createUsingPOST16 = function (positionDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (positionDTO === null || positionDTO === undefined) {
            throw new Error('Required parameter positionDTO was null or undefined when calling createUsingPOST16.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/positions", positionDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PositionControllerService.prototype.deleteUsingDELETE14 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE14.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/positions/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PositionControllerService.prototype.findByIdUsingGET15 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET15.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/positions/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PositionControllerService.prototype.getAllUsingGET16 = function (page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET16.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/positions", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PositionControllerService.prototype.updateUsingPUT15 = function (id, positionDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT15.');
        }
        if (positionDTO === null || positionDTO === undefined) {
            throw new Error('Required parameter positionDTO was null or undefined when calling updateUsingPUT15.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/positions/" + encodeURIComponent(String(id)), positionDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PositionControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], PositionControllerService);
    return PositionControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/productionOrdersController.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/module/performa/api/productionOrdersController.service.ts ***!
  \***************************************************************************/
/*! exports provided: ProductionOrdersControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionOrdersControllerService", function() { return ProductionOrdersControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ProductionOrdersControllerService = /** @class */ (function () {
    function ProductionOrdersControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ProductionOrdersControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ProductionOrdersControllerService.prototype.findByIdUsingGET16 = function (numOrdemProducao, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (numOrdemProducao === null || numOrdemProducao === undefined) {
            throw new Error('Required parameter numOrdemProducao was null or undefined when calling findByIdUsingGET16.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET16.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/production-orders/" + encodeURIComponent(String(numOrdemProducao)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProductionOrdersControllerService.prototype.getAllUsingGET17 = function (page, idEmployee, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET17.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET17.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/production-orders", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProductionOrdersControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ProductionOrdersControllerService);
    return ProductionOrdersControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/profilesController.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module/performa/api/profilesController.service.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilesControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesControllerService", function() { return ProfilesControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ProfilesControllerService = /** @class */ (function () {
    function ProfilesControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ProfilesControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ProfilesControllerService.prototype.createUsingPOST17 = function (profileDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (profileDTO === null || profileDTO === undefined) {
            throw new Error('Required parameter profileDTO was null or undefined when calling createUsingPOST17.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/profiles", profileDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfilesControllerService.prototype.deleteUsingDELETE15 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE15.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/profiles/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfilesControllerService.prototype.findByIdUsingGET17 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET17.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/profiles/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfilesControllerService.prototype.getAllUsingGET18 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET18.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET18.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/profiles", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfilesControllerService.prototype.updateUsingPUT16 = function (id, profileDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT16.');
        }
        if (profileDTO === null || profileDTO === undefined) {
            throw new Error('Required parameter profileDTO was null or undefined when calling updateUsingPUT16.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/profiles/" + encodeURIComponent(String(id)), profileDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfilesControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ProfilesControllerService);
    return ProfilesControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/routesController.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module/performa/api/routesController.service.ts ***!
  \*****************************************************************/
/*! exports provided: RoutesControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesControllerService", function() { return RoutesControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var RoutesControllerService = /** @class */ (function () {
    function RoutesControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    RoutesControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    RoutesControllerService.prototype.createUsingPOST18 = function (routeDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (routeDTO === null || routeDTO === undefined) {
            throw new Error('Required parameter routeDTO was null or undefined when calling createUsingPOST18.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST18.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/routes", routeDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoutesControllerService.prototype.deleteUsingDELETE16 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE16.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE16.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/routes/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoutesControllerService.prototype.findByIdUsingGET18 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET18.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET18.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/routes/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoutesControllerService.prototype.getAllUsingGET19 = function (idEmployee, page, modelName, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET19.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET19.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (modelName !== undefined) {
            queryParameters = queryParameters.set('modelName', modelName);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/routes", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoutesControllerService.prototype.updateUsingPUT17 = function (id, routeDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT17.');
        }
        if (routeDTO === null || routeDTO === undefined) {
            throw new Error('Required parameter routeDTO was null or undefined when calling updateUsingPUT17.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT17.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/routes/" + encodeURIComponent(String(id)), routeDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    RoutesControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], RoutesControllerService);
    return RoutesControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/sessionsController.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module/performa/api/sessionsController.service.ts ***!
  \*******************************************************************/
/*! exports provided: SessionsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsControllerService", function() { return SessionsControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SessionsControllerService = /** @class */ (function () {
    function SessionsControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    SessionsControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SessionsControllerService.prototype.authUsingPOST = function (authDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (authDTO === null || authDTO === undefined) {
            throw new Error('Required parameter authDTO was null or undefined when calling authUsingPOST.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/sessions", authDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SessionsControllerService.prototype.logoutUsingPOST = function (employeeDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (employeeDTO === null || employeeDTO === undefined) {
            throw new Error('Required parameter employeeDTO was null or undefined when calling logoutUsingPOST.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/sessions/logout", employeeDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SessionsControllerService.prototype.unlockEmployeeUsingPUT = function (unlockEmployeeDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (unlockEmployeeDTO === null || unlockEmployeeDTO === undefined) {
            throw new Error('Required parameter unlockEmployeeDTO was null or undefined when calling unlockEmployeeUsingPUT.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/sessions/unlock-employee", unlockEmployeeDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SessionsControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], SessionsControllerService);
    return SessionsControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/shiftsController.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module/performa/api/shiftsController.service.ts ***!
  \*****************************************************************/
/*! exports provided: ShiftsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsControllerService", function() { return ShiftsControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ShiftsControllerService = /** @class */ (function () {
    function ShiftsControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ShiftsControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ShiftsControllerService.prototype.createUsingPOST19 = function (shiftDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (shiftDTO === null || shiftDTO === undefined) {
            throw new Error('Required parameter shiftDTO was null or undefined when calling createUsingPOST19.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST19.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/shifts", shiftDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ShiftsControllerService.prototype.deleteUsingDELETE17 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE17.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE17.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/shifts/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ShiftsControllerService.prototype.findByIdUsingGET19 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET19.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET19.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/shifts/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ShiftsControllerService.prototype.getAllUsingGET20 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET20.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET20.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/shifts", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ShiftsControllerService.prototype.updateUsingPUT18 = function (id, shiftDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT18.');
        }
        if (shiftDTO === null || shiftDTO === undefined) {
            throw new Error('Required parameter shiftDTO was null or undefined when calling updateUsingPUT18.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT18.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/shifts/" + encodeURIComponent(String(id)), shiftDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ShiftsControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ShiftsControllerService);
    return ShiftsControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/technicalActionsController.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/module/performa/api/technicalActionsController.service.ts ***!
  \***************************************************************************/
/*! exports provided: TechnicalActionsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalActionsControllerService", function() { return TechnicalActionsControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TechnicalActionsControllerService = /** @class */ (function () {
    function TechnicalActionsControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TechnicalActionsControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TechnicalActionsControllerService.prototype.createUsingPOST20 = function (technicalActionsDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (technicalActionsDTO === null || technicalActionsDTO === undefined) {
            throw new Error('Required parameter technicalActionsDTO was null or undefined when calling createUsingPOST20.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/technical-actions", technicalActionsDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalActionsControllerService.prototype.deleteUsingDELETE18 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE18.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/technical-actions/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalActionsControllerService.prototype.findByIdUsingGET20 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET20.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/technical-actions/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalActionsControllerService.prototype.getAllUsingGET21 = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/technical-actions", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalActionsControllerService.prototype.updateUsingPUT19 = function (id, technicalActionsDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT19.');
        }
        if (technicalActionsDTO === null || technicalActionsDTO === undefined) {
            throw new Error('Required parameter technicalActionsDTO was null or undefined when calling updateUsingPUT19.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/technical-actions/" + encodeURIComponent(String(id)), technicalActionsDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalActionsControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], TechnicalActionsControllerService);
    return TechnicalActionsControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/technicalAnalysisController.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/module/performa/api/technicalAnalysisController.service.ts ***!
  \****************************************************************************/
/*! exports provided: TechnicalAnalysisControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalAnalysisControllerService", function() { return TechnicalAnalysisControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var TechnicalAnalysisControllerService = /** @class */ (function () {
    function TechnicalAnalysisControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TechnicalAnalysisControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TechnicalAnalysisControllerService.prototype.createUsingPOST21 = function (technicalAnalysisDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (technicalAnalysisDTO === null || technicalAnalysisDTO === undefined) {
            throw new Error('Required parameter technicalAnalysisDTO was null or undefined when calling createUsingPOST21.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/technical-analysis", technicalAnalysisDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalAnalysisControllerService.prototype.deleteUsingDELETE19 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE19.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/technical-analysis/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalAnalysisControllerService.prototype.findByIdUsingGET21 = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET21.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/technical-analysis/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalAnalysisControllerService.prototype.getAllUsingGET22 = function (idDepartment, idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idDepartment === null || idDepartment === undefined) {
            throw new Error('Required parameter idDepartment was null or undefined when calling getAllUsingGET22.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET22.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET22.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/technical-analysis/department/" + encodeURIComponent(String(idDepartment)), {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalAnalysisControllerService.prototype.updateUsingPUT20 = function (id, technicalAnalysisDTO, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT20.');
        }
        if (technicalAnalysisDTO === null || technicalAnalysisDTO === undefined) {
            throw new Error('Required parameter technicalAnalysisDTO was null or undefined when calling updateUsingPUT20.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/technical-analysis/" + encodeURIComponent(String(id)), technicalAnalysisDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TechnicalAnalysisControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], TechnicalAnalysisControllerService);
    return TechnicalAnalysisControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/api/workstationsController.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/module/performa/api/workstationsController.service.ts ***!
  \***********************************************************************/
/*! exports provided: WorkstationsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkstationsControllerService", function() { return WorkstationsControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/module/performa/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/module/performa/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/module/performa/configuration.ts");
/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var WorkstationsControllerService = /** @class */ (function () {
    function WorkstationsControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://172.100.10.22:8082/ws-performa/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    WorkstationsControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    WorkstationsControllerService.prototype.createUsingPOST22 = function (workstationDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (workstationDTO === null || workstationDTO === undefined) {
            throw new Error('Required parameter workstationDTO was null or undefined when calling createUsingPOST22.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST22.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/workstations", workstationDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    WorkstationsControllerService.prototype.deleteUsingDELETE20 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE20.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE20.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/workstations/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    WorkstationsControllerService.prototype.findByIdUsingGET22 = function (id, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET22.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET22.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/workstations/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    WorkstationsControllerService.prototype.findByLineUsingGET = function (lineId, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lineId === null || lineId === undefined) {
            throw new Error('Required parameter lineId was null or undefined when calling findByLineUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByLineUsingGET.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/workstations/lines/" + encodeURIComponent(String(lineId)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    WorkstationsControllerService.prototype.getAllUsingGET23 = function (idEmployee, page, count, order, sortProperty, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET23.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET23.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', order);
        }
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', sortProperty);
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/workstations", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    WorkstationsControllerService.prototype.updateUsingPUT21 = function (id, workstationDTO, idEmployee, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT21.');
        }
        if (workstationDTO === null || workstationDTO === undefined) {
            throw new Error('Required parameter workstationDTO was null or undefined when calling updateUsingPUT21.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT21.');
        }
        var headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/workstations/" + encodeURIComponent(String(id)), workstationDTO, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    WorkstationsControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], WorkstationsControllerService);
    return WorkstationsControllerService;
}());



/***/ }),

/***/ "./src/app/module/performa/configuration.ts":
/*!**************************************************!*\
  !*** ./src/app/module/performa/configuration.ts ***!
  \**************************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} contentTypes - the array of content types that are available for selection
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderContentType = function (contentTypes) {
        var _this = this;
        if (contentTypes.length == 0) {
            return undefined;
        }
        var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    };
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} accepts - the array of content types that are available for selection.
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderAccept = function (accepts) {
        var _this = this;
        if (accepts.length == 0) {
            return undefined;
        }
        var type = accepts.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    };
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param {string} mime - MIME (Multipurpose Internet Mail Extensions)
     * @return {boolean} True if the given MIME is JSON, false otherwise.
     */
    Configuration.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    return Configuration;
}());



/***/ }),

/***/ "./src/app/module/performa/encoder.ts":
/*!********************************************!*\
  !*** ./src/app/module/performa/encoder.ts ***!
  \********************************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
    __extends(CustomHttpUrlEncodingCodec, _super);
    function CustomHttpUrlEncodingCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeValue.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return CustomHttpUrlEncodingCodec;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"]));



/***/ }),

/***/ "./src/app/module/performa/index.ts":
/*!******************************************!*\
  !*** ./src/app/module/performa/index.ts ***!
  \******************************************/
/*! exports provided: APIS, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule, AreasControllerService, CompanyControllerService, DatabasesControllerService, DefectClassControllerService, DefectsControllerService, DepartmentsControllerService, DowntimeDetailControllerService, DowntimeHeaderControllerService, DowntimeReasonControllerService, DowntimeTypeReasonControllerService, EmployeesControllerService, LinesControllerService, MachinesControllerService, MaintenanceActionControllerService, ModelsControllerService, ModulesControllerService, MovementHeadersControllerService, MovementHistoriesControllerService, PositionControllerService, ProductionOrdersControllerService, ProfilesControllerService, RoutesControllerService, SessionsControllerService, ShiftsControllerService, TechnicalActionsControllerService, TechnicalAnalysisControllerService, WorkstationsControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/app/module/performa/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreasControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["AreasControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["CompanyControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatabasesControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["DatabasesControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefectClassControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["DefectClassControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefectsControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["DefectsControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentsControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["DepartmentsControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowntimeDetailControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["DowntimeDetailControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowntimeHeaderControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["DowntimeHeaderControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowntimeReasonControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["DowntimeReasonControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowntimeTypeReasonControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["DowntimeTypeReasonControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeesControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["EmployeesControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinesControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["LinesControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MachinesControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["MachinesControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaintenanceActionControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["MaintenanceActionControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelsControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ModelsControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModulesControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ModulesControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovementHeadersControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["MovementHeadersControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovementHistoriesControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["MovementHistoriesControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositionControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["PositionControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductionOrdersControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ProductionOrdersControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ProfilesControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutesControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["RoutesControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionsControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["SessionsControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShiftsControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ShiftsControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TechnicalActionsControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["TechnicalActionsControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TechnicalAnalysisControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["TechnicalAnalysisControllerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkstationsControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["WorkstationsControllerService"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/app/module/performa/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/module/performa/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.module */ "./src/app/module/performa/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_3__["ApiModule"]; });







/***/ }),

/***/ "./src/app/module/performa/variables.ts":
/*!**********************************************!*\
  !*** ./src/app/module/performa/variables.ts ***!
  \**********************************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/**
 * Classe com métodos que são reaproveitados em no projeto
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
    * retorna o mês por extenso.
    * @param date
    * @argument number 1-12
    * @returns {boolean}
    */
    Utils.mesPorExtenso = function (month) {
        var m;
        switch (Number(month.replace(/^0*/, ''))) {
            case 1: {
                m = 'janeiro';
                break;
            }
            case 2: {
                m = 'fevereiro';
                break;
            }
            case 3: {
                m = 'março';
                break;
            }
            case 4: {
                m = 'abril';
                break;
            }
            case 5: {
                m = 'maio';
                break;
            }
            case 6: {
                m = 'junho';
                break;
            }
            case 7: {
                m = 'julho';
                break;
            }
            case 8: {
                m = 'agosto';
                break;
            }
            case 9: {
                m = 'setembro';
                break;
            }
            case 10: {
                m = 'outubro';
                break;
            }
            case 11: {
                m = 'novembro';
                break;
            }
            case 12: {
                m = 'dezembro';
                break;
            }
            default: {
                m = 'Não é um mês válido!';
                break;
            }
        }
        return m;
    };
    /**
     * retorna true se o cnpj informado for válido.
     * @param cnpj
     * @returns {boolean}
     */
    Utils.validaCNPJ = function (cnpj) {
        console.log(cnpj);
        // Primeiro dígito:
        // Uma sequência que é  mascara de pesos publicada para validação.
        var sequence = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        var sumArray = new Array(sequence.length);
        var cnpjArray = cnpj.split('');
        // console.log(cnpjArray);
        // Multiplica cada dígito do cnpj pelo peso que se encontra na mesma posição.
        // Ex:13.347.016/0001-VV Sequencia de Pesos: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        // A multiplicação seria 1*5, 3*4,  3*3 ...
        for (var i = 0; i < sequence.length; i++) {
            var value = Number(cnpjArray[i]);
            sumArray[i] = sequence[i] * value;
        }
        // Soma todas as posições
        var totalSumArray = Utils.somaTodasPosicoesdeUmArray(sumArray);
        // Obtem o resto da divisão por 11 e subtrae base 11 do restante da divisão.
        var result = 11 - (totalSumArray / 11);
        // Adiciona o digito encontrado ao CNPJ.
        cnpjArray.push(result.toString());
        // Segundo dígito:
        var sequenceSecondDigit = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        var sumArray2 = new Array(sequenceSecondDigit.length);
        for (var i = 0; i < sequenceSecondDigit.length; i++) {
            var value = Number(cnpjArray[i]);
            sumArray2[i] = sequenceSecondDigit[i] * value;
        }
        totalSumArray = Utils.somaTodasPosicoesdeUmArray(sumArray2);
        result = 11 - (totalSumArray / 11);
        cnpjArray.push(result.toString());
        var valid = cnpj === cnpjArray.toString() ? true : false;
        console.log(valid);
        return valid;
    };
    /**
    * retorna resultado da soma de todas as posições de um array.
    * @param sumArray
    * @returns {number}
    */
    Utils.somaTodasPosicoesdeUmArray = function (sumArray) {
        var result = 0;
        sumArray.forEach(function (element) {
            result += element;
        });
        return result;
    };
    /**
    * retorna resultado da soma de todas as posições de um array.
    * @param string
    * @returns {string}
    */
    Utils.formatPhoneNumber = function (v) {
        v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
        v = v.substring(0, 11); // Não permite que ultrapasse o número máximo de caracteres
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
        v = v.replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
        return v;
    };
    Utils.extractValue = function (row, cell) {
        var result = row;
        var properties = cell.split('.');
        properties.forEach(function (property) {
            result = result[property] ? result[property] : result;
        });
        return result;
    };
    return Utils;
}());



/***/ })

}]);
//# sourceMappingURL=app-core-login-login-module.js.map