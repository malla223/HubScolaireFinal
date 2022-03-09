import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeDonService } from '../Services/demande-don.service';

@Component({
  selector: 'app-detail-eleve',
  templateUrl: './detail-eleve.component.html',
  styleUrls: ['./detail-eleve.component.css']
})
export class DetailEleveComponent implements OnInit {

  id_demande: any;
  detailDemande: any;

  constructor(private router : ActivatedRoute,
    private dService : DemandeDonService) { }

  
    ngOnInit() {

       this.id_demande = this.router.snapshot.params['id_demande'];
    
    this.dService.getDemandeByid(this.id_demande).subscribe(res=>{
      this.detailDemande = res;     
    })
  }

    }
  
