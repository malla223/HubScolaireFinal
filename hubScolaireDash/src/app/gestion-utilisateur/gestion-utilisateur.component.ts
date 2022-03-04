import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {UserServiceService} from '../Services/user-service.service';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';

@Component({ 
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  
  listUser : any;
  photo = environment.photo_user;

  constructor(
    public router: Router,
    private uService : UserServiceService
    ) {
    this.router.navigateByUrl('/gestionUtilisateur');
   }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(){
    this.uService.getAllUser().subscribe(data=>{
      this.listUser = data;
    })
  }

  detailUser(id_user:any){
    this.router.navigateByUrl('/detailuser', id_user);
  }

  deleteU(id_user:any){
    this.uService.deleteUser(id_user).subscribe();
      this.router.navigate(['gestionUtilisateur']);
  }

  alertConfirmation(id_admin : any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes sûre de supprimé cet utilisateur ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'NON',
      confirmButtonText: 'OUI',
      
    }).then((result) => {
      if (result.value) {
        this.deleteU(id_admin);
        Swal.fire('Suppression!', 'supprimé avec succès.', 'success');
      }
    });
  }
}
