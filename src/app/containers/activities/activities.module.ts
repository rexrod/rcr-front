import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { ActivityCreateUpdateModule} from './activity-create-update/activity-create-update.module';
import { BASE_PATH, ActivityControllerService } from 'app/module/activities';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ActivitiesRoutingModule,
    ActivityCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [ActivitiesComponent],
  exports: [ActivitiesComponent],
  providers: [
    {provide: BASE_PATH, useValue: environment.origin.activities},
    ActivityControllerService,
  ]
})
export class ActivitiesModule {}

