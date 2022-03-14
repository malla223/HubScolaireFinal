import { Component, OnInit } from '@angular/core';
import { EcoleService } from '../Services/ecole.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-ecole',
  templateUrl: './gestion-ecole.component.html',
  styleUrls: ['./gestion-ecole.component.css']
})
export class GestionEcoleComponent implements OnInit {

  ecole:any;

  constructor(
    public router: Router,
    private ecoleService : EcoleService
    ) {
    this.router.navigateByUrl('/gestionecole');
   }

  ngOnInit() {
    this.getAllEcole();
  }

  getAllEcole(){
    this.ecoleService.getAllEcole().subscribe(data=>{
      this.ecole = data;
    })
  }

  detailEcole(id_ecole:any){
    this.router.navigateByUrl('/detailecole', id_ecole);
  }

  editeEcole(id_ecole:any){
    this.router.navigateByUrl('/editecole', id_ecole);
  }

  deleteEcole(id_ecole:any){
    this.ecoleService.deleteEcole(id_ecole).subscribe();
    window.location.reload();
    this.router.navigateByUrl('gestionecole', {skipLocationChange: true}).then(()=>
    this.router.navigate(['gestionecole']));
  }

  alertConfirmation(id_ecole : any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes sûre de supprimer cet établissement ?',
      icon: 'warning',
      iconColor:'#ddb307',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'SUPPRIMER',
      
    }).then((result) => {
      if (result.value) {
        this.deleteEcole(id_ecole);
        Swal.fire('Suppression!', 'supprimé avec succès.', 'success');
      }
    });
  }


}
