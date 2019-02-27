/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';
import { environment } from 'environments/environment.dev';
import { Employees } from 'app/models/employees/employees.model';

@Injectable()
export class EmployeesControllerService {

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
        
        return this.httpClient.get<Employees>(environment.origin.employees + '/employee/allemployees',httpOptions,
        );
    }

    public registerEmployees(employee: Employees): Observable<any> {
            
        let token = localStorage.getItem('token');

        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        const formData = new URLSearchParams();
        // append your data
        formData.set('name', employee.name);
        formData.set('registration', employee.registration);
        formData.set('address', employee.address);
        formData.set('company', employee.company);
        formData.set('status', employee.status);

        // console.log(formData.getAll);
        // console.log(formData.toString());
        
        return this.httpClient.post<Employees>(environment.origin.employees + '/employee/register', formData.toString(), httpOptions,);
    }

    public updateEmployees(employee: Employees): Observable<any> {
        
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

        formData.set('name', employee.name);
        formData.set('registration', employee.registration);
        formData.set('address', employee.address);
        formData.set('company', employee.company);
        formData.set('status', employee.status);

        // console.log(formData.getAll);
        // console.log(formData.toString());

        return this.httpClient.put( environment.origin.employees + '/employee/' + employee.id, formData.toString(), httpOptions);
    }

    public deleteEmployees(employee: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };
               
        // console.log(ratreadores);  

        return this.httpClient.delete( environment.origin.employees + '/employee/' + employee.id, httpOptions);
    }

    public atualizarStatus(employee: any): Observable<any> {
        
        let token = localStorage.getItem('token');
        // console.log(token);
        const httpOptions = {
            headers: new HttpHeaders({
            "Content-Type":  "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + `${token}`
            }),
        };

        const formData = new URLSearchParams();
         
        return this.httpClient.put( environment.origin.employees + '/employee/status/' + employee.id, formData, httpOptions);
    }

}
