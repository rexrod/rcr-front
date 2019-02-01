(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-transports-transports-module"],{

/***/ "./src/app/containers/transports/transport-create-update/transport-create-update.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/containers/transports/transport-create-update/transport-create-update.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<fury-dialog-panel>\n\n    <div class=\"form-content\">\n        <div class=\"form-title\" header-content>\n            <span>Cadastrar Transportes</span>\n        </div>\n        <div class=\"form-fields\">\n            <form [formGroup]=\"form\">\n                <div class=\"row\" style=\"display: none\"> \n                    <div class=\"id field\" >\n                        <mat-form-field>\n                            <input matInput placeholder=\"Id\" pattern=\"^(?!\\s*$).+\" formControlName=\"_id\" id=\"_id\" />\n                        </mat-form-field>                   \n                    </div>\n                </div>\n                <div class=\"row\"> \n                    <div class=\"name field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Tipo de Veículo\" pattern=\"^(?!\\s*$).+\" formControlName=\"type\" id=\"type\" required />\n                        </mat-form-field>                   \n                    </div>\n                </div>\n                <div class=\"row\"> \n                    <div class=\"vehiclePlate field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Placa do veículo\" pattern=\"^(?!\\s*$).+\" formControlName=\"vehiclePlate\" id=\"vehiclePlate\" required />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\"> \n                    <div class=\"capacity field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Capacidade\" pattern=\"^(?!\\s*$).+\" formControlName=\"capacity\" id=\"capacity\" required />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\"> \n                    <div class=\"thirdCompany field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Empresa\" pattern=\"^(?!\\s*$).+\" formControlName=\"thirdCompany\" id=\"thirdCompany\" required />\n                        </mat-form-field>\n                    </div>\n                </div>   \n                <div class=\"row\" *ngIf=\"isUpdateMode()\">\n                    <!-- Setor -->\n                    <div class=\"idRastreador field\">\n                        <mat-form-field>\n                            <mat-select placeholder=\"Adicione um rastreador\" formControlName=\"idRastreador\" id=\"idRastreador\">\n                                <mat-option *ngFor=\"let rastreador of rastreadores\" [value]=\"rastreador.serialKey\">\n                                    {{rastreador.serialKey}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <!-- <div class=\"field\"></div> -->\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"footer-content\" footer-content>\n        <button *ngIf=\"isCreateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" (click)=\"saveCustom()\">SALVAR</button>\n        <button *ngIf=\"isUpdateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" (click)=\"save()\" style=\"background-color: #FFC937\">ATUALIZAR</button>\n    </div>\n\n</fury-dialog-panel>\n\n"

/***/ }),

/***/ "./src/app/containers/transports/transport-create-update/transport-create-update.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/containers/transports/transport-create-update/transport-create-update.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content .form-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .dialog-content .form-content .form-title {\n    font-size: 120%;\n    color: #000000;\n    font-weight: bold;\n    text-align: center;\n    height: 20%;\n    align-items: center;\n    display: flex;\n    justify-content: center; }\n  .dialog-content .form-content .form-fields {\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: 80%; }\n  .dialog-content .form-content .form-fields form {\n      height: 100%;\n      width: 100%; }\n  .dialog-content .form-content .form-fields form .row {\n        display: flex;\n        padding-left: 10px;\n        padding-right: 10px;\n        flex-wrap: wrap; }\n  .dialog-content .form-content .form-fields form .field {\n        display: flex;\n        justify-content: center;\n        flex: 1 .5;\n        margin-right: 10px;\n        margin-left: 10px; }\n  .dialog-content .form-content .form-fields form .id,\n      .dialog-content .form-content .form-fields form .name,\n      .dialog-content .form-content .form-fields form .vehiclePlate\n.type,\n      .dialog-content .form-content .form-fields form .capacity,\n      .dialog-content .form-content .form-fields form .vehiclePlate,\n      .dialog-content .form-content .form-fields form .thirdCompany,\n      .dialog-content .form-content .form-fields form .idRastreador {\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .dialog-content .form-content .form-fields form .id mat-form-field,\n        .dialog-content .form-content .form-fields form .name mat-form-field,\n        .dialog-content .form-content .form-fields form .vehiclePlate\n.type mat-form-field,\n        .dialog-content .form-content .form-fields form .capacity mat-form-field,\n        .dialog-content .form-content .form-fields form .vehiclePlate mat-form-field,\n        .dialog-content .form-content .form-fields form .thirdCompany mat-form-field,\n        .dialog-content .form-content .form-fields form .idRastreador mat-form-field {\n          flex: .4 1 auto; }\n  .dialog-footer {\n  display: flex;\n  padding-right: 24px; }\n  .dialog-footer .footer-content {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: flex-end; }\n  .dialog-footer .footer-content .btn-save {\n      flex: .2 1 0%;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n      font-size: 100%;\n      background-color: #FFC937;\n      color: white;\n      font-weight: lighter; }\n  @media screen and (max-height: 400px) {\n  .btn-save {\n    line-height: 24px !important; } }\n  @media screen and (max-width: 600px), (max-height: 600px) {\n  .area-panel {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy90cmFuc3BvcnRzL3RyYW5zcG9ydC1jcmVhdGUtdXBkYXRlL3RyYW5zcG9ydC1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBRVEsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBMERmO0VBOURMO0lBT1ksZ0JBQWU7SUFDZixlQVZRO0lBV1Isa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLGNBQWE7SUFDYix3QkFBdUIsRUFDMUI7RUFmVDtJQWtCWSxlQUFjO0lBQ2Qsb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixjQUFhO0lBQ2IsWUFBVyxFQXVDZDtFQTdEVDtNQXlCZ0IsYUFBWTtNQUNaLFlBQVcsRUFrQ2Q7RUE1RGI7UUE2Qm9CLGNBQWE7UUFDYixtQkFBa0I7UUFDbEIsb0JBQW1CO1FBQ25CLGdCQUFlLEVBQ2xCO0VBakNqQjtRQW9Db0IsY0FBYTtRQUNiLHdCQUF1QjtRQUN2QixXQUFVO1FBQ1YsbUJBQWtCO1FBQ2xCLGtCQUFpQixFQUNwQjtFQXpDakI7Ozs7Ozs7O1FBbURvQixjQUFhO1FBQ2Isd0JBQXVCO1FBQ3ZCLG9CQUFtQixFQU10QjtFQTNEakI7Ozs7Ozs7O1VBeUR3QixnQkFBZSxFQUNsQjtFQVFyQjtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFpQnRCO0VBbkJEO0lBS1EsY0FBYTtJQUNiLGVBQWM7SUFDZCxvQkFBbUI7SUFDbkIsMEJBQXlCLEVBVTVCO0VBbEJMO01BV1ksY0FBYTtNQUNiLHlDQUF3QztNQUN4QyxnQkFBZTtNQUNmLDBCQUF5QjtNQUN6QixhQUFZO01BQ1oscUJBQW9CLEVBQ3ZCO0VBSVQ7RUFDSTtJQUNJLDZCQUE0QixFQUMvQixFQUFBO0VBR0w7RUFFSTtJQUNJLDRCQUEyQjtJQUMzQix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3RyYW5zcG9ydHMvdHJhbnNwb3J0LWNyZWF0ZS11cGRhdGUvdHJhbnNwb3J0LWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4vLyRjb2xvci1mb250OiBtYXAtZ2V0KCRtYXA6ICRtYXQtc2dtLXByaW1hcnksICRrZXk6IDUwMCk7XG4kY29sb3ItZm9udDogIzAwMDAwMDtcblxuLmRpYWxvZy1jb250ZW50IHtcbiAgICAuZm9ybS1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIC5mb3JtLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZm9udDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tZmllbGRzIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xuXG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgLjU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5pZCxcbiAgICAgICAgICAgICAgICAubmFtZSxcbiAgICAgICAgICAgICAgICAudmVoaWNsZVBsYXRlXG4gICAgICAgICAgICAgICAgLnR5cGUsXG4gICAgICAgICAgICAgICAgLmNhcGFjaXR5LFxuICAgICAgICAgICAgICAgIC52ZWhpY2xlUGxhdGUsXG4gICAgICAgICAgICAgICAgLnRoaXJkQ29tcGFueSwgXG4gICAgICAgICAgICAgICAgLmlkUmFzdHJlYWRvciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAvL2hlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAuNCAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmRpYWxvZy1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcblxuICAgIC5mb290ZXItY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIC5idG4tc2F2ZSB7XG4gICAgICAgICAgICBmbGV4OiAuMiAxIDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM5Mzc7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQwMHB4KSB7XG4gICAgLmJ0bi1zYXZlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSxcbihtYXgtaGVpZ2h0IDogNjAwcHgpIHtcbiAgICAuYXJlYS1wYW5lbCB7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/transports/transport-create-update/transport-create-update.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/containers/transports/transport-create-update/transport-create-update.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TransportCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportCreateUpdateComponent", function() { return TransportCreateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var app_containers_rastreadores_rastreadores_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/containers/rastreadores/rastreadores.service */ "./src/app/containers/rastreadores/rastreadores.service.ts");
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







var TransportCreateUpdateComponent = /** @class */ (function () {
    function TransportCreateUpdateComponent(defaults, http, snackBar, dialogRef, apiRastreador, 
    //private apiTransport: TransportControllerService,
    fb) {
        var _this = this;
        this.defaults = defaults;
        this.http = http;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.apiRastreador = apiRastreador;
        this.fb = fb;
        this.mode = 'create';
        this.progress = false;
        this.hideElement = true;
        this.apiRastreador.getAll().
            subscribe(function (rast) {
            // if(obj.myProperty !== undefined) {
            // }
            _this.rastreadores = [];
            for (var i = 0; i < rast.data.length; i++) {
                console.log(rast.data[i]);
                if (!rast.data[i].vehicle) {
                    _this.rastreadores.push(rast.data[i]);
                }
            }
            //this.rastreadores =  <Rastreador[]>rast.data.find(x => x.vehicle === undefined );
            //this.rastreadores = <Rastreador[]>rast.data;
        });
        // load the transport
        //     this.apiTransport. getAllUsingGET1().
        //     subscribe(noti => {
        //                       this.transport =  <Transport[]>noti;
        // });
        // instance the form group for mode Update and Create
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            vehiclePlate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            thirdCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idRastreador: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    TransportCreateUpdateComponent.prototype.ngOnInit = function () {
        if (this.defaults) { // <-- do you have data from the main screen?
            this.mode = 'update';
            // Used in the Update Mode to fill the fields
            console.log(this.fb);
            this.form = this.fb.group({
                _id: [this.defaults._id || null],
                type: [this.defaults.type],
                vehiclePlate: [this.defaults.vehiclePlate],
                capacity: [this.defaults.capacity],
                thirdCompany: [this.defaults.thirdCompany],
                idRastreador: [this.defaults.idRastreador],
            });
        }
        else { // <-- don't have data :( = Mode Create
            this.defaults = {}; // takes blank :)
        }
    };
    TransportCreateUpdateComponent.prototype.save = function () {
        if (this.mode === 'create') {
            this.createTransport();
        }
        else if (this.mode === 'update') {
            this.updateTransport();
        }
    };
    TransportCreateUpdateComponent.prototype.saveCustom = function () {
        var _this = this;
        if (this.mode === 'create') {
            // UPLOAD
            this.progress = true;
            this.upload()
                .then(function (success) {
                // console.log(success);
                //this.form.get('picture').setValue(success);
                _this.progress = false;
                _this.createTransport();
            })
                .catch(function (error) {
                // const _error = JSON.parse(error.error);
                // this.snackBar.open(_error[0].title ? _error[0].title : 'Erro ao tentar criar o transporte.',
                //   'OK', {
                //     duration: 10000
                //   });
                console.log(error);
                _this.progress = false;
            });
        }
        else if (this.mode === 'update') {
            this.updateTransport();
        }
    };
    TransportCreateUpdateComponent.prototype.createTransport = function () {
        // send the color as object instead of value
        var transport = this.form.value;
        console.log(transport);
        this.dialogRef.close(transport);
    };
    TransportCreateUpdateComponent.prototype.updateTransport = function () {
        // send the color as object instead of value
        var transport = this.form.value;
        transport.id = this.defaults.id;
        this.dialogRef.close(transport);
    };
    TransportCreateUpdateComponent.prototype.isCreateMode = function () {
        return this.mode === 'create';
    };
    TransportCreateUpdateComponent.prototype.isUpdateMode = function () {
        return this.mode === 'update';
    };
    TransportCreateUpdateComponent.prototype.upload = function () {
        // const promise = this.http.post(environment.origin.parts + '/parts/upload', _uploadData, { responseType: 'text' })
        //   .toPromise();
        var token = localStorage.getItem('token');
        console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var transport = this.form.value;
        var formData = new URLSearchParams();
        // append your data
        formData.set('type', transport.type);
        formData.set('vehiclePlate', transport.vehiclePlate);
        formData.set('capacity', transport.capacity);
        formData.set('thirdCompany', transport.thirdCompany);
        console.log(formData.getAll);
        console.log(formData.toString());
        console.log(httpOptions);
        var promise = this.http.post(environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].origin.transports + '/transports/registertransport', formData.toString(), httpOptions).toPromise();
        return promise;
    };
    TransportCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-transport-create-update',
            template: __webpack_require__(/*! ./transport-create-update.component.html */ "./src/app/containers/transports/transport-create-update/transport-create-update.component.html"),
            styles: [__webpack_require__(/*! ./transport-create-update.component.scss */ "./src/app/containers/transports/transport-create-update/transport-create-update.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [app_containers_rastreadores_rastreadores_service__WEBPACK_IMPORTED_MODULE_5__["RastreadoresControllerService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            app_containers_rastreadores_rastreadores_service__WEBPACK_IMPORTED_MODULE_5__["RastreadoresControllerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TransportCreateUpdateComponent);
    return TransportCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/containers/transports/transport-create-update/transport-create-update.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/containers/transports/transport-create-update/transport-create-update.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: TransportCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportCreateUpdateModule", function() { return TransportCreateUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _transport_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transport-create-update.component */ "./src/app/containers/transports/transport-create-update/transport-create-update.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TransportCreateUpdateModule = /** @class */ (function () {
    function TransportCreateUpdateModule() {
    }
    TransportCreateUpdateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__["DialogPanelModule"]
            ],
            declarations: [_transport_create_update_component__WEBPACK_IMPORTED_MODULE_5__["TransportCreateUpdateComponent"]],
            entryComponents: [_transport_create_update_component__WEBPACK_IMPORTED_MODULE_5__["TransportCreateUpdateComponent"]],
            exports: [_transport_create_update_component__WEBPACK_IMPORTED_MODULE_5__["TransportCreateUpdateComponent"]]
        })
    ], TransportCreateUpdateModule);
    return TransportCreateUpdateModule;
}());



/***/ }),

/***/ "./src/app/containers/transports/transports-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/containers/transports/transports-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TransportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportsRoutingModule", function() { return TransportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transports.component */ "./src/app/containers/transports/transports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _transports_component__WEBPACK_IMPORTED_MODULE_2__["TransportsComponent"]
    }
];
var TransportsRoutingModule = /** @class */ (function () {
    function TransportsRoutingModule() {
    }
    TransportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TransportsRoutingModule);
    return TransportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/transports/transports.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/containers/transports/transports.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"background-transport\">\n    <div id=\"conteiner\">\n      <div id=\"card\">\n        <div id=\"table-component\">\n          <!-- TABLE FILTER -->\n          <div id=\"tfilter\">\n            <div id=\"title\">\n              <span>Transportes</span>\n            </div>\n            <div id=\"input-filter\">\n              <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\" fxLayout=\"row\"></fury-list>\n            </div>\n            <div id=\"add\">\n              <button mat-mini-fab matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\" style=\"background-color: #FFC937\">\n                <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n              </button>\n            </div>\n          </div>\n          <!-- TABLE HEADER -->\n          <!-- The header is separate so you do not lose the filters or the sorting and keep the layout-->\n          <div id=\"tmaster\">\n            <!-- <div id=\"thead\" matSort> -->\n              <!-- <div class=\"table-header\">\n                <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\" \n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                  {{column.name | uppercase}}\n                  {{column.name}}\n                </div>\n              </div>\n            </div>\n             -->\n\n            <!-- TABLE BODY -->\n            <div id=\"tbody\">\n              <!-- Note: Mat-table does not compile without mat-cell -->\n              <mat-table #table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\n              <!-- fullName Column -->\n              <ng-container *ngFor=\"let column of columns\">\n                <ng-container *ngIf=\"column.isModelProperty\" [matColumnDef]=\"column.property\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.name }}</mat-header-cell>\n                  <ng-container *ngIf=\"column.name == 'Rastreador'; else elseBlock\">\n                    <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"left\">\n                      <ng-container *ngIf=\"extractValue(row,column.cellContent,column.property);else elseBlock1\">\n                        <button matTooltip=\"Remover Rastreador\" [matTooltipPosition]=\"'above'\" (click)=\"removerRastreador(row)\"  \n                          class=\"btn-stroked-tracker-remove no-shadow\">Remover\n                        </button>\n                      </ng-container>  \n                      <ng-template #elseBlock1>\n                          <button matTooltip=\"Adicionar Rastreador\" [matTooltipPosition]=\"'above'\" (click)=\"adicionarRastreador(row)\"  \n                          class=\"btn-stroked-tracker-add no-shadow\">Adicionar\n                           <!-- <mat-icon aria-label=\"Editar\">edit</mat-icon> -->\n                           <!-- <mat-icon aria-label=\"Editar\">edit</mat-icon> -->\n                         </button>\n                        <!-- <mat-icon matTooltip=\"Usuário Inativo\" aria-label=\"Status\">check_box_outline_blank</mat-icon> -->\n                      </ng-template>\n                    </mat-cell>\n                </ng-container>\n                <ng-template #elseBlock>\n                  <mat-cell  *matCellDef=\"let row\" fxLayoutAlign=\"left\">\n                    <!-- <span class=\"fury-mobile-label\">{{ column.name }}</span> -->\n                    {{ extractValue(row,column.cellContent,column.property) }}\n                  </mat-cell>\n                </ng-template>\n                </ng-container>\n              </ng-container>\n\n                 <!-- Expanded Row -->\n                  <!-- \n               <ng-container matColumnDef=\"expandedDetail\">\n                <mat-cell *matCellDef=\"let row\" [attr.colspan]=\"visibleColumns.length\">\n                    <div class=\"image\">\n                        <div class=\"element-detail\">\n                            <div class=\"picture\">\n                              <img [src]=\"urlImg(row.picture)\" *ngIf=\"urlImg\">\n                            </div>\n                          </div>\n                    </div>\n                  <div class=\"fields\">\n                    <div class=\"element-detail\">\n                      <label>Observação:</label>\n                      <span>{{ row.observation }}</span>\n                    </div>\n                  </div>\n                </mat-cell>\n              </ng-container>\n              -->\n\n                <!-- actions Column -->\n                <ng-container matColumnDef=\"actions\">\n                  <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                    <button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                      <mat-icon aria-label=\"Editar\">edit</mat-icon>\n                    </button>\n                    <button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                      <mat-icon aria-label=\"Deletar\">delete</mat-icon>\n                    </button>\n                  </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: visibleColumns;\" class=\"clickable\"></mat-row>\n\n                <!-- Expanded Row -->\n                <!--\n                <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: visibleColumns;\" matRipple class=\"element-row\" [class.expanded]=\"expandedElement == row\"\n                  (click)=\"toggleRow(row)\">\n                </mat-row>\n                <mat-row *matRowDef=\"let row; columns: ['expandedDetail'];\" [@detailExpand]=\"row == expandedElement ? 'expanded' : 'collapsed'\"\n                style=\"overflow: hidden\">\n                </mat-row>\n                -->\n\n              </mat-table>\n            </div>\n          </div>\n          <!-- TABLE FOOTER -->\n          <div id=\"tfooter\">\n            <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" color=\"primary\"></mat-paginator>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/containers/transports/transports.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/containers/transports/transports.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-stroked-tracker-add {\n  color: #007EFA;\n  background-color: transparent;\n  border: 1px solid !important;\n  line-height: 1.70;\n  width: 100px;\n  cursor: pointer; }\n\n.btn-stroked-tracker-add:hover {\n  color: white;\n  background-color: #007EFA;\n  border: 1px solid !important; }\n\n.btn-stroked-tracker-remove {\n  color: red;\n  background-color: transparent;\n  border: 1px solid !important;\n  line-height: 1.70;\n  width: 100px;\n  cursor: pointer; }\n\n.btn-stroked-tracker-remove:hover {\n  color: white;\n  background-color: red;\n  border: 1px solid !important; }\n\n#background-transport, #background-transport #conteiner #card #table-component #tfilter, #background-transport #conteiner #card #table-component #tfilter #input-filter, #background-transport #conteiner #card #table-component #tfilter #add, #background-transport #conteiner #card #table-component #tmaster #thead, #background-transport #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header ._id, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table ._id {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-_id, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-_id {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 90%;\n  color: white; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-_id button, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-_id button {\n    margin: 5px; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .type, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .type {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-type, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-type {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 90%;\n  color: white; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-type button, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-type button {\n    margin: 5px; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .capacity, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .capacity {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-capacity, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-capacity {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 90%;\n  color: white; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-capacity button, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-capacity button {\n    margin: 5px; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .vehiclePlate, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .vehiclePlate {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-vehiclePlate, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-vehiclePlate {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 90%;\n  color: white; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-vehiclePlate button, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-vehiclePlate button {\n    margin: 5px; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .thirdCompany, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .thirdCompany {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-thirdCompany, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-thirdCompany {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 90%;\n  color: white; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-thirdCompany button, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-thirdCompany button {\n    margin: 5px; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .trackerSerial, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .trackerSerial {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-trackerSerial, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-trackerSerial {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 90%;\n  color: white; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-trackerSerial button, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-trackerSerial button {\n    margin: 5px; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 90%;\n  color: white; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n#background-transport {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-transport #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-transport #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-transport #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-transport #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);\n          color: #000000;\n          z-index: 2; }\n\n#background-transport #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 120%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-transport #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-transport #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 76.5%; }\n\n#background-transport #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-transport #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-transport #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-transport #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-transport #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-transport #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-transport #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-transport #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            background-color: #BDC3C7; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-transport #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #000000;\n              color: white;\n              display: inline-flex;\n              flex: 2 1 auto;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                background-color: #BDC3C7;\n                border-width: 0;\n                border-bottom-width: 0;\n                border-top-width: 0; }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(0, 0, 0, 0.08); }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #000000 !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 90%; }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 20px;\n                  text-align: left; }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500; }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail p {\n                    font-weight: 300; }\n\n#background-transport #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-transport #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-transport #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #000000;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 140px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-_id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-type {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-capacity {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-vehiclePlate {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-thirdCompany {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-trackerSerial {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy90cmFuc3BvcnRzL3RyYW5zcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJBO0VBRUksZUFBYztFQUVkLDhCQUE0QjtFQUM1Qiw2QkFBNEI7RUFDNUIsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixnQkFBZSxFQUNsQjs7QUFFRDtFQUVJLGFBQVk7RUFDWiwwQkFBeUI7RUFFekIsNkJBQTRCLEVBQzdCOztBQUVIO0VBRUksV0FBVTtFQUVWLDhCQUE0QjtFQUM1Qiw2QkFBNEI7RUFDNUIsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixnQkFBZSxFQUNsQjs7QUFFRDtFQUVJLGFBQVk7RUFDWixzQkFBcUI7RUFFckIsNkJBQTRCLEVBQy9COztBQVNEO0VBQ0ksY0FBYTtFQUNiLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0Qjs7QUFPTztFQW5CSix3QkExQzJCO0VBMkMzQix3QkEzQzJCO0VBNEMzQixvQkE1QzJCO0VBK0RuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2pCOztBQUVEO0VBM0JKLHdCQTFDMkI7RUEyQzNCLHdCQTNDMkI7RUE0QzNCLG9CQTVDMkI7RUF1RW5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGFBQVksRUFNZjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFqQlQ7RUFuQkosd0JBMUMyQjtFQTJDM0Isd0JBM0MyQjtFQTRDM0Isb0JBNUMyQjtFQStEbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZUFBYyxFQUNqQjs7QUFFRDtFQTNCSix3QkExQzJCO0VBMkMzQix3QkEzQzJCO0VBNEMzQixvQkE1QzJCO0VBdUVuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VB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QUF5QixFQUM1QjtFQUNEO0lBQ0kseUJBQXdCO0lBQ3hCLDBCQUF5QixFQUk1QjtJQU5EO01BSVEseUJBQXdCLEVBQzNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3RyYW5zcG9ydHMvdHJhbnNwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCBcIl9jdXN0b21fY29sb3Jfc2NoZW1lLnNjc3NcIjtcbi8vJHRoZW1lLWJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcDogJG1hdC1zZ20tcHJpbWFyeSwgJGtleTogNTAwKTtcbiR0aGVtZS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4vLyBMaXN0YSBkZSBjYW1wb3NcbiRmaWVsZHM6ICgnX2lkJyxcbid0eXBlJyxcbidjYXBhY2l0eScsXG4ndmVoaWNsZVBsYXRlJyxcbid0aGlyZENvbXBhbnknLFxuJ3RyYWNrZXJTZXJpYWwnLFxuJ2FjdGlvbnMnLFxuKTtcblxuLy8gX2lkPzogc3RyaW5nO1xuLy8gdHlwZT86IHN0cmluZztcbi8vIGNhcGFjaXR5Pzogc3RyaW5nO1xuLy8gdmVoaWNsZVBsYXRlPzogc3RyaW5nO1xuLy8gdGhpcmRDb21wYW55Pzogc3RyaW5nO1xuLy8gX192PzogbnVtYmVyO1xuLy8gY29vcmRpbmF0ZXNcblxuLy8gUGFkcm9uaXphIG8gdGFtYW5obyBkb3MgY2FtcG9zXG4kbGVuZ3RoOiAxMDAvbGVuZ3RoKCRmaWVsZHMpKjElO1xuXG5cbi5idG4tc3Ryb2tlZC10cmFja2VyLWFkZCB7XG4gICAgLy9jb2xvcjogbWFwLWdldCgkbWF0LXNnbS1wcmltYXJ5LCA1MDApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDdFRkE7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOnVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjcwO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tc3Ryb2tlZC10cmFja2VyLWFkZDpob3ZlciB7XG4gICAgLy9jb2xvcjogbWFwLWdldCgkbWF0LXNnbS1wcmltYXJ5LCA1MDApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdFRkE7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgfVxuXG4uYnRuLXN0cm9rZWQtdHJhY2tlci1yZW1vdmUge1xuICAgIC8vY29sb3I6IG1hcC1nZXQoJG1hdC1zZ20tcHJpbWFyeSwgNTAwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOnVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjcwO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tc3Ryb2tlZC10cmFja2VyLXJlbW92ZTpob3ZlciB7XG4gICAgLy9jb2xvcjogbWFwLWdldCgkbWF0LXNnbS1wcmltYXJ5LCA1MDApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY29sdW1uLXdpZHRoKCRwcm9wZXJ0eSkge1xuICAgIG1heC13aWR0aDogJHByb3BlcnR5O1xuICAgIG1pbi13aWR0aDogJHByb3BlcnR5O1xuICAgIHdpZHRoOiAkcHJvcGVydHk7ICAgIFxufVxuXG4vLyBjZW50cmFsaXplcyBhbGwgY29udGFpbmVyIGl0ZW1zXG4lZmxleC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIENvbmZpZ3VyYcOnw7VlcyBuw6NvIHBhZHLDtWVzIHBhcmEgYXMgY29sdW5hc1xuJXRhYmxlLWNvbHVtbnMge1xuXG4gICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG5cbiAgICAgICAgLiN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4OyAvLyBzb3J0aW5nIGFycm93IGRpc2NvdW50XG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBAaWYgI3skaGVhZGluZ309PWFjdGlvbnMge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYmFja2dyb3VuZC10cmFuc3BvcnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvL2JhY2tncm91bmQ6IGdyZWVuO1xuICAgICNjb250ZWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgaGVpZ2h0OiA5MSU7XG4gICAgICAgIHdpZHRoOiA5MSU7XG4gICAgICAgICNjYXJkIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICN0YWJsZS1jb21wb25lbnQge1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzI3M0I1NjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgI3RmaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjRweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSggYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUlOyAvL2JhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4ICM3MDcwNzAgc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjaW5wdXQtZmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3Ni41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1cnktbGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2FkZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4LjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjI2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjdG1hc3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEyIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgI3RoZWFkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9taW4taGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JEQzNDNztcbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhFQURFUiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI3Rib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwIDEgYXV0bzsgLy8gYmFja2dyb3VuZDogYnJvd247XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKCBibGFjaywgMC4xNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRDM0M3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1yb3c6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR0aGVtZS1iYWNrZ3JvdW5kLCAuMDgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtY29sdW1uLWV4cGFuZGVkRGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxOHB4IDEwcHggLTE4cHggcmdiYSgwLDAsMCwwLjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJPRFkgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICN0Zm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY2FwdGlvbiBmb3JtYXR0aW5nXG4uY2lyY2xlLXNtYWxsIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLnBhZ2luYXRvcntcbiAgICAgICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWZpbHRlci1pbnB1dHtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgIH1cbiAgICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgJXVuc2V0LXdpZHRoe1xuICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICN0ZmlsdGVyIHtcbiAgICAgICAgI3RpdGxlLCAjaW5wdXQtZmlsdGVyLCAjYWRke1xuICAgICAgICAgICAgQGV4dGVuZCAldW5zZXQtd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgI2FkZHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjdGhlYWQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICN0Ym9keXtcbiAgICAgICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDsgLy8gZml4IGxheW91dCBpbiB0aGUgZmlyZWZveFxuICAgIH1cbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG4gICAgICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKHVuc2V0ICFpbXBvcnRhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZnVyeS1saXN0LXRhYmxlIC5mdXJ5LWxpc3QtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAuZnVyeS1jb2x1bW4tZmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/containers/transports/transports.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/transports/transports.component.ts ***!
  \***************************************************************/
/*! exports provided: TransportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportsComponent", function() { return TransportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _transport_create_update_transport_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transport-create-update/transport-create-update.component */ "./src/app/containers/transports/transport-create-update/transport-create-update.component.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.component */ "./src/app/core/common/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var app_containers_transports_transports_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/containers/transports/transports.service */ "./src/app/containers/transports/transports.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment_dev__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var app_core_common_dialog_rastreador_dialog_rastreador_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/common/dialog-rastreador/dialog-rastreador.component */ "./src/app/core/common/dialog-rastreador/dialog-rastreador.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TransportsComponent = /** @class */ (function () {
    function TransportsComponent(dialog, snackBar, apiTransport, httpClient) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.apiTransport = apiTransport;
        this.httpClient = httpClient;
        this.subject$ = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        // this component is useful for the filter and show colums in table
        this.columns = [
            { name: 'Id', property: '_id', visible: false, isModelProperty: true },
            { name: 'Tipo', property: 'type', visible: true, isModelProperty: true },
            { name: 'Capacidade', property: 'capacity', visible: true, isModelProperty: true },
            { name: 'Placa', property: 'vehiclePlate', visible: true, isModelProperty: true },
            { name: 'Versão', property: '__v', visible: false, isModelProperty: true },
            { name: 'Fornecedor', property: 'thirdCompany', visible: true, isModelProperty: true },
            { name: 'Rastreador', property: 'trackerSerial', visible: true, isModelProperty: true },
            { name: 'Coordenadas', property: 'coordinates', visible: false, isModelProperty: true },
            { name: '', property: 'actions', visible: true }
        ];
    }
    Object.defineProperty(TransportsComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    TransportsComponent.prototype.loadData = function () {
        var _this = this;
        this.apiTransport.getAll()
            .subscribe(function (transports) {
            console.log(transports);
            console.log(transports.data);
            _this.transports = transports;
            _this.dataSource.data = transports.data; //transports;
            _this.paginator.firstPage();
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                //this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
                console.log(error);
            }
        });
        //this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;
        //setInterval(() => { this.loadData(); }, 1000 * 20);
    };
    TransportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (transports) {
            _this.transports = transports;
            _this.dataSource.data = transports;
        });
    };
    TransportsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TransportsComponent.prototype.create = function () {
        var _this = this;
        this.dialog.open(_transport_create_update_transport_create_update_component__WEBPACK_IMPORTED_MODULE_5__["TransportCreateUpdateComponent"], {
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (transport) {
            if (transport) {
                // this.apiTransport.createUsingPOST(transport).
                //     subscribe(
                //         success => {
                _this.snackBar.open('Transporte cadastrado com sucesso!', 'OK', {
                    duration: 10000
                });
                //    // Reload the table after the post
                _this.loadData();
                // },
                // error => {
                //    this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                //    'OK', {
                //        duration: 10000
                //    });
                // });
            }
        });
    };
    TransportsComponent.prototype.update = function (transport) {
        var _this = this;
        this.dialog.open(_transport_create_update_transport_create_update_component__WEBPACK_IMPORTED_MODULE_5__["TransportCreateUpdateComponent"], {
            data: transport,
            //width: '61%', height: '77%',
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (_transport) {
            if (_transport) {
                _this.apiTransport.updateTransport(_transport).
                    subscribe(function (success) {
                    if (_transport.idRastreador !== null) {
                        var formDataRastreador = new URLSearchParams();
                        // append your data
                        formDataRastreador.set('trackerSerial', _transport.idRastreador);
                        var token = localStorage.getItem('token');
                        var httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer " + ("" + token)
                            }),
                        };
                        _this.httpClient.put(environments_environment_dev__WEBPACK_IMPORTED_MODULE_9__["environment"].origin.transports + '/transports/linktracker/' + _transport._id, formDataRastreador.toString(), httpOptions).
                            subscribe(function (success) {
                            _this.snackBar.open('Transporte atualizado com sucesso!', 'OK', {
                                duration: 10000
                            });
                            console.log('Rastreador vinculado: ' + _transport.idRastreador);
                        }, function (error) {
                            //console.log(error.error.error_description);
                            _this.snackBar.open(error.error.error_description, 'OK', {
                                duration: 10000
                            });
                            console.log(error);
                        });
                        console.log(_transport.idRastreador);
                    }
                    else {
                        _this.snackBar.open('Transporte atualizado com sucesso!', 'OK', {
                            duration: 10000
                        });
                    }
                    // Reload the table after the post
                    setTimeout(function () { return _this.loadData(); }, 3000);
                    _this.loadData();
                }, function (error) {
                    _this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    TransportsComponent.prototype.delete = function (transport) {
        var _this = this;
        this.dialog.open(_core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"], {
            data: { id: transport._id, displayName: transport.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe(function (_transport) {
            console.log(_transport);
            if (_transport) {
                _this.apiTransport.deleteTransport(_transport).
                    subscribe(function (success) {
                    _this.snackBar.open('Item deletado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    _this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    TransportsComponent.prototype.ngOnDestroy = function () {
    };
    TransportsComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TransportsComponent.prototype.extractValue = function (_row, _cell, _property) {
        if (typeof (_cell) === 'undefined') {
            return _row[_property];
        }
        // console.log(_row, _cell);
        var result = _row;
        var properties = _cell.split('.');
        properties.forEach(function (p) {
            result = result[p] ? result[p] : result;
        });
        return result;
    };
    /**
    * expand collapse a row
    * @param row
    */
    TransportsComponent.prototype.toggleRow = function (row) {
        if (this.expandedElement === row) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = row;
        }
    };
    TransportsComponent.prototype.adicionarRastreador = function (transport) {
        var _this = this;
        this.dialog.open(app_core_common_dialog_rastreador_dialog_rastreador_component__WEBPACK_IMPORTED_MODULE_11__["DialogRastreadorComponent"], {
            data: { id: transport._id, displayName: transport.vehiclePlate, displayBody: 'Transporte:', title: 'Deseja associar um rastreador?', type: 'add', trackerSerial: '' },
            panelClass: 'dialog-rastreador'
        }).afterClosed().subscribe(function (transport) {
            if (transport) {
                _this.apiTransport.adicionarRastreador(transport).
                    subscribe(function (success) {
                    _this.snackBar.open('Rastreador associado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    console.log(error);
                    _this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    TransportsComponent.prototype.removerRastreador = function (transport) {
        var _this = this;
        this.dialog.open(app_core_common_dialog_rastreador_dialog_rastreador_component__WEBPACK_IMPORTED_MODULE_11__["DialogRastreadorComponent"], {
            data: { id: transport._id, displayName: transport.trackerSerial, displayBody: 'Serial: ', title: 'Deseja desvincular o rastreador?', type: 'remove', trackerSerial: '' },
            panelClass: 'dialog-rastreador'
        }).afterClosed().subscribe(function (_transport) {
            if (_transport) {
                _this.apiTransport.removerRastreador(_transport).
                    subscribe(function (success) {
                    _this.snackBar.open('Rastreador desvinculado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    console.log(error);
                    _this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TransportsComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TransportsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TransportsComponent.prototype, "sort", void 0);
    TransportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-transports',
            template: __webpack_require__(/*! ./transports.component.html */ "./src/app/containers/transports/transports.component.html"),
            styles: [__webpack_require__(/*! ./transports.component.scss */ "./src/app/containers/transports/transports.component.scss")],
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [app_containers_transports_transports_service__WEBPACK_IMPORTED_MODULE_7__["TransportControllerService"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            app_containers_transports_transports_service__WEBPACK_IMPORTED_MODULE_7__["TransportControllerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], TransportsComponent);
    return TransportsComponent;
}());



/***/ }),

/***/ "./src/app/containers/transports/transports.module.ts":
/*!************************************************************!*\
  !*** ./src/app/containers/transports/transports.module.ts ***!
  \************************************************************/
/*! exports provided: TransportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportsModule", function() { return TransportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/page/page.module */ "./src/app/core/common/page/page.module.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.module */ "./src/app/core/common/dialog-delete/dialog-delete.module.ts");
/* harmony import */ var _core_common_dialog_rastreador_dialog_rastreador_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/common/dialog-rastreador/dialog-rastreador.module */ "./src/app/core/common/dialog-rastreador/dialog-rastreador.module.ts");
/* harmony import */ var _transports_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transports-routing.module */ "./src/app/containers/transports/transports-routing.module.ts");
/* harmony import */ var _transports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transports.component */ "./src/app/containers/transports/transports.component.ts");
/* harmony import */ var _transport_create_update_transport_create_update_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transport-create-update/transport-create-update.module */ "./src/app/containers/transports/transport-create-update/transport-create-update.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var TransportsModule = /** @class */ (function () {
    function TransportsModule() {
    }
    TransportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _transports_routing_module__WEBPACK_IMPORTED_MODULE_9__["TransportsRoutingModule"],
                _transport_create_update_transport_create_update_module__WEBPACK_IMPORTED_MODULE_11__["TransportCreateUpdateModule"],
                // Core
                _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"],
                _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteModule"],
                _core_common_dialog_rastreador_dialog_rastreador_module__WEBPACK_IMPORTED_MODULE_8__["DialogRastreadorModule"]
            ],
            declarations: [_transports_component__WEBPACK_IMPORTED_MODULE_10__["TransportsComponent"]],
            exports: [_transports_component__WEBPACK_IMPORTED_MODULE_10__["TransportsComponent"]]
        })
    ], TransportsModule);
    return TransportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-containers-transports-transports-module.js.map