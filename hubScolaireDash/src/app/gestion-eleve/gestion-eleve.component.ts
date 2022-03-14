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
  listeDemandeU : any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  constructor(  
    public router : Router,
    public dService : DemandeDonService
  ) {
    this.router.navigateByUrl ('/gestioneleve')
   }

  ngOnInit() {
    this.getAllDemande();
    this.getAllDemandeU();
  }
  getAllDemande(){
    this.dService.getAllEleve().subscribe(data=>{
      this.listDemande = data;
    })
  }
  
  getAllDemandeU(){
    this.dService.getAllEleveU().subscribe(data=>{
      this.listeDemandeU = data;
    })
  }

  detailDemande(id_demande:any){
    this.router.navigateByUrl('/detaileleve', id_demande);
  }

  detaileleve(id_demande:any){
    this.router.navigateByUrl('/detaileleveecole', id_demande);
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
 