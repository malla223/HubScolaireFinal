import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeDonService } from '../Services/demande-don.service';


@Component({
  selector: 'app-gestion-eleve',
  templateUrl: './gestion-eleve.component.html',
  styleUrls: ['./gestion-eleve.component.css']
})
export class GestionEleveComponent implements OnInit {

  listDemande : any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  eleveEtat = false;
  demandeEtat = false;
  don : any;
  data_Eleve : any;
  userConnect : any;

  constructor(  
    public router : Router,
    public dService : DemandeDonService
  ) {
    this.router.navigateByUrl ('/gestioneleve')
   }

  ngOnInit() {
    
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
    console.log("idUser=======",this.userConnect);
    

    this.getAllDemande();
    this.data_Eleve = 'utilisateur';
  }
  getAllDemande(){
    this.dService.getAllEleveByUser(this.userConnect.id_user).subscribe(data=>{
      this.listDemande = data;
    })
  }
  
  detailDemande(id_demande:any){
    this.router.navigateByUrl('/detaileleve', id_demande);
  }

  users(event: any){
    this.don=[];
    if(event.target.value == 'Utilisateur Simple' || event.target.value == ''){
      this.demandeEtat = false;
      this.eleveEtat = true;
      this.don = this.data_Eleve;
    }
    if(event.target.value == 'Etablissement'){
      this.eleveEtat = false;
      this.demandeEtat = true;
      this.don = this.data_Eleve;
    }
  }
  
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllDemande();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllDemande();
  }

}
 