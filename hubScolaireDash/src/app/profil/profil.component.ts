import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userConnect: any;
  photo = environment.photoAdmin;
  constructor() { }

  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
  }

}
