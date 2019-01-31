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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { EquipmentNameRequestDTO } from '../model/equipmentNameRequestDTO';
import { EquipmentRequestDTO } from '../model/equipmentRequestDTO';
import { EquipmentResponseDTO } from '../model/equipmentResponseDTO';
import { PageEquipmentResponseDTO } from '../model/pageEquipmentResponseDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EquipmentControllerService {

    protected basePath = 'https://172.100.10.34:8080/ws-sgm-equipments/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Cria um Equipamento
     * 
     * @param equipment Equipamento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST(equipment: EquipmentRequestDTO, observe?: 'body', reportProgress?: boolean): Observable<EquipmentRequestDTO>;
    public createUsingPOST(equipment: EquipmentRequestDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EquipmentRequestDTO>>;
    public createUsingPOST(equipment: EquipmentRequestDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EquipmentRequestDTO>>;
    public createUsingPOST(equipment: EquipmentRequestDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (equipment === null || equipment === undefined) {
            throw new Error('Required parameter equipment was null or undefined when calling createUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<EquipmentRequestDTO>(`${this.basePath}/equipments`,
            equipment,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deleta um Equipamento por id
     * 
     * @param id Id do Equipamento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<EquipmentResponseDTO>;
    public deleteUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EquipmentResponseDTO>>;
    public deleteUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EquipmentResponseDTO>>;
    public deleteUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<EquipmentResponseDTO>(`${this.basePath}/equipments/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna um Equipamento pelo id
     * 
     * @param id Id do Equipamento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EquipmentResponseDTO>;
    public findUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EquipmentResponseDTO>>;
    public findUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EquipmentResponseDTO>>;
    public findUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<EquipmentResponseDTO>(`${this.basePath}/equipments/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todos os equipamentos com paginação
     * 
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<PageEquipmentResponseDTO>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageEquipmentResponseDTO>>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageEquipmentResponseDTO>>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (count !== undefined) {
            queryParameters = queryParameters.set('count', <any>count);
        }
        if (order !== undefined) {
            queryParameters = queryParameters.set('order', <any>order);
        }
        if (sort !== undefined) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<PageEquipmentResponseDTO>(`${this.basePath}/equipments/pagination`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todos os equipamentos
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<EquipmentResponseDTO>>;
    public getAllUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<EquipmentResponseDTO>>>;
    public getAllUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<EquipmentResponseDTO>>>;
    public getAllUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<EquipmentResponseDTO>>(`${this.basePath}/equipments/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna Equipmento pelo nome
     * 
     * @param equipment Equipment
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByNameUsingPOST(equipment?: EquipmentNameRequestDTO, observe?: 'body', reportProgress?: boolean): Observable<Array<EquipmentResponseDTO>>;
    public getByNameUsingPOST(equipment?: EquipmentNameRequestDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<EquipmentResponseDTO>>>;
    public getByNameUsingPOST(equipment?: EquipmentNameRequestDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<EquipmentResponseDTO>>>;
    public getByNameUsingPOST(equipment?: EquipmentNameRequestDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<Array<EquipmentResponseDTO>>(`${this.basePath}/equipments/name`,
            equipment,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Atualiza um Equipamento
     * 
     * @param equipment Equipamento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(equipment: EquipmentRequestDTO, observe?: 'body', reportProgress?: boolean): Observable<EquipmentRequestDTO>;
    public updateUsingPUT(equipment: EquipmentRequestDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EquipmentRequestDTO>>;
    public updateUsingPUT(equipment: EquipmentRequestDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EquipmentRequestDTO>>;
    public updateUsingPUT(equipment: EquipmentRequestDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (equipment === null || equipment === undefined) {
            throw new Error('Required parameter equipment was null or undefined when calling updateUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<EquipmentRequestDTO>(`${this.basePath}/equipments`,
            equipment,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}