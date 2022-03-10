import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const Url = 'http://localhost:8080/api/ecole';

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
}
