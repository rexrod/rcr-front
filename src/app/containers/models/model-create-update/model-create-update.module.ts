
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
import { ModelCreateUpdateComponent } from './model-create-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { environment } from 'environments/environment';
import { FabricatorControllerService, BASE_PATH as FAB_URL } from 'app/module/fabricators';
import { ModelControllerService, BASE_PATH as MOD_URL } from 'app/module/models';
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
    DialogPanelModule
  ],
  declarations: [ModelCreateUpdateComponent],
  entryComponents: [ModelCreateUpdateComponent],
  exports: [ModelCreateUpdateComponent],
  providers: [
    { provide: FAB_URL, useValue: environment.origin.fabricators},
    { provide: MOD_URL, useValue: environment.origin.models},
    FabricatorControllerService,
    ModelControllerService
  ]
})
export class ModelCreateUpdateModule {}

