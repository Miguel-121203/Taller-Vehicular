import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllUsuariosPage } from './all-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AllUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllUsuariosPageRoutingModule {}
