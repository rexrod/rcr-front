export * from './areaController.service';
import { AreaControllerService } from './areaController.service';
export * from './companyController.service';
import { CompanyControllerService } from './companyController.service';
export * from './departmentController.service';
import { DepartmentControllerService } from './departmentController.service';
export * from './sectorController.service';
import { SectorControllerService } from './sectorController.service';
export const APIS = [AreaControllerService, CompanyControllerService, DepartmentControllerService, SectorControllerService];
