
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { FabricatorsRoutingModule } from './fabricators-routing.module';
import { FabricatorsComponent } from './fabricators.component';
import { FabricatorCreateUpdateModule} from './fabricator-create-update/fabricator-create-update.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { BASE_PATH, FabricatorControllerService } from '../../module/fabricators';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FabricatorsRoutingModule,
    FabricatorCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [FabricatorsComponent],
  exports: [FabricatorsComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.fabricators },
    FabricatorControllerService
  ]
})
export class FabricatorsModule {}

