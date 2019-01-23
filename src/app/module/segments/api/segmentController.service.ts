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

import { Observable }                                        from 'rxjs';

import { PageSegment } from '../model/pageSegment';
import { Segment } from '../model/segment';
import { SegmentDTO } from '../model/segmentDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SegmentControllerService {

    protected basePath = 'http://172.100.10.134:8083/ws-sgm-segments/api';
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
     * Cria um Segmento
     * 
     * @param segment Segmento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST(segment: SegmentDTO, observe?: 'body', reportProgress?: boolean): Observable<SegmentDTO>;
    public createUsingPOST(segment: SegmentDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SegmentDTO>>;
    public createUsingPOST(segment: SegmentDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SegmentDTO>>;
    public createUsingPOST(segment: SegmentDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (segment === null || segment === undefined) {
            throw new Error('Required parameter segment was null or undefined when calling createUsingPOST.');
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

        return this.httpClient.post<SegmentDTO>(`${this.basePath}/segments`,
            segment,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deleta um Segmento pelo ID
     * 
     * @param id Id do Segmento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<Segment>;
    public deleteUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Segment>>;
    public deleteUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Segment>>;
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

        return this.httpClient.delete<Segment>(`${this.basePath}/segments/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna um Segmento pelo ID
     * 
     * @param id Id do Segmento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Segment>;
    public findUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Segment>>;
    public findUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Segment>>;
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

        return this.httpClient.get<Segment>(`${this.basePath}/segments/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todos os segmentos com paginação
     * 
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<PageSegment>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageSegment>>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageSegment>>;
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

        return this.httpClient.get<PageSegment>(`${this.basePath}/segments/pagination`,
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
     * Lista todos os segmentos
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Segment>>;
    public getAllUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Segment>>>;
    public getAllUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Segment>>>;
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

        return this.httpClient.get<Array<Segment>>(`${this.basePath}/segments/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna segmentos pelo ID da Companhia
     * 
     * @param id Id da Companhia
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByCompanyIdUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Segment>>;
    public getByCompanyIdUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Segment>>>;
    public getByCompanyIdUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Segment>>>;
    public getByCompanyIdUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByCompanyIdUsingGET.');
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

        return this.httpClient.get<Array<Segment>>(`${this.basePath}/segments/bycompany/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna segmentos pelo nome
     * 
     * @param idCompany Id da Companhia 
     * @param name Nome do Segmento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByNameUsingGET(idCompany: number, name: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Segment>>;
    public getByNameUsingGET(idCompany: number, name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Segment>>>;
    public getByNameUsingGET(idCompany: number, name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Segment>>>;
    public getByNameUsingGET(idCompany: number, name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idCompany === null || idCompany === undefined) {
            throw new Error('Required parameter idCompany was null or undefined when calling getByNameUsingGET.');
        }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getByNameUsingGET.');
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

        return this.httpClient.get<Array<Segment>>(`${this.basePath}/segments/idcompany/${encodeURIComponent(String(idCompany))}/name/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Atualiza um Segmento
     * 
     * @param segment Segmento
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(segment: SegmentDTO, observe?: 'body', reportProgress?: boolean): Observable<SegmentDTO>;
    public updateUsingPUT(segment: SegmentDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SegmentDTO>>;
    public updateUsingPUT(segment: SegmentDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SegmentDTO>>;
    public updateUsingPUT(segment: SegmentDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (segment === null || segment === undefined) {
            throw new Error('Required parameter segment was null or undefined when calling updateUsingPUT.');
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

        return this.httpClient.put<SegmentDTO>(`${this.basePath}/segments`,
            segment,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
