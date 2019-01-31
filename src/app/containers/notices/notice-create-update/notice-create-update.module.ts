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
import { NoticeCreateUpdateComponent } from './notice-create-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { BASE_PATH, NoticeControllerService, NoticePriorityControllerService } from 'app/module/notices';
import { environment } from 'environments/environment';
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
    MatDividerModule
  ],
  declarations: [NoticeCreateUpdateComponent],
  entryComponents: [NoticeCreateUpdateComponent],
  exports: [NoticeCreateUpdateComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.notices },
    NoticeControllerService,
    NoticePriorityControllerService
  ]
})
export class NoticeCreateUpdateModule { }
