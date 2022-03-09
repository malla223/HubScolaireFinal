import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DetailElevePageModule } from '../pages/detail-eleve/detail-eleve.module';
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
  filterTerm: string;

  constructor(private route : Router,
     private uService : UserServiceService,
    private modal : ModalController, ) {}

  ngOnInit() : void {
    //recuperer les données du user connecté
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);

    this.getDemandeByUser();
  }

  getDemandeByUser(){
    this.uService.getAllEleveByUser(this.userConnect.id_user).subscribe(res=>{
      this.demandeUserR = res;
    })
  }

  async detailEleve(id_demande:any){
    await this.route.navigateByUrl('/detail-eleve', id_demande);
    const popup = await this.modal.create({
      component: DetailElevePageModule
    })
    await popup.present();
  }
}
