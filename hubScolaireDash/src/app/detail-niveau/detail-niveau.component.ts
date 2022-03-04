import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NiveauService } from '../Services/niveau.service';

@Component({
  selector: 'app-detail-niveau',
  templateUrl: './detail-niveau.component.html',
  styleUrls: ['./detail-niveau.component.css']
})
export class DetailNiveauComponent implements OnInit {
  id_niveau: any;
  niveauR : any;

  constructor(private router : ActivatedRoute, private niveauService : NiveauService) { }

  ngOnInit() {
    this.id_niveau = this.router.snapshot.params['id_niveau'];

    this.niveauService.getNiveauById(this.id_niveau).subscribe(res=>{
      this.niveauR = res;
    })
  }
}
