import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatDividerModule
} from '@angular/material';
import { DialogRastreadorComponent } from './dialog-rastreador.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatSidenavModule,
    MatDividerModule,
  ],
  declarations: [DialogRastreadorComponent],
  entryComponents: [DialogRastreadorComponent],
  exports: [DialogRastreadorComponent]
})
export class DialogRastreadorModule {}
