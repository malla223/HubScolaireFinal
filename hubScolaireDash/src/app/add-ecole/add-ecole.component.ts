import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcoleService } from '../Services/ecole.service'; 


@Component({
  selector: 'app-add-ecole',
  templateUrl: './add-ecole.component.html',
  styleUrls: ['./add-ecole.component.css']
})
export class AddEcoleComponent implements OnInit {
  form:FormGroup;
  validations_form: FormGroup;
  id_ecole: any;
  public selectedFile: any;

constructor(
  public router: Router,
  private formBuilder : FormBuilder,
  private eService : EcoleService) { }

ngOnInit() {
  this.form = this.formBuilder.group({
    nom_ecole : [''],
    email_ecole: [''],
    site_ecole: [''],
    adresse_ecole: [''],
    tel_ecole: [''],
    login_ecole: [''],
    password_ecole: ['']
  })
  this.validations_form = this.formBuilder.group({
    nom_ecole: new FormControl('', Validators.compose([
      Validators.required
    ])),
    email_ecole: new FormControl('', Validators.compose([
      Validators.required
    ])),
    site_ecole: new FormControl('', Validators.compose([
      Validators.required
    ])),
    adresse_ecole: new FormControl('', Validators.compose([
      Validators.required
    ])),
    tel_ecole: new FormControl('', Validators.compose([
      Validators.required
    ])),
    login_ecole: new FormControl('', Validators.compose([
      Validators.required
    ])),
    password_ecole: new FormControl('', Validators.compose([
      Validators.required
    ])),
  });
}


saveEcole(){
  this.eService.saveEcole(this.form.value).subscribe(data=>{
    console.log("datasave==========", data);
  })
  this.form.reset();
}

public  onFileChanged(event) {
  if(event.target.files.length>0){
    const file = event.target.files[0];
    this.selectedFile = file;
  }
}

}
