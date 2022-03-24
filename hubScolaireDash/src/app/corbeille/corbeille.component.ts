import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent implements OnInit {

  listAdmin:any;
  photo = environment.photoAdmin;

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(
    public router: Router,
    private aService : AdminServiceService
    ) {
   }

  ngOnInit() {
    this.getAdminInactif();
  }

  getAdminInactif(){
    this.aService.getAllAdminInactif().subscribe(data=>{
      this.listAdmin = data;
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAdminInactif();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAdminInactif();
  }
}
