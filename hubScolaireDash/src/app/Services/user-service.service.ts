import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; '@angular/core'

const url = 'http://localhost:8080/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http :HttpClient) { }

  public connexion(login: String, password: String){
    return this.http.get(url + '/auth/'+ login + '/' + password);
  }

  public nbreUser(){
    return this.http.get(url + '/nombreUser');
  }
  
  public getAllUser(){
    return this.http.get(url + '/getAllUser');
  }

  public modifierUser(id_user: any, data: any): Observable<any> {
        return this.http.put(`${url + '/modifierUser'}/${id_user}`, data);
  }

  public getUserById(id_user:any):Observable<any>{
    return this.http.get(`${url + '/getUserById'}/${id_user}`);
  }


  public deleteUser(id_user:any):Observable<any>{
    return this.http.delete(`${url + '/deleteUser'}/${id_user}`);
  }
  
  public restaurerUser(id_user: any, data: any): Observable<any> {
    return this.http.put(`${url + '/modifierUser'}/${id_user}`, data);
}
  
  }

