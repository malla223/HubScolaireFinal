import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id_amin: any;

  constructor(
    private router : Router,
    private aService : AdminServiceService) 
    { 
      localStorage.clear();
      localStorage.setItem['login'];
    }

  ngOnInit() {
  }

  onLogin(form: NgForm) {

    this.aService.connexion(form.value["login"], form.value["password"]).subscribe((res:any)=>{
      if(res){
        //mettre l'utilisateur connecté dans le localstorage
        //JSON.stringify converti l'objet en string
        localStorage.setItem("user", JSON.stringify(res));
        this.router.navigateByUrl('/accueil');
        this.successConfirm();
      }else{
          console.log(res); 
          this.errorConfirm();
      }
    });
  }

  successConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Bienvenue sur le dashboard HUB-SCOLAIRE',
      showConfirmButton: false,
      timer: 1500
    })
  }

  errorConfirm() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Connexion echoué, verifiez votre mot de passe',
      showConfirmButton: true
    })
  }


}
