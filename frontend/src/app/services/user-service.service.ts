import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Don } from '../Classe/don';
import { DemandeDon } from '../Classe/demande-don';
import { User } from '../Classe/user';

const Url = 'http://localhost:8080/api/user';
const urlDon = 'http://localhost:8080/api/don';
const urlUser = 'http://localhost:8080/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  public saveUser(formdata: FormData): Observable<any>{
   return this.http.post(Url + '/saveUser',formdata);
   }

   public saveDon(formdata: FormData): Observable<any>{
    return this.http.post(urlDon + '/saveDon',formdata);
    }

  public connexion(login: String, password: String){
    return this.http.get(Url + '/auth/' + login + '/' + password);
  }

  public getAllDonConfirmer() : Observable<Don[]>{
    return this.http.get<Don[]>(urlDon + '/getDonConfirmer');
  }

  public getAllDemandeDonAttenteByUser(id_user: any): Observable<DemandeDon[]>{
    return this.http.get<DemandeDon[]>(urlDon + '/getAllDemandeUser/' + id_user);
  }

  public getAllDonByUser(id_user: any): Observable<Don[]>{
    return this.http.get<Don[]>(urlDon + '/getDonByUser/' + id_user);
  }

  public getNombreDEmandeByUser(id_user: any): Observable<DemandeDon[]>{
    return this.http.get<DemandeDon[]>(urlDon + '/nbreDemandeAttente/' + id_user);
  }

  public getNombreDonRecuByUser(id_user: any): Observable<DemandeDon[]>{
    return this.http.get<DemandeDon[]>(urlDon + '/nbreDonRecu/' + id_user);
  }

  public getAllDonEncours(): Observable<Don[]>{
    return this.http.get<Don[]>(urlDon + '/getDonEncours');
  }

  public demandeDon(data: any): Observable<any>{
    return this.http.post(urlDon + '/demandeDon', data);
    }

    getDonById(id_don: any): Observable<Don> {
      return this.http.get(`${urlDon + '/getDonId'}/${id_don}`);
    }

    getUserById(id_user: any): Observable<User> {
      return this.http.get(`${urlUser + '/getUserById'}/${id_user}`);
    }

    getDemandeById(id_demande: any):Observable<DemandeDon>{
      return this.http.get(`${urlDon + '/getDemandeById'}/${id_demande}`);
    }

    updateUser(id_user: any, data: any): Observable<any> {
      return this.http.put(`${urlUser + '/modifierUser'}/${id_user}`, data);
    }

    updateDon(id_don: any, data: any): Observable<any> {
      return this.http.put(`${urlDon + '/modifierDon'}/${id_don}`, data);
    }

    annulerDemande(id_demande:any):Observable<DemandeDon>{
      return this.http.get(`${urlDon + '/annulerD'}/${id_demande}`);
    }

    annulerDon(id_don:any):Observable<Don>{
      return this.http.get(`${urlDon + '/annulerDon'}/${id_don}`);
    }

}
