import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const url = 'http://localhost:8080/api/eleve'

@Injectable({
  providedIn: 'root'
})
export class EleveServiceService {

  constructor(
    private http : HttpClient) { }

    public getAllEleve(){
      return this.http.get(url + '/getAllEleve');
    }

    public getEleveById(id_eleve:any):Observable<any>{
      return this.http.get(`${url + '/getEleveById'}/${id_eleve}`);
    }

    public deleteEleve(id_eleve: any):Observable<any>{
        return this.http.delete(`${url + '/deleteEleve'}/${id_eleve}`);
    }

    
}
