import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  constructor(private alert: AlertController,
    private router : Router) { }

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
            this.router.navigate(['resgi-ecole']);
          }
          
        }
      ]
    })
    await load.present();
  }

}
