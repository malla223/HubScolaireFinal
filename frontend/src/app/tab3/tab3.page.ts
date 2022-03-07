import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AcceuilPage } from '../pages/acceuil/acceuil.page';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userConnect: any;
  photo = environment.photoUser;
  demandeUserR: any;
  dataFromModal: string;

  constructor(private route : Router,
     private uService : UserServiceService,
    private alertModal : AlertController) {}

  ngOnInit() : void {
    //recuperer les données du user connecté
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);

    this.getDemandeByUser();
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


  getDemandeByUser(){
    this.uService.getAllEleveByUser(this.userConnect.id_user).subscribe(res=>{
      this.demandeUserR = res;
    })
  }


}
