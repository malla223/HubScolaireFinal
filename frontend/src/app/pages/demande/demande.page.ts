import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EcoleServiceService } from 'src/app/services/ecole-service.service';
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
     private route : Router,
     private userService : UserServiceService,
     private ecoleService :EcoleServiceService) { }

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
          name: 'nom_parent',
          placeholder : 'Nom Complet d\'un parent'
        },
        
        {
          name: 'tel_parent',
          placeholder : 'Contact du parent',
          type: 'number'
        },
        {
          name: 'classe',
          placeholder : 'Classe de l\'élève'
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
            if(data.nom_eleve, data.nom_ecole,
               data.tel_ecole, data.adresse_ecole,
               data.nom_parent, data.tel_parent,
               data.classe){
              //permet de faire l'enregistrement avec l'id du don correspondant
              this.demandeDon = {
                'nom_eleve': data.nom_eleve,
                'nom_ecole': data.nom_ecole,
                'tel_ecole':  data.tel_ecole,
                'adresse_ecole': data.adresse_ecole,
                'don': this.don_recuperer,
                'user': this.userConnect,
                'nom_parent':data.nom_parent,
                'tel_parent':data.tel_parent,
                'classe':data.classe
              };
                this.effectuerDemande();
                this.route.navigate(['/tabs']);
               }
            
          }
        }
      ]
    });
 
    await load.present();
  
  }


  async alertCE(id_don : any){
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
          name: 'classe',
          placeholder : 'Classe de l\'élève'
        },
        {
          name: 'nom_parent',
          placeholder : 'Nom complet d\'un parent'
        },
        {
          name: 'tel_parent',
          placeholder : 'Téléphone du parent',
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
            if(data.nom_eleve,
              data.classe, 
              data.nom_parent ,
               data.tel_parent){
                 console.log("data======",data);
                 
              //permet de faire l'enregistrement avec l'id du don correspondant
              this.demandeDon = {
                'nom_eleve': data.nom_eleve,
                'tel_parent':  data.tel_parent,
                'classe': data.classe,
                'don': this.don_recuperer,
                'nom_parent': data.nom_parent,
                'ecole': this.userConnect,
                
              };
                this.effectuerDemandeEcole();
                this.route.navigate(['tabs']);
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
          buttons:[
            {
              text:'OK'
            }
          ]
        })
          await load.present();     
    }


    async effectuerDemandeEcole() {     
      this.demander = await this.ecoleService.demandeDon(this.demandeDon).toPromise();
        if(this.demander.id_demande){
          this.msg='Votre demande de don a été effectué avec succès.';
        }else{
          this.msg='Vous avez déjà fait la demande de ce don';
        }
        const load = await this.alertController.create({
          header: 'Message',
          subHeader :this.msg,
          buttons:[
            {
              text:'OK'
            }
          ]
        })
          await load.present();     
    }

    goBack(){
      this.route.navigate(['tabs']);
    }

}
