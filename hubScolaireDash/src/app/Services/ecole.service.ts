import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';


const url = 'http://localhost:8080/api/ecole';

@Injectable({
  providedIn: 'root'
})
export class EcoleService {

  constructor(
    private http : HttpClient) { }

    public getAllEcole(){
      return this.http.get(url + '/getAllEcole');
    }

    public saveEcole(form : FormData) : Observable<any>{
      return this.http.post(url + '/saveEcole', form);
    }

    public updateEcole(id_ecole: any, data: any): Observable<any> {
      return this.http.put(`${url + '/modifierEccole'}/${id_ecole}`, data);
    }

    public getEcoleById(id_ecole:any):Observable<any>{
      return this.http.get(`${url + '/getEcoleById'}/${id_ecole}`);
    }

    public deleteEcole(id_ecole:any):Observable<any>{
      return this.http.delete(`${url + '/deleteEcole'}/${id_ecole}`);
    }
}
