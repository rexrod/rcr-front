import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { SlasRoutingModule } from './slas-routing.module';
import { SlasComponent } from './slas.component';
import { SlaCreateUpdateModule} from './sla-create-update/sla-create-update.module';
import { BASE_PATH, SlaControllerService } from 'app/module/slas';
import { environment } from 'environments/environment';
import { DirectiveModule } from 'app/directives/directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SlasRoutingModule,
    SlaCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule,
    DirectiveModule
  ],
  declarations: [SlasComponent],
  exports: [SlasComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.slas },
    SlaControllerService
  ]
})
export class SlasModule {}

