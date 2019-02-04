(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-profiles-profiles-module"],{

/***/ "./src/app/containers/profiles/profile-create-update/profile-create-update.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/containers/profiles/profile-create-update/profile-create-update.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"close\">\n        <!-- <span><img src='assets/icons/x.png' /></span> -->\n        <button type=\"button\" class=\"mat-icon-button\" mat-dialog-close>\n            <span class=\"mat-button-wrapper\">\n                <img src='assets/icons/x.png' />\n            </span>\n        </button>\n    </div>\n    <div class=\"title\">\n        <div class=\"title-text\">\n            <h1>Cadastrar Perfil</h1>\n        </div>\n    </div>\n    <div class=\"form\">\n        <form [formGroup]=\"form\">\n            <div class=\"fields\">\n                <mat-card>\n                    <mat-form-field fxFlex>\n                        <input matInput placeholder=\"Nome do Perfil\" pattern=\"^(?!\\s*$).+\" formControlName=\"name\" id=\"name\"\n                            required />\n                    </mat-form-field>\n                </mat-card>\n            </div>\n        </form>\n    </div>\n    <div class=\"list\">\n        <mat-card>\n            <mat-form-field class=\"fury-filter-input\" floatPlaceholder=\"never\" fxFlex>\n                <mat-icon class=\"fury-filter-input-icon\" matPrefix>search</mat-icon>\n                <input matInput #filter placeholder=\"Buscar na lista&hellip;\">\n            </mat-form-field>\n            <div class=\"table\">\n                <table mat-table [dataSource]=\"dataSource\" matSort fxFlex>\n\n                    <!-- active Column -->\n                    <ng-container matColumnDef=\"active\">\n                        <th mat-header-cell *matHeaderCellDef> Status </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <mat-checkbox [checked]=\"element.active\"></mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- name Column -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Módulo </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n\n                    <!-- view Column -->\n                    <ng-container matColumnDef=\"view\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Visualizar </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <mat-checkbox formControNamte=\"view\" [checked]=\"element.view\"></mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- create Column -->\n                    <ng-container matColumnDef=\"create\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Cadasrar </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <mat-checkbox [checked]=\"element.create\"></mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- update Column -->\n                    <ng-container matColumnDef=\"update\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Alterar </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <mat-checkbox [checked]=\"element.update\"></mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- delete Column -->\n                    <ng-container matColumnDef=\"delete\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Deletar </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <mat-checkbox [checked]=\"element.delete\"></mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"visibleColumns; sticky: true\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: visibleColumns;\"></tr>\n                </table>\n            </div>\n\n        </mat-card>\n    </div>\n    <div class=\"footer\">\n            <button *ngIf=\"isCreateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" (click)=\"save()\"\n            color=\"primary\">SALVAR</button>\n        <button *ngIf=\"isUpdateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" color=\"primary\"\n            (click)=\"save()\">ATUALIZAR</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/containers/profiles/profile-create-update/profile-create-update.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/containers/profiles/profile-create-update/profile-create-update.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: white;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  margin: 0; }\n\nh1 {\n  font-size: 150%;\n  color: #1A273A;\n  text-align: center; }\n\nh2 {\n  font-size: 20px;\n  color: #1A273A;\n  text-align: center;\n  font-weight: 500; }\n\nhtml {\n  height: 100%; }\n\n.dialog-detail .card {\n  height: 100%;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 16;\n  display: grid;\n  grid-template-rows: repeat(16, 1fr); }\n\n.dialog-detail .title {\n  /*  background-color:chartreuse;*/\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr); }\n\n.dialog-detail .title-text {\n  /*  background-color:violet;*/\n  grid-row-start: 2;\n  grid-row-end: 3; }\n\n.dialog-detail .form {\n  /*  background-color:crimson;*/\n  grid-row-start: 3;\n  grid-row-end: 6;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-bottom: 10px;\n  overflow: auto; }\n\n.dialog-detail .list {\n  grid-row-start: 6;\n  grid-row-end: 16;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  padding-right: 30px;\n  overflow: auto; }\n\n.dialog-detail .list .mat-card {\n    flex-direction: column;\n    margin-bottom: 10px; }\n\n.dialog-detail .list .mat-card .table {\n      overflow: auto; }\n\n.dialog-detail .footer {\n  grid-row-start: 16;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 30px;\n  margin-bottom: 30px; }\n\n.dialog-detail .footer .btn-save {\n    flex: .2 1 0%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n    font-size: 100%;\n    font-weight: lighter; }\n\n.dialog-detail .close {\n  grid-column-start: 1;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  z-index: 1;\n  align-items: flex-start;\n  justify-content: flex-end;\n  display: flex; }\n\n.dialog-detail .row {\n  display: flex;\n  flex-wrap: wrap; }\n\n.dialog-detail .mat-dialog-container {\n  padding: unset; }\n\n@media screen and (max-width: 1000px) {\n  .dialog-detail {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9wcm9maWxlcy9wcm9maWxlLWNyZWF0ZS11cGRhdGUvcHJvZmlsZS1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osU0FBUyxFQUFBOztBQUdiO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBRVEsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUNBQW1DLEVBQUE7O0FBUjNDO0VBWVEsaUNBQUE7RUFDQSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtDQUFrQyxFQUFBOztBQWxCMUM7RUFzQlEsNkJBQUE7RUFDQSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQXhCdkI7RUE0QlEsOEJBQUE7RUFFQSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQXJDdEI7RUEyQ1EsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQWpEdEI7SUFvRFksc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBOztBQXJEL0I7TUF1RGdCLGNBQWMsRUFBQTs7QUF2RDlCO0VBOERRLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBbkUzQjtJQXFFWSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixvQkFBb0IsRUFBQTs7QUF4RWhDO0VBNkVRLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhLEVBQUE7O0FBcEZyQjtFQXdGUSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQXpGdkI7RUE2RlEsY0FBYyxFQUFBOztBQUl0QjtFQUNJO0lBQ0ksMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBQSxFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcHJvZmlsZXMvcHJvZmlsZS1jcmVhdGUtdXBkYXRlL3Byb2ZpbGUtY3JlYXRlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kdGhlbWUtYmFja2dyb3VuZDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBjb2xvcjogIzFBMjczQTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxQTI3M0E7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRpYWxvZy1kZXRhaWwge1xuICAgIC5jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxNjtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTYsIDFmcik7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgLyogIGJhY2tncm91bmQtY29sb3I6Y2hhcnRyZXVzZTsqL1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIH1cblxuICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgLyogIGJhY2tncm91bmQtY29sb3I6dmlvbGV0OyovXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgfVxuXG4gICAgLmZvcm0ge1xuICAgICAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjpjcmltc29uOyovXG4gICAgXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIFxuXG4gICAgfVxuICAgIC5saXN0e1xuICAgICAgICBncmlkLXJvdy1zdGFydDogNjtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxNjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgLm1hdC1jYXJke1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxuICAgICAgICAgICAgLnRhYmxle1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE2O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIC5idG4tc2F2ZSB7XG4gICAgICAgICAgICBmbGV4OiAuMiAxIDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNsb3NlIHtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiB1bnNldDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5kaWFsb2ctZGV0YWlsIHtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/containers/profiles/profile-create-update/profile-create-update.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/containers/profiles/profile-create-update/profile-create-update.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProfileCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCreateUpdateComponent", function() { return ProfileCreateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _profiles_fake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profiles.fake */ "./src/app/containers/profiles/profiles.fake.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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







var ProfileCreateUpdateComponent = /** @class */ (function () {
    function ProfileCreateUpdateComponent(defaults, dialogRef, snackBar, 
    // private apiProfile: ProfileControllerService,
    fb) {
        // load the profile
        //     this.apiProfile. getAllUsingGET1().
        //     subscribe(noti => {
        //                       this.profile =  <Profile[]>noti;
        // });
        // A lista vem de um getallModules
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.fb = fb;
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.mode = 'create';
        // optionControl = new FormControl();
        // options: Profile[];
        // filteredOptions: Observable<Profile[]>;
        this.columns = [
            { name: 'Status', property: 'active', visible: true, isModelProperty: true },
            // { name: 'Id', property: 'id', visible: true, isModelProperty: true },
            { name: 'Módulo', property: 'name', visible: true, isModelProperty: true },
            { name: 'Visualizar', property: 'view', visible: true, isModelProperty: true },
            { name: 'Cadastrar', property: 'create', visible: true, isModelProperty: true },
            { name: 'Alterar', property: 'update', visible: true, isModelProperty: true },
            { name: 'Deletar', property: 'delete', visible: true, isModelProperty: true },
        ];
        this.modules = [];
        var _modules = _profiles_fake__WEBPACK_IMPORTED_MODULE_4__["MOCK_DATA"];
        for (var _i = 0, _modules_1 = _modules; _i < _modules_1.length; _i++) {
            var item = _modules_1[_i];
            this.modules.push({ id: item.id, name: item.name, active: false, view: false, update: false, delete: false });
        }
        // // this.apiPart.getAllUsingGET().subscribe(
        // //   success => {
        //     // preenche o array de opções
        //     this.options = success;
        //     // Remove os objetos já cadastrados
        //     this.defaults.parts.map((_obj) => {
        //       const o = this.options.find(a => a.id === _obj.id);
        //       this.options.splice(this.options.indexOf(o), 1);
        //   //   });
        //   // },
        //   // error => {
        //   //   if (error.status === 0 || error.status === 404 || error.status === 500) {
        //   //     this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
        //   //     });
        //   //   }
        //   // });
        // passa a lista dos modulos com os nomes
        // insere o dados em brancos
        // fica nesse formato
        // => [id, nome, idCompany, view, create, update, delete, active]
        // instance the form group for mode Update and Create
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            modules: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    Object.defineProperty(ProfileCreateUpdateComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    ProfileCreateUpdateComponent.prototype.loadData = function () {
        // this.apiProfile.getAllUsingGET()
        //   .subscribe(profiles => {
        //     this.profiles = profiles;
        //     this.dataSource.data = profiles;
        //      this.paginator.firstPage();
        //   },
        //    error => {
        //        if (error.status === 0 || error.status === 404) {
        //            this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
        //            });
        //        }
        //    });
        this.dataSource.data = this.modules;
    };
    ProfileCreateUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // console.log(this.visibleColumns);
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(Boolean)).subscribe(function (modules) {
            _this.modules = modules;
            _this.dataSource.data = modules;
        });
        if (this.defaults) { // <-- do you have data from the main screen?
            this.mode = 'update';
            this.dataSource.data = this.defaults.modules;
            // Used in the Update Mode to fill the fields
            this.form = this.fb.group({
                id: [this.defaults.id || null],
                name: [this.defaults.name],
                modules: [this.defaults.modules]
            });
            if (this.defaults.mode === 'copy') {
                // A copia tem o mesmo comportamento do create, só que os modulos são preenchidos
                this.mode = 'create';
                this.dataSource.data = this.defaults.profile.modules;
                this.form = this.fb.group({
                    id: [this.defaults.profile.id || null],
                    name: [null],
                    modules: [this.defaults.profile.modules]
                });
            }
        }
        else { // <-- don't have data :( = Mode Create
            this.mode = 'create';
            this.defaults = {}; // takes blank :)
        }
    };
    ProfileCreateUpdateComponent.prototype.createOrUpdate = function () {
        if (this.mode === 'create') {
            this.createProfile();
        }
        else if (this.mode === 'update') {
            this.updateProfile();
        }
    };
    ProfileCreateUpdateComponent.prototype.save = function () {
        var _this = this;
        // verifica nome
        this.verifyName().then(function (_success) {
            if (_success && _success.length) {
                _this.form.get('name').setErrors({ 'invalid': true });
                _this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
                    duration: 10000
                });
            }
            else {
                _this.createOrUpdate();
            }
        }).catch(function (_error) {
            console.log(_error);
        });
    };
    ProfileCreateUpdateComponent.prototype.createProfile = function () {
        // send the color as object instead of value
        var profile = this.form.value;
        this.dialogRef.close(profile);
    };
    ProfileCreateUpdateComponent.prototype.updateProfile = function () {
        // send the color as object instead of value
        var profile = this.form.value;
        profile.id = this.defaults.id;
        this.dialogRef.close(profile);
    };
    ProfileCreateUpdateComponent.prototype.isCreateMode = function () {
        return this.mode === 'create';
    };
    ProfileCreateUpdateComponent.prototype.isUpdateMode = function () {
        return this.mode === 'update';
    };
    ProfileCreateUpdateComponent.prototype.verifyName = function () {
        var name = this.form.get('name').value;
        // se estiver nulo, volta
        if (!name) {
            return Promise.reject();
        }
        // se for igual ao anterior, volta também
        if (name === this.defaults.name) {
            return Promise.resolve(true);
        }
        var data = {
            name: name,
            idCompany: this.form.get('idCompany').value,
        };
        // const promise = this.apiProfile.getByNameUsingPOST(data).
        //   toPromise();
        // return promise;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProfileCreateUpdateComponent.prototype, "columns", void 0);
    ProfileCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-profile-create-update',
            template: __webpack_require__(/*! ./profile-create-update.component.html */ "./src/app/containers/profiles/profile-create-update/profile-create-update.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./profile-create-update.component.scss */ "./src/app/containers/profiles/profile-create-update/profile-create-update.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ProfileCreateUpdateComponent);
    return ProfileCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/containers/profiles/profile-create-update/profile-create-update.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/containers/profiles/profile-create-update/profile-create-update.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProfileCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCreateUpdateModule", function() { return ProfileCreateUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _profile_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-create-update.component */ "./src/app/containers/profiles/profile-create-update/profile-create-update.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProfileCreateUpdateModule = /** @class */ (function () {
    function ProfileCreateUpdateModule() {
    }
    ProfileCreateUpdateModule = __decorate([
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
                app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__["DialogPanelModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"]
            ],
            declarations: [_profile_create_update_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCreateUpdateComponent"]],
            entryComponents: [_profile_create_update_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCreateUpdateComponent"]],
            exports: [_profile_create_update_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCreateUpdateComponent"]]
        })
    ], ProfileCreateUpdateModule);
    return ProfileCreateUpdateModule;
}());



/***/ }),

/***/ "./src/app/containers/profiles/profiles-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/profiles/profiles-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfilesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesRoutingModule", function() { return ProfilesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profiles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profiles.component */ "./src/app/containers/profiles/profiles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _profiles_component__WEBPACK_IMPORTED_MODULE_2__["ProfilesComponent"]
    }
];
var ProfilesRoutingModule = /** @class */ (function () {
    function ProfilesRoutingModule() {
    }
    ProfilesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfilesRoutingModule);
    return ProfilesRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/profiles/profiles.component.html":
/*!*************************************************************!*\
  !*** ./src/app/containers/profiles/profiles.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"background-profile\">\n    <div id=\"conteiner\">\n      <div id=\"card\">\n        <div id=\"table-component\">\n          <!-- TABLE FILTER -->\n          <div id=\"tfilter\">\n            <div id=\"title\">\n              <span>Perfis</span>\n            </div>\n            <div id=\"input-filter\">\n              <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\" fxLayout=\"row\"></fury-list>\n            </div>\n            <div id=\"add\">\n              <button mat-mini-fab color=\"primary\"  matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\">\n                <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n              </button>\n            </div>\n          </div>\n          <!-- TABLE HEADER -->\n          <!-- The header is separate so you do not lose the filters or the sorting and keep the layout-->\n          <div id=\"tmaster\">\n            <div id=\"thead\" matSort>\n              <div class=\"table-header\">\n                <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\" \n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                  {{column.name | uppercase}}\n                </div>\n              </div>\n            </div>\n            <!-- TABLE BODY -->\n            <div id=\"tbody\">\n              <!-- Note: Mat-table does not compile without mat-cell -->\n              <mat-table #table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\n              <!-- fullName Column -->\n              <ng-container *ngFor=\"let column of columns\">\n                <ng-container *ngIf=\"column.isModelProperty\" [matColumnDef]=\"column.property\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.name }}</mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                    <!-- <span class=\"fury-mobile-label\">{{ column.name }}</span> -->\n                    {{ extractValue(row,column.cellContent,column.property) }}\n                  </mat-cell>\n                </ng-container>\n              </ng-container>\n\n                <!-- actions Column -->\n                <ng-container matColumnDef=\"actions\">\n                  <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"> AÇÕES </mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                    <button matTooltip=\"Copiar este Perfil\" [matTooltipPosition]=\"'above'\" (click)=\"copy(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                        <mat-icon aria-label=\"Copiar\">file_copy</mat-icon>\n                      </button>\n                    <button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                      <mat-icon aria-label=\"Editar\">edit</mat-icon>\n                    </button>\n                    <button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                      <mat-icon aria-label=\"Deletar\">delete</mat-icon>\n                    </button>\n                  </mat-cell>\n                  \n                </ng-container>\n                <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: visibleColumns;\" class=\"clickable\"></mat-row>\n              </mat-table>\n            </div>\n          </div>\n          <!-- TABLE FOOTER -->\n          <div id=\"tfooter\">\n            <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/containers/profiles/profiles.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/containers/profiles/profiles.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-profile, #background-profile #conteiner #card #table-component #tfilter, #background-profile #conteiner #card #table-component #tfilter #input-filter, #background-profile #conteiner #card #table-component #tfilter #add, #background-profile #conteiner #card #table-component #tmaster #thead, #background-profile #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .id, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .name, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name button, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name button {\n    margin: 5px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n#background-profile {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-profile #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-profile #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-profile #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-profile #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n          color: #3f4ade;\n          z-index: 2; }\n\n#background-profile #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-profile #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 76.5%; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-profile #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-profile #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-profile #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #3f4ade;\n              display: inline-flex;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(63, 74, 222, 0.08); }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #3f4ade !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 20px;\n                  text-align: left; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail p {\n                    font-weight: 300; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-profile #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-profile #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #3f4ade;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 140px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-name {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9zdHlsZXMvX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBUWY7RUFuQkosdUJBSjJCO0VBSzNCLHVCQUwyQjtFQU0zQixtQkFOMkI7RUF5Qm5CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBMUJKLHVCQUoyQjtFQUszQix1QkFMMkI7RUFNM0IsbUJBTjJCO0VBZ0NuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRWQ7SUFDSSxXQUFXLEVBQUE7O0FBYnZCO0VBbkJKLHVCQUoyQjtFQUszQix1QkFMMkI7RUFNM0IsbUJBTjJCO0VBeUJuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQTFCSix1QkFKMkI7RUFLM0IsdUJBTDJCO0VBTTNCLG1CQU4yQjtFQWdDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVkO0lBQ0ksV0FBVyxFQUFBOztBQWJ2QjtFQW5CSix1QkFKMkI7RUFLM0IsdUJBTDJCO0VBTTNCLG1CQU4yQjtFQXlCbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUExQkosdUJBSjJCO0VBSzNCLHVCQUwyQjtFQU0zQixtQkFOMkI7RUFnQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFZDtJQUNJLFdBQVcsRUFBQTs7QUFPL0I7O0VBRUksWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUV0QixlQUFlLEVBQUE7O0FBTG5CO0lBT1EsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVUsRUFBQTs7QUFkbEI7TUFnQlksY0FBYztNQUNkLGFBQWE7TUFDYixlQUFlLEVBQUE7O0FBbEIzQjtRQXFCZ0IsY0FBYztRQUNkLGFBQWE7UUFDYixzQkFBc0IsRUFBQTs7QUF2QnRDO1VBMEJvQixhQUFhO1VBQ2IsZ0JBQWdCO1VBQ2hCLDJDQUFtQztVQUNuQyxjQ25ESDtVRG9ERyxVQUFVLEVBQUE7O0FBOUI5QjtZQWdDd0Isa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFjO1lBQ2QsK0JBQStCLEVBQUE7O0FBdEN2RDtjQXdDNEIsY0FBYyxFQUFBOztBQXhDMUM7WUE2Q3dCLGdCQUFnQixFQUFBOztBQTdDeEM7Y0ErQzRCLGNBQWMsRUFBQTs7QUEvQzFDO2dCQWlEZ0MsY0FBYyxFQUFBOztBQWpEOUM7a0JBbURvQyxhQUFhLEVBQUE7O0FBbkRqRDtrQkFzRG9DLCtCQUErQjtrQkFDL0IsNEJBQTRCLEVBQUE7O0FBdkRoRTtvQkF5RHdDLDhCQUE4QjtvQkFDOUIsa0NBQWtDLEVBQUE7O0FBMUQxRTtZQWlFd0IsYUFBYTtZQUNiLGVBQWUsRUFBQTs7QUFsRXZDO2NBcUU0QiwyQ0FBbUMsRUFBQTs7QUFyRS9EO1VBMEVvQixhQUFhO1VBQ2IsZUFBZTtVQUNmLHNCQUFzQixFQUFBOztBQTVFMUM7WUErRXdCLGtCQUFrQjtZQUNsQixnQkFBZ0IsRUFBQTs7QUFoRnhDO2NBa0Y0QixhQUFhO2NBQ2Isa0NBQWtDLEVBQUE7O0FBbkY5RDtjQXNGNEIsV0FBVztjQUNYLGNDN0dYO2NEOEdXLG9CQUFvQjtjQUNwQixpQkFBaUI7Y0FDakIsV0FBQSxFQUFZOztBQTFGeEM7WUErRndCLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYiwyQ0FBbUM7WUFDbkMsVUFBVTtZQUNWLGNBQWM7WUFDZCxTQUFTLEVBQUE7O0FBdEdqQztjQXdHNEIsV0FBVztjQTJDWCxTQUFBLEVBQVU7O0FBbkp0QztnQkEwR2dDLGFBQWEsRUFBQTs7QUExRzdDO2dCQTZHZ0MsOEJBQThCLEVBQUE7O0FBN0c5RDtnQkFnSGdDLCtCQUErQixFQUFBOztBQWhIL0Q7Z0JBbUhnQyx5Q0N6SWYsRUFBQTs7QURzQmpCO2dCQXNIZ0MseUJBQW1DO2dCQUNuQyw4QkFBOEI7Z0JBQzlCLDhCQUE4QjtnQkFDOUIsK0JBQStCO2dCQUMvQixlQUFlLEVBQUE7O0FBMUgvQztnQkFnSWdDLHdEQUFxRCxFQUFBOztBQWhJckY7a0JBbUlvQyxhQUFhO2tCQUNiLGdCQUFnQixFQUFBOztBQXBJcEQ7b0JBdUl3QyxnQkFBZ0IsRUFBQTs7QUF2SXhEO29CQTJJd0MsZ0JBQWdCLEVBQUE7O0FBM0l4RDtnQkFpSmdDLGtCQUFrQixFQUFBOztBQWpKbEQ7VUEwSm9CLGtCQUFrQjtVQUNsQixnQkFBZ0IsRUFBQTs7QUEzSnBDO1lBNkp3QixXQUFXO1lBQ1gsY0NwTFA7WURxTE8sZUFBZSxFQUFBOztBQVN2QztFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJO0lBQ0ksMEJBQXlCLEVBQUEsRUFDNUI7O0FBR0w7RUFDSTtJQUNJLDBCQUEwQixFQUFBO0VBRTlCO0lBQ0ksWUFBWSxFQUFBO0VBRWhCO0lBQ0ksd0JBQXdCLEVBQUEsRUFDM0I7O0FBR0w7RUFDSTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHVCQUF1QixFQUFBO0VBRTNCO0lBS1EsOEJBQThCLEVBQUE7RUFHdEM7SUFDSSx3QkFBd0IsRUFBQTtFQUU1QjtJQUNJLHNCQUFzQixFQUFBO0VBRXRCO0lBM1FKLDJCQThRa0Q7SUE3UWxELDJCQTZRa0Q7SUE1UWxELHVCQTRRa0QsRUFBQTtFQUg5QztJQTNRSiwyQkE4UWtEO0lBN1FsRCwyQkE2UWtEO0lBNVFsRCx1QkE0UWtELEVBQUE7RUFIOUM7SUEzUUosMkJBOFFrRDtJQTdRbEQsMkJBNlFrRDtJQTVRbEQsdUJBNFFrRCxFQUFBO0VBSDlDO0lBUUksaUJBQWlCLEVBQUE7RUFHekI7SUFDSSx5QkFBeUIsRUFBQTtFQUU3QjtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUIsRUFBQTtJQUY3QjtNQUlRLHdCQUF3QixFQUFBLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCBcIl9jdXN0b21fY29sb3Jfc2NoZW1lLnNjc3NcIjtcbiR0aGVtZS1iYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXA6ICRtYXQtc2dtLXByaW1hcnksICRrZXk6IDUwMCk7XG5cbi8vIExpc3RhIGRlIGNhbXBvc1xuJGZpZWxkczogKCdpZCcsXG4nbmFtZScsXG4nYWN0aW9ucydcbik7XG5cbi8vIFBhZHJvbml6YSBvIHRhbWFuaG8gZG9zIGNhbXBvc1xuJGxlbmd0aDogMTAwL2xlbmd0aCgkZmllbGRzKSoxJTtcblxuXG5AbWl4aW4gY29sdW1uLXdpZHRoKCRwcm9wZXJ0eSkge1xuICAgIG1heC13aWR0aDogJHByb3BlcnR5O1xuICAgIG1pbi13aWR0aDogJHByb3BlcnR5O1xuICAgIHdpZHRoOiAkcHJvcGVydHk7ICAgIFxufVxuXG4vLyBjZW50cmFsaXplcyBhbGwgY29udGFpbmVyIGl0ZW1zXG4lZmxleC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIENvbmZpZ3VyYcOnw7VlcyBuw6NvIHBhZHLDtWVzIHBhcmEgYXMgY29sdW5hc1xuJXRhYmxlLWNvbHVtbnMge1xuXG4gICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG5cbiAgICAgICAgLiN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4OyAvLyBzb3J0aW5nIGFycm93IGRpc2NvdW50XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgoJGxlbmd0aCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIEBpZiAjeyRoZWFkaW5nfT09YWN0aW9ucyB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNiYWNrZ3JvdW5kLXByb2ZpbGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvL2JhY2tncm91bmQ6IGdyZWVuO1xuICAgICNjb250ZWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgaGVpZ2h0OiA5MSU7XG4gICAgICAgIHdpZHRoOiA5MSU7XG4gICAgICAgICNjYXJkIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICN0YWJsZS1jb21wb25lbnQge1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzI3M0I1NjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgI3RmaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjRweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSggYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUlOyAvL2JhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4ICM3MDcwNzAgc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjaW5wdXQtZmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3Ni41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1cnktbGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2FkZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4LjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjI2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjdG1hc3RlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEyIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgI3RoZWFkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogSEVBREVSICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGFibGUtY29sdW1ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjdGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTAgMSBhdXRvOyAvLyBiYWNrZ3JvdW5kOiBicm93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtYmFja2dyb3VuZCwgLjA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1jb2x1bW4tZXhwYW5kZWREZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMThweCAxMHB4IC0xOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMThweCAxMHB4IC0xOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVsZW1lbnQtZGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQk9EWSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3Rmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjYXB0aW9uIGZvcm1hdHRpbmdcbi5jaXJjbGUtc21hbGwge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAucGFnaW5hdG9ye1xuICAgICAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAjdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZ1cnktZmlsdGVyLWlucHV0e1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgfVxuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAldW5zZXQtd2lkdGh7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgI3RmaWx0ZXIge1xuICAgICAgICAjdGl0bGUsICNpbnB1dC1maWx0ZXIsICNhZGR7XG4gICAgICAgICAgICBAZXh0ZW5kICV1bnNldC13aWR0aDtcbiAgICAgICAgfVxuICAgICAgICAjYWRke1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgICN0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgI3Rib2R5e1xuICAgICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50OyAvLyBmaXggbGF5b3V0IGluIHRoZSBmaXJlZm94XG4gICAgfVxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICBAZWFjaCAkaGVhZGluZyBpbiAkZmllbGRzIHtcbiAgICAgICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgodW5zZXQgIWltcG9ydGFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWxpc3QtdGFibGUgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5mdXJ5LWNvbHVtbi1maWx0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIvLyAkbWF0LXNnbS1wcmltYXJ5OiAoXG4vLyAgICAgNTAgOiAjZTVlN2ViLFxuLy8gICAgIDEwMCA6ICNiZWM0Y2MsXG4vLyAgICAgMjAwIDogIzkzOWRhYixcbi8vICAgICAzMDAgOiAjNjg3Njg5LFxuLy8gICAgIDQwMCA6ICM0NzU4NmYsXG4vLyAgICAgNTAwIDogIzI3M2I1Nixcbi8vICAgICA2MDAgOiAjMjMzNTRmLFxuLy8gICAgIDcwMCA6ICMxZDJkNDUsXG4vLyAgICAgODAwIDogIzE3MjYzYyxcbi8vICAgICA5MDAgOiAjMGUxOTJiLFxuLy8gICAgIEExMDAgOiAjNjk5YmZmLFxuLy8gICAgIEEyMDAgOiAjMzY3OWZmLFxuLy8gICAgIEE0MDAgOiAjMDM1N2ZmLFxuLy8gICAgIEE3MDAgOiAjMDA0ZWU5LFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgODAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgOTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTcwMCA6ICNmZmZmZmYsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20tcHJpbWFyeTogKFxuICAgIDUwIDogI2U4ZTlmYixcbiAgICAxMDAgOiAjYzVjOWY1LFxuICAgIDIwMCA6ICM5ZmE1ZWYsXG4gICAgMzAwIDogIzc5ODBlOCxcbiAgICA0MDAgOiAjNWM2NWUzLFxuICAgIDUwMCA6ICMzZjRhZGUsXG4gICAgLy81MDAgOiAjMDAwMDAwLFxuICAgIDYwMCA6ICMzOTQzZGEsXG4gICAgNzAwIDogIzMxM2FkNSxcbiAgICA4MDAgOiAjMjkzMmQxLFxuICAgIDkwMCA6ICMxYjIyYzgsXG4gICAgQTEwMCA6ICNmZGZkZmYsXG4gICAgQTIwMCA6ICNjYWNjZmYsXG4gICAgQTQwMCA6ICM5NzliZmYsXG4gICAgQTcwMCA6ICM3ZTgyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWF0LXNnbS1hY2NlbnQ6IChcbiAgICA1MCA6ICNlN2VjZWEsXG4gICAgMTAwIDogI2MyY2VjYixcbiAgICAyMDAgOiAjOTlhZWE5LFxuICAgIDMwMCA6ICM3MDhlODcsXG4gICAgNDAwIDogIzUyNzU2ZCxcbiAgICA1MDAgOiAjMzM1ZDUzLFxuICAgIDYwMCA6ICMyZTU1NGMsXG4gICAgNzAwIDogIzI3NGI0MixcbiAgICA4MDAgOiAjMjA0MTM5LFxuICAgIDkwMCA6ICMxNDMwMjksXG4gICAgQTEwMCA6ICM3MWZmZGEsXG4gICAgQTIwMCA6ICMzZWZmY2QsXG4gICAgQTQwMCA6ICMwYmZmYmYsXG4gICAgQTcwMCA6ICMwMGYxYjIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4vLyAkbWF0LXNnbS13YXJuOiAoXG4vLyAgICAgNTAgOiAjZjVmN2Y4LFxuLy8gICAgIDEwMCA6ICNlNmVhZWQsXG4vLyAgICAgMjAwIDogI2Q2ZGRlMixcbi8vICAgICAzMDAgOiAjYzZjZmQ2LFxuLy8gICAgIDQwMCA6ICNiOWM0Y2QsXG4vLyAgICAgNTAwIDogI2FkYmFjNCxcbi8vICAgICA2MDAgOiAjYTZiM2JlLFxuLy8gICAgIDcwMCA6ICM5Y2FiYjYsXG4vLyAgICAgODAwIDogIzkzYTNhZixcbi8vICAgICA5MDAgOiAjODM5NGEyLFxuLy8gICAgIEExMDAgOiAjZmZmZmZmLFxuLy8gICAgIEEyMDAgOiAjZmRmZWZmLFxuLy8gICAgIEE0MDAgOiAjYzllN2ZmLFxuLy8gICAgIEE3MDAgOiAjYjBkYmZmLFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgODAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgOTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20td2FybjogKFxuICAgIDUwIDogI2ZlZThlNyxcbiAgICAxMDAgOiAjZmJjNmMzLFxuICAgIDIwMCA6ICNmOWExOWIsXG4gICAgMzAwIDogI2Y3N2I3MixcbiAgICA0MDAgOiAjZjU1ZTU0LFxuICAgIDUwMCA6ICNmMzQyMzYsXG4gICAgNjAwIDogI2YxM2MzMCxcbiAgICA3MDAgOiAjZWYzMzI5LFxuICAgIDgwMCA6ICNlZDJiMjIsXG4gICAgOTAwIDogI2VhMWQxNixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZThlNyxcbiAgICBBNDAwIDogI2ZmYjZiNCxcbiAgICBBNzAwIDogI2ZmOWQ5YixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtZC1jYWxlbmRhcjogKFxuICAgIDUwIDogI2VmZjFmMyxcbiAgICAxMDAgOiAjZDhkY2UxLFxuICAgIDIwMCA6ICNiZWM0Y2QsXG4gICAgMzAwIDogI2E0YWNiOCxcbiAgICA0MDAgOiAjOTE5YmE5LFxuICAgIDUwMCA6ICM3ZDg5OWEsXG4gICAgNjAwIDogIzc1ODE5MixcbiAgICA3MDAgOiAjNmE3Njg4LFxuICAgIDgwMCA6ICM2MDZjN2UsXG4gICAgOTAwIDogIzRkNTk2YyxcbiAgICBBMTAwIDogI2NmZTFmZixcbiAgICBBMjAwIDogIzljYzFmZixcbiAgICBBNDAwIDogIzY5YTFmZixcbiAgICBBNzAwIDogIzUwOTJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/profiles/profiles.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/profiles/profiles.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _profile_create_update_profile_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-create-update/profile-create-update.component */ "./src/app/containers/profiles/profile-create-update/profile-create-update.component.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.component */ "./src/app/core/common/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var _profiles_fake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profiles.fake */ "./src/app/containers/profiles/profiles.fake.ts");
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







 // to test without data

var ProfilesComponent = /** @class */ (function () {
    function ProfilesComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.subject$ = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.pageSize = 10;
        // this component is useful for the filter and show colums in table
        this.columns = [
            { name: 'Id', property: 'id', visible: true, isModelProperty: true },
            { name: 'PERFIS', property: 'name', visible: true, isModelProperty: true },
            { name: 'Ações', property: 'actions', visible: true }
        ];
    }
    Object.defineProperty(ProfilesComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    ProfilesComponent.prototype.loadData = function () {
        // this.apiProfile.getAllUsingGET()
        //   .subscribe(profiles => {
        //     this.profiles = profiles;
        //     this.dataSource.data = profiles;
        //      this.paginator.firstPage();
        //   },
        //    error => {
        //        if (error.status === 0 || error.status === 404) {
        //            this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {
        //            });
        //        }
        //    });
        this.dataSource.data = _profiles_fake__WEBPACK_IMPORTED_MODULE_7__["ALL_IN_ONE_TABLE_FAKE_DATA"];
    };
    ProfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // console.log(this.visibleColumns);
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (profiles) {
            _this.profiles = profiles;
            _this.dataSource.data = profiles;
        });
    };
    ProfilesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ProfilesComponent.prototype.create = function () {
        var _this = this;
        this.dialog.open(_profile_create_update_profile_create_update_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCreateUpdateComponent"], {
            width: '61%', height: '77%',
            panelClass: 'dialog-detail'
        }).afterClosed().subscribe(function (profile) {
            if (profile) {
                // this.apiProfile.createUsingPOST(profile).
                //     subscribe(
                //         success => {
                _this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                    duration: 10000
                });
                //    // Reload the table after the post
                //     this.loadData();
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
    ProfilesComponent.prototype.update = function (profile) {
        var _this = this;
        this.dialog.open(_profile_create_update_profile_create_update_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCreateUpdateComponent"], {
            data: profile,
            width: '61%', height: '77%',
            panelClass: 'dialog-detail'
        }).afterClosed().subscribe(function (_profile) {
            if (_profile) {
                // this.apiProfile.updateUsingPUT(_profile).
                //   subscribe(
                //        success => {
                _this.snackBar.open('Item atualizado com sucesso!', 'OK', {
                    duration: 10000
                });
                //            // Reload the table after the post
                //            this.loadData();
                //        },
                //        error => {
                //            this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                //            'OK', {
                //                duration: 10000
                //            });
                //        });
            }
        });
    };
    ProfilesComponent.prototype.delete = function (profile) {
        var _this = this;
        this.dialog.open(_core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"], {
            data: { id: profile.id, displayName: profile.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe(function (_profile) {
            if (_profile && _profile.id) {
                // this.apiProfile.deleteUsingDELETE(_profile.id).
                //    subscribe(
                //        success => {
                _this.snackBar.open('Item deletado com sucesso!', 'OK', {
                    duration: 10000
                });
                //            // Reload the table after the post
                //            this.loadData();
                //        },
                // error => {
                //            this.snackBar.open((error.error[0] && error.error[0].title) ? error.error[0].title : 'Erro na requisição.',
                //            'OK', {
                //                duration: 10000
                //            });
                //        });
            }
        });
    };
    ProfilesComponent.prototype.copy = function (profile) {
        var _this = this;
        this.dialog.open(_profile_create_update_profile_create_update_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCreateUpdateComponent"], {
            data: { profile: profile, mode: 'copy' },
            width: '61%', height: '77%',
            panelClass: 'dialog-detail'
        }).afterClosed().subscribe(function (profile) {
            if (profile) {
                // this.apiProfile.createUsingPOST(profile).
                //     subscribe(
                //         success => {
                _this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
                    duration: 10000
                });
                //    // Reload the table after the post
                //     this.loadData();
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
    ProfilesComponent.prototype.ngOnDestroy = function () {
    };
    ProfilesComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProfilesComponent.prototype.extractValue = function (_row, _cell, _property) {
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
    ProfilesComponent.prototype.toggleRow = function (row) {
        if (this.expandedElement === row) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = row;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProfilesComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ProfilesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ProfilesComponent.prototype, "sort", void 0);
    ProfilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-profiles',
            template: __webpack_require__(/*! ./profiles.component.html */ "./src/app/containers/profiles/profiles.component.html"),
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./profiles.component.scss */ "./src/app/containers/profiles/profiles.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ProfilesComponent);
    return ProfilesComponent;
}());



/***/ }),

/***/ "./src/app/containers/profiles/profiles.fake.ts":
/*!******************************************************!*\
  !*** ./src/app/containers/profiles/profiles.fake.ts ***!
  \******************************************************/
/*! exports provided: ALL_IN_ONE_TABLE_FAKE_DATA, MOCK_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_IN_ONE_TABLE_FAKE_DATA", function() { return ALL_IN_ONE_TABLE_FAKE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_DATA", function() { return MOCK_DATA; });
// This is a file for tests
var ALL_IN_ONE_TABLE_FAKE_DATA = [
    {
        'id': 1,
        'name': 'Produção',
        'modules': [
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
        ]
    },
    {
        'id': 2,
        'name': 'P&D',
        'modules': [
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
        ]
    },
    {
        'id': 3,
        'name': 'Administrativo',
        'modules': [
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
            {
                id: 1,
                active: true,
                name: "Tela 01",
                view: false,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                active: true,
                name: "Tela 02",
                view: true,
                create: true,
                update: false,
                delete: true,
            },
        ]
    }
];
var MOCK_DATA = [
    {
        id: 1,
        active: true,
        name: "Tela 01",
        view: false,
        create: true,
        update: true,
        delete: true,
    },
    {
        id: 2,
        active: true,
        name: "Tela 02",
        view: true,
        create: true,
        update: false,
        delete: true,
    },
    {
        id: 1,
        active: true,
        name: "Tela 01",
        view: false,
        create: true,
        update: true,
        delete: true,
    },
    {
        id: 2,
        active: true,
        name: "Tela 02",
        view: true,
        create: true,
        update: false,
        delete: true,
    },
    {
        id: 1,
        active: true,
        name: "Tela 01",
        view: false,
        create: true,
        update: true,
        delete: true,
    },
    {
        id: 2,
        active: true,
        name: "Tela 02",
        view: true,
        create: true,
        update: false,
        delete: true,
    },
    {
        id: 1,
        active: true,
        name: "Tela 01",
        view: false,
        create: true,
        update: true,
        delete: true,
    },
    {
        id: 2,
        active: true,
        name: "Tela 02",
        view: true,
        create: true,
        update: false,
        delete: true,
    },
];


/***/ }),

/***/ "./src/app/containers/profiles/profiles.module.ts":
/*!********************************************************!*\
  !*** ./src/app/containers/profiles/profiles.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesModule", function() { return ProfilesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/page/page.module */ "./src/app/core/common/page/page.module.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.module */ "./src/app/core/common/dialog-delete/dialog-delete.module.ts");
/* harmony import */ var _profiles_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profiles-routing.module */ "./src/app/containers/profiles/profiles-routing.module.ts");
/* harmony import */ var _profiles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profiles.component */ "./src/app/containers/profiles/profiles.component.ts");
/* harmony import */ var _profile_create_update_profile_create_update_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-create-update/profile-create-update.module */ "./src/app/containers/profiles/profile-create-update/profile-create-update.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProfilesModule = /** @class */ (function () {
    function ProfilesModule() {
    }
    ProfilesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _profiles_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfilesRoutingModule"],
                _profile_create_update_profile_create_update_module__WEBPACK_IMPORTED_MODULE_10__["ProfileCreateUpdateModule"],
                // Core
                _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"],
                _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteModule"]
            ],
            declarations: [_profiles_component__WEBPACK_IMPORTED_MODULE_9__["ProfilesComponent"]],
            exports: [_profiles_component__WEBPACK_IMPORTED_MODULE_9__["ProfilesComponent"]]
        })
    ], ProfilesModule);
    return ProfilesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-containers-profiles-profiles-module.js.map