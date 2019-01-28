import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { TesteCoutinhoRoutingModule } from './teste-coutinho-routing.module';
import { TesteCoutinhoComponent } from './teste-coutinho.component';
import { TesteCoutinhosCreateUpdateModule} from './teste-coutinhos-create-update/teste-coutinhos-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TesteCoutinhoRoutingModule,
    TesteCoutinhosCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [TesteCoutinhoComponent],
  exports: [TesteCoutinhoComponent]
})
export class TesteCoutinhoModule {}

