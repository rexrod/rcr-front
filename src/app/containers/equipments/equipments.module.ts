
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentsComponent } from './equipments.component';
import { EquipmentCreateUpdateModule } from './equipment-create-update/equipment-create-update.module';
import { BASE_PATH, EquipmentControllerService } from 'app/module/equipments';
import { environment } from 'environments/environment';
import { EquipmentAddPartModule } from './equipmentAddPartComponent/equipment-add-part.module';
import { EquipmentAddActivityModule } from './equipment-add-activity-component/equipment-add-activity.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    EquipmentsRoutingModule,
    EquipmentCreateUpdateModule,
    EquipmentAddPartModule,
    EquipmentAddActivityModule,
    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [EquipmentsComponent],
  exports: [EquipmentsComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.equipments },
    EquipmentControllerService
  ]
})
export class EquipmentsModule { }

