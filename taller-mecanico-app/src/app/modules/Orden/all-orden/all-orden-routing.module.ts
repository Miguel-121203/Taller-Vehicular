import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllOrdenPage } from './all-orden.page';

const routes: Routes = [
  {
    path: '',
    component: AllOrdenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllOrdenPageRoutingModule {}
