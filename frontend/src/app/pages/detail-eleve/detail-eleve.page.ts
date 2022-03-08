import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-eleve',
  templateUrl: './detail-eleve.page.html',
  styleUrls: ['./detail-eleve.page.scss'],
})
export class DetailElevePage implements OnInit {

  id_demande:any;
  demandeR: any;
  photo = environment.urlPhotoDon;

  constructor(private router: ActivatedRoute,
    private userService: UserServiceService,
    private modal : ModalController) { }

  ngOnInit() {
    this.id_demande = this.router.snapshot.params['id_demande'];
    console.log("idRoute=========", this.id_demande);
    
    this.userService.getAllDonByUser(this.id_demande).subscribe(res=>{
      this.demandeR = res;
      console.log("res==========",res);
      
    })
  }

  fermer(){
    this.modal.dismiss();
  }
}
