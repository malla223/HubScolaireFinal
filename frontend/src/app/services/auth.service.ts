import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onLogout(){
    localStorage.removeItem('user');
    localStorage.clear(); 
  }
}
