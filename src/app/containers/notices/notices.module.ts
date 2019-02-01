import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { NoticesRoutingModule } from './notices-routing.module';
import { NoticesComponent } from './notices.component';

import { NoticeCreateUpdateModule } from './notice-create-update/notice-create-update.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';
import { BASE_PATH, NoticeControllerService } from '../../module/notices';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NoticesRoutingModule,
    NoticeCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [NoticesComponent],
  exports: [NoticesComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.notices },
    NoticeControllerService
  ]
})
export class NoticesModule { }
