import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = 'http://localhost:8080/api/don'

@Injectable({
  providedIn: 'root'
})
export class DemandeDonService {

  constructor(
    private http : HttpClient) { }

    public getAllEleveByUser(id_user: any): Observable<any>{
      return this.http.get(url + '/getAllEleveUser/' + id_user);
    }
    
    public getDemandeByid(id_demande:any):Observable<any>{
      return this.http.get(`${url + '/getDemandeById'}/${id_demande}`);
    }
}
