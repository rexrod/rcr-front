/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';
import { environment } from 'environments/environment.dev';
import { Transport } from 'app/models/transports/transports.model';
import { Rastreador } from 'app/models/rastreadores/rastreadores.model';
import { MatSnackBar } from '@angular/material';
import { User } from 'app/models/users/users.model';

@Injectable()
export class UserControllerCustomService {

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
        
        console.log(formData.getAll);
        console.log(formData.toString());
 
        return this.httpClient.get<Transport>(environment.origin.transports + '/user/allprofiles', httpOptions,);
    }

    public registerUser(user: User): Observable<any> {
        
        let username = 'aVgjhEBcnN-ytRrewsWJrSpoKnh'
        let password = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj'  
      
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(`${username}:${password}`)
            }),
        };

        const formData = new URLSearchParams();
        // append your data
        formData.set('name', user.name);
        formData.set('email', user.email);
        formData.set('password', user.password);
        formData.set('registration', user.registration);
  
        console.log(formData.getAll);
        console.log(formData.toString());
        
        return this.httpClient.post<Rastreador>('https://lupa-v1.herokuapp.com/v1/oauth2/register', formData.toString(), httpOptions,);
    }

    public updateUser(user: User): Observable<any> {
        
        let token = localStorage.getItem('token');
        console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
        
        const formData = new URLSearchParams();
        // append your data

        formData.set('name', user.name);
        formData.set('email', user.email);
        formData.set('registration', user.registration);
  
        return this.httpClient.put( environment.origin.tracker + '/user/profile', formData.toString(), httpOptions);
    }

    public deleteUser(user: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
               
        // console.log(user);  

        return this.httpClient.delete( environment.origin.tracker + '/user/profile/' + user.id, httpOptions);
    }

    public atualizarStatus(user: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        const formData = new URLSearchParams();
         
        return this.httpClient.put( environment.origin.tracker + '/user/status/' + user.id, formData, httpOptions);
    }
}
