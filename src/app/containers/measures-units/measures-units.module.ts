import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DialogDeleteModule } from '../../core/common/dialog-delete/dialog-delete.module';

import { MeasuresUnitsRoutingModule } from './measures-units-routing.module';
import { MeasuresUnitsComponent } from './measures-units.component';
import { MeasureUnitCreateUpdateModule} from './measure-unit-create-update/measure-unit-create-update.module';
import { BASE_PATH, MeasuresUnitControllerService } from 'app/module/measures-units';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MeasuresUnitsRoutingModule,
    MeasureUnitCreateUpdateModule,

    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    DialogDeleteModule
  ],
  declarations: [MeasuresUnitsComponent],
  exports: [MeasuresUnitsComponent],
  providers: [
    { provide: BASE_PATH, useValue: environment.origin.measuresUnits },
    MeasuresUnitControllerService
  ]
})
export class MeasuresUnitsModule {}

