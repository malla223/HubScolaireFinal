import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalComponent } from '../componets/modal/modal.component';
import { PasswordModalComponent } from '../componets/password-modal/password-modal.component';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  userConnect: any;
  photo = environment.photoUser;
  nombreDemande: any;
  donRecu: any;

  constructor(private route : Router, private modal : ModalController,
    private userService : UserServiceService) {}

  ngOnInit() : void {
    //recuperer les données du user connecté
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);

    this.getNombreUser();
    this.getDonRecuUser();
  }
  
  onLogout(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.route.navigate(['login']);
    console.log(localStorage.removeItem('user'));
  }

  async detailUser(){
    const popup = await this.modal.create({
      component: ModalComponent,
      swipeToClose:true
    })
    await popup.present();
  }

  async editPassword(){
    const popup = await this.modal.create({
      component: PasswordModalComponent,
      swipeToClose:true
    })
    await popup.present();
  }

  getNombreUser(){
    this.userService.getNombreDEmandeByUser(this.userConnect.id_user).subscribe(res=>{
      this.nombreDemande = res;
    })
  }

  getDonRecuUser(){
    this.userService.getNombreDonRecuByUser(this.userConnect.id_user).subscribe(data=>{
      this.donRecu = data;
    })
  }
}
