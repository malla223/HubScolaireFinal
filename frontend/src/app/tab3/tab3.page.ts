import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userConnect: any;
  photo = environment.photoUser;

  constructor(private route : Router) {}

  ngOnInit() : void {
    //recuperer les données du user connecté
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
  }
  
  onLogout(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.route.navigate(['login']);
    console.log(localStorage.removeItem('user'));
  }
  
  detailUser(id_user){
    this.route.navigateByUrl('edit-profil',id_user);
  }

}
