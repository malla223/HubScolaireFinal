import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailElevePage } from './detail-eleve.page';

const routes: Routes = [
  {
    path: '',
    component: DetailElevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailElevePageRoutingModule {}
