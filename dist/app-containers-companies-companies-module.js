(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-companies-companies-module"],{

/***/ "./src/app/containers/companies/companies-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/containers/companies/companies-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CompaniesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesRoutingModule", function() { return CompaniesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.component */ "./src/app/containers/companies/companies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"]
    }
];
var CompaniesRoutingModule = /** @class */ (function () {
    function CompaniesRoutingModule() {
    }
    CompaniesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CompaniesRoutingModule);
    return CompaniesRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/companies/companies.component.html":
/*!***************************************************************!*\
  !*** ./src/app/containers/companies/companies.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"background-company\">\n  <div id=\"conteiner\">\n    <div id=\"card\">\n      <div id=\"table-component\">\n        <!-- TABLE FILTER -->\n        <div id=\"tfilter\">\n          <div id=\"title\">\n            <span>Companhias</span>\n          </div>\n          <div id=\"input-filter\">\n            <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\"\n              fxLayout=\"row\"></fury-list>\n          </div>\n          <div id=\"add\">\n            <button mat-mini-fab color=\"primary\" (click)=\"create()\" id=\"create\" matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\">\n              <mat-icon aria-label=\"Editar\">add</mat-icon>\n            </button>\n          </div>\n        </div>\n        <!-- TABLE HEADER -->\n        <div id=\"tmaster\">\n          <div id=\"thead\" matSort>\n              <div class=\"table-header\">\n                  <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\"\n                    [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                    {{column.name | uppercase}}\n                  </div>\n                </div>\n            <!-- The header is separate so you do not lose the filters or the sorting -->\n          </div>\n          <!-- TABLE BODY -->\n          <div id=\"tbody\">\n            <!-- Note: Mat-table does not compile without mat-cell -->\n            <mat-table #table [dataSource]=\"dataSource\" matSort>\n              <!-- id Column -->\n              <ng-container matColumnDef=\"id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\"> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\"> {{row.id}} </mat-cell>\n              </ng-container>\n\n              <!-- fatansyName Column -->\n              <ng-container matColumnDef=\"fantasyName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\"> Nome Fantasia </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">{{row.fantasyName}}</mat-cell>\n              </ng-container>\n\n               <!-- socialName Column -->\n               <ng-container matColumnDef=\"socialName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\"> Razão Social </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">{{row.socialName}}</mat-cell>\n              </ng-container>\n\n              <!-- cnpj Column -->\n              <ng-container matColumnDef=\"cnpj\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\"> Razão Social </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">{{row.cnpj | mask: '99.999.999/9999-99'}}</mat-cell>\n              </ng-container>\n\n               <!-- telephoneNumber Column -->\n               <ng-container matColumnDef=\"telephoneNumber\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header fxLayoutAlign=\"center\"> Razão Social </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">{{ row.telephoneNumber | phone }}</mat-cell>\n              </ng-container>\n\n              <!-- actions Column -->\n              <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"> AÇÕES </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                  <button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Editar\">edit</mat-icon>\n                  </button>\n                  <button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Deletar\">delete</mat-icon>\n                  </button>\n                  <button matTooltip=\"Detalhes do Item\" [matTooltipPosition]=\"'above'\" (click)=\"detail(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Detalhes\">view_headline</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n              <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: visibleColumns;\" class=\"clickable\"></mat-row>\n            </mat-table>\n          </div>\n        </div>\n        <!-- TABLE FOOTER -->\n        <div id=\"tfooter\">\n          <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/containers/companies/companies.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/containers/companies/companies.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-company, #background-company #conteiner #card #table-component #tfilter, #background-company #conteiner #card #table-component #tfilter #input-filter, #background-company #conteiner #card #table-component #tfilter #add, #background-company #conteiner #card #table-component #tmaster #thead, #background-company #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .id, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .fantasyName, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .fantasyName {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-fantasyName, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-fantasyName {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-fantasyName button, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-fantasyName button {\n    margin: 5px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .socialName, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .socialName {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-socialName, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-socialName {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-socialName button, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-socialName button {\n    margin: 5px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .cnpj, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .cnpj {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-cnpj, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-cnpj {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-cnpj button, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-cnpj button {\n    margin: 5px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .telephoneNumber, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .telephoneNumber {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-telephoneNumber, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-telephoneNumber {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-telephoneNumber button, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-telephoneNumber button {\n    margin: 5px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n#background-company {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-company #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-company #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-company #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-company #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n          color: #3f4ade;\n          z-index: 2; }\n\n#background-company #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 17%;\n            border-right: 1px #707070 solid; }\n\n#background-company #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-company #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 75%; }\n\n#background-company #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-company #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-company #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-company #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-company #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-company #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8%; }\n\n#background-company #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-company #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-company #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-company #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #3f4ade;\n              display: inline-flex;\n              font-weight: bold; }\n\n#background-company #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-company #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-company #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-company #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-company #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(63, 74, 222, 0.08); }\n\n#background-company #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #3f4ade !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-company #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-company #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #3f4ade;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 140px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-fantasyName {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-socialName {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-cnpj {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-telephoneNumber {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL25ld19yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFDdEI7O0FBT087RUFuQkosd0JBSDJCO0VBSTNCLHdCQUoyQjtFQUszQixvQkFMMkI7RUF3Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUgyQjtFQUkzQix3QkFKMkI7RUFLM0Isb0JBTDJCO0VBK0JuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWRUO0VBbkJKLHdCQUgyQjtFQUkzQix3QkFKMkI7RUFLM0Isb0JBTDJCO0VBd0JuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFIMkI7RUFJM0Isd0JBSjJCO0VBSzNCLG9CQUwyQjtFQStCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFkVDtFQW5CSix3QkFIMkI7RUFJM0Isd0JBSjJCO0VBSzNCLG9CQUwyQjtFQXdCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSDJCO0VBSTNCLHdCQUoyQjtFQUszQixvQkFMMkI7RUErQm5CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFNckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBZFQ7RUFuQkosd0JBSDJCO0VBSTNCLHdCQUoyQjtFQUszQixvQkFMMkI7RUF3Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUgyQjtFQUkzQix3QkFKMkI7RUFLM0Isb0JBTDJCO0VBK0JuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWRUO0VBbkJKLHdCQUgyQjtFQUkzQix3QkFKMkI7RUFLM0Isb0JBTDJCO0VBd0JuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFIMkI7RUFJM0Isd0JBSjJCO0VBSzNCLG9CQUwyQjtFQStCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFkVDtFQW5CSix3QkFIMkI7RUFJM0Isd0JBSjJCO0VBSzNCLG9CQUwyQjtFQXdCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSDJCO0VBSTNCLHdCQUoyQjtFQUszQixvQkFMMkI7RUErQm5CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFNckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBTWpCOztFQUVJLGFBQVk7RUFDWixZQUFXO0VBQ1gsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLHVCQUFzQjtFQUN0Qix1QkFBc0I7RUFFdEIsZ0JBQWUsRUErSmxCOztBQXBLRDtJQVFRLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsa0JBQWlCO0lBQ2pCLHlCQUF3QjtJQUN4QixxQkFBb0I7SUFDcEIsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxXQUFVLEVBb0piOztBQW5LTDtNQWtCWSxlQUFjO01BQ2QsY0FBYTtNQUNiLGdCQUFlLEVBOElsQjs7QUFsS1Q7UUF3QmdCLGVBQWM7UUFDZCxjQUFhO1FBQ2IsdUJBQXNCLEVBdUl6Qjs7QUFqS2I7VUE4Qm9CLGNBQWE7VUFDYixpQkFBZ0I7VUFDaEIsNENBQWtDO1VBQ2xDLGVDdkRIO1VEd0RHLFdBQVUsRUErQ2I7O0FBakZqQjtZQXFDd0IsbUJBQWtCO1lBQ2xCLGdCQUFlO1lBQ2Ysa0JBQWlCO1lBQ2pCLGNBQWE7WUFDYixlQUFjO1lBQ2QsZUFBYztZQUNkLGdDQUErQixFQUtsQzs7QUFoRHJCO2NBOEM0QixlQUFjLEVBQ2pCOztBQS9DekI7WUFvRHdCLGVBQWMsRUFrQmpCOztBQXRFckI7Y0FzRDRCLGVBQWMsRUFlakI7O0FBckV6QjtnQkF3RGdDLGVBQWMsRUFZakI7O0FBcEU3QjtrQkEwRG9DLGNBQWEsRUFDaEI7O0FBM0RqQztrQkE2RG9DLGdDQUErQjtrQkFDL0IsNkJBQTRCLEVBSy9COztBQW5FakM7b0JBZ0V3QywrQkFBOEI7b0JBQzlCLG1DQUFrQyxFQUNyQzs7QUFsRXJDO1lBeUV3QixjQUFhO1lBQ2IsY0FBYSxFQU1oQjs7QUFoRnJCO2NBOEU0Qiw0Q0FBa0MsRUFDckM7O0FBL0V6QjtVQW9Gb0IsY0FBYTtVQUNiLGdCQUFlO1VBQ2YsdUJBQXNCLEVBOER6Qjs7QUFwSmpCO1lBMEZ3QixtQkFBa0I7WUFDbEIsaUJBQWdCLEVBY25COztBQXpHckI7Y0E4RjRCLGNBQWE7Y0FDYixtQ0FBa0MsRUFDckM7O0FBaEd6QjtjQW1HNEIsWUFBVztjQUNYLGVDMUhYO2NEMkhXLHFCQUFvQjtjQUNwQixrQkFBaUIsRUFFcEI7O0FBeEd6QjtZQTRHd0IsZ0JBQWU7WUFDZix3QkFBdUI7WUFDdkIsbUJBQWtCO1lBQ2xCLGNBQWE7WUFDYiw0Q0FBa0M7WUFDbEMsV0FBVTtZQUNWLGVBQWM7WUFDZCxVQUFTLEVBZ0NaOztBQW5KckI7Y0FzSDRCLFlBQVc7Y0EwQlgsVUFBVSxFQUViOztBQWxKekI7Z0JBeUhnQyxjQUFhLEVBQ2hCOztBQTFIN0I7Z0JBNkhnQywrQkFBOEIsRUFDakM7O0FBOUg3QjtnQkFpSWdDLGdDQUErQixFQUNsQzs7QUFsSTdCO2dCQXFJZ0MsMENDM0pmLEVENEpZOztBQXRJN0I7Z0JBeUlnQywwQkFBbUM7Z0JBQ25DLCtCQUE4QjtnQkFDOUIsK0JBQThCO2dCQUM5QixnQ0FBK0I7Z0JBQy9CLGdCQUFlLEVBQ2xCOztBQTlJN0I7VUF3Sm9CLG1CQUFrQjtVQUNsQixpQkFBZ0IsRUFPbkI7O0FBaEtqQjtZQTRKd0IsWUFBVztZQUNYLGVDbkxQO1lEb0xPLGdCQUFlLEVBQ2xCOztBQVFyQjtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksMkJBQTBCLEVBQzdCLEVBQUE7O0FBR0w7RUFDSTtJQUNJLDJCQUEwQixFQUM3QjtFQUVEO0lBQ0ksYUFBWSxFQUNmO0VBRUQ7SUFDSSx5QkFBd0IsRUFDM0IsRUFBQTs7QUFHTDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCO0VBQ0Q7SUFLUSwrQkFBOEIsRUFDakM7RUFHTDtJQUNJLHlCQUF3QixFQUMzQjtFQUVEO0lBQ0ksdUJBQXNCLEVBQ3pCO0VBRUQ7SUEvUUEsNEJBa1JrRDtJQWpSbEQsNEJBaVJrRDtJQWhSbEQsd0JBZ1JrRCxFQUN6QztFQUpUO0lBL1FBLDRCQWtSa0Q7SUFqUmxELDRCQWlSa0Q7SUFoUmxELHdCQWdSa0QsRUFDekM7RUFKVDtJQS9RQSw0QkFrUmtEO0lBalJsRCw0QkFpUmtEO0lBaFJsRCx3QkFnUmtELEVBQ3pDO0VBSlQ7SUEvUUEsNEJBa1JrRDtJQWpSbEQsNEJBaVJrRDtJQWhSbEQsd0JBZ1JrRCxFQUN6QztFQUpUO0lBL1FBLDRCQWtSa0Q7SUFqUmxELDRCQWlSa0Q7SUFoUmxELHdCQWdSa0QsRUFDekM7RUFKVDtJQS9RQSw0QkFrUmtEO0lBalJsRCw0QkFpUmtEO0lBaFJsRCx3QkFnUmtELEVBQ3pDO0VBSlQ7SUFRUSxrQkFBaUIsRUFDcEI7RUFHTDtJQUNJLDBCQUF5QixFQUM1QjtFQUVEO0lBQ0kseUJBQXdCO0lBQ3hCLDBCQUF5QixFQUs1QjtJQVBEO01BS1EseUJBQXdCLEVBQzNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2Nzc1wiO1xuJHRoZW1lLWJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcDogJG1hdC1zZ20tcHJpbWFyeSwgJGtleTogNTAwKTtcblxuLy8gTGlzdGEgZGUgY2FtcG9zXG4kZmllbGRzOiAoJ2lkJyxcbidmYW50YXN5TmFtZScsXG4nc29jaWFsTmFtZScsXG4nY25waicsXG4ndGVsZXBob25lTnVtYmVyJyxcbidhY3Rpb25zJ1xuKTtcbi8vIFBhZHJvbml6YSBvIHRhbWFuaG8gZG9zIGNhbXBvc1xuJGxlbmd0aDogMTAwL2xlbmd0aCgkZmllbGRzKSoxJTtcblxuQG1peGluIGNvbHVtbi13aWR0aCgkcHJvcGVydHkpIHtcbiAgICBtYXgtd2lkdGg6ICRwcm9wZXJ0eTtcbiAgICBtaW4td2lkdGg6ICRwcm9wZXJ0eTtcbiAgICB3aWR0aDogJHByb3BlcnR5O1xufVxuXG4vLyBjZW50cmFsaXplcyBhbGwgY29udGFpbmVyIGl0ZW1zXG4lZmxleC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIENvbmZpZ3VyYcOnw7VlcyBuw6NvIHBhZHLDtWVzIHBhcmEgYXMgY29sdW5hc1xuJXRhYmxlLWNvbHVtbnMge1xuXG4gICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG5cbiAgICAgICAgLiN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4OyAvLyBzb3J0aW5nIGFycm93IGRpc2NvdW50XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgoJGxlbmd0aCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIEBpZiAjeyRoZWFkaW5nfT09YWN0aW9ucyB7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNiYWNrZ3JvdW5kLWNvbXBhbnkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvL2JhY2tncm91bmQ6IGdyZWVuO1xuXG4gICAgI2NvbnRlaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICBoZWlnaHQ6IDkxJTtcbiAgICAgICAgd2lkdGg6IDkxJTtcblxuICAgICAgICAjY2FyZCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICN0YWJsZS1jb21wb25lbnQge1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzI3M0I1NjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAjdGZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgICAgICAgICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTclOyAvL2JhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4ICM3MDcwNzAgc29saWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI2lucHV0LWZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVyeS1saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICNhZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKGJsYWNrLCAwLjI2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICN0bWFzdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTIgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgICN0aGVhZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI3Rib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwIDEgYXV0bzsgLy8gYmFja2dyb3VuZDogYnJvd247XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJvdzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWJhY2tncm91bmQsIC4wOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBCT0RZICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGFibGUtY29sdW1ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICN0Zm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcblxuICAgICAgICAgICAgICAgICAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjYXB0aW9uIGZvcm1hdHRpbmdcbi5jaXJjbGUtc21hbGwge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICN0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5mdXJ5LWZpbHRlci1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgJXVuc2V0LXdpZHRoe1xuICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICN0ZmlsdGVyIHtcbiAgICAgICAgI3RpdGxlLCAjaW5wdXQtZmlsdGVyLCAjYWRke1xuICAgICAgICAgICAgQGV4dGVuZCAldW5zZXQtd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgI2FkZHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICN0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjdGJvZHkge1xuICAgICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50OyAvLyBmaXggbGF5b3V0IGluIHRoZSBmaXJlZm94XG4gICAgfVxuXG4gICAgbWF0LXRhYmxlIHtcbiAgICAgICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG4gICAgICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKHVuc2V0ICFpbXBvcnRhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmZ1cnktbGlzdC10YWJsZSAuZnVyeS1saXN0LWhlYWRlciB7XG4gICAgICAgIG1hcmdpbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcblxuICAgICAgICAuZnVyeS1jb2x1bW4tZmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyAkbWF0LXNnbS1wcmltYXJ5OiAoXG4vLyAgICAgNTAgOiAjZTVlN2ViLFxuLy8gICAgIDEwMCA6ICNiZWM0Y2MsXG4vLyAgICAgMjAwIDogIzkzOWRhYixcbi8vICAgICAzMDAgOiAjNjg3Njg5LFxuLy8gICAgIDQwMCA6ICM0NzU4NmYsXG4vLyAgICAgNTAwIDogIzI3M2I1Nixcbi8vICAgICA2MDAgOiAjMjMzNTRmLFxuLy8gICAgIDcwMCA6ICMxZDJkNDUsXG4vLyAgICAgODAwIDogIzE3MjYzYyxcbi8vICAgICA5MDAgOiAjMGUxOTJiLFxuLy8gICAgIEExMDAgOiAjNjk5YmZmLFxuLy8gICAgIEEyMDAgOiAjMzY3OWZmLFxuLy8gICAgIEE0MDAgOiAjMDM1N2ZmLFxuLy8gICAgIEE3MDAgOiAjMDA0ZWU5LFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgODAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgOTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTcwMCA6ICNmZmZmZmYsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20tcHJpbWFyeTogKFxuICAgIDUwIDogI2U4ZTlmYixcbiAgICAxMDAgOiAjYzVjOWY1LFxuICAgIDIwMCA6ICM5ZmE1ZWYsXG4gICAgMzAwIDogIzc5ODBlOCxcbiAgICA0MDAgOiAjNWM2NWUzLFxuICAgIDUwMCA6ICMzZjRhZGUsXG4gICAgLy81MDAgOiAjMDAwMDAwLFxuICAgIDYwMCA6ICMzOTQzZGEsXG4gICAgNzAwIDogIzMxM2FkNSxcbiAgICA4MDAgOiAjMjkzMmQxLFxuICAgIDkwMCA6ICMxYjIyYzgsXG4gICAgQTEwMCA6ICNmZGZkZmYsXG4gICAgQTIwMCA6ICNjYWNjZmYsXG4gICAgQTQwMCA6ICM5NzliZmYsXG4gICAgQTcwMCA6ICM3ZTgyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWF0LXNnbS1hY2NlbnQ6IChcbiAgICA1MCA6ICNlN2VjZWEsXG4gICAgMTAwIDogI2MyY2VjYixcbiAgICAyMDAgOiAjOTlhZWE5LFxuICAgIDMwMCA6ICM3MDhlODcsXG4gICAgNDAwIDogIzUyNzU2ZCxcbiAgICA1MDAgOiAjMzM1ZDUzLFxuICAgIDYwMCA6ICMyZTU1NGMsXG4gICAgNzAwIDogIzI3NGI0MixcbiAgICA4MDAgOiAjMjA0MTM5LFxuICAgIDkwMCA6ICMxNDMwMjksXG4gICAgQTEwMCA6ICM3MWZmZGEsXG4gICAgQTIwMCA6ICMzZWZmY2QsXG4gICAgQTQwMCA6ICMwYmZmYmYsXG4gICAgQTcwMCA6ICMwMGYxYjIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4vLyAkbWF0LXNnbS13YXJuOiAoXG4vLyAgICAgNTAgOiAjZjVmN2Y4LFxuLy8gICAgIDEwMCA6ICNlNmVhZWQsXG4vLyAgICAgMjAwIDogI2Q2ZGRlMixcbi8vICAgICAzMDAgOiAjYzZjZmQ2LFxuLy8gICAgIDQwMCA6ICNiOWM0Y2QsXG4vLyAgICAgNTAwIDogI2FkYmFjNCxcbi8vICAgICA2MDAgOiAjYTZiM2JlLFxuLy8gICAgIDcwMCA6ICM5Y2FiYjYsXG4vLyAgICAgODAwIDogIzkzYTNhZixcbi8vICAgICA5MDAgOiAjODM5NGEyLFxuLy8gICAgIEExMDAgOiAjZmZmZmZmLFxuLy8gICAgIEEyMDAgOiAjZmRmZWZmLFxuLy8gICAgIEE0MDAgOiAjYzllN2ZmLFxuLy8gICAgIEE3MDAgOiAjYjBkYmZmLFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgODAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgOTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20td2FybjogKFxuICAgIDUwIDogI2ZlZThlNyxcbiAgICAxMDAgOiAjZmJjNmMzLFxuICAgIDIwMCA6ICNmOWExOWIsXG4gICAgMzAwIDogI2Y3N2I3MixcbiAgICA0MDAgOiAjZjU1ZTU0LFxuICAgIDUwMCA6ICNmMzQyMzYsXG4gICAgNjAwIDogI2YxM2MzMCxcbiAgICA3MDAgOiAjZWYzMzI5LFxuICAgIDgwMCA6ICNlZDJiMjIsXG4gICAgOTAwIDogI2VhMWQxNixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZThlNyxcbiAgICBBNDAwIDogI2ZmYjZiNCxcbiAgICBBNzAwIDogI2ZmOWQ5YixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtZC1jYWxlbmRhcjogKFxuICAgIDUwIDogI2VmZjFmMyxcbiAgICAxMDAgOiAjZDhkY2UxLFxuICAgIDIwMCA6ICNiZWM0Y2QsXG4gICAgMzAwIDogI2E0YWNiOCxcbiAgICA0MDAgOiAjOTE5YmE5LFxuICAgIDUwMCA6ICM3ZDg5OWEsXG4gICAgNjAwIDogIzc1ODE5MixcbiAgICA3MDAgOiAjNmE3Njg4LFxuICAgIDgwMCA6ICM2MDZjN2UsXG4gICAgOTAwIDogIzRkNTk2YyxcbiAgICBBMTAwIDogI2NmZTFmZixcbiAgICBBMjAwIDogIzljYzFmZixcbiAgICBBNDAwIDogIzY5YTFmZixcbiAgICBBNzAwIDogIzUwOTJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/companies/companies.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/containers/companies/companies.component.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _company_create_update_company_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-create-update/company-create-update.component */ "./src/app/containers/companies/company-create-update/company-create-update.component.ts");
/* harmony import */ var _module_companies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-detail/company-detail.component */ "./src/app/containers/companies/company-detail/company-detail.component.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.component */ "./src/app/core/common/dialog-delete/dialog-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ALL_IN_ONE_TABLE_FAKE_DATA } from './companies.fake';

// HTTP



var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(dialog, apiCompany, snackBar) {
        this.dialog = dialog;
        this.apiCompany = apiCompany;
        this.snackBar = snackBar;
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.subject$ = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.columns = [
            // { name: 'Checkbox', property: 'checkbox', visible: false },
            { name: 'Id', property: 'id', visible: true, isModelProperty: true },
            { name: 'Nome Fantasia', property: 'fantasyName', visible: true, isModelProperty: true },
            { name: 'Razão Social', property: 'socialName', visible: true, isModelProperty: true },
            { name: 'CNPJ', property: 'cnpj', visible: true, isModelProperty: true },
            // { name: 'Registro Estadual', property: 'registrationState', visible: false, isModelProperty: true },
            // { name: 'Registro Municipal', property: 'registrationMunicipal', visible: false, isModelProperty: true },
            // { name: 'Rua', property: 'street', visible: false, isModelProperty: true },
            // { name: 'Número', property: 'houseNumber', visible: false, isModelProperty: true },
            // { name: 'Cep', property: 'cep', visible: false, isModelProperty: false },
            { name: 'Telefone', property: 'telephoneNumber', visible: true, isModelProperty: true },
            // { name: 'Nome para Contato', property: 'contactName', visible: false, isModelProperty: true },
            // { name: 'Email', property: 'email', visible: false, isModelProperty: true },
            { name: 'Ações', property: 'actions', visible: true }
        ];
        this.pageSize = 10;
    }
    Object.defineProperty(CompaniesComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    CompaniesComponent.prototype.loadData = function () {
        var _this = this;
        this.apiCompany.getAllUsingGET1()
            .subscribe(function (companies) {
            _this.companies = companies;
            _this.dataSource.data = companies;
            _this.paginator.firstPage();
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                _this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
            }
        });
    };
    CompaniesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (companies) {
            _this.companies = companies;
            _this.dataSource.data = companies;
        });
    };
    CompaniesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CompaniesComponent.prototype.create = function () {
        var _this = this;
        this.dialog.open(_company_create_update_company_create_update_component__WEBPACK_IMPORTED_MODULE_5__["CompanyCreateUpdateComponent"], {
            width: '60.98%',
            height: '85%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (company) {
            if (company) {
                _this.apiCompany.createUsingPOST1(company).
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
    CompaniesComponent.prototype.update = function (company) {
        var _this = this;
        this.dialog.open(_company_create_update_company_create_update_component__WEBPACK_IMPORTED_MODULE_5__["CompanyCreateUpdateComponent"], {
            width: '60.98%',
            height: '85%',
            panelClass: 'dialog-create-update',
            data: company
        }).afterClosed().subscribe(function (_company) {
            if (_company) {
                _this.apiCompany.updateUsingPUT1(_company).
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
    CompaniesComponent.prototype.delete = function (company) {
        var _this = this;
        this.dialog.open(_core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_8__["DialogDeleteComponent"], {
            data: { id: company.id, displayName: company.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe(function (_company) {
            if (_company && _company.id) {
                _this.apiCompany.deleteUsingDELETE1(_company.id).
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
    CompaniesComponent.prototype.detail = function (company) {
        this.dialog.open(_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailComponent"], {
            width: '60.98%',
            height: '67.5%',
            panelClass: 'dialog-detail',
            data: company
        });
    };
    CompaniesComponent.prototype.ngOnDestroy = function () {
    };
    CompaniesComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CompaniesComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CompaniesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CompaniesComponent.prototype, "sort", void 0);
    CompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-notices',
            template: __webpack_require__(/*! ./companies.component.html */ "./src/app/containers/companies/companies.component.html"),
            styles: [__webpack_require__(/*! ./companies.component.scss */ "./src/app/containers/companies/companies.component.scss")],
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _module_companies__WEBPACK_IMPORTED_MODULE_6__["CompanyControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/containers/companies/companies.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/containers/companies/companies.module.ts ***!
  \**********************************************************/
/*! exports provided: CompaniesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesModule", function() { return CompaniesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/page/page.module */ "./src/app/core/common/page/page.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./companies-routing.module */ "./src/app/containers/companies/companies-routing.module.ts");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./companies.component */ "./src/app/containers/companies/companies.component.ts");
/* harmony import */ var _company_create_update_company_create_update_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company-create-update/company-create-update.module */ "./src/app/containers/companies/company-create-update/company-create-update.module.ts");
/* harmony import */ var _company_detail_company_detail_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company-detail/company-detail.module */ "./src/app/containers/companies/company-detail/company-detail.module.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.module */ "./src/app/core/common/dialog-delete/dialog-delete.module.ts");
/* harmony import */ var _module_companies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var CompaniesModule = /** @class */ (function () {
    function CompaniesModule() {
    }
    CompaniesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _companies_routing_module__WEBPACK_IMPORTED_MODULE_8__["CompaniesRoutingModule"],
                _company_create_update_company_create_update_module__WEBPACK_IMPORTED_MODULE_10__["CompanyCreateUpdateModule"],
                _company_detail_company_detail_module__WEBPACK_IMPORTED_MODULE_11__["CompanyDetailModule"],
                // Core
                _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"],
                _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_12__["DialogDeleteModule"],
                app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_15__["PipeModule"]
                // PhonePipe
            ],
            declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_9__["CompaniesComponent"],
            ],
            exports: [_companies_component__WEBPACK_IMPORTED_MODULE_9__["CompaniesComponent"],
            ],
            providers: [
                { provide: _module_companies__WEBPACK_IMPORTED_MODULE_13__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].origin.companies },
                _module_companies__WEBPACK_IMPORTED_MODULE_13__["CompanyControllerService"]
            ]
        })
    ], CompaniesModule);
    return CompaniesModule;
}());



/***/ }),

/***/ "./src/app/containers/companies/company-create-update/company-create-update.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/containers/companies/company-create-update/company-create-update.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fury-dialog-panel>\n    <div class=\"form-content\">\n        <div class=\"form-fields\">\n            <div class=\"area_left\"></div>\n            <div class=\"area_centro\">\n                <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n                    <mat-step [stepControl]=\"firstFormGroup\">\n                        <div [formGroup]=\"firstFormGroup\">\n                            <ng-template matStepLabel>Dados Gerais</ng-template>\n                            <h1 mat-dialog-title class=\"custom_mat-dialog-title\">Cadastrar Companhia</h1>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"fantasyName\" type=\"text\" placeholder=\"Nome Fantasia\" maxlength=\"255\" pattern=\"^(?!\\s*$).+\"\n                                        formControlName=\"fantasyName\" matInput (blur)=\"verifyFantasyName($event.target.value)\"\n                                        required>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"socialName\" type=\"text\" placeholder=\"Razão Social\" maxlength=\"255\" pattern=\"^(?!\\s*$).+\"\n                                        formControlName=\"socialName\" matInput (blur)=\"verifySocialName($event.target.value)\"\n                                        required>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"cnpj\" placeholder=\"CNPJ\" formControlName=\"cnpj\" matInput pattern=\"[0-9]{14}\"\n                                        mask=\"99.999.999/9999-99\" (blur)=\"verifyCnpj($event.target.value)\" required>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field_register\">\n                                <div class=\"registrationState\">\n                                    <mat-form-field>\n                                        <input type=\"text\" id=\"registrationState\" placeholder=\"Registro Estadual\"\n                                            formControlName=\"registrationState\" matInput required>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"registrationMunicipal\">\n                                    <mat-form-field>\n                                        <input type=\"text\" id=\"registrationMunicipal\" placeholder=\"Registro Municipal\"\n                                            formControlName=\"registrationMunicipal\" matInput required>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"filial\">\n                                <div class=\"label\">Empresa Filial?</div>\n                                <div class=\"slider\">\n                                    <mat-slide-toggle class=\"slider_filial\" matInput color=\"warn\" [checked]=\"checked\"\n                                        color=\"primary\" (change)=\"onChange($event)\"></mat-slide-toggle>\n                                </div>\n                            </div>\n                            <div class=\"matriz_label\">\n                                <span [hidden]=\"!checked\">Empresa Matriz</span>\n                            </div>\n                            <div [style.display]=\"checked ? 'flex' : 'none'\" class=\"field\">\n                                <mat-form-field>\n                                    <mat-select placeholder=\"Selecione uma empresa\" formControlName=\"idBranch\"\n                                        [required]=\"checked\">\n                                        <mat-option *ngFor=\"let company of companies\" [value]=\"company.id\">\n                                            {{company.fantasyName}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </mat-step>\n                    <mat-step [stepControl]=\"secondFormGroup\">\n                        <div [formGroup]=\"secondFormGroup\">\n                            <ng-template matStepLabel>Localização</ng-template>\n                            <h1 mat-dialog-title class=\"custom_mat-dialog-title\">Cadastrar Companhia</h1>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"street\" type=\"text\" placeholder=\"Rua\" formControlName=\"street\" maxlength=\"255\" pattern=\"^(?!\\s*$).+\"\n                                        matInput required>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"complement\" type=\"text\" placeholder=\"Complemento\" formControlName=\"complement\"\n                                        matInput required maxlength=\"255\" pattern=\"^(?!\\s*$).+\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"houseNumber\" type=\"text\" placeholder=\"Número\" formControlName=\"houseNumber\"\n                                        matInput required>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"cep\" type=\"text\" placeholder=\"Cep\" formControlName=\"cep\" matInput\n                                        required mask=\"99999-999\" minlength=\"8\" maxlength=\"9\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"telephoneNumber\" type=\"text\" placeholder=\"Telefone\" formControlName=\"telephoneNumber\"\n                                        matInput required [value]=\"phoneNumber\" (keyup)=\"formatPhone($event)\" minlength=\"14\"\n                                        maxlength=\"15\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"ContactName\" type=\"text\" placeholder=\"Nome do Contato\" formControlName=\"contactName\"\n                                        matInput required maxlength=\"255\" pattern=\"^(?!\\s*$).+\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"field\">\n                                <mat-form-field>\n                                    <input id=\"Email\" type=\"text\" placeholder=\"Email\" formControlName=\"email\" pattern=\"^\\w+(.?\\w+)*@\\w+(\\.?\\w+)*\"\n                                        matInput required>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </mat-step>\n                </mat-horizontal-stepper>\n            </div>\n            <div class=\"area_rigth\"></div>\n        </div>\n    </div>\n    <div class=\"footer-content\" footer-content>\n        <button *ngIf=\"!step2\" mat-raised-button [disabled]=\"!firstFormGroup.valid\" mat-button class=\"btn-rounded btn-save\"\n            id=\"btn_next\" (click)=\"stepper.next(); step2 = true\" color=\"primary\">PRÓXIMO</button>\n        <button *ngIf=\"step2\" [disabled]=\"\" mat-button class=\"btn-rounded btn-save no-shadow\" id=\"btn_previous\" (click)=\"stepper.previous(); step2 = false\"\n            color=\"primary\">VOLTAR</button>\n        <button *ngIf=\"step2\" mat-raised-button [disabled]=\"!secondFormGroup.valid\" mat-button class=\"btn-rounded btn-save\"\n            id=\"btn_save\" [disabled]=\"\" (click)=\"save(); step2 = false\" mat-raised-button color=\"primary\">FINALIZAR</button>\n    </div>\n</fury-dialog-panel>"

/***/ }),

/***/ "./src/app/containers/companies/company-create-update/company-create-update.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/containers/companies/company-create-update/company-create-update.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content .form-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .dialog-content .form-content .mat-dialog-title {\n    font-size: 150%;\n    margin-top: 20px;\n    margin-bottom: 20px; }\n  .dialog-content .form-content .form-title {\n    font-size: 150%;\n    color: #3f4ade;\n    font-weight: bold;\n    text-align: center;\n    height: 20%;\n    align-items: center;\n    display: flex;\n    justify-content: center; }\n  .dialog-content .form-content .form-fields {\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: 80%; }\n  .dialog-content .form-content .form-fields .area_centro {\n      height: 100%;\n      width: 100%; }\n  .dialog-content .form-content .form-fields .area_centro .step {\n        display: flex;\n        flex-direction: column;\n        justify-content: stretch;\n        align-content: stretch; }\n  .dialog-content .form-content .form-fields .area_centro .mat-horizontal-content-container {\n        padding: 0px; }\n  .dialog-content .form-content .form-fields .area_centro .mat-horizontal-stepper-header {\n        height: 55%;\n        background-color: #ffffff;\n        padding: 5px; }\n  .dialog-content .form-content .form-fields .area_centro .mat-horizontal-stepper-header-container {\n        width: 63%;\n        margin-left: 20%;\n        margin-top: 10%; }\n  .dialog-content .form-content .form-fields .area_centro .mat-step-label-selected {\n        font-size: 15px !important; }\n  .dialog-content .form-content .form-fields .area_centro .mat-step-label {\n        font-size: 15px !important; }\n  .dialog-content .form-content .form-fields .area_centro .mat-step-icon,\n      .dialog-content .form-content .form-fields .area_centro .mat-step-icon-not-touched {\n        height: 17.91px !important;\n        width: 17.91px !important; }\n  .dialog-content .form-content .form-fields .area_centro .mat-step-icon .ng-star-inserted,\n        .dialog-content .form-content .form-fields .area_centro .mat-step-icon-not-touched .ng-star-inserted {\n          font-size: 10px; }\n  .dialog-content .form-content .form-fields .area_centro .field {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 50%; }\n  .dialog-content .form-content .form-fields .area_centro .field mat-form-field {\n          flex: 1 1 auto; }\n  .dialog-content .form-content .form-fields .area_centro .field_register {\n        flex: 1 1 auto;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        height: 50%; }\n  .dialog-content .form-content .form-fields .area_centro .field_register .registrationState {\n          display: flex;\n          flex: 1 1 50%;\n          padding-right: 2px; }\n  .dialog-content .form-content .form-fields .area_centro .field_register .registrationState mat-form-field {\n            flex: 1 1 auto; }\n  .dialog-content .form-content .form-fields .area_centro .field_register .registrationMunicipal {\n          display: flex;\n          flex: 1 1 50%;\n          padding-left: 2px; }\n  .dialog-content .form-content .form-fields .area_centro .field_register .registrationMunicipal mat-form-field {\n            flex: 1 1 auto; }\n  .dialog-content .form-content .form-fields .area_centro .filial {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        background-color: #e2e2e2;\n        padding: 24px;\n        margin-bottom: 20px; }\n  .dialog-content .form-content .form-fields .area_centro .filial .label {\n          flex: 1;\n          color: #273b56; }\n  .dialog-content .form-content .form-fields .area_centro .filial .slider {\n          flex: 0.1; }\n  .dialog-content .form-content .form-fields .area_centro .matriz_label {\n        font-size: 14px !important;\n        margin-bottom: 18px !important; }\n  .dialog-content .form-content .area_left {\n    flex: 1 1 20%; }\n  .dialog-content .form-content .area_rigth {\n    flex: 1 1 20%; }\n  .dialog-footer {\n  display: flex;\n  padding-right: 24px; }\n  .dialog-footer .footer-content {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: flex-end;\n    min-height: 50px; }\n  .dialog-footer .footer-content .btn-save {\n      flex: .2 1 0%;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n      font-size: 100%;\n      font-weight: lighter; }\n  .dialog-footer .footer-content #btn_previous {\n      margin-right: 20px; }\n  @media screen and (max-height: 400px) {\n  .btn-save {\n    line-height: 24px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9jb21wYW5pZXMvY29tcGFueS1jcmVhdGUtdXBkYXRlL2NvbXBhbnktY3JlYXRlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9zdHlsZXMvX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQStJYjtFQW5KSDtJQU9NLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLG9CQUFtQixFQUNwQjtFQVZMO0lBYU0sZ0JBQWU7SUFDZixlQ3FCVztJRHBCWCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLHdCQUF1QixFQUN4QjtFQXJCTDtJQXdCTSxlQUFjO0lBQ2Qsb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixjQUFhO0lBQ2IsWUFBVyxFQThHWjtFQTFJTDtNQStCUSxhQUFZO01BQ1osWUFBVyxFQXlHWjtFQXpJUDtRQW1DVSxjQUFhO1FBQ2IsdUJBQXNCO1FBQ3RCLHlCQUF3QjtRQUN4Qix1QkFBc0IsRUFDdkI7RUF2Q1Q7UUEwQ1UsYUFBWSxFQUNiO0VBM0NUO1FBOENVLFlBQVc7UUFDWCwwQkFBeUI7UUFDekIsYUFBWSxFQUNiO0VBakRUO1FBb0RVLFdBQVU7UUFDVixpQkFBZ0I7UUFDaEIsZ0JBQWUsRUFDaEI7RUF2RFQ7UUEwRFUsMkJBQTBCLEVBQzNCO0VBM0RUO1FBOERVLDJCQUEwQixFQUMzQjtFQS9EVDs7UUFtRVUsMkJBQTBCO1FBQzFCLDBCQUF5QixFQUsxQjtFQXpFVDs7VUF1RVksZ0JBQWUsRUFDaEI7RUF4RVg7UUE0RVUsY0FBYTtRQUNiLHdCQUF1QjtRQUN2QixvQkFBbUI7UUFDbkIsWUFBVyxFQUtaO0VBcEZUO1VBa0ZZLGVBQWMsRUFDZjtFQW5GWDtRQXVGVSxlQUFjO1FBQ2QsY0FBYTtRQUNiLGdCQUFlO1FBQ2Ysd0JBQXVCO1FBQ3ZCLG9CQUFtQjtRQUNuQixZQUFXLEVBcUJaO0VBakhUO1VBK0ZZLGNBQWE7VUFDYixjQUFhO1VBQ2IsbUJBQWtCLEVBS25CO0VBdEdYO1lBb0djLGVBQWMsRUFDZjtFQXJHYjtVQXlHWSxjQUFhO1VBQ2IsY0FBYTtVQUNiLGtCQUFpQixFQUtsQjtFQWhIWDtZQThHYyxlQUFjLEVBQ2Y7RUEvR2I7UUFvSFUsY0FBYTtRQUNiLG9CQUFtQjtRQUNuQix3QkFBdUI7UUFDdkIsMEJBQXlCO1FBQ3pCLGNBQWE7UUFDYixvQkFBbUIsRUFVcEI7RUFuSVQ7VUE0SFksUUFBTztVQUNQLGVBQWMsRUFDZjtFQTlIWDtVQWlJWSxVQUFTLEVBQ1Y7RUFsSVg7UUFzSVUsMkJBQTBCO1FBQzFCLCtCQUE4QixFQUMvQjtFQXhJVDtJQTZJTSxjQUFhLEVBQ2Q7RUE5SUw7SUFpSk0sY0FBYSxFQUNkO0VBSUw7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBMEJwQjtFQTVCRDtJQUtJLGNBQWE7SUFDYixlQUFjO0lBQ2Qsb0JBQW1CO0lBQ25CLDBCQUF5QjtJQUN6QixpQkFBZ0IsRUFrQmpCO0VBM0JIO01Ba0JNLGNBQWE7TUFDYix5Q0FBd0M7TUFDeEMsZ0JBQWU7TUFDZixxQkFBb0IsRUFDckI7RUF0Qkw7TUF5Qk0sbUJBQWtCLEVBQ25CO0VBSUw7RUFDRTtJQUNFLDZCQUE0QixFQUM3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9jb21wYW5pZXMvY29tcGFueS1jcmVhdGUtdXBkYXRlL2NvbXBhbnktY3JlYXRlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kY29sb3ItZm9udDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LFxuJGtleTogNTAwKTtcblxuLmRpYWxvZy1jb250ZW50IHtcbiAgLmZvcm0tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5mb3JtLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgIGNvbG9yOiAkY29sb3ItZm9udDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5mb3JtLWZpZWxkcyB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDgwJTtcblxuICAgICAgLmFyZWFfY2VudHJvIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuc3RlcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICAgICAgICAgIGhlaWdodDogNTUlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDYzJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LXN0ZXAtbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1zdGVwLWljb24sXG4gICAgICAgIC5tYXQtc3RlcC1pY29uLW5vdC10b3VjaGVkIHtcbiAgICAgICAgICBoZWlnaHQ6IDE3LjkxcHggIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTcuOTFweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgLm5nLXN0YXItaW5zZXJ0ZWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5maWVsZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuXG4gICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZpZWxkX3JlZ2lzdGVyIHtcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuXG4gICAgICAgICAgLnJlZ2lzdHJhdGlvblN0YXRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxIDEgNTAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xuXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWdpc3RyYXRpb25NdW5pY2lwYWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDEgMSA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcblxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsaWFsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjczYjU2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgZmxleDogMC4xO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXRyaXpfbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hcmVhX2xlZnQge1xuICAgICAgZmxleDogMSAxIDIwJTtcbiAgICB9XG5cbiAgICAuYXJlYV9yaWd0aCB7XG4gICAgICBmbGV4OiAxIDEgMjAlO1xuICAgIH1cbiAgfVxufVxuXG4uZGlhbG9nLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG5cbiAgLmZvb3Rlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIC8vIGJ1dHRvbiB7XG4gICAgLy8gICB3aWR0aDogMjUwcHghaW1wb3J0YW50O1xuICAgIC8vICAgfVxuICAgIC8vIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgICAvLyAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgIC8vIH1cblxuICAgIC5idG4tc2F2ZSB7XG4gICAgICBmbGV4OiAuMiAxIDAlO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIH1cblxuICAgICNidG5fcHJldmlvdXMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDAwcHgpIHtcbiAgLmJ0bi1zYXZlIHtcbiAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICB9XG59IiwiLy8gJG1hdC1zZ20tcHJpbWFyeTogKFxuLy8gICAgIDUwIDogI2U1ZTdlYixcbi8vICAgICAxMDAgOiAjYmVjNGNjLFxuLy8gICAgIDIwMCA6ICM5MzlkYWIsXG4vLyAgICAgMzAwIDogIzY4NzY4OSxcbi8vICAgICA0MDAgOiAjNDc1ODZmLFxuLy8gICAgIDUwMCA6ICMyNzNiNTYsXG4vLyAgICAgNjAwIDogIzIzMzU0Zixcbi8vICAgICA3MDAgOiAjMWQyZDQ1LFxuLy8gICAgIDgwMCA6ICMxNzI2M2MsXG4vLyAgICAgOTAwIDogIzBlMTkyYixcbi8vICAgICBBMTAwIDogIzY5OWJmZixcbi8vICAgICBBMjAwIDogIzM2NzlmZixcbi8vICAgICBBNDAwIDogIzAzNTdmZixcbi8vICAgICBBNzAwIDogIzAwNGVlOSxcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDUwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDYwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDcwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDgwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDkwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE3MDAgOiAjZmZmZmZmLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXByaW1hcnk6IChcbiAgICA1MCA6ICNlOGU5ZmIsXG4gICAgMTAwIDogI2M1YzlmNSxcbiAgICAyMDAgOiAjOWZhNWVmLFxuICAgIDMwMCA6ICM3OTgwZTgsXG4gICAgNDAwIDogIzVjNjVlMyxcbiAgICA1MDAgOiAjM2Y0YWRlLFxuICAgIC8vNTAwIDogIzAwMDAwMCxcbiAgICA2MDAgOiAjMzk0M2RhLFxuICAgIDcwMCA6ICMzMTNhZDUsXG4gICAgODAwIDogIzI5MzJkMSxcbiAgICA5MDAgOiAjMWIyMmM4LFxuICAgIEExMDAgOiAjZmRmZGZmLFxuICAgIEEyMDAgOiAjY2FjY2ZmLFxuICAgIEE0MDAgOiAjOTc5YmZmLFxuICAgIEE3MDAgOiAjN2U4MmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuJG1hdC1zZ20tYWNjZW50OiAoXG4gICAgNTAgOiAjZTdlY2VhLFxuICAgIDEwMCA6ICNjMmNlY2IsXG4gICAgMjAwIDogIzk5YWVhOSxcbiAgICAzMDAgOiAjNzA4ZTg3LFxuICAgIDQwMCA6ICM1Mjc1NmQsXG4gICAgNTAwIDogIzMzNWQ1MyxcbiAgICA2MDAgOiAjMmU1NTRjLFxuICAgIDcwMCA6ICMyNzRiNDIsXG4gICAgODAwIDogIzIwNDEzOSxcbiAgICA5MDAgOiAjMTQzMDI5LFxuICAgIEExMDAgOiAjNzFmZmRhLFxuICAgIEEyMDAgOiAjM2VmZmNkLFxuICAgIEE0MDAgOiAjMGJmZmJmLFxuICAgIEE3MDAgOiAjMDBmMWIyLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuLy8gJG1hdC1zZ20td2FybjogKFxuLy8gICAgIDUwIDogI2Y1ZjdmOCxcbi8vICAgICAxMDAgOiAjZTZlYWVkLFxuLy8gICAgIDIwMCA6ICNkNmRkZTIsXG4vLyAgICAgMzAwIDogI2M2Y2ZkNixcbi8vICAgICA0MDAgOiAjYjljNGNkLFxuLy8gICAgIDUwMCA6ICNhZGJhYzQsXG4vLyAgICAgNjAwIDogI2E2YjNiZSxcbi8vICAgICA3MDAgOiAjOWNhYmI2LFxuLy8gICAgIDgwMCA6ICM5M2EzYWYsXG4vLyAgICAgOTAwIDogIzgzOTRhMixcbi8vICAgICBBMTAwIDogI2ZmZmZmZixcbi8vICAgICBBMjAwIDogI2ZkZmVmZixcbi8vICAgICBBNDAwIDogI2M5ZTdmZixcbi8vICAgICBBNzAwIDogI2IwZGJmZixcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDUwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDYwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDcwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDgwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDkwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXdhcm46IChcbiAgICA1MCA6ICNmZWU4ZTcsXG4gICAgMTAwIDogI2ZiYzZjMyxcbiAgICAyMDAgOiAjZjlhMTliLFxuICAgIDMwMCA6ICNmNzdiNzIsXG4gICAgNDAwIDogI2Y1NWU1NCxcbiAgICA1MDAgOiAjZjM0MjM2LFxuICAgIDYwMCA6ICNmMTNjMzAsXG4gICAgNzAwIDogI2VmMzMyOSxcbiAgICA4MDAgOiAjZWQyYjIyLFxuICAgIDkwMCA6ICNlYTFkMTYsXG4gICAgQTEwMCA6ICNmZmZmZmYsXG4gICAgQTIwMCA6ICNmZmU4ZTcsXG4gICAgQTQwMCA6ICNmZmI2YjQsXG4gICAgQTcwMCA6ICNmZjlkOWIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWQtY2FsZW5kYXI6IChcbiAgICA1MCA6ICNlZmYxZjMsXG4gICAgMTAwIDogI2Q4ZGNlMSxcbiAgICAyMDAgOiAjYmVjNGNkLFxuICAgIDMwMCA6ICNhNGFjYjgsXG4gICAgNDAwIDogIzkxOWJhOSxcbiAgICA1MDAgOiAjN2Q4OTlhLFxuICAgIDYwMCA6ICM3NTgxOTIsXG4gICAgNzAwIDogIzZhNzY4OCxcbiAgICA4MDAgOiAjNjA2YzdlLFxuICAgIDkwMCA6ICM0ZDU5NmMsXG4gICAgQTEwMCA6ICNjZmUxZmYsXG4gICAgQTIwMCA6ICM5Y2MxZmYsXG4gICAgQTQwMCA6ICM2OWExZmYsXG4gICAgQTcwMCA6ICM1MDkyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuIl19 */"

/***/ }),

/***/ "./src/app/containers/companies/company-create-update/company-create-update.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/containers/companies/company-create-update/company-create-update.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CompanyCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCreateUpdateComponent", function() { return CompanyCreateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _module_companies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/app/utils/utils.ts");
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






var CompanyCreateUpdateComponent = /** @class */ (function () {
    function CompanyCreateUpdateComponent(defaults, dialogRef, apiCompany, snackBar) {
        var _this = this;
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.apiCompany = apiCompany;
        this.snackBar = snackBar;
        this.mode = 'create';
        this.isLinear = true;
        this.checked = false;
        this.phoneNumber = '';
        this.firstFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            fantasyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            socialName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            cnpj: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            registrationState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            registrationMunicipal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idBranch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.secondFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            houseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            cep: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            telephoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        // load the matriz companies
        this.apiCompany.getCompaniesMatrizUsingGET().
            subscribe(function (_company) {
            _this.companies = _company;
        });
    }
    CompanyCreateUpdateComponent.prototype.ngOnInit = function () {
        if (this.defaults) {
            this.mode = 'update';
            // Formata Numero de Telefone
            this.phoneNumber = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].formatPhoneNumber(this.defaults.telephoneNumber);
            // Ativa o checked se houver filial
            if (this.defaults.idBranch) {
                this.checked = true;
            }
            this.firstFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.id),
                fantasyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.fantasyName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                socialName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.socialName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                cnpj: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.cnpj, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(14),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14),
                ]),
                registrationState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.registrationState, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                registrationMunicipal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.registrationMunicipal, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                idBranch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.idBranch)
            });
            this.secondFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.street, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.complement, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                houseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.houseNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                cep: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.cep, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                ]),
                telephoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].formatPhoneNumber(this.defaults.telephoneNumber), [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(14),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                ]),
                contactName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.contactName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
        }
        else {
            this.defaults = {};
        }
    };
    CompanyCreateUpdateComponent.prototype.save = function () {
        if (this.mode === 'create') {
            this.createCompany();
        }
        else if (this.mode === 'update') {
            this.updateCompany();
        }
    };
    CompanyCreateUpdateComponent.prototype.createCompany = function () {
        // only numbers
        this.firstFormGroup.get('cnpj').setValue(this.firstFormGroup.get('cnpj').value.replace(/\D/g, ''));
        var form1 = this.firstFormGroup.value;
        // only numbers
        this.secondFormGroup.get('cep').setValue(this.secondFormGroup.get('cep').value.replace(/\D/g, ''));
        // only numbers
        this.secondFormGroup.get('telephoneNumber').setValue(this.secondFormGroup.get('telephoneNumber').value.replace(/\D/g, ''));
        var form2 = this.secondFormGroup.value;
        var company = Object.assign(form1, form2);
        this.dialogRef.close(company);
    };
    CompanyCreateUpdateComponent.prototype.updateCompany = function () {
        this.firstFormGroup.get('cnpj').setValue(this.firstFormGroup.get('cnpj').value.replace(/\D/g, ''));
        var form1 = this.firstFormGroup.value;
        // only numbers
        this.secondFormGroup.get('cep').setValue(this.secondFormGroup.get('cep').value.replace(/\D/g, ''));
        // only numbers
        this.secondFormGroup.get('telephoneNumber').setValue(this.secondFormGroup.get('telephoneNumber').value.replace(/\D/g, ''));
        var form2 = this.secondFormGroup.value;
        var company = Object.assign(form1, form2);
        company.id = this.defaults.id;
        this.dialogRef.close(company);
    };
    CompanyCreateUpdateComponent.prototype.isCreateMode = function () {
        return this.mode === 'create';
    };
    CompanyCreateUpdateComponent.prototype.isUpdateMode = function () {
        return this.mode === 'update';
    };
    CompanyCreateUpdateComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    CompanyCreateUpdateComponent.prototype.onChange = function (value) {
        this.checked = value.checked;
        this.firstFormGroup.get('idBranch').setValue('');
    };
    // Mascara dinamica de telefone
    CompanyCreateUpdateComponent.prototype.formatPhone = function (e) {
        var v = e.target.value;
        this.phoneNumber = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].formatPhoneNumber(v);
        this.secondFormGroup.controls['telephoneNumber'].setValue(this.phoneNumber);
    };
    CompanyCreateUpdateComponent.prototype.verifyFantasyName = function (e) {
        var _this = this;
        // se estiver nulo, volta
        if (!e) {
            return;
        }
        // se for igual a ele mesmo, volta também
        if (e === this.defaults.fantasyName) {
            return;
        }
        // isso é so pra deixar mais legível o que é 'e'
        var fantasyName = e;
        this.apiCompany.getByFantasyNameUsingGET(fantasyName).
            subscribe(function (_fantasyName) {
            if (_fantasyName.length) {
                _this.firstFormGroup.setErrors({ 'invalid': true });
                _this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
                    duration: 10000
                });
            }
        });
    };
    CompanyCreateUpdateComponent.prototype.verifySocialName = function (e) {
        var _this = this;
        // se estiver nulo, volta
        if (!e) {
            return;
        }
        // se for igual a ele mesmo, volta também
        if (e === this.defaults.socialName) {
            return;
        }
        // isso é so pra deixar mais legível o que é 'e'
        var socialName = e;
        this.apiCompany.getBySocialNameUsingGET(socialName).
            subscribe(function (_socialName) {
            if (_socialName.length) {
                _this.firstFormGroup.setErrors({ 'invalid': true });
                _this.snackBar.open('Esse nome já existe! Tente outro.', 'OK', {
                    duration: 10000
                });
            }
        });
    };
    CompanyCreateUpdateComponent.prototype.verifyCnpj = function (e) {
        var _this = this;
        // se estiver nulo, volta
        if (!e) {
            return;
        }
        // se for igual a ele mesmo, volta também
        if (e.replace(/\D/g, '') === this.defaults.cnpj) {
            return;
        }
        // isso é so pra deixar mais legível o que é 'e'
        var cnpj = e.replace(/\D/g, '');
        this.apiCompany.getByCnpjUsingGET(cnpj).
            subscribe(function (_cnpj) {
            if (_cnpj.length) {
                _this.firstFormGroup.setErrors({ 'invalid': true });
                _this.snackBar.open('Esse CNPJ já existe! Tente outro.', 'OK', {
                    duration: 10000
                });
            }
        });
    };
    CompanyCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-company-create-update',
            template: __webpack_require__(/*! ./company-create-update.component.html */ "./src/app/containers/companies/company-create-update/company-create-update.component.html"),
            styles: [__webpack_require__(/*! ./company-create-update.component.scss */ "./src/app/containers/companies/company-create-update/company-create-update.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _module_companies__WEBPACK_IMPORTED_MODULE_3__["CompanyControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], CompanyCreateUpdateComponent);
    return CompanyCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/containers/companies/company-create-update/company-create-update.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/containers/companies/company-create-update/company-create-update.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CompanyCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCreateUpdateModule", function() { return CompanyCreateUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _company_create_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-create-update.component */ "./src/app/containers/companies/company-create-update/company-create-update.component.ts");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CompanyCreateUpdateModule = /** @class */ (function () {
    function CompanyCreateUpdateModule() {
    }
    CompanyCreateUpdateModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__["DialogPanelModule"]
            ],
            declarations: [_company_create_update_component__WEBPACK_IMPORTED_MODULE_6__["CompanyCreateUpdateComponent"]],
            entryComponents: [_company_create_update_component__WEBPACK_IMPORTED_MODULE_6__["CompanyCreateUpdateComponent"]],
            exports: [_company_create_update_component__WEBPACK_IMPORTED_MODULE_6__["CompanyCreateUpdateComponent"]]
        })
    ], CompanyCreateUpdateModule);
    return CompanyCreateUpdateModule;
}());



/***/ }),

/***/ "./src/app/containers/companies/company-detail/company-detail.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/companies/company-detail/company-detail.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"close\">\n    <!-- <span><img src='assets/icons/x.png' /></span> -->\n    <button type=\"button\" class=\"mat-icon-button\" mat-dialog-close>\n        <span class=\"mat-button-wrapper\">\n            <img src='assets/icons/x.png' />\n        </span>\n      </button>\n  </div>\n  <div class=\"title\">\n    <div class=\"title-text\">\n      <h1>Companhia - Detalhes</h1>\n    </div>\n  </div>\n  <div class=\"content\">\n    <div class=\"content-name\">\n      <div class=\"field\" id=\"id\">\n        <div class=\"field-label\">ID</div>\n        <div class=\"field-content\">{{data.id}}</div>\n      </div>\n      <div id=\"fantasyName\">\n        <h2>{{data.fantasyName | uppercase}}</h2>\n      </div>\n      <div id=\"socialName\">{{data.socialName | uppercase}}</div>\n      <div class=\"row\">\n        <div id=\"cnpj\" class=\"field\">\n          <div class=\"field-label\">CNPJ</div>\n          <div class=\"field-content\">{{data.cnpj | mask: '99.999.999/9999-99'}}</div>\n        </div>\n        <div id=\"registrationState\" class=\"field\">\n          <div class=\"field-label\">Registro Estadual</div>\n          <div class=\"field-content\">{{data.registrationState}}</div>\n        </div>\n        <div id=\"registrationMunicipal\" class=\"field\">\n          <div class=\"field-label\">Registro Municipal</div>\n          <div class=\"field-content\">{{data.registrationMunicipal}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-localization\">\n      <div>\n        <h2>Localização</h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"field\">\n          <div class=\"field-label\">RUA</div>\n          <div class=\"field-content\">{{data.street}}</div>\n        </div>\n        <div class=\"field\">\n          <div class=\"field-label\">COMPLEMENTO</div>\n          <div class=\"field-content\">{{data.complement}}</div>\n        </div>\n        <div class=\"field\">\n          <div class=\"field-label\">NÚMERO</div>\n          <div class=\"field-content\">{{data.houseNumber}}</div>\n        </div>\n        <div class=\"field\">\n          <div class=\"field-label\">CEP</div>\n          <div class=\"field-content\">{{data.cep | mask: '99999-999'}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-contact\">\n      <div>\n        <h2>Contato</h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"field\">\n          <div class=\"field-label\">TELEFONE</div>\n          <div class=\"field-content\">{{data.telephoneNumber | phone}}</div>\n        </div>\n        <div class=\"field\">\n          <div class=\"field-label\">NOME DO CONTATO</div>\n          <div class=\"field-content\">{{data.contactName}}</div>\n        </div>\n        <div class=\"field\">\n          <div class=\"field-label\">EMAIL</div>\n          <div class=\"field-content\">{{data.email}}</div>\n        </div>\n        <div class=\"field\">\n          <div class=\"field-label\">MATRIZ</div>\n          <div class=\"field-content\">{{ data.idBranch ? data.idBranch : 'Não Possui'}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <span class=\"footer-text\">Informações atualizadas em {{ data.dateUpdate ? data.dateUpdate : now }}</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/containers/companies/company-detail/company-detail.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/companies/company-detail/company-detail.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: white;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  margin: 0; }\n\nh1 {\n  font-size: 30px;\n  color: #1A273A;\n  text-align: center; }\n\nh2 {\n  font-size: 20px;\n  color: #1A273A;\n  text-align: center;\n  font-weight: 500; }\n\nhtml {\n  height: 100%; }\n\n.dialog-detail .card {\n  height: 100%;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 16;\n  display: grid;\n  grid-template-rows: repeat(16, 1fr); }\n\n.dialog-detail .title {\n  /*  background-color:chartreuse;*/\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 4;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr); }\n\n.dialog-detail .title-text {\n  /*  background-color:violet;*/\n  grid-row-start: 2;\n  grid-row-end: 3; }\n\n.dialog-detail .content {\n  /*  background-color:crimson;*/\n  grid-row-start: 4;\n  grid-row-end: 16;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  padding-right: 30px;\n  overflow: auto; }\n\n.dialog-detail .footer {\n  background-color: #1A273A;\n  grid-row-start: 16;\n  text-align: center;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.dialog-detail .close {\n  grid-column-start: 1;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  z-index: 1;\n  align-items: flex-start;\n  justify-content: flex-end;\n  display: flex; }\n\n.dialog-detail .content-name {\n  flex: 1 1 auto;\n  border: 0.5px solid #D3D3D3;\n  background-color: #FAFAFA;\n  padding-left: 12px;\n  padding-right: 12px;\n  box-shadow: 0px 0px 4px; }\n\n.dialog-detail .content-localization {\n  flex: 1 1 auto;\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.dialog-detail .content-contact {\n  flex: 1 1 auto;\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.dialog-detail .field-label {\n  font-weight: bold;\n  color: #1A273A;\n  margin: 5px;\n  font-weight: 500; }\n\n.dialog-detail .field-content {\n  color: #1A273A;\n  margin: 5px;\n  font-weight: normal; }\n\n.dialog-detail .field {\n  display: flex;\n  margin: auto;\n  justify-content: flex-end; }\n\n.dialog-detail .row {\n  display: flex;\n  flex-wrap: wrap; }\n\n.dialog-detail #socialName {\n  text-align: center;\n  margin-top: -12px;\n  margin-bottom: 20px;\n  color: #1A273A; }\n\n.dialog-detail #fantasyName {\n  z-index: 1;\n  margin-top: -20px; }\n\n.dialog-detail .mat-dialog-container {\n  padding: unset; }\n\n@media screen and (max-width: 1000px) {\n  .dialog-detail {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9jb21wYW5pZXMvY29tcGFueS1kZXRhaWwvY29tcGFueS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBdUI7RUFDdkIsa0NBQWlDO0VBQ2pDLGFBQVk7RUFDWixVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBRUksYUFBWTtFQUNaLHFCQUFvQjtFQUNwQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isb0NBQW1DLEVBQ3BDOztBQVRIO0VBWUksa0NBQWtDO0VBQ2xDLHFCQUFvQjtFQUNwQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLG1DQUFrQyxFQUNuQzs7QUFuQkg7RUFzQkksOEJBQThCO0VBQzlCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUF6Qkg7RUE0QkksK0JBQStCO0VBQy9CLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGVBQWMsRUFDZjs7QUFwQ0g7RUF1Q0ksMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3BCOztBQTlDSDtFQWlESSxxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLFdBQVU7RUFDVix3QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLGNBQWEsRUFDZDs7QUF6REg7RUE0REksZUFBYztFQUNkLDRCQUEyQjtFQUMzQiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFDeEI7O0FBbEVIO0VBcUVJLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQXhFSDtFQTJFSSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUE5RUg7RUFpRkksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxZQUFXO0VBQ1gsaUJBQWdCLEVBQ2pCOztBQXJGSDtFQXdGSSxlQUFjO0VBQ2QsWUFBVztFQUNYLG9CQUFtQixFQUNwQjs7QUEzRkg7RUE4RkksY0FBYTtFQUNiLGFBQVk7RUFDWiwwQkFBeUIsRUFDMUI7O0FBakdIO0VBb0dJLGNBQWE7RUFDYixnQkFBZSxFQUNoQjs7QUF0R0g7RUF5R0ksbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsZUFBYyxFQUNmOztBQTdHSDtFQW9ISSxXQUFVO0VBQ1Ysa0JBQWlCLEVBRWxCOztBQXZISDtFQTBISSxlQUFjLEVBQ2Y7O0FBR0g7RUFDSztJQUNDLDRCQUEyQjtJQUMzQix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBQ3ZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2NvbXBhbmllcy9jb21wYW55LWRldGFpbC9jb21wYW55LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMUEyNzNBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzFBMjczQTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRpYWxvZy1kZXRhaWx7XG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMTY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxNiwgMWZyKTtcbiAgfVxuICBcbiAgLnRpdGxlIHtcbiAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjpjaGFydHJldXNlOyovXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gIH1cbiAgXG4gIC50aXRsZS10ZXh0IHtcbiAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjp2aW9sZXQ7Ki9cbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDM7XG4gIH1cbiAgXG4gIC5jb250ZW50IHtcbiAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjpjcmltc29uOyovXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XG4gICAgZ3JpZC1yb3ctZW5kOiAxNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTI3M0E7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuY2xvc2Uge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgei1pbmRleDogMTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5jb250ZW50LW5hbWUge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0QzRDNEMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4O1xuICB9XG4gIFxuICAuY29udGVudC1sb2NhbGl6YXRpb24ge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAuY29udGVudC1jb250YWN0IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgfVxuICBcbiAgLmZpZWxkLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzFBMjczQTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAuZmllbGQtY29udGVudCB7XG4gICAgY29sb3I6ICMxQTI3M0E7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIFxuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgI3NvY2lhbE5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyNzNBO1xuICB9XG4gIFxuICAvLyAjaWQge1xuICAvLyAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgLy8gfVxuICBcbiAgI2ZhbnRhc3lOYW1lIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gIH1cbiAgXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiB1bnNldDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgLmRpYWxvZy1kZXRhaWx7XG4gICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IFxuICAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/companies/company-detail/company-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/companies/company-detail/company-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompanyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailComponent", function() { return CompanyDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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

// import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// import { CompanyModel } from '../../../models/companies/companies.model';

var CompanyDetailComponent = /** @class */ (function () {
    function CompanyDetailComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.tiles = [
            { text: 'Nome', cols: 1, rows: 1, color: '#FAFAFA' },
            { text: 'Localização', cols: 1, rows: 1, color: 'lightgreen' },
            { text: 'Contato', cols: 1, rows: 1, color: 'lightpink' },
        ];
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
    };
    CompanyDetailComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    Object.defineProperty(CompanyDetailComponent.prototype, "now", {
        get: function () {
            var date = new Date().toLocaleDateString('en-GB');
            // Date formatting for footer
            var d = date.split('/');
            // const m = Utils.mesPorExtenso(d[1]);
            return d[0] + '/' + d[1] + '/' + d[2];
        },
        enumerable: true,
        configurable: true
    });
    CompanyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-company-detail',
            template: __webpack_require__(/*! ./company-detail.component.html */ "./src/app/containers/companies/company-detail/company-detail.component.html"),
            styles: [__webpack_require__(/*! ./company-detail.component.scss */ "./src/app/containers/companies/company-detail/company-detail.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());



/***/ }),

/***/ "./src/app/containers/companies/company-detail/company-detail.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/containers/companies/company-detail/company-detail.module.ts ***!
  \******************************************************************************/
/*! exports provided: CompanyDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailModule", function() { return CompanyDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _company_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-detail.component */ "./src/app/containers/companies/company-detail/company-detail.component.ts");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
/* harmony import */ var app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CompanyDetailModule = /** @class */ (function () {
    function CompanyDetailModule() {
    }
    CompanyDetailModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__["DialogPanelModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__["PipeModule"]
            ],
            declarations: [_company_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailComponent"]],
            entryComponents: [_company_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailComponent"]],
            exports: [_company_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailComponent"]]
        })
    ], CompanyDetailModule);
    return CompanyDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-containers-companies-companies-module.js.map