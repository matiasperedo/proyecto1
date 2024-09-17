import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Agregar4PageRoutingModule } from './agregar4-routing.module';

import { Agregar4Page } from './agregar4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Agregar4PageRoutingModule
  ],
  declarations: [Agregar4Page]
})
export class Agregar4PageModule {}
