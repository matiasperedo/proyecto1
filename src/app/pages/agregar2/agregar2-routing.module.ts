import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Agregar2Page } from './agregar2.page';

const routes: Routes = [
  {
    path: '',
    component: Agregar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Agregar2PageRoutingModule {}
