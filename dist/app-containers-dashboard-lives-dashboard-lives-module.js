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

module.exports = "\n<div id=\"background-dashboard-live\">\n    <div id=\"conteiner\">\n      <div id=\"card\">\n        <div id=\"table-component\">\n          <!-- TABLE FILTER -->\n          <div id=\"tfilter\">\n            <div id=\"title\">\n              <span>Live View</span>\n            </div>\n            <!-- <div id=\"input-filter\">\n              <fury-list [columns]=\"columns\" (filterChange)=\"onFilterChange($event)\" fxLayoutAlign=\"center center\" fxLayout=\"row\"></fury-list>\n            </div>\n            -->\n            <!-- <div style=\"margin-left: 50px\"> \n              <mat-form-field>\n                <input matInput placeholder=\"Buscar...\" value=\"\">\n              </mat-form-field>\n            </div>\n            <div style=\"margin-left: 20px\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Data\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n            </div> -->\n            <div style=\"margin-left: 20px\">\n              <mat-form-field>\n                  <mat-select placeholder=\"Rastreadores\" [(ngModel)]=\"selectedValue\" id=\"idRastreador\"> \n                    <mat-option *ngFor=\"let rastreador of rastreadores\" [value]=\"rastreador\">\n                      {{rastreador}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <!-- <mat-form-field>\n                  <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                      {{food.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field> -->\n            </div>\n            <div style=\"margin-left: 20px\">\n              <button  mat-raised-button id=\"rastrear\" (click)=\"rastrear()\">Rastrear</button>\n            </div>\n\n            <!-- <div id=\"add\">\n              <button mat-mini-fab color=\"primary\"  matTooltip=\"Adicionar Item\" [matTooltipPosition]=\"'above'\" (click)=\"create()\" id=\"create\">\n                <mat-icon aria-label=\"Adicionar\">add</mat-icon>\n              </button>\n            </div> -->\n          </div>\n\n          <!-- TABLE HEADER -->\n          <!-- The header is separate so you do not lose the filters or the sorting and keep the layout-->\n          <div id=\"tmaster\">\n            <div id=\"thead\" matSort>\n              <div class=\"table-header\">\n                <div *ngFor=\"let column of columns\" class=\"{{column.property}}\" mat-sort-header=\"{{column.property}}\" \n                [style.display]=\"column.visible ? 'flex' : 'none'\" fxLayoutAlign=\"center\">\n                  {{column.name | uppercase}}\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"tbody\">\n              <div #map style=\"width: 100%; height: 600px\"></div>\n            </div>\n            <!-- TABLE BODY -->\n            <!-- <agm-map id=\"map\" [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map> -->\n\n            <!-- <div id=\"tbody\"> -->\n\n              <!-- <agm-map class=\"fury-map\" [latitude]=\"lat\" [longitude]=\"lng\" style=\"width: 50%;height: 50%;\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map> -->\n\n              <!-- <agm-map id=\"map\" [latitude]=\"lat\" [longitude]=\"lng\">\n                  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map> -->\n      \n            <!-- </div> -->\n          \n          </div>\n          <!-- TABLE FOOTER -->\n          <!-- <div id=\"tfooter\">\n            <mat-paginator class=\"paginator\" [pageSize]=\"pageSize\" color=\"primary\"></mat-paginator>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/containers/dashboard-lives/dashboard-lives.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/containers/dashboard-lives/dashboard-lives.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-dashboard-live, #background-dashboard-live #conteiner #card #table-component #tfilter, #background-dashboard-live #conteiner #card #table-component #tfilter #input-filter, #background-dashboard-live #conteiner #card #table-component #tfilter #add, #background-dashboard-live #conteiner #card #table-component #tmaster #thead, #background-dashboard-live #conteiner #card #table-component #tfooter {\n  display: flex;\n  flex: 1 1 auto;\n  align-content: center;\n  justify-content: center;\n  align-items: center; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .id, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-id button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-id button {\n    margin: 5px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .name, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-name button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-name button {\n    margin: 5px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .actions, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions {\n  max-width: 33.33333333%;\n  min-width: 33.33333333%;\n  width: 33.33333333%;\n  margin-left: auto;\n  margin-right: auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header .mat-column-actions button, #background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-actions button {\n    margin: 5px; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0px;\n  align-items: center; }\n\nmat-form-field {\n  flex: 1 1 auto; }\n\n#rastrear {\n  flex: .5 1 0%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n  font-size: 100%;\n  background-color: #FFC937;\n  color: white;\n  font-weight: lighter; }\n\n#background-dashboard-live {\n  height: 100%;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 100%; }\n\n#background-dashboard-live #conteiner {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: stretch;\n    align-items: stretch;\n    align-content: stretch;\n    height: 91%;\n    width: 91%; }\n\n#background-dashboard-live #conteiner #card {\n      flex: 1 1 auto;\n      display: flex;\n      flex-wrap: wrap; }\n\n#background-dashboard-live #conteiner #card #table-component {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter {\n          display: flex;\n          min-height: 64px;\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n          color: #3f4ade;\n          z-index: 2; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #title {\n            text-align: center;\n            font-size: 150%;\n            font-weight: bold;\n            display: flex;\n            flex: 1 1 auto;\n            max-width: 15%;\n            border-right: 1px #707070 solid; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #title span {\n              flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter {\n            max-width: 76.5%; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list {\n              flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table {\n                flex: 1 1 auto; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-name {\n                  display: none; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header {\n                  border-bottom: unset !important;\n                  background: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #input-filter fury-list .fury-list-table .fury-list-header div {\n                    align-items: center !important;\n                    justify-content: center !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #add {\n            display: flex;\n            max-width: 8.5%; }\n\n#background-dashboard-live #conteiner #card #table-component #tfilter #add button {\n              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster {\n          display: flex;\n          flex: 12 1 auto;\n          flex-direction: column; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead {\n            text-align: center;\n            min-height: 35px; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .mat-sort-header-container {\n              display: flex;\n              justify-content: center !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #thead .table-header {\n              width: 100%;\n              color: #3f4ade;\n              display: inline-flex;\n              font-weight: bold;\n              /* HEADER */ }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #map {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #map .agm-map-container-inner {\n              height: 600px;\n              width: 100%; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody {\n            flex: 10 1 auto;\n            align-items: flex-start;\n            text-align: center;\n            display: flex;\n            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n            z-index: 1;\n            overflow: auto;\n            height: 0; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table {\n              width: 100%;\n              /* BODY */ }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-header-row {\n                display: none; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:first-child {\n                padding-left: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-header-cell:last-child {\n                padding-right: unset !important; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-row:hover {\n                background-color: rgba(63, 74, 222, 0.08); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table mat-cell {\n                color: #3f4ade !important;\n                align-items: center !important;\n                padding-left: unset !important;\n                padding-right: unset !important;\n                font-size: 100%; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail {\n                box-shadow: inset 0px 18px 10px -18px rgba(0, 0, 0, 0.2); }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail {\n                  padding: 20px;\n                  text-align: left; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail label {\n                    font-weight: 500; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .mat-column-expandedDetail .element-detail p {\n                    font-weight: 300; }\n\n#background-dashboard-live #conteiner #card #table-component #tmaster #tbody mat-table .element-row {\n                position: relative; }\n\n#background-dashboard-live #conteiner #card #table-component #tfooter {\n          text-align: center;\n          min-height: 60px; }\n\n#background-dashboard-live #conteiner #card #table-component #tfooter .paginator {\n            width: 100%;\n            color: #3f4ade;\n            font-size: 100%; }\n\n.circle-small {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  border-radius: 50%; }\n\n.circle {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 50%; }\n\n@media screen and (max-width: 320px) {\n  .paginator {\n    font-size: 14px !important; } }\n\n@media screen and (max-width: 360px) {\n  #title {\n    font-size: 100% !important; }\n  .fury-filter-input {\n    width: 80px; }\n  .mat-paginator-range-label {\n    margin: unset !important; } }\n\n@media screen and (max-width: 800px) {\n  #tfilter #title, #tfilter #input-filter, #tfilter #add {\n    flex: 1 1 auto !important;\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  #tfilter #add {\n    border-right: unset !important; }\n  #thead {\n    display: none !important; }\n  #tbody {\n    height: 0px !important; }\n  mat-table .mat-column-id {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-name {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table .mat-column-actions {\n    max-width: unset !important;\n    min-width: unset !important;\n    width: unset !important; }\n  mat-table mat-row {\n    flex-flow: column; }\n  .mat-paginator-container {\n    padding: 0 8px !important; }\n  .fury-list-table .fury-list-header {\n    margin: unset !important;\n    padding: unset !important; }\n    .fury-list-table .fury-list-header .fury-column-filter {\n      display: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmN1cy5qdW5pb3IvRG9jdW1lbnRvcy9UcmFuc2lyZS9HaXQvcmNyL3NyYy9hcHAvY29udGFpbmVycy9kYXNoYm9hcmQtbGl2ZXMvZGFzaGJvYXJkLWxpdmVzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbWFyY3VzLmp1bmlvci9Eb2N1bWVudG9zL1RyYW5zaXJlL0dpdC9yY3Ivc3JjL3N0eWxlcy9fY3VzdG9tX2NvbG9yX3NjaGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFDdEI7O0FBT087RUFuQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUF5Qm5CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBMUJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBZ0NuQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBTXJCOztBQUpPO0lBQ0ksWUFBVyxFQUNkOztBQWRUO0VBbkJKLHdCQUoyQjtFQUszQix3QkFMMkI7RUFNM0Isb0JBTjJCO0VBeUJuQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQTFCSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQWdDbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQU1yQjs7QUFKTztJQUNJLFlBQVcsRUFDZDs7QUFkVDtFQW5CSix3QkFKMkI7RUFLM0Isd0JBTDJCO0VBTTNCLG9CQU4yQjtFQXlCbkIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUExQkosd0JBSjJCO0VBSzNCLHdCQUwyQjtFQU0zQixvQkFOMkI7RUFnQ25CLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFNckI7O0FBSk87SUFDSSxZQUFXLEVBQ2Q7O0FBTWpCOztFQUVJLGFBQVk7RUFDWixZQUFXO0VBQ1gsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGNBQWE7RUFDYix5Q0FBd0M7RUFDeEMsZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBRXRCLGdCQUFlLEVBcUxsQjs7QUExTEQ7SUFPUSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGtCQUFpQjtJQUNqQix5QkFBd0I7SUFDeEIscUJBQW9CO0lBQ3BCLHVCQUFzQjtJQUN0QixZQUFXO0lBQ1gsV0FBVSxFQTJLYjs7QUF6TEw7TUFnQlksZUFBYztNQUNkLGNBQWE7TUFDYixnQkFBZSxFQXNLbEI7O0FBeExUO1FBcUJnQixlQUFjO1FBQ2QsY0FBYTtRQUNiLHVCQUFzQixFQWdLekI7O0FBdkxiO1VBMEJvQixjQUFhO1VBQ2IsaUJBQWdCO1VBQ2hCLDRDQUFtQztVQUNuQyxlQ2hFSDtVRGlFRyxXQUFVLEVBMENiOztBQXhFakI7WUFnQ3dCLG1CQUFrQjtZQUNsQixnQkFBZTtZQUNmLGtCQUFpQjtZQUNqQixjQUFhO1lBQ2IsZUFBYztZQUNkLGVBQWM7WUFDZCxnQ0FBK0IsRUFJbEM7O0FBMUNyQjtjQXdDNEIsZUFBYyxFQUNqQjs7QUF6Q3pCO1lBNkN3QixpQkFBZ0IsRUFrQm5COztBQS9EckI7Y0ErQzRCLGVBQWMsRUFlakI7O0FBOUR6QjtnQkFpRGdDLGVBQWMsRUFZakI7O0FBN0Q3QjtrQkFtRG9DLGNBQWEsRUFDaEI7O0FBcERqQztrQkFzRG9DLGdDQUErQjtrQkFDL0IsNkJBQTRCLEVBSy9COztBQTVEakM7b0JBeUR3QywrQkFBOEI7b0JBQzlCLG1DQUFrQyxFQUNyQzs7QUEzRHJDO1lBaUV3QixjQUFhO1lBQ2IsZ0JBQWUsRUFLbEI7O0FBdkVyQjtjQXFFNEIsNENBQW1DLEVBQ3RDOztBQXRFekI7VUEwRW9CLGNBQWE7VUFDYixnQkFBZTtVQUNmLHVCQUFzQixFQWdHekI7O0FBNUtqQjtZQStFd0IsbUJBQWtCO1lBQ2xCLGlCQUFnQixFQWFuQjs7QUE3RnJCO2NBa0Y0QixjQUFhO2NBQ2IsbUNBQWtDLEVBQ3JDOztBQXBGekI7Y0FzRjRCLFlBQVc7Y0FDWCxlQzFIWDtjRDJIVyxxQkFBb0I7Y0FDcEIsa0JBQWlCO2NBQ2pCLFlBQVksRUFFZjs7QUE1RnpCO1lBK0Z3QixnQkFBZTtZQUNmLHdCQUF1QjtZQUN2QixtQkFBa0I7WUFDbEIsY0FBYTtZQUNiLDRDQUFtQztZQUNuQyxXQUFVO1lBQ1YsZUFBYztZQUNkLFVBQVMsRUFLWjs7QUEzR3JCO2NBd0dpQyxjQUFhO2NBQ2IsWUFBVyxFQUNmOztBQTFHN0I7WUE2R3dCLGdCQUFlO1lBQ2Ysd0JBQXVCO1lBQ3ZCLG1CQUFrQjtZQUNsQixjQUFhO1lBQ2IsNENBQW1DO1lBQ25DLFdBQVU7WUFDVixlQUFjO1lBQ2QsVUFBUyxFQXVEWjs7QUEzS3JCO2NBNkg0QixZQUFXO2NBMkNYLFVBQVUsRUFFYjs7QUExS3pCO2dCQStIZ0MsY0FBYSxFQUNoQjs7QUFoSTdCO2dCQWtJZ0MsK0JBQThCLEVBQ2pDOztBQW5JN0I7Z0JBcUlnQyxnQ0FBK0IsRUFDbEM7O0FBdEk3QjtnQkF3SWdDLDBDQzNLZixFRDRLWTs7QUF6STdCO2dCQTJJZ0MsMEJBQW1DO2dCQUNuQywrQkFBOEI7Z0JBQzlCLCtCQUE4QjtnQkFDOUIsZ0NBQStCO2dCQUMvQixnQkFBZSxFQUNsQjs7QUFoSjdCO2dCQXFKZ0MseURBQXFELEVBY3hEOztBQW5LN0I7a0JBd0pvQyxjQUFhO2tCQUNiLGlCQUFnQixFQVNuQjs7QUFsS2pDO29CQTRKd0MsaUJBQWdCLEVBQ25COztBQTdKckM7b0JBZ0t3QyxpQkFBZ0IsRUFDbkI7O0FBaktyQztnQkFzS2dDLG1CQUFrQixFQUNyQjs7QUF2SzdCO1VBK0tvQixtQkFBa0I7VUFDbEIsaUJBQWdCLEVBTW5COztBQXRMakI7WUFrTHdCLFlBQVc7WUFDWCxlQ3ROUDtZRHVOTyxnQkFBZSxFQUNsQjs7QUFRckI7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSTtJQUNJLDJCQUF5QixFQUM1QixFQUFBOztBQUdMO0VBQ0k7SUFDSSwyQkFBMEIsRUFDN0I7RUFDRDtJQUNJLFlBQVcsRUFDZDtFQUNEO0lBQ0kseUJBQXdCLEVBQzNCLEVBQUE7O0FBR0w7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0IsNEJBQTJCO0lBQzNCLHdCQUF1QixFQUMxQjtFQUNEO0lBS1EsK0JBQThCLEVBQ2pDO0VBRUw7SUFDSSx5QkFBd0IsRUFDM0I7RUFDRDtJQUNJLHVCQUFzQixFQUt6QjtFQUNHO0lBalRKLDRCQW9Ua0Q7SUFuVGxELDRCQW1Ua0Q7SUFsVGxELHdCQWtUa0QsRUFDekM7RUFKTDtJQWpUSiw0QkFvVGtEO0lBblRsRCw0QkFtVGtEO0lBbFRsRCx3QkFrVGtELEVBQ3pDO0VBSkw7SUFqVEosNEJBb1RrRDtJQW5UbEQsNEJBbVRrRDtJQWxUbEQsd0JBa1RrRCxFQUN6QztFQUpMO0lBUUksa0JBQWlCLEVBQ3BCO0VBRUw7SUFDSSwwQkFBeUIsRUFDNUI7RUFDRDtJQUNJLHlCQUF3QjtJQUN4QiwwQkFBeUIsRUFJNUI7SUFORDtNQUlRLHlCQUF3QixFQUMzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9kYXNoYm9hcmQtbGl2ZXMvZGFzaGJvYXJkLWxpdmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwiX2N1c3RvbV9jb2xvcl9zY2hlbWUuc2Nzc1wiO1xuJHRoZW1lLWJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcDogJG1hdC1zZ20tcHJpbWFyeSwgJGtleTogNTAwKTtcblxuLy8gTGlzdGEgZGUgY2FtcG9zXG4kZmllbGRzOiAoJ2lkJyxcbiduYW1lJyxcbidhY3Rpb25zJ1xuKTtcblxuLy8gUGFkcm9uaXphIG8gdGFtYW5obyBkb3MgY2FtcG9zXG4kbGVuZ3RoOiAxMDAvbGVuZ3RoKCRmaWVsZHMpKjElO1xuXG5cbkBtaXhpbiBjb2x1bW4td2lkdGgoJHByb3BlcnR5KSB7XG4gICAgbWF4LXdpZHRoOiAkcHJvcGVydHk7XG4gICAgbWluLXdpZHRoOiAkcHJvcGVydHk7XG4gICAgd2lkdGg6ICRwcm9wZXJ0eTsgICAgXG59XG5cbi8vIGNlbnRyYWxpemVzIGFsbCBjb250YWluZXIgaXRlbXNcbiVmbGV4LWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy8gQ29uZmlndXJhw6fDtWVzIG7Do28gcGFkcsO1ZXMgcGFyYSBhcyBjb2x1bmFzXG4ldGFibGUtY29sdW1ucyB7XG5cbiAgICBAZWFjaCAkaGVhZGluZyBpbiAkZmllbGRzIHtcblxuICAgICAgICAuI3skaGVhZGluZ30ge1xuICAgICAgICAgICAgQGluY2x1ZGUgY29sdW1uLXdpZHRoKCRsZW5ndGgpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7IC8vIHNvcnRpbmcgYXJyb3cgZGlzY291bnRcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbHVtbi13aWR0aCgkbGVuZ3RoKTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgQGlmICN7JGhlYWRpbmd9PT1hY3Rpb25zIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4jcmFzdHJlYXIge1xuICAgIGZsZXg6IC41IDEgMCU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzkzNztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbiNiYWNrZ3JvdW5kLWRhc2hib2FyZC1saXZlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTsgLy9iYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAjY29udGVpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGhlaWdodDogOTElO1xuICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICAjY2FyZCB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAjdGFibGUtY29tcG9uZW50IHtcbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICMyNzNCNTY7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICN0ZmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoIGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAjdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1JTsgLy9iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCAjNzA3MDcwIHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2lucHV0LWZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzYuNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdXJ5LWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mdXJ5LWxpc3QtdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNhZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOC41JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWZsZXgtY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4yNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3RtYXN0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMiAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICN0aGVhZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhFQURFUiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI21hcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMCAxIGF1dG87IC8vIGJhY2tncm91bmQ6IGJyb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSggYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFnbS1tYXAtY29udGFpbmVyLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI3Rib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEwIDEgYXV0bzsgLy8gYmFja2dyb3VuZDogYnJvd247XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCBibGFjaywgMC4xNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZ20tbWFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBmbGV4OiAxMCAxIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy93aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtYmFja2dyb3VuZCwgLjA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1jb2x1bW4tZXhwYW5kZWREZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMThweCAxMHB4IC0xOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMThweCAxMHB4IC0xOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE4cHggMTBweCAtMThweCByZ2JhKDAsMCwwLDAuMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVsZW1lbnQtZGV0YWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbGVtZW50LXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQk9EWSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRhYmxlLWNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3Rmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAucGFnaW5hdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjYXB0aW9uIGZvcm1hdHRpbmdcbi5jaXJjbGUtc21hbGwge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAucGFnaW5hdG9ye1xuICAgICAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAjdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZ1cnktZmlsdGVyLWlucHV0e1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG4gICAgLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwge1xuICAgICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICV1bnNldC13aWR0aHtcbiAgICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAjdGZpbHRlciB7XG4gICAgICAgICN0aXRsZSwgI2lucHV0LWZpbHRlciwgI2FkZHtcbiAgICAgICAgICAgIEBleHRlbmQgJXVuc2V0LXdpZHRoO1xuICAgICAgICB9XG4gICAgICAgICNhZGR7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI3RoZWFkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAjdGJvZHl7XG4gICAgICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7IC8vIGZpeCBsYXlvdXQgaW4gdGhlIGZpcmVmb3hcbiAgICAgICAgLy8gLmFnbS1tYXAtY29udGFpbmVyLWlubmVyIHtcbiAgICAgICAgLy8gICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICBAZWFjaCAkaGVhZGluZyBpbiAkZmllbGRzIHtcbiAgICAgICAgICAgIC5tYXQtY29sdW1uLSN7JGhlYWRpbmd9IHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBjb2x1bW4td2lkdGgodW5zZXQgIWltcG9ydGFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mdXJ5LWxpc3QtdGFibGUgLmZ1cnktbGlzdC1oZWFkZXIge1xuICAgICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5mdXJ5LWNvbHVtbi1maWx0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIC5hZ20tbWFwLWNvbnRhaW5lci1pbm5lciB7XG4gICAgLy8gICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyB9XG59XG5cbiIsIi8vICRtYXQtc2dtLXByaW1hcnk6IChcbi8vICAgICA1MCA6ICNlNWU3ZWIsXG4vLyAgICAgMTAwIDogI2JlYzRjYyxcbi8vICAgICAyMDAgOiAjOTM5ZGFiLFxuLy8gICAgIDMwMCA6ICM2ODc2ODksXG4vLyAgICAgNDAwIDogIzQ3NTg2Zixcbi8vICAgICA1MDAgOiAjMjczYjU2LFxuLy8gICAgIDYwMCA6ICMyMzM1NGYsXG4vLyAgICAgNzAwIDogIzFkMmQ0NSxcbi8vICAgICA4MDAgOiAjMTcyNjNjLFxuLy8gICAgIDkwMCA6ICMwZTE5MmIsXG4vLyAgICAgQTEwMCA6ICM2OTliZmYsXG4vLyAgICAgQTIwMCA6ICMzNjc5ZmYsXG4vLyAgICAgQTQwMCA6ICMwMzU3ZmYsXG4vLyAgICAgQTcwMCA6ICMwMDRlZTksXG4vLyAgICAgY29udHJhc3Q6IChcbi8vICAgICAgICAgNTAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAxMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAyMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICAzMDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA0MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA1MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA2MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA3MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA4MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICA5MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBMTAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTIwMCA6ICNmZmZmZmYsXG4vLyAgICAgICAgIEE0MDAgOiAjZmZmZmZmLFxuLy8gICAgICAgICBBNzAwIDogI2ZmZmZmZixcbi8vICAgICApXG4vLyApO1xuXG4kbWF0LXNnbS1wcmltYXJ5OiAoXG4gICAgNTAgOiAjZThlOWZiLFxuICAgIDEwMCA6ICNjNWM5ZjUsXG4gICAgMjAwIDogIzlmYTVlZixcbiAgICAzMDAgOiAjNzk4MGU4LFxuICAgIDQwMCA6ICM1YzY1ZTMsXG4gICAgNTAwIDogIzNmNGFkZSxcbiAgICA2MDAgOiAjMzk0M2RhLFxuICAgIDcwMCA6ICMzMTNhZDUsXG4gICAgODAwIDogIzI5MzJkMSxcbiAgICA5MDAgOiAjMWIyMmM4LFxuICAgIEExMDAgOiAjZmRmZGZmLFxuICAgIEEyMDAgOiAjY2FjY2ZmLFxuICAgIEE0MDAgOiAjOTc5YmZmLFxuICAgIEE3MDAgOiAjN2U4MmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuJG1hdC1zZ20tYWNjZW50OiAoXG4gICAgNTAgOiAjZTdlY2VhLFxuICAgIDEwMCA6ICNjMmNlY2IsXG4gICAgMjAwIDogIzk5YWVhOSxcbiAgICAzMDAgOiAjNzA4ZTg3LFxuICAgIDQwMCA6ICM1Mjc1NmQsXG4gICAgNTAwIDogIzMzNWQ1MyxcbiAgICA2MDAgOiAjMmU1NTRjLFxuICAgIDcwMCA6ICMyNzRiNDIsXG4gICAgODAwIDogIzIwNDEzOSxcbiAgICA5MDAgOiAjMTQzMDI5LFxuICAgIEExMDAgOiAjNzFmZmRhLFxuICAgIEEyMDAgOiAjM2VmZmNkLFxuICAgIEE0MDAgOiAjMGJmZmJmLFxuICAgIEE3MDAgOiAjMDBmMWIyLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogI2ZmZmZmZixcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcbiAgICAgICAgNjAwIDogI2ZmZmZmZixcbiAgICAgICAgNzAwIDogI2ZmZmZmZixcbiAgICAgICAgODAwIDogI2ZmZmZmZixcbiAgICAgICAgOTAwIDogI2ZmZmZmZixcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKTtcblxuLy8gJG1hdC1zZ20td2FybjogKFxuLy8gICAgIDUwIDogI2Y1ZjdmOCxcbi8vICAgICAxMDAgOiAjZTZlYWVkLFxuLy8gICAgIDIwMCA6ICNkNmRkZTIsXG4vLyAgICAgMzAwIDogI2M2Y2ZkNixcbi8vICAgICA0MDAgOiAjYjljNGNkLFxuLy8gICAgIDUwMCA6ICNhZGJhYzQsXG4vLyAgICAgNjAwIDogI2E2YjNiZSxcbi8vICAgICA3MDAgOiAjOWNhYmI2LFxuLy8gICAgIDgwMCA6ICM5M2EzYWYsXG4vLyAgICAgOTAwIDogIzgzOTRhMixcbi8vICAgICBBMTAwIDogI2ZmZmZmZixcbi8vICAgICBBMjAwIDogI2ZkZmVmZixcbi8vICAgICBBNDAwIDogI2M5ZTdmZixcbi8vICAgICBBNzAwIDogI2IwZGJmZixcbi8vICAgICBjb250cmFzdDogKFxuLy8gICAgICAgICA1MCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDEwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDIwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDMwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDUwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDYwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDcwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDgwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIDkwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEExMDAgOiAjMDAwMDAwLFxuLy8gICAgICAgICBBMjAwIDogIzAwMDAwMCxcbi8vICAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4vLyAgICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuLy8gICAgIClcbi8vICk7XG5cbiRtYXQtc2dtLXdhcm46IChcbiAgICA1MCA6ICNmZWU4ZTcsXG4gICAgMTAwIDogI2ZiYzZjMyxcbiAgICAyMDAgOiAjZjlhMTliLFxuICAgIDMwMCA6ICNmNzdiNzIsXG4gICAgNDAwIDogI2Y1NWU1NCxcbiAgICA1MDAgOiAjZjM0MjM2LFxuICAgIDYwMCA6ICNmMTNjMzAsXG4gICAgNzAwIDogI2VmMzMyOSxcbiAgICA4MDAgOiAjZWQyYjIyLFxuICAgIDkwMCA6ICNlYTFkMTYsXG4gICAgQTEwMCA6ICNmZmZmZmYsXG4gICAgQTIwMCA6ICNmZmU4ZTcsXG4gICAgQTQwMCA6ICNmZmI2YjQsXG4gICAgQTcwMCA6ICNmZjlkOWIsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjZmZmZmZmLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuXG4kbWQtY2FsZW5kYXI6IChcbiAgICA1MCA6ICNlZmYxZjMsXG4gICAgMTAwIDogI2Q4ZGNlMSxcbiAgICAyMDAgOiAjYmVjNGNkLFxuICAgIDMwMCA6ICNhNGFjYjgsXG4gICAgNDAwIDogIzkxOWJhOSxcbiAgICA1MDAgOiAjN2Q4OTlhLFxuICAgIDYwMCA6ICM3NTgxOTIsXG4gICAgNzAwIDogIzZhNzY4OCxcbiAgICA4MDAgOiAjNjA2YzdlLFxuICAgIDkwMCA6ICM0ZDU5NmMsXG4gICAgQTEwMCA6ICNjZmUxZmYsXG4gICAgQTIwMCA6ICM5Y2MxZmYsXG4gICAgQTQwMCA6ICM2OWExZmYsXG4gICAgQTcwMCA6ICM1MDkyZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxuICAgICAgICA3MDAgOiAjZmZmZmZmLFxuICAgICAgICA4MDAgOiAjZmZmZmZmLFxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pO1xuIl19 */"

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