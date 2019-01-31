import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { SegmentsRoutingModule } from './segments-routing.module';
import { SegmentsComponent } from './segments.component';
import { SegmentCreateUpdateModule} from './segment-create-update/segment-create-update.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { BASE_PATH, SegmentControllerService } from '../../module/segments';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SegmentsRoutingModule,
    SegmentCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [SegmentsComponent],
  exports: [SegmentsComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.segments },
    SegmentControllerService
  ]
})
export class SegmentsModule {}

