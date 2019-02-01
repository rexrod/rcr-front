
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
  MatStepperModule
} from '@angular/material';
import { MaterialCreateUpdateComponent } from './material-create-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { DialogNoPanelModule } from 'app/core/common/dialog-no-panel/dialog-no-panel.module';
import { environment } from 'environments/environment';
import { MaterialControllerService, BASE_PATH as MAT } from 'app/module/materials';
import { BASE_PATH as SEG, SegmentControllerService } from 'app/module/segments';
import { BASE_PATH as FAB, FabricatorControllerService} from 'app/module/fabricators';
import { BASE_PATH as MOD, ModelControllerService } from 'app/module/models';
import { BASE_PATH as SEC, SectorControllerService} from 'app/module/companies';
import { DirectiveModule } from 'app/directives/directive.module';
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
    MatStepperModule,
    DialogPanelModule,
    DialogNoPanelModule,
    DirectiveModule,
  ],
  declarations: [MaterialCreateUpdateComponent],
  entryComponents: [MaterialCreateUpdateComponent],
  exports: [MaterialCreateUpdateComponent],
  providers: [
    { provide: MAT, useValue: environment.origin.materials },
    { provide: SEG, useValue: environment.origin.segments },
    { provide: FAB, useValue: environment.origin.fabricators },
    { provide: MOD, useValue: environment.origin.models },
    { provide: SEC, useValue: environment.origin.companies },
    MaterialControllerService,
    SegmentControllerService,
    FabricatorControllerService,
    ModelControllerService,
    SectorControllerService
  ]
})
export class MaterialCreateUpdateModule {}

