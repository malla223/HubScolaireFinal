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
  ecoles: any;
  ecoleAttente: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  ecoleEnAttente = false;
  ecoleActif = false;
  data_Ecole : any;
  ecoleEtat: any;

  constructor(
    public router: Router,
    private ecoleService : EcoleService
    ) {
    this.router.navigateByUrl('/gestionecole');
   }

  ngOnInit() {
    this.getAllEcole();
    this.getAllEcoleAttente();
    this.data_Ecole = 'attente';
  }

  getAllEcole(){
    this.ecoleService.getAllEcole().subscribe(data=>{
      this.ecole = data;
    })
  }

  getAllEcoleAttente(){
    this.ecoleService.getAllEcoleAttente().subscribe(data=>{
      this.ecoleAttente = data;
    })
  }

  detailEcole(id_ecole:any){
    this.router.navigateByUrl('/detailecole', id_ecole);
  }

  detailEcoleAttente(id_ecole:any){
    this.router.navigateByUrl('/detail-ecole-attente', id_ecole);
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

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllEcole();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllEcole();
  }

  users(event: any){
    this.ecoles=[];
    if(event.target.value == 'Etablissement en Attente' || event.target.value == ''){
      this.ecoleEnAttente = false;
      this.ecoleActif = false;
      this.ecoleEtat = true;
      this.ecoles = this.data_Ecole;
    }
    if(event.target.value == 'Etablissement actif'){
      this.ecoleEtat = false;
      this.ecoleActif = false;
      this.ecoleEnAttente = true;
      this.ecoles = this.data_Ecole;
    }
  }
}
