(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-dashboard-lives-dashboard-lives-module"],{

/***/ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<fury-dialog-panel>\n\n    <div class=\"form-content\">\n        <div class=\"form-title\">\n            <span>Cadastrar Live View</span>\n        </div>\n        <div class=\"form-fields\">\n            <form [formGroup]=\"form\">\n                <div class=\"name\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"DashboardLive\" pattern=\"^(?!\\s*$).+\" formControlName=\"name\" id=\"name\" required />\n                    </mat-form-field>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"footer-content\" footer-content>\n        <button *ngIf=\"isCreateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" (click)=\"save()\" color=\"primary\">SALVAR</button>\n        <button *ngIf=\"isUpdateMode()\" mat-raised-button [disabled]=\"!form.valid\" class=\"btn-rounded btn-save\" color=\"primary\"  (click)=\"save()\">ATUALIZAR</button>\n    </div>\n\n</fury-dialog-panel>\n\n"

/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content .form-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .dialog-content .form-content .form-title {\n    font-size: 150%;\n    color: #3f4ade;\n    font-weight: bold;\n    text-align: center;\n    height: 20%;\n    align-items: center;\n    display: flex;\n    justify-content: center; }\n  .dialog-content .form-content .form-fields {\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: 80%; }\n  .dialog-content .form-content .form-fields form {\n      height: 100%;\n      width: 100%; }\n  .dialog-content .form-content .form-fields form .name {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%; }\n  .dialog-content .form-content .form-fields form .name mat-form-field {\n          flex: .3 1 auto; }\n  .dialog-footer {\n  display: flex;\n  padding-right: 24px; }\n  .dialog-footer .footer-content {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: flex-end; }\n  .dialog-footer .footer-content .btn-save {\n      flex: .2 1 0%;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n      font-size: 100%;\n      font-weight: lighter; }\n  @media screen and (max-height: 400px) {\n  .btn-save {\n    line-height: 24px !important; } }\n  @media screen and (max-width: 600px), (max-height: 600px) {\n  .area-panel {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9kYXNoYm9hcmQtbGl2ZXMvZGFzaGJvYXJkLWxpdmUtY3JlYXRlLXVwZGF0ZS9kYXNoYm9hcmQtbGl2ZS1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL25ld19yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRVEsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBb0NmO0VBeENMO0lBT1ksZ0JBQWU7SUFDZixlQzJCSztJRDFCTCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLHdCQUF1QixFQUMxQjtFQWZUO0lBa0JZLGVBQWM7SUFDZCxvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYixZQUFXLEVBaUJkO0VBdkNUO01BeUJnQixhQUFZO01BQ1osWUFBVyxFQVlkO0VBdENiO1FBNkJvQixjQUFhO1FBQ2Isd0JBQXVCO1FBQ3ZCLG9CQUFtQjtRQUNuQixhQUFZLEVBS2Y7RUFyQ2pCO1VBbUN3QixnQkFBZSxFQUNsQjtFQVFyQjtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFldEI7RUFqQkQ7SUFLUSxjQUFhO0lBQ2IsZUFBYztJQUNkLG9CQUFtQjtJQUNuQiwwQkFBeUIsRUFRNUI7RUFoQkw7TUFXWSxjQUFhO01BQ2IseUNBQXdDO01BQ3hDLGdCQUFlO01BQ2YscUJBQW9CLEVBQ3ZCO0VBSVQ7RUFDSTtJQUNJLDZCQUE0QixFQUMvQixFQUFBO0VBR0w7RUFFSTtJQUNJLDRCQUEyQjtJQUMzQix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2Rhc2hib2FyZC1saXZlcy9kYXNoYm9hcmQtbGl2ZS1jcmVhdGUtdXBkYXRlL2Rhc2hib2FyZC1saXZlLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kY29sb3ItZm9udDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuXG4uZGlhbG9nLWNvbnRlbnQge1xuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgLmZvcm0tdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1mb250O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1maWVsZHMge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG5cbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAuMyAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmRpYWxvZy1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcblxuICAgIC5mb290ZXItY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIC5idG4tc2F2ZSB7XG4gICAgICAgICAgICBmbGV4OiAuMiAxIDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDAwcHgpIHtcbiAgICAuYnRuLXNhdmUge1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpLFxuKG1heC1oZWlnaHQgOiA2MDBweCkge1xuICAgIC5hcmVhLXBhbmVsIHtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiIsIi8vICRtYXQtc2dtLXByaW1hcnk6IChcbi8vICAgICA1MCA6ICNlNWU3ZWIsXG4vLyAgICAgMTAwIDogI2JlYzRjYyxcbi8vICAgICAyMDAgOiAjOTM5ZGFiLFxuLy8gICAgIDMwMCA6ICM2ODc2ODksXG4vLyAgICAgNDAwIDogIzQ3NTg2Zixcbi8vICAgICA1MDAgOiAjMjczYjU2LFxuLy8gICAgIDYwMCA6ICMyMzM1NGYsXG4vLyAgICAgNzAwIDogIzFkMmQ0NSxcbi8vICAgICA4MDAgOiAjMTcyNjNjLFxuLy8gICAgIDkwMCA6ICMwZTE5MmIsXG4vLyAgICAgQTEwMCA6ICM2OTliZmYsXG4vLyAgICAgQTIwMCA6ICMzNjc5ZmYsXG4vLyAgICAgQTQwMCA6ICMwMzU3ZmYsXG4vLyAgICAgQTcwMCA6ICMwMDRlZTksXG4vLyAgICAgY29udHJhc3Q6IChcbi8vICAgICAgICAgNTAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAxMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAzMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA0MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA1MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA2MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA3MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA4MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA5MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTIwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE0MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNzAwIDogI2ZmZmZmZixcbi8vICAgICApXG4vLyApO1xuXG4kbWF0LXNnbS1wcmltYXJ5OiAoXG4gICAgNTAgOiAjZThlOWZiLFxuICAgIDEwMCA6ICNjNWM5ZjUsXG4gICAgMjAwIDogIzlmYTVlZixcbiAgICAzMDAgOiAjNzk4MGU4LFxuICAgIDQwMCA6ICM1YzY1ZTMsXG4gICAgNTAwIDogIzNmNGFkZSxcbiAgICAvLzUwMCA6ICMwMDAwMDAsXG4gICAgNjAwIDogIzM5NDNkYSxcbiAgICA3MDAgOiAjMzEzYWQ1LFxuICAgIDgwMCA6ICMyOTMyZDEsXG4gICAgOTAwIDogIzFiMjJjOCxcbiAgICBBMTAwIDogI2ZkZmRmZixcbiAgICBBMjAwIDogI2NhY2NmZixcbiAgICBBNDAwIDogIzk3OWJmZixcbiAgICBBNzAwIDogIzdlODJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtYXQtc2dtLWFjY2VudDogKFxuICAgIDUwIDogI2U3ZWNlYSxcbiAgICAxMDAgOiAjYzJjZWNiLFxuICAgIDIwMCA6ICM5OWFlYTksXG4gICAgMzAwIDogIzcwOGU4NyxcbiAgICA0MDAgOiAjNTI3NTZkLFxuICAgIDUwMCA6ICMzMzVkNTMsXG4gICAgNjAwIDogIzJlNTU0YyxcbiAgICA3MDAgOiAjMjc0YjQyLFxuICAgIDgwMCA6ICMyMDQxMzksXG4gICAgOTAwIDogIzE0MzAyOSxcbiAgICBBMTAwIDogIzcxZmZkYSxcbiAgICBBMjAwIDogIzNlZmZjZCxcbiAgICBBNDAwIDogIzBiZmZiZixcbiAgICBBNzAwIDogIzAwZjFiMixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbi8vICRtYXQtc2dtLXdhcm46IChcbi8vICAgICA1MCA6ICNmNWY3ZjgsXG4vLyAgICAgMTAwIDogI2U2ZWFlZCxcbi8vICAgICAyMDAgOiAjZDZkZGUyLFxuLy8gICAgIDMwMCA6ICNjNmNmZDYsXG4vLyAgICAgNDAwIDogI2I5YzRjZCxcbi8vICAgICA1MDAgOiAjYWRiYWM0LFxuLy8gICAgIDYwMCA6ICNhNmIzYmUsXG4vLyAgICAgNzAwIDogIzljYWJiNixcbi8vICAgICA4MDAgOiAjOTNhM2FmLFxuLy8gICAgIDkwMCA6ICM4Mzk0YTIsXG4vLyAgICAgQTEwMCA6ICNmZmZmZmYsXG4vLyAgICAgQTIwMCA6ICNmZGZlZmYsXG4vLyAgICAgQTQwMCA6ICNjOWU3ZmYsXG4vLyAgICAgQTcwMCA6ICNiMGRiZmYsXG4vLyAgICAgY29udHJhc3Q6IChcbi8vICAgICAgICAgNTAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAxMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAzMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA0MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA1MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA2MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA3MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA4MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA5MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNzAwIDogIzAwMDAwMCxcbi8vICAgICApXG4vLyApO1xuXG4kbWF0LXNnbS13YXJuOiAoXG4gICAgNTAgOiAjZmVlOGU3LFxuICAgIDEwMCA6ICNmYmM2YzMsXG4gICAgMjAwIDogI2Y5YTE5YixcbiAgICAzMDAgOiAjZjc3YjcyLFxuICAgIDQwMCA6ICNmNTVlNTQsXG4gICAgNTAwIDogI2YzNDIzNixcbiAgICA2MDAgOiAjZjEzYzMwLFxuICAgIDcwMCA6ICNlZjMzMjksXG4gICAgODAwIDogI2VkMmIyMixcbiAgICA5MDAgOiAjZWExZDE2LFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZlOGU3LFxuICAgIEE0MDAgOiAjZmZiNmI0LFxuICAgIEE3MDAgOiAjZmY5ZDliLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuJG1kLWNhbGVuZGFyOiAoXG4gICAgNTAgOiAjZWZmMWYzLFxuICAgIDEwMCA6ICNkOGRjZTEsXG4gICAgMjAwIDogI2JlYzRjZCxcbiAgICAzMDAgOiAjYTRhY2I4LFxuICAgIDQwMCA6ICM5MTliYTksXG4gICAgNTAwIDogIzdkODk5YSxcbiAgICA2MDAgOiAjNzU4MTkyLFxuICAgIDcwMCA6ICM2YTc2ODgsXG4gICAgODAwIDogIzYwNmM3ZSxcbiAgICA5MDAgOiAjNGQ1OTZjLFxuICAgIEExMDAgOiAjY2ZlMWZmLFxuICAgIEEyMDAgOiAjOWNjMWZmLFxuICAgIEE0MDAgOiAjNjlhMWZmLFxuICAgIEE3MDAgOiAjNTA5MmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DashboardLiveCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLiveCreateUpdateComponent", function() { return DashboardLiveCreateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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




var DashboardLiveCreateUpdateComponent = /** @class */ (function () {
    function DashboardLiveCreateUpdateComponent(defaults, dialogRef, 
    // private apiDashboardLive: DashboardLiveControllerService,
    fb) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.mode = 'create';
        // load the dashboard-live
        //     this.apiDashboardLive. getAllUsingGET1().
        //     subscribe(noti => {
        //                       this.dashboard-live =  <DashboardLive[]>noti;
        // });
        // instance the form group for mode Update and Create
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    DashboardLiveCreateUpdateComponent.prototype.ngOnInit = function () {
        if (this.defaults) { // <-- do you have data from the main screen?
            this.mode = 'update';
            // Used in the Update Mode to fill the fields
            this.form = this.fb.group({
                id: [this.defaults.id || null],
                name: [this.defaults.name],
            });
        }
        else { // <-- don't have data :( = Mode Create
            this.defaults = {}; // takes blank :)
        }
    };
    DashboardLiveCreateUpdateComponent.prototype.save = function () {
        if (this.mode === 'create') {
            this.createDashboardLive();
        }
        else if (this.mode === 'update') {
            this.updateDashboardLive();
        }
    };
    DashboardLiveCreateUpdateComponent.prototype.createDashboardLive = function () {
        // send the color as object instead of value
        var dashboardLive = this.form.value;
        this.dialogRef.close(dashboardLive);
    };
    DashboardLiveCreateUpdateComponent.prototype.updateDashboardLive = function () {
        // send the color as object instead of value
        var dashboardLive = this.form.value;
        dashboardLive.id = this.defaults.id;
        this.dialogRef.close(dashboardLive);
    };
    DashboardLiveCreateUpdateComponent.prototype.isCreateMode = function () {
        return this.mode === 'create';
    };
    DashboardLiveCreateUpdateComponent.prototype.isUpdateMode = function () {
        return this.mode === 'update';
    };
    DashboardLiveCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-dashboard-live-create-update',
            template: __webpack_require__(/*! ./dashboard-live-create-update.component.html */ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-live-create-update.component.scss */ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DashboardLiveCreateUpdateComponent);
    return DashboardLiveCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DashboardLiveCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLiveCreateUpdateModule", function() { return DashboardLiveCreateUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dashboard_live_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-live-create-update.component */ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_core_common_dialog_panel_dialog_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/common/dialog-panel/dialog-panel.module */ "./src/app/core/common/dialog-panel/dialog-panel.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardLiveCreateUpdateModule = /** @class */ (function () {
    function DashboardLiveCreateUpdateModule() {
    }
    DashboardLiveCreateUpdateModule = __decorate([
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
            declarations: [_dashboard_live_create_update_component__WEBPACK_IMPORTED_MODULE_5__["DashboardLiveCreateUpdateComponent"]],
            entryComponents: [_dashboard_live_create_update_component__WEBPACK_IMPORTED_MODULE_5__["DashboardLiveCreateUpdateComponent"]],
            exports: [_dashboard_live_create_update_component__WEBPACK_IMPORTED_MODULE_5__["DashboardLiveCreateUpdateComponent"]]
        })
    ], DashboardLiveCreateUpdateModule);
    return DashboardLiveCreateUpdateModule;
}());



/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-lives-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-lives-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardLivesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLivesRoutingModule", function() { return DashboardLivesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_lives_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-lives.component */ "./src/app/containers/dashboard-lives/dashboard-lives.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _dashboard_lives_component__WEBPACK_IMPORTED_MODULE_2__["DashboardLivesComponent"]
    }
];
var DashboardLivesRoutingModule = /** @class */ (function () {
    function DashboardLivesRoutingModule() {
    }
    DashboardLivesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardLivesRoutingModule);
    return DashboardLivesRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-lives.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-lives.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"background-dashboard-live\">\n    <div id=\"conteiner\">\n      <div id=\"card\">\n        <div id=\"table-component\">\n          <!-- TABLE FILTER -->\n          <div id=\"tfilter\">\n            <!-- <div id=\"title\" fxLayoutAlign=\"left\" fxLayout=\"row\">\n              <span>Live View</span>\n            </div> -->\n            <div id=\"title\">\n                <span>Live View</span>\n              </div>\n            <!-- <div id=\"input-filter\">\n              <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\" fxLayout=\"row\"></fury-list>\n            </div>\n            -->\n            <!-- <div style=\"margin-left: 50px\"> \n              <mat-form-field>\n                <input matInput placeholder=\"Buscar...\" value=\"\">\n              </mat-form-field>\n            </div>\n            <div style=\"margin-left: 20px\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Data\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n            </div> -->\n            <div id=\"input-filter\" style=\"margin-left: 20px\">\n              <mat-form-field>\n                  <mat-select placeholder=\"Rastreadores\" [(ngModel)]=\"selectedValue\" id=\"idRastreador\" [disabled]=\"textoRastrear != 'Rastrear'\"> \n                    <mat-option *ngFor=\"let rastreador of rastreadores\" [value]=\"rastreador\">\n                      {{rastreador}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <!-- <mat-form-field>\n                  <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                      {{food.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field> -->\n            </div>\n            <div id=\"input-lived\" style=\"margin-left: 20px\">\n              <mat-checkbox [disabled]=\"textoRastrear != 'Rastrear'\" [(ngModel)]=\"lived\">Tempo real</mat-checkbox>\n            </div>\n            <div style=\"margin-left: 20px\">\n              <button  mat-raised-button id=\"rastrear\" [disabled]=\"textoRastrear != 'Rastrear'\" (click)=\"rastrear()\">{{textoRastrear}}</button>\n            </div>\n            <div style=\"margin-left: 20px\" *ngIf=\"textoRastrear != 'Rastrear'\">\n               <button  mat-raised-button id=\"cancelar\" (click)=\"desativarRastrear()\">Cancelar Rastreamento</button>\n            </div>\n\n            <!-- <div id=\"add\">\n              <button mat-mini-fab color=\"primary\"  matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\">\n                <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n              </button>\n            </div> -->\n          </div>\n\n          <!-- TABLE HEADER -->\n          <!-- The header is separate so you do not lose the filters or the sorting and keep the layout-->\n          <div id=\"tmaster\">\n            <!-- <div id=\"thead\" matSort>\n              <div class=\"table-header\">\n                <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\" \n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                  {{column.name | uppercase}}\n                </div>\n              </div>\n            </div> -->\n            <!-- border:1px solid black; -->\n            <div id=\"teste\" style=\"width: 100%; height: 800px; background: white;\" >\n              <!-- <div #map id=\"map\" style=\"width: 100%; height: 800px\"></div> -->\n              <div #map id=\"map\" style=\"width: 98%; \n                                        height: 98%;\n                                        padding-left: 1%;\n                                        padding-right: 1%;\n                                        padding-bottom: 1%;\n                                        padding-top: 1%;\n                                        border:1px solid beige\">\n              </div>\n            </div>\n            <div id=\"tbody\">\n            </div>\n            <!-- TABLE BODY -->\n            <!-- <agm-map id=\"map\" [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map> -->\n\n            <!-- <div id=\"tbody\"> -->\n\n              <!-- <agm-map class=\"fury-map\" [latitude]=\"lat\" [longitude]=\"lng\" style=\"width: 50%;height: 50%;\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map> -->\n\n              <!-- <agm-map id=\"map\" [latitude]=\"lat\" [longitude]=\"lng\">\n                  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map> -->\n      \n            <!-- </div> -->\n          \n          </div>\n          <!-- TABLE FOOTER -->\n          <!-- <div id=\"tfooter\">\n            <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-lives.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-lives.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-dashboard-live, #background-dashboard-live #conteiner #card #table-component #tfilter, #background-dashboard-live #conteiner #card #table-component #tfilter #input-filter, #background-dashboard-live #conteiner #card #table-component #tfilter #add, #background-dashboard-live #conteiner #card #table-component #tmaster #thead, #background-dashboard-live #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .id, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .name, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name button {\n    margin: 5px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\nmat-form-field {\n  flex: 1 1 auto; }\n\n#rastrear {\n  flex: .5 1 auto;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n  font-size: 100%;\n  background-color: #FFC937;\n  color: white;\n  font-weight: normal; }\n\n#cancelar {\n  flex: .5 1 auto;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n  font-size: 100%;\n  background-color: red;\n  color: white;\n  font-weight: normal; }\n\n#background-dashboard-live {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-dashboard-live #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-dashboard-live #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-dashboard-live #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          color: #000000;\n          z-index: 2; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 20.5%; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #000000;\n              display: inline-flex;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody #map {\n              width: 100%; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(0, 0, 0, 0.08); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #000000 !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 20px;\n                  text-align: left; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail p {\n                    font-weight: 300; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-dashboard-live #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-dashboard-live #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #000000;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 80px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add, #tfilter #input-lived {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-name {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9uZXdfcmNyL3NyYy9hcHAvY29udGFpbmVycy9kYXNoYm9hcmQtbGl2ZXMvZGFzaGJvYXJkLWxpdmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFDdEI7O0FBT087RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWRUO0VBbkJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBeUJuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQWdDbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFkVDtFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFNckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBTWpCOztFQUVJLGFBQVk7RUFDWixZQUFXO0VBQ1gsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YseUNBQXdDO0VBQ3hDLGdCQUFlO0VBQ2YsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLHlDQUF3QztFQUN4QyxnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixhQUFZO0VBQ1osb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLHVCQUFzQjtFQUN0Qix1QkFBc0I7RUFFdEIsZ0JBQWUsRUFzTGxCOztBQTNMRDtJQU9RLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsa0JBQWlCO0lBQ2pCLHlCQUF3QjtJQUN4QixxQkFBb0I7SUFDcEIsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxXQUFVLEVBNEtiOztBQTFMTDtNQWdCWSxlQUFjO01BQ2QsY0FBYTtNQUNiLGdCQUFlLEVBdUtsQjs7QUF6TFQ7UUFxQmdCLGVBQWM7UUFDZCxjQUFhO1FBQ2IsdUJBQXNCLEVBaUt6Qjs7QUF4TGI7VUEwQm9CLGNBQWE7VUFDYixpQkFBZ0I7VUFFaEIsZUE5R007VUErR04sV0FBVSxFQTJDYjs7QUF6RWpCO1lBZ0N3QixtQkFBa0I7WUFDbEIsZ0JBQWU7WUFDZixrQkFBaUI7WUFDakIsY0FBYTtZQUNiLGVBQWM7WUFDZCxlQUFjO1lBQ2QsZ0NBQStCLEVBSWxDOztBQTFDckI7Y0F3QzRCLGVBQWMsRUFDakI7O0FBekN6QjtZQThDd0IsaUJBQWdCLEVBa0JuQjs7QUFoRXJCO2NBZ0Q0QixlQUFjLEVBZWpCOztBQS9EekI7Z0JBa0RnQyxlQUFjLEVBWWpCOztBQTlEN0I7a0JBb0RvQyxjQUFhLEVBQ2hCOztBQXJEakM7a0JBdURvQyxnQ0FBK0I7a0JBQy9CLDZCQUE0QixFQUsvQjs7QUE3RGpDO29CQTBEd0MsK0JBQThCO29CQUM5QixtQ0FBa0MsRUFDckM7O0FBNURyQztZQWtFd0IsY0FBYTtZQUNiLGdCQUFlLEVBS2xCOztBQXhFckI7Y0FzRTRCLDRDQUFtQyxFQUN0Qzs7QUF2RXpCO1VBNkZvQixjQUFhO1VBQ2IsZ0JBQWU7VUFDZix1QkFBc0IsRUE4RXpCOztBQTdLakI7WUFrR3dCLG1CQUFrQjtZQUNsQixpQkFBZ0IsRUFhbkI7O0FBaEhyQjtjQXFHNEIsY0FBYTtjQUNiLG1DQUFrQyxFQUNyQzs7QUF2R3pCO2NBeUc0QixZQUFXO2NBQ1gsZUEzTEY7Y0E0TEUscUJBQW9CO2NBQ3BCLGtCQUFpQjtjQUNqQixZQUFZLEVBRWY7O0FBL0d6QjtZQWtId0IsZ0JBQWU7WUFDZix3QkFBdUI7WUFDdkIsbUJBQWtCO1lBQ2xCLGNBQWE7WUFFYixXQUFVO1lBQ1YsZUFBYztZQUNkLFVBQVMsRUFtRFo7O0FBNUtyQjtjQTJINEIsWUFBVyxFQUNkOztBQTVIekI7Y0E4SDRCLFlBQVc7Y0EyQ1gsVUFBVSxFQUViOztBQTNLekI7Z0JBZ0lnQyxjQUFhLEVBQ2hCOztBQWpJN0I7Z0JBbUlnQywrQkFBOEIsRUFDakM7O0FBcEk3QjtnQkFzSWdDLGdDQUErQixFQUNsQzs7QUF2STdCO2dCQXlJZ0Msc0NBMU5OLEVBMk5HOztBQTFJN0I7Z0JBNElnQywwQkFBbUM7Z0JBQ25DLCtCQUE4QjtnQkFDOUIsK0JBQThCO2dCQUM5QixnQ0FBK0I7Z0JBQy9CLGdCQUFlLEVBQ2xCOztBQWpKN0I7Z0JBc0pnQyx5REFBcUQsRUFjeEQ7O0FBcEs3QjtrQkF5Sm9DLGNBQWE7a0JBQ2IsaUJBQWdCLEVBU25COztBQW5LakM7b0JBNkp3QyxpQkFBZ0IsRUFDbkI7O0FBOUpyQztvQkFpS3dDLGlCQUFnQixFQUNuQjs7QUFsS3JDO2dCQXVLZ0MsbUJBQWtCLEVBQ3JCOztBQXhLN0I7VUFnTG9CLG1CQUFrQjtVQUNsQixpQkFBZ0IsRUFNbkI7O0FBdkxqQjtZQW1Md0IsWUFBVztZQUNYLGVBclFFO1lBc1FGLGdCQUFlLEVBQ2xCOztBQVFyQjtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksMkJBQXlCLEVBQzVCLEVBQUE7O0FBR0w7RUFDSTtJQUNJLDJCQUEwQixFQUM3QjtFQUNEO0lBQ0ksWUFBVyxFQUNkO0VBQ0Q7SUFDSSx5QkFBd0IsRUFDM0IsRUFBQTs7QUFHTDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCO0VBQ0Q7SUFLUSwrQkFBOEIsRUFDakM7RUFFTDtJQUNJLHlCQUF3QixFQUMzQjtFQUNEO0lBQ0ksdUJBQXNCLEVBS3pCO0VBQ0c7SUEzVEosNEJBOFRrRDtJQTdUbEQsNEJBNlRrRDtJQTVUbEQsd0JBNFRrRCxFQUN6QztFQUpMO0lBM1RKLDRCQThUa0Q7SUE3VGxELDRCQTZUa0Q7SUE1VGxELHdCQTRUa0QsRUFDekM7RUFKTDtJQTNUSiw0QkE4VGtEO0lBN1RsRCw0QkE2VGtEO0lBNVRsRCx3QkE0VGtELEVBQ3pDO0VBSkw7SUFRSSxrQkFBaUIsRUFDcEI7RUFFTDtJQUNJLDBCQUF5QixFQUM1QjtFQUNEO0lBQ0kseUJBQXdCO0lBQ3hCLDBCQUF5QixFQUk1QjtJQU5EO01BSVEseUJBQXdCLEVBQzNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2Rhc2hib2FyZC1saXZlcy9kYXNoYm9hcmQtbGl2ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4vLyR0aGVtZS1iYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXA6ICRtYXQtc2dtLXByaW1hcnksICRrZXk6IDUwMCk7XG4kdGhlbWUtYmFja2dyb3VuZDogIzAwMDAwMDtcblxuLy8gTGlzdGEgZGUgY2FtcG9zXG4kZmllbGRzOiAoJ2lkJyxcbiduYW1lJyxcbidhY3Rpb25zJ1xuKTtcblxuLy8gUGFkcm9uaXphIG8gdGFtYW5obyBkb3MgY2FtcG9zXG4kbGVuZ3RoOiAxMDAvbGVuZ3RoKCRmaWVsZHMpKjElO1xuXG5cbkBtaXhpbiBjb2x1bW4td2lkdGgoJHByb3BlcnR5KSB7XG4gICAgbWF4LXdpZHRoOiAkcHJvcGVydHk7XG4gICAgbWluLXdpZHRoOiAkcHJvcGVydHk7XG4gICAgd2lkdGg6ICRwcm9wZXJ0eTsgICAgXG59XG5cbi8vIGNlbnRyYWxpemVzIGFsbCBjb250YWluZXIgaXRlbXNcbiVmbGV4LWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy8gQ29uZmlndXJhw6fDtWVzIG7Do28gcGFkcsO1ZXMgcGFyYSBhcyBjb2x1bmFzXG4ldGFibGUtY29sdW1ucyB7XG5cbiAgICBAZWFjaCAkaGVhZGluZyBpbiAkZmllbGRzIHtcblxuICAgICAgICAuI3skaGVhZGluZ30ge1xuICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKCRsZW5ndGgpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7IC8vIHNvcnRpbmcgYXJyb3cgZGlzY291bnRcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgQGlmICN7JGhlYWRpbmd9PT1hY3Rpb25zIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4jcmFzdHJlYXIge1xuICAgIGZsZXg6IC41IDEgYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDOTM3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4jY2FuY2VsYXIge1xuICAgIGZsZXg6IC41IDEgYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbiNiYWNrZ3JvdW5kLWRhc2hib2FyZC1saXZlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTsgLy9iYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAjY29udGVpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGhlaWdodDogOTElO1xuICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICAjY2FyZCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAjdGFibGUtY29tcG9uZW50IHtcbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICMyNzNCNTY7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICN0ZmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSggYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUlOyAvL2JhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4ICM3MDcwNzAgc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjaW5wdXQtZmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA3Ni41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAuNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdXJ5LWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNhZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOC41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4yNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gI21hcCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGZsZXg6IDEwIDEgYXV0bzsgLy8gYmFja2dyb3VuZDogYnJvd247XG4gICAgICAgICAgICAgICAgLy8gICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgLy8gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDkxJTtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDkxJTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vICAgIC8vIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAvLyAgICAvLyB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIC8vICAgIC8vIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgIC8vICAgIC8vaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIC8vICAgIC8vIHdpZHRoOiAxMjgwcHg7IFxuICAgICAgICAgICAgICAgIC8vICAgIC8vIGhlaWdodDogNzY4cHg7XG4gICAgICAgICAgICAgICAgLy8gICAgLy8gbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgLy8gICAgLy8gbWluLXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgI3RtYXN0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMiAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICN0aGVhZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhFQURFUiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI3Rib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwIDEgYXV0bzsgLy8gYmFja2dyb3VuZDogYnJvd247XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2JveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICNtYXB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJvdzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWJhY2tncm91bmQsIC4wOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtY29sdW1uLWV4cGFuZGVkRGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxOHB4IDEwcHggLTE4cHggcmdiYSgwLDAsMCwwLjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJPRFkgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICN0Zm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY2FwdGlvbiBmb3JtYXR0aW5nXG4uY2lyY2xlLXNtYWxsIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLnBhZ2luYXRvcntcbiAgICAgICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWZpbHRlci1pbnB1dHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAldW5zZXQtd2lkdGh7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgI3RmaWx0ZXIge1xuICAgICAgICAjdGl0bGUsICNpbnB1dC1maWx0ZXIsICNhZGQsICNpbnB1dC1saXZlZHtcbiAgICAgICAgICAgIEBleHRlbmQgJXVuc2V0LXdpZHRoO1xuICAgICAgICB9XG4gICAgICAgICNhZGR7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI3RoZWFkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAjdGJvZHl7XG4gICAgICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7IC8vIGZpeCBsYXlvdXQgaW4gdGhlIGZpcmVmb3hcbiAgICAgICAgLy8gLmFnbS1tYXAtY29udGFpbmVyLWlubmVyIHtcbiAgICAgICAgLy8gICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICBAZWFjaCAkaGVhZGluZyBpbiAkZmllbGRzIHtcbiAgICAgICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgodW5zZXQgIWltcG9ydGFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWxpc3QtdGFibGUgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5mdXJ5LWNvbHVtbi1maWx0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIC5hZ20tbWFwLWNvbnRhaW5lci1pbm5lciB7XG4gICAgLy8gICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-lives.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-lives.component.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardLivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLivesComponent", function() { return DashboardLivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/route.animation */ "./src/app/core/common/route.animation.ts");
/* harmony import */ var _dashboard_live_create_update_dashboard_live_create_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-live-create-update/dashboard-live-create-update.component */ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.component.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.component */ "./src/app/core/common/dialog-delete/dialog-delete.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _transports_transports_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transports/transports.service */ "./src/app/containers/transports/transports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DashboardLivesComponent = /** @class */ (function () {
    function DashboardLivesComponent(dialog, snackBar, apiTransport, httpClient) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.apiTransport = apiTransport;
        this.httpClient = httpClient;
        this.subject$ = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.lived = false;
        this.rastreadores = [];
        this.pageSize = 10;
        this.textoRastrear = 'Rastrear';
        this.lat = -3.096771;
        this.lng = -59.936741;
        // @Input()
        // rastreadores: Rastreador[] = [
        //     {value: 'all', viewValue: 'Todos os rastreadores'},
        //     {value: 'rastreador-1', viewValue: 'Rastreador 1'},
        //     {value: 'rastreador-1', viewValue: 'Rastreador 2'}
        //   ];
        // this component is useful for the filter and show colums in table
        this.columns = [
            { name: '', property: 'id', visible: true, isModelProperty: true },
            { name: '', property: 'name', visible: true, isModelProperty: true },
            { name: '', property: 'actions', visible: true }
        ];
        this.platform = new H.service.Platform({
            "app_id": "f9xS9zNUPJwcnpSM5fkl",
            "app_code": "KFOs5agTKxE3hV8cJIA_7Q"
        });
    }
    Object.defineProperty(DashboardLivesComponent.prototype, "visibleColumns", {
        get: function () {
            return this.columns.filter(function (column) { return column.visible; }).map(function (column) { return column.property; });
        },
        enumerable: true,
        configurable: true
    });
    DashboardLivesComponent.prototype.loadData = function () {
        var _this = this;
        this.apiTransport.getAll()
            .subscribe(function (trans) {
            console.log(trans);
            console.log(trans.data);
            // this.transports = trans;
            // this.dataSource.data = trans.data; //transports;
            _this.transports = [];
            for (var i = 0; i < trans.data.length; i++) {
                console.log(trans.data[i]);
                //   if(trans.data[i].trackerSerial){
                if (trans.data[i].coordinates.length > 0) {
                    _this.transports.push(trans.data[i]);
                    console.log(_this.transports);
                    _this.rastreadores.push(trans.data[i].trackerSerial);
                }
            }
            console.log(_this.rastreadores);
        }, function (error) {
            if (error.status === 0 || error.status === 404) {
                _this.snackBar.open('Esse serviço está indisponível no momento.', 'OK', {});
            }
        });
        //this.dataSource.data = ALL_IN_ONE_TABLE_FAKE_DATA;
    };
    DashboardLivesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        // loads the data from the main table
        this.loadData();
        // apply filters
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (dashboardLives) {
            _this.dashboardLives = dashboardLives;
            _this.dataSource.data = dashboardLives;
        });
        // this.defaults = {}; // takes blank :)
        // console.log(this.transports); 
        setTimeout(function () {
            console.log(_this.transports);
            var icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
            for (var i = 0; i < _this.transports.length; i++) {
                console.log(_this.transports[i].coordinates[0].coords);
                var marker = new H.map.Marker({ lat: _this.transports[i].coordinates[0].coords.lat, lng: _this.transports[i].coordinates[0].coords.long }, { icon: icon });
                _this.map.addObject(marker);
            }
        }, 1500);
    };
    DashboardLivesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        var defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(this.mapElement.nativeElement, defaultLayers.terrain.map, {
            zoom: 14,
            center: { lat: -3.04945, lng: -60.01845 }
        });
        var mapEvents = new H.mapevents.MapEvents(this.map);
        // Add event listener:
        this.map.addEventListener('tap', function (evt) {
            // Log 'tap' and 'mouse' events:
            console.log(evt.type, evt.currentPointer.type);
        });
        // Instantiate the default behavior, providing the mapEvents object: 
        var behavior = new H.mapevents.Behavior(mapEvents);
        this.ui = H.ui.UI.createDefault(this.map, defaultLayers, 'pt-BR');
        var icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
        var mapSettings = this.ui.getControl('mapsettings');
        var zoom = this.ui.getControl('zoom');
        var scalebar = this.ui.getControl('scalebar');
        //let panorama = ui.getControl('panorama');
        //panorama.setAlignment('top-left');
        mapSettings.setAlignment('top-left');
        zoom.setAlignment('top-left');
        scalebar.setAlignment('top-left');
        // Create a marker using the previously instantiated icon:
        // let marker = new H.map.Marker({ lat: -3.04945, lng:  -60.01845 }, { icon: icon });
        // let marker1 = new H.map.Marker({ lat: -3.0587, lng:  -60.03195 }, { icon: icon });
        // let marker2 = new H.map.Marker({ lat: -3.06046, lng:  -60.00178 }, { icon: icon });
        // let marker3 = new H.map.Marker({ lat: -3.03579, lng:  -59.97076 }, { icon: icon });
        // let marker4 = new H.map.Marker({ lat: -3.07024, lng:  -59.97119 }, { icon: icon });
        // let marker5 = new H.map.Marker({ lat: -3.05421, lng:  -60.00145 }, { icon: icon });
        // let marker6 = new H.map.Marker({ lat: -3.05832, lng:  -59.96532 }, { icon: icon });
        //Add the marker to the map:
        // this.map.addObject(marker);
        // this.map.addObject(marker1);
        // this.map.addObject(marker2);
        // this.map.addObject(marker3);
        // this.map.addObject(marker4);
        // this.map.addObject(marker5);
        // this.map.addObject(marker6);      
    };
    DashboardLivesComponent.prototype.create = function () {
        var _this = this;
        this.dialog.open(_dashboard_live_create_update_dashboard_live_create_update_component__WEBPACK_IMPORTED_MODULE_5__["DashboardLiveCreateUpdateComponent"], {
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (dashboardLive) {
            if (dashboardLive) {
                // this.apiDashboardLive.createUsingPOST(dashboardLive).
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
    DashboardLivesComponent.prototype.update = function (dashboardLive) {
        var _this = this;
        this.dialog.open(_dashboard_live_create_update_dashboard_live_create_update_component__WEBPACK_IMPORTED_MODULE_5__["DashboardLiveCreateUpdateComponent"], {
            data: dashboardLive,
            width: '61%', height: '77%',
            panelClass: 'dialog-create-update'
        }).afterClosed().subscribe(function (_dashboardLive) {
            if (_dashboardLive) {
                // this.apiDashboardLive.updateUsingPUT(_dashboardLive).
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
    DashboardLivesComponent.prototype.delete = function (dashboardLive) {
        var _this = this;
        this.dialog.open(_core_common_dialog_delete_dialog_delete_component__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteComponent"], {
            data: { id: dashboardLive.id, displayName: dashboardLive.id },
            panelClass: 'dialog-delete'
        }).afterClosed().subscribe(function (_dashboardLive) {
            if (_dashboardLive && _dashboardLive.id) {
                // this.apiDashboardLive.deleteUsingDELETE(_dashboardLive.id).
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
    DashboardLivesComponent.prototype.ngOnDestroy = function () {
    };
    DashboardLivesComponent.prototype.onFilterChange = function (filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    DashboardLivesComponent.prototype.extractValue = function (_row, _cell, _property) {
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
    DashboardLivesComponent.prototype.toggleRow = function (row) {
        if (this.expandedElement === row) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = row;
        }
    };
    DashboardLivesComponent.prototype.rastrear = function () {
        var _this = this;
        console.log('rastreando...');
        var transport = this.transports.find(function (x) { return x.trackerSerial === _this.selectedValue; });
        if (!transport.coordinates.length) {
            this.snackBar.open('O rastreador ainda não possui coordenadas!', 'OK', {
                duration: 10000
            });
        }
        //   console.log(this.selectedValue);
        //this.map.clearContent();
        this.map.removeObjects(this.map.getObjects());
        var points = [];
        //let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
        var iconFinal = new H.map.Icon('assets/rcr/icon-local.png');
        var icon = new H.map.Icon('assets/rcr/icon-logo.png');
        var marker = new H.map.Marker({ lat: transport.coordinates[0].coords.lat, lng: transport.coordinates[0].coords.long }, { icon: icon });
        var markerFinal = new H.map.Marker({ lat: transport.coordinates[transport.coordinates.length - 1].coords.lat, lng: transport.coordinates[transport.coordinates.length - 1].coords.long }, { icon: iconFinal });
        //this.map.addObject(marker);
        this.map.addObject(markerFinal);
        for (var i = 0; i < transport.coordinates.length; i++) {
            //console.log(transport.coordinates[i].coords);
            points.push({ 'lat': transport.coordinates[i].coords.lat, 'lng': transport.coordinates[i].coords.long });
        }
        console.log(points);
        // Initialize a linestring and add all the points to it:
        var linestring = new H.geo.LineString();
        points.forEach(function (point) {
            linestring.pushPoint(point);
        });
        // Initialize a polyline with the linestring:
        var polyline = new H.map.Polyline(linestring, { style: { lineWidth: 10 } });
        // Add the polyline to the map:
        this.map.addObject(polyline);
        // Zoom the map to make sure the whole polyline is visible:
        this.map.setViewBounds(polyline.getBounds());
        // Create an info bubble object at a specific geographic location:
        var bubble = new H.ui.InfoBubble({ lng: transport.coordinates[transport.coordinates.length - 1].coords.long, lat: transport.coordinates[transport.coordinates.length - 1].coords.lat }, {
            content: 'Localização atual'
        });
        // Add info bubble to the UI:
        // this.ui.addBubble(bubble);
        if (transport.coordinates.length > 0) {
            console.log(this.rastreamento);
            if (this.lived) {
                console.log(this.lived);
                if (this.rastreamento === undefined) {
                    this.rastreamento = setInterval(function () { _this.rastrear(); }, 1000 * 5);
                }
                this.textoRastrear = 'Rastreando...';
            }
            else {
                this.textoRastrear = 'Rastreado';
            }
            //this.rastreamento = setInterval( this.rastrear() , 1000 * 5 );
        }
    };
    DashboardLivesComponent.prototype.desativarRastrear = function () {
        console.log('desativando rastreamento...');
        console.log(this.rastreamento);
        clearInterval(this.rastreamento);
        this.textoRastrear = 'Rastrear';
        this.lived = false;
        this.map.removeObjects(this.map.getObjects());
        // this.map.Zoom
        var icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
        this.map.setZoom(14);
        this.map.setCenter({ lat: -3.04945, lng: -60.01845 });
        for (var i = 0; i < this.transports.length; i++) {
            console.log(this.transports[i].coordinates[0].coords);
            var marker = new H.map.Marker({ lat: this.transports[i].coordinates[0].coords.lat, lng: this.transports[i].coordinates[0].coords.long }, { icon: icon });
            this.map.addObject(marker);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DashboardLivesComponent.prototype, "rastreadores", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DashboardLivesComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("map"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardLivesComponent.prototype, "mapElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DashboardLivesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DashboardLivesComponent.prototype, "sort", void 0);
    DashboardLivesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fury-dashboard-lives',
            template: __webpack_require__(/*! ./dashboard-lives.component.html */ "./src/app/containers/dashboard-lives/dashboard-lives.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-lives.component.scss */ "./src/app/containers/dashboard-lives/dashboard-lives.component.scss")],
            animations: [_core_common_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_transports_transports_service__WEBPACK_IMPORTED_MODULE_9__["TransportControllerService"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _transports_transports_service__WEBPACK_IMPORTED_MODULE_9__["TransportControllerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], DashboardLivesComponent);
    return DashboardLivesComponent;
}());



/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-lives.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-lives.module.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardLivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLivesModule", function() { return DashboardLivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/breadcrumbs/breadcrumbs.module */ "./src/app/core/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/common/list/list.module */ "./src/app/core/common/list/list.module.ts");
/* harmony import */ var _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/common/material-components.module */ "./src/app/core/common/material-components.module.ts");
/* harmony import */ var _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/common/page/page.module */ "./src/app/core/common/page/page.module.ts");
/* harmony import */ var _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/common/dialog-delete/dialog-delete.module */ "./src/app/core/common/dialog-delete/dialog-delete.module.ts");
/* harmony import */ var _dashboard_lives_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-lives-routing.module */ "./src/app/containers/dashboard-lives/dashboard-lives-routing.module.ts");
/* harmony import */ var _dashboard_lives_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-lives.component */ "./src/app/containers/dashboard-lives/dashboard-lives.component.ts");
/* harmony import */ var _dashboard_live_create_update_dashboard_live_create_update_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-live-create-update/dashboard-live-create-update.module */ "./src/app/containers/dashboard-lives/dashboard-live-create-update/dashboard-live-create-update.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardLivesModule = /** @class */ (function () {
    function DashboardLivesModule() {
    }
    DashboardLivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_common_material_components_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _dashboard_lives_routing_module__WEBPACK_IMPORTED_MODULE_8__["DashboardLivesRoutingModule"],
                _dashboard_live_create_update_dashboard_live_create_update_module__WEBPACK_IMPORTED_MODULE_10__["DashboardLiveCreateUpdateModule"],
                // Core
                _core_common_list_list_module__WEBPACK_IMPORTED_MODULE_4__["ListModule"],
                _core_common_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _core_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"],
                _core_common_dialog_delete_dialog_delete_module__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"]
            ],
            declarations: [_dashboard_lives_component__WEBPACK_IMPORTED_MODULE_9__["DashboardLivesComponent"]],
            exports: [_dashboard_lives_component__WEBPACK_IMPORTED_MODULE_9__["DashboardLivesComponent"]]
        })
    ], DashboardLivesModule);
    return DashboardLivesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-containers-dashboard-lives-dashboard-lives-module.js.map