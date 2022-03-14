import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcoleService } from '../Services/ecole.service';

@Component({
  selector: 'app-detail-ecole',
  templateUrl: './detail-ecole.component.html',
  styleUrls: ['./detail-ecole.component.css']
})
export class DetailEcoleComponent implements OnInit {
  id_ecole:any;
  detailEcole:any;

  constructor(private router: ActivatedRoute,
    private eService : EcoleService) { }

  ngOnInit() {
    this.id_ecole = this.router.snapshot.params['id_ecole'];

    this.eService.getEcoleById(this.id_ecole).subscribe(res=>{
      this.detailEcole = res;
    })
  }

}
