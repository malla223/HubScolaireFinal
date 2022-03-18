import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Categorie } from '../Classe/categorie';
import { Niveau } from '../Classe/niveau';
import { CategorieServiceService } from '../services/categorie-service.service';
import { NiveauServiceService } from '../services/niveau-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  form:FormGroup;
    validations_form: FormGroup;
    id_don: any;
    id_demande: any;

    userConnect: any;

    listCat: Categorie[];
    listN : Niveau[];
    public selectedFile;

  constructor(
    public alertController : AlertController, 
    private formBuilder : FormBuilder,
    private nService : NiveauServiceService,
    private catService : CategorieServiceService,
    private load : LoadingController,
    private uservice : UserServiceService,
    public router :Router) {}


  ngOnInit() : void {
    //recuperer les données du user connecté
    let us = localStorage.getItem('user');
    this.userConnect = JSON.parse(us);
    this.getListCAt();
    this.getListNiveau();
    
    this.form = this.formBuilder.group({
      libelle_don : [''],
      niveau: [''],
      categorie: [''],
      photo:[''],
      storie:['']
    })
    this.validations_form = this.formBuilder.group({
      libelle_don: new FormControl('', Validators.compose([
        Validators.required
      ])),
      niveau: new FormControl('', Validators.compose([
        Validators.required
      ])),
      categorie: new FormControl('', Validators.compose([
        Validators.required
      ])),
      photo: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  public  onFileChanged(event) {
      const file = event.target.files[0];
      this.selectedFile = file;
  }

  public getListCAt(){
    this.catService.getAllCategorie().subscribe(res=>{
      this.listCat = res;
    })
  }

  public getListNiveau(){
    this.nService.getAllNiveau().subscribe(resN=>{
      this.listN = resN;
    })
  }

  async saveDon(){
    const load = await this.load.create({
      message: 'Patientez...',
    });
    await load.present();

    const uploadFile = new FormData();
    const dataUser = this.form.value;
    uploadFile.append('image',this.selectedFile, this.selectedFile.name);
    uploadFile.append('data', JSON.stringify(dataUser));
    let libelle_don = this.form.value['libelle_don'];
    let categorie = this.form.value['categorie'];
    let niveau = this.form.value['niveau'];
    let storie = this.form.value['storie'];
 
    this.uservice.saveDon(uploadFile).subscribe(data=>{
      let user = this.userConnect;
      console.log("userconnect=========",user);
      data.libelle_don =  libelle_don,
      data.categorie = categorie,
      data.niveau = niveau,
      data.storie = storie,
      data.user = user
      
      this.uservice.updateDon(data.id_don, data).subscribe(res=>{
        if(res){
          load.dismiss();
          this.alertD();
        }else{
          load.dismiss();
          this.alertError();
        }
      })
    })
    this.form.reset();
  }


  async alertD(){
    const load = await this.alertController.create({
      header:'Message',
      message:'Votre don a été effetué avec succès.',
      buttons : [
        {
          text: 'OK',
          handler: () =>{
            this.router.navigate(['tabs']);
          }
        }
      ]
    });
    await load.present();
  }

  async alertError(){
    const load = await this.alertController.create({
      header:'ERREUR',
      message:'Votre don n\'a pas été éffectué, REESAYER',
      buttons : [
        {
          text: 'OK'
        }
      ]
    });
    await load.present();
  }
}
