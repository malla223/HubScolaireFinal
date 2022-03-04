import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from '../Services/categorie.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  form:FormGroup;
    validations_form: FormGroup;
    id_cat: any;

  constructor(public router: Router,
    private formBuilder : FormBuilder,
    private cService : CategorieService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      libelle_cat : ['']
    })
    this.validations_form = this.formBuilder.group({
      libelle_cat: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  saveCat(){
    this.cService.saveCAt(this.form.value).subscribe();
    this.router.navigate(['gestioncategorie']);
  }

}
