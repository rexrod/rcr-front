
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
import { EquipmentCreateUpdateComponent } from './equipment-create-update.component';
import { NgxMaskModule } from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { environment } from 'environments/environment';
import { BASE_PATH as SEC_PATH, SectorControllerService } from 'app/module/companies';
import { BASE_PATH as FAB_PATH, FabricatorControllerService } from 'app/module/fabricators';
import { BASE_PATH as MOD_PATH, ModelControllerService } from 'app/module/models';
import { BASE_PATH as EQU_PATH, EquipmentControllerService } from 'app/module/equipments';
import { ListModule } from 'app/core/common/list/list.module';
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
    ListModule
  ],
  declarations: [EquipmentCreateUpdateComponent],
  entryComponents: [EquipmentCreateUpdateComponent],
  exports: [EquipmentCreateUpdateComponent],
  providers: [
    { provide: SEC_PATH, useValue: environment.origin.companies },
    { provide: FAB_PATH, useValue: environment.origin.fabricators },
    { provide: MOD_PATH, useValue: environment.origin.models },
    { provide: EQU_PATH, useValue: environment.origin.equipments },
    SectorControllerService,
    FabricatorControllerService,
    ModelControllerService,
    EquipmentControllerService
  ]
})
export class EquipmentCreateUpdateModule { }

