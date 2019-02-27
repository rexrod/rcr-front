import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesCreateUpdateModule} from './employee-create-update/employee-create-update.module';
import { DialogStatusModule } from 'app/core/common/dialog-change-status/dialog-status.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    EmployeesRoutingModule,
    EmployeesCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule,
    DialogStatusModule,
  ],
  declarations: [EmployeesComponent],
  exports: [EmployeesComponent]
})
export class EmployeesModule {}

