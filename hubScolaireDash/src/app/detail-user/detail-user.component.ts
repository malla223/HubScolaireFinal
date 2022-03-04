import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  id_user:any;
  detailuser:any;
  photo = environment.photo_user;

  constructor(private router: ActivatedRoute,
    private uService : UserServiceService) { }

  ngOnInit() {
    this.id_user = this.router.snapshot.params['id_user'];
    
    this.uService.getUserById(this.id_user).subscribe(res=>{
      this.detailuser = res;
    })
  }

}
