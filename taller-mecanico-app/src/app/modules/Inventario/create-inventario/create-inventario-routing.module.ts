import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateInventarioPage } from './create-inventario.page';

const routes: Routes = [
  {
    path: '',
    component: CreateInventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateInventarioPageRoutingModule {}
