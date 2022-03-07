import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  form:FormGroup;
  validations_form: FormGroup;
  id_cat: any;
  categorie: any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];


  constructor(private catService : CategorieService,
    public router: Router,
    private formBuilder : FormBuilder,) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      libelle_cat : ['']
    })
    this.validations_form = this.formBuilder.group({
      libelle_cat: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

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
    window.location.reload();
        this.router.navigateByUrl('gestioncategorie', {skipLocationChange: true}).then(()=>
        this.router.navigate(['gestioncategorie']));
  }

  alertConfirmation(id_admin : any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes sûre de supprimer cette catégorie ?',
      icon: 'warning',
      iconColor:'#ddb307',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#d33',
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

  async saveCat(){
    this.categorie = await this.catService.getCategorieByLibelle(this.form.value.libelle_cat).toPromise();
    if(this.categorie!=null){
      this.errorConfirm();
    }else{
      await this.catService.saveCAt(this.form.value).toPromise();
      this.successConfirm();
      this.router.navigateByUrl('gestioncategorie', {skipLocationChange: true}).then(()=>
      this.router.navigate(['gestioncategorie']));
      window.location.reload();
    }
  }
  errorConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'error',
      title: 'ERREUR',
      text:'Cette catégorie existe déjà',
      showConfirmButton: false,
      timer: 1500
    })
  }

  successConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Nouvelle catégorie ajouter avec succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.cateR;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.cateR;
  }
}
