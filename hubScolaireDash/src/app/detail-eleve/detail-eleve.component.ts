import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EleveServiceService } from '../Services/eleve-service.service';

@Component({
  selector: 'app-detail-eleve',
  templateUrl: './detail-eleve.component.html',
  styleUrls: ['./detail-eleve.component.css']
})
export class DetailEleveComponent implements OnInit {

  id_eleve: any;
  detailEleve: any;

  constructor(private router : ActivatedRoute,
    private eService : EleveServiceService) { }

  
    ngOnInit() {
      this.id_eleve = this.router.snapshot.params['id_eleve'];
      
      this.eService.getEleveById(this.id_eleve).subscribe(res=>{
        this.detailEleve = res;     
      })
    }
  }
