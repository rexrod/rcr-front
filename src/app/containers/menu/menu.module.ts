import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuUpdateModule } from './customer-create-update/customer-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    MaterialModule,

    // Core
    ListModule,
    MenuUpdateModule,
    PageModule,
    BreadcrumbsModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {
}
