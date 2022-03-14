import { Component, OnInit } from '@angular/core';
import { EcoleService } from '../Services/ecole.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Ecole} from '../Classes/ecole'
import Swal from 'sweetalert2';

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
    this.route.navigateByUrl('gestionecole', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionecole']));
    this.successConfirm();
  }
  successConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Modification effectué avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
