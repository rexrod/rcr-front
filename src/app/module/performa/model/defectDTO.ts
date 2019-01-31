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
import { DefectClassDTO } from './defectClassDTO';
import { MachineDefectDepartmentDTO } from './machineDefectDepartmentDTO';


export interface DefectDTO {
    codeDefect?: string;
    company?: CompanyDTO;
    defectClass?: DefectClassDTO;
    idDefect?: number;
    machineDefectDepartments?: Array<MachineDefectDepartmentDTO>;
    nameDefect?: string;
}