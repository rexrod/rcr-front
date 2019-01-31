/**
 * ws-performa
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.7-20190109095830
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CompanyDTO } from './companyDTO';
import { DefectDTO } from './defectDTO';
import { DepartmentDTO } from './departmentDTO';
import { EmployeeDTO } from './employeeDTO';
import { MachineDTO } from './machineDTO';


export interface MachineDefectDepartmentDTO {
    company?: CompanyDTO;
    defect?: DefectDTO;
    department?: DepartmentDTO;
    employee?: EmployeeDTO;
    idMachineDefectDepartment?: number;
    machine?: MachineDTO;
    sla?: number;
}