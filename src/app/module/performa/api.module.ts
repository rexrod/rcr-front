import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AreasControllerService } from './api/areasController.service';
import { CompanyControllerService } from './api/companyController.service';
import { DatabasesControllerService } from './api/databasesController.service';
import { DefectClassControllerService } from './api/defectClassController.service';
import { DefectsControllerService } from './api/defectsController.service';
import { DepartmentsControllerService } from './api/departmentsController.service';
import { DowntimeDetailControllerService } from './api/downtimeDetailController.service';
import { DowntimeHeaderControllerService } from './api/downtimeHeaderController.service';
import { DowntimeReasonControllerService } from './api/downtimeReasonController.service';
import { DowntimeTypeReasonControllerService } from './api/downtimeTypeReasonController.service';
import { EmployeesControllerService } from './api/employeesController.service';
import { LinesControllerService } from './api/linesController.service';
import { MachinesControllerService } from './api/machinesController.service';
import { MaintenanceActionControllerService } from './api/maintenanceActionController.service';
import { ModelsControllerService } from './api/modelsController.service';
import { ModulesControllerService } from './api/modulesController.service';
import { MovementHeadersControllerService } from './api/movementHeadersController.service';
import { MovementHistoriesControllerService } from './api/movementHistoriesController.service';
import { PositionControllerService } from './api/positionController.service';
import { ProductionOrdersControllerService } from './api/productionOrdersController.service';
import { ProfilesControllerService } from './api/profilesController.service';
import { RoutesControllerService } from './api/routesController.service';
import { SessionsControllerService } from './api/sessionsController.service';
import { ShiftsControllerService } from './api/shiftsController.service';
import { TechnicalActionsControllerService } from './api/technicalActionsController.service';
import { TechnicalAnalysisControllerService } from './api/technicalAnalysisController.service';
import { WorkstationsControllerService } from './api/workstationsController.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AreasControllerService,
    CompanyControllerService,
    DatabasesControllerService,
    DefectClassControllerService,
    DefectsControllerService,
    DepartmentsControllerService,
    DowntimeDetailControllerService,
    DowntimeHeaderControllerService,
    DowntimeReasonControllerService,
    DowntimeTypeReasonControllerService,
    EmployeesControllerService,
    LinesControllerService,
    MachinesControllerService,
    MaintenanceActionControllerService,
    ModelsControllerService,
    ModulesControllerService,
    MovementHeadersControllerService,
    MovementHistoriesControllerService,
    PositionControllerService,
    ProductionOrdersControllerService,
    ProfilesControllerService,
    RoutesControllerService,
    SessionsControllerService,
    ShiftsControllerService,
    TechnicalActionsControllerService,
    TechnicalAnalysisControllerService,
    WorkstationsControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
