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
        
        return this.httpClient.get<Transport>('http://52.229.33.51:8080/auth/v1/transports/alltransports',httpOptions,
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
}
