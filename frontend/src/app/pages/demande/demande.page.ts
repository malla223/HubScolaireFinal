import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.page.html',
  styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {

  id_don:any;
  don: any;
  demander: any;
  demandeDon: any;
  don_recuperer: any;
  userConnect: any;
  photo = environment.urlPhotoDon;
msg:any;
  constructor(private alertController : AlertController,
     private router: ActivatedRoute,
     private userService : UserServiceService) { }

  ngOnInit() {
    this.id_don = this.router.snapshot.params['id_don'];
    this.userService.getDonById(this.id_don).subscribe( data => {
      this.don = data;
    });
    //recuperer l'utilisateur connécté dans le local storage
    //JSON.parse converti en Object les données de userconnect qui etait en strng
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
  }

  async alertC(id_don : any){
    //permet de recuperer l'id du don avant confirmation de la  demande
    this.userService.getDonById(id_don).subscribe((dr: any)=>{
      this.don_recuperer = dr;
    })
    const load = await this.alertController.create({
      header: 'Demande de don',
      inputs:[
        {
          name: 'nom_eleve',
          placeholder : 'Nom & Prénom élève'
        },
        {
          name: 'nom_ecole',
          placeholder : 'Etablissement'
        },
        {
          name: 'adresse_ecole',
          placeholder : 'Adresse Etablissement'
        },
        {
          name: 'tel_ecole',
          placeholder : 'Contact Etablissement',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'ANNULER'
        },
        {
          text: 'CONFITMER',
          handler: data =>{
            if(data.nom_eleve, data.nom_ecole, data.tel_ecole, data.adresse_ecole){
              //permet de faire l'enregistrement avec l'id du don correspondant
              this.demandeDon = {
                'nom_eleve': data.nom_eleve,
                'nom_ecole': data.nom_ecole,
                'tel_ecole':  data.tel_ecole,
                'adresse_ecole': data.adresse_ecole,
                'don': this.don_recuperer,
                'user': this.userConnect
              };
                this.effectuerDemande();
               }
            
          }
        }
      ]
    });
 
    await load.present();
  
  }

//fin                                           
    async effectuerDemande() {     
      this.demander = await this.userService.demandeDon(this.demandeDon).toPromise();
        if(this.demander.id_demande){
          this.msg='Votre demande de don a été effectué avec succès.';
        }else{
          this.msg='Vous avez déjà fait la demande de ce don';
        }
        const load = await this.alertController.create({
          header: 'Message',
          subHeader :this.msg,
        })
          await load.present();     
    }

}
