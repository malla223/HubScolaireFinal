import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.route.navigate(['gestionAdmin']);
  }

}
