import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategorieService } from '../Services/categorie.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {
  
  cateR: any;

  constructor(private catService : CategorieService,
    private router : Router) { }

  ngOnInit() {

    this.catService.getAllCategorie().subscribe(res=>{
      this.cateR = res;
    })
    
  }

  detailCat(id_cat : any){
    this.router.navigateByUrl('/detailcategorie', id_cat);
  }

  detailCats(id_cat : any){
    this.router.navigateByUrl('/editcategorie', id_cat);
  }

  deleteCat(id_cat: any){
    this.catService.delteCat(id_cat).subscribe();
  }

  alertConfirmation(id_admin : any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes sûre de supprimer cette catégorie ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'ANNULER',
      confirmButtonText: 'SUPPRIMER',
      
    }).then((result) => {
      if (result.value) {
        this.deleteCat(id_admin);
        Swal.fire('Suppression!', 'supprimé avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('gestioncategorie', {skipLocationChange: true}).then(()=>
        this.router.navigate(['gestioncategorie']));
      }
    });
  }
}
