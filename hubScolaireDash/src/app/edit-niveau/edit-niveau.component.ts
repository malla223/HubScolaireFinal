import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveau } from '../Classes/niveau';
import { NiveauService } from '../Services/niveau.service';

@Component({
  selector: 'app-edit-niveau',
  templateUrl: './edit-niveau.component.html',
  styleUrls: ['./edit-niveau.component.css']
})
export class EditNiveauComponent implements OnInit {

  id_niveau:any;
  niveauR: Niveau = new Niveau();

  constructor(private route : ActivatedRoute, private routter : Router, private niveauService : NiveauService) { }

  ngOnInit() {
    this.id_niveau = this.route.snapshot.params['id_niveau'];

    this.niveauService.getNiveauById(this.id_niveau).subscribe(res=>{
      this.niveauR = res;
    })
  }

  modifierNiveau(){
    this.niveauService.modifierNiveau(this.id_niveau,this.niveauR).subscribe();
      this.routter.navigate(['gestionNiveau']);
  }

}
