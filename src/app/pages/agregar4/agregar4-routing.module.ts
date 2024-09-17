import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Agregar4Page } from './agregar4.page';

const routes: Routes = [
  {
    path: '',
    component: Agregar4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Agregar4PageRoutingModule {}
