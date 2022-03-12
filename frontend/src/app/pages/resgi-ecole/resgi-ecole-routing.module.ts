import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgiEcolePage } from './resgi-ecole.page';

const routes: Routes = [
  {
    path: '',
    component: ResgiEcolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgiEcolePageRoutingModule {}
