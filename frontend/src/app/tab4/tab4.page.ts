import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalComponent } from '../componets/modal/modal.component';
import { PasswordModalComponent } from '../componets/password-modal/password-modal.component';
import { EditProfilEcolePage } from '../pages/edit-profil-ecole/edit-profil-ecole.page';
import { EcoleServiceService } from '../services/ecole-service.service';
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
  nombreDemandeE: any;
  donRecuE: any;
  donAttenteUser: any;

  constructor(private route : Router, private modal : ModalController,
    private userService : UserServiceService,
    private ecoleService : EcoleServiceService) {}

  ngOnInit() : void {
    //recuperer les données du user connecté
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);

    this.getNombreUser();
    this.getDonRecuUser();
    this.getNombreEcole();
    this.getDonRecuEcole();
    this.getDonAttenteUser();
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

  async detaiEcole(){
    const popup = await this.modal.create({
      component: EditProfilEcolePage,
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

  getDonAttenteUser(){
    this.userService.getNombreDonAttenteUser(this.userConnect.id_user).subscribe(data=>{
      this.donAttenteUser = data;
    })
  }

  getNombreEcole(){
    this.ecoleService.getNombreDEmandeByEcole(this.userConnect.id_ecole).subscribe(res=>{
      this.nombreDemandeE = res;
    })
  }

  getDonRecuEcole(){
    this.ecoleService.getNombreDonRecuByEcole(this.userConnect.id_ecole).subscribe(data=>{
      this.donRecuE = data;
    })
  }

}
