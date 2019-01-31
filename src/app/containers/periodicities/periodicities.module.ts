import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { PeriodicitiesRoutingModule } from './periodicities-routing.module';
import { PeriodicitiesComponent } from './periodicities.component';
import { PeriodicityCreateUpdateModule } from './periodicity-create-update/periodicity-create-update.module';
import { BASE_PATH } from 'app/module/activities';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PeriodicitiesRoutingModule,
    PeriodicityCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [PeriodicitiesComponent],
  exports: [PeriodicitiesComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.activities },
  ]
})
export class PeriodicitiesModule { }

