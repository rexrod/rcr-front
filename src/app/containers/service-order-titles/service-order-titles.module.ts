
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { ServiceOrderTitlesRoutingModule } from './service-order-titles-routing.module';
import { ServiceOrderTitlesComponent } from './service-order-titles.component';
import { ServiceOrderTitleCreateUpdateModule} from './service-order-title-create-update/service-order-title-create-update.module';
import { DirectiveModule } from 'app/directives/directive.module';
import { BASE_PATH, ServiceOrderTitleControllerService } from 'app/module/service-order-titles';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ServiceOrderTitlesRoutingModule,
    ServiceOrderTitleCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule,
    DirectiveModule
  ],
  declarations: [ServiceOrderTitlesComponent],
  exports: [ServiceOrderTitlesComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.serviceOrderTitles },
    ServiceOrderTitleControllerService
  ]
})
export class ServiceOrderTitlesModule {}

