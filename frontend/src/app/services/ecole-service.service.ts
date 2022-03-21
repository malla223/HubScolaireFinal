import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeDon } from '../Classe/demande-don';


const Url = 'http://localhost:8080/api/ecole';
const urlDon = 'http://localhost:8080/api/don';

@Injectable({
  providedIn: 'root'
})
export class EcoleServiceService {

  constructor(private http: HttpClient) { }

  public saveEcole(formdata: FormData): Observable<any>{
    return this.http.post(Url + '/saveEcole',formdata);
    }

    updateEcole(id_ecole: any, data: any): Observable<any> {
      return this.http.put(`${Url + '/modifierEccole'}/${id_ecole}`, data);
    }

    public connexion(login: String, password: String){
      return this.http.get(Url + '/auth/' + login + '/' + password);
    }

    public getAllDemandeDonAttenteByEcole(id_ecole: any): Observable<any>{
      return this.http.get(urlDon + '/getAllDemandeEcole/' + id_ecole);
    }

    public getAllEleveByEcole(id_ecole: any): Observable<any>{
      return this.http.get(urlDon + '/getAllEleveEcole/' + id_ecole);
    }

    public demandeDon(data: any): Observable<any>{
      return this.http.post(urlDon + '/demandeDon', data);
      }

      public demandeDonEcole(data: any): Observable<any>{
        return this.http.post(urlDon + '/demandeDonE', data);
        }

      public getNombreDEmandeByEcole(id_ecole: any): Observable<DemandeDon[]>{
        return this.http.get<DemandeDon[]>(urlDon + '/nbreDemandeAttenteEcole/' + id_ecole);
      }
    
      public getNombreDonRecuByEcole(id_ecole: any): Observable<DemandeDon[]>{
        return this.http.get<DemandeDon[]>(urlDon + '/nbreDonRecuEcole/' + id_ecole);
      }

      public getNombreEleveEcole(id_ecole: any): Observable<DemandeDon[]>{
        return this.http.get<DemandeDon[]>(urlDon + '/nbreEleveEcole/' + id_ecole);
      }
}
