import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DonServiceService } from '../Services/don-service.service';

@Component({
  selector: 'app-detail-don-confirme',
  templateUrl: './detail-don-confirme.component.html',
  styleUrls: ['./detail-don-confirme.component.css']
})
export class DetailDonConfirmeComponent implements OnInit {

  
  id_don:any;
  donC: any;
  photo = environment.photoDon;

  constructor(
    private router : ActivatedRoute,
    private donService : DonServiceService,
    private route : Router) { }

  ngOnInit() {
    this.id_don = this.router.snapshot.params['id_don'];
    
    this.donService.getDonConfimeById(this.id_don).subscribe(res=>{
      this.donC = res;
    })
  }


  annulerDon(){
    this.donService.annulerDon(this.id_don).subscribe();
    this.route.navigateByUrl('gestionDon', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionDon']));
    window.location.reload();
  }

  successConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Don confirmer avec succès',
      showConfirmButton: false,
      timer: 2000
    })
  }

  alertConfirmation() {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous allez annuler ce don ?',
      icon: 'warning',
      iconColor:'#ddb307',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'ANNULER',
      
    }).then((result) => {
      if (result.value) {
        this.annulerDon();
        Swal.fire('ALERTE!', 'Don annuler avec succès.', 'success');
      }
    });
  }
}
