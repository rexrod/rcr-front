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

import { Model } from '../model/model';
import { ModelName } from '../model/modelName';
import { ModelRequestDTO } from '../model/modelRequestDTO';
import { ModelResponseDTO } from '../model/modelResponseDTO';
import { PageModel } from '../model/pageModel';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ModelControllerService {

    protected basePath = 'https://172.100.10.34:8080/ws-sgm-models/api';
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
     * Cria um Modelo
     * 
     * @param model Modelo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST(model: ModelRequestDTO, observe?: 'body', reportProgress?: boolean): Observable<ModelResponseDTO>;
    public createUsingPOST(model: ModelRequestDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ModelResponseDTO>>;
    public createUsingPOST(model: ModelRequestDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ModelResponseDTO>>;
    public createUsingPOST(model: ModelRequestDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling createUsingPOST.');
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

        return this.httpClient.post<ModelResponseDTO>(`${this.basePath}/models`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deleta um Modelo pelo Id
     * 
     * @param id Id do Modelo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<Model>;
    public deleteUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Model>>;
    public deleteUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Model>>;
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

        return this.httpClient.delete<Model>(`${this.basePath}/models/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna um Modelo pelo ID
     * 
     * @param id Id do Modelo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<ModelResponseDTO>;
    public findUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ModelResponseDTO>>;
    public findUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ModelResponseDTO>>;
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

        return this.httpClient.get<ModelResponseDTO>(`${this.basePath}/models/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Lista todos os modelos com paginação
     * 
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<PageModel>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageModel>>;
    public getAllPageOrdersUsingGET(page?: number, count?: number, order?: string, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageModel>>;
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

        return this.httpClient.get<PageModel>(`${this.basePath}/models/pagination`,
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
     * Lista todos os modelos
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<ModelResponseDTO>>;
    public getAllUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ModelResponseDTO>>>;
    public getAllUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ModelResponseDTO>>>;
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

        return this.httpClient.get<Array<ModelResponseDTO>>(`${this.basePath}/models/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna modelos pelo Id da Companhia
     * 
     * @param idCompany Id da Companhia
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByCompanyIdUsingGET(idCompany: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ModelRequestDTO>>;
    public getByCompanyIdUsingGET(idCompany: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ModelRequestDTO>>>;
    public getByCompanyIdUsingGET(idCompany: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ModelRequestDTO>>>;
    public getByCompanyIdUsingGET(idCompany: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idCompany === null || idCompany === undefined) {
            throw new Error('Required parameter idCompany was null or undefined when calling getByCompanyIdUsingGET.');
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

        return this.httpClient.get<Array<ModelRequestDTO>>(`${this.basePath}/models/company/${encodeURIComponent(String(idCompany))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna modelos pelo Id do Fabricante
     * 
     * @param idFabricator id do Fabricante
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByFabricatorUsingGET(idFabricator: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ModelResponseDTO>>;
    public getByFabricatorUsingGET(idFabricator: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ModelResponseDTO>>>;
    public getByFabricatorUsingGET(idFabricator: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ModelResponseDTO>>>;
    public getByFabricatorUsingGET(idFabricator: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (idFabricator === null || idFabricator === undefined) {
            throw new Error('Required parameter idFabricator was null or undefined when calling getByFabricatorUsingGET.');
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

        return this.httpClient.get<Array<ModelResponseDTO>>(`${this.basePath}/models/fabricator/${encodeURIComponent(String(idFabricator))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retorna modelos pelo nome, fabricante e companhia
     * 
     * @param modelName Modelo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByNameUsingPOST(modelName?: ModelName, observe?: 'body', reportProgress?: boolean): Observable<Array<ModelResponseDTO>>;
    public getByNameUsingPOST(modelName?: ModelName, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ModelResponseDTO>>>;
    public getByNameUsingPOST(modelName?: ModelName, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ModelResponseDTO>>>;
    public getByNameUsingPOST(modelName?: ModelName, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<Array<ModelResponseDTO>>(`${this.basePath}/models/name`,
            modelName,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Atualiza um Modelo
     * 
     * @param model Modelo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(model: ModelRequestDTO, observe?: 'body', reportProgress?: boolean): Observable<ModelResponseDTO>;
    public updateUsingPUT(model: ModelRequestDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ModelResponseDTO>>;
    public updateUsingPUT(model: ModelRequestDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ModelResponseDTO>>;
    public updateUsingPUT(model: ModelRequestDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling updateUsingPUT.');
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

        return this.httpClient.put<ModelResponseDTO>(`${this.basePath}/models`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}