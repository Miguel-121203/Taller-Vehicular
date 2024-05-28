import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrdenPage } from './create-orden.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOrdenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOrdenPageRoutingModule {}
