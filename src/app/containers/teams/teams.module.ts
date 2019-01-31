import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamCreateUpdateModule} from './team-create-update/team-create-update.module';
import { BASE_PATH, TeamControllerService } from 'app/module/activities';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TeamsRoutingModule,
    TeamCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [TeamsComponent],
  exports: [TeamsComponent],
  providers: [
    {provide: BASE_PATH, useValue: environment.origin.activities},
    TeamControllerService,
  ]
})
export class TeamsModule {}

