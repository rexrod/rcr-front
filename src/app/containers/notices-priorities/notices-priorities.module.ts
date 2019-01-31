import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
// import { DialogPanelModule } from 'app/core/common/dialog-panel/dialog-panel.module';

import { NoticesPrioritiesRoutingModule } from './notices-priorities-routing.module';
import { NoticesPrioritiesComponent } from './notices-priorities.component';

import { NoticePriorityCreateUpdateModule } from './notice-priority-create-update/notice-priority-create-update.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { BASE_PATH, NoticeControllerService, NoticePriorityControllerService } from '../../module/notices';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NoticesPrioritiesRoutingModule,
    NoticePriorityCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [NoticesPrioritiesComponent],
  exports: [NoticesPrioritiesComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.notices },
    NoticeControllerService,
    NoticePriorityControllerService
  ]
})
export class NoticesPrioritiesModule { }
