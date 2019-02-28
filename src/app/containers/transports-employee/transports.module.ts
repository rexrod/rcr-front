import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { DialogRastreadorModule } from '../../core/common/dialog-rastreador/dialog-rastreador.module';


import { TransportsRoutingModule } from './transports-routing.module';
import { TransportsComponent } from './transports.component';
import { TransportCreateUpdateModule} from './transport-create-update/transport-create-update.module';
import { DashboardRoutesModule } from '../dashboard-routes-employee/dashboard-routes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TransportsRoutingModule,
    TransportCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule,
    DialogRastreadorModule,
    DashboardRoutesModule,
  ],
  declarations: [TransportsComponent],
  exports: [TransportsComponent]
})
export class TransportsModule {}

