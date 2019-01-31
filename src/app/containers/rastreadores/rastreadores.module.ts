import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { RastreadoresRoutingModule } from './rastreadores-routing.module';
import { RastreadoresComponent } from './rastreadores.component';
import { RastreadorCreateUpdateModule} from './rastreador-create-update/rastreador-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RastreadoresRoutingModule,
    RastreadorCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [RastreadoresComponent],
  exports: [RastreadoresComponent]
})
export class RastreadoresModule {}

