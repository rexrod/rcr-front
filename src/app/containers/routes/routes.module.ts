import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './routes.component';
import { RouteCreateUpdateModule} from './route-create-update/route-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RoutesRoutingModule,
    RouteCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [RoutesComponent],
  exports: [RoutesComponent]
})
export class RoutesModule {}

