import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../Services/categorie.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.css']
})
export class DetailCategorieComponent implements OnInit {

  id_cat: any;
  catR : any;

  constructor(private router : ActivatedRoute, private catService : CategorieService) { }

  ngOnInit() {
    this.id_cat = this.router.snapshot.params['id_cat'];

    this.catService.getCategorieById(this.id_cat).subscribe(res=>{
      this.catR = res;
    })
  }

}
