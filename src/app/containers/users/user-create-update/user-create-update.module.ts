
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
  MatDividerModule,
  MatTooltipModule,
  MatProgressBarModule
} from '@angular/material';
import { UserCreateUpdateComponent } from './user-create-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { PipeModule } from 'app/pipes/pipe.module';
import { BASE_PATH, SectorControllerService } from 'app/module/companies';
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
    MatDividerModule,
    DialogPanelModule,
    MatProgressBarModule,
    MatTooltipModule,
    PipeModule
  ],
  declarations: [UserCreateUpdateComponent],
  entryComponents: [UserCreateUpdateComponent],
  exports: [UserCreateUpdateComponent],
  providers: [
    {provide: BASE_PATH, useValue: environment.origin.companies},
    SectorControllerService,
  ]
})
export class UserCreateUpdateModule {}

