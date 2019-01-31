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

import { MovementHistoryDTO } from '../model/movementHistoryDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MovementHistoriesControllerService {

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
     * Create new movement history
     * 
     * @param movementHistoryDTO MovementHistory
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST15(movementHistoryDTO: MovementHistoryDTO, observe?: 'body', reportProgress?: boolean): Observable<MovementHistoryDTO>;
    public createUsingPOST15(movementHistoryDTO: MovementHistoryDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MovementHistoryDTO>>;
    public createUsingPOST15(movementHistoryDTO: MovementHistoryDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MovementHistoryDTO>>;
    public createUsingPOST15(movementHistoryDTO: MovementHistoryDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (movementHistoryDTO === null || movementHistoryDTO === undefined) {
            throw new Error('Required parameter movementHistoryDTO was null or undefined when calling createUsingPOST15.');
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

        return this.httpClient.post<MovementHistoryDTO>(`${this.basePath}/movement-histories`,
            movementHistoryDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find movement History by production order
     * 
     * @param idMovementHeader idMovementHeader
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByMovementHeaderUsingGET(idMovementHeader: number, observe?: 'body', reportProgress?: boolean): Observable<Array<MovementHistoryDTO>>;
    public findByMovementHeaderUsingGET(idMovementHeader: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<MovementHistoryDTO>>>;
    public findByMovementHeaderUsingGET(idMovementHeader: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<MovementHistoryDTO>>>;
    public findByMovementHeaderUsingGET(idMovementHeader: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idMovementHeader === null || idMovementHeader === undefined) {
            throw new Error('Required parameter idMovementHeader was null or undefined when calling findByMovementHeaderUsingGET.');
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
        ];

        return this.httpClient.get<Array<MovementHistoryDTO>>(`${this.basePath}/movement-histories/movement-headers/${encodeURIComponent(String(idMovementHeader))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all movement histories by movement header and workstation
     * 
     * @param idMovementHeader idMovementHeader
     * @param idWorkstation idWorkstation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByMovementHeaderAndWorkstationUsingGET(idMovementHeader: number, idWorkstation: number, observe?: 'body', reportProgress?: boolean): Observable<Array<MovementHistoryDTO>>;
    public getByMovementHeaderAndWorkstationUsingGET(idMovementHeader: number, idWorkstation: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<MovementHistoryDTO>>>;
    public getByMovementHeaderAndWorkstationUsingGET(idMovementHeader: number, idWorkstation: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<MovementHistoryDTO>>>;
    public getByMovementHeaderAndWorkstationUsingGET(idMovementHeader: number, idWorkstation: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idMovementHeader === null || idMovementHeader === undefined) {
            throw new Error('Required parameter idMovementHeader was null or undefined when calling getByMovementHeaderAndWorkstationUsingGET.');
        }
        if (idWorkstation === null || idWorkstation === undefined) {
            throw new Error('Required parameter idWorkstation was null or undefined when calling getByMovementHeaderAndWorkstationUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idMovementHeader !== undefined) {
            queryParameters = queryParameters.set('idMovementHeader', <any>idMovementHeader);
        }
        if (idWorkstation !== undefined) {
            queryParameters = queryParameters.set('idWorkstation', <any>idWorkstation);
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
        ];

        return this.httpClient.get<Array<MovementHistoryDTO>>(`${this.basePath}/movement-histories`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}