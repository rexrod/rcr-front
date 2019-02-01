import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';
import { TestCreateUpdateModule} from './test-create-update/test-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TestsRoutingModule,
    TestCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [TestsComponent],
  exports: [TestsComponent]
})
export class TestsModule {}

