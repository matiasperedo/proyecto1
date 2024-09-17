import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CodigoqrPage } from '../codigoqr/codigoqr.page'; 

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'codigoqr',
    component: CodigoqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}