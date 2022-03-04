import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Niveau } from '../Classe/niveau';


const urlniveau = 'http://localhost:8080/api/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauServiceService {

  constructor(private http : HttpClient) { }

  public getAllNiveau() : Observable<Niveau[]>{
    return this.http.get<Niveau[]>(urlniveau + '/getAllNiveau');
  }
}
