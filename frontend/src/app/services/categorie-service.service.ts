import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../Classe/categorie';

const urlcat = 'http://localhost:8080/api/cat';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private http: HttpClient) { }

  public getAllCategorie() : Observable<Categorie[]>{
    return this.http.get<Categorie[]>(urlcat + '/getAllCat');
  }
}
