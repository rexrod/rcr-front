
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
  MatCardModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatTableModule,
} from '@angular/material';
import { EquipmentAddPartComponent } from './equipment-add-part.component';
import { NgxMaskModule } from 'ngx-mask';
import { from } from '../../../../../node_modules/rxjs';
import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';
import { environment } from 'environments/environment';
import { BASE_PATH as PAR_PATH, PartControllerService } from 'app/module/parts';
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
    MatCardModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatTableModule,
    ListModule
  ],
  declarations: [EquipmentAddPartComponent],
  entryComponents: [EquipmentAddPartComponent],
  exports: [EquipmentAddPartComponent],
  providers: [
    // {provide: SEC_PATH, useValue: environment.origin.companies},
    // {provide: FAB_PATH, useValue: environment.origin.fabricators},
    // {provide: MOD_PATH, useValue: environment.origin.models},
    { provide: EQU_PATH, useValue: environment.origin.equipments },
    { provide: PAR_PATH, useValue: environment.origin.parts },
    // SectorControllerService,
    // FabricatorControllerService,
    PartControllerService,
    EquipmentControllerService
  ]
})
export class EquipmentAddPartModule { }

