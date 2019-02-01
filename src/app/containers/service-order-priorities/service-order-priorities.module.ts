import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { ServiceOrderPrioritiesRoutingModule } from './service-order-priorities-routing.module';
import { ServiceOrderPrioritiesComponent } from './service-order-priorities.component';
import { ServiceOrderPriorityCreateUpdateModule} from './service-order-priority-create-update/service-order-priority-create-update.module';
import { BASE_PATH, ServiceOrderPriorityControllerService } from 'app/module/service-orders';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ServiceOrderPrioritiesRoutingModule,
    ServiceOrderPriorityCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [ServiceOrderPrioritiesComponent],
  exports: [ServiceOrderPrioritiesComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.serviceOrders },
    ServiceOrderPriorityControllerService
  ]
})
export class ServiceOrderPrioritiesModule {}

