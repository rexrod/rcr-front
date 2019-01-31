import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';
import { AreaCreateUpdateModule} from './area-create-update/area-create-update.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { environment } from 'environments/environment';
import { BASE_PATH, AreaControllerService } from '../../module/companies';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AreasRoutingModule,
    AreaCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [AreasComponent],
  exports: [AreasComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.companies },
    AreaControllerService
  ]
})
export class AreasModule {}
