(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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



/***/ })

}]);
//# sourceMappingURL=common.js.map