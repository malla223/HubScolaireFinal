import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss'],
})
export class PasswordModalComponent implements OnInit {

  constructor(private modal : ModalController) { }

  ngOnInit() {}

  fermer(){
    this.modal.dismiss();
  }

}
