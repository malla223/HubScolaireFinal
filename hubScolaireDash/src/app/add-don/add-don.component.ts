import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonServiceService } from '../Services/don-service.service';
import { CategorieService } from '../Services/categorie.service';
import { NiveauService } from '../Services/niveau.service';

@Component({
  selector: 'app-add-don',
  templateUrl: './add-don.component.html',
  styleUrls: ['./add-don.component.css']
})
export class AddDonComponent implements OnInit {

  
  form:FormGroup;
  validations_form: FormGroup;
  id_don: any;
  selectedFile: any;
  save : any;
  cateR: any;
  niveauR: any;

constructor(
  public router: Router,
  private formBuilder : FormBuilder,
  private dService : DonServiceService,
  private catService : CategorieService,
  private niveauService : NiveauService,) {}

ngOnInit() {
  this.form = this.formBuilder.group({
    libelle_don : [''],
    niveau: [''],
    cat: [''],
    photo_don: [''],
  })
  this.validations_form = this.formBuilder.group({
    libelle_don: new FormControl('', Validators.compose([
      Validators.required
    ])),

    niveau: new FormControl('', Validators.compose([
      Validators.required
    ])),

    cat: new FormControl('', Validators.compose([
      Validators.required
    ])),

    photo_don: new FormControl('', Validators.compose([
      Validators.required
    ])),
  });
  
  this.catService.getAllCategorie().subscribe(res=>{
    this.cateR = res;
  }),

  this.niveauService.getAllNiveau().subscribe(res=>{
    this.niveauR = res;
  })

}


saveDon(){
  const uploadFile = new FormData();
  const dataUser = this.form.value;
  uploadFile.append('image',this.selectedFile, this.selectedFile.name);
  uploadFile.append('data', JSON.stringify(dataUser));
 let libelle_don = this.form.value['libelle_don'];
 let niveau = this.form.value['niveau'];
  
  this.dService.saveDon(uploadFile).subscribe(data=>{
    data.libelle_don =  libelle_don,
    data.niveau = niveau,
      this.save = this.dService.updateDon(data.id_don, data).toPromise();
      this.router.navigate(['/gestionDon']);  
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
