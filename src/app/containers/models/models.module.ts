import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsComponent } from './models.component';
import { ModelCreateUpdateModule} from './model-create-update/model-create-update.module';
import { BASE_PATH, ModelControllerService } from 'app/module/models';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ModelsRoutingModule,
    ModelCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [ModelsComponent],
  exports: [ModelsComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.models },
  ModelControllerService
]
})
export class ModelsModule {}

