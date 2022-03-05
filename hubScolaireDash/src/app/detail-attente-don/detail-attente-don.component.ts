import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DonServiceService } from '../Services/don-service.service';

@Component({
  selector: 'app-detail-attente-don',
  templateUrl: './detail-attente-don.component.html',
  styleUrls: ['./detail-attente-don.component.css']
})
export class DetailAttenteDonComponent implements OnInit {

  id_demande : any;
  demandeR : any;
  photo = environment.photoDon;

  constructor(private router : ActivatedRoute, private donService : DonServiceService, private route : Router) { }

  ngOnInit() {
    this.id_demande = this.router.snapshot.params['id_demande'];

    this.donService.getDemandeDonById(this.id_demande).subscribe(res=>{
      this.demandeR = res;
    })
  }

  confirmerDemande(){
    this.donService.confimerDemadeDon(this.id_demande).subscribe();
    this.successConfirm();
    this.route.navigateByUrl('gestionDon', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionDon']));
  }

  annulerDemande(){
    this.donService.annulerDemandeDon(this.id_demande).subscribe();
    this.route.navigateByUrl('gestionDon', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionDon']));
  }

  successConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Demande accepter avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

  alertConfirmation() {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes d\'annuler cette demande ?',
      icon: 'warning',
      iconColor:'#ddb307',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'ANNULER',
      
    }).then((result) => {
      if (result.value) {
        this.annulerDemande();
        Swal.fire('ALERTE!', 'Demande de don annuler.', 'success');
      }
    });
  }

}
