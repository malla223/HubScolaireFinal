import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { EcoleServiceService } from 'src/app/services/ecole-service.service';

@Component({
  selector: 'app-edit-profil-ecole',
  templateUrl: './edit-profil-ecole.page.html',
  styleUrls: ['./edit-profil-ecole.page.scss'],
})
export class EditProfilEcolePage implements OnInit {

  userConnect: any;
  id_user: any;

  constructor(private modal : ModalController,
    private alertController: AlertController,
    private ecoleService : EcoleServiceService,
    private router : Router,
    private load : LoadingController) { }

  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
  }

  fermer(){
    this.modal.dismiss();
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

  async modEcole(){
    const load = await this.load.create({
      message: 'Patientez...',
    });
    await load.present();
    
    this.ecoleService.updateEcole(this.userConnect.id_ecole, this.userConnect).subscribe(data=>{
      if(data){
        load.dismiss();
        this.presentAlert();
      }    
    })
  }
}
