import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EcoleService } from '../Services/ecole.service';

@Component({
  selector: 'app-detailecole-attente',
  templateUrl: './detailecole-attente.component.html',
  styleUrls: ['./detailecole-attente.component.css']
})
export class DetailecoleAttenteComponent implements OnInit {

  id_ecole:any;
  detailEcole:any;
  
  constructor(private router: ActivatedRoute,
    private eService : EcoleService,
    private route : Router) { }

  ngOnInit() {
    this.id_ecole = this.router.snapshot.params['id_ecole'];

    this.eService.getEcoleById(this.id_ecole).subscribe(res=>{
      this.detailEcole = res;
    })
  }

  activerCompte(){
    this.eService.activerC(this.id_ecole).subscribe();
    this.successConfirm();
    this.route.navigateByUrl('gestionecole', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionecole']));
  }

  annulerC(){
    this.eService.annulerC(this.id_ecole).subscribe();
    this.route.navigateByUrl('gestionecole', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionecole']));
    window.location.reload();
  }

  alertConfirmation() {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous allez annuler la demande d\'activation de ce compte ?',
      icon: 'warning',
      iconColor:'#ddb307',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'ANNULER',
      
    }).then((result) => {
      if (result.value) {
        this.annulerC();
        Swal.fire('ALERTE!', 'Compte inactiver.', 'success');
      }
    });
  }

  successConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Compte activer avec succès',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
