import { Component, OnInit } from '@angular/core';
import { EcoleService } from '../Services/ecole.service';
import { Router } from '@angular/router';

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
      this.router.navigate(['gestionecole']);
  }

}
