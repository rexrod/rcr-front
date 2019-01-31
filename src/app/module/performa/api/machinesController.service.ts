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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { MachineDTO } from '../model/machineDTO';
import { SliceMachineDTO } from '../model/sliceMachineDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MachinesControllerService {

    protected basePath = 'https://172.100.10.22:8082/ws-performa/api';
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
     * Create new machine
     * 
     * @param machineDTO machine
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST11(machineDTO: MachineDTO, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<MachineDTO>;
    public createUsingPOST11(machineDTO: MachineDTO, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MachineDTO>>;
    public createUsingPOST11(machineDTO: MachineDTO, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MachineDTO>>;
    public createUsingPOST11(machineDTO: MachineDTO, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (machineDTO === null || machineDTO === undefined) {
            throw new Error('Required parameter machineDTO was null or undefined when calling createUsingPOST11.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST11.');
        }

        let headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }

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

        return this.httpClient.post<MachineDTO>(`${this.basePath}/machines`,
            machineDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete machine
     * 
     * @param id id
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE11(id: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE11(id: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE11(id: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE11(id: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE11.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE11.');
        }

        let headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }

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
        ];

        return this.httpClient.delete<any>(`${this.basePath}/machines/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find machine by id
     * 
     * @param id id
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUsingGET12(id: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<MachineDTO>;
    public findByIdUsingGET12(id: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MachineDTO>>;
    public findByIdUsingGET12(id: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MachineDTO>>;
    public findByIdUsingGET12(id: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET12.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET12.');
        }

        let headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }

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
        ];

        return this.httpClient.get<MachineDTO>(`${this.basePath}/machines/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List machines by workstation
     * 
     * @param idWorkstation idWorkstation
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByWorkstationUsingGET(idWorkstation: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<Array<MachineDTO>>;
    public findByWorkstationUsingGET(idWorkstation: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<MachineDTO>>>;
    public findByWorkstationUsingGET(idWorkstation: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<MachineDTO>>>;
    public findByWorkstationUsingGET(idWorkstation: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idWorkstation === null || idWorkstation === undefined) {
            throw new Error('Required parameter idWorkstation was null or undefined when calling findByWorkstationUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByWorkstationUsingGET.');
        }

        let headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }

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
        ];

        return this.httpClient.get<Array<MachineDTO>>(`${this.basePath}/machines/workstations/${encodeURIComponent(String(idWorkstation))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all shifts
     * 
     * @param idEmployee Employee Id
     * @param page 
     * @param count 
     * @param order 
     * @param sortProperty 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET12(idEmployee: number, page: number, count?: number, order?: string, sortProperty?: string, observe?: 'body', reportProgress?: boolean): Observable<SliceMachineDTO>;
    public getAllUsingGET12(idEmployee: number, page: number, count?: number, order?: string, sortProperty?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SliceMachineDTO>>;
    public getAllUsingGET12(idEmployee: number, page: number, count?: number, order?: string, sortProperty?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SliceMachineDTO>>;
    public getAllUsingGET12(idEmployee: number, page: number, count?: number, order?: string, sortProperty?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET12.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllUsingGET12.');
        }

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
        if (sortProperty !== undefined) {
            queryParameters = queryParameters.set('sortProperty', <any>sortProperty);
        }

        let headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }

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
        ];

        return this.httpClient.get<SliceMachineDTO>(`${this.basePath}/machines`,
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
     * Update machine
     * 
     * @param id id
     * @param machineDTO machine
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT11(id: number, machineDTO: MachineDTO, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<MachineDTO>;
    public updateUsingPUT11(id: number, machineDTO: MachineDTO, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MachineDTO>>;
    public updateUsingPUT11(id: number, machineDTO: MachineDTO, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MachineDTO>>;
    public updateUsingPUT11(id: number, machineDTO: MachineDTO, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT11.');
        }
        if (machineDTO === null || machineDTO === undefined) {
            throw new Error('Required parameter machineDTO was null or undefined when calling updateUsingPUT11.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT11.');
        }

        let headers = this.defaultHeaders;
        if (idEmployee !== undefined && idEmployee !== null) {
            headers = headers.set('Id-Employee', String(idEmployee));
        }

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

        return this.httpClient.put<MachineDTO>(`${this.basePath}/machines/${encodeURIComponent(String(id))}`,
            machineDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}