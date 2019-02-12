import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import 'hammerjs'; // Needed for Touch functionality of Material Components
import { environment } from '../environments/environment';
import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { SessionService } from 'app/service/session.service';

// modulos
import { ApiModule } from './module/users';
import { AppUsersModule } from './module/users/users.module';
import { ApiModule as AppNoticesModule } from './module/notices';
import { ApiModule as AppCompaniesModule } from './module/companies';
import { ApiModule as AppSegmentsModule } from './module/segments';
import { ApiModule as AppFabricatorsModule } from './module/fabricators';
import { ApiModule as AppServiceOrderTypesModule } from './module/service-order-types';
import { ApiModule as AppSlasModule } from './module/slas';
import { ApiModule as AppServiceOrderTitlesModule } from './module/service-order-titles';
import { ApiModule as AppModelsModule } from './module/models';
import { ApiModule as AppEquipamentsModule } from './module/equipments';
import { ApiModule as AppMeasuresUnitsModule } from './module/measures-units';
import { ApiModule as AppServiceOrderPrioritiesModule } from './module/service-orders';
import { ApiModule as AppMaterialsModule } from './module/materials';
import { ApiModule as AppActivitiesModule } from './module/activities';
import { MatPaginatorIntl } from '@angular/material';
import { getPortuguesePaginatorIntl } from './intl/portuguese-paginator-intl';

import {
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcTextFieldModule,
  MdcFormFieldModule,
} from '@angular-mdc/web';

@NgModule({
//  , ProductsComponent
  declarations: [AppComponent],
  imports: [
    // Angular Core Module // Don't remove!
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ConfigurationsModule,
    // Fury Core Modules
    CoreModule,
    RoutingModule,
    ApiModule,
    AppUsersModule,
    AppNoticesModule,
    AppCompaniesModule,
    AppSegmentsModule,
    AppFabricatorsModule,
    AppServiceOrderTypesModule,
    AppSlasModule,
    AppServiceOrderTitlesModule,
    AppModelsModule,
    AppEquipamentsModule,
    AppMeasuresUnitsModule,
    AppServiceOrderPrioritiesModule,
    AppMaterialsModule,
    AppActivitiesModule,
    // Register a Service Worker (optional)
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    // PipeModule.forRoot()
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcTextFieldModule,
    MdcFormFieldModule,
  ],
  providers: [
    SessionService,
    { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
