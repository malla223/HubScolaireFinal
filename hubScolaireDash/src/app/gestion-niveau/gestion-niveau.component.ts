import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NiveauService } from '../Services/niveau.service';

@Component({
  selector: 'app-gestion-niveau',
  templateUrl: './gestion-niveau.component.html',
  styleUrls: ['./gestion-niveau.component.css']
})
export class GestionNiveauComponent implements OnInit {
  niveauR: any;
  form:FormGroup;
  validations_form: FormGroup;

  message: string;
  niveau: any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private niveauService : NiveauService,
    private router : Router,
    private formBuilder : FormBuilder,) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      libelle_niveau : ['']
    })
    this.validations_form = this.formBuilder.group({
      libelle_Niveau: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.niveauService.getAllNiveau().subscribe(res=>{
      this.niveauR = res;
    })
    
  }

  detailNiveau(id_niveau : any){
    this.router.navigateByUrl('/detailNiveau', id_niveau);
  }

  editNiveau(id_niveau : any){
    this.router.navigateByUrl('/editNiveau', id_niveau);
  }

  deleteNiveau(id_niveau: any){
    this.niveauService.deleteNiveau(id_niveau).subscribe();
    this.router.navigateByUrl('gestionNiveau', {skipLocationChange: true}).then(()=>
    this.router.navigate(['gestionNiveau']));
    window.location.reload();
  }

 async saveNiveau(){
  this.niveau = await this.niveauService.getNiveauByLibelle(this.form.value.libelle_niveau).toPromise();
      if(this.niveau!=null){
        this.errorConfirm();
      }else{
        await this.niveauService.saveNiveau(this.form.value).toPromise();
        this.successConfirm();
        this.router.navigateByUrl('gestionNiveau', {skipLocationChange: true}).then(()=>
        this.router.navigate(['gestionNiveau']));
        window.location.reload();
      }
  }

  successConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: 'Enregistrer avec Succès',
      showConfirmButton: false,
      timer: 1500
    })
  }

  errorConfirm() {
    Swal.fire({
      position: 'top-right',
      icon: 'error',
      title: 'ERREUR',
      text:'Ce niveau existe déjà',
      showConfirmButton: false,
      timer: 1500
    })
  }

  alertConfirmation(id_admin : any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Vous êtes sûre de supprimé ce niveau ?',
      icon: 'warning',
      iconColor:'#ddb307',
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'SUPPRIMER',
      
    }).then((result) => {
      if (result.value) {
        this.deleteNiveau(id_admin);
        Swal.fire('Suppression!', 'supprimé avec succès.', 'success');
      }
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.niveauR;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.niveauR;
  }

}
