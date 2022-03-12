import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilEcolePageRoutingModule } from './edit-profil-ecole-routing.module';

import { EditProfilEcolePage } from './edit-profil-ecole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilEcolePageRoutingModule
  ],
  declarations: [EditProfilEcolePage]
})
export class EditProfilEcolePageModule {}
