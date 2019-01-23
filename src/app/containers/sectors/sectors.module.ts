
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { SectorsRoutingModule } from './sectors-routing.module';
import { SectorsComponent } from './sectors.component';
import { SectorCreateUpdateModule} from './sector-create-update/sector-create-update.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { BASE_PATH, SectorControllerService, DepartmentControllerService } from '../../module/companies';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SectorsRoutingModule,
    SectorCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [SectorsComponent],
  exports: [SectorsComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.companies },
    SectorControllerService,
    DepartmentControllerService
  ]
})
export class SectorsModule {}

