import { NgModule } from '@angular/core';
import { PhonePipe } from './phone/phone.pipe';
import { ReticencePipe } from './reticence/reticence.pipe';
import { SizePipe } from './size/size.pipe';

@NgModule({
    imports:        [],
    declarations:   [
        PhonePipe,
        ReticencePipe,
        SizePipe
        ],
    exports: [
        PhonePipe,
        ReticencePipe,
        SizePipe
    ],
})
export class PipeModule {

  static forRoot() {
     return {
         ngModule: PipeModule,
         providers: [],
     };
  }
}
