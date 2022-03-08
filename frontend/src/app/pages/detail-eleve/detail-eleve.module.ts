import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailElevePageRoutingModule } from './detail-eleve-routing.module';

import { DetailElevePage } from './detail-eleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailElevePageRoutingModule
  ],
  declarations: [DetailElevePage]
})
export class DetailElevePageModule {}
