import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NiveauService } from '../Services/niveau.service';

@Component({
  selector: 'app-gestion-niveau',
  templateUrl: './gestion-niveau.component.html',
  styleUrls: ['./gestion-niveau.component.css']
})
export class GestionNiveauComponent implements OnInit {

  
  niveauR: any;

  constructor(private niveauService : NiveauService,
    private router : Router) { }

  ngOnInit() {

    this.niveauService.getAllNiveau().subscribe(res=>{
      this.niveauR = res;
    })
    
  }

  detailNiveau(id_niveau : any){
    this.router.navigateByUrl('/detailNiveau', id_niveau);
  }

  editNiveau(id_niveau : any){
    this.router.navigateByUrl('/editNiveau', id_niveau);
  }

  deleteNiveau(id_niveau: any){
    this.niveauService.deleteNiveau(id_niveau).subscribe();
  }

  alertConfirmation(id_admin : any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes sûre de supprimé ce niveau ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'NON',
      confirmButtonText: 'OUI',
      
    }).then((result) => {
      if (result.value) {
        this.deleteNiveau(id_admin);
        Swal.fire('Suppression!', 'supprimé avec succès.', 'success');
      }
    });
  }

}
