import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './profiles.component';
import { ProfileCreateUpdateModule} from './profile-create-update/profile-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ProfilesRoutingModule,
    ProfileCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [ProfilesComponent],
  exports: [ProfilesComponent]
})
export class ProfilesModule {}

