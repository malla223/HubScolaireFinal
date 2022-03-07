import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../Classes/categorie';

const url = 'http://localhost:8080/api/cat'

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  public saveCAt(data : any): Observable<Categorie>{
    return this.http.post(url + '/saveCat', data);
  }

  public getAllCategorie(){
    return this.http.get(url + '/getAllCat');
  }

  public getCategorieById(id_cat: any): Observable<Categorie> {
    return this.http.get(`${url + '/getCatById'}/${id_cat}`);
  }

  public getCategorieByLibelle(libelle: any): Observable<Categorie> {
    return this.http.get(`${url + '/getCatByLibelle'}/${libelle}`);
  }

  
  public delteCat(id_cat:any):Observable<any>{
    return this.http.delete(`${url + '/deleteCat'}/${id_cat}`);
  }

  public updateCat(id_cat: any, data: any): Observable<any> {
    return this.http.put(`${url + '/modifierCat'}/${id_cat}`, data);
  }
}
