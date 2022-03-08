import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DetailElevePage } from '../pages/detail-eleve/detail-eleve.page';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userConnect: any;
  photo = environment.photoUser;
  demandeUserR: any;
  dataFromModal: string;

  constructor(private route : Router,
     private uService : UserServiceService,
    private modal : ModalController, ) {}

  ngOnInit() : void {
    //recuperer les données du user connecté
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);

    this.getDemandeByUser();
  }

  
  detailUser(id_user){
    this.route.navigateByUrl('edit-profil',id_user);
  }


  getDemandeByUser(){
    this.uService.getAllEleveByUser(this.userConnect.id_user).subscribe(res=>{
      this.demandeUserR = res;
    })
  }

  async detailEleve(id_demande:any){
    this.route.navigateByUrl('/detail-eleve', id_demande);
    const popup = await this.modal.create({
      component: DetailElevePage,
      swipeToClose:true
    })
    await popup.present();
  }


}
