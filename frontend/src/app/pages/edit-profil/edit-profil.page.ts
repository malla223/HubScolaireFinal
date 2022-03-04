import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { User } from 'src/app/Classe/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage implements OnInit {
    id_user: any;
    userConnect: User = new User();
    photo = environment.photoUser;

  constructor
  (
    public alertController: AlertController, 
    public router: Router,
    private load : LoadingController,
    private userService : UserServiceService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id_user = this.route.snapshot.params['id_user'];

    this.userService.getUserById(this.id_user).subscribe(res=>{
      this.userConnect = res;
    })
  }

  async modUser(){
    const load = await this.load.create({
      message: 'Patientez...',
    });
    await load.present();

    this.userService.updateUser(this.id_user, this.userConnect).subscribe(data=>{
      console.log(data);
      if(data){
        load.dismiss();
        this.presentAlert();
      }else{
        console.log("else===========",data);
      }
        
    })
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

}
