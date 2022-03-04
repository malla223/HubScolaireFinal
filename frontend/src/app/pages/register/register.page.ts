import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    form:FormGroup;
    validations_form: FormGroup;
    id_user: any;
   
    public selectedFile;

  constructor(
    public alertController: AlertController, 
    public router: Router,
    private load : LoadingController,
    private userService : UserServiceService,
    private formBuilder : FormBuilder
    ) { }

  ngOnInit() : void{
    this.form = this.formBuilder.group({
      nom_complet : [''],
      login_user: [''],
      tel_user: [''],
      adresse_user: [''],
      password_user: [''],
      photo:[''],
    })
    this.validations_form = this.formBuilder.group({
      nom_complet: new FormControl('', Validators.compose([
        Validators.required
      ])),
      login_user: new FormControl('', Validators.compose([
        Validators.required
      ])),
      tel_user: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adresse_user: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password_user: new FormControl('', Validators.compose([
        Validators.required
      ])),
      photo: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  async saveUser(){
    const load = await this.load.create({
      message: 'Patientez...',
    });
    await load.present();

    const uploadFile = new FormData();
    const dataUser = this.form.value;
    uploadFile.append('image',this.selectedFile, this.selectedFile.name);
    uploadFile.append('data', JSON.stringify(dataUser));
   let nom_complet = this.form.value['nom_complet'];
   let tel_user = this.form.value['tel_user'];
   let login_user = this.form.value['login_user'];
   let password_user = this.form.value['password_user'];
   let adresse_user = this.form.value['adresse_user'];
    
    this.userService.saveUser(uploadFile).subscribe(data=>{
      data.nom_complet =  nom_complet,
      data.tel_user = tel_user,
      data.login_user = login_user,
      data.password_user = password_user,
      data.adresse_user = adresse_user
      
      this.userService.updateUser(data.id_user, data).subscribe(res=>{
        if(res){
          load.dismiss();
          this.presentAlert();
        }
      })
    })
    this.form.reset();
  }

  get f(){
    return this.form.controls;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Inscription',
      subHeader: 'Votre compte a été crée avec succés.',
      message: 'Connectez-vous pour voir les dons en cours...',
      buttons: [
        {
          text: 'NON',
          handler: () =>{
            this.router.navigate(['/register']);
          }
        },
        {
          text: 'OK',
          handler: () =>{
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'ERREUR',
      subHeader: 'Erreur de creation lors de la creation de votre compte',
      buttons: [
        {
          text: 'REESAYER'
        }
      ]
    });

    await alert.present();
  }

  public  onFileChanged(event) {
   if(event.target.files.length>0){
     const file = event.target.files[0];
     this.selectedFile = file;
   }
 }

}
