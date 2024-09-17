import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Agregar3Page } from './agregar3.page';

const routes: Routes = [
  {
    path: '',
    component: Agregar3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Agregar3PageRoutingModule {}
