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

module.exports = "body {\n  background-color: white;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  margin: 0; }\n\nh1 {\n  font-size: 150%;\n  color: #1A273A;\n  text-align: center; }\n\nh2 {\n  font-size: 20px;\n  color: #1A273A;\n  text-align: center;\n  font-weight: 500; }\n\nhtml {\n  height: 100%; }\n\n.dialog-detail .card {\n  height: 100%;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 16;\n  display: grid;\n  grid-template-rows: repeat(16, 1fr); }\n\n.dialog-detail .title {\n  /*  background-color:chartreuse;*/\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr); }\n\n.dialog-detail .title-text {\n  /*  background-color:violet;*/\n  grid-row-start: 2;\n  grid-row-end: 3; }\n\n.dialog-detail .form {\n  /*  background-color:crimson;*/\n  grid-row-start: 3;\n  grid-row-end: 6;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  padding-right: 30px;\n  margin-bottom: 10px;\n  overflow: auto; }\n\n.dialog-detail .list {\n  grid-row-start: 6;\n  grid-row-end: 16;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  padding-right: 30px;\n  overflow: auto; }\n\n.dialog-detail .list .mat-card {\n    flex-direction: column;\n    margin-bottom: 10px; }\n\n.dialog-detail .list .mat-card .table {\n      overflow: auto; }\n\n.dialog-detail .footer {\n  grid-row-start: 16;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 30px;\n  margin-bottom: 30px; }\n\n.dialog-detail .footer .btn-save {\n    flex: .2 1 0%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n    font-size: 100%;\n    font-weight: lighter; }\n\n.dialog-detail .close {\n  grid-column-start: 1;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  z-index: 1;\n  align-items: flex-start;\n  justify-content: flex-end;\n  display: flex; }\n\n.dialog-detail .row {\n  display: flex;\n  flex-wrap: wrap; }\n\n.dialog-detail .mat-dialog-container {\n  padding: unset; }\n\n@media screen and (max-width: 1000px) {\n  .dialog-detail {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9wcm9maWxlcy9wcm9maWxlLWNyZWF0ZS11cGRhdGUvcHJvZmlsZS1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksd0JBQXVCO0VBQ3ZCLGtDQUFpQztFQUNqQyxhQUFZO0VBQ1osVUFBUyxFQUNaOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUVRLGFBQVk7RUFDWixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLG9DQUFtQyxFQUN0Qzs7QUFUTDtFQVlRLGtDQUFrQztFQUNsQyxxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGNBQWE7RUFDYixtQ0FBa0MsRUFDckM7O0FBbkJMO0VBc0JRLDhCQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FBekJMO0VBNEJRLCtCQUErQjtFQUUvQixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGVBQWMsRUFJakI7O0FBekNMO0VBMkNRLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGVBQWMsRUFVakI7O0FBM0RMO0lBb0RZLHVCQUFzQjtJQUN0QixvQkFBbUIsRUFJdEI7O0FBekRUO01BdURnQixlQUFjLEVBQ2pCOztBQXhEYjtFQThEUSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQU90Qjs7QUExRUw7SUFxRVksY0FBYTtJQUNiLHlDQUF3QztJQUN4QyxnQkFBZTtJQUNmLHFCQUFvQixFQUN2Qjs7QUF6RVQ7RUE2RVEscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixXQUFVO0VBQ1Ysd0JBQXVCO0VBQ3ZCLDBCQUF5QjtFQUN6QixjQUFhLEVBQ2hCOztBQXJGTDtFQXdGUSxjQUFhO0VBQ2IsZ0JBQWUsRUFDbEI7O0FBMUZMO0VBNkZRLGVBQWMsRUFDakI7O0FBR0w7RUFDSTtJQUNJLDRCQUEyQjtJQUMzQix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3Byb2ZpbGVzL3Byb2ZpbGUtY3JlYXRlLXVwZGF0ZS9wcm9maWxlLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2Nzc1wiO1xuJHRoZW1lLWJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcDogJG1hdC1zZ20tcHJpbWFyeSwgJGtleTogNTAwKTtcblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgY29sb3I6ICMxQTI3M0E7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyNzNBO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kaWFsb2ctZGV0YWlsIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMTY7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDE2LCAxZnIpO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIC8qICBiYWNrZ3JvdW5kLWNvbG9yOmNoYXJ0cmV1c2U7Ki9cbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICB9XG5cbiAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgIC8qICBiYWNrZ3JvdW5kLWNvbG9yOnZpb2xldDsqL1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgIH1cblxuICAgIC5mb3JtIHtcbiAgICAgICAgLyogIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjsqL1xuICAgIFxuICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA2O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBcblxuICAgIH1cbiAgICAubGlzdHtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDY7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMTY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgIC5tYXQtY2FyZHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcbiAgICAgICAgICAgIC50YWJsZXtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxNjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAuYnRuLXNhdmUge1xuICAgICAgICAgICAgZmxleDogLjIgMSAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogdW5zZXQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZGlhbG9nLWRldGFpbCB7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"

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
            styles: [__webpack_require__(/*! ./profile-create-update.component.scss */ "./src/app/containers/profiles/profile-create-update/profile-create-update.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
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

module.exports = "#background-profile, #background-profile #conteiner #card #table-component #tfilter, #background-profile #conteiner #card #table-component #tfilter #input-filter, #background-profile #conteiner #card #table-component #tfilter #add, #background-profile #conteiner #card #table-component #tmaster #thead, #background-profile #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .id, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .name, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name button, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name button {\n    margin: 5px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n#background-profile {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-profile #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-profile #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-profile #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-profile #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n          color: #3f4ade;\n          z-index: 2; }\n\n#background-profile #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-profile #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 76.5%; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-profile #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-profile #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-profile #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-profile #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-profile #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #3f4ade;\n              display: inline-flex;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(63, 74, 222, 0.08); }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #3f4ade !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 20px;\n                  text-align: left; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail p {\n                    font-weight: 300; }\n\n#background-profile #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-profile #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-profile #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #3f4ade;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 140px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-name {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9zdHlsZXMvX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFDSSxjQUFhO0VBQ2IsZUFBYztFQUNkLHNCQUFxQjtFQUNyQix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCOztBQU9PO0VBbkJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBeUJuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQWdDbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFkVDtFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFNckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBZFQ7RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQU1qQjs7RUFFSSxhQUFZO0VBQ1osWUFBVztFQUNYLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBRXRCLGdCQUFlLEVBZ0tsQjs7QUFyS0Q7SUFPUSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGtCQUFpQjtJQUNqQix5QkFBd0I7SUFDeEIscUJBQW9CO0lBQ3BCLHVCQUFzQjtJQUN0QixZQUFXO0lBQ1gsV0FBVSxFQXNKYjs7QUFwS0w7TUFnQlksZUFBYztNQUNkLGNBQWE7TUFDYixnQkFBZSxFQWlKbEI7O0FBbktUO1FBcUJnQixlQUFjO1FBQ2QsY0FBYTtRQUNiLHVCQUFzQixFQTJJekI7O0FBbEtiO1VBMEJvQixjQUFhO1VBQ2IsaUJBQWdCO1VBQ2hCLDRDQUFtQztVQUNuQyxlQ25ESDtVRG9ERyxXQUFVLEVBMENiOztBQXhFakI7WUFnQ3dCLG1CQUFrQjtZQUNsQixnQkFBZTtZQUNmLGtCQUFpQjtZQUNqQixjQUFhO1lBQ2IsZUFBYztZQUNkLGVBQWM7WUFDZCxnQ0FBK0IsRUFJbEM7O0FBMUNyQjtjQXdDNEIsZUFBYyxFQUNqQjs7QUF6Q3pCO1lBNkN3QixpQkFBZ0IsRUFrQm5COztBQS9EckI7Y0ErQzRCLGVBQWMsRUFlakI7O0FBOUR6QjtnQkFpRGdDLGVBQWMsRUFZakI7O0FBN0Q3QjtrQkFtRG9DLGNBQWEsRUFDaEI7O0FBcERqQztrQkFzRG9DLGdDQUErQjtrQkFDL0IsNkJBQTRCLEVBSy9COztBQTVEakM7b0JBeUR3QywrQkFBOEI7b0JBQzlCLG1DQUFrQyxFQUNyQzs7QUEzRHJDO1lBaUV3QixjQUFhO1lBQ2IsZ0JBQWUsRUFLbEI7O0FBdkVyQjtjQXFFNEIsNENBQW1DLEVBQ3RDOztBQXRFekI7VUEwRW9CLGNBQWE7VUFDYixnQkFBZTtVQUNmLHVCQUFzQixFQTJFekI7O0FBdkpqQjtZQStFd0IsbUJBQWtCO1lBQ2xCLGlCQUFnQixFQWFuQjs7QUE3RnJCO2NBa0Y0QixjQUFhO2NBQ2IsbUNBQWtDLEVBQ3JDOztBQXBGekI7Y0FzRjRCLFlBQVc7Y0FDWCxlQzdHWDtjRDhHVyxxQkFBb0I7Y0FDcEIsa0JBQWlCO2NBQ2pCLFlBQVksRUFFZjs7QUE1RnpCO1lBK0Z3QixnQkFBZTtZQUNmLHdCQUF1QjtZQUN2QixtQkFBa0I7WUFDbEIsY0FBYTtZQUNiLDRDQUFtQztZQUNuQyxXQUFVO1lBQ1YsZUFBYztZQUNkLFVBQVMsRUFnRFo7O0FBdEpyQjtjQXdHNEIsWUFBVztjQTJDWCxVQUFVLEVBRWI7O0FBckp6QjtnQkEwR2dDLGNBQWEsRUFDaEI7O0FBM0c3QjtnQkE2R2dDLCtCQUE4QixFQUNqQzs7QUE5RzdCO2dCQWdIZ0MsZ0NBQStCLEVBQ2xDOztBQWpIN0I7Z0JBbUhnQywwQ0N6SWYsRUQwSVk7O0FBcEg3QjtnQkFzSGdDLDBCQUFtQztnQkFDbkMsK0JBQThCO2dCQUM5QiwrQkFBOEI7Z0JBQzlCLGdDQUErQjtnQkFDL0IsZ0JBQWUsRUFDbEI7O0FBM0g3QjtnQkFnSWdDLHlEQUFxRCxFQWN4RDs7QUE5STdCO2tCQW1Jb0MsY0FBYTtrQkFDYixpQkFBZ0IsRUFTbkI7O0FBN0lqQztvQkF1SXdDLGlCQUFnQixFQUNuQjs7QUF4SXJDO29CQTJJd0MsaUJBQWdCLEVBQ25COztBQTVJckM7Z0JBaUpnQyxtQkFBa0IsRUFDckI7O0FBbEo3QjtVQTBKb0IsbUJBQWtCO1VBQ2xCLGlCQUFnQixFQU1uQjs7QUFqS2pCO1lBNkp3QixZQUFXO1lBQ1gsZUNwTFA7WURxTE8sZ0JBQWUsRUFDbEI7O0FBUXJCO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0k7SUFDSSwyQkFBeUIsRUFDNUIsRUFBQTs7QUFHTDtFQUNJO0lBQ0ksMkJBQTBCLEVBQzdCO0VBQ0Q7SUFDSSxhQUFZLEVBQ2Y7RUFDRDtJQUNJLHlCQUF3QixFQUMzQixFQUFBOztBQUdMO0VBQ0k7SUFDSSwwQkFBeUI7SUFDekIsNEJBQTJCO0lBQzNCLDRCQUEyQjtJQUMzQix3QkFBdUIsRUFDMUI7RUFDRDtJQUtRLCtCQUE4QixFQUNqQztFQUVMO0lBQ0kseUJBQXdCLEVBQzNCO0VBQ0Q7SUFDSSx1QkFBc0IsRUFDekI7RUFDRztJQTNRSiw0QkE4UWtEO0lBN1FsRCw0QkE2UWtEO0lBNVFsRCx3QkE0UWtELEVBQ3pDO0VBSkw7SUEzUUosNEJBOFFrRDtJQTdRbEQsNEJBNlFrRDtJQTVRbEQsd0JBNFFrRCxFQUN6QztFQUpMO0lBM1FKLDRCQThRa0Q7SUE3UWxELDRCQTZRa0Q7SUE1UWxELHdCQTRRa0QsRUFDekM7RUFKTDtJQVFJLGtCQUFpQixFQUNwQjtFQUVMO0lBQ0ksMEJBQXlCLEVBQzVCO0VBQ0Q7SUFDSSx5QkFBd0I7SUFDeEIsMEJBQXlCLEVBSTVCO0lBTkQ7TUFJUSx5QkFBd0IsRUFDM0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcHJvZmlsZXMvcHJvZmlsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kdGhlbWUtYmFja2dyb3VuZDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuXG4vLyBMaXN0YSBkZSBjYW1wb3NcbiRmaWVsZHM6ICgnaWQnLFxuJ25hbWUnLFxuJ2FjdGlvbnMnXG4pO1xuXG4vLyBQYWRyb25pemEgbyB0YW1hbmhvIGRvcyBjYW1wb3NcbiRsZW5ndGg6IDEwMC9sZW5ndGgoJGZpZWxkcykqMSU7XG5cblxuQG1peGluIGNvbHVtbi13aWR0aCgkcHJvcGVydHkpIHtcbiAgICBtYXgtd2lkdGg6ICRwcm9wZXJ0eTtcbiAgICBtaW4td2lkdGg6ICRwcm9wZXJ0eTtcbiAgICB3aWR0aDogJHByb3BlcnR5OyAgICBcbn1cblxuLy8gY2VudHJhbGl6ZXMgYWxsIGNvbnRhaW5lciBpdGVtc1xuJWZsZXgtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyBDb25maWd1cmHDp8O1ZXMgbsOjbyBwYWRyw7VlcyBwYXJhIGFzIGNvbHVuYXNcbiV0YWJsZS1jb2x1bW5zIHtcblxuICAgIEBlYWNoICRoZWFkaW5nIGluICRmaWVsZHMge1xuXG4gICAgICAgIC4jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgoJGxlbmd0aCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDsgLy8gc29ydGluZyBhcnJvdyBkaXNjb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1jb2x1bW4tI3skaGVhZGluZ30ge1xuICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKCRsZW5ndGgpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBAaWYgI3skaGVhZGluZ309PWFjdGlvbnMge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYmFja2dyb3VuZC1wcm9maWxlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTsgLy9iYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAjY29udGVpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGhlaWdodDogOTElO1xuICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICAjY2FyZCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAjdGFibGUtY29tcG9uZW50IHtcbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICMyNzNCNTY7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICN0ZmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAjdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1JTsgLy9iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCAjNzA3MDcwIHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2lucHV0LWZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzYuNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdXJ5LWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNhZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOC41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4yNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3RtYXN0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMiAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICN0aGVhZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhFQURFUiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI3Rib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwIDEgYXV0bzsgLy8gYmFja2dyb3VuZDogYnJvd247XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4xNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJvdzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWJhY2tncm91bmQsIC4wOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtY29sdW1uLWV4cGFuZGVkRGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxOHB4IDEwcHggLTE4cHggcmdiYSgwLDAsMCwwLjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJPRFkgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICN0Zm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY2FwdGlvbiBmb3JtYXR0aW5nXG4uY2lyY2xlLXNtYWxsIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLnBhZ2luYXRvcntcbiAgICAgICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWZpbHRlci1pbnB1dHtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgIH1cbiAgICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgJXVuc2V0LXdpZHRoe1xuICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICN0ZmlsdGVyIHtcbiAgICAgICAgI3RpdGxlLCAjaW5wdXQtZmlsdGVyLCAjYWRke1xuICAgICAgICAgICAgQGV4dGVuZCAldW5zZXQtd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgI2FkZHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjdGhlYWQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICN0Ym9keXtcbiAgICAgICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDsgLy8gZml4IGxheW91dCBpbiB0aGUgZmlyZWZveFxuICAgIH1cbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG4gICAgICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKHVuc2V0ICFpbXBvcnRhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZnVyeS1saXN0LXRhYmxlIC5mdXJ5LWxpc3QtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAuZnVyeS1jb2x1bW4tZmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiLy8gJG1hdC1zZ20tcHJpbWFyeTogKFxuLy8gICAgIDUwIDogI2U1ZTdlYixcbi8vICAgICAxMDAgOiAjYmVjNGNjLFxuLy8gICAgIDIwMCA6ICM5MzlkYWIsXG4vLyAgICAgMzAwIDogIzY4NzY4OSxcbi8vICAgICA0MDAgOiAjNDc1ODZmLFxuLy8gICAgIDUwMCA6ICMyNzNiNTYsXG4vLyAgICAgNjAwIDogIzIzMzU0Zixcbi8vICAgICA3MDAgOiAjMWQyZDQ1LFxuLy8gICAgIDgwMCA6ICMxNzI2M2MsXG4vLyAgICAgOTAwIDogIzBlMTkyYixcbi8vICAgICBBMTAwIDogIzY5OWJmZixcbi8vICAgICBBMjAwIDogIzM2NzlmZixcbi8vICAgICBBNDAwIDogIzAzNTdmZixcbi8vICAgICBBNzAwIDogIzAwNGVlOSxcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDUwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDYwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDcwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDgwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDkwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE3MDAgOiAjZmZmZmZmLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXByaW1hcnk6IChcbiAgICA1MCA6ICNlOGU5ZmIsXG4gICAgMTAwIDogI2M1YzlmNSxcbiAgICAyMDAgOiAjOWZhNWVmLFxuICAgIDMwMCA6ICM3OTgwZTgsXG4gICAgNDAwIDogIzVjNjVlMyxcbiAgICA1MDAgOiAjM2Y0YWRlLFxuICAgIC8vNTAwIDogIzAwMDAwMCxcbiAgICA2MDAgOiAjMzk0M2RhLFxuICAgIDcwMCA6ICMzMTNhZDUsXG4gICAgODAwIDogIzI5MzJkMSxcbiAgICA5MDAgOiAjMWIyMmM4LFxuICAgIEExMDAgOiAjZmRmZGZmLFxuICAgIEEyMDAgOiAjY2FjY2ZmLFxuICAgIEE0MDAgOiAjOTc5YmZmLFxuICAgIEE3MDAgOiAjN2U4MmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuJG1hdC1zZ20tYWNjZW50OiAoXG4gICAgNTAgOiAjZTdlY2VhLFxuICAgIDEwMCA6ICNjMmNlY2IsXG4gICAgMjAwIDogIzk5YWVhOSxcbiAgICAzMDAgOiAjNzA4ZTg3LFxuICAgIDQwMCA6ICM1Mjc1NmQsXG4gICAgNTAwIDogIzMzNWQ1MyxcbiAgICA2MDAgOiAjMmU1NTRjLFxuICAgIDcwMCA6ICMyNzRiNDIsXG4gICAgODAwIDogIzIwNDEzOSxcbiAgICA5MDAgOiAjMTQzMDI5LFxuICAgIEExMDAgOiAjNzFmZmRhLFxuICAgIEEyMDAgOiAjM2VmZmNkLFxuICAgIEE0MDAgOiAjMGJmZmJmLFxuICAgIEE3MDAgOiAjMDBmMWIyLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuLy8gJG1hdC1zZ20td2FybjogKFxuLy8gICAgIDUwIDogI2Y1ZjdmOCxcbi8vICAgICAxMDAgOiAjZTZlYWVkLFxuLy8gICAgIDIwMCA6ICNkNmRkZTIsXG4vLyAgICAgMzAwIDogI2M2Y2ZkNixcbi8vICAgICA0MDAgOiAjYjljNGNkLFxuLy8gICAgIDUwMCA6ICNhZGJhYzQsXG4vLyAgICAgNjAwIDogI2E2YjNiZSxcbi8vICAgICA3MDAgOiAjOWNhYmI2LFxuLy8gICAgIDgwMCA6ICM5M2EzYWYsXG4vLyAgICAgOTAwIDogIzgzOTRhMixcbi8vICAgICBBMTAwIDogI2ZmZmZmZixcbi8vICAgICBBMjAwIDogI2ZkZmVmZixcbi8vICAgICBBNDAwIDogI2M5ZTdmZixcbi8vICAgICBBNzAwIDogI2IwZGJmZixcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDUwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDYwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDcwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDgwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDkwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXdhcm46IChcbiAgICA1MCA6ICNmZWU4ZTcsXG4gICAgMTAwIDogI2ZiYzZjMyxcbiAgICAyMDAgOiAjZjlhMTliLFxuICAgIDMwMCA6ICNmNzdiNzIsXG4gICAgNDAwIDogI2Y1NWU1NCxcbiAgICA1MDAgOiAjZjM0MjM2LFxuICAgIDYwMCA6ICNmMTNjMzAsXG4gICAgNzAwIDogI2VmMzMyOSxcbiAgICA4MDAgOiAjZWQyYjIyLFxuICAgIDkwMCA6ICNlYTFkMTYsXG4gICAgQTEwMCA6ICNmZmZmZmYsXG4gICAgQTIwMCA6ICNmZmU4ZTcsXG4gICAgQTQwMCA6ICNmZmI2YjQsXG4gICAgQTcwMCA6ICNmZjlkOWIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWQtY2FsZW5kYXI6IChcbiAgICA1MCA6ICNlZmYxZjMsXG4gICAgMTAwIDogI2Q4ZGNlMSxcbiAgICAyMDAgOiAjYmVjNGNkLFxuICAgIDMwMCA6ICNhNGFjYjgsXG4gICAgNDAwIDogIzkxOWJhOSxcbiAgICA1MDAgOiAjN2Q4OTlhLFxuICAgIDYwMCA6ICM3NTgxOTIsXG4gICAgNzAwIDogIzZhNzY4OCxcbiAgICA4MDAgOiAjNjA2YzdlLFxuICAgIDkwMCA6ICM0ZDU5NmMsXG4gICAgQTEwMCA6ICNjZmUxZmYsXG4gICAgQTIwMCA6ICM5Y2MxZmYsXG4gICAgQTQwMCA6ICM2OWExZmYsXG4gICAgQTcwMCA6ICM1MDkyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuIl19 */"

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
            styles: [__webpack_require__(/*! ./profiles.component.scss */ "./src/app/containers/profiles/profiles.component.scss")],
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
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