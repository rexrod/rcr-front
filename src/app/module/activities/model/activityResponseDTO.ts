/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CompanyResponseDTO } from './companyResponseDTO';
import { ServiceOrderTypeResponseDTO } from './serviceOrderTypeResponseDTO';
import { TeamResponseDTO } from './teamResponseDTO';


export interface ActivityResponseDTO {
    company?: CompanyResponseDTO;
    description?: string;
    id?: number;
    observation?: string;
    serviceOrderType?: ServiceOrderTypeResponseDTO;
    team?: TeamResponseDTO;
}