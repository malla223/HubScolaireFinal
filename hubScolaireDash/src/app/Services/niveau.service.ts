import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Niveau } from '../Classes/niveau';

const url = 'http://localhost:8080//api/niveau'

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  constructor(private http: HttpClient) { }

  public saveNiveau(data : any): Observable<Niveau>{
    return this.http.post(url + '/saveNiveau', data);
  }

  public getAllNiveau(){
    return this.http.get(url + '/getAllNiveau');
  }

  public getNiveauById(id_niveau: any): Observable<Niveau> {
    return this.http.get(`${url + '/getNiveauById'}/${id_niveau}`);
  }

  
  public deleteNiveau(id_niveau:any):Observable<any>{
    return this.http.delete(`${url + '/deleteNiveau'}/${id_niveau}`);
  }

  public modifierNiveau(id_niveau: any, data: any): Observable<any> {
    return this.http.put(`${url + '/modifierNiveau'}/${id_niveau}`, data);
  }
}
