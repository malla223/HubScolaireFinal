import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DemandeDonService } from '../Services/demande-don.service';

@Component({
  selector: 'app-detaileleve-ecole',
  templateUrl: './detaileleve-ecole.component.html',
  styleUrls: ['./detaileleve-ecole.component.css']
})
export class DetaileleveEcoleComponent implements OnInit {

  id_demande: any;
  detailDemande: any;
  photo = environment.photoDon;
  
  constructor(private router : ActivatedRoute,
    private dService : DemandeDonService) { }

  ngOnInit() {
    this.id_demande = this.router.snapshot.params['id_demande'];
    
    this.dService.getDemandeByid(this.id_demande).subscribe(res=>{
      this.detailDemande = res;     
    })
  }

}
