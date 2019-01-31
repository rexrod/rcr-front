(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-notices-notices-module"],{

/***/ "./src/app/containers/notices/notice-create-update/notice-create-update.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/containers/notices/notice-create-update/notice-create-update.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notice-close\">\n  <button type=\"button\" class=\"mat-icon-button\" mat-dialog-close>\n    <span class=\"mat-button-wrapper\">\n      <mat-icon class=\"mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">close</mat-icon>\n    </span>\n  </button>\n</div>\n<h1 mat-dialog-title>Aviso</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n  <mat-dialog-content>\n\n    <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n      <div fxFlex=\"50%\" class=\"container-column\">\n        <div fxLayout.gt-sm=\"row\" fxLayoutGap.gt-sm=\"16px\">\n          <mat-form-field fxFlex>\n            <mat-select placeholder=\"Escolha a Prioridade\" formControlName=\"idPriority\" required>\n              <!-- [disabled]=\"isUpdateMode()\" -->\n              <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority.id\">\n                <!--priority.id -->\n                <span>\n                  <!-- icon option -->\n                  <div [ngStyle]=\"{'background-color': priority.color}\" class=\"circle-small\"></div>\n                  <!-- text option -->\n                  {{priority.name}}\n                </span>\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div fxLayout.gt-sm=\"row\" fxLayoutGap.gt-sm=\"16px\">\n          <mat-form-field class=\"title\" fxFlex>\n            <input matInput type=\"text\" placeholder=\"Título\" formControlName=\"title\" maxlength=\"255\" required>\n          </mat-form-field>\n        </div>\n        <div fxLayout.gt-sm=\"row\" fxLayoutGap.gt-sm=\"16px\">\n          <mat-form-field fxFlex hintLabel=\"Máximo 500 caracteres\">\n            <textarea matInput #textarea placeholder=\"Insira sua Descrição\" formControlName=\"description\" class=\"description\"\n              required maxlength=\"500\"></textarea>\n            <mat-hint align=\"end\">{{textarea.value?.length || 0}}/500</mat-hint>\n          </mat-form-field>\n        </div>\n      </div>\n      <div fxFlex=\"50%\" class=\"container-column\" id=\"second-column\">\n        <div fxLayout.gt-sm=\"row\" fxLayoutGap.gt-sm=\"16px\">\n          <label for=\"validate_hour\" fxFlex>Selecione a Data e Hora</label>\n        </div>\n        <br>\n        <div fxLayout.gt-sm=\"row\" class=\"validate\">\n          <mat-form-field class=\"validate_day\">\n            <input matInput type=\"text\" formControlName=\"validate_day\" required>\n          </mat-form-field>\n          <label for=\"validate_hour\" fxFlex fxLayoutAlign=\"center\" id=\"location_city\">Manaus</label>\n          <input matInput type=\"time\" formControlName=\"validate_hour\" class=\"validate_hour\" fxFlex required\n            [style.background-color]=\"correctHours ? '#273B56' : '#DC3545'\">\n        </div>\n        <mat-calendar fxFlex></mat-calendar>\n      </div>\n    </div>\n\n  </mat-dialog-content>\n  <mat-divider></mat-divider>\n  <mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"end center\">\n    <button *ngIf=\"isCreateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" color=\"primary\">ENVIAR</button>\n    <button *ngIf=\"isUpdateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" color=\"primary\">ATUALIZAR</button>\n  </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/containers/notices/notice-create-update/notice-create-update.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/containers/notices/notice-create-update/notice-create-update.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notices-dialog .mat-calendar {\n  background-color: #273B56;\n  color: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);\n  max-width: 360px;\n  max-height: 360px; }\n\n.notices-dialog .notice-close {\n  text-align: right; }\n\n.notices-dialog .mat-dialog-title {\n  font-size: 150%; }\n\n.notices-dialog .mat-dialog-container {\n  padding: 40px; }\n\n.notices-dialog .container-column {\n  margin: 10px;\n  padding: 10px; }\n\n.notices-dialog #second-column {\n  display: unset !important; }\n\n.notices-dialog .description {\n  height: 250px;\n  background-color: #FCFCFC; }\n\n.notices-dialog .validate_hour {\n  font-size: 2.5vh;\n  background-color: #273B56;\n  color: white;\n  border: 0;\n  text-align: center; }\n\n.notices-dialog .validate_day {\n  display: none; }\n\n.notices-dialog .validate {\n  margin-bottom: 4px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24); }\n\n.notices-dialog label#location_city {\n  padding: 11px 0px 11px 0px;\n  font-size: 20px;\n  background-color: rgba(0, 0, 0, 0.16);\n  color: white; }\n\n.notices-dialog .mat-dialog-actions {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  justify-content: flex-end; }\n\n.notices-dialog .mat-dialog-actions .btn-save {\n    flex: .2 1 0%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n    font-size: 100%;\n    font-weight: lighter; }\n\n@media screen and (max-height: 400px) {\n  .btn-save {\n    line-height: 24px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9ub3RpY2VzL25vdGljZS1jcmVhdGUtdXBkYXRlL25vdGljZS1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCw0Q0FBMkM7RUFDM0MsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNwQjs7QUFQTDtFQVVRLGtCQUFpQixFQUNwQjs7QUFYTDtFQWNRLGdCQUFlLEVBQ2xCOztBQWZMO0VBa0JRLGNBQWEsRUFDaEI7O0FBbkJMO0VBc0JRLGFBQVk7RUFDWixjQUFhLEVBQ2hCOztBQXhCTDtFQTJCUSwwQkFBeUIsRUFDNUI7O0FBNUJMO0VBK0JRLGNBQWE7RUFDYiwwQkFBeUIsRUFDNUI7O0FBakNMO0VBb0NRLGlCQUFnQjtFQUNoQiwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLFVBQVM7RUFDVCxtQkFBa0IsRUFDckI7O0FBekNMO0VBNENRLGNBQWEsRUFDaEI7O0FBN0NMO0VBZ0RRLG1CQUFrQjtFQUNsQiw0Q0FBMkMsRUFDOUM7O0FBbERMO0VBcURRLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLHNDQUFxQztFQUNyQyxhQUFZLEVBQ2Y7O0FBekRMO0VBNERRLGNBQWE7RUFDYixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLDBCQUF5QixFQVE1Qjs7QUF2RUw7SUFrRVksY0FBYTtJQUNiLHlDQUF3QztJQUN4QyxnQkFBZTtJQUNmLHFCQUFvQixFQUN2Qjs7QUFLVDtFQUNJO0lBQ0ksNkJBQTRCLEVBQy9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL25vdGljZXMvbm90aWNlLWNyZWF0ZS11cGRhdGUvbm90aWNlLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWNlcy1kaWFsb2cge1xuICAgIC5tYXQtY2FsZW5kYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczQjU2O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzYwcHg7XG4gICAgfVxuXG4gICAgLm5vdGljZS1jbG9zZXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE1MCU7XG4gICAgfVxuXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWNvbHVtbiB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAjc2Vjb25kLWNvbHVtbiB7XG4gICAgICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGQztcbiAgICB9XG5cbiAgICAudmFsaWRhdGVfaG91ciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41dmg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNCNTY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnZhbGlkYXRlX2RheSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnZhbGlkYXRlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cblxuICAgIGxhYmVsI2xvY2F0aW9uX2NpdHkge1xuICAgICAgICBwYWRkaW5nOiAxMXB4IDBweCAxMXB4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIC5idG4tc2F2ZSB7XG4gICAgICAgICAgICBmbGV4OiAuMiAxIDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkge1xuICAgIC5idG4tc2F2ZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/containers/notices/notice-create-update/notice-create-update.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/containers/notices/notice-create-update/notice-create-update.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NoticeCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeCreateUpdateComponent", function() { return NoticeCreateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_module_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/module/notices */ "./src/app/module/notices/index.ts");
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





var NoticeCreateUpdateComponent = /** @class */ (function () {
    function NoticeCreateUpdateComponent(defaults, dialogRef, apiPriority, fb, snackBar) {
        var _this = this;
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.apiPriority = apiPriority;
        this.fb = fb;
        this.snackBar = snackBar;
        this.mode = 'create';
        this.correctHours = true;
        // load the notice priorities
        this.apiPriority.getAllUsingGET1().
            subscribe(function (noti) {
            _this.priorities = noti;
        });
        // instance the form group for mode Update and Create
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idPriority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            validate_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            validate_hour: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            validate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    NoticeCreateUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._datePicker.minDate = new Date();
        this._datePicker.selectedChange.subscribe(function (d) {
            // Select the date you clicked
            _this._datePicker.selected = d;
            // Formating date
            var year = d.getFullYear();
            var month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
            var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
            // format datetime: '1970-01-01 00:00'
            _this.form.controls['validate_day'].setValue(year + '-' + month + '-' + day); // value directly in the form
        });
        if (this.defaults) { // <-- do you have data from the main screen?
            this.mode = 'update';
            // set value in calendar
            this.setValueInCalendar(this.defaults.validate);
            // Used in the Update Mode to fill the fields
            this.form = this.fb.group({
                id: [this.defaults.id || null],
                title: [this.defaults.title || null],
                description: [this.defaults.description || null],
                idPriority: [this.defaults.priority.id],
                validate_day: [this.defaults.validate.split(' ')[0]],
                validate_hour: [this.defaults.validate.split(' ')[1]],
                validate: [this.defaults.validate],
                idCompany: [this.defaults.company.id]
            });
        }
        else { // <-- don't have data :( = Mode Create
            this.defaults = {}; // takes blank :)
        }
    };
    NoticeCreateUpdateComponent.prototype.save = function () {
        if (this.mode === 'create') {
            this.createNotice();
        }
        else if (this.mode === 'update') {
            this.updateNotice();
        }
    };
    NoticeCreateUpdateComponent.prototype.createNotice = function () {
        // concatenates day with hour
        var _validate = this.form.get('validate_day').value + ' ' + this.form.get('validate_hour').value;
        var hora_input = new Date(_validate);
        var hora_atual = new Date();
        // Verificando se a hora é superior a atual
        if (hora_input.getTime() < hora_atual.getTime()) {
            this.form.setErrors({ 'invalid': true });
            this.correctHours = false;
            this.snackBar.open('A hora não pode ser menor que a atual', 'OK', {
                duration: 10000
            });
            return false;
        }
        else {
            this.correctHours = true;
        }
        this.form.get('validate').setValue(_validate);
        this.form.removeControl('validate_day');
        this.form.removeControl('validate_hour');
        // ID FIXO PQ AINDA NÃO TEM USUARIO LOGADO
        this.form.controls['idCompany'].setValue(1);
        var notice = this.form.value;
        this.dialogRef.close(notice);
    };
    NoticeCreateUpdateComponent.prototype.updateNotice = function () {
        var _validate = this.form.get('validate_day').value + ' ' + this.form.get('validate_hour').value;
        var hora_input = new Date(_validate);
        var hora_atual = new Date();
        if (hora_input.getTime() < hora_atual.getTime()) {
            this.form.setErrors({ 'invalid': true });
            this.correctHours = false;
            this.snackBar.open('A hora não pode ser menor que a atual', 'OK', {
                duration: 10000
            });
            return false;
        }
        else {
            this.correctHours = true;
        }
        this.form.get('validate').setValue(this.form.get('validate_day').value + ' ' + this.form.get('validate_hour').value);
        this.form.removeControl('validate_day');
        this.form.removeControl('validate_hour');
        var notice = this.form.value;
        notice.id = this.defaults.id;
        this.dialogRef.close(notice);
    };
    NoticeCreateUpdateComponent.prototype.isCreateMode = function () {
        return this.mode === 'create';
    };
    NoticeCreateUpdateComponent.prototype.isUpdateMode = function () {
        return this.mode === 'update';
    };
    NoticeCreateUpdateComponent.prototype.setValueInCalendar = function (d) {
        var date = d.split(' ')[0];
        var year = date.split('-')[0];
        var month = date.split('-')[1] - 1;
        var day = date.split('-')[2];
        var dateFormat = new Date(year, month, day);
        this._datePicker.selected = dateFormat;
        this._datePicker.startAt = dateFormat;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCalendar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCalendar"])
    ], NoticeCreateUpdateComponent.prototype, "_datePicker", void 0);
    NoticeCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-notice-create-update',
            template: __webpack_require__(/*! ./notice-create-update.component.html */ "./src/app/containers/notices/notice-create-update/notice-create-update.component.html"),
            styles: [__webpack_require__(/*! ./notice-create-update.component.scss */ "./src/app/containers/notices/notice-create-update/notice-create-update.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            app_module_notices__WEBPACK_IMPORTED_MODULE_3__["NoticePriorityControllerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NoticeCreateUpdateComponent);
    return NoticeCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/containers/notices/notice-create-update/notice-create-update.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/containers/notices/notice-create-update/notice-create-update.module.ts ***!
  \****************************************************************************************/
/*! exports provided: NoticeCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeCreateUpdateModule", function() { return NoticeCreateUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _notice_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-create-update.component */ "./src/app/containers/notices/notice-create-update/notice-create-update.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_module_notices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/module/notices */ "./src/app/module/notices/index.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NoticeCreateUpdateModule = /** @class */ (function () {
    function NoticeCreateUpdateModule() {
    }
    NoticeCreateUpdateModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"]
            ],
            declarations: [_notice_create_update_component__WEBPACK_IMPORTED_MODULE_5__["NoticeCreateUpdateComponent"]],
            entryComponents: [_notice_create_update_component__WEBPACK_IMPORTED_MODULE_5__["NoticeCreateUpdateComponent"]],
            exports: [_notice_create_update_component__WEBPACK_IMPORTED_MODULE_5__["NoticeCreateUpdateComponent"]],
            providers: [
                { provide: app_module_notices__WEBPACK_IMPORTED_MODULE_7__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.notices },
                app_module_notices__WEBPACK_IMPORTED_MODULE_7__["NoticeControllerService"],
                app_module_notices__WEBPACK_IMPORTED_MODULE_7__["NoticePriorityControllerService"]
            ]
        })
    ], NoticeCreateUpdateModule);
    return NoticeCreateUpdateModule;
}());



/***/ }),

/***/ "./src/app/containers/notices/notices-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/notices/notices-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: NoticesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesRoutingModule", function() { return NoticesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notices.component */ "./src/app/containers/notices/notices.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _notices_component__WEBPACK_IMPORTED_MODULE_2__["NoticesComponent"]
    }
];
var NoticesRoutingModule = /** @class */ (function () {
    function NoticesRoutingModule() {
    }
    NoticesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NoticesRoutingModule);
    return NoticesRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/notices/notices.component.html":
/*!***********************************************************!*\
  !*** ./src/app/containers/notices/notices.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background-notice\">\n  <div id=\"conteiner\">\n    <div id=\"card\">\n      <div id=\"table-component\">\n        <!-- TABLE FILTER -->\n        <div id=\"tfilter\">\n          <div id=\"title\">\n            <span>Avisos</span>\n          </div>\n          <div id=\"input-filter\">\n            <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\"\n              fxLayout=\"row\"></fury-list>\n          </div>\n          <div id=\"add\">\n            <button mat-mini-fab color=\"primary\" (click)=\"create()\" id=\"create\" matTooltip=\"Adicionar Item\"\n              [matTooltipPosition]=\"'above'\">\n              <mat-icon aria-label=\"Editar\">add</mat-icon>\n            </button>\n          </div>\n        </div>\n        <!-- TABLE HEADER -->\n        <div id=\"tmaster\">\n          <div id=\"thead\" matSort>\n            <div class=\"table-header\">\n              <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\"\n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                {{column.name | uppercase}}\n              </div>\n            </div>\n          </div>\n          <!-- TABLE BODY -->\n          <div id=\"tbody\">\n\n            <!-- Note: Mat-table does not compile without mat-cell -->\n            <mat-table #table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\n\n              <!-- id Column -->\n              <ng-container matColumnDef=\"id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\"> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\"> {{row.id}} </mat-cell>\n              </ng-container>\n\n              <!-- description Column -->\n              <ng-container matColumnDef=\"title\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\"> DESCRIÇÃO </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"flex-start\"> {{row.title}} </mat-cell>\n              </ng-container>\n\n              <!-- validate Column -->\n              <ng-container matColumnDef=\"validate\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\"> VALIDADE </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\"> {{ row.validate | date:\"dd/MM/yy HH:mm\" }}</mat-cell>\n              </ng-container>\n\n              <!-- priority Column -->\n              <ng-container matColumnDef=\"priorityName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\" aria-sort=\"descending\">\n                  PRIORIDADE </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">{{row.priorityName}}</mat-cell>\n              </ng-container>\n\n\n              <!-- color Column -->\n              <ng-container matColumnDef=\"priorityColor\">\n                <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"> COR </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                  <div [ngStyle]=\"{'background-color': row.priorityColor }\" class=\"circle\"></div>\n                  <!-- {{element.priority.color}}  -->\n                </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"expandedDetail\">\n                <mat-cell *matCellDef=\"let row\" [attr.colspan]=\"visibleColumns.length\">\n                  <div class=\"element-detail\">\n                      <label>Descrição:</label>\n                      <p>{{ row.description }}</p>\n                  </div>\n                </mat-cell>\n              </ng-container>\n\n              <!-- actions Column -->\n              <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"> AÇÕES </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                  <button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Editar\">edit</mat-icon>\n                  </button>\n                  <button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Deletar\">delete</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n\n              <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: visibleColumns;\" matRipple class=\"element-row\" [class.expanded]=\"expandedElement == row\"\n                (click)=\"toggleRow(row)\">\n              </mat-row>\n              <mat-row *matRowDef=\"let row; columns: ['expandedDetail'];\" [@detailExpand]=\"row == expandedElement ? 'expanded' : 'collapsed'\"\n                style=\"overflow: hidden\">\n              </mat-row>\n\n            </mat-table>\n          </div>\n        </div>\n        <!-- TABLE FOOTER -->\n        <div id=\"tfooter\">\n          <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/containers/notices/notices.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/containers/notices/notices.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.mat-input-element {\n  margin-top: unset; }\n\n#background-notice, #background-notice #conteiner #card #table-component #tfilter, #background-notice #conteiner #card #table-component #tfilter #input-filter, #background-notice #conteiner #card #table-component #tfilter #add, #background-notice #conteiner #card #table-component #tmaster #thead, #background-notice #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .id, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .title, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .title {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-title, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-title {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-title button, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-title button {\n    margin: 5px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .validate, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .validate {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-validate, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-validate {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-validate button, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-validate button {\n    margin: 5px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .priorityName, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .priorityName {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-priorityName, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-priorityName {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-priorityName button, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-priorityName button {\n    margin: 5px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .priorityColor, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .priorityColor {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-priorityColor, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-priorityColor {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-priorityColor button, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-priorityColor button {\n    margin: 5px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n#background-notice {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-notice #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-notice #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-notice #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-notice #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n          color: #3f4ade;\n          z-index: 2; }\n\n#background-notice #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-notice #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-notice #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 81%; }\n\n#background-notice #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-notice #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-notice #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-notice #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-notice #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-notice #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-notice #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-notice #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-notice #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #3f4ade;\n              display: inline-flex;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(63, 74, 222, 0.08); }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #3f4ade !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-description {\n                font-weight: 500;\n                text-align: initial;\n                word-break: break-word; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-validate {\n                font-style: italic; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 20px;\n                  text-align: left; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail p {\n                    font-weight: 300; }\n\n#background-notice #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-notice #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-notice #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #3f4ade;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  #title {\n    font-size: 100% !important; }\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title,\n  #tfilter #input-filter,\n  #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #title {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-title {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-validate {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-priorityName {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-priorityColor {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-description {\n    text-align: center !important;\n    word-break: break-word; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9ub3RpY2VzL25vdGljZXMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tYXJjdXMuanVuaW9yL0RvY3VtZW50b3MvbmV3X3Jjci9zcmMvc3R5bGVzL19jdXN0b21fY29sb3Jfc2NoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDSSxrQkFBaUIsRUFDcEI7O0FBWUQ7RUFDSSxjQUFhO0VBQ2IsZUFBYztFQUNkLHNCQUFxQjtFQUNyQix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCOztBQU9PO0VBbkJKLHdCQUgyQjtFQUkzQix3QkFKMkI7RUFLM0Isb0JBTDJCO0VBd0JuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFIMkI7RUFJM0Isd0JBSjJCO0VBSzNCLG9CQUwyQjtFQStCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQVFyQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFoQlQ7RUFuQkosd0JBSDJCO0VBSTNCLHdCQUoyQjtFQUszQixvQkFMMkI7RUF3Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUgyQjtFQUkzQix3QkFKMkI7RUFLM0Isb0JBTDJCO0VBK0JuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBUXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWhCVDtFQW5CSix3QkFIMkI7RUFJM0Isd0JBSjJCO0VBSzNCLG9CQUwyQjtFQXdCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSDJCO0VBSTNCLHdCQUoyQjtFQUszQixvQkFMMkI7RUErQm5CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFRckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBaEJUO0VBbkJKLHdCQUgyQjtFQUkzQix3QkFKMkI7RUFLM0Isb0JBTDJCO0VBd0JuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFIMkI7RUFJM0Isd0JBSjJCO0VBSzNCLG9CQUwyQjtFQStCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQVFyQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFoQlQ7RUFuQkosd0JBSDJCO0VBSTNCLHdCQUoyQjtFQUszQixvQkFMMkI7RUF3Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUgyQjtFQUkzQix3QkFKMkI7RUFLM0Isb0JBTDJCO0VBK0JuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBUXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWhCVDtFQW5CSix3QkFIMkI7RUFJM0Isd0JBSjJCO0VBSzNCLG9CQUwyQjtFQXdCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSDJCO0VBSTNCLHdCQUoyQjtFQUszQixvQkFMMkI7RUErQm5CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFRckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBTWpCOztFQUVJLGFBQVk7RUFDWixZQUFXO0VBQ1gsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLHVCQUFzQjtFQUN0Qix1QkFBc0I7RUFFdEIsZ0JBQWUsRUF1TWxCOztBQTVNRDtJQVFRLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsa0JBQWlCO0lBQ2pCLHlCQUF3QjtJQUN4QixxQkFBb0I7SUFDcEIsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxXQUFVLEVBNExiOztBQTNNTDtNQWtCWSxlQUFjO01BQ2QsY0FBYTtNQUNiLGdCQUFlLEVBc0xsQjs7QUExTVQ7UUF3QmdCLGVBQWM7UUFDZCxjQUFhO1FBQ2IsdUJBQXNCLEVBK0t6Qjs7QUF6TWI7VUE4Qm9CLGNBQWE7VUFDYixpQkFBZ0I7VUFDaEIsNENBQWtDO1VBQ2xDLGVDL0RIO1VEZ0VHLFdBQVUsRUFvRGI7O0FBdEZqQjtZQXFDd0IsbUJBQWtCO1lBQ2xCLGdCQUFlO1lBQ2Ysa0JBQWlCO1lBQ2pCLGNBQWE7WUFDYixlQUFjO1lBQ2QsZUFBYztZQUNkLGdDQUErQixFQUtsQzs7QUFoRHJCO2NBOEM0QixlQUFjLEVBQ2pCOztBQS9DekI7WUFvRHdCLGVBQWMsRUF1QmpCOztBQTNFckI7Y0F1RDRCLGVBQWMsRUFtQmpCOztBQTFFekI7Z0JBMERnQyxlQUFjLEVBZWpCOztBQXpFN0I7a0JBNkRvQyxjQUFhLEVBQ2hCOztBQTlEakM7a0JBaUVvQyxnQ0FBK0I7a0JBQy9CLDZCQUE0QixFQU0vQjs7QUF4RWpDO29CQXFFd0MsK0JBQThCO29CQUM5QixtQ0FBa0MsRUFDckM7O0FBdkVyQztZQThFd0IsY0FBYTtZQUNiLGdCQUFlLEVBTWxCOztBQXJGckI7Y0FtRjRCLDRDQUFrQyxFQUNyQzs7QUFwRnpCO1VBeUZvQixjQUFhO1VBQ2IsZ0JBQWU7VUFDZix1QkFBc0IsRUFpR3pCOztBQTVMakI7WUErRndCLG1CQUFrQjtZQUNsQixpQkFBZ0IsRUFlbkI7O0FBL0dyQjtjQW1HNEIsY0FBYTtjQUNiLG1DQUFrQyxFQUNyQzs7QUFyR3pCO2NBd0c0QixZQUFXO2NBQ1gsZUN2SVg7Y0R3SVcscUJBQW9CO2NBQ3BCLGtCQUFpQjtjQUNqQixZQUFZLEVBRWY7O0FBOUd6QjtZQWtId0IsZ0JBQWU7WUFDZix3QkFBdUI7WUFDdkIsbUJBQWtCO1lBQ2xCLGNBQWE7WUFDYiw0Q0FBa0M7WUFDbEMsV0FBVTtZQUNWLGVBQWM7WUFDZCxVQUFTLEVBa0VaOztBQTNMckI7Y0E0SDRCLFlBQVc7Y0EwQlgsVUFBVSxFQW9DYjs7QUExTHpCO2dCQStIZ0MsY0FBYSxFQUNoQjs7QUFoSTdCO2dCQW1JZ0MsK0JBQThCLEVBQ2pDOztBQXBJN0I7Z0JBdUlnQyxnQ0FBK0IsRUFDbEM7O0FBeEk3QjtnQkEySWdDLDBDQ3pLZixFRDBLWTs7QUE1STdCO2dCQStJZ0MsMEJBQW1DO2dCQUNuQywrQkFBOEI7Z0JBQzlCLCtCQUE4QjtnQkFDOUIsZ0NBQStCO2dCQUMvQixnQkFBZSxFQUNsQjs7QUFwSjdCO2dCQXdKZ0MsaUJBQWdCO2dCQUNoQixvQkFBbUI7Z0JBQ25CLHVCQUFzQixFQUN6Qjs7QUEzSjdCO2dCQThKZ0MsbUJBQWtCLEVBQ3JCOztBQS9KN0I7Z0JBcUtnQyx5REFBcUQsRUFjeEQ7O0FBbkw3QjtrQkF3S29DLGNBQWE7a0JBQ2IsaUJBQWdCLEVBU25COztBQWxMakM7b0JBNEt3QyxpQkFBZ0IsRUFDbkI7O0FBN0tyQztvQkFnTHdDLGlCQUFnQixFQUNuQjs7QUFqTHJDO2dCQXNMZ0MsbUJBQWtCLEVBQ3JCOztBQXZMN0I7VUFnTW9CLG1CQUFrQjtVQUNsQixpQkFBZ0IsRUFPbkI7O0FBeE1qQjtZQW9Nd0IsWUFBVztZQUNYLGVDbk9QO1lEb09PLGdCQUFlLEVBQ2xCOztBQVFyQjtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksMkJBQTBCLEVBQzdCO0VBRUQ7SUFDSSwyQkFBMEIsRUFDN0IsRUFBQTs7QUFHTDtFQUNJO0lBQ0kseUJBQXdCLEVBQzNCLEVBQUE7O0FBR0w7RUFDSTs7O0lBRVEsMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCO0VBTkw7SUFTUSwrQkFBOEIsRUFDakM7RUFTTDtJQUNJLHlCQUF3QixFQUMzQjtFQUVEO0lBQ0ksdUJBQXNCLEVBQ3pCO0VBRUQ7SUF6VEEsNEJBNFRrRDtJQTNUbEQsNEJBMlRrRDtJQTFUbEQsd0JBMFRrRCxFQUN6QztFQUpUO0lBelRBLDRCQTRUa0Q7SUEzVGxELDRCQTJUa0Q7SUExVGxELHdCQTBUa0QsRUFDekM7RUFKVDtJQXpUQSw0QkE0VGtEO0lBM1RsRCw0QkEyVGtEO0lBMVRsRCx3QkEwVGtELEVBQ3pDO0VBSlQ7SUF6VEEsNEJBNFRrRDtJQTNUbEQsNEJBMlRrRDtJQTFUbEQsd0JBMFRrRCxFQUN6QztFQUpUO0lBelRBLDRCQTRUa0Q7SUEzVGxELDRCQTJUa0Q7SUExVGxELHdCQTBUa0QsRUFDekM7RUFKVDtJQXpUQSw0QkE0VGtEO0lBM1RsRCw0QkEyVGtEO0lBMVRsRCx3QkEwVGtELEVBQ3pDO0VBSlQ7SUFRUSw4QkFBNkI7SUFDN0IsdUJBQXNCLEVBQ3pCO0VBVkw7SUFhUSxrQkFBaUIsRUFDcEI7RUFHTDtJQUNJLDBCQUF5QixFQUM1QjtFQUVEO0lBQ0kseUJBQXdCO0lBQ3hCLDBCQUF5QixFQUs1QjtJQVBEO01BS1EseUJBQXdCLEVBQzNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL25vdGljZXMvbm90aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kdGhlbWUtYmFja2dyb3VuZDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuXG4vLyBMaXN0YSBkZSBjYW1wb3NcbiRmaWVsZHM6ICgnaWQnLFxuJ3RpdGxlJyxcbid2YWxpZGF0ZScsXG4ncHJpb3JpdHlOYW1lJyxcbidwcmlvcml0eUNvbG9yJyxcbidhY3Rpb25zJ1xuKTtcblxuLy8gQ29ycmXDp8OjbyBkbyBsYXlvdXQgZGEgaG9yYVxuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IHVuc2V0O1xufVxuXG4vLyBQYWRyb25pemEgbyB0YW1hbmhvIGRvcyBjYW1wb3NcbiRsZW5ndGg6IDEwMC9sZW5ndGgoJGZpZWxkcykqMSU7XG5cbkBtaXhpbiBjb2x1bW4td2lkdGgoJHByb3BlcnR5KSB7XG4gICAgbWF4LXdpZHRoOiAkcHJvcGVydHk7XG4gICAgbWluLXdpZHRoOiAkcHJvcGVydHk7XG4gICAgd2lkdGg6ICRwcm9wZXJ0eTtcbn1cblxuLy8gZW50cmFsaXplcyBhbGwgY29udGFpbmVyIGl0ZW1zXG4lZmxleC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIENvbmZpZ3VyYcOnw7VlcyBuw6NvIHBhZHLDtWVzIHBhcmEgYXMgY29sdW5hc1xuJXRhYmxlLWNvbHVtbnMge1xuXG4gICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG5cbiAgICAgICAgLiN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4OyAvLyBzb3J0aW5nIGFycm93IGRpc2NvdW50XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgoJGxlbmd0aCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgICAgICAgQGlmICN7JGhlYWRpbmd9PT1hY3Rpb25zIHtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYmFja2dyb3VuZC1ub3RpY2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvL2JhY2tncm91bmQ6IGdyZWVuO1xuXG4gICAgI2NvbnRlaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICBoZWlnaHQ6IDkxJTtcbiAgICAgICAgd2lkdGg6IDkxJTtcblxuICAgICAgICAjY2FyZCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICN0YWJsZS1jb21wb25lbnQge1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzI3M0I1NjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAjdGZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgICAgICAgICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUlOyAvL2JhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4ICM3MDcwNzAgc29saWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI2lucHV0LWZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODElO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdXJ5LWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAjYWRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDguNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKGJsYWNrLCAwLjI2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICN0bWFzdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTIgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgICN0aGVhZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBIRUFERVIgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI3Rib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwIDEgYXV0bzsgLy8gYmFja2dyb3VuZDogYnJvd247XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJvdzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWJhY2tncm91bmQsIC4wOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBCT0RZICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1jb2x1bW4tZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtY29sdW1uLXZhbGlkYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtY29sdW1uLWV4cGFuZGVkRGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxOHB4IDEwcHggLTE4cHggcmdiYSgwLDAsMCwwLjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGFibGUtY29sdW1ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICN0Zm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcblxuICAgICAgICAgICAgICAgICAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjYXB0aW9uIGZvcm1hdHRpbmdcbi5jaXJjbGUtc21hbGwge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAjdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAjdGZpbHRlciB7XG4gICAgICAgICV1bnNldC13aWR0aCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAjdGl0bGUge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgI3RpdGxlLFxuICAgICAgICAjaW5wdXQtZmlsdGVyLFxuICAgICAgICAjYWRkIHtcbiAgICAgICAgICAgIEBleHRlbmQgJXVuc2V0LXdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3RoZWFkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICN0Ym9keSB7XG4gICAgICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7IC8vIGZpeCBsYXlvdXQgaW4gdGhlIGZpcmVmb3hcbiAgICB9XG5cbiAgICBtYXQtdGFibGUge1xuICAgICAgICBAZWFjaCAkaGVhZGluZyBpbiAkZmllbGRzIHtcbiAgICAgICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgodW5zZXQgIWltcG9ydGFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMCA4cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZnVyeS1saXN0LXRhYmxlIC5mdXJ5LWxpc3QtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5mdXJ5LWNvbHVtbi1maWx0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vICRtYXQtc2dtLXByaW1hcnk6IChcbi8vICAgICA1MCA6ICNlNWU3ZWIsXG4vLyAgICAgMTAwIDogI2JlYzRjYyxcbi8vICAgICAyMDAgOiAjOTM5ZGFiLFxuLy8gICAgIDMwMCA6ICM2ODc2ODksXG4vLyAgICAgNDAwIDogIzQ3NTg2Zixcbi8vICAgICA1MDAgOiAjMjczYjU2LFxuLy8gICAgIDYwMCA6ICMyMzM1NGYsXG4vLyAgICAgNzAwIDogIzFkMmQ0NSxcbi8vICAgICA4MDAgOiAjMTcyNjNjLFxuLy8gICAgIDkwMCA6ICMwZTE5MmIsXG4vLyAgICAgQTEwMCA6ICM2OTliZmYsXG4vLyAgICAgQTIwMCA6ICMzNjc5ZmYsXG4vLyAgICAgQTQwMCA6ICMwMzU3ZmYsXG4vLyAgICAgQTcwMCA6ICMwMDRlZTksXG4vLyAgICAgY29udHJhc3Q6IChcbi8vICAgICAgICAgNTAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAxMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAzMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA0MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA1MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA2MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA3MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA4MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA5MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTIwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE0MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNzAwIDogI2ZmZmZmZixcbi8vICAgICApXG4vLyApO1xuXG4kbWF0LXNnbS1wcmltYXJ5OiAoXG4gICAgNTAgOiAjZThlOWZiLFxuICAgIDEwMCA6ICNjNWM5ZjUsXG4gICAgMjAwIDogIzlmYTVlZixcbiAgICAzMDAgOiAjNzk4MGU4LFxuICAgIDQwMCA6ICM1YzY1ZTMsXG4gICAgNTAwIDogIzNmNGFkZSxcbiAgICAvLzUwMCA6ICMwMDAwMDAsXG4gICAgNjAwIDogIzM5NDNkYSxcbiAgICA3MDAgOiAjMzEzYWQ1LFxuICAgIDgwMCA6ICMyOTMyZDEsXG4gICAgOTAwIDogIzFiMjJjOCxcbiAgICBBMTAwIDogI2ZkZmRmZixcbiAgICBBMjAwIDogI2NhY2NmZixcbiAgICBBNDAwIDogIzk3OWJmZixcbiAgICBBNzAwIDogIzdlODJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtYXQtc2dtLWFjY2VudDogKFxuICAgIDUwIDogI2U3ZWNlYSxcbiAgICAxMDAgOiAjYzJjZWNiLFxuICAgIDIwMCA6ICM5OWFlYTksXG4gICAgMzAwIDogIzcwOGU4NyxcbiAgICA0MDAgOiAjNTI3NTZkLFxuICAgIDUwMCA6ICMzMzVkNTMsXG4gICAgNjAwIDogIzJlNTU0YyxcbiAgICA3MDAgOiAjMjc0YjQyLFxuICAgIDgwMCA6ICMyMDQxMzksXG4gICAgOTAwIDogIzE0MzAyOSxcbiAgICBBMTAwIDogIzcxZmZkYSxcbiAgICBBMjAwIDogIzNlZmZjZCxcbiAgICBBNDAwIDogIzBiZmZiZixcbiAgICBBNzAwIDogIzAwZjFiMixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbi8vICRtYXQtc2dtLXdhcm46IChcbi8vICAgICA1MCA6ICNmNWY3ZjgsXG4vLyAgICAgMTAwIDogI2U2ZWFlZCxcbi8vICAgICAyMDAgOiAjZDZkZGUyLFxuLy8gICAgIDMwMCA6ICNjNmNmZDYsXG4vLyAgICAgNDAwIDogI2I5YzRjZCxcbi8vICAgICA1MDAgOiAjYWRiYWM0LFxuLy8gICAgIDYwMCA6ICNhNmIzYmUsXG4vLyAgICAgNzAwIDogIzljYWJiNixcbi8vICAgICA4MDAgOiAjOTNhM2FmLFxuLy8gICAgIDkwMCA6ICM4Mzk0YTIsXG4vLyAgICAgQTEwMCA6ICNmZmZmZmYsXG4vLyAgICAgQTIwMCA6ICNmZGZlZmYsXG4vLyAgICAgQTQwMCA6ICNjOWU3ZmYsXG4vLyAgICAgQTcwMCA6ICNiMGRiZmYsXG4vLyAgICAgY29udHJhc3Q6IChcbi8vICAgICAgICAgNTAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAxMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAzMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA0MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA1MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA2MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA3MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA4MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA5MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNzAwIDogIzAwMDAwMCxcbi8vICAgICApXG4vLyApO1xuXG4kbWF0LXNnbS13YXJuOiAoXG4gICAgNTAgOiAjZmVlOGU3LFxuICAgIDEwMCA6ICNmYmM2YzMsXG4gICAgMjAwIDogI2Y5YTE5YixcbiAgICAzMDAgOiAjZjc3YjcyLFxuICAgIDQwMCA6ICNmNTVlNTQsXG4gICAgNTAwIDogI2YzNDIzNixcbiAgICA2MDAgOiAjZjEzYzMwLFxuICAgIDcwMCA6ICNlZjMzMjksXG4gICAgODAwIDogI2VkMmIyMixcbiAgICA5MDAgOiAjZWExZDE2LFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZlOGU3LFxuICAgIEE0MDAgOiAjZmZiNmI0LFxuICAgIEE3MDAgOiAjZmY5ZDliLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuJG1kLWNhbGVuZGFyOiAoXG4gICAgNTAgOiAjZWZmMWYzLFxuICAgIDEwMCA6ICNkOGRjZTEsXG4gICAgMjAwIDogI2JlYzRjZCxcbiAgICAzMDAgOiAjYTRhY2I4LFxuICAgIDQwMCA6ICM5MTliYTksXG4gICAgNTAwIDogIzdkODk5YSxcbiAgICA2MDAgOiAjNzU4MTkyLFxuICAgIDcwMCA6ICM2YTc2ODgsXG4gICAgODAwIDogIzYwNmM3ZSxcbiAgICA5MDAgOiAjNGQ1OTZjLFxuICAgIEExMDAgOiAjY2ZlMWZmLFxuICAgIEEyMDAgOiAjOWNjMWZmLFxuICAgIEE0MDAgOiAjNjlhMWZmLFxuICAgIEE3MDAgOiAjNTA5MmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/containers/notices/notices.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/containers/notices/notices.component.ts ***!
  \*********************************************************/
/*! exports provided: NoticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesComponent", function() { return NoticesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _notice_create_update_notice_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-create-update/notice-create-update.component */ "./src/app/containers/notices/notice-create-update/notice-create-update.component.ts");
/* harmony import */ var _module_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/notices */ "./src/app/module/notices/index.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.component */ "./src/app/core/common/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { of } from 'rxjs/internal/observable/of'; // to test without data



// import { ALL_IN_ONE_TABLE_FAKE_DATA } from './notices.fake'; // to test without data

// import { Notice } from 'app/module/notices/model/notice';




var NoticesComponent = /** @class */ (function () {
    // isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
    function NoticesComponent(dialog, apiNotice, snackBar) {
        this.dialog = dialog;
        this.apiNotice = apiNotice;
        this.snackBar = snackBar;
        this.subject$ = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.pageSize = 10;
        // this component is useful for the filter
        this.columns = [
            { name: 'Id', property: 'id', visible: true, isModelProperty: true },
            { name: 'Título', property: 'title', visible: true, isModelProperty: true },
            { name: 'Validade', property: 'validate', visible: true, isModelProperty: true },
            { name: 'Prioridade', property: 'priorityName', visible: true, isModelProperty: true },
            { name: 'Cor', property: 'priorityColor', visible: true, isModelProperty: true },
            // { name: 'expandedDetail', property: 'detailRow', visible: true, isModelProperty: true },
            { name: 'Ações', property: 'actions', visible: true }
        ];
    }
    Object.defineProperty(NoticesComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    NoticesComponent.prototype.loadData = function () {
        var _this = this;
        this.apiNotice.getAllUsingGET()
            .subscribe(function (notices) {
            _this.notices = notices;
            _this.dataSource.data = notices;
            // assignment of sub-objects to the main object
            // const rows = [];
            _this.dataSource.data.forEach(function (n, i) {
                if (!n.priority) {
                    return;
                }
                _this.dataSource.data[i].priorityId = n.priority.id;
                _this.dataSource.data[i].priorityName = n.priority.name;
                _this.dataSource.data[i].priorityColor = n.priority.color;
            });
            // this.dataSource.data.forEach(detail => rows.push(detail, { detailRow: true, detail }));
            // this.dataSource.data = rows;
            _this.paginator.firstPage();
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                _this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
            }
        });
    };
    NoticesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (notices) {
            _this.notices = notices;
            _this.dataSource.data = notices;
        });
    };
    NoticesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    NoticesComponent.prototype.create = function () {
        var _this = this;
        this.dialog.open(_notice_create_update_notice_create_update_component__WEBPACK_IMPORTED_MODULE_5__["NoticeCreateUpdateComponent"], {
            width: '800px',
            panelClass: 'notices-dialog'
        }).afterClosed().subscribe(function (notice) {
            if (notice) {
                _this.apiNotice.createUsingPOST(notice).
                    subscribe(function (success) {
                    _this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    _this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    NoticesComponent.prototype.update = function (notice) {
        var _this = this;
        this.dialog.open(_notice_create_update_notice_create_update_component__WEBPACK_IMPORTED_MODULE_5__["NoticeCreateUpdateComponent"], {
            data: notice,
            width: '800px',
            panelClass: 'notices-dialog'
        }).afterClosed().subscribe(function (_notice) {
            if (_notice) {
                _this.apiNotice.updateUsingPUT(_notice).
                    subscribe(function (success) {
                    _this.snackBar.open('Item atualizado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    _this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    NoticesComponent.prototype.delete = function (notice) {
        var _this = this;
        this.dialog.open(_core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteComponent"], {
            data: { id: notice.id, displayName: notice.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe(function (_notice) {
            if (_notice && _notice.id) {
                _this.apiNotice.deleteUsingDELETE(_notice.id).
                    subscribe(function (success) {
                    _this.snackBar.open('Item deletado com sucesso!', 'OK', {
                        duration: 10000
                    });
                    // Reload the table after the post
                    _this.loadData();
                }, function (error) {
                    _this.snackBar.open(error.error[0].title ? error.error[0].title : 'Erro na requisição.', 'OK', {
                        duration: 10000
                    });
                });
            }
        });
    };
    NoticesComponent.prototype.ngOnDestroy = function () {
    };
    NoticesComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    /**
   * expand collapse a row
   * @param row
   */
    NoticesComponent.prototype.toggleRow = function (row) {
        if (this.expandedElement === row) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = row;
        }
    };
    NoticesComponent.isInitialLoad = true;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NoticesComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], NoticesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], NoticesComponent.prototype, "sort", void 0);
    NoticesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-notices',
            template: __webpack_require__(/*! ./notices.component.html */ "./src/app/containers/notices/notices.component.html"),
            styles: [__webpack_require__(/*! ./notices.component.scss */ "./src/app/containers/notices/notices.component.scss")],
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ]),
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _module_notices__WEBPACK_IMPORTED_MODULE_6__["NoticeControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], NoticesComponent);
    return NoticesComponent;
}());



/***/ }),

/***/ "./src/app/containers/notices/notices.module.ts":
/*!******************************************************!*\
  !*** ./src/app/containers/notices/notices.module.ts ***!
  \******************************************************/
/*! exports provided: NoticesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesModule", function() { return NoticesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/page/page.module */ "./src/app/core/common/page/page.module.ts");
/* harmony import */ var _notices_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notices-routing.module */ "./src/app/containers/notices/notices-routing.module.ts");
/* harmony import */ var _notices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notices.component */ "./src/app/containers/notices/notices.component.ts");
/* harmony import */ var _notice_create_update_notice_create_update_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notice-create-update/notice-create-update.module */ "./src/app/containers/notices/notice-create-update/notice-create-update.module.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.module */ "./src/app/core/common/dialog-delete/dialog-delete.module.ts");
/* harmony import */ var _module_notices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../module/notices */ "./src/app/module/notices/index.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var NoticesModule = /** @class */ (function () {
    function NoticesModule() {
    }
    NoticesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _notices_routing_module__WEBPACK_IMPORTED_MODULE_7__["NoticesRoutingModule"],
                _notice_create_update_notice_create_update_module__WEBPACK_IMPORTED_MODULE_9__["NoticeCreateUpdateModule"],
                // Core
                _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"],
                _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_10__["DialogDeleteModule"]
            ],
            declarations: [_notices_component__WEBPACK_IMPORTED_MODULE_8__["NoticesComponent"]],
            exports: [_notices_component__WEBPACK_IMPORTED_MODULE_8__["NoticesComponent"]],
            providers: [
                { provide: _module_notices__WEBPACK_IMPORTED_MODULE_11__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].origin.notices },
                _module_notices__WEBPACK_IMPORTED_MODULE_11__["NoticeControllerService"]
            ]
        })
    ], NoticesModule);
    return NoticesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-containers-notices-notices-module.js.map