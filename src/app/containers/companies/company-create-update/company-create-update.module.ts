import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatCardModule,
  MatStepperModule
} from '@angular/material';
import {NgxMaskModule} from 'ngx-mask';
import { CompanyCreateUpdateComponent } from './company-create-update.component';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';

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
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatSidenavModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatCardModule,
    MatStepperModule,
    DialogPanelModule
  ],
  declarations: [CompanyCreateUpdateComponent],
  entryComponents: [CompanyCreateUpdateComponent],
  exports: [CompanyCreateUpdateComponent]
})
export class CompanyCreateUpdateModule {}
