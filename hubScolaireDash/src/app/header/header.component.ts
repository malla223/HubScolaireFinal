import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DonServiceService } from '../Services/don-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userConnect : any;
  photo = environment.photoAdmin;
  notif: any;

  constructor(private donService : DonServiceService) { }

  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
    
    this.getNotif();
  }

  getNotif(){
    this.notif = this.donService.notifDonAttente().subscribe();
  }

}
