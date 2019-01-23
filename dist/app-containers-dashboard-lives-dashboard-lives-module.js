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

module.exports = ".dialog-content .form-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  .dialog-content .form-content .form-title {\n    font-size: 150%;\n    color: #3f4ade;\n    font-weight: bold;\n    text-align: center;\n    height: 20%;\n    align-items: center;\n    display: flex;\n    justify-content: center; }\n  .dialog-content .form-content .form-fields {\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: 80%; }\n  .dialog-content .form-content .form-fields form {\n      height: 100%;\n      width: 100%; }\n  .dialog-content .form-content .form-fields form .name {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%; }\n  .dialog-content .form-content .form-fields form .name mat-form-field {\n          flex: .3 1 auto; }\n  .dialog-footer {\n  display: flex;\n  padding-right: 24px; }\n  .dialog-footer .footer-content {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    justify-content: flex-end; }\n  .dialog-footer .footer-content .btn-save {\n      flex: .2 1 0%;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n      font-size: 100%;\n      font-weight: lighter; }\n  @media screen and (max-height: 400px) {\n  .btn-save {\n    line-height: 24px !important; } }\n  @media screen and (max-width: 600px), (max-height: 600px) {\n  .area-panel {\n    max-width: unset !important;\n    width: 100% !important;\n    height: 100% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9kYXNoYm9hcmQtbGl2ZXMvZGFzaGJvYXJkLWxpdmUtY3JlYXRlLXVwZGF0ZS9kYXNoYm9hcmQtbGl2ZS1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL1RyYW5zaXJlL0dpdC9yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRVEsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBb0NmO0VBeENMO0lBT1ksZ0JBQWU7SUFDZixlQzJCSztJRDFCTCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLHdCQUF1QixFQUMxQjtFQWZUO0lBa0JZLGVBQWM7SUFDZCxvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYixZQUFXLEVBaUJkO0VBdkNUO01BeUJnQixhQUFZO01BQ1osWUFBVyxFQVlkO0VBdENiO1FBNkJvQixjQUFhO1FBQ2Isd0JBQXVCO1FBQ3ZCLG9CQUFtQjtRQUNuQixhQUFZLEVBS2Y7RUFyQ2pCO1VBbUN3QixnQkFBZSxFQUNsQjtFQVFyQjtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFldEI7RUFqQkQ7SUFLUSxjQUFhO0lBQ2IsZUFBYztJQUNkLG9CQUFtQjtJQUNuQiwwQkFBeUIsRUFRNUI7RUFoQkw7TUFXWSxjQUFhO01BQ2IseUNBQXdDO01BQ3hDLGdCQUFlO01BQ2YscUJBQW9CLEVBQ3ZCO0VBSVQ7RUFDSTtJQUNJLDZCQUE0QixFQUMvQixFQUFBO0VBR0w7RUFFSTtJQUNJLDRCQUEyQjtJQUMzQix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2Rhc2hib2FyZC1saXZlcy9kYXNoYm9hcmQtbGl2ZS1jcmVhdGUtdXBkYXRlL2Rhc2hib2FyZC1saXZlLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kY29sb3ItZm9udDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuXG4uZGlhbG9nLWNvbnRlbnQge1xuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgLmZvcm0tdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1mb250O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1maWVsZHMge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG5cbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAuMyAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmRpYWxvZy1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcblxuICAgIC5mb290ZXItY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIC5idG4tc2F2ZSB7XG4gICAgICAgICAgICBmbGV4OiAuMiAxIDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDAwcHgpIHtcbiAgICAuYnRuLXNhdmUge1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpLFxuKG1heC1oZWlnaHQgOiA2MDBweCkge1xuICAgIC5hcmVhLXBhbmVsIHtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiIsIi8vICRtYXQtc2dtLXByaW1hcnk6IChcbi8vICAgICA1MCA6ICNlNWU3ZWIsXG4vLyAgICAgMTAwIDogI2JlYzRjYyxcbi8vICAgICAyMDAgOiAjOTM5ZGFiLFxuLy8gICAgIDMwMCA6ICM2ODc2ODksXG4vLyAgICAgNDAwIDogIzQ3NTg2Zixcbi8vICAgICA1MDAgOiAjMjczYjU2LFxuLy8gICAgIDYwMCA6ICMyMzM1NGYsXG4vLyAgICAgNzAwIDogIzFkMmQ0NSxcbi8vICAgICA4MDAgOiAjMTcyNjNjLFxuLy8gICAgIDkwMCA6ICMwZTE5MmIsXG4vLyAgICAgQTEwMCA6ICM2OTliZmYsXG4vLyAgICAgQTIwMCA6ICMzNjc5ZmYsXG4vLyAgICAgQTQwMCA6ICMwMzU3ZmYsXG4vLyAgICAgQTcwMCA6ICMwMDRlZTksXG4vLyAgICAgY29udHJhc3Q6IChcbi8vICAgICAgICAgNTAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAxMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAzMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA0MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA1MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA2MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA3MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA4MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA5MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTIwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE0MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNzAwIDogI2ZmZmZmZixcbi8vICAgICApXG4vLyApO1xuXG4kbWF0LXNnbS1wcmltYXJ5OiAoXG4gICAgNTAgOiAjZThlOWZiLFxuICAgIDEwMCA6ICNjNWM5ZjUsXG4gICAgMjAwIDogIzlmYTVlZixcbiAgICAzMDAgOiAjNzk4MGU4LFxuICAgIDQwMCA6ICM1YzY1ZTMsXG4gICAgNTAwIDogIzNmNGFkZSxcbiAgICA2MDAgOiAjMzk0M2RhLFxuICAgIDcwMCA6ICMzMTNhZDUsXG4gICAgODAwIDogIzI5MzJkMSxcbiAgICA5MDAgOiAjMWIyMmM4LFxuICAgIEExMDAgOiAjZmRmZGZmLFxuICAgIEEyMDAgOiAjY2FjY2ZmLFxuICAgIEE0MDAgOiAjOTc5YmZmLFxuICAgIEE3MDAgOiAjN2U4MmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuJG1hdC1zZ20tYWNjZW50OiAoXG4gICAgNTAgOiAjZTdlY2VhLFxuICAgIDEwMCA6ICNjMmNlY2IsXG4gICAgMjAwIDogIzk5YWVhOSxcbiAgICAzMDAgOiAjNzA4ZTg3LFxuICAgIDQwMCA6ICM1Mjc1NmQsXG4gICAgNTAwIDogIzMzNWQ1MyxcbiAgICA2MDAgOiAjMmU1NTRjLFxuICAgIDcwMCA6ICMyNzRiNDIsXG4gICAgODAwIDogIzIwNDEzOSxcbiAgICA5MDAgOiAjMTQzMDI5LFxuICAgIEExMDAgOiAjNzFmZmRhLFxuICAgIEEyMDAgOiAjM2VmZmNkLFxuICAgIEE0MDAgOiAjMGJmZmJmLFxuICAgIEE3MDAgOiAjMDBmMWIyLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuLy8gJG1hdC1zZ20td2FybjogKFxuLy8gICAgIDUwIDogI2Y1ZjdmOCxcbi8vICAgICAxMDAgOiAjZTZlYWVkLFxuLy8gICAgIDIwMCA6ICNkNmRkZTIsXG4vLyAgICAgMzAwIDogI2M2Y2ZkNixcbi8vICAgICA0MDAgOiAjYjljNGNkLFxuLy8gICAgIDUwMCA6ICNhZGJhYzQsXG4vLyAgICAgNjAwIDogI2E2YjNiZSxcbi8vICAgICA3MDAgOiAjOWNhYmI2LFxuLy8gICAgIDgwMCA6ICM5M2EzYWYsXG4vLyAgICAgOTAwIDogIzgzOTRhMixcbi8vICAgICBBMTAwIDogI2ZmZmZmZixcbi8vICAgICBBMjAwIDogI2ZkZmVmZixcbi8vICAgICBBNDAwIDogI2M5ZTdmZixcbi8vICAgICBBNzAwIDogI2IwZGJmZixcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDUwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDYwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDcwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDgwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDkwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXdhcm46IChcbiAgICA1MCA6ICNmZWU4ZTcsXG4gICAgMTAwIDogI2ZiYzZjMyxcbiAgICAyMDAgOiAjZjlhMTliLFxuICAgIDMwMCA6ICNmNzdiNzIsXG4gICAgNDAwIDogI2Y1NWU1NCxcbiAgICA1MDAgOiAjZjM0MjM2LFxuICAgIDYwMCA6ICNmMTNjMzAsXG4gICAgNzAwIDogI2VmMzMyOSxcbiAgICA4MDAgOiAjZWQyYjIyLFxuICAgIDkwMCA6ICNlYTFkMTYsXG4gICAgQTEwMCA6ICNmZmZmZmYsXG4gICAgQTIwMCA6ICNmZmU4ZTcsXG4gICAgQTQwMCA6ICNmZmI2YjQsXG4gICAgQTcwMCA6ICNmZjlkOWIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWQtY2FsZW5kYXI6IChcbiAgICA1MCA6ICNlZmYxZjMsXG4gICAgMTAwIDogI2Q4ZGNlMSxcbiAgICAyMDAgOiAjYmVjNGNkLFxuICAgIDMwMCA6ICNhNGFjYjgsXG4gICAgNDAwIDogIzkxOWJhOSxcbiAgICA1MDAgOiAjN2Q4OTlhLFxuICAgIDYwMCA6ICM3NTgxOTIsXG4gICAgNzAwIDogIzZhNzY4OCxcbiAgICA4MDAgOiAjNjA2YzdlLFxuICAgIDkwMCA6ICM0ZDU5NmMsXG4gICAgQTEwMCA6ICNjZmUxZmYsXG4gICAgQTIwMCA6ICM5Y2MxZmYsXG4gICAgQTQwMCA6ICM2OWExZmYsXG4gICAgQTcwMCA6ICM1MDkyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuIl19 */"

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

module.exports = "\n<div id=\"background-dashboard-live\">\n    <div id=\"conteiner\">\n      <div id=\"card\">\n        <div id=\"table-component\">\n          <!-- TABLE FILTER -->\n          <div id=\"tfilter\">\n            <div id=\"title\">\n              <span>Live View</span>\n            </div>\n            <!-- <div id=\"input-filter\">\n              <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\" fxLayout=\"row\"></fury-list>\n            </div>\n            -->\n            <div style=\"margin-left: 50px\"> \n              <mat-form-field>\n                <input matInput placeholder=\"Buscar...\" value=\"\">\n              </mat-form-field>\n            </div>\n            <div style=\"margin-left: 20px\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Data\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n              </div>\n            <div style=\"margin-left: 20px\">\n              <mat-form-field>\n                  <mat-select placeholder=\"Rastreadores\" [(ngModel)]=\"selectedValue\" id=\"idRastreador\"> \n                    <mat-option *ngFor=\"let rastreador of rastreadores\" [value]=\"rastreador\">\n                      {{rastreador}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <!-- <mat-form-field>\n                  <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                      {{food.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field> -->\n            </div>\n            <div style=\"margin-left: 20px\">\n              <button  mat-raised-button class=\"btn-rastrear\" (click)=\"rastrear()\" >Rastrear</button>\n            </div>\n\n            <!-- <div id=\"add\">\n              <button mat-mini-fab color=\"primary\"  matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\">\n                <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n              </button>\n            </div> -->\n          </div>\n\n          <!-- TABLE HEADER -->\n          <!-- The header is separate so you do not lose the filters or the sorting and keep the layout-->\n          <div id=\"tmaster\">\n            <div id=\"thead\" matSort>\n              <div class=\"table-header\">\n                <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\" \n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                  {{column.name | uppercase}}\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"tbody\">\n              <div #map style=\"width: 100%; height: 600px\"></div>\n            </div>\n            <!-- TABLE BODY -->\n            <!-- <agm-map id=\"map\" [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map> -->\n\n            <!-- <div id=\"tbody\"> -->\n\n              <!-- <agm-map class=\"fury-map\" [latitude]=\"lat\" [longitude]=\"lng\" style=\"width: 50%;height: 50%;\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map> -->\n\n              <!-- <agm-map id=\"map\" [latitude]=\"lat\" [longitude]=\"lng\">\n                  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map> -->\n      \n            <!-- </div> -->\n          \n          </div>\n          <!-- TABLE FOOTER -->\n          <!-- <div id=\"tfooter\">\n            <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-lives.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-lives.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-dashboard-live, #background-dashboard-live #conteiner #card #table-component #tfilter, #background-dashboard-live #conteiner #card #table-component #tfilter #input-filter, #background-dashboard-live #conteiner #card #table-component #tfilter #add, #background-dashboard-live #conteiner #card #table-component #tmaster #thead, #background-dashboard-live #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .id, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .name, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name button {\n    margin: 5px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\n.btn-rastrear {\n  flex: .2 1 0%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n  font-size: 100%;\n  background-color: #FFC937;\n  color: white;\n  font-weight: lighter; }\n\n#background-dashboard-live {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-dashboard-live #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-dashboard-live #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-dashboard-live #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n          color: #3f4ade;\n          z-index: 2; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 76.5%; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #3f4ade;\n              display: inline-flex;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #map {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #map .agm-map-container-inner {\n              height: 600px;\n              width: 100%; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(63, 74, 222, 0.08); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #3f4ade !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 20px;\n                  text-align: left; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail p {\n                    font-weight: 300; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-dashboard-live #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-dashboard-live #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #3f4ade;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 80px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-name {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9kYXNoYm9hcmQtbGl2ZXMvZGFzaGJvYXJkLWxpdmVzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL1RyYW5zaXJlL0dpdC9yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFDdEI7O0FBT087RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWRUO0VBbkJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBeUJuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQWdDbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFkVDtFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFNckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBTWpCOztFQUVJLGFBQVk7RUFDWixZQUFXO0VBQ1gsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHlDQUF3QztFQUN4QyxnQkFBZTtFQUNmLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1oscUJBQW9CLEVBQ3ZCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLHVCQUFzQjtFQUN0Qix1QkFBc0I7RUFFdEIsZ0JBQWUsRUFxTGxCOztBQTFMRDtJQU9RLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsa0JBQWlCO0lBQ2pCLHlCQUF3QjtJQUN4QixxQkFBb0I7SUFDcEIsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxXQUFVLEVBMktiOztBQXpMTDtNQWdCWSxlQUFjO01BQ2QsY0FBYTtNQUNiLGdCQUFlLEVBc0tsQjs7QUF4TFQ7UUFxQmdCLGVBQWM7UUFDZCxjQUFhO1FBQ2IsdUJBQXNCLEVBZ0t6Qjs7QUF2TGI7VUEwQm9CLGNBQWE7VUFDYixpQkFBZ0I7VUFDaEIsNENBQW1DO1VBQ25DLGVDNURIO1VENkRHLFdBQVUsRUEwQ2I7O0FBeEVqQjtZQWdDd0IsbUJBQWtCO1lBQ2xCLGdCQUFlO1lBQ2Ysa0JBQWlCO1lBQ2pCLGNBQWE7WUFDYixlQUFjO1lBQ2QsZUFBYztZQUNkLGdDQUErQixFQUlsQzs7QUExQ3JCO2NBd0M0QixlQUFjLEVBQ2pCOztBQXpDekI7WUE2Q3dCLGlCQUFnQixFQWtCbkI7O0FBL0RyQjtjQStDNEIsZUFBYyxFQWVqQjs7QUE5RHpCO2dCQWlEZ0MsZUFBYyxFQVlqQjs7QUE3RDdCO2tCQW1Eb0MsY0FBYSxFQUNoQjs7QUFwRGpDO2tCQXNEb0MsZ0NBQStCO2tCQUMvQiw2QkFBNEIsRUFLL0I7O0FBNURqQztvQkF5RHdDLCtCQUE4QjtvQkFDOUIsbUNBQWtDLEVBQ3JDOztBQTNEckM7WUFpRXdCLGNBQWE7WUFDYixnQkFBZSxFQUtsQjs7QUF2RXJCO2NBcUU0Qiw0Q0FBbUMsRUFDdEM7O0FBdEV6QjtVQTBFb0IsY0FBYTtVQUNiLGdCQUFlO1VBQ2YsdUJBQXNCLEVBZ0d6Qjs7QUE1S2pCO1lBK0V3QixtQkFBa0I7WUFDbEIsaUJBQWdCLEVBYW5COztBQTdGckI7Y0FrRjRCLGNBQWE7Y0FDYixtQ0FBa0MsRUFDckM7O0FBcEZ6QjtjQXNGNEIsWUFBVztjQUNYLGVDdEhYO2NEdUhXLHFCQUFvQjtjQUNwQixrQkFBaUI7Y0FDakIsWUFBWSxFQUVmOztBQTVGekI7WUErRndCLGdCQUFlO1lBQ2Ysd0JBQXVCO1lBQ3ZCLG1CQUFrQjtZQUNsQixjQUFhO1lBQ2IsNENBQW1DO1lBQ25DLFdBQVU7WUFDVixlQUFjO1lBQ2QsVUFBUyxFQUtaOztBQTNHckI7Y0F3R2lDLGNBQWE7Y0FDYixZQUFXLEVBQ2Y7O0FBMUc3QjtZQTZHd0IsZ0JBQWU7WUFDZix3QkFBdUI7WUFDdkIsbUJBQWtCO1lBQ2xCLGNBQWE7WUFDYiw0Q0FBbUM7WUFDbkMsV0FBVTtZQUNWLGVBQWM7WUFDZCxVQUFTLEVBdURaOztBQTNLckI7Y0E2SDRCLFlBQVc7Y0EyQ1gsVUFBVSxFQUViOztBQTFLekI7Z0JBK0hnQyxjQUFhLEVBQ2hCOztBQWhJN0I7Z0JBa0lnQywrQkFBOEIsRUFDakM7O0FBbkk3QjtnQkFxSWdDLGdDQUErQixFQUNsQzs7QUF0STdCO2dCQXdJZ0MsMENDdktmLEVEd0tZOztBQXpJN0I7Z0JBMklnQywwQkFBbUM7Z0JBQ25DLCtCQUE4QjtnQkFDOUIsK0JBQThCO2dCQUM5QixnQ0FBK0I7Z0JBQy9CLGdCQUFlLEVBQ2xCOztBQWhKN0I7Z0JBcUpnQyx5REFBcUQsRUFjeEQ7O0FBbks3QjtrQkF3Sm9DLGNBQWE7a0JBQ2IsaUJBQWdCLEVBU25COztBQWxLakM7b0JBNEp3QyxpQkFBZ0IsRUFDbkI7O0FBN0pyQztvQkFnS3dDLGlCQUFnQixFQUNuQjs7QUFqS3JDO2dCQXNLZ0MsbUJBQWtCLEVBQ3JCOztBQXZLN0I7VUErS29CLG1CQUFrQjtVQUNsQixpQkFBZ0IsRUFNbkI7O0FBdExqQjtZQWtMd0IsWUFBVztZQUNYLGVDbE5QO1lEbU5PLGdCQUFlLEVBQ2xCOztBQVFyQjtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksMkJBQXlCLEVBQzVCLEVBQUE7O0FBR0w7RUFDSTtJQUNJLDJCQUEwQixFQUM3QjtFQUNEO0lBQ0ksWUFBVyxFQUNkO0VBQ0Q7SUFDSSx5QkFBd0IsRUFDM0IsRUFBQTs7QUFHTDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCO0VBQ0Q7SUFLUSwrQkFBOEIsRUFDakM7RUFFTDtJQUNJLHlCQUF3QixFQUMzQjtFQUNEO0lBQ0ksdUJBQXNCLEVBS3pCO0VBQ0c7SUE3U0osNEJBZ1RrRDtJQS9TbEQsNEJBK1NrRDtJQTlTbEQsd0JBOFNrRCxFQUN6QztFQUpMO0lBN1NKLDRCQWdUa0Q7SUEvU2xELDRCQStTa0Q7SUE5U2xELHdCQThTa0QsRUFDekM7RUFKTDtJQTdTSiw0QkFnVGtEO0lBL1NsRCw0QkErU2tEO0lBOVNsRCx3QkE4U2tELEVBQ3pDO0VBSkw7SUFRSSxrQkFBaUIsRUFDcEI7RUFFTDtJQUNJLDBCQUF5QixFQUM1QjtFQUNEO0lBQ0kseUJBQXdCO0lBQ3hCLDBCQUF5QixFQUk1QjtJQU5EO01BSVEseUJBQXdCLEVBQzNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2Rhc2hib2FyZC1saXZlcy9kYXNoYm9hcmQtbGl2ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJfY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzXCI7XG4kdGhlbWUtYmFja2dyb3VuZDogbWFwLWdldCgkbWFwOiAkbWF0LXNnbS1wcmltYXJ5LCAka2V5OiA1MDApO1xuXG4vLyBMaXN0YSBkZSBjYW1wb3NcbiRmaWVsZHM6ICgnaWQnLFxuJ25hbWUnLFxuJ2FjdGlvbnMnXG4pO1xuXG4vLyBQYWRyb25pemEgbyB0YW1hbmhvIGRvcyBjYW1wb3NcbiRsZW5ndGg6IDEwMC9sZW5ndGgoJGZpZWxkcykqMSU7XG5cblxuQG1peGluIGNvbHVtbi13aWR0aCgkcHJvcGVydHkpIHtcbiAgICBtYXgtd2lkdGg6ICRwcm9wZXJ0eTtcbiAgICBtaW4td2lkdGg6ICRwcm9wZXJ0eTtcbiAgICB3aWR0aDogJHByb3BlcnR5OyAgICBcbn1cblxuLy8gY2VudHJhbGl6ZXMgYWxsIGNvbnRhaW5lciBpdGVtc1xuJWZsZXgtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyBDb25maWd1cmHDp8O1ZXMgbsOjbyBwYWRyw7VlcyBwYXJhIGFzIGNvbHVuYXNcbiV0YWJsZS1jb2x1bW5zIHtcblxuICAgIEBlYWNoICRoZWFkaW5nIGluICRmaWVsZHMge1xuXG4gICAgICAgIC4jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgoJGxlbmd0aCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDsgLy8gc29ydGluZyBhcnJvdyBkaXNjb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1jb2x1bW4tI3skaGVhZGluZ30ge1xuICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKCRsZW5ndGgpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBAaWYgI3skaGVhZGluZ309PWFjdGlvbnMge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuLXJhc3RyZWFyIHtcbiAgICBmbGV4OiAuMiAxIDAlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM5Mzc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4jYmFja2dyb3VuZC1kYXNoYm9hcmQtbGl2ZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8vYmFja2dyb3VuZDogZ3JlZW47XG4gICAgI2NvbnRlaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICBoZWlnaHQ6IDkxJTtcbiAgICAgICAgd2lkdGg6IDkxJTtcbiAgICAgICAgI2NhcmQge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgI3RhYmxlLWNvbXBvbmVudCB7XG4gICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMjczQjU2O1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAjdGZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4xNik7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgI3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNSU7IC8vYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNpbnB1dC1maWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc2LjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVyeS1saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnVyeS1saXN0LXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjYWRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDguNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSggYmxhY2ssIDAuMjYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICN0bWFzdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTIgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAjdGhlYWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBIRUFERVIgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNtYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTAgMSBhdXRvOyAvLyBiYWNrZ3JvdW5kOiBicm93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZ20tbWFwLWNvbnRhaW5lci1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICN0Ym9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMCAxIGF1dG87IC8vIGJhY2tncm91bmQ6IGJyb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSggYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWdtLW1hcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmxleDogMTAgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJvdzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWJhY2tncm91bmQsIC4wOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXQtY29sdW1uLWV4cGFuZGVkRGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxOHB4IDEwcHggLTE4cHggcmdiYSgwLDAsMCwwLjIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LWRldGFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWxlbWVudC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJPRFkgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0YWJsZS1jb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICN0Zm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY2FwdGlvbiBmb3JtYXR0aW5nXG4uY2lyY2xlLXNtYWxsIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLnBhZ2luYXRvcntcbiAgICAgICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgI3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWZpbHRlci1pbnB1dHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAldW5zZXQtd2lkdGh7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgI3RmaWx0ZXIge1xuICAgICAgICAjdGl0bGUsICNpbnB1dC1maWx0ZXIsICNhZGR7XG4gICAgICAgICAgICBAZXh0ZW5kICV1bnNldC13aWR0aDtcbiAgICAgICAgfVxuICAgICAgICAjYWRke1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgICN0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgI3Rib2R5e1xuICAgICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50OyAvLyBmaXggbGF5b3V0IGluIHRoZSBmaXJlZm94XG4gICAgICAgIC8vIC5hZ20tbWFwLWNvbnRhaW5lci1pbm5lciB7XG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgQGVhY2ggJGhlYWRpbmcgaW4gJGZpZWxkcyB7XG4gICAgICAgICAgICAubWF0LWNvbHVtbi0jeyRoZWFkaW5nfSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKHVuc2V0ICFpbXBvcnRhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZnVyeS1saXN0LXRhYmxlIC5mdXJ5LWxpc3QtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAuZnVyeS1jb2x1bW4tZmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyAuYWdtLW1hcC1jb250YWluZXItaW5uZXIge1xuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gfVxufVxuXG4iLCIvLyAkbWF0LXNnbS1wcmltYXJ5OiAoXG4vLyAgICAgNTAgOiAjZTVlN2ViLFxuLy8gICAgIDEwMCA6ICNiZWM0Y2MsXG4vLyAgICAgMjAwIDogIzkzOWRhYixcbi8vICAgICAzMDAgOiAjNjg3Njg5LFxuLy8gICAgIDQwMCA6ICM0NzU4NmYsXG4vLyAgICAgNTAwIDogIzI3M2I1Nixcbi8vICAgICA2MDAgOiAjMjMzNTRmLFxuLy8gICAgIDcwMCA6ICMxZDJkNDUsXG4vLyAgICAgODAwIDogIzE3MjYzYyxcbi8vICAgICA5MDAgOiAjMGUxOTJiLFxuLy8gICAgIEExMDAgOiAjNjk5YmZmLFxuLy8gICAgIEEyMDAgOiAjMzY3OWZmLFxuLy8gICAgIEE0MDAgOiAjMDM1N2ZmLFxuLy8gICAgIEE3MDAgOiAjMDA0ZWU5LFxuLy8gICAgIGNvbnRyYXN0OiAoXG4vLyAgICAgICAgIDUwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgMzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNjAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgNzAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgODAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgOTAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEEyMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNDAwIDogI2ZmZmZmZixcbi8vICAgICAgICAgQTcwMCA6ICNmZmZmZmYsXG4vLyAgICAgKVxuLy8gKTtcblxuJG1hdC1zZ20tcHJpbWFyeTogKFxuICAgIDUwIDogI2U4ZTlmYixcbiAgICAxMDAgOiAjYzVjOWY1LFxuICAgIDIwMCA6ICM5ZmE1ZWYsXG4gICAgMzAwIDogIzc5ODBlOCxcbiAgICA0MDAgOiAjNWM2NWUzLFxuICAgIDUwMCA6ICMzZjRhZGUsXG4gICAgNjAwIDogIzM5NDNkYSxcbiAgICA3MDAgOiAjMzEzYWQ1LFxuICAgIDgwMCA6ICMyOTMyZDEsXG4gICAgOTAwIDogIzFiMjJjOCxcbiAgICBBMTAwIDogI2ZkZmRmZixcbiAgICBBMjAwIDogI2NhY2NmZixcbiAgICBBNDAwIDogIzk3OWJmZixcbiAgICBBNzAwIDogIzdlODJmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbiRtYXQtc2dtLWFjY2VudDogKFxuICAgIDUwIDogI2U3ZWNlYSxcbiAgICAxMDAgOiAjYzJjZWNiLFxuICAgIDIwMCA6ICM5OWFlYTksXG4gICAgMzAwIDogIzcwOGU4NyxcbiAgICA0MDAgOiAjNTI3NTZkLFxuICAgIDUwMCA6ICMzMzVkNTMsXG4gICAgNjAwIDogIzJlNTU0YyxcbiAgICA3MDAgOiAjMjc0YjQyLFxuICAgIDgwMCA6ICMyMDQxMzksXG4gICAgOTAwIDogIzE0MzAyOSxcbiAgICBBMTAwIDogIzcxZmZkYSxcbiAgICBBMjAwIDogIzNlZmZjZCxcbiAgICBBNDAwIDogIzBiZmZiZixcbiAgICBBNzAwIDogIzAwZjFiMixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbik7XG5cbi8vICRtYXQtc2dtLXdhcm46IChcbi8vICAgICA1MCA6ICNmNWY3ZjgsXG4vLyAgICAgMTAwIDogI2U2ZWFlZCxcbi8vICAgICAyMDAgOiAjZDZkZGUyLFxuLy8gICAgIDMwMCA6ICNjNmNmZDYsXG4vLyAgICAgNDAwIDogI2I5YzRjZCxcbi8vICAgICA1MDAgOiAjYWRiYWM0LFxuLy8gICAgIDYwMCA6ICNhNmIzYmUsXG4vLyAgICAgNzAwIDogIzljYWJiNixcbi8vICAgICA4MDAgOiAjOTNhM2FmLFxuLy8gICAgIDkwMCA6ICM4Mzk0YTIsXG4vLyAgICAgQTEwMCA6ICNmZmZmZmYsXG4vLyAgICAgQTIwMCA6ICNmZGZlZmYsXG4vLyAgICAgQTQwMCA6ICNjOWU3ZmYsXG4vLyAgICAgQTcwMCA6ICNiMGRiZmYsXG4vLyAgICAgY29udHJhc3Q6IChcbi8vICAgICAgICAgNTAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAxMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAzMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA0MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA1MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA2MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA3MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA4MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICA5MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBNzAwIDogIzAwMDAwMCxcbi8vICAgICApXG4vLyApO1xuXG4kbWF0LXNnbS13YXJuOiAoXG4gICAgNTAgOiAjZmVlOGU3LFxuICAgIDEwMCA6ICNmYmM2YzMsXG4gICAgMjAwIDogI2Y5YTE5YixcbiAgICAzMDAgOiAjZjc3YjcyLFxuICAgIDQwMCA6ICNmNTVlNTQsXG4gICAgNTAwIDogI2YzNDIzNixcbiAgICA2MDAgOiAjZjEzYzMwLFxuICAgIDcwMCA6ICNlZjMzMjksXG4gICAgODAwIDogI2VkMmIyMixcbiAgICA5MDAgOiAjZWExZDE2LFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZlOGU3LFxuICAgIEE0MDAgOiAjZmZiNmI0LFxuICAgIEE3MDAgOiAjZmY5ZDliLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuJG1kLWNhbGVuZGFyOiAoXG4gICAgNTAgOiAjZWZmMWYzLFxuICAgIDEwMCA6ICNkOGRjZTEsXG4gICAgMjAwIDogI2JlYzRjZCxcbiAgICAzMDAgOiAjYTRhY2I4LFxuICAgIDQwMCA6ICM5MTliYTksXG4gICAgNTAwIDogIzdkODk5YSxcbiAgICA2MDAgOiAjNzU4MTkyLFxuICAgIDcwMCA6ICM2YTc2ODgsXG4gICAgODAwIDogIzYwNmM3ZSxcbiAgICA5MDAgOiAjNGQ1OTZjLFxuICAgIEExMDAgOiAjY2ZlMWZmLFxuICAgIEEyMDAgOiAjOWNjMWZmLFxuICAgIEE0MDAgOiAjNjlhMWZmLFxuICAgIEE3MDAgOiAjNTA5MmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcbiJdfQ== */"

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
        this.rastreadores = [];
        this.pageSize = 10;
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
                if (trans.data[i].trackerSerial) {
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
        // let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
        // console.log(this.transports);
        // for(var i=0; i < this.transports.length; i++){
        //     console.log(this.transports[i].coordinates[0].coords);
        //     let marker = new H.map.Marker({ lat: this.transports[i].coordinates[0].coords.lat, lng: this.transports[i].coordinates[0].coords.long }, { icon: icon });    
        //     this.map.addObject(marker);
        // }
    };
    DashboardLivesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        var defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(this.mapElement.nativeElement, defaultLayers.normal.map, {
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
        var ui = H.ui.UI.createDefault(this.map, defaultLayers);
        var icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
        // Create a marker using the previously instantiated icon:
        var marker = new H.map.Marker({ lat: -3.04945, lng: -60.01845 }, { icon: icon });
        var marker1 = new H.map.Marker({ lat: -3.0587, lng: -60.03195 }, { icon: icon });
        var marker2 = new H.map.Marker({ lat: -3.06046, lng: -60.00178 }, { icon: icon });
        var marker3 = new H.map.Marker({ lat: -3.03579, lng: -59.97076 }, { icon: icon });
        var marker4 = new H.map.Marker({ lat: -3.07024, lng: -59.97119 }, { icon: icon });
        var marker5 = new H.map.Marker({ lat: -3.05421, lng: -60.00145 }, { icon: icon });
        var marker6 = new H.map.Marker({ lat: -3.05832, lng: -59.96532 }, { icon: icon });
        //Add the marker to the map:
        this.map.addObject(marker);
        this.map.addObject(marker1);
        this.map.addObject(marker2);
        this.map.addObject(marker3);
        this.map.addObject(marker4);
        this.map.addObject(marker5);
        this.map.addObject(marker6);
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
        //   console.log(transport);
        //   console.log(this.selectedValue);
        var points = [];
        //let icon = new H.map.Icon('assets/rcr/icon-rastreador-on.png');
        var icon = new H.map.Icon('assets/rcr/icon-local.png');
        var iconFinal = new H.map.Icon('assets/rcr/icon-logo.png');
        var marker = new H.map.Marker({ lat: transport.coordinates[0].coords.lat, lng: transport.coordinates[0].coords.long }, { icon: icon });
        var markerFinal = new H.map.Marker({ lat: transport.coordinates[transport.coordinates.length - 1].coords.lat, lng: transport.coordinates[transport.coordinates.length - 1].coords.long }, { icon: iconFinal });
        this.map.addObject(marker);
        //this.map.addObject(markerFinal);
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