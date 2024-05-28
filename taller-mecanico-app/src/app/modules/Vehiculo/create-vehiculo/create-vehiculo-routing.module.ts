import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVehiculoPage } from './create-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: CreateVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateVehiculoPageRoutingModule {}
