import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateServiciosPage } from './create-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: CreateServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateServiciosPageRoutingModule {}
