import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttentePage } from './attente.page';

const routes: Routes = [
  {
    path: '',
    component: AttentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentePageRoutingModule {}
