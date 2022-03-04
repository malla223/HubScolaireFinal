import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeConfirmerPageRoutingModule } from './demande-confirmer-routing.module';

import { DemandeConfirmerPage } from './demande-confirmer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeConfirmerPageRoutingModule
  ],
  declarations: [DemandeConfirmerPage]
})
export class DemandeConfirmerPageModule {}
