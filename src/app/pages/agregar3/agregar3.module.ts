import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Agregar3PageRoutingModule } from './agregar3-routing.module';

import { Agregar3Page } from './agregar3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Agregar3PageRoutingModule
  ],
  declarations: [Agregar3Page]
})
export class Agregar3PageModule {}
