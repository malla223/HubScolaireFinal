import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  const url = 'http://localhost:8080/api/admin'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(
    private http : HttpClient) { }

    public connexion(login: String, password: String){
      return this.http.get(url + '/authAdmin/'+ login + '/' + password);
    }
    
    public getAllAdminActif(){
      return this.http.get(url + '/getAllAdmin');
    }

    public getAllAdminInactif(){
      return this.http.get(url + '/getAllAdminInactif');
    }

    public nombreAdmin(){
      return this.http.get(url + '/nombreAdmin');
    }

    public saveAdmin(form : FormData) : Observable<any>{
      return this.http.post(url + '/saveAdmin', form);
    }

    public updateAdmin(id_admin: any, data: any): Observable<any> {
      return this.http.put(`${url + '/modifierAdmin'}/${id_admin}`, data);
    }

    public restaurerAdmin(id_admin: any, data: any): Observable<any> {
      return this.http.put(`${url + '/restaurerAdmin'}/${id_admin}`, data);
    }

    public nombreAdminH(){
      return this.http.get(url + '/nombreAdminH');
    }

    public nombreAdminF(){
      return this.http.get(url + '/nombreAdminF');
    }

    public getAdminById(id_admin:any):Observable<any>{
      return this.http.get(`${url + '/getAdminById'}/${id_admin}`);
    }

    public delteAdmin(id_admin:any):Observable<any>{
      return this.http.delete(`${url + '/deleteAdmin'}/${id_admin}`);
    }
}
