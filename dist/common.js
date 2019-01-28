(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/containers/rastreadores/rastreadores.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containers/rastreadores/rastreadores.service.ts ***!
  \*****************************************************************/
/*! exports provided: RastreadoresControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RastreadoresControllerService", function() { return RastreadoresControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment.dev */ "./src/environments/environment.dev.ts");
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



var RastreadoresControllerService = /** @class */ (function () {
    function RastreadoresControllerService(httpClient) {
        this.httpClient = httpClient;
    }
    RastreadoresControllerService.prototype.getAll = function () {
        // let username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh'
        // let password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj'  
        var token = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var formData = new URLSearchParams();
        // append your data
        //formData.set('username', <any>login);
        //formData.set('password', <any>senha);
        formData.set('grant_type', 'password');
        console.log(formData.getAll);
        console.log(formData.toString());
        return this.httpClient.get(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/trackers/alltrackers', httpOptions);
    };
    RastreadoresControllerService.prototype.registerRastreador = function (rastreador) {
        var token = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var formData = new URLSearchParams();
        // append your data
        formData.set('serialKey', rastreador.serialKey);
        formData.set('notes', rastreador.notes);
        formData.set('trackerModel', rastreador.trackerModel);
        console.log(formData.getAll);
        console.log(formData.toString());
        return this.httpClient.post(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/trackers/registertracker', formData.toString(), httpOptions);
    };
    RastreadoresControllerService.prototype.updateRastreador = function (rastreador) {
        var token = localStorage.getItem('token');
        console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var formData = new URLSearchParams();
        // append your data
        formData.set('serialKey', rastreador.serialKey);
        formData.set('notes', rastreador.notes);
        formData.set('trackerModel', rastreador.trackerModel);
        console.log(formData.getAll);
        console.log(formData.toString());
        return this.httpClient.put(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/trackers/' + rastreador._id, formData.toString(), httpOptions);
    };
    RastreadoresControllerService.prototype.deleteRastreador = function (ratreadores) {
        var token = localStorage.getItem('token');
        console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        console.log(ratreadores);
        return this.httpClient.delete(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/trackers/' + ratreadores.id, httpOptions);
    };
    RastreadoresControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RastreadoresControllerService);
    return RastreadoresControllerService;
}());



/***/ }),

/***/ "./src/app/containers/transports/transports.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/containers/transports/transports.service.ts ***!
  \*************************************************************/
/*! exports provided: TransportControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportControllerService", function() { return TransportControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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




var TransportControllerService = /** @class */ (function () {
    function TransportControllerService(httpClient, snackBar) {
        this.httpClient = httpClient;
        this.snackBar = snackBar;
    }
    TransportControllerService.prototype.getAll = function () {
        // let username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh'
        // let password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj'  
        var token = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var formData = new URLSearchParams();
        // append your data
        //formData.set('username', <any>login);
        //formData.set('password', <any>senha);
        formData.set('grant_type', 'password');
        console.log(formData.getAll);
        console.log(formData.toString());
        return this.httpClient.get(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.transports + '/transports/alltransports', httpOptions);
    };
    TransportControllerService.prototype.registerTransport = function (login) {
        // let username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh'
        // let password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj'  
        var token = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var formData = new URLSearchParams();
        // append your data
        //formData.set('username', <any>login);
        //formData.set('password', <any>senha);
        formData.set('grant_type', 'password');
        console.log(formData.getAll);
        console.log(formData.toString());
        return this.httpClient.get('https://lupa-v1.herokuapp.com/auth/v1/transports/alltransports', httpOptions);
    };
    TransportControllerService.prototype.updateTransport = function (transport) {
        var token = localStorage.getItem('token');
        console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var formData = new URLSearchParams();
        // append your data
        formData.set('type', transport.type);
        formData.set('vehiclePlate', transport.vehiclePlate);
        formData.set('capacity', transport.capacity);
        formData.set('thirdCompany', transport.thirdCompany);
        console.log(formData.getAll);
        console.log(formData.toString());
        console.log(httpOptions);
        console.log(transport._id);
        //console.log(transport.idRastreador);
        // if(transport.idRastreador !== null){
        //     const formDataRastreador = new URLSearchParams();
        //     // append your data
        //     formDataRastreador.set('trackerSerial', transport.idRastreador);
        //     this.httpClient.put( environment.origin.transports + '/transports/linktracker/' + transport._id, formDataRastreador.toString(), httpOptions).
        //         subscribe(
        //             success => {
        //                 //  this.snackBar.open('Transporte atualizado com sucesso!', 'OK', {
        //                 //      duration: 10000
        //                 //  });
        //                 // Reload the table after the post
        //                 console.log('Rastreador vinculado: ' + transport.idRastreador);
        //             },
        //             error => {  
        //                 console.log(error.error.error_description);
        //                 //   this.snackBar.open(error.error.error_description, 'OK', {
        //                 //       duration: 10000
        //                 //    });
        //                 console.log(error);
        //                 return 'error';
        //             });
        //     console.log(transport.idRastreador);            
        // }
        return this.httpClient.put(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.transports + '/transports/' + transport._id, formData.toString(), httpOptions);
    };
    TransportControllerService.prototype.deleteTransport = function (transport) {
        var token = localStorage.getItem('token');
        console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        console.log(transport);
        return this.httpClient.delete(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.transports + '/transports/' + transport.id, httpOptions);
    };
    TransportControllerService.prototype.removerRastreador = function (transport) {
        var token = localStorage.getItem('token');
        console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var formData = new URLSearchParams();
        return this.httpClient.put(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/transports/unlinktracker/' + transport.id, formData, httpOptions);
    };
    TransportControllerService.prototype.adicionarRastreador = function (transport) {
        var token = localStorage.getItem('token');
        console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        console.log(transport);
        var formData = new URLSearchParams();
        formData.set('trackerSerial', transport.trackerSerial);
        return this.httpClient.put(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/transports/linktracker/' + transport.id, formData.toString(), httpOptions);
    };
    TransportControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], TransportControllerService);
    return TransportControllerService;
}());



/***/ }),

/***/ "./src/app/directives/currency/currency.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/directives/currency/currency.directive.ts ***!
  \***********************************************************/
/*! exports provided: CurrencyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyDirective", function() { return CurrencyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyDirective = /** @class */ (function () {
    function CurrencyDirective(_element) {
        this._element = _element;
    }
    // @Output() value: string;
    CurrencyDirective.prototype.onKeyDown = function (e) {
        // console.log(e);
        // Allow: backspace, delete, tab, escape, enter
        // No accept point [110, 190]
        // No accept comma [188, 108]
        if (this.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)
        // Allow: ,
        // (e.keyCode === 188 || e.keyCode === 108)
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    CurrencyDirective.prototype.onKeyUp = function (e) {
        var num = e.target.value.replace(/\D/, '');
        var regex = /([0-9]*)([0-9]{1}$)/;
        var result = num.replace(regex, '$1,$2');
        this._element.nativeElement.value = result;
    };
    CurrencyDirective.prototype.ngOnInit = function () {
        // formatação inicial
        var value = this._element.nativeElement.value;
        this._element.nativeElement.value = value.replace('.', ',');
    };
    CurrencyDirective.prototype.inArray = function (elem, arr) {
        return arr == null ? -1 : arr.indexOf.call(arr, elem);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CurrencyDirective.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CurrencyDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CurrencyDirective.prototype, "onKeyUp", null);
    CurrencyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[currency]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CurrencyDirective);
    return CurrencyDirective;
}());



/***/ }),

/***/ "./src/app/directives/directive.module.ts":
/*!************************************************!*\
  !*** ./src/app/directives/directive.module.ts ***!
  \************************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _integer_integer_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integer/integer.directive */ "./src/app/directives/integer/integer.directive.ts");
/* harmony import */ var _currency_currency_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency/currency.directive */ "./src/app/directives/currency/currency.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule_1 = DirectiveModule;
    DirectiveModule.forRoot = function () {
        return {
            ngModule: DirectiveModule_1,
            providers: [],
        };
    };
    var DirectiveModule_1;
    DirectiveModule = DirectiveModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [_integer_integer_directive__WEBPACK_IMPORTED_MODULE_1__["IntegerDirective"],
                _currency_currency_directive__WEBPACK_IMPORTED_MODULE_2__["CurrencyDirective"]],
            exports: [_integer_integer_directive__WEBPACK_IMPORTED_MODULE_1__["IntegerDirective"],
                _currency_currency_directive__WEBPACK_IMPORTED_MODULE_2__["CurrencyDirective"]],
        })
    ], DirectiveModule);
    return DirectiveModule;
}());



/***/ }),

/***/ "./src/app/directives/integer/integer.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/integer/integer.directive.ts ***!
  \*********************************************************/
/*! exports provided: IntegerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerDirective", function() { return IntegerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntegerDirective = /** @class */ (function () {
    function IntegerDirective(_element) {
        this._element = _element;
    }
    IntegerDirective.prototype.onKey = function (e) {
        // Allow: backspace, delete, tab, escape, enter
        // No accept point [110, 190]
        if (this.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    IntegerDirective.prototype.ngOnInit = function () {
    };
    IntegerDirective.prototype.inArray = function (elem, arr) {
        return arr == null ? -1 : arr.indexOf.call(arr, elem);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IntegerDirective.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], IntegerDirective.prototype, "onKey", null);
    IntegerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[integer]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], IntegerDirective);
    return IntegerDirective;
}());



/***/ }),

/***/ "./src/app/pipes/phone/phone.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/phone/phone.pipe.ts ***!
  \*******************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// @NgModule({
//     imports:        [PhonePipe],
// })
var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (v) {
        if (!v) {
            return '';
        }
        v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
        v = v.substring(0, 11); // Não permite que ultrapasse o número máximo de caracteres
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
        v = v.replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
        return v;
    };
    PhonePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'phone' })
    ], PhonePipe);
    return PhonePipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipe.module.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/pipe.module.ts ***!
  \**************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _phone_phone_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone/phone.pipe */ "./src/app/pipes/phone/phone.pipe.ts");
/* harmony import */ var _reticence_reticence_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reticence/reticence.pipe */ "./src/app/pipes/reticence/reticence.pipe.ts");
/* harmony import */ var _size_size_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./size/size.pipe */ "./src/app/pipes/size/size.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule_1 = PipeModule;
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    };
    var PipeModule_1;
    PipeModule = PipeModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _phone_phone_pipe__WEBPACK_IMPORTED_MODULE_1__["PhonePipe"],
                _reticence_reticence_pipe__WEBPACK_IMPORTED_MODULE_2__["ReticencePipe"],
                _size_size_pipe__WEBPACK_IMPORTED_MODULE_3__["SizePipe"]
            ],
            exports: [
                _phone_phone_pipe__WEBPACK_IMPORTED_MODULE_1__["PhonePipe"],
                _reticence_reticence_pipe__WEBPACK_IMPORTED_MODULE_2__["ReticencePipe"],
                _size_size_pipe__WEBPACK_IMPORTED_MODULE_3__["SizePipe"]
            ],
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/pipes/reticence/reticence.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/reticence/reticence.pipe.ts ***!
  \***************************************************/
/*! exports provided: ReticencePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReticencePipe", function() { return ReticencePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReticencePipe = /** @class */ (function () {
    function ReticencePipe() {
    }
    ReticencePipe.prototype.transform = function (v, n) {
        if (n === void 0) { n = 20; }
        if (!v) {
            return '';
        }
        var reticence = '';
        if (v.length > n) {
            reticence = '...';
        }
        return v.slice(0, n) + reticence;
    };
    ReticencePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'reticence' })
    ], ReticencePipe);
    return ReticencePipe;
}());



/***/ }),

/***/ "./src/app/pipes/size/size.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/size/size.pipe.ts ***!
  \*****************************************/
/*! exports provided: SizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizePipe", function() { return SizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
var SizePipe = /** @class */ (function () {
    function SizePipe() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    SizePipe.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return '?';
        }
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    SizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'size' })
    ], SizePipe);
    return SizePipe;
}());



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
//# sourceMappingURL=common.js.map