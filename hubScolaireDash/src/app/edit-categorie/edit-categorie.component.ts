import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../Classes/categorie';
import { CategorieService } from '../Services/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

  id_cat:any;
  catR: Categorie = new Categorie();

  constructor(private route : ActivatedRoute, private routter : Router, private catService : CategorieService) { }

  ngOnInit() {
    this.id_cat = this.route.snapshot.params['id_cat'];

    this.catService.getCategorieById(this.id_cat).subscribe(res=>{
      this.catR = res;
    })
  }

  updateCat(){
    this.catService.updateCat(this.id_cat,this.catR).subscribe();
    this.routter.navigate(['gestioncategorie']);
  }

}
