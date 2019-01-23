(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-equipments-equipments-module"],{

/***/ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"close\">\n        <!-- <span><img src='assets/icons/x.png' /></span> -->\n        <button type=\"button\" class=\"mat-icon-button\" mat-dialog-close>\n            <span class=\"mat-button-wrapper\">\n                <img src='assets/icons/x.png' />\n            </span>\n        </button>\n    </div>\n    <div class=\"title\">\n        <div class=\"title-text\">\n            <h1>Adicionar Atividade(s)</h1>\n        </div>\n    </div>\n    <div class=\"content\">\n        <div class=\"search\">\n            <mat-card>\n                <div id=\"input-filter\">\n                    <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\"\n                        fxLayout=\"row\"></fury-list>\n                </div>\n            </mat-card>\n        </div>\n        <div class=\"item-selected\">\n            <mat-card>\n                <div class=\"table\">\n\n                    <table mat-table [dataSource]=\"dataSource\" matSort fxFlex>\n\n                        <!-- checked Column -->\n                        <ng-container matColumnDef=\"checked\">\n                            <th mat-header-cell *matHeaderCellDef> Check </th>\n                            <td mat-cell *matCellDef=\"let element\">\n                                <mat-checkbox [checked]=\"element.checked\" (change)=\"changeChecked(element)\"></mat-checkbox>\n                            </td>\n                        </ng-container>\n\n                        <!-- id Column -->\n                        <ng-container matColumnDef=\"id\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Id </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                        </ng-container>\n\n                        <!-- description Column -->\n                        <ng-container matColumnDef=\"description\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Nome </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                        </ng-container>\n\n                        <!-- serviceOrderType Column -->\n                        <ng-container matColumnDef=\"serviceOrderType\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Tipo de OS </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{ element.serviceOrderType.name }} </td>\n                        </ng-container>\n\n                        <!-- team Column -->\n                        <ng-container matColumnDef=\"team\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Exclusivo? </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{ element.team.name }} </td>\n                        </ng-container>\n\n                        <tr mat-header-row *matHeaderRowDef=\"visibleColumns; sticky: true\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: visibleColumns;\"></tr>\n                    </table>\n\n                </div>\n            </mat-card>\n        </div>\n    </div>\n    <div class=\"footer-activity\">\n        <button mat-raised-button class=\"btn-rounded btn-save\" (click)=\"save()\" color=\"primary\">SALVAR</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-detail .content .search #input-filter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\nbody {\n  background-color: white;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  margin: 0; }\n\nh1 {\n  font-size: 150%;\n  color: #1A273A;\n  text-align: center; }\n\nh2 {\n  font-size: 20px;\n  color: #1A273A;\n  text-align: center;\n  font-weight: 500; }\n\nhtml {\n  height: 100%; }\n\n.dialog-detail .card {\n  height: 100%;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 16;\n  display: grid;\n  grid-template-rows: repeat(16, 1fr); }\n\n.dialog-detail .title {\n  /*  background-color:chartreuse;*/\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr); }\n\n.dialog-detail .title-text {\n  /*  background-color:violet;*/\n  grid-row-start: 2;\n  grid-row-end: 3; }\n\n.dialog-detail .content {\n  /*  background-color:crimson;*/\n  grid-row-start: 3;\n  grid-row-end: 16;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  padding-right: 30px;\n  overflow: auto; }\n\n.dialog-detail .content .search {\n    margin-top: 5px;\n    margin-bottom: 24px; }\n\n.dialog-detail .content .search #input-filter fury-list {\n      flex: 1 1 auto; }\n\n.dialog-detail .content .search #input-filter fury-list .fury-list-table {\n        flex: 1 1 auto; }\n\n.dialog-detail .content .search #input-filter fury-list .fury-list-table .fury-list-name {\n          display: none; }\n\n.dialog-detail .content .search #input-filter fury-list .fury-list-table .fury-list-header {\n          border-bottom: unset !important;\n          background: unset !important; }\n\n.dialog-detail .content .search #input-filter fury-list .fury-list-table .fury-list-header div {\n            align-items: center !important;\n            justify-content: center !important; }\n\n.dialog-detail .content .item-selected {\n    flex: 1 1 auto;\n    display: flex; }\n\n.dialog-detail .content .item-selected .mat-card {\n      flex: 1 1 auto;\n      margin-bottom: 20px; }\n\n.dialog-detail .content .item-selected .mat-card .table {\n        overflow: auto;\n        height: 100%; }\n\n.dialog-detail .content .item-selected .mat-card .element-detail {\n        padding: 5px;\n        display: inline-flex; }\n\n.dialog-detail .content .item-selected .mat-card .element-detail label {\n          font-weight: 500;\n          margin-right: 5px; }\n\n.dialog-detail .content .item-selected .mat-card .element-detail span {\n          font-weight: 300;\n          margin-right: 5px; }\n\n.dialog-detail .content .item-selected .mat-card .picture {\n        width: 54px;\n        height: 54px;\n        background-color: #E0E0E0;\n        border: 2px solid #C0C0C0;\n        background-repeat: no-repeat;\n        background-size: cover;\n        padding-right: 5px;\n        padding-bottom: 5px; }\n\n.dialog-detail .content .item-selected .mat-card .picture img {\n          width: 50px;\n          height: 50px; }\n\n.dialog-detail .content .item-selected .mat-card .fields {\n        text-align: left;\n        width: 100%; }\n\n.dialog-detail .footer-activity {\n  grid-row-start: 16;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 30px;\n  margin-bottom: 30px; }\n\n.dialog-detail .footer-activity .btn-save {\n    flex: .2 1 0%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n    font-size: 100%;\n    font-weight: lighter; }\n\n.dialog-detail .close {\n  grid-column-start: 1;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  z-index: 1;\n  align-items: flex-start;\n  justify-content: flex-end;\n  display: flex; }\n\n.dialog-detail .row {\n  display: flex;\n  flex-wrap: wrap; }\n\n.dialog-detail .mat-dialog-container {\n  padding: unset; }\n\n@media screen and (max-width: 1000px) {\n  .dialog-detail {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9lcXVpcG1lbnRzL2VxdWlwbWVudC1hZGQtYWN0aXZpdHktY29tcG9uZW50L2VxdWlwbWVudC1hZGQtYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxjQUFhO0VBQ2IsZUFBYztFQUNkLHNCQUFxQjtFQUNyQix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLGtDQUFpQztFQUNqQyxhQUFZO0VBQ1osVUFBUyxFQUNaOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUVRLGFBQVk7RUFDWixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLG9DQUFtQyxFQUN0Qzs7QUFUTDtFQVlRLGtDQUFrQztFQUNsQyxxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGNBQWE7RUFDYixtQ0FBa0MsRUFDckM7O0FBbkJMO0VBc0JRLDhCQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FBekJMO0VBNEJRLCtCQUErQjtFQUMvQixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixlQUFjLEVBbUdqQjs7QUF0SUw7SUFzQ1ksZ0JBQWU7SUFDZixvQkFBbUIsRUEyQnRCOztBQWxFVDtNQTZDb0IsZUFBYyxFQW1CakI7O0FBaEVqQjtRQWdEd0IsZUFBYyxFQWVqQjs7QUEvRHJCO1VBbUQ0QixjQUFhLEVBQ2hCOztBQXBEekI7VUF1RDRCLGdDQUErQjtVQUMvQiw2QkFBNEIsRUFNL0I7O0FBOUR6QjtZQTJEZ0MsK0JBQThCO1lBQzlCLG1DQUFrQyxFQUNyQzs7QUE3RDdCO0lBcUVZLGVBQWM7SUFDZCxjQUFhLEVBK0RoQjs7QUFySVQ7TUF5RWdCLGVBQWM7TUFDZCxvQkFBbUIsRUEwRHRCOztBQXBJYjtRQTRFb0IsZUFBYztRQUNkLGFBQVksRUFDZjs7QUE5RWpCO1FBMEZvQixhQUFZO1FBQ1oscUJBQW9CLEVBV3ZCOztBQXRHakI7VUE4RndCLGlCQUFnQjtVQUNoQixrQkFBaUIsRUFDcEI7O0FBaEdyQjtVQW1Hd0IsaUJBQWdCO1VBQ2hCLGtCQUFpQixFQUNwQjs7QUFyR3JCO1FBZ0hvQixZQUFXO1FBQ1gsYUFBWTtRQUNaLDBCQUF5QjtRQUN6QiwwQkFBeUI7UUFDekIsNkJBQTRCO1FBQzVCLHVCQUFzQjtRQUV0QixtQkFBa0I7UUFDbEIsb0JBQW1CLEVBTXRCOztBQTlIakI7VUEySHdCLFlBQVc7VUFDWCxhQUFZLEVBQ2Y7O0FBN0hyQjtRQWlJb0IsaUJBQWdCO1FBQ2hCLFlBQVcsRUFDZDs7QUFuSWpCO0VBeUlRLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBT3RCOztBQXJKTDtJQWdKWSxjQUFhO0lBQ2IseUNBQXdDO0lBQ3hDLGdCQUFlO0lBQ2YscUJBQW9CLEVBQ3ZCOztBQXBKVDtFQXdKUSxxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLFdBQVU7RUFDVix3QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLGNBQWEsRUFDaEI7O0FBaEtMO0VBc0xRLGNBQWE7RUFDYixnQkFBZSxFQUNsQjs7QUF4TEw7RUEyTFEsZUFBYyxFQUNqQjs7QUFHTDtFQUNJO0lBQ0ksNEJBQTJCO0lBQzNCLHVCQUFzQjtJQUN0Qix3QkFBdUIsRUFDMUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvZXF1aXBtZW50cy9lcXVpcG1lbnQtYWRkLWFjdGl2aXR5LWNvbXBvbmVudC9lcXVpcG1lbnQtYWRkLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIl9jdXN0b21fY29sb3Jfc2NoZW1lLnNjc3NcIjtcbiR0aGVtZS1iYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXA6ICRtYXQtc2dtLXByaW1hcnksICRrZXk6IDUwMCk7XG5cbi8vIGNlbnRyYWxpemVzIGFsbCBjb250YWluZXIgaXRlbXNcbiVmbGV4LWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgY29sb3I6ICMxQTI3M0E7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMUEyNzNBO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kaWFsb2ctZGV0YWlsIHtcbiAgICAuY2FyZCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMTY7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDE2LCAxZnIpO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIC8qICBiYWNrZ3JvdW5kLWNvbG9yOmNoYXJ0cmV1c2U7Ki9cbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICB9XG5cbiAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgIC8qICBiYWNrZ3JvdW5kLWNvbG9yOnZpb2xldDsqL1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgLyogIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjsqL1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxNjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgICAgICAgICNpbnB1dC1maWx0ZXIge1xuICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgZnVyeS1saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG5cbiAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgLm1hdC1jYXJkIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIC50YWJsZXtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gLml0ZW0ge1xuICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b206IDFweCNDMEMwQzAgc29saWQ7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIC5pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtYmFja2dyb3VuZCwgLjA4KTtcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAuZWxlbWVudC1kZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIC5kZWwtcGFydCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcblxuICAgICAgICAgICAgICAgIC8vICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTRweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjQzBDMEMwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb290ZXItYWN0aXZpdHkge1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgLmJ0bi1zYXZlIHtcbiAgICAgICAgICAgIGZsZXg6IC4yIDEgMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2xvc2Uge1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAvLyAuZmllbGQtbGFiZWwge1xuICAgIC8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gICBjb2xvcjogIzFBMjczQTtcbiAgICAvLyAgIG1hcmdpbjogNXB4O1xuICAgIC8vICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvLyB9XG5cbiAgICAvLyAuZmllbGQtY29udGVudCB7XG4gICAgLy8gICBjb2xvcjogIzFBMjczQTtcbiAgICAvLyAgIG1hcmdpbjogNXB4O1xuICAgIC8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvLyB9XG5cbiAgICAvLyAuZmllbGQge1xuICAgIC8vICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgIG1hcmdpbjogYXV0bztcbiAgICAvLyAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLy8gfVxuXG4gICAgLnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiB1bnNldDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5kaWFsb2ctZGV0YWlsIHtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: EquipmentAddActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentAddActivityComponent", function() { return EquipmentAddActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_module_activities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/module/activities */ "./src/app/module/activities/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
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








var EquipmentAddActivityComponent = /** @class */ (function () {
    function EquipmentAddActivityComponent(defaults, dialogRef, apiActivity, snackBar) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.apiActivity = apiActivity;
        this.snackBar = snackBar;
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.columns = [
            { name: 'Check', property: 'checked', visible: true, isModelProperty: true },
            { name: 'Id', property: 'id', visible: true, isModelProperty: true },
            { name: 'Descrição', property: 'description', visible: true, isModelProperty: true },
            { name: 'Tipo de OS', property: 'serviceOrderType', visible: true, isModelProperty: true },
            { name: 'Equipe', property: 'team', visible: true, isModelProperty: true },
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        var idsParts = this.defaults.parts.map(function (obj) { return obj.id; });
        var idsActivities = this.defaults.activities.map(function (obj) { return obj.id; });
        // // instance the form group for mode Update and Create
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.name),
            idSector: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.sector.id),
            idFabricator: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.model.fabricator.id),
            idModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.model.id),
            idCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.idCompany),
            idsParts: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](idsParts),
            idsActivities: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](idsActivities)
        });
    }
    Object.defineProperty(EquipmentAddActivityComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    EquipmentAddActivityComponent.prototype.loadData = function () {
        var _this = this;
        this.apiActivity.getAllUsingGET()
            .subscribe(function (activities) {
            _this.activities = activities;
            var idsPart = _this.defaults.activities.map(function (obj) { return obj.id; });
            // Adiciona o checked para os ids existentes
            for (var i = 0; i < _this.activities.length; i++) {
                if (idsPart.includes(_this.activities[i].id)) {
                    _this.activities[i].checked = true;
                }
            }
            _this.dataSource.data = _this.activities;
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                _this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
            }
        });
    };
    EquipmentAddActivityComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.loadData();
    };
    EquipmentAddActivityComponent.prototype.save = function () {
        var parts = this.dataSource.data;
        // coleta os id que estão marcados
        var ids = [];
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].checked === true) {
                ids.push(parts[i].id);
            }
        }
        // adiciona o valor ao controle
        this.form.get('idsActivities').setValue(ids);
        // envia o objeto para atualização
        var equipment = this.form.value;
        // Que a força esteja com você!
        this.dialogRef.close(equipment);
    };
    EquipmentAddActivityComponent.prototype.urlImg = function (img) {
        return img ? environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].origin.fileServer + img : '/assets/icons/baseline_add_a_photo_black_48dp.png';
    };
    EquipmentAddActivityComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    EquipmentAddActivityComponent.prototype.changeChecked = function (row) {
        row.checked = row.checked ? false : true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EquipmentAddActivityComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EquipmentAddActivityComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EquipmentAddActivityComponent.prototype, "sort", void 0);
    EquipmentAddActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-equipment-add-activity',
            template: __webpack_require__(/*! ./equipment-add-activity.component.html */ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.html"),
            styles: [__webpack_require__(/*! ./equipment-add-activity.component.scss */ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            app_module_activities__WEBPACK_IMPORTED_MODULE_3__["ActivityControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], EquipmentAddActivityComponent);
    return EquipmentAddActivityComponent;
}());



/***/ }),

/***/ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EquipmentAddActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentAddActivityModule", function() { return EquipmentAddActivityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _equipment_add_activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipment-add-activity.component */ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_module_activities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/module/activities */ "./src/app/module/activities/index.ts");
/* harmony import */ var app_module_equipments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/module/equipments */ "./src/app/module/equipments/index.ts");
/* harmony import */ var app_core_common_list_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EquipmentAddActivityModule = /** @class */ (function () {
    function EquipmentAddActivityModule() {
    }
    EquipmentAddActivityModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                app_core_common_list_list_module__WEBPACK_IMPORTED_MODULE_11__["ListModule"]
            ],
            declarations: [_equipment_add_activity_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentAddActivityComponent"]],
            entryComponents: [_equipment_add_activity_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentAddActivityComponent"]],
            exports: [_equipment_add_activity_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentAddActivityComponent"]],
            providers: [
                // {provide: SEC_PATH, useValue: environment.origin.companies},
                // {provide: FAB_PATH, useValue: environment.origin.fabricators},
                // {provide: MOD_PATH, useValue: environment.origin.models},
                { provide: app_module_equipments__WEBPACK_IMPORTED_MODULE_10__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.equipments },
                { provide: app_module_activities__WEBPACK_IMPORTED_MODULE_9__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.activities },
                // SectorControllerService,
                // FabricatorControllerService,
                app_module_activities__WEBPACK_IMPORTED_MODULE_9__["ActivityControllerService"],
                app_module_equipments__WEBPACK_IMPORTED_MODULE_10__["EquipmentControllerService"]
            ]
        })
    ], EquipmentAddActivityModule);
    return EquipmentAddActivityModule;
}());



/***/ }),

/***/ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<fury-dialog-panel>\n\n    <div class=\"form-content\">\n        <div class=\"form-title\">\n            <span>Cadastrar Equipamentos</span>\n        </div>\n        <div class=\"form-fields\">\n            <form [formGroup]=\"form\">\n                <div class=\"name\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Nome do Equipamento\" pattern=\"^(?!\\s*$).+\" formControlName=\"name\" id=\"name\" required />\n                    </mat-form-field>\n                </div>\n                <div class=\"idSector\">\n                    <mat-form-field>\n                        <mat-select placeholder=\"Selecione o Setor\"\n                            formControlName=\"idSector\" id=\"idSector\" required>\n                            <mat-option *ngFor=\"let sector of sectors\" [value]=\"sector.id\">\n                                {{sector.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"idFabricator\">\n                    <mat-form-field>\n                        <mat-select placeholder=\"Selecione o Fabricante\" (selectionChange)=\"loadModels(form.get('idFabricator').value, true)\"\n                            formControlName=\"idFabricator\" id=\"idFabricator\" required>\n                            <mat-option *ngFor=\"let fabricator of fabricators\" [value]=\"fabricator.id\">\n                                {{fabricator.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"idModel\">\n                    <mat-form-field>\n                        <mat-select placeholder=\"Selecione o Modelo\"\n                            formControlName=\"idModel\" id=\"idModel\" required>\n                            <mat-option *ngFor=\"let model of models\" [value]=\"model.id\">\n                                {{model.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"footer-content\" footer-content>\n        <button *ngIf=\"isCreateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" (click)=\"save()\" color=\"primary\">SALVAR</button>\n        <button *ngIf=\"isUpdateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" color=\"primary\"  (click)=\"save()\">ATUALIZAR</button>\n    </div>\n\n</fury-dialog-panel>\n\n"

/***/ }),

/***/ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content .form-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .dialog-content .form-content .form-title {\n    font-size: 150%;\n    color: #3f4ade;\n    font-weight: bold;\n    text-align: center;\n    height: 20%;\n    align-items: center;\n    display: flex;\n    justify-content: center; }\n  .dialog-content .form-content .form-fields {\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: 80%; }\n  .dialog-content .form-content .form-fields form {\n      height: 100%;\n      width: 100%; }\n  .dialog-content .form-content .form-fields form .name,\n      .dialog-content .form-content .form-fields form .idSector,\n      .dialog-content .form-content .form-fields form .idFabricator,\n      .dialog-content .form-content .form-fields form .idModel {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 25%; }\n  .dialog-content .form-content .form-fields form .name mat-form-field,\n        .dialog-content .form-content .form-fields form .idSector mat-form-field,\n        .dialog-content .form-content .form-fields form .idFabricator mat-form-field,\n        .dialog-content .form-content .form-fields form .idModel mat-form-field {\n          flex: .3 1 auto; }\n  .dialog-footer {\n  display: flex;\n  padding-right: 24px; }\n  .dialog-footer .footer-content {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: flex-end; }\n  .dialog-footer .footer-content .btn-save {\n      flex: .2 1 0%;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n      font-size: 100%;\n      font-weight: lighter; }\n  @media screen and (max-height: 400px) {\n  .btn-save {\n    line-height: 24px !important; } }\n  @media screen and (max-width: 600px), (max-height: 600px) {\n  .area-panel {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9lcXVpcG1lbnRzL2VxdWlwbWVudC1jcmVhdGUtdXBkYXRlL2VxdWlwbWVudC1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL1RyYW5zaXJlL0dpdC9yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRVEsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBdUNmO0VBM0NMO0lBT1ksZ0JBQWU7SUFDZixlQzJCSztJRDFCTCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLHdCQUF1QixFQUMxQjtFQWZUO0lBa0JZLGVBQWM7SUFDZCxvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYixZQUFXLEVBb0JkO0VBMUNUO01BeUJnQixhQUFZO01BQ1osWUFBVyxFQWVkO0VBekNiOzs7O1FBZ0NvQixjQUFhO1FBQ2Isd0JBQXVCO1FBQ3ZCLG9CQUFtQjtRQUNuQixZQUFXLEVBS2Q7RUF4Q2pCOzs7O1VBc0N3QixnQkFBZSxFQUNsQjtFQVFyQjtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFldEI7RUFqQkQ7SUFLUSxjQUFhO0lBQ2IsZUFBYztJQUNkLG9CQUFtQjtJQUNuQiwwQkFBeUIsRUFRNUI7RUFoQkw7TUFXWSxjQUFhO01BQ2IseUNBQXdDO01BQ3hDLGdCQUFlO01BQ2YscUJBQW9CLEVBQ3ZCO0VBSVQ7RUFDSTtJQUNJLDZCQUE0QixFQUMvQixFQUFBO0VBR0w7RUFFSTtJQUNJLDRCQUEyQjtJQUMzQix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2VxdWlwbWVudHMvZXF1aXBtZW50LWNyZWF0ZS11cGRhdGUvZXF1aXBtZW50LWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kY29sb3ItZm9udDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuXG4uZGlhbG9nLWNvbnRlbnQge1xuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgLmZvcm0tdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1mb250O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1maWVsZHMge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG5cbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIC5uYW1lLFxuICAgICAgICAgICAgICAgIC5pZFNlY3RvcixcbiAgICAgICAgICAgICAgICAuaWRGYWJyaWNhdG9yLFxuICAgICAgICAgICAgICAgIC5pZE1vZGVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUlO1xuXG4gICAgICAgICAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IC4zIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uZGlhbG9nLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuXG4gICAgLmZvb3Rlci1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgLmJ0bi1zYXZlIHtcbiAgICAgICAgICAgIGZsZXg6IC4yIDEgMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkge1xuICAgIC5idG4tc2F2ZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCksXG4obWF4LWhlaWdodCA6IDYwMHB4KSB7XG4gICAgLmFyZWEtcGFuZWwge1xuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuIiwiLy8gJG1hdC1zZ20tcHJpbWFyeTogKFxuLy8gICAgIDUwIDogI2U1ZTdlYixcbi8vICAgICAxMDAgOiAjYmVjNGNjLFxuLy8gICAgIDIwMCA6ICM5MzlkYWIsXG4vLyAgICAgMzAwIDogIzY4NzY4OSxcbi8vICAgICA0MDAgOiAjNDc1ODZmLFxuLy8gICAgIDUwMCA6ICMyNzNiNTYsXG4vLyAgICAgNjAwIDogIzIzMzU0Zixcbi8vICAgICA3MDAgOiAjMWQyZDQ1LFxuLy8gICAgIDgwMCA6ICMxNzI2M2MsXG4vLyAgICAgOTAwIDogIzBlMTkyYixcbi8vICAgICBBMTAwIDogIzY5OWJmZixcbi8vICAgICBBMjAwIDogIzM2NzlmZixcbi8vICAgICBBNDAwIDogIzAzNTdmZixcbi8vICAgICBBNzAwIDogIzAwNGVlOSxcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDUwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDYwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDcwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDgwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDkwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE3MDAgOiAjZmZmZmZmLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXByaW1hcnk6IChcbiAgICA1MCA6ICNlOGU5ZmIsXG4gICAgMTAwIDogI2M1YzlmNSxcbiAgICAyMDAgOiAjOWZhNWVmLFxuICAgIDMwMCA6ICM3OTgwZTgsXG4gICAgNDAwIDogIzVjNjVlMyxcbiAgICA1MDAgOiAjM2Y0YWRlLFxuICAgIDYwMCA6ICMzOTQzZGEsXG4gICAgNzAwIDogIzMxM2FkNSxcbiAgICA4MDAgOiAjMjkzMmQxLFxuICAgIDkwMCA6ICMxYjIyYzgsXG4gICAgQTEwMCA6ICNmZGZkZmYsXG4gICAgQTIwMCA6ICNjYWNjZmYsXG4gICAgQTQwMCA6ICM5NzliZmYsXG4gICAgQTcwMCA6ICM3ZTgyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWF0LXNnbS1hY2NlbnQ6IChcbiAgICA1MCA6ICNlN2VjZWEsXG4gICAgMTAwIDogI2MyY2VjYixcbiAgICAyMDAgOiAjOTlhZWE5LFxuICAgIDMwMCA6ICM3MDhlODcsXG4gICAgNDAwIDogIzUyNzU2ZCxcbiAgICA1MDAgOiAjMzM1ZDUzLFxuICAgIDYwMCA6ICMyZTU1NGMsXG4gICAgNzAwIDogIzI3NGI0MixcbiAgICA4MDAgOiAjMjA0MTM5LFxuICAgIDkwMCA6ICMxNDMwMjksXG4gICAgQTEwMCA6ICM3MWZmZGEsXG4gICAgQTIwMCA6ICMzZWZmY2QsXG4gICAgQTQwMCA6ICMwYmZmYmYsXG4gICAgQTcwMCA6ICMwMGYxYjIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4vLyAkbWF0LXNnbS13YXJuOiAoXG4vLyAgICAgNTAgOiAjZjVmN2Y4LFxuLy8gICAgIDEwMCA6ICNlNmVhZWQsXG4vLyAgICAgMjAwIDogI2Q2ZGRlMixcbi8vICAgICAzMDAgOiAjYzZjZmQ2LFxuLy8gICAgIDQwMCA6ICNiOWM0Y2QsXG4vLyAgICAgNTAwIDogI2FkYmFjNCxcbi8vICAgICA2MDAgOiAjYTZiM2JlLFxuLy8gICAgIDcwMCA6ICM5Y2FiYjYsXG4vLyAgICAgODAwIDogIzkzYTNhZixcbi8vICAgICA5MDAgOiAjODM5NGEyLFxuLy8gICAgIEExMDAgOiAjZmZmZmZmLFxuLy8gICAgIEEyMDAgOiAjZmRmZWZmLFxuLy8gICAgIEE0MDAgOiAjYzllN2ZmLFxuLy8gICAgIEE3MDAgOiAjYjBkYmZmLFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgODAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgOTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20td2FybjogKFxuICAgIDUwIDogI2ZlZThlNyxcbiAgICAxMDAgOiAjZmJjNmMzLFxuICAgIDIwMCA6ICNmOWExOWIsXG4gICAgMzAwIDogI2Y3N2I3MixcbiAgICA0MDAgOiAjZjU1ZTU0LFxuICAgIDUwMCA6ICNmMzQyMzYsXG4gICAgNjAwIDogI2YxM2MzMCxcbiAgICA3MDAgOiAjZWYzMzI5LFxuICAgIDgwMCA6ICNlZDJiMjIsXG4gICAgOTAwIDogI2VhMWQxNixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZThlNyxcbiAgICBBNDAwIDogI2ZmYjZiNCxcbiAgICBBNzAwIDogI2ZmOWQ5YixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtZC1jYWxlbmRhcjogKFxuICAgIDUwIDogI2VmZjFmMyxcbiAgICAxMDAgOiAjZDhkY2UxLFxuICAgIDIwMCA6ICNiZWM0Y2QsXG4gICAgMzAwIDogI2E0YWNiOCxcbiAgICA0MDAgOiAjOTE5YmE5LFxuICAgIDUwMCA6ICM3ZDg5OWEsXG4gICAgNjAwIDogIzc1ODE5MixcbiAgICA3MDAgOiAjNmE3Njg4LFxuICAgIDgwMCA6ICM2MDZjN2UsXG4gICAgOTAwIDogIzRkNTk2YyxcbiAgICBBMTAwIDogI2NmZTFmZixcbiAgICBBMjAwIDogIzljYzFmZixcbiAgICBBNDAwIDogIzY5YTFmZixcbiAgICBBNzAwIDogIzUwOTJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EquipmentCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentCreateUpdateComponent", function() { return EquipmentCreateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_module_equipments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/module/equipments */ "./src/app/module/equipments/index.ts");
/* harmony import */ var app_module_companies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var app_module_fabricators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/module/fabricators */ "./src/app/module/fabricators/index.ts");
/* harmony import */ var app_module_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/module/models */ "./src/app/module/models/index.ts");
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








var EquipmentCreateUpdateComponent = /** @class */ (function () {
    function EquipmentCreateUpdateComponent(defaults, dialogRef, apiSector, apiFabricator, apiModel, apiEquipment, snackBar, fb) {
        var _this = this;
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.apiSector = apiSector;
        this.apiFabricator = apiFabricator;
        this.apiModel = apiModel;
        this.apiEquipment = apiEquipment;
        this.snackBar = snackBar;
        this.fb = fb;
        this.mode = 'create';
        // load the sector
        this.apiSector.getAllUsingGET3().
            subscribe(function (sec) {
            _this.sectors = sec;
        });
        // O ID DA COMPANHIA É FIXO PQ AINDA NAO TEM LOGIN
        this.apiFabricator.getFabricatorWithModelUsingGET(1).
            subscribe(function (fab) {
            _this.fabricators = fab;
        });
        // instance the form group for mode Update and Create
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idSector: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idFabricator: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            idModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            // O ID É FIXO PORQUE AINDA NÃO TEM LOGIN
            idCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1),
        });
    }
    EquipmentCreateUpdateComponent.prototype.ngOnInit = function () {
        if (this.defaults) { // <-- do you have data from the main screen?
            this.mode = 'update';
            var ids = this.defaults.parts.map(function (obj) { return obj.id; });
            // carrega os modelos antes de atribuir valores
            this.loadModels(this.defaults.model.fabricator.id);
            // Used in the Update Mode to fill the fields
            this.form = this.fb.group({
                id: [this.defaults.id || null],
                name: [this.defaults.name],
                idSector: [this.defaults.sector.id],
                idFabricator: [this.defaults.model.fabricator.id],
                idModel: [this.defaults.model.id],
                idCompany: [this.defaults.idCompany],
                idsPart: [ids],
            });
        }
        else { // <-- don't have data :( = Mode Create
            this.defaults = {}; // takes blank :)
        }
    };
    EquipmentCreateUpdateComponent.prototype.createOrUpdate = function () {
        if (this.mode === 'create') {
            this.createEquipment();
        }
        else if (this.mode === 'update') {
            this.updateEquipment();
        }
    };
    EquipmentCreateUpdateComponent.prototype.removeSpaces = function () {
        var name = this.form.get('name').value;
        this.form.get('name').setValue(name.trim().replace(/\s{2,}/g, ' '));
    };
    EquipmentCreateUpdateComponent.prototype.save = function () {
        var _this = this;
        this.removeSpaces();
        // verifica se existe um equipamento com as mesmas configurações
        this.verifyName().then(function (_success) {
            if (_success.length) {
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
    EquipmentCreateUpdateComponent.prototype.createEquipment = function () {
        // send the color as object instead of value
        var equipment = this.form.value;
        this.dialogRef.close(equipment);
    };
    EquipmentCreateUpdateComponent.prototype.updateEquipment = function () {
        // send the color as object instead of value
        var equipment = this.form.value;
        equipment.id = this.defaults.id;
        this.dialogRef.close(equipment);
    };
    EquipmentCreateUpdateComponent.prototype.isCreateMode = function () {
        return this.mode === 'create';
    };
    EquipmentCreateUpdateComponent.prototype.isUpdateMode = function () {
        return this.mode === 'update';
    };
    EquipmentCreateUpdateComponent.prototype.loadModels = function (idFabricator, change) {
        var _this = this;
        this.apiModel.getByFabricatorUsingGET(idFabricator).subscribe(function (models) {
            _this.models = models;
            if (change) {
                _this.form.get('idModel').reset();
            }
        });
    };
    EquipmentCreateUpdateComponent.prototype.verifyName = function () {
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
            idModel: this.form.get('idModel').value,
            idSector: this.form.get('idSector').value
        };
        var promise = this.apiEquipment.getByNameUsingPOST(data).
            toPromise();
        return promise;
    };
    EquipmentCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-equipment-create-update',
            template: __webpack_require__(/*! ./equipment-create-update.component.html */ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.html"),
            styles: [__webpack_require__(/*! ./equipment-create-update.component.scss */ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            app_module_companies__WEBPACK_IMPORTED_MODULE_4__["SectorControllerService"],
            app_module_fabricators__WEBPACK_IMPORTED_MODULE_5__["FabricatorControllerService"],
            app_module_models__WEBPACK_IMPORTED_MODULE_6__["ModelControllerService"],
            app_module_equipments__WEBPACK_IMPORTED_MODULE_3__["EquipmentControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EquipmentCreateUpdateComponent);
    return EquipmentCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipment-create-update/equipment-create-update.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: EquipmentCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentCreateUpdateModule", function() { return EquipmentCreateUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _equipment_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipment-create-update.component */ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_module_companies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var app_module_fabricators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/module/fabricators */ "./src/app/module/fabricators/index.ts");
/* harmony import */ var app_module_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/module/models */ "./src/app/module/models/index.ts");
/* harmony import */ var app_module_equipments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/module/equipments */ "./src/app/module/equipments/index.ts");
/* harmony import */ var app_core_common_list_list_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var EquipmentCreateUpdateModule = /** @class */ (function () {
    function EquipmentCreateUpdateModule() {
    }
    EquipmentCreateUpdateModule = __decorate([
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
                app_core_common_list_list_module__WEBPACK_IMPORTED_MODULE_13__["ListModule"]
            ],
            declarations: [_equipment_create_update_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentCreateUpdateComponent"]],
            entryComponents: [_equipment_create_update_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentCreateUpdateComponent"]],
            exports: [_equipment_create_update_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentCreateUpdateComponent"]],
            providers: [
                { provide: app_module_companies__WEBPACK_IMPORTED_MODULE_9__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.companies },
                { provide: app_module_fabricators__WEBPACK_IMPORTED_MODULE_10__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.fabricators },
                { provide: app_module_models__WEBPACK_IMPORTED_MODULE_11__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.models },
                { provide: app_module_equipments__WEBPACK_IMPORTED_MODULE_12__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.equipments },
                app_module_companies__WEBPACK_IMPORTED_MODULE_9__["SectorControllerService"],
                app_module_fabricators__WEBPACK_IMPORTED_MODULE_10__["FabricatorControllerService"],
                app_module_models__WEBPACK_IMPORTED_MODULE_11__["ModelControllerService"],
                app_module_equipments__WEBPACK_IMPORTED_MODULE_12__["EquipmentControllerService"]
            ]
        })
    ], EquipmentCreateUpdateModule);
    return EquipmentCreateUpdateModule;
}());



/***/ }),

/***/ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"close\">\n        <!-- <span><img src='assets/icons/x.png' /></span> -->\n        <button type=\"button\" class=\"mat-icon-button\" mat-dialog-close>\n            <span class=\"mat-button-wrapper\">\n                <img src='assets/icons/x.png' />\n            </span>\n        </button>\n    </div>\n    <div class=\"title\">\n        <div class=\"title-text\">\n            <h1>Adicionar Peça(s)</h1>\n        </div>\n    </div>\n    <div class=\"content\">\n        <div class=\"search\">\n            <mat-card>\n                <div id=\"input-filter\">\n                    <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\"\n                        fxLayout=\"row\"></fury-list>\n                </div>\n            </mat-card>\n        </div>\n        <div class=\"item-selected\">\n            <mat-card>\n                <div class=\"table\">\n\n                    <table mat-table [dataSource]=\"dataSource\" matSort fxFlex>\n\n                        <!-- checked Column -->\n                        <ng-container matColumnDef=\"checked\">\n                            <th mat-header-cell *matHeaderCellDef> Check </th>\n                            <td mat-cell *matCellDef=\"let element\">\n                                <mat-checkbox [checked]=\"element.checked\" (change)=\"changeChecked(element)\"></mat-checkbox>\n                            </td>\n                        </ng-container>\n\n                        <!-- id Column -->\n                        <ng-container matColumnDef=\"id\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Id </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                        </ng-container>\n\n                        <!-- name Column -->\n                        <ng-container matColumnDef=\"name\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Nome </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                        </ng-container>\n\n                        <!-- charging Column -->\n                        <ng-container matColumnDef=\"charging\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Alimentação </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{ element.charging ? (element.charging + ' V'):\n                                'Sem Alimentação'\n                                }} </td>\n                        </ng-container>\n\n                        <!-- exclusive Column -->\n                        <ng-container matColumnDef=\"exclusive\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Exclusivo? </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{ element.exclusive ? 'Sim': 'Não'}} </td>\n                        </ng-container>\n\n                        <tr mat-header-row *matHeaderRowDef=\"visibleColumns; sticky: true\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: visibleColumns;\"></tr>\n                    </table>\n\n                </div>\n            </mat-card>\n        </div>\n    </div>\n    <div class=\"footer-part\">\n        <button mat-raised-button class=\"btn-rounded btn-save\" (click)=\"save()\" color=\"primary\">SALVAR</button>\n        <!-- [disabled]=\"!hasItem()\"  -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-detail .content .search #input-filter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\nbody {\n  background-color: white;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  margin: 0; }\n\nh1 {\n  font-size: 150%;\n  color: #1A273A;\n  text-align: center; }\n\nh2 {\n  font-size: 20px;\n  color: #1A273A;\n  text-align: center;\n  font-weight: 500; }\n\nhtml {\n  height: 100%; }\n\n.dialog-detail .card {\n  height: 100%;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 16;\n  display: grid;\n  grid-template-rows: repeat(16, 1fr); }\n\n.dialog-detail .title {\n  /*  background-color:chartreuse;*/\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr); }\n\n.dialog-detail .title-text {\n  /*  background-color:violet;*/\n  grid-row-start: 2;\n  grid-row-end: 3; }\n\n.dialog-detail .content {\n  /*  background-color:crimson;*/\n  grid-row-start: 3;\n  grid-row-end: 16;\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n  padding-right: 30px;\n  overflow: auto; }\n\n.dialog-detail .content .search {\n    margin-top: 5px;\n    margin-bottom: 24px; }\n\n.dialog-detail .content .search #input-filter fury-list {\n      flex: 1 1 auto; }\n\n.dialog-detail .content .search #input-filter fury-list .fury-list-table {\n        flex: 1 1 auto; }\n\n.dialog-detail .content .search #input-filter fury-list .fury-list-table .fury-list-name {\n          display: none; }\n\n.dialog-detail .content .search #input-filter fury-list .fury-list-table .fury-list-header {\n          border-bottom: unset !important;\n          background: unset !important; }\n\n.dialog-detail .content .search #input-filter fury-list .fury-list-table .fury-list-header div {\n            align-items: center !important;\n            justify-content: center !important; }\n\n.dialog-detail .content .item-selected {\n    flex: 1 1 auto;\n    display: flex; }\n\n.dialog-detail .content .item-selected .mat-card {\n      flex: 1 1 auto;\n      margin-bottom: 20px; }\n\n.dialog-detail .content .item-selected .mat-card .table {\n        overflow: auto;\n        height: 100%; }\n\n.dialog-detail .content .item-selected .mat-card .element-detail {\n        padding: 5px;\n        display: inline-flex; }\n\n.dialog-detail .content .item-selected .mat-card .element-detail label {\n          font-weight: 500;\n          margin-right: 5px; }\n\n.dialog-detail .content .item-selected .mat-card .element-detail span {\n          font-weight: 300;\n          margin-right: 5px; }\n\n.dialog-detail .content .item-selected .mat-card .picture {\n        width: 54px;\n        height: 54px;\n        background-color: #E0E0E0;\n        border: 2px solid #C0C0C0;\n        background-repeat: no-repeat;\n        background-size: cover;\n        padding-right: 5px;\n        padding-bottom: 5px; }\n\n.dialog-detail .content .item-selected .mat-card .picture img {\n          width: 50px;\n          height: 50px; }\n\n.dialog-detail .content .item-selected .mat-card .fields {\n        text-align: left;\n        width: 100%; }\n\n.dialog-detail .footer-part {\n  grid-row-start: 16;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 30px;\n  margin-bottom: 30px; }\n\n.dialog-detail .footer-part .btn-save {\n    flex: .2 1 0%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n    font-size: 100%;\n    font-weight: lighter; }\n\n.dialog-detail .close {\n  grid-column-start: 1;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  z-index: 1;\n  align-items: flex-start;\n  justify-content: flex-end;\n  display: flex; }\n\n.dialog-detail .row {\n  display: flex;\n  flex-wrap: wrap; }\n\n.dialog-detail .mat-dialog-container {\n  padding: unset; }\n\n@media screen and (max-width: 1000px) {\n  .dialog-detail {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9lcXVpcG1lbnRzL2VxdWlwbWVudEFkZFBhcnRDb21wb25lbnQvZXF1aXBtZW50LWFkZC1wYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBYTtFQUNiLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLHdCQUF1QjtFQUN2QixrQ0FBaUM7RUFDakMsYUFBWTtFQUNaLFVBQVMsRUFDWjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFFUSxhQUFZO0VBQ1oscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixvQ0FBbUMsRUFDdEM7O0FBVEw7RUFZUSxrQ0FBa0M7RUFDbEMscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsbUNBQWtDLEVBQ3JDOztBQW5CTDtFQXNCUSw4QkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQXpCTDtFQTRCUSwrQkFBK0I7RUFDL0Isa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZUFBYyxFQW1HakI7O0FBdElMO0lBc0NZLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBMkJ0Qjs7QUFsRVQ7TUE2Q29CLGVBQWMsRUFtQmpCOztBQWhFakI7UUFnRHdCLGVBQWMsRUFlakI7O0FBL0RyQjtVQW1ENEIsY0FBYSxFQUNoQjs7QUFwRHpCO1VBdUQ0QixnQ0FBK0I7VUFDL0IsNkJBQTRCLEVBTS9COztBQTlEekI7WUEyRGdDLCtCQUE4QjtZQUM5QixtQ0FBa0MsRUFDckM7O0FBN0Q3QjtJQXFFWSxlQUFjO0lBQ2QsY0FBYSxFQStEaEI7O0FBcklUO01BeUVnQixlQUFjO01BQ2Qsb0JBQW1CLEVBMER0Qjs7QUFwSWI7UUE0RW9CLGVBQWM7UUFDZCxhQUFZLEVBQ2Y7O0FBOUVqQjtRQTBGb0IsYUFBWTtRQUNaLHFCQUFvQixFQVd2Qjs7QUF0R2pCO1VBOEZ3QixpQkFBZ0I7VUFDaEIsa0JBQWlCLEVBQ3BCOztBQWhHckI7VUFtR3dCLGlCQUFnQjtVQUNoQixrQkFBaUIsRUFDcEI7O0FBckdyQjtRQWdIb0IsWUFBVztRQUNYLGFBQVk7UUFDWiwwQkFBeUI7UUFDekIsMEJBQXlCO1FBQ3pCLDZCQUE0QjtRQUM1Qix1QkFBc0I7UUFFdEIsbUJBQWtCO1FBQ2xCLG9CQUFtQixFQU10Qjs7QUE5SGpCO1VBMkh3QixZQUFXO1VBQ1gsYUFBWSxFQUNmOztBQTdIckI7UUFpSW9CLGlCQUFnQjtRQUNoQixZQUFXLEVBQ2Q7O0FBbklqQjtFQXlJUSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQU90Qjs7QUFySkw7SUFnSlksY0FBYTtJQUNiLHlDQUF3QztJQUN4QyxnQkFBZTtJQUNmLHFCQUFvQixFQUN2Qjs7QUFwSlQ7RUF3SlEscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixXQUFVO0VBQ1Ysd0JBQXVCO0VBQ3ZCLDBCQUF5QjtFQUN6QixjQUFhLEVBQ2hCOztBQWhLTDtFQXNMUSxjQUFhO0VBQ2IsZ0JBQWUsRUFDbEI7O0FBeExMO0VBMkxRLGVBQWMsRUFDakI7O0FBR0w7RUFDSTtJQUNJLDRCQUEyQjtJQUMzQix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2VxdWlwbWVudHMvZXF1aXBtZW50QWRkUGFydENvbXBvbmVudC9lcXVpcG1lbnQtYWRkLXBhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2Nzc1wiO1xuJHRoZW1lLWJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcDogJG1hdC1zZ20tcHJpbWFyeSwgJGtleTogNTAwKTtcblxuLy8gY2VudHJhbGl6ZXMgYWxsIGNvbnRhaW5lciBpdGVtc1xuJWZsZXgtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBjb2xvcjogIzFBMjczQTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxQTI3M0E7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRpYWxvZy1kZXRhaWwge1xuICAgIC5jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxNjtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTYsIDFmcik7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgLyogIGJhY2tncm91bmQtY29sb3I6Y2hhcnRyZXVzZTsqL1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIH1cblxuICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgLyogIGJhY2tncm91bmQtY29sb3I6dmlvbGV0OyovXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjpjcmltc29uOyovXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDE2O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICAgICAgI2lucHV0LWZpbHRlciB7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBmdXJ5LWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcblxuICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAubWF0LWNhcmQge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgLnRhYmxle1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAuaXRlbSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4I0MwQzBDMCBzb2xpZDtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gLml0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR0aGVtZS1iYWNrZ3JvdW5kLCAuMDgpO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC5lbGVtZW50LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gLmRlbC1wYXJ0IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuXG4gICAgICAgICAgICAgICAgLy8gICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAucGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMEMwQzA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlci1wYXJ0IHtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE2O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIC5idG4tc2F2ZSB7XG4gICAgICAgICAgICBmbGV4OiAuMiAxIDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNsb3NlIHtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLy8gLmZpZWxkLWxhYmVsIHtcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgY29sb3I6ICMxQTI3M0E7XG4gICAgLy8gICBtYXJnaW46IDVweDtcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLy8gfVxuXG4gICAgLy8gLmZpZWxkLWNvbnRlbnQge1xuICAgIC8vICAgY29sb3I6ICMxQTI3M0E7XG4gICAgLy8gICBtYXJnaW46IDVweDtcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLy8gfVxuXG4gICAgLy8gLmZpZWxkIHtcbiAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICBtYXJnaW46IGF1dG87XG4gICAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC8vIH1cblxuICAgIC5yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogdW5zZXQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZGlhbG9nLWRldGFpbCB7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EquipmentAddPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentAddPartComponent", function() { return EquipmentAddPartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_module_parts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/module/parts */ "./src/app/module/parts/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
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








var EquipmentAddPartComponent = /** @class */ (function () {
    function EquipmentAddPartComponent(defaults, dialogRef, apiPart, snackBar) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.apiPart = apiPart;
        this.snackBar = snackBar;
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.columns = [
            { name: 'Check', property: 'checked', visible: true, isModelProperty: true },
            { name: 'Id', property: 'id', visible: true, isModelProperty: true },
            { name: 'Nome', property: 'name', visible: true, isModelProperty: true },
            { name: 'Alimentação', property: 'charging', visible: true, isModelProperty: true },
            { name: 'Exclusivo', property: 'exclusive', visible: true, isModelProperty: true },
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        var idsParts = this.defaults.parts.map(function (obj) { return obj.id; });
        var idsActivities = this.defaults.activities.map(function (obj) { return obj.id; });
        // // instance the form group for mode Update and Create
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.name),
            idSector: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.sector.id),
            idFabricator: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.model.fabricator.id),
            idModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.model.id),
            idCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.idCompany),
            idsParts: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](idsParts),
            idsActivities: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](idsActivities),
        });
    }
    Object.defineProperty(EquipmentAddPartComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    EquipmentAddPartComponent.prototype.loadData = function () {
        var _this = this;
        this.apiPart.getAllUsingGET()
            .subscribe(function (parts) {
            _this.parts = parts;
            var idsParts = _this.defaults.parts.map(function (obj) { return obj.id; });
            // Adiciona o checked para os ids existentes
            for (var i = 0; i < _this.parts.length; i++) {
                if (idsParts.includes(_this.parts[i].id)) {
                    _this.parts[i].checked = true;
                }
            }
            _this.dataSource.data = _this.parts;
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                _this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
            }
        });
    };
    EquipmentAddPartComponent.prototype.ngOnInit = function () {
        // this.filteredOptions = this.optionControl.valueChanges.pipe(
        //   startWith(''),
        //   map(value => this._filter(value))
        // );
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.loadData();
    };
    EquipmentAddPartComponent.prototype.save = function () {
        var parts = this.dataSource.data;
        // coleta os id que estão marcados
        var ids = [];
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].checked === true) {
                ids.push(parts[i].id);
            }
        }
        // adiciona o valor ao controle
        this.form.get('idsParts').setValue(ids);
        // envia o objeto para atualização
        var equipment = this.form.value;
        // Que a força esteja com você!
        this.dialogRef.close(equipment);
    };
    EquipmentAddPartComponent.prototype.urlImg = function (img) {
        return img ? environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].origin.fileServer + img : '/assets/icons/baseline_add_a_photo_black_48dp.png';
    };
    EquipmentAddPartComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    EquipmentAddPartComponent.prototype.changeChecked = function (row) {
        row.checked = row.checked ? false : true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EquipmentAddPartComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EquipmentAddPartComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EquipmentAddPartComponent.prototype, "sort", void 0);
    EquipmentAddPartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-equipment-add-part',
            template: __webpack_require__(/*! ./equipment-add-part.component.html */ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.html"),
            styles: [__webpack_require__(/*! ./equipment-add-part.component.scss */ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            app_module_parts__WEBPACK_IMPORTED_MODULE_3__["PartControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], EquipmentAddPartComponent);
    return EquipmentAddPartComponent;
}());



/***/ }),

/***/ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: EquipmentAddPartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentAddPartModule", function() { return EquipmentAddPartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _equipment_add_part_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipment-add-part.component */ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_module_parts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/module/parts */ "./src/app/module/parts/index.ts");
/* harmony import */ var app_module_equipments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/module/equipments */ "./src/app/module/equipments/index.ts");
/* harmony import */ var app_core_common_list_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EquipmentAddPartModule = /** @class */ (function () {
    function EquipmentAddPartModule() {
    }
    EquipmentAddPartModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                app_core_common_list_list_module__WEBPACK_IMPORTED_MODULE_11__["ListModule"]
            ],
            declarations: [_equipment_add_part_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentAddPartComponent"]],
            entryComponents: [_equipment_add_part_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentAddPartComponent"]],
            exports: [_equipment_add_part_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentAddPartComponent"]],
            providers: [
                // {provide: SEC_PATH, useValue: environment.origin.companies},
                // {provide: FAB_PATH, useValue: environment.origin.fabricators},
                // {provide: MOD_PATH, useValue: environment.origin.models},
                { provide: app_module_equipments__WEBPACK_IMPORTED_MODULE_10__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.equipments },
                { provide: app_module_parts__WEBPACK_IMPORTED_MODULE_9__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].origin.parts },
                // SectorControllerService,
                // FabricatorControllerService,
                app_module_parts__WEBPACK_IMPORTED_MODULE_9__["PartControllerService"],
                app_module_equipments__WEBPACK_IMPORTED_MODULE_10__["EquipmentControllerService"]
            ]
        })
    ], EquipmentAddPartModule);
    return EquipmentAddPartModule;
}());



/***/ }),

/***/ "./src/app/containers/equipments/equipments-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/containers/equipments/equipments-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: EquipmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsRoutingModule", function() { return EquipmentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipments.component */ "./src/app/containers/equipments/equipments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _equipments_component__WEBPACK_IMPORTED_MODULE_2__["EquipmentsComponent"]
    }
];
var EquipmentsRoutingModule = /** @class */ (function () {
    function EquipmentsRoutingModule() {
    }
    EquipmentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EquipmentsRoutingModule);
    return EquipmentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/equipments/equipments.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/containers/equipments/equipments.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background-equipment\">\n  <div id=\"conteiner\">\n    <div id=\"card\">\n      <div id=\"table-component\">\n        <!-- TABLE FILTER -->\n        <div id=\"tfilter\">\n          <div id=\"title\">\n            <span>Equipamentos</span>\n          </div>\n          <div id=\"input-filter\">\n            <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\"\n              fxLayout=\"row\"></fury-list>\n          </div>\n          <div id=\"add\">\n            <button mat-mini-fab color=\"primary\" matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\"\n              id=\"create\">\n              <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n            </button>\n          </div>\n        </div>\n        <!-- TABLE HEADER -->\n        <!-- The header is separate so you do not lose the filters or the sorting and keep the layout-->\n        <div id=\"tmaster\">\n          <div id=\"thead\" matSort>\n            <div class=\"table-header\">\n              <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\"\n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                {{column.name | uppercase}}\n              </div>\n            </div>\n          </div>\n          <!-- TABLE BODY -->\n          <div id=\"tbody\">\n            <!-- Note: Mat-table does not compile without mat-cell -->\n            <mat-table #table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\n              <!-- fullName Column -->\n              <ng-container *ngFor=\"let column of columns;\">\n                <ng-container *ngIf=\"column.isModelProperty\" [matColumnDef]=\"column.property\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.name }}</mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                    <!-- <span class=\"fury-mobile-label\">{{ column.name }}</span> -->\n                    {{ extractValue(row,column.cellContent,column.property) }}\n                  </mat-cell>\n                </ng-container>\n              </ng-container>\n\n              <ng-container matColumnDef=\"expandedDetail\">\n                <mat-cell *matCellDef=\"let row; let i=dataIndex\" [attr.colspan]=\"visibleColumns.length\">\n                  <!-- START PART -->\n                  <div class=\"row-items-buttons\" *ngIf=\"selected[i] === 1\">\n                    <div *ngFor=\"let item of row.parts\" class=\"item\">\n                      <div class=\"image\">\n                        <div class=\"element-detail\">\n                          <div class=\"picture\">\n                            <img [src]=\"urlImg(item.picture)\" *ngIf=\"urlImg\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"fields\">\n                        <div class=\"element-detail\">\n                          <label>Id:</label><span>{{ item.id }},</span>\n                          <label>Nome:</label><span>{{ item.name }},</span>\n                          <label>modelo:</label><span>{{ item.nameModel }},</span>\n                          <label>fabricante:</label><span>{{ item.nameFabricator }},</span>\n                          <label>Alimentação:</label><span>{{ item.charging ? (item.charging + ' V'): 'Sem Alimentação'\n                            }},</span>\n                          <label>Exclusivo:</label><span>{{ item.exclusive ? 'Sim': 'Não' }}</span>\n                        </div>\n                      </div>\n                      <!-- <div class=\"del-part\">\n                        <button matTooltip=\"Deletar Peça\" [matTooltipPosition]=\"'above'\" (click)=\"deletePart(item, row)\"\n                          class=\"btn-icon no-shadow\">\n                          <mat-icon aria-label=\"Deletar\">close</mat-icon>\n                        </button>\n                      </div> -->\n                    </div>\n\n                    <div class=\"add-part\">\n                      <button matTooltip=\"Adicionar Peça(s)\" [matTooltipPosition]=\"'above'\" (click)=\"addPart(row)\"\n                        mat-raised-button color=\"primary\" class=\"btn-rounded\">\n                        <mat-icon aria-label=\"Editar\">library_add</mat-icon>\n                        Adicionar Peça\n                      </button>\n                    </div>\n                  </div>\n                  <!-- end part -->\n                  <!-- START ACTIVITY -->\n                  <div class=\"row-items-buttons\" *ngIf=\"selected[i] === 2\">\n                    <div *ngFor=\"let item of row.activities\" class=\"item\">\n                      <div class=\"image\">\n                        <div class=\"element-detail hidden\">\n                          <div class=\"picture\">\n                            <img [src]=\"urlImg(item.picture)\" *ngIf=\"urlImg\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"fields\">\n                        <div class=\"element-detail \">\n                          <label>Id:</label><span>{{ item.id }},</span>\n                          <label>Descrição:</label><span>{{ item.description }},</span>\n                          <!-- <label>Periodicidade:</label><span>{{ item.periodicity.name }},</span> -->\n                          <label>Tipo de OS:</label><span>{{ item.nameServiceOrderType }},</span>\n                          <label>Equipe:</label><span>{{ item.nameTeam }},</span>\n                          <label>Observação:</label><span>{{ item.observation }}</span>\n                        </div>\n                      </div>\n                      <!-- <div class=\"del-part\">\n                        <button matTooltip=\"Deletar Peça\" [matTooltipPosition]=\"'above'\" (click)=\"deleteActivity(item, row)\"\n                          class=\"btn-icon no-shadow\">\n                          <mat-icon aria-label=\"Deletar\">close</mat-icon>\n                        </button>\n                      </div> -->\n                    </div>\n                    <div class=\"add-part\">\n                      <button matTooltip=\"Adicionar Atividade(s)\" [matTooltipPosition]=\"'above'\" (click)=\"addActivity(row)\"\n                        mat-raised-button color=\"primary\" class=\"btn-rounded\">\n                        <mat-icon aria-label=\"Editar\">playlist_add</mat-icon>\n                        Adicionar Ações\n                      </button>\n                    </div>\n                  </div>\n                  <!-- end activity -->\n                </mat-cell>\n              </ng-container>\n\n              <!-- Listas de Equipamentos-->\n              <ng-container matColumnDef=\"lists\">\n                <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"> Listas </mat-header-cell>\n                <mat-cell *matCellDef=\"let row; let i=dataIndex\" fxLayoutAlign=\"center\">\n                  <div class=\"idList\">\n                    <mat-form-field>\n                      <mat-select id=\"idList\" [(value)]=\"selected[i]\" (selectionChange)=\"onChange()\">\n                        <!-- (openedChange)=\"expandedElement = null\" -->\n                        <mat-option *ngFor=\"let list of lists\" [value]=\"list.id\">\n                          {{list.name}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </mat-cell>\n              </ng-container>\n\n              <!-- actions Column -->\n              <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"> AÇÕES </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">\n                  <button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Editar\">edit</mat-icon>\n                  </button>\n                  <button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                    <mat-icon aria-label=\"Deletar\">delete</mat-icon>\n                  </button>\n                </mat-cell>\n              </ng-container>\n\n              <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: visibleColumns;  let i=dataIndex\" matRipple class=\"element-row\"\n                [class.expanded]=\"expandedElement == row\" (click)=\"toggleRow(i,row)\">\n              </mat-row>\n              <mat-row *matRowDef=\"let row; columns: ['expandedDetail'];\" [@detailExpand]=\"row == expandedElement ? 'expanded' : 'collapsed'\"\n                style=\"overflow: hidden\">\n              </mat-row>\n\n            </mat-table>\n          </div>\n        </div>\n        <!-- TABLE FOOTER -->\n        <div id=\"tfooter\">\n          <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/containers/equipments/equipments.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/containers/equipments/equipments.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-equipment, #background-equipment #conteiner #card #table-component #tfilter, #background-equipment #conteiner #card #table-component #tfilter #input-filter, #background-equipment #conteiner #card #table-component #tfilter #add, #background-equipment #conteiner #card #table-component #tmaster #thead, #background-equipment #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .id, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .name, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .name {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name button, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name button {\n    margin: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .sector, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .sector {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-sector, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-sector {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-sector button, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-sector button {\n    margin: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .fabricator, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .fabricator {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-fabricator, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-fabricator {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-fabricator button, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-fabricator button {\n    margin: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .model, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .model {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-model, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-model {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-model button, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-model button {\n    margin: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .lists, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .lists {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-lists, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-lists {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-lists button, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-lists button {\n    margin: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 14.28571429%;\n  min-width: 14.28571429%;\n  width: 14.28571429%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n#background-equipment {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-equipment #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-equipment #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-equipment #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-equipment #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n          color: #3f4ade;\n          z-index: 2; }\n\n#background-equipment #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 17%;\n            border-right: 1px #707070 solid; }\n\n#background-equipment #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-equipment #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 76.5%; }\n\n#background-equipment #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-equipment #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-equipment #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-equipment #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-equipment #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-equipment #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-equipment #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-equipment #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-equipment #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #3f4ade;\n              display: inline-flex;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* TABLE EXPANDED */\n              /* BODY */ }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(63, 74, 222, 0.08); }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #3f4ade !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                flex-direction: column;\n                align-items: flex-start !important;\n                font-size: 14px;\n                background-color: #EEEFF2;\n                padding-right: 10px !important;\n                padding-left: 10px !important; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .row-items-buttons {\n                  width: 100%; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .item {\n                  display: inline-flex;\n                  align-items: center;\n                  width: 100%;\n                  border-bottom: 1px #C0C0C0 solid; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .item:hover {\n                  background-color: rgba(63, 74, 222, 0.08); }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .image .hidden {\n                  visibility: hidden; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 5px;\n                  display: inline-flex; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500;\n                    margin-right: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail span {\n                    font-weight: 300;\n                    margin-right: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .add-part {\n                  width: 100%;\n                  text-align: end;\n                  padding-bottom: 10px;\n                  padding-top: 10px;\n                  padding-right: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .add-part:hover {\n                    background-color: rgba(63, 74, 222, 0.08); }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .del-part {\n                  padding-right: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .del-part button {\n                    background-color: unset;\n                    width: unset; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .picture {\n                width: 54px;\n                height: 54px;\n                background-color: #E0E0E0;\n                border: 2px solid #C0C0C0;\n                background-repeat: no-repeat;\n                background-size: cover;\n                padding-right: 5px;\n                padding-bottom: 5px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .picture img {\n                  width: 50px;\n                  height: 50px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .fields {\n                text-align: left;\n                width: 100%; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .idList {\n                width: 100px; }\n\n#background-equipment #conteiner #card #table-component #tmaster #tbody mat-table .idList .mat-form-field {\n                  width: 100px; }\n\n#background-equipment #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-equipment #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #3f4ade;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 140px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title,\n  #tfilter #input-filter,\n  #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-name {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-sector {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-fabricator {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-model {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-lists {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9lcXVpcG1lbnRzL2VxdWlwbWVudHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tYXJjdXMuanVuaW9yL0RvY3VtZW50b3MvVHJhbnNpcmUvR2l0L3Jjci9zcmMvc3R5bGVzL19jdXN0b21fY29sb3Jfc2NoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJBO0VBQ0ksY0FBYTtFQUNiLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0Qjs7QUFPTztFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFPckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBZlQ7RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBT3JCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWZUO0VBbkJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBeUJuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQWdDbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU9yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFmVDtFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFPckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBZlQ7RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBT3JCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWZUO0VBbkJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBeUJuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQWdDbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU9yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFmVDtFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFPckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBTWpCOztFQUVJLGFBQVk7RUFDWixZQUFXO0VBQ1gsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLHVCQUFzQjtFQUN0Qix1QkFBc0I7RUFFdEIsZ0JBQWUsRUErUWxCOztBQXBSRDtJQVFRLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsa0JBQWlCO0lBQ2pCLHlCQUF3QjtJQUN4QixxQkFBb0I7SUFDcEIsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxXQUFVLEVBb1FiOztBQW5STDtNQWtCWSxlQUFjO01BQ2QsY0FBYTtNQUNiLGdCQUFlLEVBOFBsQjs7QUFsUlQ7UUF3QmdCLGVBQWM7UUFDZCxjQUFhO1FBQ2IsdUJBQXNCLEVBdVB6Qjs7QUFqUmI7VUE4Qm9CLGNBQWE7VUFDYixpQkFBZ0I7VUFDaEIsNENBQWtDO1VBQ2xDLGVDOURIO1VEK0RHLFdBQVUsRUFvRGI7O0FBdEZqQjtZQXFDd0IsbUJBQWtCO1lBQ2xCLGdCQUFlO1lBQ2Ysa0JBQWlCO1lBQ2pCLGNBQWE7WUFDYixlQUFjO1lBQ2QsZUFBYztZQUNkLGdDQUErQixFQUtsQzs7QUFoRHJCO2NBOEM0QixlQUFjLEVBQ2pCOztBQS9DekI7WUFvRHdCLGlCQUFnQixFQXVCbkI7O0FBM0VyQjtjQXVENEIsZUFBYyxFQW1CakI7O0FBMUV6QjtnQkEwRGdDLGVBQWMsRUFlakI7O0FBekU3QjtrQkE2RG9DLGNBQWEsRUFDaEI7O0FBOURqQztrQkFpRW9DLGdDQUErQjtrQkFDL0IsNkJBQTRCLEVBTS9COztBQXhFakM7b0JBcUV3QywrQkFBOEI7b0JBQzlCLG1DQUFrQyxFQUNyQzs7QUF2RXJDO1lBOEV3QixjQUFhO1lBQ2IsZ0JBQWUsRUFNbEI7O0FBckZyQjtjQW1GNEIsNENBQWtDLEVBQ3JDOztBQXBGekI7VUF5Rm9CLGNBQWE7VUFDYixnQkFBZTtVQUNmLHVCQUFzQixFQXlLekI7O0FBcFFqQjtZQStGd0IsbUJBQWtCO1lBQ2xCLGlCQUFnQixFQWVuQjs7QUEvR3JCO2NBbUc0QixjQUFhO2NBQ2IsbUNBQWtDLEVBQ3JDOztBQXJHekI7Y0F3RzRCLFlBQVc7Y0FDWCxlQ3RJWDtjRHVJVyxxQkFBb0I7Y0FDcEIsa0JBQWlCO2NBQ2pCLFlBQVksRUFFZjs7QUE5R3pCO1lBa0h3QixnQkFBZTtZQUNmLHdCQUF1QjtZQUN2QixtQkFBa0I7WUFDbEIsY0FBYTtZQUNiLDRDQUFrQztZQUNsQyxXQUFVO1lBQ1YsZUFBYztZQUNkLFVBQVMsRUEwSVo7O0FBblFyQjtjQTRINEIsWUFBVztjQTBCWCxvQkFBb0I7Y0FtR3BCLFVBQVUsRUFTYjs7QUFsUXpCO2dCQStIZ0MsY0FBYSxFQUNoQjs7QUFoSTdCO2dCQW1JZ0MsK0JBQThCLEVBQ2pDOztBQXBJN0I7Z0JBdUlnQyxnQ0FBK0IsRUFDbEM7O0FBeEk3QjtnQkEySWdDLDBDQ3hLZixFRHlLWTs7QUE1STdCO2dCQStJZ0MsMEJBQW1DO2dCQUNuQywrQkFBOEI7Z0JBQzlCLCtCQUE4QjtnQkFDOUIsZ0NBQStCO2dCQUMvQixnQkFBZSxFQUNsQjs7QUFwSjdCO2dCQTRKZ0MsdUJBQXNCO2dCQUN0QixtQ0FBa0M7Z0JBQ2xDLGdCQUFlO2dCQUNmLDBCQUF5QjtnQkFDekIsK0JBQThCO2dCQUM5Qiw4QkFBNkIsRUE0RGhDOztBQTdON0I7a0JBb0tvQyxZQUFXLEVBQ2Q7O0FBcktqQztrQkF3S29DLHFCQUFvQjtrQkFDcEIsb0JBQW1CO2tCQUNuQixZQUFXO2tCQUNYLGlDQUErQixFQUNsQzs7QUE1S2pDO2tCQStLb0MsMENDNU1uQixFRDZNZ0I7O0FBaExqQztrQkFvTHdDLG1CQUFrQixFQUNyQjs7QUFyTHJDO2tCQXlMb0MsYUFBWTtrQkFDWixxQkFBb0IsRUFZdkI7O0FBdE1qQztvQkE2THdDLGlCQUFnQjtvQkFDaEIsa0JBQWlCLEVBQ3BCOztBQS9MckM7b0JBa013QyxpQkFBZ0I7b0JBQ2hCLGtCQUFpQixFQUNwQjs7QUFwTXJDO2tCQXlNb0MsWUFBVztrQkFDWCxnQkFBZTtrQkFDZixxQkFBb0I7a0JBQ3BCLGtCQUFpQjtrQkFFakIsbUJBQWtCLEVBS3JCOztBQW5OakM7b0JBaU53QywwQ0M5T3ZCLEVEK09vQjs7QUFsTnJDO2tCQXNOb0MsbUJBQWtCLEVBTXJCOztBQTVOakM7b0JBeU53Qyx3QkFBdUI7b0JBQ3ZCLGFBQVksRUFDZjs7QUEzTnJDO2dCQWdPZ0MsWUFBVztnQkFDWCxhQUFZO2dCQUNaLDBCQUF5QjtnQkFDekIsMEJBQXlCO2dCQUN6Qiw2QkFBNEI7Z0JBQzVCLHVCQUFzQjtnQkFFdEIsbUJBQWtCO2dCQUNsQixvQkFBbUIsRUFNdEI7O0FBOU83QjtrQkEyT29DLFlBQVc7a0JBQ1gsYUFBWSxFQUNmOztBQTdPakM7Z0JBaVBnQyxpQkFBZ0I7Z0JBQ2hCLFlBQVcsRUFDZDs7QUFuUDdCO2dCQXNQZ0MsbUJBQWtCLEVBQ3JCOztBQXZQN0I7Z0JBNlBnQyxhQUFZLEVBSWY7O0FBalE3QjtrQkErUG9DLGFBQVksRUFDZjs7QUFoUWpDO1VBd1FvQixtQkFBa0I7VUFDbEIsaUJBQWdCLEVBT25COztBQWhSakI7WUE0UXdCLFlBQVc7WUFDWCxlQzFTUDtZRDJTTyxnQkFBZSxFQUNsQjs7QUFRckI7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSTtJQUNJLDJCQUEwQixFQUM3QixFQUFBOztBQUdMO0VBQ0k7SUFDSSwyQkFBMEIsRUFDN0I7RUFFRDtJQUNJLGFBQVksRUFDZjtFQUVEO0lBQ0kseUJBQXdCLEVBQzNCLEVBQUE7O0FBR0w7RUFDSTs7O0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCO0VBRUQ7SUFTUSwrQkFBOEIsRUFDakM7RUFHTDtJQUNJLHlCQUF3QixFQUMzQjtFQUVEO0lBQ0ksdUJBQXNCLEVBQ3pCO0VBRUQ7SUFyWUEsNEJBd1lrRDtJQXZZbEQsNEJBdVlrRDtJQXRZbEQsd0JBc1lrRCxFQUN6QztFQUpUO0lBcllBLDRCQXdZa0Q7SUF2WWxELDRCQXVZa0Q7SUF0WWxELHdCQXNZa0QsRUFDekM7RUFKVDtJQXJZQSw0QkF3WWtEO0lBdllsRCw0QkF1WWtEO0lBdFlsRCx3QkFzWWtELEVBQ3pDO0VBSlQ7SUFyWUEsNEJBd1lrRDtJQXZZbEQsNEJBdVlrRDtJQXRZbEQsd0JBc1lrRCxFQUN6QztFQUpUO0lBcllBLDRCQXdZa0Q7SUF2WWxELDRCQXVZa0Q7SUF0WWxELHdCQXNZa0QsRUFDekM7RUFKVDtJQXJZQSw0QkF3WWtEO0lBdllsRCw0QkF1WWtEO0lBdFlsRCx3QkFzWWtELEVBQ3pDO0VBSlQ7SUFyWUEsNEJBd1lrRDtJQXZZbEQsNEJBdVlrRDtJQXRZbEQsd0JBc1lrRCxFQUN6QztFQUpUO0lBUVEsa0JBQWlCLEVBQ3BCO0VBR0w7SUFDSSwwQkFBeUIsRUFDNUI7RUFFRDtJQUNJLHlCQUF3QjtJQUN4QiwwQkFBeUIsRUFLNUI7SUFQRDtNQUtRLHlCQUF3QixFQUMzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9lcXVpcG1lbnRzL2VxdWlwbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2Nzc1wiO1xuJHRoZW1lLWJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcDogJG1hdC1zZ20tcHJpbWFyeSwgJGtleTogNTAwKTtcblxuLy8gTGlzdGEgZGUgY2FtcG9zXG4kZmllbGRzOiAoXG4naWQnLFxuJ25hbWUnLFxuJ3NlY3RvcicsXG4nZmFicmljYXRvcicsXG4nbW9kZWwnLFxuJ2xpc3RzJyxcbidhY3Rpb25zJ1xuKTtcblxuXG5cbi8vIFBhZHJvbml6YSBvIHRhbWFuaG8gZG9zIGNhbXBvc1xuJGxlbmd0aDogMTAwL2xlbmd0aCgkZmllbGRzKSoxJTtcblxuXG5AbWl4aW4gY29sdW1uLXdpZHRoKCRwcm9wZXJ0eSkge1xuICAgIG1heC13aWR0aDogJHByb3BlcnR5O1xuICAgIG1pbi13aWR0aDogJHByb3BlcnR5O1xuICAgIHdpZHRoOiAkcHJvcGVydHk7XG59XG5cbi8vIGNlbnRyYWxpemVzIGFsbCBjb250YWluZXIgaXRlbXNcbiVmbGV4LWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy8gQ29uZmlndXJhw6fDtWVzIG7Do28gcGFkcsO1ZXMgcGFyYSBhcyBjb2x1bmFzXG4ldGFibGUtY29sdW1ucyB7XG5cbiAgICBAZWFjaCAkaGVhZGluZyBpbiAkZmllbGRzIHtcblxuICAgICAgICAuI3skaGVhZGluZ30ge1xuICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKCRsZW5ndGgpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7IC8vIHNvcnRpbmcgYXJyb3cgZGlzY291bnRcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgICAgICAgICBAaWYgI3skaGVhZGluZ309PWFjdGlvbnMge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYmFja2dyb3VuZC1lcXVpcG1lbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvL2JhY2tncm91bmQ6IGdyZWVuO1xuXG4gICAgI2NvbnRlaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICBoZWlnaHQ6IDkxJTtcbiAgICAgICAgd2lkdGg6IDkxJTtcblxuICAgICAgICAjY2FyZCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICN0YWJsZS1jb21wb25lbnQge1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzI3M0I1NjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAjdGZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgICAgICAgICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTclOyAvL2JhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4ICM3MDcwNzAgc29saWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI2lucHV0LWZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzYuNSU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1cnktbGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICNhZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOC41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoYmxhY2ssIDAuMjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI3RtYXN0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMiAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgI3RoZWFkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhFQURFUiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAjdGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTAgMSBhdXRvOyAvLyBiYWNrZ3JvdW5kOiBicm93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtYmFja2dyb3VuZCwgLjA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFRBQkxFIEVYUEFOREVEICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1jb2x1bW4tZXhwYW5kZWREZXRhaWwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDBweCAxOHB4IDEwcHggLTE4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVGRjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJvdy1pdGVtcy1idXR0b25ze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4I0MwQzBDMCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWJhY2tncm91bmQsIC4wOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGlkZGVue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQtcGFydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWJhY2tncm91bmQsIC4wOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsLXBhcnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0MwQzBDMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQk9EWSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWRMaXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAjdGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY2FwdGlvbiBmb3JtYXR0aW5nXG4uY2lyY2xlLXNtYWxsIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLnBhZ2luYXRvciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAjdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZnVyeS1maWx0ZXItaW5wdXQge1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwge1xuICAgICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICV1bnNldC13aWR0aCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjdGZpbHRlciB7XG5cbiAgICAgICAgI3RpdGxlLFxuICAgICAgICAjaW5wdXQtZmlsdGVyLFxuICAgICAgICAjYWRkIHtcbiAgICAgICAgICAgIEBleHRlbmQgJXVuc2V0LXdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgI2FkZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjdGhlYWQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgI3Rib2R5IHtcbiAgICAgICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDsgLy8gZml4IGxheW91dCBpbiB0aGUgZmlyZWZveFxuICAgIH1cblxuICAgIG1hdC10YWJsZSB7XG4gICAgICAgIEBlYWNoICRoZWFkaW5nIGluICRmaWVsZHMge1xuICAgICAgICAgICAgLm1hdC1jb2x1bW4tI3skaGVhZGluZ30ge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCh1bnNldCAhaW1wb3J0YW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3cge1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5mdXJ5LWxpc3QtdGFibGUgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLmZ1cnktY29sdW1uLWZpbHRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gJG1hdC1zZ20tcHJpbWFyeTogKFxuLy8gICAgIDUwIDogI2U1ZTdlYixcbi8vICAgICAxMDAgOiAjYmVjNGNjLFxuLy8gICAgIDIwMCA6ICM5MzlkYWIsXG4vLyAgICAgMzAwIDogIzY4NzY4OSxcbi8vICAgICA0MDAgOiAjNDc1ODZmLFxuLy8gICAgIDUwMCA6ICMyNzNiNTYsXG4vLyAgICAgNjAwIDogIzIzMzU0Zixcbi8vICAgICA3MDAgOiAjMWQyZDQ1LFxuLy8gICAgIDgwMCA6ICMxNzI2M2MsXG4vLyAgICAgOTAwIDogIzBlMTkyYixcbi8vICAgICBBMTAwIDogIzY5OWJmZixcbi8vICAgICBBMjAwIDogIzM2NzlmZixcbi8vICAgICBBNDAwIDogIzAzNTdmZixcbi8vICAgICBBNzAwIDogIzAwNGVlOSxcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDUwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDYwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDcwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDgwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIDkwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTQwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE3MDAgOiAjZmZmZmZmLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXByaW1hcnk6IChcbiAgICA1MCA6ICNlOGU5ZmIsXG4gICAgMTAwIDogI2M1YzlmNSxcbiAgICAyMDAgOiAjOWZhNWVmLFxuICAgIDMwMCA6ICM3OTgwZTgsXG4gICAgNDAwIDogIzVjNjVlMyxcbiAgICA1MDAgOiAjM2Y0YWRlLFxuICAgIDYwMCA6ICMzOTQzZGEsXG4gICAgNzAwIDogIzMxM2FkNSxcbiAgICA4MDAgOiAjMjkzMmQxLFxuICAgIDkwMCA6ICMxYjIyYzgsXG4gICAgQTEwMCA6ICNmZGZkZmYsXG4gICAgQTIwMCA6ICNjYWNjZmYsXG4gICAgQTQwMCA6ICM5NzliZmYsXG4gICAgQTcwMCA6ICM3ZTgyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWF0LXNnbS1hY2NlbnQ6IChcbiAgICA1MCA6ICNlN2VjZWEsXG4gICAgMTAwIDogI2MyY2VjYixcbiAgICAyMDAgOiAjOTlhZWE5LFxuICAgIDMwMCA6ICM3MDhlODcsXG4gICAgNDAwIDogIzUyNzU2ZCxcbiAgICA1MDAgOiAjMzM1ZDUzLFxuICAgIDYwMCA6ICMyZTU1NGMsXG4gICAgNzAwIDogIzI3NGI0MixcbiAgICA4MDAgOiAjMjA0MTM5LFxuICAgIDkwMCA6ICMxNDMwMjksXG4gICAgQTEwMCA6ICM3MWZmZGEsXG4gICAgQTIwMCA6ICMzZWZmY2QsXG4gICAgQTQwMCA6ICMwYmZmYmYsXG4gICAgQTcwMCA6ICMwMGYxYjIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4vLyAkbWF0LXNnbS13YXJuOiAoXG4vLyAgICAgNTAgOiAjZjVmN2Y4LFxuLy8gICAgIDEwMCA6ICNlNmVhZWQsXG4vLyAgICAgMjAwIDogI2Q2ZGRlMixcbi8vICAgICAzMDAgOiAjYzZjZmQ2LFxuLy8gICAgIDQwMCA6ICNiOWM0Y2QsXG4vLyAgICAgNTAwIDogI2FkYmFjNCxcbi8vICAgICA2MDAgOiAjYTZiM2JlLFxuLy8gICAgIDcwMCA6ICM5Y2FiYjYsXG4vLyAgICAgODAwIDogIzkzYTNhZixcbi8vICAgICA5MDAgOiAjODM5NGEyLFxuLy8gICAgIEExMDAgOiAjZmZmZmZmLFxuLy8gICAgIEEyMDAgOiAjZmRmZWZmLFxuLy8gICAgIEE0MDAgOiAjYzllN2ZmLFxuLy8gICAgIEE3MDAgOiAjYjBkYmZmLFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgODAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgOTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20td2FybjogKFxuICAgIDUwIDogI2ZlZThlNyxcbiAgICAxMDAgOiAjZmJjNmMzLFxuICAgIDIwMCA6ICNmOWExOWIsXG4gICAgMzAwIDogI2Y3N2I3MixcbiAgICA0MDAgOiAjZjU1ZTU0LFxuICAgIDUwMCA6ICNmMzQyMzYsXG4gICAgNjAwIDogI2YxM2MzMCxcbiAgICA3MDAgOiAjZWYzMzI5LFxuICAgIDgwMCA6ICNlZDJiMjIsXG4gICAgOTAwIDogI2VhMWQxNixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZThlNyxcbiAgICBBNDAwIDogI2ZmYjZiNCxcbiAgICBBNzAwIDogI2ZmOWQ5YixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtZC1jYWxlbmRhcjogKFxuICAgIDUwIDogI2VmZjFmMyxcbiAgICAxMDAgOiAjZDhkY2UxLFxuICAgIDIwMCA6ICNiZWM0Y2QsXG4gICAgMzAwIDogI2E0YWNiOCxcbiAgICA0MDAgOiAjOTE5YmE5LFxuICAgIDUwMCA6ICM3ZDg5OWEsXG4gICAgNjAwIDogIzc1ODE5MixcbiAgICA3MDAgOiAjNmE3Njg4LFxuICAgIDgwMCA6ICM2MDZjN2UsXG4gICAgOTAwIDogIzRkNTk2YyxcbiAgICBBMTAwIDogI2NmZTFmZixcbiAgICBBMjAwIDogIzljYzFmZixcbiAgICBBNDAwIDogIzY5YTFmZixcbiAgICBBNzAwIDogIzUwOTJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/equipments/equipments.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/equipments/equipments.component.ts ***!
  \***************************************************************/
/*! exports provided: EquipmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsComponent", function() { return EquipmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _equipment_create_update_equipment_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipment-create-update/equipment-create-update.component */ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.component.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.component */ "./src/app/core/common/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var app_module_equipments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/module/equipments */ "./src/app/module/equipments/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _equipmentAddPartComponent_equipment_add_part_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./equipmentAddPartComponent/equipment-add-part.component */ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.component.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _equipment_add_activity_component_equipment_add_activity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./equipment-add-activity-component/equipment-add-activity.component */ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EquipmentsComponent = /** @class */ (function () {
    function EquipmentsComponent(dialog, snackBar, apiEquipment) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.apiEquipment = apiEquipment;
        this.subject$ = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.pageSize = 10;
        this.lists = [
            { id: 1, name: 'Peças' },
            { id: 2, name: 'Ações' },
        ];
        // Seleciona Peças por padrão
        this.selected = [];
        // this component is useful for the filter and show colums in table
        this.columns = [
            { name: 'Id', property: 'id', visible: true, isModelProperty: true },
            { name: 'EQUIPAMENTOS', property: 'name', visible: true, isModelProperty: true },
            { name: 'Setor', property: 'sector', cellContent: 'sector.name', visible: true, isModelProperty: true },
            { name: 'Fabricante', property: 'fabricator', cellContent: 'model.fabricator.name', visible: true, isModelProperty: true },
            { name: 'Modelo', property: 'model', cellContent: 'model.name', visible: true, isModelProperty: true },
            { name: 'Listas', property: 'lists', visible: true },
            { name: 'Ações', property: 'actions', visible: true }
        ];
    }
    Object.defineProperty(EquipmentsComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    EquipmentsComponent.prototype.loadData = function () {
        var _this = this;
        this.apiEquipment.getAllUsingGET()
            .subscribe(function (equipments) {
            _this.equipments = equipments;
            // Preenche o valor padrão da coluna lista
            for (var i = 0; i < equipments.length; i++) {
                _this.selected[i] = 1;
            }
            // Dados da tabela
            _this.dataSource.data = equipments;
        }, function (error) {
            // console.log(error);
            if (error.status === 0 || error.status === 404 || error.status === 500) {
                _this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
            }
        });
    };
    EquipmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (equipments) {
            _this.equipments = equipments;
            _this.dataSource.data = equipments;
        });
    };
    EquipmentsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    EquipmentsComponent.prototype.create = function () {
        var _this = this;
        this.dialog.open(_equipment_create_update_equipment_create_update_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentCreateUpdateComponent"], {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (equipment) {
            if (equipment) {
                _this.apiEquipment.createUsingPOST(equipment).
                    subscribe(function (success) {
                    _this.snackBar.open('Item cadastrado com sucesso!', 'OK', {
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
    EquipmentsComponent.prototype.update = function (equipment) {
        var _this = this;
        this.dialog.open(_equipment_create_update_equipment_create_update_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentCreateUpdateComponent"], {
            data: equipment,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (_equipment) {
            if (_equipment) {
                _this.apiEquipment.updateUsingPUT(_equipment).
                    subscribe(function (success) {
                    _this.snackBar.open('Item atualizado com sucesso!', 'OK', {
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
    EquipmentsComponent.prototype.delete = function (equipment) {
        var _this = this;
        this.dialog.open(_core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"], {
            data: { id: equipment.id, displayName: equipment.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe(function (_equipment) {
            if (_equipment && _equipment.id) {
                _this.apiEquipment.deleteUsingDELETE(_equipment.id).
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
    EquipmentsComponent.prototype.addPart = function (part) {
        var _this = this;
        this.dialog.open(_equipmentAddPartComponent_equipment_add_part_component__WEBPACK_IMPORTED_MODULE_9__["EquipmentAddPartComponent"], {
            data: part,
            width: '61%', height: '77%',
            panelClass: 'dialog-detail'
        }).afterClosed().subscribe(function (_part) {
            if (_part) {
                _this.apiEquipment.updateUsingPUT(_part).
                    subscribe(function (success) {
                    _this.snackBar.open('Item atualizado com sucesso!', 'OK', {
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
    EquipmentsComponent.prototype.deletePart = function (obj, _equipment) {
        var _this = this;
        var _parts = _equipment.parts;
        var index = _parts.indexOf(obj);
        // remove o objeto
        _parts.splice(index, 1);
        // Recebe os ids dos objetos
        _equipment.idsPart = _parts.map(function (_obj) { return _obj.id; });
        _equipment.idModel = _equipment.model.id;
        _equipment.idSector = _equipment.sector.id;
        // Que a força esteja com você!
        if (_equipment) {
            this.apiEquipment.updateUsingPUT(_equipment).
                subscribe(function (success) {
                _this.snackBar.open('Item atualizado com sucesso!', 'OK', {
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
    };
    EquipmentsComponent.prototype.addActivity = function (activity) {
        var _this = this;
        this.dialog.open(_equipment_add_activity_component_equipment_add_activity_component__WEBPACK_IMPORTED_MODULE_11__["EquipmentAddActivityComponent"], {
            data: activity,
            width: '61%', height: '77%',
            panelClass: 'dialog-detail'
        }).afterClosed().subscribe(function (_activity) {
            if (_activity) {
                _this.apiEquipment.updateUsingPUT(_activity).
                    subscribe(function (success) {
                    _this.snackBar.open('Item atualizado com sucesso!', 'OK', {
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
    EquipmentsComponent.prototype.deleteActivity = function (obj, _equipment) {
        var _this = this;
        var _activities = _equipment.activities;
        var index = _activities.indexOf(obj);
        // remove o objeto
        _activities.splice(index, 1);
        // Recebe os ids dos objetos
        _equipment.idsPart = _activities.map(function (_obj) { return _obj.id; });
        // _equipment.idModel = _equipment.model.id;
        // _equipment.idSector = _equipment.sector.id;
        // Que a força esteja com você!
        if (_equipment) {
            this.apiEquipment.updateUsingPUT(_equipment).
                subscribe(function (success) {
                _this.snackBar.open('Item atualizado com sucesso!', 'OK', {
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
    };
    EquipmentsComponent.prototype.ngOnDestroy = function () {
    };
    EquipmentsComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    EquipmentsComponent.prototype.extractValue = function (_row, _cell, _property) {
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
    EquipmentsComponent.prototype.toggleRow = function (i, row) {
        var isPart = this.selected[i] === 1;
        var isActivity = this.selected[i] === 2;
        if (isPart) {
            if (this.expandedElement === row) {
                this.expandedElement = null;
            }
            else {
                this.expandedElement = row;
            }
        }
        if (isActivity) {
            if (this.expandedElement === row) {
                this.expandedElement = null;
            }
            else {
                this.expandedElement = row;
            }
        }
    };
    EquipmentsComponent.prototype.urlImg = function (img) {
        return img ? environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].origin.fileServer + img : '/assets/icons/baseline_add_a_photo_black_48dp.png';
    };
    EquipmentsComponent.prototype.onChange = function () {
        this.expandedElement = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EquipmentsComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], EquipmentsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], EquipmentsComponent.prototype, "sort", void 0);
    EquipmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-equipments',
            template: __webpack_require__(/*! ./equipments.component.html */ "./src/app/containers/equipments/equipments.component.html"),
            styles: [__webpack_require__(/*! ./equipments.component.scss */ "./src/app/containers/equipments/equipments.component.scss")],
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
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            app_module_equipments__WEBPACK_IMPORTED_MODULE_7__["EquipmentControllerService"]])
    ], EquipmentsComponent);
    return EquipmentsComponent;
}());



/***/ }),

/***/ "./src/app/containers/equipments/equipments.module.ts":
/*!************************************************************!*\
  !*** ./src/app/containers/equipments/equipments.module.ts ***!
  \************************************************************/
/*! exports provided: EquipmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsModule", function() { return EquipmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/page/page.module */ "./src/app/core/common/page/page.module.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.module */ "./src/app/core/common/dialog-delete/dialog-delete.module.ts");
/* harmony import */ var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./equipments-routing.module */ "./src/app/containers/equipments/equipments-routing.module.ts");
/* harmony import */ var _equipments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./equipments.component */ "./src/app/containers/equipments/equipments.component.ts");
/* harmony import */ var _equipment_create_update_equipment_create_update_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./equipment-create-update/equipment-create-update.module */ "./src/app/containers/equipments/equipment-create-update/equipment-create-update.module.ts");
/* harmony import */ var app_module_equipments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/module/equipments */ "./src/app/module/equipments/index.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _equipmentAddPartComponent_equipment_add_part_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./equipmentAddPartComponent/equipment-add-part.module */ "./src/app/containers/equipments/equipmentAddPartComponent/equipment-add-part.module.ts");
/* harmony import */ var _equipment_add_activity_component_equipment_add_activity_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./equipment-add-activity-component/equipment-add-activity.module */ "./src/app/containers/equipments/equipment-add-activity-component/equipment-add-activity.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var EquipmentsModule = /** @class */ (function () {
    function EquipmentsModule() {
    }
    EquipmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _equipments_routing_module__WEBPACK_IMPORTED_MODULE_8__["EquipmentsRoutingModule"],
                _equipment_create_update_equipment_create_update_module__WEBPACK_IMPORTED_MODULE_10__["EquipmentCreateUpdateModule"],
                _equipmentAddPartComponent_equipment_add_part_module__WEBPACK_IMPORTED_MODULE_13__["EquipmentAddPartModule"],
                _equipment_add_activity_component_equipment_add_activity_module__WEBPACK_IMPORTED_MODULE_14__["EquipmentAddActivityModule"],
                // Core
                _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"],
                _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteModule"]
            ],
            declarations: [_equipments_component__WEBPACK_IMPORTED_MODULE_9__["EquipmentsComponent"]],
            exports: [_equipments_component__WEBPACK_IMPORTED_MODULE_9__["EquipmentsComponent"]],
            providers: [
                { provide: app_module_equipments__WEBPACK_IMPORTED_MODULE_11__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].origin.equipments },
                app_module_equipments__WEBPACK_IMPORTED_MODULE_11__["EquipmentControllerService"]
            ]
        })
    ], EquipmentsModule);
    return EquipmentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-containers-equipments-equipments-module.js.map