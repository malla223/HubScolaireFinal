import { Component, OnInit } from '@angular/core';
import { EcoleService } from '../Services/ecole.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Ecole} from '../Classes/ecole'

@Component({
  selector: 'app-edit-ecole',
  templateUrl: './edit-ecole.component.html',
  styleUrls: ['./edit-ecole.component.css']
})
export class EditEcoleComponent implements OnInit {

  id_ecole: any;
  getEcoleById : Ecole = new Ecole();

  constructor(private router : ActivatedRoute,
    private ecoleService : EcoleService,
    private route : Router) { }

  ngOnInit() {
    this.id_ecole = this.router.snapshot.params['id_ecole'];
    this.ecoleService.getEcoleById(this.id_ecole).subscribe(res=>{
      this.getEcoleById = res;
    })  
  }
  updateEcole(){

    this.ecoleService.updateEcole(this.id_ecole,  this.getEcoleById).subscribe();
    this.route.navigate(['gestionecole']);
  }
}
