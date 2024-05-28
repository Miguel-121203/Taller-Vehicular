import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehiculoPage } from './update-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehiculoPageRoutingModule {}
