import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Don } from '../Classes/don';

const url = 'http://localhost:8080/api/don';

@Injectable({
  providedIn: 'root'
})
export class DonServiceService {

  constructor(
    private http : HttpClient) { }

  public getAllDonAttente(){
    return this.http.get(url + '/getDonAttente');
  }

  public getAllDemandeDonAttente(){
    return this.http.get(url + '/getDemandeAttente');
  }


  public getAllDemandeDonEcoleAttente(){
    return this.http.get(url + '/getDemandeAttenteEcole');
  }

  public getAllNombreDonConfirmer(){
    return this.http.get(url + '/nbreDonC');
  }

  public getAllNombreDonAttente(){
    return this.http.get(url + '/nbreDonA');
  }

  public getNombreDonRecu(){
    return this.http.get(url+ '/nbreDonRecu');
  }

  public getNombreDemandeAttente(){
    return this.http.get(url+ '/nbreDonAttente');
  }

  getDonAttenteById(id_don: any): Observable<Don> {
    return this.http.get(`${url + '/getDonId'}/${id_don}`);
  }

  getDemandeDonById(id_demande: any): Observable<any> {
    return this.http.get(`${url + '/getDemandeById'}/${id_demande}`);
  }

  public confimerDon(id_don : any) : Observable<Don>{
    return this.http.get(`${url + '/confirmerDon'}/${id_don}`);
  }

  public annulerDon(id_don : any) : Observable<Don>{
    return this.http.get(`${url + '/annulerDon'}/${id_don}`);
  }

  public confimerDemadeDon(id_demande : any) : Observable<any>{
    return this.http.get(`${url + '/confirmerD'}/${id_demande}`);
  }

  public confimerDemadeDonEcole(id_demande : any) : Observable<any>{
    return this.http.get(`${url + '/confirmerDonEcole'}/${id_demande}`);
  }

  public annulerDemandeDon(id_demande : any) : Observable<any>{
    return this.http.get(`${url + '/annulerD'}/${id_demande}`);
  }

  public saveDon(form : FormData) : Observable<any>{
    return this.http.post(url + '/saveDon', form);
  }

  public updateDon(id_don: any, data: any): Observable<any> {
    return this.http.put(`${url + '/modifierDon'}/${id_don}`, data);
  } 
  
  public getAllNiveau(){
    return this.http.get(url + '/getAllNiveau');
  }
  public getAllCategorie(){
    return this.http.get(url + '/getAllCat');
  }
}
