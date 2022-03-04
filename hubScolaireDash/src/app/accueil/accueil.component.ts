import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { AdminServiceService } from '../Services/admin-service.service';
import { DonServiceService } from '../Services/don-service.service';
import { UserServiceService } from '../Services/user-service.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  nombreAdmin: any;
  nombreUser: any;
  nombreDonRecu: any;
  donC : any;
  nombreDonAR : any;
  demandeAttenteR : any;

  constructor(
    private donService : DonServiceService,
    private aService : AdminServiceService,
    private uService : UserServiceService,
    private route : Router) { }

  ngOnInit() {
    this.getNombreAdmin();
    this.getNombreUser();
    this.getNombreDonConfirmer();
    this.getNombreDonRecu();
    this.getNombreDonAttente();
    this.getNombreDemandeAttente();
  }

  getNombreAdmin(){
    this.aService.nombreAdmin().subscribe(res=>{
      this.nombreAdmin = res;
      console.log(res);
      
    })
  }

  getNombreUser(){
    this.uService.nbreUser().subscribe(response=>{
      this.nombreUser =  response;
    })
  }

  getNombreDonConfirmer(){
    this.donService.getAllNombreDonConfirmer().subscribe(d=>{
      this.donC = d;
    })
  }

  getNombreDonAttente(){
    this.donService.getAllNombreDonAttente().subscribe(donAttente=>{
      this.nombreDonAR = donAttente;
    })
  }

  getNombreDonRecu(){
    this.donService.getNombreDonRecu().subscribe(donrecu=>{
      this.nombreDonRecu = donrecu;
    })
  }

  getNombreDemandeAttente(){
    this.donService.getNombreDemandeAttente().subscribe(demanderecu=>{
      this.demandeAttenteR = demanderecu;
    })
  }

  donDetails(id_don: any){
    this.route.navigateByUrl('/detaildon', id_don);
  }
}
