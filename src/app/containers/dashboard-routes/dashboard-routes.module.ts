import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { DashboardRoutesRoutingModule } from './dashboard-routes-routing.module';
import { DashboardRoutesComponent, Service, AppService } from './dashboard-routes.component';
import { DashboardRoutesCreateUpdateModule} from './dashboard-routes-create-update/dashboard-routes-create-update.module';
import { AgmCoreModule } from '@agm/core';
import { DashboardRoutesMapButtonModule } from './dashboard-routes-map-button/dashboard-routes-map-button.module';
import { DashboardRoutesMapButtonComponent } from './dashboard-routes-map-button/dashboard-routes-map-button.component';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardRoutesRoutingModule,
    DashboardRoutesCreateUpdateModule,
    DashboardRoutesMapButtonModule,
    HttpModule,
    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule,
    AgmCoreModule
  ],
  declarations: [
    DashboardRoutesComponent,
    DashboardRoutesMapButtonComponent,
  ],
  providers: [Service, AppService],
  exports: [DashboardRoutesComponent]
})
export class DashboardRoutesModule {}

