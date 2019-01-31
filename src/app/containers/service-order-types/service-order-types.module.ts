
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { ServiceOrderTypesRoutingModule } from './service-order-types-routing.module';
import { ServiceOrderTypesComponent } from './service-order-types.component';
import { ServiceOrderTypeCreateUpdateModule } from './service-order-type-create-update/service-order-type-create-update.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { BASE_PATH, ServiceOrderTypeControllerService } from '../../module/service-order-types';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ServiceOrderTypesRoutingModule,
    ServiceOrderTypeCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [ServiceOrderTypesComponent],
  exports: [ServiceOrderTypesComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.serviceOrderTypes },
    ServiceOrderTypeControllerService
  ]
})
export class ServiceOrderTypesModule {}

