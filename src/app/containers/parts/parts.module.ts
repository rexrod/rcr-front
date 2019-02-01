
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { PartsRoutingModule } from './parts-routing.module';
import { PartsComponent } from './parts.component';
import { PartCreateUpdateModule} from './part-create-update/part-create-update.module';
import { BASE_PATH, PartControllerService } from 'app/module/parts';
import { environment } from 'environments/environment';
import { PipeModule } from 'app/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PartsRoutingModule,
    PartCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule,
    PipeModule
  ],
  declarations: [PartsComponent],
  exports: [PartsComponent],
  providers: [
    {provide: BASE_PATH, useValue: environment.origin.parts },
    PartControllerService
  ]
})
export class PartsModule {}

