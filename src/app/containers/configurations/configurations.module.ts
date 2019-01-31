
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationsComponent } from './configurations.component';
import { ConfigurationCreateUpdateModule } from './configuration-create-update/configuration-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ConfigurationsRoutingModule,
    ConfigurationCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [ConfigurationsComponent],
  exports: [ConfigurationsComponent]
})
export class ConfigurationsModule { }

