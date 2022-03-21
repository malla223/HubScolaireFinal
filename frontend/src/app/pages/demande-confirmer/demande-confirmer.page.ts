import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-demande-confirmer',
  templateUrl: './demande-confirmer.page.html',
  styleUrls: ['./demande-confirmer.page.scss'],
})
export class DemandeConfirmerPage implements OnInit {

  id_demande: any;
  demandedon: any;
  photo = environment.urlPhotoDon;
  userConnect: any;

  constructor(
    private alertController: AlertController, 
    private router: Router,
     private route: ActivatedRoute,
     private userService : UserServiceService) { }

  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
    
    this.id_demande = this.route.snapshot.params['id_demande'];
    this.userService.getDemandeById(this.id_demande).subscribe(res=>{
      this.demandedon = res;
    })

    
  }


  public annulerD(id_demande:any){
    this.userService.annulerDemande(id_demande).subscribe();
  }

  goBack(){
    this.router.navigate(['tabs']);
  }

  async alertA(){
    const load = await this.alertController.create({
      header: 'Alerte',
      message: 'Vous êtes sure d\'annuler votre demande en cours ?',
      buttons: [
        {
          text: 'NON'
        },
        {
          text: 'OUI',
          handler: () =>{
            this.annulerD(this.id_demande);
            this.message();
            this.router.navigate(['tabs']);
          }
        }
      ]
    });

    await load.present();
  }

  async message(){
    const loading = await this.alertController.create({
      header:'Message',
      message:'Votre demande a été annuler',
      buttons:[
        {
          text:'OK',
        }
      ]
    }) 
    await loading.present();
  }
}
