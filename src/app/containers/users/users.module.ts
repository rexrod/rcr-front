import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';


import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserCreateUpdateModule} from './user-create-update/user-create-update.module';
import { DialogStatusModule } from 'app/core/common/dialog-change-status/dialog-status.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    UsersRoutingModule,
    UserCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule,
    DialogStatusModule,
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule {}

