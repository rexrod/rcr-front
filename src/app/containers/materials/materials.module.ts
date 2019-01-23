import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';
import { MaterialCreateUpdateModule} from './material-create-update/material-create-update.module';
import { BASE_PATH as MAT, MaterialControllerService } from 'app/module/materials';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MaterialsRoutingModule,
    MaterialCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [MaterialsComponent],
  exports: [MaterialsComponent],
  providers: [
    { provide: MAT, useValue: environment.origin.materials },
    MaterialControllerService
  ]
})
export class MaterialsModule {}

