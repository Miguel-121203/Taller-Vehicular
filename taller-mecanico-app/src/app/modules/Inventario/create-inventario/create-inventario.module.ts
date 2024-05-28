import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateInventarioPageRoutingModule } from './create-inventario-routing.module';

import { CreateInventarioPage } from './create-inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateInventarioPageRoutingModule
  ],
  declarations: [CreateInventarioPage]
})
export class CreateInventarioPageModule {}
