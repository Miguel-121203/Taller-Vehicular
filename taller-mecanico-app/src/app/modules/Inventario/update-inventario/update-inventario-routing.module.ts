import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateInventarioPage } from './update-inventario.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateInventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateInventarioPageRoutingModule {}
