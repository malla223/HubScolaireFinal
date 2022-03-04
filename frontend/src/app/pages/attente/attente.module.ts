import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttentePageRoutingModule } from './attente-routing.module';

import { AttentePage } from './attente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttentePageRoutingModule
  ],
  declarations: [AttentePage]
})
export class AttentePageModule {}
