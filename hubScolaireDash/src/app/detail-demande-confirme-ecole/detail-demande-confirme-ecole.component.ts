import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DemandeDonService } from '../Services/demande-don.service'; 

@Component({
  selector: 'app-detail-demande-confirme-ecole',
  templateUrl: './detail-demande-confirme-ecole.component.html',
  styleUrls: ['./detail-demande-confirme-ecole.component.css']
})
export class DetailDemandeConfirmeEcoleComponent implements OnInit {

    
  id_demande:any;
  demandeC: any;
  photo = environment.photoDon;

  constructor(
    private router : ActivatedRoute,
    private DemandeDonService : DemandeDonService,
    private route : Router) { }

  ngOnInit() {
    this.id_demande = this.router.snapshot.params['id_demande'];
    
    this.DemandeDonService.getDemandeByid(this.id_demande).subscribe(res=>{
      this.demandeC = res;
    })
  }
}

