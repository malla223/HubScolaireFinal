import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NiveauService } from '../Services/niveau.service';

@Component({
  selector: 'app-add-niveau',
  templateUrl: './add-niveau.component.html',
  styleUrls: ['./add-niveau.component.css']
})
export class AddNiveauComponent implements OnInit {
  form:FormGroup;
  validations_form: FormGroup;
  id_cat: any;

constructor(public router: Router,
  private formBuilder : FormBuilder,
  private niveauService : NiveauService) { }

ngOnInit() {
  this.form = this.formBuilder.group({
    libelle_niveau : ['']
  })
  this.validations_form = this.formBuilder.group({
    libelle_Niveau: new FormControl('', Validators.compose([
      Validators.required
    ]))
  });
}

saveNiveau(){
  this.niveauService.saveNiveau(this.form.value).subscribe();
  this.router.navigate(['gestionNiveau']);
}


}
