
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
  MatSlideToggleModule,
  MatProgressBarModule,
  MatTooltipModule
} from '@angular/material';
import { PartCreateUpdateComponent } from './part-create-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { environment } from 'environments/environment';
import { BASE_PATH as SEG_PATH, SegmentControllerService } from 'app/module/segments';
import { BASE_PATH as FAB_PATH, FabricatorControllerService } from 'app/module/fabricators';
import { BASE_PATH as MOD_PATH, ModelControllerService } from 'app/module/models';
import { BASE_PATH as PAR_PATH, PartControllerService } from 'app/module/parts';
import { DirectiveModule } from 'app/directives/directive.module';
import { UploadService } from 'app/service/upload.service';
import { PipeModule } from 'app/pipes/pipe.module';
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
    MatSlideToggleModule,
    DirectiveModule,
    MatProgressBarModule,
    MatTooltipModule,
    PipeModule
  ],
  declarations: [PartCreateUpdateComponent],
  entryComponents: [PartCreateUpdateComponent],
  exports: [PartCreateUpdateComponent],
  providers: [
    {provide: SEG_PATH, useValue: environment.origin.segments},
    {provide: FAB_PATH, useValue: environment.origin.fabricators},
    {provide: MOD_PATH, useValue: environment.origin.models},
    {provide: PAR_PATH, useValue: environment.origin.parts},
    SegmentControllerService,
    FabricatorControllerService,
    ModelControllerService,
    PartControllerService,
    // UploadService
  ]
})
export class PartCreateUpdateModule {}

