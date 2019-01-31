import { NgModule } from '@angular/core';
import { IntegerDirective } from './integer/integer.directive';
import { CurrencyDirective } from './currency/currency.directive';

@NgModule({
    imports:        [],
    declarations:   [IntegerDirective,
    CurrencyDirective],
    exports:        [IntegerDirective,
        CurrencyDirective],
})
export class DirectiveModule {

  static forRoot() {
     return {
         ngModule: DirectiveModule,
         providers: [],
     };
  }
}
