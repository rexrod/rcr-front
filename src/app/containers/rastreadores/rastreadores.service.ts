/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';
import { environment } from 'environments/environment';
import { Transport } from 'app/models/transports/transports.model';
import { Rastreador } from 'app/models/rastreadores/rastreadores.model';

@Injectable()
export class RastreadoresControllerService {

    constructor(protected httpClient: HttpClient) {
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
        
        return this.httpClient.get<Rastreador>(environment.origin.api + '/tracker/getalltrackeativo',httpOptions,
        );
    }

    public registerRastreador(rastreador: Rastreador): Observable<any> {
            
        let token = localStorage.getItem('token');

        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        const formData = new URLSearchParams();
        // append your data
        formData.set('serialKey', rastreador.serialKey);
        formData.set('notes', rastreador.notes);
        formData.set('trackerModel', rastreador.trackerModel);
  
        // console.log(formData.getAll);
        // console.log(formData.toString());
        
        return this.httpClient.post<Rastreador>(environment.origin.api + '/trackers/registertracker', formData.toString(), httpOptions,);
    }

    public updateRastreador(rastreador: Rastreador): Observable<any> {
        
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

        formData.set('serialKey', rastreador.serialKey);
        formData.set('notes', rastreador.notes);
        formData.set('trackerModel', rastreador.trackerModel);
  
        // console.log(formData.getAll);
        // console.log(formData.toString());

        return this.httpClient.put( environment.origin.api + '/trackers/' + rastreador._id, formData.toString(), httpOptions);
    }

    public deleteRastreador(ratreadores: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
               
        // console.log(ratreadores);  
        console.log(httpOptions);

        return this.httpClient.patch( environment.origin.api + '/tracker/disabletrackers/' + ratreadores.id, {}, httpOptions);
    }

}
