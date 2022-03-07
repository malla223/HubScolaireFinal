import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Don } from '../Classe/don';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  type: string;
  listDonC: Don[];
  listDemandeDonA: Don[];
  listDonA: Don[];
  filterTerm: string;
  id_user: any;
  demande: any;
  userConnect:any;
  attente:any;
  photo = environment.urlPhotoDon;

  constructor(private userService : UserServiceService,
    private route : Router) {}

  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
    
    this.id_user = this.userConnect.id_user;

    this.userService.getAllDonByUser(this.id_user).subscribe(response=>{
      this.attente = response;
      this.listDonA = this.attente;
    })

    this.type = 'don';
    this.getListDonConfirmer();
    this.userService.getAllDemandeDonAttente(this.id_user).subscribe(res=>{
      this.demande = res;
      this.listDemandeDonA = this.demande;
      
    })
  }
  
  onLogout(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.route.navigate(['login']);
    console.log(localStorage.removeItem('user'));  
  }
  segmentChanged(ev: any) {
  }

  donDetails(id_don: any){
    this.route.navigateByUrl('/demande', id_don);
  }

  donDetail(id_don: any){
    this.route.navigateByUrl('/attente', id_don);
  }

  demandeDetails(id_demande: any){
    this.route.navigateByUrl('/demande-confirmer', id_demande);
  }

  public getListDonConfirmer(): any {
    this.userService.getAllDonConfirmer()
      .subscribe({
        next: (data) => {
          this.listDonC = data;
        },
        error: (e) => console.error(e)
      });
  }

}
