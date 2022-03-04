import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DonServiceService } from '../Services/don-service.service';

@Component({
  selector: 'app-detail-don',
  templateUrl: './detail-don.component.html',
  styleUrls: ['./detail-don.component.css']
})
export class DetailDonComponent implements OnInit {

  id_don:any;
  donR: any;
  photo = environment.photoDon;

  constructor(
    private router : ActivatedRoute,
    private donService : DonServiceService,
    private route : Router) { }

  ngOnInit() {
    this.id_don = this.router.snapshot.params['id_don'];
    
    this.donService.getDonAttenteById(this.id_don).subscribe(res=>{
      this.donR = res;
    })
  }

  confirmerDon(){
    this.donService.confimerDon(this.id_don).subscribe();
    this.successConfirm();
    this.route.navigateByUrl('gestionDon', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionDon']));
  }

  annulerDon(){
    this.donService.annulerDon(this.id_don).subscribe();
    this.route.navigateByUrl('gestionDon', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionDon']));
  }

  successConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Don confirmer avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

  alertConfirmation() {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes d\'annuler ce don ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'NON',
      confirmButtonText: 'OUI',
      
    }).then((result) => {
      if (result.value) {
        this.annulerDon();
        Swal.fire('ALERTE!', 'Don annuler avec succès.', 'success');
      }
    });
  }

}
