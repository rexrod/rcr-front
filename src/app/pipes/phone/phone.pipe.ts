import { Pipe, PipeTransform, NgModule } from '@angular/core';

// @NgModule({
//     imports:        [PhonePipe],
// })
@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {

    transform(v: string) {
        if (!v) { return ''; }
        v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
        v = v.substring(0, 11); // Não permite que ultrapasse o número máximo de caracteres
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
        v = v.replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }

}
