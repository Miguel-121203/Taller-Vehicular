import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllInventarioPage } from './all-inventario.page';

const routes: Routes = [
  {
    path: '',
    component: AllInventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllInventarioPageRoutingModule {}
