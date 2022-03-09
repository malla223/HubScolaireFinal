import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private modal : ModalController,
    private route : Router) { }

  ngOnInit() {
    this.id_demande = this.router.snapshot.params['id_demande'];
    
    this.userService.getDemandeById(this.id_demande).subscribe(res=>{
      this.demandeR = res; 
    })
  }

  async fermer(){
    this.route.navigate(['/tabs'])
    // await this.modal.dismiss();
  }
}
