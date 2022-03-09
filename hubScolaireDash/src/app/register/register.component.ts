import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form:FormGroup;
    validations_form: FormGroup;
    id_admin: any;
    selectedFile: any;
    save : any;
    message : any;

  constructor(
    public router: Router,
    private formBuilder : FormBuilder,
    private aService : AdminServiceService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      libelle_don : [''],
      prenom_admin: [''],
      tel_admin: [''],
      login_admin: [''],
      password_admin: [''],
      photo_admin:[''],
      email_admin:[''],
      genre:[''],
      type:[''],
    })
    this.validations_form = this.formBuilder.group({
      nom_admin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      prenom_admin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      tel_admin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password_admin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      login_admin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      photo_admin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email_admin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      genre: new FormControl('', Validators.compose([
        Validators.required
      ])),
      type: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }


 saveAdmin(){
    const uploadFile = new FormData();
    const dataUser = this.form.value;
    uploadFile.append('image',this.selectedFile, this.selectedFile.name);
    uploadFile.append('data', JSON.stringify(dataUser));
   let nom_admin = this.form.value['nom_admin'];
   let tel_admin = this.form.value['tel_admin'];
   let login_admin = this.form.value['login_admin'];
   let password_admin = this.form.value['password_admin'];
   let prenom_admin = this.form.value['prenom_admin'];
   let email_admin = this.form.value['email_admin'];
   let type = this.form.value['type'];
   let genre = this.form.value['genre'];
    
    this.aService.saveAdmin(uploadFile).subscribe(data=>{
      data.nom_admin =  nom_admin,
      data.tel_admin = tel_admin,
      data.login_admin = login_admin,
      data.password_admin = password_admin,
      data.prenom_admin = prenom_admin,
      data.email_admin = email_admin,
      data.type = type,
      data.genre = genre

      
        this.save = this.aService.updateAdmin(data.id_admin, data).toPromise();
        this.successNotification();
        this.router.navigate(['/gestionAdmin']);  
    })
    this.form.reset();
  }

  public  onFileChanged(event) {
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.selectedFile = file;
    }
  }

  successNotification() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Enregistrer avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

  // errorNotification() {
  //   Swal.fire('ERREUR', 'Echec d\'enregistrement, verifier votre login ou changer la photo sélectionner', 'error');
  // }
}
