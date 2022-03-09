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

  constructor(  
    public router : Router,
    public dService : DemandeDonService
  ) {
    this.router.navigateByUrl ('/gestioneleve')
   }

  ngOnInit() {
    this.getAllDemande();
  }
  getAllDemande(){
    this.dService.getAllDemande().subscribe(data=>{
      this.listDemande = data;
    })
  }
  
  detailDemande(id_demande:any){
    this.router.navigateByUrl('/detaileleve', id_demande);
  }
  
  // deleteEleve(id_eleve:any){
  //   this.eService.deleteEleve(id_eleve).subscribe();
  // }

}
 