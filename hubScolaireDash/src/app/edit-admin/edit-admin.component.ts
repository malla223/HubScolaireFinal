import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Admin } from '../Classes/admin';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  id_admin: any;
  getAdminId : Admin = new Admin();

  constructor(private router : ActivatedRoute,
    private aService : AdminServiceService,
    private route : Router) { }

  ngOnInit() {
    this.id_admin = this.router.snapshot.params['id_admin'];
    this.aService.getAdminById(this.id_admin).subscribe(res=>{
      this.getAdminId = res;
    })  
  }
  updateA(){
    this.aService.updateAdmin(this.id_admin,  this.getAdminId).subscribe();
    this.route.navigateByUrl('gestionAdmin', {skipLocationChange: true}).then(()=>
    this.route.navigate(['gestionAdmin']));
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
