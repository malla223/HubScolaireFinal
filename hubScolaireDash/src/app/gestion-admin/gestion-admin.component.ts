import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css']
})
export class GestionAdminComponent implements OnInit {
  listAdmin:any;
  nombreAdmin: any;
  nombreH: any;
  nombreF: any;
  photo = environment.photoAdmin;

  constructor(
    public router: Router,
    private aService : AdminServiceService
    ) {
    this.router.navigateByUrl('/gestionAdmin');
   }

  ngOnInit() {
    this.getAdminActif();
    this.getNombreAdmin();
    this.getNombreFemme();
    this.getNombreHomme();
  }

  getAdminActif(){
    this.aService.getAllAdminActif().subscribe(data=>{
      this.listAdmin = data;
    })
  }

  getNombreAdmin(){
    this.aService.nombreAdmin().subscribe(res=>{
      this.nombreAdmin = res;
    })
  }

  getNombreHomme(){
    this.aService.nombreAdminH().subscribe(ress=>{
      this.nombreH = ress;
    })
  }

  getNombreFemme(){
    this.aService.nombreAdminF().subscribe(dat=>{
      this.nombreF = dat;
    })
  }

  detailAdmin(id_admin:any){
    this.router.navigateByUrl('/detailadmin', id_admin);
  }

  detailAdminM(id_admin:any){
    this.router.navigateByUrl('/editAdmin', id_admin);
  }

  deleteA(id_admin:any){
    this.aService.delteAdmin(id_admin).subscribe();
  }

  alertConfirmation(id_admin : any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes sûre de supprimé cet admin ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'ANNULER',
      confirmButtonText: 'SUPPRIMER',
      
    }).then((result) => {
      if (result.value) {
        this.deleteA(id_admin);
        Swal.fire('Suppression!', 'supprimé avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('gestionAdmin', {skipLocationChange: true}).then(()=>
        this.router.navigate(['gestionAdmin']));
      }
    });
  }
}