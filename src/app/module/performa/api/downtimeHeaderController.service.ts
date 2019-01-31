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

import { DashboardDowntimeDTO } from '../model/dashboardDowntimeDTO';
import { DowntimeHeaderDTO } from '../model/downtimeHeaderDTO';
import { DowntimeHeaderDetailDTO } from '../model/downtimeHeaderDetailDTO';
import { SliceDowntimeHeaderDetailDTO } from '../model/sliceDowntimeHeaderDetailDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DowntimeHeaderControllerService {

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
     * Create new downtime header
     * 
     * @param downtimeHeaderDTO downtimeheader
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST6(downtimeHeaderDTO: DowntimeHeaderDTO, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<DowntimeHeaderDTO>;
    public createUsingPOST6(downtimeHeaderDTO: DowntimeHeaderDTO, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DowntimeHeaderDTO>>;
    public createUsingPOST6(downtimeHeaderDTO: DowntimeHeaderDTO, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DowntimeHeaderDTO>>;
    public createUsingPOST6(downtimeHeaderDTO: DowntimeHeaderDTO, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (downtimeHeaderDTO === null || downtimeHeaderDTO === undefined) {
            throw new Error('Required parameter downtimeHeaderDTO was null or undefined when calling createUsingPOST6.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createUsingPOST6.');
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

        return this.httpClient.post<DowntimeHeaderDTO>(`${this.basePath}/downtime-headers`,
            downtimeHeaderDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Open new downtime header with detail
     * 
     * @param downtimeHeaderDetailDTO downtimeHeaderDetail
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createWithDetailsUsingPOST(downtimeHeaderDetailDTO: DowntimeHeaderDetailDTO, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<DowntimeHeaderDetailDTO>;
    public createWithDetailsUsingPOST(downtimeHeaderDetailDTO: DowntimeHeaderDetailDTO, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DowntimeHeaderDetailDTO>>;
    public createWithDetailsUsingPOST(downtimeHeaderDetailDTO: DowntimeHeaderDetailDTO, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DowntimeHeaderDetailDTO>>;
    public createWithDetailsUsingPOST(downtimeHeaderDetailDTO: DowntimeHeaderDetailDTO, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (downtimeHeaderDetailDTO === null || downtimeHeaderDetailDTO === undefined) {
            throw new Error('Required parameter downtimeHeaderDetailDTO was null or undefined when calling createWithDetailsUsingPOST.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling createWithDetailsUsingPOST.');
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

        return this.httpClient.post<DowntimeHeaderDetailDTO>(`${this.basePath}/downtime-headers/details`,
            downtimeHeaderDetailDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete downtime header
     * 
     * @param id id
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE6(id: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE6(id: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE6(id: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE6(id: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE6.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling deleteUsingDELETE6.');
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

        return this.httpClient.delete<any>(`${this.basePath}/downtime-headers/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find downtime header by id
     * 
     * @param id id
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUsingGET7(id: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<DowntimeHeaderDTO>;
    public findByIdUsingGET7(id: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DowntimeHeaderDTO>>;
    public findByIdUsingGET7(id: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DowntimeHeaderDTO>>;
    public findByIdUsingGET7(id: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET7.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdUsingGET7.');
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

        return this.httpClient.get<DowntimeHeaderDTO>(`${this.basePath}/downtime-headers/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find downtime header by id with details
     * 
     * @param id id
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdWithDetailsUsingGET(id: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<DowntimeHeaderDetailDTO>;
    public findByIdWithDetailsUsingGET(id: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DowntimeHeaderDetailDTO>>;
    public findByIdWithDetailsUsingGET(id: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DowntimeHeaderDetailDTO>>;
    public findByIdWithDetailsUsingGET(id: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdWithDetailsUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling findByIdWithDetailsUsingGET.');
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

        return this.httpClient.get<DowntimeHeaderDetailDTO>(`${this.basePath}/downtime-headers/details/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all downtime header
     * 
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET7(idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<Array<DowntimeHeaderDTO>>;
    public getAllUsingGET7(idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DowntimeHeaderDTO>>>;
    public getAllUsingGET7(idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DowntimeHeaderDTO>>>;
    public getAllUsingGET7(idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllUsingGET7.');
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

        return this.httpClient.get<Array<DowntimeHeaderDTO>>(`${this.basePath}/downtime-headers`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all downtime header with details
     * 
     * @param page page
     * @param idEmployee Employee Id
     * @param count count
     * @param order order
     * @param sortProperty sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllWithDetailsUsingGET(page: number, idEmployee: number, count?: number, order?: string, sortProperty?: string, observe?: 'body', reportProgress?: boolean): Observable<SliceDowntimeHeaderDetailDTO>;
    public getAllWithDetailsUsingGET(page: number, idEmployee: number, count?: number, order?: string, sortProperty?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SliceDowntimeHeaderDetailDTO>>;
    public getAllWithDetailsUsingGET(page: number, idEmployee: number, count?: number, order?: string, sortProperty?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SliceDowntimeHeaderDetailDTO>>;
    public getAllWithDetailsUsingGET(page: number, idEmployee: number, count?: number, order?: string, sortProperty?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getAllWithDetailsUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getAllWithDetailsUsingGET.');
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

        return this.httpClient.get<SliceDowntimeHeaderDetailDTO>(`${this.basePath}/downtime-headers/details`,
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
     * Dashboard
     * 
     * @param date date
     * @param shiftId shiftId
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboardUsingGET(date: string, shiftId: number, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<DashboardDowntimeDTO>;
    public getDashboardUsingGET(date: string, shiftId: number, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DashboardDowntimeDTO>>;
    public getDashboardUsingGET(date: string, shiftId: number, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DashboardDowntimeDTO>>;
    public getDashboardUsingGET(date: string, shiftId: number, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling getDashboardUsingGET.');
        }
        if (shiftId === null || shiftId === undefined) {
            throw new Error('Required parameter shiftId was null or undefined when calling getDashboardUsingGET.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling getDashboardUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (date !== undefined) {
            queryParameters = queryParameters.set('date', <any>date);
        }
        if (shiftId !== undefined) {
            queryParameters = queryParameters.set('shiftId', <any>shiftId);
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

        return this.httpClient.get<DashboardDowntimeDTO>(`${this.basePath}/downtime-headers/dashboard`,
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
     * Update downtime header
     * 
     * @param id id
     * @param downtimeHeaderDTO downtimeheader
     * @param idEmployee Employee Id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT6(id: number, downtimeHeaderDTO: DowntimeHeaderDTO, idEmployee: number, observe?: 'body', reportProgress?: boolean): Observable<DowntimeHeaderDTO>;
    public updateUsingPUT6(id: number, downtimeHeaderDTO: DowntimeHeaderDTO, idEmployee: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DowntimeHeaderDTO>>;
    public updateUsingPUT6(id: number, downtimeHeaderDTO: DowntimeHeaderDTO, idEmployee: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DowntimeHeaderDTO>>;
    public updateUsingPUT6(id: number, downtimeHeaderDTO: DowntimeHeaderDTO, idEmployee: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPUT6.');
        }
        if (downtimeHeaderDTO === null || downtimeHeaderDTO === undefined) {
            throw new Error('Required parameter downtimeHeaderDTO was null or undefined when calling updateUsingPUT6.');
        }
        if (idEmployee === null || idEmployee === undefined) {
            throw new Error('Required parameter idEmployee was null or undefined when calling updateUsingPUT6.');
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

        return this.httpClient.put<DowntimeHeaderDTO>(`${this.basePath}/downtime-headers/${encodeURIComponent(String(id))}`,
            downtimeHeaderDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}