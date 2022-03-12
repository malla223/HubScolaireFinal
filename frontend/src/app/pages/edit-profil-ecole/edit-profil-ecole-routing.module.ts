import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfilEcolePage } from './edit-profil-ecole.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfilEcolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfilEcolePageRoutingModule {}
