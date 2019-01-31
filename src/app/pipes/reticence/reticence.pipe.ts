import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'reticence' })
export class ReticencePipe implements PipeTransform {

    transform(v: string, n: number = 20) {
        if (!v) { return ''; }
        let reticence = '';
        if (v.length > n) { reticence = '...'; }
        return v.slice(0, n) + reticence;
    }

}
