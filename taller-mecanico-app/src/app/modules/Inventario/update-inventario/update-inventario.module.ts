import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateInventarioPageRoutingModule } from './update-inventario-routing.module';

import { UpdateInventarioPage } from './update-inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateInventarioPageRoutingModule
  ],
  declarations: [UpdateInventarioPage]
})
export class UpdateInventarioPageModule {}
