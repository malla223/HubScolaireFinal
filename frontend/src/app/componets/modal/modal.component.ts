import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  userConnect: any;
  id_user: any;

  constructor(private modal : ModalController,
    private alertController: AlertController,
    private userService : UserServiceService,
    private router : Router,
    private load : LoadingController) { }

  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
  }

  fermer(){
    this.modal.dismiss();
  }

  async modUser(){
    const load = await this.load.create({
      message: 'Patientez...',
    });
    await load.present();
    
    this.userService.updateUser(this.userConnect.id_user, this.userConnect).subscribe(data=>{
      if(data){
        load.dismiss();
        this.presentAlert();
      }    
    })
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Message',
      subHeader: 'Votre profil a été modifié avec succés.',
      buttons: [
        {
          text: 'OK',
          handler: () =>{
            this.router.navigate(['/tabs']);
          }
        }
      ]
    });
    await alert.present();
  }
}
