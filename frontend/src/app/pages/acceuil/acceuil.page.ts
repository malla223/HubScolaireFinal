import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ResgiEcolePage } from '../resgi-ecole/resgi-ecole.page';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  constructor(private alert: AlertController,
    private router : Router,
    private modal : ModalController) { }

  ngOnInit() {
  }

  async alertInscri(){
    const load = await this.alert.create({
      header:'Vous êtes ???',
      buttons:[
        {
          text:'Utilisateur',
          handler:()=>{
              this.router.navigate(['register']);
          }
        },
        {
          text:'Une ECOLE',
          handler:()=>{
            this.modalF();
          }
          
        }
      ]
    })
    await load.present();
  }

  async modalF(){
    const popup =  await this.modal.create({
      component: ResgiEcolePage
    })
    await popup.present();
  }
}
