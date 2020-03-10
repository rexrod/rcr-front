/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';
import { environment } from 'environments/environment.dev';
import { Transport } from 'app/models/transports/transports.model';
import { Rastreador } from 'app/models/rastreadores/rastreadores.model';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class TransportControllerService {

    constructor(
        protected httpClient: HttpClient,
        public snackBar: MatSnackBar
    ) {}

    public getRota(data: any): Observable<any> {
        let token = localStorage.getItem('token');
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        let formData = new HttpParams().set('placa', data.plate).set('horainicio', data.start).set('horafim', data.end);

        //@ts-ignore
        return this.httpClient.get<any>(environment.origin.transports + '/transports/getRota/' + data.plate + '/' + data.start + "/" + data.end,  httpOptions);
        // return this.httpClient.get<any>(environment.origin.transports + '/transports/getRota/' + "JXJ%20-%208090/2019-03-19%2017:15:00/2019-03-19%2017:18:00",  httpOptions);
    }
    
    public getAll(): Observable<any> {
        
        // let username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh'
        // let password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj'  
        
        let token = localStorage.getItem('token');
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };


        const formData = new URLSearchParams();
        // append your data
        //formData.set('username', <any>login);
        //formData.set('password', <any>senha);
        formData.set('grant_type', 'password');
        
        // console.log(formData.getAll);
        // console.log(formData.toString());
        
        return this.httpClient.get<Transport>(environment.origin.transports + '/transports/alltransports',httpOptions,
        );
    }

    public registerTransport(login: string): Observable<any> {
        
        // let username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh'
        // let password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj'  
        
        let token = localStorage.getItem('token');
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };


        const formData = new URLSearchParams();
        // append your data
        //formData.set('username', <any>login);
        //formData.set('password', <any>senha);
        formData.set('grant_type', 'password');
        
        // console.log(formData.getAll);
        // console.log(formData.toString());
        return this.httpClient.get<Transport>('http://rcr-api.herokuapp.com/auth/v1/transports/alltransports',httpOptions,

        // return this.httpClient.get<Transport>('http://52.229.33.51:8080/auth/v1/transports/alltransports',httpOptions,
        );
    }

    public updateTransport(transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
        
        const formData = new URLSearchParams();
        // append your data
        console.log('entrou aqui');
        console.log(transport);
        formData.set('type', transport.type);
        formData.set('vehiclePlate', transport.vehiclePlate);
        formData.set('capacity', transport.capacity);
        formData.set('thirdCompany', transport.thirdCompany);
        formData.set('segment', transport.segment);
        formData.set('description', transport.description);
        formData.set('manager', transport.manager);


        // console.log(formData.getAll);
        // console.log(formData.toString());
        // console.log(httpOptions); 
        // console.log(transport._id);  
        //console.log(transport.idRastreador);

        // if(transport.idRastreador !== null){
        //     const formDataRastreador = new URLSearchParams();
        //     // append your data
    
        //     formDataRastreador.set('trackerSerial', transport.idRastreador);
    
        //     this.httpClient.put( environment.origin.transports + '/transports/linktracker/' + transport._id, formDataRastreador.toString(), httpOptions).
        //         subscribe(
        //             success => {
        //                 //  this.snackBar.open('Transporte atualizado com sucesso!', 'OK', {
        //                 //      duration: 10000
        //                 //  });
        //                 // Reload the table after the post
        //                 console.log('Rastreador vinculado: ' + transport.idRastreador);
        //             },
        //             error => {  
        //                 console.log(error.error.error_description);
        //                 //   this.snackBar.open(error.error.error_description, 'OK', {
        //                 //       duration: 10000
        //                 //    });
        //                 console.log(error);
        //                 return 'error';
        //             });
            
        //     console.log(transport.idRastreador);            
        // }

        return this.httpClient.put( environment.origin.transports + '/transports/' + transport._id, formData.toString(), httpOptions);
    }

    public deleteTransport(transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
               
        // console.log(transport);  

        return this.httpClient.delete( environment.origin.transports + '/transports/' + transport.id, httpOptions);
    }

    public getTransportID(transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        const formData = new URLSearchParams();
         
        return this.httpClient.get( environment.origin.tracker + '/transports/' + transport.transportId, httpOptions);
    }

    public removerRastreador(transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        const formData = new URLSearchParams();
         
        return this.httpClient.put( environment.origin.tracker + '/transports/unlinktracker/' + transport.id, formData, httpOptions);
    }

    public adicionarRastreador(transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        // console.log(transport);
        const formData = new URLSearchParams();
         
        formData.set('trackerSerial', transport.trackerSerial);

        return this.httpClient.put( environment.origin.tracker + '/transports/linktracker/' + transport.id, formData.toString(), httpOptions);
    }

    public adicionarRota(employees: any, transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/json",
            "Authorization": "Bearer " + `${token}`
            }),
        };
        
        // console.log(transport);
        const formData = new URLSearchParams();
        formData.set('', transport.trackerSerial);

        return this.httpClient.post( environment.origin.transports + '/transports/routes/' + transport.id, employees, httpOptions);
    }

    public editarRota(employees: any, transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/json",
            "Authorization": "Bearer " + `${token}`
            }),
        };
        
        // console.log(transport);
        const formData = new URLSearchParams();
        formData.set('', transport.trackerSerial);

        return this.httpClient.put( environment.origin.transports + '/transports/addemployee/' + transport._id, employees, httpOptions);
    }

    public removerRota(transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        const formData = new URLSearchParams();
         
        return this.httpClient.put( environment.origin.transports + '/transports/unlinkroutes/' + transport.id, formData, httpOptions);
    }

    
    public removerFuncionarioRota(transport: any, employee: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/json",
            "Authorization": "Bearer " + `${token}`
            }),
            body: employee,
        };

        //console.log(httpOptions);
        //console.log(transport);
        return this.httpClient.delete( environment.origin.transports + '/transports/removeemployee/' + transport._id, httpOptions);
    }

    public alterarStatus(transport: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/json",
            "Authorization": "Bearer " + `${token}`
            }),
        };
        
        const formData = new URLSearchParams();
        
        return this.httpClient.put( environment.origin.transports + '/transports/status/' + transport._id, formData, httpOptions);
    }
}
