import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EleveServiceService } from '../Services/eleve-service.service';

@Component({
  selector: 'app-gestion-eleve',
  templateUrl: './gestion-eleve.component.html',
  styleUrls: ['./gestion-eleve.component.css']
})
export class GestionEleveComponent implements OnInit {

  listEleve : any;

  constructor(  
    public router : Router,
    public eService : EleveServiceService
  ) {
    this.router.navigateByUrl ('/gestioneleve')
   }

  ngOnInit() {
    this.getEleveActif();
  }
  getEleveActif(){
    this.eService.getAllEleve().subscribe(data=>{
      this.listEleve = data;
    })
  }
  
  detailEleve(id_eleve:any){
    this.router.navigateByUrl('/detaileleve', id_eleve);
  }
  
  deleteEleve(id_eleve:any){
    this.eService.deleteEleve(id_eleve).subscribe();
  }

}
 