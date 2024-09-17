import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Agregar2PageRoutingModule } from './agregar2-routing.module';

import { Agregar2Page } from './agregar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Agregar2PageRoutingModule
  ],
  declarations: [Agregar2Page]
})
export class Agregar2PageModule {}
