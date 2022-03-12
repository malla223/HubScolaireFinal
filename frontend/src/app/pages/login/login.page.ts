import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { EcoleServiceService } from 'src/app/services/ecole-service.service';
import { ResgiEcolePage } from '../resgi-ecole/resgi-ecole.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private userService: UserServiceService,
    private router : Router,
    private load : LoadingController,
    private alert : AlertController,
    private ecoleService : EcoleServiceService,
    private modal : ModalController)
     { 
      localStorage.clear;
      localStorage.removeItem("login");
    }

  ngOnInit() {
  }

  async onLogin(form: NgForm) {
    const loading = await this.load.create({
      message: 'Connexion en cours...',
    });
    await loading.present();
    this.userService.connexion(form.value["login"], form.value["password"]).subscribe((res:any)=>{
      if(res){
        loading.dismiss();
        //mettre l'utilisateur connecté dans le localstorage
        //JSON.stringify converti l'objet en string
        localStorage.setItem("user", JSON.stringify(res));
        console.log("userConnect========", res);
        this.router.navigateByUrl('/tabs');
      }else{
        this.ecoleService.connexion(form.value["login"], form.value["password"]).subscribe(data=>{
          if(data){
            loading.dismiss();
            //mettre l'utilisateur connecté dans le localstorage
            //JSON.stringify converti l'objet en string
            localStorage.setItem("user", JSON.stringify(data));
            console.log("ecoleConnect========", data);
            
            this.router.navigateByUrl('/tabs');
          }else{
            loading.dismiss();
            this.alertError(); 
          }
        })
      }
      
    });
  }

  async alertError(){
    const error = await this.alert.create({
      header : 'Erreur de Connexion',
      message : 'Votre connexion a échoué...',
      buttons : [
        {
          text : 'REESSAYER'
        }
      ]
      
    })
    await error.present();
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
