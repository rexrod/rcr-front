(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-users-users-module"],{

/***/ "./src/app/containers/users/user-create-update/user-create-update.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/containers/users/user-create-update/user-create-update.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fury-dialog-panel>\n\n    <div class=\"form-content\">\n        <div class=\"form-title\" header-content>\n            <span>Cadastrar Usuários</span>\n        </div>\n        <div class=\"form-fields\">\n            <form [formGroup]=\"form\">\n                <div class=\"row\">\n                    <!-- Primeiro Nome -->\n                    <div class=\"name field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Nome\" pattern=\"^(?!\\s*$).+\" formControlName=\"name\"\n                                id=\"name\" required />\n                        </mat-form-field>\n                    </div>\n                    <!-- Último Nome -->\n                    <!-- <div class=\"lastName field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Último Nome\" pattern=\"^(?!\\s*$).+\" formControlName=\"lastName\"\n                                id=\"lastName\" required />\n                        </mat-form-field>\n                    </div> -->\n                </div>\n                <div class=\"row\">\n                    <!-- Email -->\n                    <div class=\"email field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Email\" pattern=\"^(?!\\s*$).+\" formControlName=\"email\"\n                                id=\"email\" required />\n                        </mat-form-field>\n                    </div>\n                    <!-- <div class=\"email field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Email\" pattern=\"^\\w+(.?\\w+)*@\\w+(\\.?\\w+)*\" formControlName=\"email\"\n                                id=\"email\" required (keyup)=\"loginValue($event.target.value)\" />\n                        </mat-form-field>\n                    </div> -->\n                </div>\n                <div class=\"row\" *ngIf=\"isCreateMode()\">\n                    <!-- Senha -->\n                    <div class=\"password field\">\n                        <mat-form-field>\n                            <input  matInput placeholder=\"Senha\" type=\"password\" pattern=\"^(?!\\s*$).+\" formControlName=\"password\" id=\"password\" required />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <!-- Login -->\n                    <div class=\"registration field\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Matricula\" pattern=\"^(?!\\s*$).+\" formControlName=\"registration\" id=\"registration\" required />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- <div class=\"row\">\n                    <div class=\"idSector field\">\n                        <mat-form-field>\n                            <mat-select placeholder=\"Selecione o Setor\" formControlName=\"idSector\" id=\"idSector\"\n                                required>\n                                <mat-option *ngFor=\"let sector of sectors\" [value]=\"sector.id\">\n                                    {{sector.name}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"field\"></div>\n                </div> -->\n            </form>\n        </div>\n    </div>\n    <div class=\"footer-content\" footer-content>\n        <button *ngIf=\"isCreateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" (click)=\"saveCustom()\"\n            color=\"primary\">SALVAR</button>\n        <button *ngIf=\"isUpdateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" color=\"primary\"\n            (click)=\"saveCustom()\">ATUALIZAR</button>\n    </div>\n\n</fury-dialog-panel>"

/***/ }),

/***/ "./src/app/containers/users/user-create-update/user-create-update.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/containers/users/user-create-update/user-create-update.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content .form-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .dialog-content .form-content .form-title {\n    font-size: 120%;\n    color: #000000;\n    font-weight: bold;\n    text-align: center;\n    height: 20%;\n    align-items: center;\n    display: flex;\n    justify-content: center; }\n  .dialog-content .form-content .form-fields {\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: 80%; }\n  .dialog-content .form-content .form-fields form {\n      height: 100%;\n      width: 100%; }\n  .dialog-content .form-content .form-fields form .hidden-input {\n        display: none; }\n  .dialog-content .form-content .form-fields form .progress {\n        text-align: center; }\n  .dialog-content .form-content .form-fields form .image-component {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n  .dialog-content .form-content .form-fields form .picture-display {\n        width: 176px;\n        height: 150px;\n        border-radius: 2px;\n        background-color: #E0E0E0;\n        background-image: url(/assets/img/backgrounds/bg-picture.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        box-shadow: 0px 0px 2px;\n        margin-top: 40px;\n        margin-bottom: 10px;\n        margin-left: 20px;\n        margin-right: 20px; }\n  .dialog-content .form-content .form-fields form .picture-display:hover .picture-overlay {\n          opacity: 1; }\n  .dialog-content .form-content .form-fields form .picture-display .picture-overlay {\n          height: 100%;\n          width: 100%;\n          opacity: 0;\n          transition: .5s ease;\n          background-color: rgba(255, 255, 255, 0.2);\n          display: flex;\n          align-items: center;\n          justify-content: center; }\n  .dialog-content .form-content .form-fields form .picture-display img {\n          width: 176px;\n          height: 150px; }\n  .dialog-content .form-content .form-fields form .btn-clear {\n        color: #f34236;\n        width: 30px;\n        height: 30px;\n        margin-left: 8px; }\n  .dialog-content .form-content .form-fields form .row {\n        display: flex;\n        padding-left: 10px;\n        padding-right: 10px;\n        flex-wrap: wrap; }\n  .dialog-content .form-content .form-fields form .field {\n        display: flex;\n        justify-content: center;\n        flex: 1 .5;\n        margin-right: 10px;\n        margin-left: 10px; }\n  .dialog-content .form-content .form-fields form .name,\n      .dialog-content .form-content .form-fields form .firstName,\n      .dialog-content .form-content .form-fields form .lastName,\n      .dialog-content .form-content .form-fields form .email,\n      .dialog-content .form-content .form-fields form .login,\n      .dialog-content .form-content .form-fields form .password,\n      .dialog-content .form-content .form-fields form .idSector,\n      .dialog-content .form-content .form-fields form .registration {\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .dialog-content .form-content .form-fields form .name mat-form-field,\n        .dialog-content .form-content .form-fields form .firstName mat-form-field,\n        .dialog-content .form-content .form-fields form .lastName mat-form-field,\n        .dialog-content .form-content .form-fields form .email mat-form-field,\n        .dialog-content .form-content .form-fields form .login mat-form-field,\n        .dialog-content .form-content .form-fields form .password mat-form-field,\n        .dialog-content .form-content .form-fields form .idSector mat-form-field,\n        .dialog-content .form-content .form-fields form .registration mat-form-field {\n          flex: .4 1 auto; }\n  .dialog-content .form-content .form-fields form .email {\n        display: flex;\n        flex: 1 1 auto; }\n  .dialog-footer {\n  display: flex;\n  padding-right: 24px; }\n  .dialog-footer .footer-content {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: flex-end; }\n  .dialog-footer .footer-content .btn-save {\n      flex: .2 1 0%;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n      font-size: 100%;\n      font-weight: lighter; }\n  @media screen and (max-height: 400px) {\n  .btn-save {\n    line-height: 24px !important; } }\n  @media screen and (max-width: 600px), (max-height: 600px) {\n  .area-panel {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy91c2Vycy91c2VyLWNyZWF0ZS11cGRhdGUvdXNlci1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL25ld19yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBRVEsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7RUFKcEI7SUFPWSxlQUFlO0lBQ2YsY0FaUTtJQWFSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7RUFkbkM7SUFrQlksY0FBYztJQUNkLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFdBQVcsRUFBQTtFQXRCdkI7TUF5QmdCLFlBQVk7TUFDWixXQUFXLEVBQUE7RUExQjNCO1FBK0JvQixhQUFhLEVBQUE7RUEvQmpDO1FBbUNvQixrQkFBa0IsRUFBQTtFQW5DdEM7UUF1Q29CLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CLEVBQUE7RUF6Q3ZDO1FBNkNvQixZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsNkRBQTZEO1FBQzdELDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO0VBeER0QztVQTBEd0IsVUFBVSxFQUFBO0VBMURsQztVQThEd0IsWUFBWTtVQUNaLFdBQVc7VUFDWCxVQUFVO1VBQ1Ysb0JBQW9CO1VBQ3BCLDBDQUE0QjtVQUM1QixhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLHVCQUF1QixFQUFBO0VBckUvQztVQXlFd0IsWUFBWTtVQUNaLGFBQWEsRUFBQTtFQTFFckM7UUErRW9CLGNDcURIO1FEcERHLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCLEVBQUE7RUFsRnBDO1FBc0ZvQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixlQUFlLEVBQUE7RUF6Rm5DO1FBNkZvQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7RUFqR3JDOzs7Ozs7OztRQTRHb0IsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTtFQTlHdkM7Ozs7Ozs7O1VBa0h3QixlQUFlLEVBQUE7RUFsSHZDO1FBdUhvQixhQUFhO1FBQ2IsY0FBYyxFQUFBO0VBUWxDO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBRnZCO0lBS1EsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUJBQXlCLEVBQUE7RUFSakM7TUFXWSxhQUFhO01BQ2Isd0NBQXdDO01BQ3hDLGVBQWU7TUFDZixvQkFBb0IsRUFBQTtFQUtoQztFQUNJO0lBQ0ksNEJBQTRCLEVBQUEsRUFDL0I7RUFHTDtFQUVJO0lBQ0ksMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBQSxFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvdXNlcnMvdXNlci1jcmVhdGUtdXBkYXRlL3VzZXItY3JlYXRlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCBcIl9jdXN0b21fY29sb3Jfc2NoZW1lLnNjc3NcIjtcbi8vJGNvbG9yLWZvbnQ6IG1hcC1nZXQoJG1hcDogJG1hdC1zZ20tcHJpbWFyeSwgJGtleTogNTAwKTtcbiRjb2xvci1mb250OiAjMDAwMDAwO1xuXG4kY29sb3ItZm9udC13YXJuOiBtYXAtZ2V0KCRtYXA6ICRtYXQtc2dtLXdhcm4sICRrZXk6IDUwMCk7XG5cbi5kaWFsb2ctY29udGVudCB7XG4gICAgLmZvcm0tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAuZm9ybS10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEyMCU7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWZvbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWZpZWxkcyB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcblxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgLmhpZGRlbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbWFnZS1jb21wb25lbnQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5waWN0dXJlLWRpc3BsYXkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTc2cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2JhY2tncm91bmRzL2JnLXBpY3R1cmUucG5nKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIgLnBpY3R1cmUtb3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBpY3R1cmUtb3ZlcmxheXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh3aGl0ZSwuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5idG4tY2xlYXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWZvbnQtd2FybjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgLjU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5hbWUsXG4gICAgICAgICAgICAgICAgLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgLmVtYWlsLFxuICAgICAgICAgICAgICAgIC5sb2dpbixcbiAgICAgICAgICAgICAgICAucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgLmlkU2VjdG9yLFxuICAgICAgICAgICAgICAgIC5yZWdpc3RyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogLjQgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVtYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5kaWFsb2ctZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG5cbiAgICAuZm9vdGVyLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuYnRuLXNhdmUge1xuICAgICAgICAgICAgZmxleDogLjIgMSAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQwMHB4KSB7XG4gICAgLmJ0bi1zYXZlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSxcbihtYXgtaGVpZ2h0IDogNjAwcHgpIHtcbiAgICAuYXJlYS1wYW5lbCB7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4iLCIvLyAkbWF0LXNnbS1wcmltYXJ5OiAoXG4vLyAgICAgNTAgOiAjZTVlN2ViLFxuLy8gICAgIDEwMCA6ICNiZWM0Y2MsXG4vLyAgICAgMjAwIDogIzkzOWRhYixcbi8vICAgICAzMDAgOiAjNjg3Njg5LFxuLy8gICAgIDQwMCA6ICM0NzU4NmYsXG4vLyAgICAgNTAwIDogIzI3M2I1Nixcbi8vICAgICA2MDAgOiAjMjMzNTRmLFxuLy8gICAgIDcwMCA6ICMxZDJkNDUsXG4vLyAgICAgODAwIDogIzE3MjYzYyxcbi8vICAgICA5MDAgOiAjMGUxOTJiLFxuLy8gICAgIEExMDAgOiAjNjk5YmZmLFxuLy8gICAgIEEyMDAgOiAjMzY3OWZmLFxuLy8gICAgIEE0MDAgOiAjMDM1N2ZmLFxuLy8gICAgIEE3MDAgOiAjMDA0ZWU5LFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgODAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgOTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTcwMCA6ICNmZmZmZmYsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20tcHJpbWFyeTogKFxuICAgIDUwIDogI2U4ZTlmYixcbiAgICAxMDAgOiAjYzVjOWY1LFxuICAgIDIwMCA6ICM5ZmE1ZWYsXG4gICAgMzAwIDogIzc5ODBlOCxcbiAgICA0MDAgOiAjNWM2NWUzLFxuICAgIDUwMCA6ICMzZjRhZGUsXG4gICAgLy81MDAgOiAjMDAwMDAwLFxuICAgIDYwMCA6ICMzOTQzZGEsXG4gICAgNzAwIDogIzMxM2FkNSxcbiAgICA4MDAgOiAjMjkzMmQxLFxuICAgIDkwMCA6ICMxYjIyYzgsXG4gICAgQTEwMCA6ICNmZGZkZmYsXG4gICAgQTIwMCA6ICNjYWNjZmYsXG4gICAgQTQwMCA6ICM5NzliZmYsXG4gICAgQTcwMCA6ICM3ZTgyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWF0LXNnbS1hY2NlbnQ6IChcbiAgICA1MCA6ICNlN2VjZWEsXG4gICAgMTAwIDogI2MyY2VjYixcbiAgICAyMDAgOiAjOTlhZWE5LFxuICAgIDMwMCA6ICM3MDhlODcsXG4gICAgNDAwIDogIzUyNzU2ZCxcbiAgICA1MDAgOiAjMzM1ZDUzLFxuICAgIDYwMCA6ICMyZTU1NGMsXG4gICAgNzAwIDogIzI3NGI0MixcbiAgICA4MDAgOiAjMjA0MTM5LFxuICAgIDkwMCA6ICMxNDMwMjksXG4gICAgQTEwMCA6ICM3MWZmZGEsXG4gICAgQTIwMCA6ICMzZWZmY2QsXG4gICAgQTQwMCA6ICMwYmZmYmYsXG4gICAgQTcwMCA6ICMwMGYxYjIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4vLyAkbWF0LXNnbS13YXJuOiAoXG4vLyAgICAgNTAgOiAjZjVmN2Y4LFxuLy8gICAgIDEwMCA6ICNlNmVhZWQsXG4vLyAgICAgMjAwIDogI2Q2ZGRlMixcbi8vICAgICAzMDAgOiAjYzZjZmQ2LFxuLy8gICAgIDQwMCA6ICNiOWM0Y2QsXG4vLyAgICAgNTAwIDogI2FkYmFjNCxcbi8vICAgICA2MDAgOiAjYTZiM2JlLFxuLy8gICAgIDcwMCA6ICM5Y2FiYjYsXG4vLyAgICAgODAwIDogIzkzYTNhZixcbi8vICAgICA5MDAgOiAjODM5NGEyLFxuLy8gICAgIEExMDAgOiAjZmZmZmZmLFxuLy8gICAgIEEyMDAgOiAjZmRmZWZmLFxuLy8gICAgIEE0MDAgOiAjYzllN2ZmLFxuLy8gICAgIEE3MDAgOiAjYjBkYmZmLFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgODAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgOTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20td2FybjogKFxuICAgIDUwIDogI2ZlZThlNyxcbiAgICAxMDAgOiAjZmJjNmMzLFxuICAgIDIwMCA6ICNmOWExOWIsXG4gICAgMzAwIDogI2Y3N2I3MixcbiAgICA0MDAgOiAjZjU1ZTU0LFxuICAgIDUwMCA6ICNmMzQyMzYsXG4gICAgNjAwIDogI2YxM2MzMCxcbiAgICA3MDAgOiAjZWYzMzI5LFxuICAgIDgwMCA6ICNlZDJiMjIsXG4gICAgOTAwIDogI2VhMWQxNixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZThlNyxcbiAgICBBNDAwIDogI2ZmYjZiNCxcbiAgICBBNzAwIDogI2ZmOWQ5YixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtZC1jYWxlbmRhcjogKFxuICAgIDUwIDogI2VmZjFmMyxcbiAgICAxMDAgOiAjZDhkY2UxLFxuICAgIDIwMCA6ICNiZWM0Y2QsXG4gICAgMzAwIDogI2E0YWNiOCxcbiAgICA0MDAgOiAjOTE5YmE5LFxuICAgIDUwMCA6ICM3ZDg5OWEsXG4gICAgNjAwIDogIzc1ODE5MixcbiAgICA3MDAgOiAjNmE3Njg4LFxuICAgIDgwMCA6ICM2MDZjN2UsXG4gICAgOTAwIDogIzRkNTk2YyxcbiAgICBBMTAwIDogI2NmZTFmZixcbiAgICBBMjAwIDogIzljYzFmZixcbiAgICBBNDAwIDogIzY5YTFmZixcbiAgICBBNzAwIDogIzUwOTJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/users/user-create-update/user-create-update.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/containers/users/user-create-update/user-create-update.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MyErrorStateMatcher, UserCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateUpdateComponent", function() { return UserCreateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_module_companies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_module_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/module/users */ "./src/app/module/users/index.ts");
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








/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var UserCreateUpdateComponent = /** @class */ (function () {
    function UserCreateUpdateComponent(defaults, dialogRef, apiSector, apiUser, snackBar, http, fb) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.apiSector = apiSector;
        this.apiUser = apiUser;
        this.snackBar = snackBar;
        this.http = http;
        this.fb = fb;
        this.mode = 'create';
        this.matcher = new MyErrorStateMatcher();
        this.progress = false;
        this.urlImg = '';
        this.fileName = '';
        // load the user
        // this.apiSector.getAllUsingGET3().
        //   subscribe(sec => {
        //     this.sectors = <Sector[]>sec;
        //   });
        // instance the form group for mode Update and Create
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            registration: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    UserCreateUpdateComponent.prototype.ngOnInit = function () {
        if (this.defaults) { // <-- do you have data from the main screen?
            this.mode = 'update';
            // Used in the Update Mode to fill the fields
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.password),
                // registration: new FormControl({ value: this.defaults.registration, disabled: true }, Validators.required),
                registration: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.registration, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.defaults.status),
            });
        }
        else { // <-- don't have data :( = Mode Create
            this.defaults = {}; // takes blank :)
        }
    };
    UserCreateUpdateComponent.prototype.createOrUpdate = function () {
        if (this.mode === 'create') {
            // this.verifyName().then(
            //   _success => {
            //     // console.log(_success);
            //     if (typeof _success !== 'undefined' && _success.length > 0) {
            //     // if ( _success ) {
            //       this.form.setErrors({ 'invalid': true });
            //       this.snackBar.open('Esse nome já existe para essas configurações!', 'OK', {
            //         duration: 10000
            //       });
            //     } else {
            //       this.createPart();
            //     }
            //   }
            // ).catch(
            //   _error => {
            //     console.log(_error);
            //   }
            // );
        }
        else if (this.mode === 'update') {
            var name_1 = this.form.get('name').value;
            var serialNumber = this.form.get('serialNumber').value;
            var idCompany = this.form.get('idCompany').value;
            var idModel = this.form.get('idModel').value;
            var idSegment = this.form.get('idSegment').value;
            var nameDefaults = this.defaults.name;
            var serialNumberDefaults = this.defaults.serialNumber;
            var idCompanyDefaults = this.defaults.idCompany;
            var idModelDefaults = this.defaults.model.id;
            var idSegmentDefaults = this.defaults.segment.id;
            if ((name_1 === nameDefaults) &&
                (serialNumber === serialNumberDefaults) &&
                (idCompany === idCompanyDefaults) &&
                (idModel === idModelDefaults) &&
                (idSegment === idSegmentDefaults)) {
                this.updateUser();
            }
            else {
                // this.verifyName().then(
                //   _success => {
                //     if ( _success ) {
                //       this.form.setErrors({ 'invalid': true });
                //       this.snackBar.open('Esse nome já existe para essas configurações!', 'OK', {
                //         duration: 10000
                //       }); 
                //     } else {
                //       this.updateUser();
                //     }
                //   }
                // ).catch(
                //   _error => {
                //     console.log(_error);
                //   }
                // );
            }
        }
    };
    UserCreateUpdateComponent.prototype.saveCustom = function () {
        if (this.mode === 'create') {
            this.createUser();
        }
        else if (this.mode === 'update') {
            this.updateUser();
        }
    };
    UserCreateUpdateComponent.prototype.save = function () {
        var _this = this;
        // Verificar se a senha tem letras e numeros
        if (this.verifyPassword()) {
            // UPLOAD
            if (this.selectedFile) {
                this.progress = true;
                this.upload()
                    .then(function (success) {
                    // console.log(success);
                    _this.form.get('picture').setValue(success);
                    _this.progress = false;
                    _this.createOrUpdate();
                })
                    .catch(function (error) {
                    var _error = JSON.parse(error.error);
                    _this.snackBar.open(_error[0].title ? _error[0].title : 'Falha ao fazer o upload do arquivo!', 'OK', {
                        duration: 10000
                    });
                    _this.progress = false;
                });
            }
            else {
                this.createOrUpdate();
            }
        }
        else {
            this.form.get('password').setErrors({ 'invalid': true });
        }
        return;
    };
    UserCreateUpdateComponent.prototype.createUser = function () {
        // send the color as object instead of value
        var user = this.form.value;
        this.dialogRef.close(user);
    };
    UserCreateUpdateComponent.prototype.updateUser = function () {
        // send the color as object instead of value
        var user = this.form.value;
        user.id = this.defaults.id;
        this.dialogRef.close(user);
    };
    UserCreateUpdateComponent.prototype.isCreateMode = function () {
        return this.mode === 'create';
    };
    UserCreateUpdateComponent.prototype.isUpdateMode = function () {
        return this.mode === 'update';
    };
    UserCreateUpdateComponent.prototype.fileChange = function (event) {
        if (event.target.files && event.target.files[0]) {
            this.compress(event);
        }
    };
    UserCreateUpdateComponent.prototype.upload = function () {
        var _uploadData = new FormData();
        _uploadData.append('File', this.selectedFile, this.selectedFile.name);
        var promise = this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].origin.parts + '/parts/upload', _uploadData, { responseType: 'text' })
            .toPromise();
        return promise;
    };
    UserCreateUpdateComponent.prototype.clearFileSelected = function () {
        this.selectedFile = null;
        this.fileName = '';
        this.urlImg = '';
        this.form.get('picture').setValue('');
        // Este limpa o campo de seleção de arquivo para poder selecionar uma imagem com mesmo nome
        this.fileInput.nativeElement.value = '';
        this.fileSize = null;
    };
    UserCreateUpdateComponent.prototype.compress = function (e) {
        var _this = this;
        var width = 200;
        var height = 200;
        var fileName = e.target.files[0].name;
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (event) {
            var img = new Image();
            img.src = event.target.result;
            _this.urlImg = event.target.result;
            img.onload = function () {
                var elem = document.createElement('canvas');
                elem.width = width;
                elem.height = height;
                var ctx = elem.getContext('2d');
                // img.width and img.height will give the original dimensions
                ctx.drawImage(img, 0, 0, width, height);
                ctx.canvas.toBlob(function (blob) {
                    var file = new File([blob], fileName, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });
                    // RESULTADO
                    _this.selectedFile = file;
                    _this.fileName = _this.selectedFile.name;
                    _this.fileSize = _this.selectedFile.size;
                    //
                }, 'image/jpeg', 1);
            },
                reader.onerror = function (error) { return console.log(error); };
        };
    };
    UserCreateUpdateComponent.prototype.verifyEmail = function () {
        // verifyEmail(): Promise<any> {
        var name = this.form.get('name').value;
        var serialNumber = this.form.get('serialNumber').value;
        var idCompany = this.form.get('idCompany').value;
        var idModel = this.form.get('idModel').value;
        var idSegment = this.form.get('idSegment').value;
        // se estiver nulo, volta
        // if (!name) { return Promise.reject(); }
        // se for igual ao anterior, volta também
        // if (name === this.defaults.name) { return Promise.resolve(true); }
        // const promise = this.apiUser.getByNameUsingGET(name, serialNumber, idCompany, idModel, idSegment).
        //   toPromise();
        // return <any>promise;
    };
    UserCreateUpdateComponent.prototype.loginValue = function (value) {
        if (!value) {
            return;
        }
        value = value.split('@');
        this.form.get('login').setValue(value[0]);
    };
    UserCreateUpdateComponent.prototype.verifyPassword = function () {
        var password = this.form.get('password').value;
        var letters = password.match(/[a-zA-Z]/);
        var numbers = password.match(/[0-9]/);
        return letters && numbers;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UserCreateUpdateComponent.prototype, "fileInput", void 0);
    UserCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-user-create-update',
            template: __webpack_require__(/*! ./user-create-update.component.html */ "./src/app/containers/users/user-create-update/user-create-update.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./user-create-update.component.scss */ "./src/app/containers/users/user-create-update/user-create-update.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            app_module_companies__WEBPACK_IMPORTED_MODULE_3__["SectorControllerService"],
            app_module_users__WEBPACK_IMPORTED_MODULE_6__["UserControllerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], UserCreateUpdateComponent);
    return UserCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/containers/users/user-create-update/user-create-update.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/containers/users/user-create-update/user-create-update.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UserCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateUpdateModule", function() { return UserCreateUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create-update.component */ "./src/app/containers/users/user-create-update/user-create-update.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
/* harmony import */ var app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var app_module_companies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/module/companies */ "./src/app/module/companies/index.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserCreateUpdateModule = /** @class */ (function () {
    function UserCreateUpdateModule() {
    }
    UserCreateUpdateModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__["PipeModule"]
            ],
            declarations: [_user_create_update_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateUpdateComponent"]],
            entryComponents: [_user_create_update_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateUpdateComponent"]],
            exports: [_user_create_update_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateUpdateComponent"]],
            providers: [
                { provide: app_module_companies__WEBPACK_IMPORTED_MODULE_9__["BASE_PATH"], useValue: environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].origin.companies },
                app_module_companies__WEBPACK_IMPORTED_MODULE_9__["SectorControllerService"],
            ]
        })
    ], UserCreateUpdateModule);
    return UserCreateUpdateModule;
}());



/***/ }),

/***/ "./src/app/containers/users/user.service.ts":
/*!**************************************************!*\
  !*** ./src/app/containers/users/user.service.ts ***!
  \**************************************************/
/*! exports provided: UserControllerCustomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserControllerCustomService", function() { return UserControllerCustomService; });
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




var UserControllerCustomService = /** @class */ (function () {
    function UserControllerCustomService(httpClient, snackBar) {
        this.httpClient = httpClient;
        this.snackBar = snackBar;
    }
    UserControllerCustomService.prototype.getAll = function () {
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
        //https://lupa-v1.herokuapp.com/auth/v1/admin/allprofiles
        return this.httpClient.get(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.transports + '/admin/allprofiles', httpOptions);
    };
    UserControllerCustomService.prototype.registerUser = function (user) {
        var username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh';
        var password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + btoa(username + ":" + password)
            }),
        };
        var formData = new URLSearchParams();
        // append your data
        formData.set('name', user.name);
        formData.set('email', user.email);
        formData.set('password', user.password);
        formData.set('registration', user.registration);
        console.log(formData.getAll);
        console.log(formData.toString());
        return this.httpClient.post('https://lupa-v1.herokuapp.com/v1/oauth2/register', formData.toString(), httpOptions);
    };
    UserControllerCustomService.prototype.updateUser = function (user) {
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
        formData.set('name', user.name);
        formData.set('email', user.email);
        formData.set('registration', user.registration);
        return this.httpClient.put(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/admin/profile/' + user.id, formData.toString(), httpOptions);
    };
    UserControllerCustomService.prototype.deleteUser = function (user) {
        var token = localStorage.getItem('token');
        // console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        // console.log(user);  
        return this.httpClient.delete(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/admin/profile/' + user.id, httpOptions);
    };
    UserControllerCustomService.prototype.atualizarStatus = function (user) {
        var token = localStorage.getItem('token');
        console.log(token);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + ("" + token)
            }),
        };
        var formData = new URLSearchParams();
        return this.httpClient.put(environments_environment_dev__WEBPACK_IMPORTED_MODULE_2__["environment"].origin.tracker + '/admin/status/' + user.id, formData, httpOptions);
    };
    UserControllerCustomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], UserControllerCustomService);
    return UserControllerCustomService;
}());



/***/ }),

/***/ "./src/app/containers/users/users-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/containers/users/users-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/containers/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/containers/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"background-user\">\n    <div id=\"conteiner\">\n      <div id=\"card\">\n        <div id=\"table-component\">\n          <!-- TABLE FILTER -->\n          <div id=\"tfilter\">\n            <div id=\"title\">\n              <span>Usuários</span>\n            </div>\n            <div id=\"input-filter\">\n              <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\" fxLayout=\"row\"></fury-list>\n            </div>\n            <div id=\"add\">\n              <!-- <button mat-mini-fab color=\"primary\"  matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\">\n                <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n              </button> -->\n              <!-- <button mat-mini-fab matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\" style=\"background-color: #FFC937\">\n                <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n              </button> -->\n              <button mat-raised-button matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\" \n              style=\"background-color: #FFC937;\n                     color: white;\n                     font-size: 12px;\">\n                <!-- <mat-icon aria-label=\"Adicionar\" style=\"font-size: 20px; padding-top: 4%;\">add</mat-icon> -->\n                CADASTRAR\n              </button>\n            </div>\n          </div>\n          <!-- TABLE HEADER -->\n          <!-- The header is separate so you do not lose the filters or the sorting and keep the layout-->\n          <div id=\"tmaster\">\n            <!-- <div id=\"thead\" matSort>\n              <div class=\"table-header\">\n                <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\" \n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                  {{column.name | uppercase}}\n                </div>\n              </div>\n            </div> -->\n            <!-- <div id=\"thead\" matSort>\n              <div>\n                <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\" \n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                  {{column.name}}\n                </div>\n              </div>\n            </div> -->\n            <!-- TABLE BODY -->\n            <div id=\"tbody\">\n              <!-- Note: Mat-table does not compile without mat-cell -->\n              <mat-table #table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\n              <!-- fullName Column -->\n              <ng-container *ngFor=\"let column of columns\">\n                <ng-container *ngIf=\"column.isModelProperty\" [matColumnDef]=\"column.property\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header  fxLayoutAlign=\"left\"> {{ column.name }}</mat-header-cell>\n                  <ng-container *ngIf=\"column.name == 'Status'; else elseBlock\">\n                    <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"left\">\n                      <!-- <span class=\"fury-mobile-label\">{{ column.name }}</span> -->\n                      <ng-container *ngIf=\"extractValue(row,column.cellContent,column.property) == true;else elseBlock1\">\n                        <button matTooltip=\"Desativar usuário\" [matTooltipPosition]=\"'above'\" (click)=\"desativarUsuario(row)\"  \n                          class=\"btn-stroked-active no-shadow\">Ativo\n                          <!-- <mat-icon aria-label=\"Editar\">edit</mat-icon> -->\n                          <!-- <mat-icon aria-label=\"Editar\">edit</mat-icon> -->\n                        </button>\n                        <!-- <mat-icon matTooltip=\"Usuário Ativo\" aria-label=\"Status\">check_box</mat-icon> -->\n                      </ng-container>  \n                      <ng-template #elseBlock1>\n                          <button matTooltip=\"Ativar usuário\" [matTooltipPosition]=\"'above'\" (click)=\"ativarUsuario(row)\"  \n                          class=\"btn-stroked-inactive no-shadow\">Inativo\n                           <!-- <mat-icon aria-label=\"Editar\">edit</mat-icon> -->\n                           <!-- <mat-icon aria-label=\"Editar\">edit</mat-icon> -->\n                         </button>\n                        <!-- <mat-icon matTooltip=\"Usuário Inativo\" aria-label=\"Status\">check_box_outline_blank</mat-icon> -->\n                      </ng-template>\n                    </mat-cell>\n                </ng-container>\n                <ng-template #elseBlock>\n                  <mat-cell  *matCellDef=\"let row\" fxLayoutAlign=\"left\">\n                    <!-- <span class=\"fury-mobile-label\">{{ column.name }}</span> -->\n                    {{ extractValue(row,column.cellContent,column.property) }}\n                  </mat-cell>\n                </ng-template>\n                </ng-container>\n              </ng-container>\n\n                <!-- actions Column -->\n                <ng-container matColumnDef=\"actions\">\n                  <mat-header-cell *matHeaderCellDef fxLayoutAlign=\"center\"></mat-header-cell>\n                  <mat-cell *matCellDef=\"let row\" fxLayoutAlign=\"center\">                    \n                    <!-- <button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"btn-stroked btn-icon no-shadow\"> \n                      <mat-icon aria-label=\"Editar\">edit</mat-icon>\n                    </button> -->\n                    <button mat-icon-button matTooltip=\"Editar Item\" [matTooltipPosition]=\"'above'\" (click)=\"update(row)\" class=\"no-shadow\" style=\"color: #646D77;\"> \n                        <mat-icon aria-label=\"Editar\">edit</mat-icon>\n                      </button>\n                    <!-- <button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"btn-stroked btn-icon no-shadow\">\n                        <mat-icon aria-label=\"Deletar\">delete</mat-icon>\n                    </button> -->\n                    <button mat-icon-button matTooltip=\"Deletar Item\" [matTooltipPosition]=\"'above'\" (click)=\"delete(row)\" class=\"no-shadow\" style=\"color: #646D77;\">\n                        <mat-icon aria-label=\"Deletar\">delete</mat-icon>\n                    </button>\n                  </mat-cell>\n                </ng-container>\n                <mat-header-row *matHeaderRowDef=\"visibleColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: visibleColumns;\" class=\"clickable\"></mat-row>\n              </mat-table>\n            </div>\n          </div>\n          <!-- TABLE FOOTER -->\n          <div id=\"tfooter\">\n            <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/containers/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/containers/users/users.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-stroked-active {\n  color: green;\n  background-color: transparent;\n  border: 1px solid !important;\n  line-height: 1.70;\n  width: 100px;\n  cursor: pointer; }\n\n.btn-stroked-active:hover {\n  color: white;\n  background-color: green;\n  border: 1px solid !important; }\n\n.btn-stroked-inactive {\n  color: red;\n  background-color: transparent;\n  border: 1px solid !important;\n  line-height: 1.70;\n  width: 100px;\n  cursor: pointer; }\n\n.btn-stroked-inactive:hover {\n  color: white;\n  background-color: red;\n  border: 1px solid !important; }\n\n#background-user, #background-user #conteiner #card #table-component #tfilter, #background-user #conteiner #card #table-component #tfilter #input-filter, #background-user #conteiner #card #table-component #tfilter #add, #background-user #conteiner #card #table-component #tmaster #thead, #background-user #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .id, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .name, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .name {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name button, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name button {\n    margin: 5px; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .email, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .email {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-email, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-email {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-email button, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-email button {\n    margin: 5px; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .registration, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .registration {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-registration, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-registration {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-registration button, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-registration button {\n    margin: 5px; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .status, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .status {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-status, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-status {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-status button, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-status button {\n    margin: 5px; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 16.66666667%;\n  min-width: 16.66666667%;\n  width: 16.66666667%;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-size: 90%;\n  justify-content: left; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n#background-user {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-user #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-user #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-user #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-user #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);\n          color: #000000;\n          z-index: 2; }\n\n#background-user #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 120%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-user #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-user #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 76.5%; }\n\n#background-user #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-user #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-user #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-user #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-user #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-user #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 10%;\n            padding-right: 2%; }\n\n#background-user #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-user #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-user #conteiner #card #table-component #tmaster #thead {\n            background-color: #BDC3C7;\n            text-align: center; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-user #conteiner #card #table-component #tmaster #thead .table-header {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26);\n              min-height: 100px;\n              width: 100%;\n              color: white;\n              display: inline-flex;\n              flex: 2 1 auto;\n              z-index: 2;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-user #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                background-color: #BDC3C7;\n                border-bottom-width: 0;\n                border-top-width: 0; }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(0, 0, 0, 0.08); }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #000000 !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 90%; }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 20px;\n                  text-align: left; }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500; }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail p {\n                    font-weight: 300; }\n\n#background-user #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-user #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-user #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #000000;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 140px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-name {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-email {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-registration {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-status {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUVJLFlBQVk7RUFFWiw2QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUVJLFlBQVk7RUFDWix1QkFBdUI7RUFFdkIsNEJBQTRCLEVBQUE7O0FBR2hDO0VBRUksVUFBVTtFQUVWLDZCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBRUksWUFBWTtFQUNaLHFCQUFxQjtFQUVyQiw0QkFBNEIsRUFBQTs7QUFrQmhDO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQVFmO0VBbkJKLHVCQUoyQjtFQUszQix1QkFMMkI7RUFNM0IsbUJBTjJCO0VBeUJuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBNUJKLHVCQUoyQjtFQUszQix1QkFMMkI7RUFNM0IsbUJBTjJCO0VBa0NuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBRWpCO0lBQ0ksV0FBVyxFQUFBOztBQWxCdkI7RUFuQkosdUJBSjJCO0VBSzNCLHVCQUwyQjtFQU0zQixtQkFOMkI7RUF5Qm5CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHekI7RUE1QkosdUJBSjJCO0VBSzNCLHVCQUwyQjtFQU0zQixtQkFOMkI7RUFrQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFFakI7SUFDSSxXQUFXLEVBQUE7O0FBbEJ2QjtFQW5CSix1QkFKMkI7RUFLM0IsdUJBTDJCO0VBTTNCLG1CQU4yQjtFQXlCbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUd6QjtFQTVCSix1QkFKMkI7RUFLM0IsdUJBTDJCO0VBTTNCLG1CQU4yQjtFQWtDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUVqQjtJQUNJLFdBQVcsRUFBQTs7QUFsQnZCO0VBbkJKLHVCQUoyQjtFQUszQix1QkFMMkI7RUFNM0IsbUJBTjJCO0VBeUJuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBNUJKLHVCQUoyQjtFQUszQix1QkFMMkI7RUFNM0IsbUJBTjJCO0VBa0NuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBRWpCO0lBQ0ksV0FBVyxFQUFBOztBQWxCdkI7RUFuQkosdUJBSjJCO0VBSzNCLHVCQUwyQjtFQU0zQixtQkFOMkI7RUF5Qm5CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHekI7RUE1QkosdUJBSjJCO0VBSzNCLHVCQUwyQjtFQU0zQixtQkFOMkI7RUFrQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFFakI7SUFDSSxXQUFXLEVBQUE7O0FBbEJ2QjtFQW5CSix1QkFKMkI7RUFLM0IsdUJBTDJCO0VBTTNCLG1CQU4yQjtFQXlCbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUd6QjtFQTVCSix1QkFKMkI7RUFLM0IsdUJBTDJCO0VBTTNCLG1CQU4yQjtFQWtDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUVqQjtJQUNJLFdBQVcsRUFBQTs7QUFRL0I7O0VBRUksWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUV0QixlQUFlLEVBQUE7O0FBTG5CO0lBT1EsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsd0JBQXdCO0lBRXhCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVUsRUFBQTs7QUFmbEI7TUFpQlksY0FBYztNQUNkLGFBQWE7TUFDYixlQUFlLEVBQUE7O0FBbkIzQjtRQXNCZ0IsY0FBYztRQUNkLGFBQWE7UUFDYixzQkFBc0IsRUFBQTs7QUF4QnRDO1VBMkJvQixhQUFhO1VBQ2IsZ0JBQWdCO1VBRWhCLDJDQUFtQztVQUNuQyxjQTdJTTtVQThJTixVQUFVLEVBQUE7O0FBaEM5QjtZQWtDd0Isa0JBQWtCO1lBRWxCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFjO1lBQ2QsK0JBQStCLEVBQUE7O0FBekN2RDtjQTJDNEIsY0FBYyxFQUFBOztBQTNDMUM7WUFnRHdCLGdCQUFnQixFQUFBOztBQWhEeEM7Y0FrRDRCLGNBQWMsRUFBQTs7QUFsRDFDO2dCQW9EZ0MsY0FBYyxFQUFBOztBQXBEOUM7a0JBc0RvQyxhQUFhLEVBQUE7O0FBdERqRDtrQkF5RG9DLCtCQUErQjtrQkFDL0IsNEJBQTRCLEVBQUE7O0FBMURoRTtvQkE0RHdDLDhCQUE4QjtvQkFDOUIsa0NBQWtDLEVBQUE7O0FBN0QxRTtZQW9Fd0IsYUFBYTtZQUViLGNBQWM7WUFDZCxpQkFBaUIsRUFBQTs7QUF2RXpDO2NBMEU0QiwyQ0FBbUMsRUFBQTs7QUExRS9EO1VBK0VvQixhQUFhO1VBQ2IsZUFBZTtVQUNmLHNCQUFzQixFQUFBOztBQWpGMUM7WUF3RndCLHlCQUF5QjtZQUV6QixrQkFBa0IsRUFBQTs7QUExRjFDO2NBNkY0QixhQUFhO2NBQ2Isa0NBQWtDLEVBQUE7O0FBOUY5RDtjQWlHNEIsMkNBQW1DO2NBQ25DLGlCQUFpQjtjQUNqQixXQUFXO2NBRVgsWUFBWTtjQUVaLG9CQUFvQjtjQUNwQixjQUFjO2NBQ2QsVUFBVTtjQUNWLGlCQUFpQjtjQUNqQixXQUFBLEVBQVk7O0FBM0d4QztZQXlJd0IsZUFBZTtZQUNmLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsYUFBYTtZQUViLDJDQUFtQztZQUNuQyxVQUFVO1lBQ1YsY0FBYztZQUNkLFNBQVMsRUFBQTs7QUFqSmpDO2NBcUo0QixXQUFXO2NBb0RYLFNBQUEsRUFBVTs7QUF6TXRDO2dCQTJKZ0MseUJBQXlCO2dCQUN6QixzQkFBc0I7Z0JBQ3RCLG1CQUFtQixFQUFBOztBQTdKbkQ7Z0JBa0tnQyw4QkFBOEIsRUFBQTs7QUFsSzlEO2dCQXFLZ0MsK0JBQStCLEVBQUE7O0FBcksvRDtnQkF3S2dDLHFDQXRSTixFQUFBOztBQThHMUI7Z0JBMktnQyx5QkFBbUM7Z0JBQ25DLDhCQUE4QjtnQkFDOUIsOEJBQThCO2dCQUM5QiwrQkFBK0I7Z0JBQy9CLGNBQWMsRUFBQTs7QUEvSzlDO2dCQXNMZ0Msd0RBQXFELEVBQUE7O0FBdExyRjtrQkF5TG9DLGFBQWE7a0JBQ2IsZ0JBQWdCLEVBQUE7O0FBMUxwRDtvQkE2THdDLGdCQUFnQixFQUFBOztBQTdMeEQ7b0JBaU13QyxnQkFBZ0IsRUFBQTs7QUFqTXhEO2dCQXVNZ0Msa0JBQWtCLEVBQUE7O0FBdk1sRDtVQWdOb0Isa0JBQWtCO1VBQ2xCLGdCQUFnQixFQUFBOztBQWpOcEM7WUFtTndCLFdBQVc7WUFDWCxjQWxVRTtZQW1VRixlQUFlLEVBQUE7O0FBU3ZDO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0k7SUFDSSwwQkFBeUIsRUFBQSxFQUM1Qjs7QUFHTDtFQUNJO0lBQ0ksMEJBQTBCLEVBQUE7RUFFOUI7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSx3QkFBd0IsRUFBQSxFQUMzQjs7QUFHTDtFQUNJO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsdUJBQXVCLEVBQUE7RUFFM0I7SUFLUSw4QkFBOEIsRUFBQTtFQUd0QztJQUNJLHdCQUF3QixFQUFBO0VBRTVCO0lBQ0ksc0JBQXNCLEVBQUE7RUFFdEI7SUF2VUosMkJBMFVrRDtJQXpVbEQsMkJBeVVrRDtJQXhVbEQsdUJBd1VrRCxFQUFBO0VBSDlDO0lBdlVKLDJCQTBVa0Q7SUF6VWxELDJCQXlVa0Q7SUF4VWxELHVCQXdVa0QsRUFBQTtFQUg5QztJQXZVSiwyQkEwVWtEO0lBelVsRCwyQkF5VWtEO0lBeFVsRCx1QkF3VWtELEVBQUE7RUFIOUM7SUF2VUosMkJBMFVrRDtJQXpVbEQsMkJBeVVrRDtJQXhVbEQsdUJBd1VrRCxFQUFBO0VBSDlDO0lBdlVKLDJCQTBVa0Q7SUF6VWxELDJCQXlVa0Q7SUF4VWxELHVCQXdVa0QsRUFBQTtFQUg5QztJQXZVSiwyQkEwVWtEO0lBelVsRCwyQkF5VWtEO0lBeFVsRCx1QkF3VWtELEVBQUE7RUFIOUM7SUFRSSxpQkFBaUIsRUFBQTtFQUd6QjtJQUNJLHlCQUF5QixFQUFBO0VBRTdCO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QixFQUFBO0lBRjdCO01BSVEsd0JBQXdCLEVBQUEsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwiX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2Nzc1wiO1xuLy8kdGhlbWUtYmFja2dyb3VuZDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuJHRoZW1lLWJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbi8vIExpc3RhIGRlIGNhbXBvc1xuJGZpZWxkczogKCdpZCcsXG4nbmFtZScsXG4nZW1haWwnLFxuJ3JlZ2lzdHJhdGlvbicsXG4nc3RhdHVzJyxcbidhY3Rpb25zJ1xuKTtcblxuLmJ0bi1zdHJva2VkLWFjdGl2ZSB7XG4gICAgLy9jb2xvcjogbWFwLWdldCgkbWF0LXNnbS1wcmltYXJ5LCA1MDApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjp1bnNldCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS43MDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXN0cm9rZWQtYWN0aXZlOmhvdmVyIHtcbiAgICAvL2NvbG9yOiBtYXAtZ2V0KCRtYXQtc2dtLXByaW1hcnksIDUwMCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgfVxuXG4uYnRuLXN0cm9rZWQtaW5hY3RpdmUge1xuICAgIC8vY29sb3I6IG1hcC1nZXQoJG1hdC1zZ20tcHJpbWFyeSwgNTAwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOnVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjcwO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tc3Ryb2tlZC1pbmFjdGl2ZTpob3ZlciB7XG4gICAgLy9jb2xvcjogbWFwLWdldCgkbWF0LXNnbS1wcmltYXJ5LCA1MDApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xufVxuXG4vLyAubm8tc2hhZG93IHtcbi8vICAgICBib3gtc2hhZG93OiB1bnNldCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyBQYWRyb25pemEgbyB0YW1hbmhvIGRvcyBjYW1wb3NcbiRsZW5ndGg6IDEwMC9sZW5ndGgoJGZpZWxkcykqMSU7XG5cblxuQG1peGluIGNvbHVtbi13aWR0aCgkcHJvcGVydHkpIHtcbiAgICBtYXgtd2lkdGg6ICRwcm9wZXJ0eTtcbiAgICBtaW4td2lkdGg6ICRwcm9wZXJ0eTtcbiAgICB3aWR0aDogJHByb3BlcnR5OyAgICBcbn1cblxuLy8gY2VudHJhbGl6ZXMgYWxsIGNvbnRhaW5lciBpdGVtc1xuJWZsZXgtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyBDb25maWd1cmHDp8O1ZXMgbsOjbyBwYWRyw7VlcyBwYXJhIGFzIGNvbHVuYXNcbiV0YWJsZS1jb2x1bW5zIHtcblxuICAgIEBlYWNoICRoZWFkaW5nIGluICRmaWVsZHMge1xuXG4gICAgICAgIC4jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgoJGxlbmd0aCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDsgLy8gc29ydGluZyBhcnJvdyBkaXNjb3VudFxuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgoJGxlbmd0aCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgICAgQGlmICN7JGhlYWRpbmd9PT1hY3Rpb25zIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDOTM3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYmFja2dyb3VuZC11c2VyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTsgLy9iYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAjY29udGVpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICBoZWlnaHQ6IDkxJTtcbiAgICAgICAgd2lkdGg6IDkxJTtcbiAgICAgICAgI2NhcmQge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgI3RhYmxlLWNvbXBvbmVudCB7XG4gICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMjczQjU2O1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAjdGZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4xNik7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAjdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9mb250LXNpemU6IDE1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUlOyAvL2JhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4ICM3MDcwNzAgc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjaW5wdXQtZmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3Ni41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1cnktbGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LW5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2FkZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA4LjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4yNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3RtYXN0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMiAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4yNik7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAjdGhlYWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2JveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjI2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCREMzQzc7XG4gXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW4taGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjI2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAyIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhFQURFUiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gI3RoZWFkIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9ib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4yNik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRDM0M3O1xuIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vLy8gbWluLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL2NvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLyogSEVBREVSICovXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICN0Ym9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMCAxIGF1dG87IC8vIGJhY2tncm91bmQ6IGJyb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSggYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSggYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9mb250LXNpemU6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vanVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCREMzQzc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiAjRkZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtYmFja2dyb3VuZCwgLjA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2p1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1jb2x1bW4tZXhwYW5kZWREZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMThweCAxMHB4IC0xOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMThweCAxMHB4IC0xOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVsZW1lbnQtZGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQk9EWSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3Rmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjYXB0aW9uIGZvcm1hdHRpbmdcbi5jaXJjbGUtc21hbGwge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAucGFnaW5hdG9ye1xuICAgICAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAjdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZ1cnktZmlsdGVyLWlucHV0e1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgfVxuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAldW5zZXQtd2lkdGh7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgI3RmaWx0ZXIge1xuICAgICAgICAjdGl0bGUsICNpbnB1dC1maWx0ZXIsICNhZGR7XG4gICAgICAgICAgICBAZXh0ZW5kICV1bnNldC13aWR0aDtcbiAgICAgICAgfVxuICAgICAgICAjYWRke1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgICN0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgI3Rib2R5e1xuICAgICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50OyAvLyBmaXggbGF5b3V0IGluIHRoZSBmaXJlZm94XG4gICAgfVxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICBAZWFjaCAkaGVhZGluZyBpbiAkZmllbGRzIHtcbiAgICAgICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgodW5zZXQgIWltcG9ydGFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWxpc3QtdGFibGUgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5mdXJ5LWNvbHVtbi1maWx0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/containers/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create-update/user-create-update.component */ "./src/app/containers/users/user-create-update/user-create-update.component.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.component */ "./src/app/core/common/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var app_containers_users_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/containers/users/user.service */ "./src/app/containers/users/user.service.ts");
/* harmony import */ var app_core_common_dialog_change_status_dialog_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/common/dialog-change-status/dialog-status.component */ "./src/app/core/common/dialog-change-status/dialog-status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UsersComponent = /** @class */ (function () {
    function UsersComponent(dialog, snackBar, apiUser) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.apiUser = apiUser;
        this.subject$ = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        // this component is useful for the filter and show colums in table
        this.columns = [
            { name: 'Id', property: 'id', visible: false, isModelProperty: true },
            { name: 'Nome', property: 'name', visible: true, isModelProperty: true },
            { name: 'Email', property: 'email', visible: true, isModelProperty: true },
            { name: 'Matricula', property: 'registration', visible: true, isModelProperty: true },
            { name: 'Status', property: 'status', visible: true, isModelProperty: true },
            { name: '', property: 'actions', visible: true }
        ];
    }
    Object.defineProperty(UsersComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.loadData = function () {
        var _this = this;
        this.apiUser.getAll()
            .subscribe(function (users) {
            _this.users = users;
            _this.dataSource.data = users; //transports;
            _this.paginator.firstPage();
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                //this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
                console.log(error);
            }
        });
        //this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (users) {
            _this.users = users;
            _this.dataSource.data = users;
        });
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UsersComponent.prototype.create = function () {
        var _this = this;
        this.dialog.open(_user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateUpdateComponent"], {
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (user) {
            if (user) {
                _this.apiUser.registerUser(user).
                    subscribe(function (success) {
                    _this.snackBar.open('Usuário cadastrado com sucesso!', 'OK', {
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
    UsersComponent.prototype.update = function (user) {
        var _this = this;
        this.dialog.open(_user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateUpdateComponent"], {
            data: user,
            width: '41%', height: '57%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (_user) {
            if (_user) {
                _this.apiUser.updateUser(_user).
                    subscribe(function (success) {
                    _this.snackBar.open('Usuário atualizado com sucesso!', 'OK', {
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
    UsersComponent.prototype.delete = function (user) {
        var _this = this;
        this.dialog.open(_core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"], {
            data: { id: user.id, displayName: user.name },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe(function (_user) {
            if (_user) {
                _this.apiUser.deleteUser(_user).
                    subscribe(function (success) {
                    _this.snackBar.open('Usuário deletado com sucesso!', 'OK', {
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
    UsersComponent.prototype.ativarUsuario = function (user) {
        var _this = this;
        this.dialog.open(app_core_common_dialog_change_status_dialog_status_component__WEBPACK_IMPORTED_MODULE_9__["DialogStatusComponent"], {
            data: { id: user.id, displayName: user.name, title: 'Deseja ativar o usuário?' },
            panelClass: 'dialog-status'
        }).afterClosed().subscribe(function (_user) {
            if (_user) {
                _this.apiUser.atualizarStatus(_user).
                    subscribe(function (success) {
                    _this.snackBar.open('Usuário ativado com sucesso!', 'OK', {
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
    UsersComponent.prototype.desativarUsuario = function (user) {
        var _this = this;
        this.dialog.open(app_core_common_dialog_change_status_dialog_status_component__WEBPACK_IMPORTED_MODULE_9__["DialogStatusComponent"], {
            data: { id: user.id, displayName: user.name, title: 'Deseja desativar o usuário?' },
            panelClass: 'dialog-status'
        }).afterClosed().subscribe(function (_user) {
            if (_user) {
                _this.apiUser.atualizarStatus(_user).
                    subscribe(function (success) {
                    _this.snackBar.open('Usuário desativado com sucesso!', 'OK', {
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
    UsersComponent.prototype.ngOnDestroy = function () {
    };
    UsersComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UsersComponent.prototype.extractValue = function (_row, _cell, _property) {
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
    UsersComponent.prototype.toggleRow = function (row) {
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
    ], UsersComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/containers/users/users.component.html"),
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [app_containers_users_user_service__WEBPACK_IMPORTED_MODULE_8__["UserControllerCustomService"]],
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/containers/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            app_containers_users_user_service__WEBPACK_IMPORTED_MODULE_8__["UserControllerCustomService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/containers/users/users.module.ts":
/*!**************************************************!*\
  !*** ./src/app/containers/users/users.module.ts ***!
  \**************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/page/page.module */ "./src/app/core/common/page/page.module.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.module */ "./src/app/core/common/dialog-delete/dialog-delete.module.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/containers/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users.component */ "./src/app/containers/users/users.component.ts");
/* harmony import */ var _user_create_update_user_create_update_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-create-update/user-create-update.module */ "./src/app/containers/users/user-create-update/user-create-update.module.ts");
/* harmony import */ var app_core_common_dialog_change_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/common/dialog-change-status/dialog-status.module */ "./src/app/core/common/dialog-change-status/dialog-status.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_8__["UsersRoutingModule"],
                _user_create_update_user_create_update_module__WEBPACK_IMPORTED_MODULE_10__["UserCreateUpdateModule"],
                // Core
                _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"],
                _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteModule"],
                app_core_common_dialog_change_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_11__["DialogStatusModule"],
            ],
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]],
            exports: [_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/core/common/dialog-change-status/dialog-status.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/common/dialog-change-status/dialog-status.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span class=\"title-status\">{{ data.title }}</span>\n</div>\n<div mat-dialog-content>\n  <p class=\"item-status\">Nome: {{ data.displayName }}</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button class=\"btn-rounded btn-status\" mat-dialog-close>CANCELAR</button>\n    <button mat-raised-button class=\"btn-rounded btn-status\" (click)=\"confirm()\">CONFIRMAR</button>\n</div>"

/***/ }),

/***/ "./src/app/core/common/dialog-change-status/dialog-status.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/common/dialog-change-status/dialog-status.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-status div {\n  text-align: left; }\n  .dialog-status div .title-status {\n    font-size: 20px; }\n  .dialog-status .item-status {\n  text-align: left;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.54); }\n  .dialog-status .btn-status {\n  flex: 1 1 0%;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3f4ade;\n  box-shadow: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29yZS9jb21tb24vZGlhbG9nLWNoYW5nZS1zdGF0dXMvZGlhbG9nLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9zdHlsZXMvX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUdRLGdCQUFnQixFQUFBO0VBSHhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0VBVVEsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBMEIsRUFBQTtFQVpsQztFQWdCUSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQ2lCUztFRGhCVCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tbW9uL2RpYWxvZy1jaGFuZ2Utc3RhdHVzL2RpYWxvZy1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2Nzc1wiO1xuJGNvbG9yLWZvbnQ6IG1hcC1nZXQoJG1hcDogJG1hdC1zZ20tcHJpbWFyeSwgJGtleTogNTAwKTtcblxuLmRpYWxvZy1zdGF0dXN7XG5cbiAgICBkaXZ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC50aXRsZS1zdGF0dXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIC5pdGVtLXN0YXR1c3tcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgfVxuXG4gICAgLmJ0bi1zdGF0dXMge1xuICAgICAgICBmbGV4OiAxIDEgMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICRjb2xvci1mb250O1xuICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICB9XG5cbn0iLCIvLyAkbWF0LXNnbS1wcmltYXJ5OiAoXG4vLyAgICAgNTAgOiAjZTVlN2ViLFxuLy8gICAgIDEwMCA6ICNiZWM0Y2MsXG4vLyAgICAgMjAwIDogIzkzOWRhYixcbi8vICAgICAzMDAgOiAjNjg3Njg5LFxuLy8gICAgIDQwMCA6ICM0NzU4NmYsXG4vLyAgICAgNTAwIDogIzI3M2I1Nixcbi8vICAgICA2MDAgOiAjMjMzNTRmLFxuLy8gICAgIDcwMCA6ICMxZDJkNDUsXG4vLyAgICAgODAwIDogIzE3MjYzYyxcbi8vICAgICA5MDAgOiAjMGUxOTJiLFxuLy8gICAgIEExMDAgOiAjNjk5YmZmLFxuLy8gICAgIEEyMDAgOiAjMzY3OWZmLFxuLy8gICAgIEE0MDAgOiAjMDM1N2ZmLFxuLy8gICAgIEE3MDAgOiAjMDA0ZWU5LFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgODAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgOTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTcwMCA6ICNmZmZmZmYsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20tcHJpbWFyeTogKFxuICAgIDUwIDogI2U4ZTlmYixcbiAgICAxMDAgOiAjYzVjOWY1LFxuICAgIDIwMCA6ICM5ZmE1ZWYsXG4gICAgMzAwIDogIzc5ODBlOCxcbiAgICA0MDAgOiAjNWM2NWUzLFxuICAgIDUwMCA6ICMzZjRhZGUsXG4gICAgLy81MDAgOiAjMDAwMDAwLFxuICAgIDYwMCA6ICMzOTQzZGEsXG4gICAgNzAwIDogIzMxM2FkNSxcbiAgICA4MDAgOiAjMjkzMmQxLFxuICAgIDkwMCA6ICMxYjIyYzgsXG4gICAgQTEwMCA6ICNmZGZkZmYsXG4gICAgQTIwMCA6ICNjYWNjZmYsXG4gICAgQTQwMCA6ICM5NzliZmYsXG4gICAgQTcwMCA6ICM3ZTgyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWF0LXNnbS1hY2NlbnQ6IChcbiAgICA1MCA6ICNlN2VjZWEsXG4gICAgMTAwIDogI2MyY2VjYixcbiAgICAyMDAgOiAjOTlhZWE5LFxuICAgIDMwMCA6ICM3MDhlODcsXG4gICAgNDAwIDogIzUyNzU2ZCxcbiAgICA1MDAgOiAjMzM1ZDUzLFxuICAgIDYwMCA6ICMyZTU1NGMsXG4gICAgNzAwIDogIzI3NGI0MixcbiAgICA4MDAgOiAjMjA0MTM5LFxuICAgIDkwMCA6ICMxNDMwMjksXG4gICAgQTEwMCA6ICM3MWZmZGEsXG4gICAgQTIwMCA6ICMzZWZmY2QsXG4gICAgQTQwMCA6ICMwYmZmYmYsXG4gICAgQTcwMCA6ICMwMGYxYjIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjZmZmZmZmLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4vLyAkbWF0LXNnbS13YXJuOiAoXG4vLyAgICAgNTAgOiAjZjVmN2Y4LFxuLy8gICAgIDEwMCA6ICNlNmVhZWQsXG4vLyAgICAgMjAwIDogI2Q2ZGRlMixcbi8vICAgICAzMDAgOiAjYzZjZmQ2LFxuLy8gICAgIDQwMCA6ICNiOWM0Y2QsXG4vLyAgICAgNTAwIDogI2FkYmFjNCxcbi8vICAgICA2MDAgOiAjYTZiM2JlLFxuLy8gICAgIDcwMCA6ICM5Y2FiYjYsXG4vLyAgICAgODAwIDogIzkzYTNhZixcbi8vICAgICA5MDAgOiAjODM5NGEyLFxuLy8gICAgIEExMDAgOiAjZmZmZmZmLFxuLy8gICAgIEEyMDAgOiAjZmRmZWZmLFxuLy8gICAgIEE0MDAgOiAjYzllN2ZmLFxuLy8gICAgIEE3MDAgOiAjYjBkYmZmLFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgNzAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgODAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgOTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNDAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20td2FybjogKFxuICAgIDUwIDogI2ZlZThlNyxcbiAgICAxMDAgOiAjZmJjNmMzLFxuICAgIDIwMCA6ICNmOWExOWIsXG4gICAgMzAwIDogI2Y3N2I3MixcbiAgICA0MDAgOiAjZjU1ZTU0LFxuICAgIDUwMCA6ICNmMzQyMzYsXG4gICAgNjAwIDogI2YxM2MzMCxcbiAgICA3MDAgOiAjZWYzMzI5LFxuICAgIDgwMCA6ICNlZDJiMjIsXG4gICAgOTAwIDogI2VhMWQxNixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZThlNyxcbiAgICBBNDAwIDogI2ZmYjZiNCxcbiAgICBBNzAwIDogI2ZmOWQ5YixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtZC1jYWxlbmRhcjogKFxuICAgIDUwIDogI2VmZjFmMyxcbiAgICAxMDAgOiAjZDhkY2UxLFxuICAgIDIwMCA6ICNiZWM0Y2QsXG4gICAgMzAwIDogI2E0YWNiOCxcbiAgICA0MDAgOiAjOTE5YmE5LFxuICAgIDUwMCA6ICM3ZDg5OWEsXG4gICAgNjAwIDogIzc1ODE5MixcbiAgICA3MDAgOiAjNmE3Njg4LFxuICAgIDgwMCA6ICM2MDZjN2UsXG4gICAgOTAwIDogIzRkNTk2YyxcbiAgICBBMTAwIDogI2NmZTFmZixcbiAgICBBMjAwIDogIzljYzFmZixcbiAgICBBNDAwIDogIzY5YTFmZixcbiAgICBBNzAwIDogIzUwOTJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/common/dialog-change-status/dialog-status.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/common/dialog-change-status/dialog-status.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DialogStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStatusComponent", function() { return DialogStatusComponent; });
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


var DialogStatusComponent = /** @class */ (function () {
    function DialogStatusComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    DialogStatusComponent.prototype.ngAfterViewInit = function () {
    };
    DialogStatusComponent.prototype.confirm = function () {
        this.dialogRef.close(this.data);
    };
    DialogStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-dialog-status',
            template: __webpack_require__(/*! ./dialog-status.component.html */ "./src/app/core/common/dialog-change-status/dialog-status.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dialog-status.component.scss */ "./src/app/core/common/dialog-change-status/dialog-status.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], DialogStatusComponent);
    return DialogStatusComponent;
}());



/***/ }),

/***/ "./src/app/core/common/dialog-change-status/dialog-status.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/common/dialog-change-status/dialog-status.module.ts ***!
  \**************************************************************************/
/*! exports provided: DialogStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStatusModule", function() { return DialogStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-status.component */ "./src/app/core/common/dialog-change-status/dialog-status.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DialogStatusModule = /** @class */ (function () {
    function DialogStatusModule() {
    }
    DialogStatusModule = __decorate([
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
            ],
            declarations: [_dialog_status_component__WEBPACK_IMPORTED_MODULE_5__["DialogStatusComponent"]],
            entryComponents: [_dialog_status_component__WEBPACK_IMPORTED_MODULE_5__["DialogStatusComponent"]],
            exports: [_dialog_status_component__WEBPACK_IMPORTED_MODULE_5__["DialogStatusComponent"]]
        })
    ], DialogStatusModule);
    return DialogStatusModule;
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



/***/ })

}]);
//# sourceMappingURL=app-containers-users-users-module.js.map