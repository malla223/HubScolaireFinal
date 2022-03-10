import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { EcoleServiceService } from 'src/app/services/ecole-service.service';

@Component({
  selector: 'app-resgi-ecole',
  templateUrl: './resgi-ecole.page.html',
  styleUrls: ['./resgi-ecole.page.scss'],
})
export class ResgiEcolePage implements OnInit {

  form:FormGroup;
    validations_form: FormGroup;
    id_user: any;
   
    public selectedFile;
    
  constructor(
    public alertController: AlertController, 
    public router: Router,
    private load : LoadingController,
    private formBuilder : FormBuilder,
    private eService : EcoleServiceService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nom_ecole: [''],
      email_ecole: [''],
      login_ecole: [''],
      tel_ecole: [''],
      adresse_ecole: [''],
      password_ecole: [''],
      contrat_ecole: [''],
      site_ecole: [''],
    })
    this.validations_form = this.formBuilder.group({
      nom_ecole: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password_ecole: new FormControl('', Validators.compose([
        Validators.required
      ])),
      contrat_ecole: new FormControl('', Validators.compose([
        Validators.required
      ])),
      site_ecole: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email_ecole: new FormControl('', Validators.compose([
        Validators.required
      ])),
      tel_ecole: new FormControl('', Validators.compose([
        Validators.required
      ])),
      login_ecole: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adresse_ecole: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    
  }

  
  
  async saveEcole(){
    console.log("FormVAlue==============",this.form.value);
    const load = await this.load.create({
      message: 'Patientez...',
    });
    await load.present();

    const uploadFile = new FormData();
    const dataEcole = this.form.value;
    console.log("dataEcole======",dataEcole);
    
    uploadFile.append('contrat',this.selectedFile, this.selectedFile.name);
    uploadFile.append('data', JSON.stringify(dataEcole));
   let nom_ecole = this.form.value['nom_ecole'];
   let tel_ecole = this.form.value['tel_ecole'];
   let login_ecole = this.form.value['login_ecole'];
   let password_ecole = this.form.value['password_ecole'];
   let adresse_ecole = this.form.value['adresse_ecole'];
   let site_ecole = this.form.value['site_ecole'];
   let email_ecole = this.form.value['email_ecole'];
    
    this.eService.saveEcole(uploadFile).subscribe(data=>{
      data.nom_ecole =  nom_ecole,
      data.tel_ecole =  tel_ecole,
      data.login_ecole = login_ecole,
      data.password_ecole = password_ecole,
      data.adresse_ecole = adresse_ecole,
      data.email_ecole = email_ecole,
      data.site_ecole = site_ecole,
      console.log("dataSAVE==========", data);
      
      
      this.eService.updateEcole(data.id_ecole, data).subscribe(res=>{
        if(res){
          console.log("dataUPDATE==========", data);
          load.dismiss();
          this.presentAlert();
        }
      })
    })
    this.form.reset();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Inscription Reussi',
      subHeader: 'Votre compte est en attente de verification',
      message:'Patientez s\'il vous plait.......',
      buttons: [
        {
          text: 'OK',
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
