import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllVehiculoPage } from './all-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: AllVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllVehiculoPageRoutingModule {}
