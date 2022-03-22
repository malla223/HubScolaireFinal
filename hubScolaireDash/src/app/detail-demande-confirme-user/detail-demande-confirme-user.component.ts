import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DemandeDonService } from '../Services/demande-don.service'; 

@Component({
  selector: 'app-detail-demande-confirme-user',
  templateUrl: './detail-demande-confirme-user.component.html',
  styleUrls: ['./detail-demande-confirme-user.component.css']
})
export class DetailDemandeConfirmeUserComponent implements OnInit {

   
  id_demande:any;
  demandeU: any;
  photo = environment.photoDon;

  constructor(
    private router : ActivatedRoute,
    private DemandeDonService : DemandeDonService,
    private route : Router) { }

  ngOnInit() {
    this.id_demande = this.router.snapshot.params['id_demande'];
    
    this.DemandeDonService.getDemandeByid(this.id_demande).subscribe(res=>{
      this.demandeU = res;
    })
  }
}
