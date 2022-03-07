import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  userConnect : any;
  constructor() {
  }
  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
  }

}
