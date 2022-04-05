import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
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

  alertConfirmation(id_admin : any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes sûre de restaurer?',
      icon: 'warning',
      iconColor:'#ddb307',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor:'#005D99',
      confirmButtonText: 'OUI',
      
    }).then((result) => {
      if (result.value) {
        this.restaurerA(id_admin);
        Swal.fire('Restaurer!', 'restaurer avec succès.', 'success');
      }
    });
  }


  restaurerA(id_admin:any){
    this.aService.restaurer(id_admin).subscribe();
      this.router.navigateByUrl('corbeille', {skipLocationChange: true}).then(()=>
        this.router.navigate(['corbeille']));
        window.location.reload();
  }
}
