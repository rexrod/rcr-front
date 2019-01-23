import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[integer]'
})
export class IntegerDirective implements OnInit {

    @Input() value: string;

    @HostListener('keydown', ['$event']) onKey(e) {
        // Allow: backspace, delete, tab, escape, enter
        // No accept point [110, 190]
        if (this.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }

    constructor(private _element: ElementRef) {

    }

    public ngOnInit() {
    }

    inArray(elem, arr) {
        return arr == null ? -1 : arr.indexOf.call(arr, elem);
    }

}
