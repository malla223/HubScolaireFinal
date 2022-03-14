import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DonServiceService } from '../Services/don-service.service';

@Component({
  selector: 'app-gestion-don',
  templateUrl: './gestion-don.component.html',
  styleUrls: ['./gestion-don.component.css']
})
export class GestionDonComponent implements OnInit {

  donEtat = false;
  demandeEtat = false;
  donConfirmerEtat = false;
  don : any;
  data_Don : any;
  donAttenteR: any;
  demandeAttenteR: any;
  id_don: any;
  id_demande :any;
  photo = environment.photoDon;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  demandeEcoleAttenteR : any;

  constructor(private donService : DonServiceService, private route : Router) { }

  ngOnInit() {
    this.data_Don = 'don';
    this.getAllDonA();
    this.getDemandeDonA();
    this.getDemandeDonEcoleA();
  }

  users(event: any){
    this.don=[];
    if(event.target.value == 'Don en attente' || event.target.value == ''){
      this.demandeEtat = false;
      this.donConfirmerEtat = false;
      this.donEtat = true;
      this.don = this.data_Don;
    }
    if(event.target.value == 'Demande en attente'){
      this.donEtat = false;
      this.donConfirmerEtat = false;
      this.demandeEtat = true;
      this.don = this.data_Don;
    }
  }


  getAllDonA(){
    this.donService.getAllDonAttente().subscribe(res=>{
      this.donAttenteR = res;
    })
  }

  getDemandeDonA(){
    this.donService.getAllDemandeDonAttente().subscribe(data=>{
      this.demandeAttenteR = data;
    })
  }

  getDemandeDonEcoleA(){
    this.donService.getAllDemandeDonEcoleAttente().subscribe(data=>{
      this.demandeEcoleAttenteR = data;
    })
  }

  donAttenteDetail(id_don : any){
    this.route.navigateByUrl('/detaildon', id_don);
  }

  demandeDetail(id_demande: any){
    this.route.navigateByUrl('/detailAttentedon', id_demande);
  }

  demandeEcoleAttente(id_demande: any){
    this.route.navigateByUrl('/attente-ecole', id_demande);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllDonA();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getDemandeDonA();
  }
}
