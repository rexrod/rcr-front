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
import { EmployeeDTO } from './employeeDTO';
import { MovementHeaderDTO } from './movementHeaderDTO';
import { ShiftDTO } from './shiftDTO';


export interface DowntimeHeaderDTO {
    company?: CompanyDTO;
    dateClose?: Date;
    dateOpen?: Date;
    employeeClose?: EmployeeDTO;
    employeeOpen?: EmployeeDTO;
    id?: number;
    movementHeader?: MovementHeaderDTO;
    shiftClose?: ShiftDTO;
    shiftOpen?: ShiftDTO;
    status?: number;
}
