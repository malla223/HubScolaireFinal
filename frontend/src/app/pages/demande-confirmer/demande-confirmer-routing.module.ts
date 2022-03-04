import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeConfirmerPage } from './demande-confirmer.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeConfirmerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeConfirmerPageRoutingModule {}
