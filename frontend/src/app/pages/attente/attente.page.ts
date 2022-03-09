import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-attente',
  templateUrl: './attente.page.html',
  styleUrls: ['./attente.page.scss'],
})
export class AttentePage implements OnInit {

  id_don: any;
  don_attente:any;
  photo = environment.urlPhotoDon;
  constructor(
    private alertController: AlertController,
     private router : Router,
     private route : ActivatedRoute,
     private uservice : UserServiceService) { }

  ngOnInit() {
    this.id_don = this.route.snapshot.params['id_don'];
    this.uservice.getDonById(this.id_don).subscribe(res=>{
      this.don_attente = res;
    })
  }

  public annulerDon(id_don:any){
    this.uservice.annulerDon(id_don).subscribe();
  }

  async alertA(){
    const load = await this.alertController.create({
      header: 'Alerte',
      subHeader: 'Vous êtes sure d\'annuler votre don ?',
      buttons: [
        {
          text: 'NON'
        },
        {
          text: 'OUI',
          handler: () =>{
            this.annulerDon(this.id_don);
            this.router.navigate(['tabs']);
          }
        }
      ]
    });

    await load.present();
  }
}
