import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss'],
})
export class PasswordModalComponent implements OnInit {

  userConnect: any;
  form : FormGroup;
  validations_form: FormGroup;

  constructor(private modal : ModalController,
    private fb : FormBuilder,
    private load : LoadingController,
    private uService : UserServiceService) { }

  ngOnInit() {
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);

    this.form = this.fb.group({
      password_user: [''],
      password_: [''],
      password: [''],
    })
    this.validations_form = this.fb.group({
      password_user: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password_: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),

    })
  }

  fermer(){
    this.modal.dismiss();
  }

 async updatePassword(){
      const loading = await this.load.create({
        message : 'Patientez......'
      })
      await loading.present();
      console.log("Password=========",this.form.value);
      
      // this.uService.updateUser(this.userConnect.id_user, this.form.value['password_user']).subscribe(res=>{
      //   if(res){
      //     loading.dismiss();
      //     console.log("res=========",res);
          
      //   }
      // })
  }
}
