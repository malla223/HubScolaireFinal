import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userConnect : any;
  constructor(private route : Router) { }

  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
  }

  deconnexion(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
