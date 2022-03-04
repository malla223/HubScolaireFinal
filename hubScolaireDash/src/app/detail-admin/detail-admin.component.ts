import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.css']
})
export class DetailAdminComponent implements OnInit {

  id_admin:any;
  detailAmin:any;
  photo = environment.photoAdmin;

  constructor(private router: ActivatedRoute,
    private aService : AdminServiceService) { }

  ngOnInit() {
    this.id_admin = this.router.snapshot.params['id_admin'];
    
    this.aService.getAdminById(this.id_admin).subscribe(res=>{
      this.detailAmin = res;     
    })
  }

}
