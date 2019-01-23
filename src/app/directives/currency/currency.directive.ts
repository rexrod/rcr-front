import { Directive, ElementRef, Input, OnInit, HostListener, Output } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Directive({
    selector: '[currency]'
})
export class CurrencyDirective implements OnInit {

    @Input() value: string;
    // @Output() value: string;

    @HostListener('keydown', ['$event']) onKeyDown(e) {
        // console.log(e);
        // Allow: backspace, delete, tab, escape, enter
        // No accept point [110, 190]
        // No accept comma [188, 108]
        if (this.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)
            // Allow: ,
            // (e.keyCode === 188 || e.keyCode === 108)
            ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }


    }

    @HostListener('keypress', ['$event']) onKeyUp(e) {
        const num = e.target.value.replace(/\D/,''); 
        const regex = /([0-9]*)([0-9]{1}$)/;
        let result = num.replace(regex, '$1,$2');
        this._element.nativeElement.value = result;
    }

    constructor(private _element: ElementRef) {
    }

    public ngOnInit() {
        // formatação inicial
        const value = this._element.nativeElement.value;
        this._element.nativeElement.value = value.replace('.',',');
    }

    inArray(elem, arr) {
        return arr == null ? -1 : arr.indexOf.call(arr, elem);
    }

}
