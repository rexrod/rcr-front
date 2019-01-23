
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentCreateUpdateModule} from './department-create-update/department-create-update.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { BASE_PATH, DepartmentControllerService, AreaControllerService } from '../../module/companies';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DepartmentsRoutingModule,
    DepartmentCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [DepartmentsComponent],
  exports: [DepartmentsComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.companies },
    DepartmentControllerService,
    AreaControllerService
  ]
})
export class DepartmentsModule {}

